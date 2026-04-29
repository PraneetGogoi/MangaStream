"use server";

import dbConnect from "@/lib/mongoose";
import Manga from "@/models/Manga";
import User from "@/models/User";
import fs from "fs";
import path from "path";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { pusherServer } from "@/lib/pusher";
import Notification from "@/models/Notification";
import { MOCK_MANGA } from "@/data/mockManga";
import { searchManga, getMangaChapters, getChapterPages } from "@/lib/mangadex";

export async function getAllManga() {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    // Admin View: See everything
    if (session?.user && (session.user as any).role === "admin") {
      const manga = await Manga.find({}, { "chapters.pages": 0 }).lean();
      return JSON.parse(JSON.stringify(manga));
    }

    // Regular User View: See only synced items
    if (session?.user) {
      const userId = (session.user as any).id;
      const user = await User.findById(userId).lean();
      if (user && user.mangaList && user.mangaList.length > 0) {
        const mangaIds = user.mangaList.map((item: any) => item.mangaId);
        const manga = await Manga.find({ id: { $in: mangaIds } }, { "chapters.pages": 0 }).lean();
        return JSON.parse(JSON.stringify(manga));
      }
      return []; // Empty for regular users with no syncs
    }

    // Unauthenticated: Empty
    return [];
  } catch (error) {
    console.error("❌ Manga Retrieval Error:", error);
    return [];
  }
}

export async function getMangaChapterPages(mangaId: string, chapterId: string, mangaTitle?: string) {
  try {
    await dbConnect();
    
    // Try finding by ID first
    let manga = await Manga.findOne({ 
      $or: [{ id: mangaId }, { _id: mangaId.length === 24 ? mangaId : undefined }] 
    }).lean();

    // Fallback to title if provided and ID failed
    if (!manga && mangaTitle) {
      manga = await Manga.findOne({ title: mangaTitle }).lean();
    }
    
    // DEBUG LOGGING
    const logPath = path.join(process.cwd(), "archival_debug.log");
    const timestamp = new Date().toISOString();
    
    if (!manga) {
      fs.appendFileSync(logPath, `[${timestamp}] FAIL: Manga not found. ID=${mangaId}, Title=${mangaTitle}\n`);
    } else {
      const chapter = (manga as any).chapters.find((c: any) => c.id === chapterId);
      const pageCount = chapter?.pages?.length || 0;
      fs.appendFileSync(logPath, `[${timestamp}] SUCCESS: Found Manga ${manga.title}. Chapter=${chapterId}, Pages=${pageCount}\n`);
      return chapter?.pages || [];
    }
    return [];
  } catch (error) {
    console.error("❌ Pages Retrieval Error:", error);
    return [];
  }
}

export async function getMangaById(id: string) {
  try {
    await dbConnect();
    const manga = await Manga.findOne({ id }).lean();
    if (!manga) return MOCK_MANGA.find(m => m.id === id) || null;
    return JSON.parse(JSON.stringify(manga));
  } catch (error) {
    return MOCK_MANGA.find(m => m.id === id) || null;
  }
}

export async function updateMangaReadingStatus(mangaId: string, status: string, chapter: number = 1) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return { error: "Authentication required" };

  try {
    await dbConnect();
    const userId = (session.user as any).id;
    const user = await User.findById(userId);

    if (!user) return { error: "User not found" };

    const existingIndex = user.mangaList.findIndex((item: any) => item.mangaId === mangaId);

    if (existingIndex === -1) {
      user.mangaList.push({
        mangaId,
        status: status as any,
        currentChapter: chapter,
        lastReadAt: new Date()
      });
    } else {
      user.mangaList[existingIndex].status = status as any;
      user.mangaList[existingIndex].currentChapter = chapter;
      user.mangaList[existingIndex].lastReadAt = new Date();
    }

    await user.save();
    
    // Update Manga telemetry
    await Manga.findOneAndUpdate({ id: mangaId }, { $inc: { "telemetry.libraryAdds": existingIndex === -1 ? 1 : 0 } });

    return { success: true };
  } catch (error) {
    return { error: "Failed to update manga status" };
  }
}

export async function getUserMangaList() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return [];

  try {
    await dbConnect();
    const userId = (session.user as any).id;
    const user = await User.findById(userId);
    
    if (!user || !user.mangaList) return [];

    const mangaIds = user.mangaList.map((item: any) => item.mangaId);
    const mangaData = await Manga.find({ id: { $in: mangaIds } }).lean();

    return mangaData.map(m => {
      const entry = user.mangaList.find((item: any) => item.mangaId === m.id);
      return {
        ...JSON.parse(JSON.stringify(m)),
        readingStatus: entry?.status,
        currentChapter: entry?.currentChapter
      };
    });
  } catch (error) {
    return [];
  }
}

export async function upsertManga(data: any) {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return { error: "Administrative privileges required" };
  }

  try {
    await dbConnect();
    
    let existing = await Manga.findOne({ id: data.id });
    const isNew = !existing;

    if (existing) {
      Object.assign(existing, data);
      await existing.save();
    } else {
      existing = new Manga(data);
      await existing.save();
    }

    // --- PULSE NOTIFICATION FOR NEW CHAPTERS ---
    // If chapters were added, notify users who have this manga in their list
    if (data.chapters && data.chapters.length > (existing.chapters?.length || 0)) {
      const newChapter = data.chapters[data.chapters.length - 1];
      
      const targetedUsers = await User.find({
        "mangaList.mangaId": data.id
      }).select("_id").lean();

      if (targetedUsers.length > 0) {
        const notifications = targetedUsers.map(u => ({
          recipientId: u._id,
          title: "MANGA PULSE",
          message: `New Chapter released for ${data.title}: ${newChapter.title}`,
          type: "manga_update",
          mangaId: data.id
        }));

        await Notification.insertMany(notifications);

        // Real-time trigger
        try {
          for (const user of targetedUsers) {
            await pusherServer.trigger(`user-${user._id}-notifications`, "pulse-ping", {
              title: "MANGA PULSE",
              message: `New Chapter: ${data.title}`,
              mangaId: data.id
            });
          }
        } catch (err) {
          console.warn("Pusher failed for manga update");
        }
      }
    }

    return { success: true, action: isNew ? "created" : "updated" };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function searchMangaVault(query: string) {
  try {
    return await searchManga(query);
  } catch (error) {
    return [];
  }
}

export async function ingestMangaFromDex(dexId: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return { error: "Administrative clearance required" };
  }

  try {
    await dbConnect();
    
    // 1. Get Metadata
    const response = await fetch(`https://api.mangadex.org/manga/${dexId}?includes[]=cover_art`);
    const dexData = await response.json();
    const m = dexData.data;
    
    const coverRel = m.relationships.find((r: any) => r.type === "cover_art");
    const coverFileName = coverRel?.attributes?.fileName;

    const mangaMeta = {
      id: m.id,
      title: m.attributes.title.en || Object.values(m.attributes.title)[0],
      author: "Unknown Artist", // Dex authors are relationships, keeping simple for now
      description: m.attributes.description.en || "",
      coverImage: coverFileName ? `https://uploads.mangadex.org/covers/${m.id}/${coverFileName}` : null,
      categories: m.attributes.tags.map((t: any) => t.attributes.name.en).slice(0, 5),
      status: m.attributes.status === "ongoing" ? "Ongoing" : "Completed",
      chapters: [] as any[]
    };

    // 2. Get Chapters (Last 5 for space/performance demo)
    const chaptersData = await getMangaChapters(m.id);
    const topChapters = chaptersData.slice(-5);

    for (const ch of topChapters) {
      const pages = await getChapterPages(ch.id);
      mangaMeta.chapters.push({
        id: ch.id,
        title: ch.title,
        pages: pages
      });
    }

    // 3. Upsert
    const result = await upsertManga(mangaMeta);
    return { success: true, manga: mangaMeta.title, chaptersCount: mangaMeta.chapters.length };

  } catch (error: any) {
    console.error("Ingestion Error:", error);
    return { error: error.message };
  }
}
