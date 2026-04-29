import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";
import Anime from "@/models/Anime";
import Manga from "@/models/Manga";
import { DiscoveryAnime, DiscoveryManga } from "@/models/Discovery";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    await dbConnect();
    const { type, id } = await request.json();

    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

    const userId = (session.user as any).id;
    const user = await User.findById(userId);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const isAnime = type === "anime";
    const collection = isAnime ? user.watchlist : user.mangaList;
    
    // Check if already synced
    const existingIndex = isAnime 
      ? user.watchlist.findIndex((item: any) => (typeof item === 'string' ? item : item.animeId) === id)
      : user.mangaList.findIndex((item: any) => item.mangaId === id);

    let isNowSynced = false;

    if (existingIndex === -1) {
      // 1. Ensure the item exists in the main Vault collections
      if (isAnime) {
        let animeRecord = await Anime.findOne({ id });
        if (!animeRecord) {
          // Migrate from DiscoveryAnime
          const discoveryData = await DiscoveryAnime.findOne({ mal_id: parseInt(id) });
          if (!discoveryData) return NextResponse.json({ error: "Artifact not found in Encyclopedia" }, { status: 404 });
          
          animeRecord = new Anime({
            id: id.toString(),
            title: discoveryData.title,
            description: discoveryData.synopsis || "No data available.",
            posterImage: discoveryData.main_picture,
            categories: discoveryData.genres || [],
            trailerUrl: "N/A", // Must not be empty for required: true
            openings: [],
            previews: [],
            hasArchive: false
          });
          await animeRecord.save();
        }
        
        user.watchlist.push({ 
          animeId: id, 
          status: "Queued Artifact", 
          addedAt: new Date() 
        });
      } else {
        let mangaRecord = await Manga.findOne({ id });
        if (!mangaRecord) {
          // Migrate from DiscoveryManga
          const discoveryData = await DiscoveryManga.findOne({ mal_id: parseInt(id) });
          if (!discoveryData) return NextResponse.json({ error: "Artifact not found in Encyclopedia" }, { status: 404 });

          // Map status to valid enum
          const rawStatus = discoveryData.status?.toLowerCase() || "";
          let finalStatus: "Ongoing" | "Completed" | "Hiatus" = "Ongoing";
          if (rawStatus.includes("finished") || rawStatus.includes("completed")) finalStatus = "Completed";
          if (rawStatus.includes("hiatus") || rawStatus.includes("discontinued")) finalStatus = "Hiatus";

          mangaRecord = new Manga({
            id: id.toString(),
            title: discoveryData.title,
            description: discoveryData.synopsis || "No data available.",
            coverImage: discoveryData.main_picture,
            categories: discoveryData.genres || [],
            author: (discoveryData.authors && discoveryData.authors.length > 0) ? discoveryData.authors[0] : "N/A",
            status: finalStatus,
            chapters: []
          });
          await mangaRecord.save();
        }

        user.mangaList.push({
          mangaId: id,
          status: "Plan to Read",
          currentChapter: 1,
          lastReadAt: new Date()
        });
      }
      isNowSynced = true;
    } else {
      // Remove from sync
      if (isAnime) user.watchlist.splice(existingIndex, 1);
      else user.mangaList.splice(existingIndex, 1);
      isNowSynced = false;
    }

    await user.save();
    
    // Purge caches to reflect changes in personal sections
    revalidatePath("/");
    revalidatePath("/manga");
    revalidatePath("/vault");
    revalidatePath("/admin");

    return NextResponse.json({ success: true, isSynced: isNowSynced });

  } catch (error: any) {
    console.error("Sync Error:", error);
    // Write to a local log file for debugging
    const fs = require("fs");
    const path = require("path");
    const logMessage = `[${new Date().toISOString()}] Sync Error: ${error.message}\nStack: ${error.stack}\n\n`;
    fs.appendFileSync(path.join(process.cwd(), "sync_errors.log"), logMessage);
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
