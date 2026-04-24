"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/mongoose";
import Anime from "@/models/Anime";
import Character from "../models/Character";
import Review from "../models/Review";
import { MOCK_ANIME } from "@/data/mockAnime";
import Syndicate from "@/models/Syndicate";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Notification from "@/models/Notification";
import { pusherServer } from "@/lib/pusher";
import mongoose from "mongoose";
import Manga from "@/models/Manga";

export async function getAllAnime() {
  try {
    await dbConnect();
    // We clean up the MongoDB specific fields like _id and __v for the frontend
    const anime = await Anime.find({}).lean();
    if (anime && anime.length > 0) {
      console.log("🔍 DB Anime Previews (First):", anime[0].title, anime[0].previews);
      return JSON.parse(JSON.stringify(anime));
    }
    console.log("📂 Database empty, falling back to mock data");
    return MOCK_ANIME;
  } catch (error) {
    console.error("🌐 Database unreachable, falling back to mock data");
    return MOCK_ANIME;
  }
}

export async function getAnimeById(id: string) {
  try {
    await dbConnect();
    const anime = await Anime.findOne({ id }).lean();
    if (!anime) {
      return MOCK_ANIME.find(a => a.id === id) || null;
    }
    return JSON.parse(JSON.stringify(anime));
  } catch (error) {
    return MOCK_ANIME.find(a => a.id === id) || null;
  }
}

import { getCharactersForAnime as getMockCharacters } from "@/data/characterRegistry";

export async function getCharactersForAnime(animeId: string) {
  try {
    await dbConnect();
    const characters = await Character.find({ animeId }).lean();
    
    // If we have characters in DB, return them
    if (characters && characters.length > 0) {
      return JSON.parse(JSON.stringify(characters));
    }
    
    // If it's a mock anime ID (number or simple string), fall back to mock registry
    // But if it's a real MongoDB ID string or custom ID we forged, and DB is empty, return empty
    const isMockId = !isNaN(Number(animeId)) || ["vinland-saga", "no-game-no-life", "rezero"].includes(animeId);
    if (isMockId) {
      return await getMockCharacters(animeId);
    }
    
    return [];
  } catch (error) {
    return [];
  }
}
export async function getCharacterById(id: string) {
  try {
    await dbConnect();
    console.log(`🔍 LOGGING: Seeking Character Archive ${id}`);
    
    let character;
    if (mongoose.Types.ObjectId.isValid(id)) {
      character = await Character.findById(id).lean();
    } else {
      character = await Character.findOne({ name: id }).lean();
    }
    
    if (!character) {
      console.warn(`⚠️ LOGGING: Character ${id} not found in vault. Searching Mock Registry...`);
      // Search all mock series for this character
      const { CharacterRegistry } = await import("@/data/characterRegistry");
      for (const seriesId in CharacterRegistry) {
        const mockChars = await getMockCharacters(seriesId);
        const mockMatch = mockChars.find(c => c.name === id || (c as any).id === id);
        if (mockMatch) {
          console.log(`✅ LOGGING: Found Mock Match for ${id} in ${seriesId}`);
          return { ...mockMatch, animeId: seriesId, _id: id };
        }
      }
      return null;
    }
    
    console.log(`✅ LOGGING: Character ${character.name} archivated.`);
    return JSON.parse(JSON.stringify(character));
  } catch (error: any) {
    console.error("❌ LOGGING: Character Retrieval Error:", error.message);
    return null;
  }
}

export async function upsertCharacters(animeId: string, characters: any[]) {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return { error: "Administrative privileges required for character archival." };
  }

  try {
    await dbConnect();
    
    console.log(`📑 Archiving ${characters.length} personnel for Anime: ${animeId}`);
    
    // Simplest sync strategy: Purge existing and re-insert
    await Character.deleteMany({ animeId });
    
    if (characters.length > 0) {
      const charactersToInsert = characters.map(char => ({
        ...char,
        animeId
      }));
      await Character.insertMany(charactersToInsert);
    }
    
    return { success: true };
  } catch (error: any) {
    console.error("❌ Character Archival Error:", error);
    return { error: error.message || "Failed to commit personnel registry." };
  }
}

import bcrypt from "bcryptjs";

export async function registerUser(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { error: "Username and password are required" };
  }

  try {
    await dbConnect();
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return { error: "Username already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      role: "user", // Default role
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.error("🌐 DB Auth Failed, registration unavailable");
    return { error: "Authentication service currently unavailable (Offline Mode)" };
  }
}

// Redundant imports removed

export async function toggleWatchlist(animeId: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return { error: "Authentication required" };
  }

  try {
    await dbConnect();
    const userId = (session.user as any).id;
    const user = await User.findById(userId);

    if (!user) {
      return { error: "User not found" };
    }

    // Handle both legacy (string[]) and new (object[]) formats gracefully
    const existingIndex = user.watchlist.findIndex((item: any) => 
      (typeof item === 'string' ? item : item.animeId) === animeId
    );

    if (existingIndex === -1) {
      user.watchlist.push({ 
        animeId, 
        status: "Queued Artifact", 
        addedAt: new Date() 
      });
    } else {
      user.watchlist.splice(existingIndex, 1);
    }

    await user.save();
    return { success: true, inWatchlist: existingIndex === -1 };
  } catch (error) {
    return { error: "Watchlist currently locked (Offline Mode)" };
  }
}

export async function updateWatchlistStatus(animeId: string, status: "Queued Artifact" | "Active Transmission" | "Synchronized") {
  const session = await getServerSession(authOptions);
  if (!session?.user) return { error: "Authentication required" };

  try {
    await dbConnect();
    const userId = (session.user as any).id;
    const user = await User.findById(userId);

    if (!user) return { error: "User not found" };

    const item = user.watchlist.find((item: any) => 
      (typeof item === 'string' ? item : item.animeId) === animeId
    );

    if (item) {
      if (typeof item === 'string') {
        // Migrate legacy entry on the fly
        const idx = user.watchlist.indexOf(item);
        user.watchlist[idx] = { animeId, status, addedAt: new Date() };
      } else {
        item.status = status;
      }
      await user.save();
      return { success: true };
    }
    return { error: "Entry not found in watchlist" };
  } catch (error) {
    return { error: "Update failed" };
  }
}

export async function getUserWatchlist() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return [];

  try {
    await dbConnect();
    const userId = (session.user as any).id;
    const user = await User.findById(userId);
    
    if (!user) return [];

    const animeIds = user.watchlist.map((item: any) => 
      typeof item === 'string' ? item : item.animeId
    );

    const animeList = await Anime.find({ id: { $in: animeIds } }).lean();
    
    // Map status back to anime objects for the UI
    const results = animeList.map(anime => {
      const entry = user.watchlist.find((item: any) => 
        (typeof item === 'string' ? item : item.animeId) === anime.id
      );
      return {
        ...JSON.parse(JSON.stringify(anime)),
        watchlistStatus: typeof entry === 'string' ? "Queued Artifact" : entry?.status || "Queued Artifact"
      };
    });

    return results;
  } catch (error) {
    return []; // Return empty watchlist in offline mode
  }
}

export async function isAnimeInWatchlist(animeId: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return false;

  try {
    await dbConnect();
    const userId = (session.user as any).id;
    const user = await User.findById(userId);

    return user?.watchlist.some((item: any) => 
      (typeof item === 'string' ? item : item.animeId) === animeId
    ) || false;
  } catch (error) {
    return false;
  }
}

export async function upsertAnime(data: any) {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return { error: "Administrative privileges required" };
  }

  console.log("🛠️ UPSERTING ANIME:", data.id, data.title);
  
  try {
    await dbConnect();
    
    // If data.id exists and matches an existing record, update it. Otherwise create.
    let existing = await Anime.findOne({ id: data.id });
    
    if (existing) {
      console.log("📝 Updating existing record:", data.id);
      Object.assign(existing, data);
      await existing.save();
      return { success: true, action: "updated" };
    } else {
      console.log("🆕 Creating new record:", data.id);
      const newAnime = new Anime(data);
      await newAnime.save();
      return { success: true, action: "created" };
    }
  } catch (error: any) {
    console.error("❌ Database Upsert Error:", error);
    // Return specific validation error if available
    const errorMsg = error.message || error.toString();
    return { error: errorMsg };
  }
}

export async function ingestAnimeEpisodes(animeId: string, query: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return { error: "Administrative privileges required" };
  }

  try {
    await dbConnect();
    console.log(`📡 Searching for Anime Artifact: ${query}`);

    // Simulated ingestion from a provider (e.g. Consumet/Gogo)
    // In a real scenario, this would fetch from an API
    const seasons = [
      {
        number: 1,
        episodes: Array.from({ length: 12 }, (_, i) => ({
          number: i + 1,
          title: `Episode ${i + 1}`,
          url: `https://vidsrc.me/embed/anime/${animeId}/1/${i + 1}`
        }))
      }
    ];

    await Anime.findOneAndUpdate(
      { id: animeId },
      { seasons, hasArchive: true },
      { upsert: true }
    );

    return { success: true, seasons: seasons.length, episodes: seasons[0].episodes.length };
  } catch (error: any) {
    console.error("❌ Anime Ingestion Error:", error);
    return { error: error.message };
  }
}

export async function deleteAnime(animeId: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return { error: "Administrative privileges required" };
  }

  try {
    await dbConnect();
    await Anime.deleteOne({ id: animeId });
    return { success: true };
  } catch (error) {
    return { error: "Delete action failed (Offline Mode)" };
  }
}

export async function updateUserProfile(data: { username?: string, password?: string }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return { error: "Authentication required" };
  }

  try {
    await dbConnect();
    const userId = (session.user as any).id;
    const user = await User.findById(userId);

    if (!user) {
      return { error: "User not found" };
    }

    if (data.username && data.username !== user.username) {
      const existing = await User.findOne({ username: data.username });
      if (existing) {
        return { error: "Username already taken" };
      }
      user.username = data.username;
    }

    if (data.password && data.password.trim() !== "") {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      user.password = hashedPassword;
    }

    await user.save();
    return { success: true };
  } catch (error: any) {
    console.error("❌ Profile Update Error:", error);
    return { error: error.message || "Failed to update profile (Offline Mode)" };
  }
}

export async function uploadProfilePicture(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    console.error("❌ Profile Upload: Unauthorized access attempt");
    return { error: "Authentication required" };
  }

  const file = formData.get("file") as File;
  if (!file) {
    console.warn("⚠️ Profile Upload: No file provided");
    return { error: "No file provided" };
  }

  console.log(`🚀 Profile Upload: Starting for user ${session.user.name} (${file.name}, ${file.size} bytes)`);

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    console.warn(`⚠️ Profile Upload: Unsupported type ${file.type}`);
    return { error: "Unsupported file type (JPEG, PNG, WEBP only)" };
  }

  try {
    await dbConnect();
    const userId = (session.user as any).id;
    
    // Read file as buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Convert to Base64 String
    const base64String = buffer.toString('base64');
    const publicPath = `data:${file.type};base64,${base64String}`;
    
    console.log(`💾 Profile Upload: Forged Base64 string for user ${userId}`);

    // Update user record
    const user = await User.findById(userId);
    if (!user) {
      console.error("❌ Profile Upload: User record not found in DB");
      return { error: "User record lost from network" };
    }

    user.profileImage = publicPath;
    await user.save();

    console.log("✅ Profile Upload: Successfully forged and committed to DB");
    return { success: true, profileImage: publicPath };
  } catch (error: any) {
    console.error("❌ Profile Upload Error:", error);
    return { error: "Transmission failed. File rejected." };
  }
}

export async function uploadCharacterImage(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return { error: "Administrative clearance required for biometric archival." };
  }

  const file = formData.get("file") as File;
  if (!file) {
    return { error: "No biometric data provided." };
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Convert to Base64 String
    const base64String = buffer.toString('base64');
    const publicPath = `data:${file.type};base64,${base64String}`;

    console.log(`💾 Character Upload: Forge successful as Base64 string`);

    return { success: true, url: publicPath };
  } catch (error) {
    console.error("❌ Character Upload Error:", error);
    return { error: "Biometric forgery failed. Signal lost." };
  }
}

export async function updateCharacterImageInDB(characterId: string, formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return { error: "Unauthorized access detected." };
  }

  try {
    const uploadResult = await uploadCharacterImage(formData);
    if (!uploadResult.success || !uploadResult.url) {
      return { error: uploadResult.error || "Failed to process image." };
    }

    await dbConnect();
    await Character.findByIdAndUpdate(characterId, { image: uploadResult.url });
    
    revalidatePath(`/characters/${characterId}`);
    return { success: true, url: uploadResult.url };
  } catch (error) {
    console.error("❌ Character Inline Update Error:", error);
    return { error: "Database transaction failed." };
  }
}

export async function submitArchiveLog(animeId: string, data: { content: string, rating: number }) {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return { error: "Administrative privileges required for Archive Logs during Beta." };
  }

  try {
    await dbConnect();
    const userId = (session.user as any).id;

    const newReview = new Review({
      userId,
      animeId,
      content: data.content,
      rating: data.rating,
      isPublic: true // Force public for testing
    });

    await newReview.save();

    // --- PULSE NOTIFICATION LOGIC ---
    // Identify users who have this anime in their watchlist
    const targetedUsers = await User.find({
      "watchlist.animeId": animeId,
      _id: { $ne: userId } // Don't notify the author
    }).select("_id").lean();

    if (targetedUsers.length > 0) {
      const anime = await Anime.findOne({ id: animeId }).select("title").lean();
      const archivist = await User.findById(userId).select("username").lean();

      const notificationData = targetedUsers.map(u => ({
        recipientId: u._id,
        title: "PULSE DETECTED",
        message: `High-Level Archivist ${archivist?.username} committed a log to ${anime?.title}`,
        type: "archival_log",
        animeId: animeId
      }));

      // Persist in DB
      await Notification.insertMany(notificationData);

      // Trigger Real-Time Pulse via Pusher
      try {
        for (const user of targetedUsers) {
          await pusherServer.trigger(`user-${user._id}-notifications`, "pulse-ping", {
            title: "PULSE DETECTED",
            message: `New Archival Intel: ${anime?.title}`,
            animeId: animeId
          });
        }
      } catch (pusherErr) {
        console.warn("⚠️ Pusher Transmission Failed (Credentials likely missing):", pusherErr);
      }
    }

    // Increment Trust Level (User Reputation)
    await User.findByIdAndUpdate(userId, { $inc: { trustLevel: 2 } });

    return { success: true };
  } catch (error: any) {
    console.error("❌ Link Submission Error:", error);
    return { error: error.message || "Archive linkage failed." };
  }
}

export async function getArchiveLogs(animeId: string) {
  try {
    await dbConnect();
    // Fetch reviews and populate user data
    const reviews = await Review.find({ animeId })
      .populate("userId", "username profileImage trustLevel")
      .sort({ createdAt: -1 })
      .lean();
    
    return JSON.parse(JSON.stringify(reviews));
  } catch (error) {
    console.error("❌ Log Retrieval Error:", error);
    return [];
  }
}

export async function getEngagementAnalytics() {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return { error: "Administrative privileges required for Leyline Access." };
  }

  try {
    await dbConnect();

    // 1. Calculate Watchlist Pulse (How many users have each anime)
    const watchlistStats = await User.aggregate([
      { $unwind: "$watchlist" },
      { $group: { _id: "$watchlist", count: { $sum: 1 } } }
    ]);

    // 2. Calculate Log Volume (Reviews per anime)
    const reviewStats = await Review.aggregate([
      { $group: { _id: "$animeId", count: { $sum: 1 } } }
    ]);

    // 3. Fetch All Anime for Mapping
    const allAnime = await Anime.find({}).lean();
    
    // 4. Synthesize Engagement Decibel (ED) Score
    const engagementData = allAnime.map(anime => {
      const wStats = watchlistStats.find(s => s._id === anime.id);
      const rStats = reviewStats.find(s => s._id === anime.id);
      
      const wCount = wStats ? wStats.count : 0;
      const rCount = rStats ? rStats.count : 0;
      
      // Algorithm: ED = (Watchlist * 1.5) + (Reviews * 2.5)
      const edScore = (wCount * 1.5) + (rCount * 2.5);
      
      return {
        id: anime.id,
        title: anime.title,
        watchlistCount: wCount,
        reviewCount: rCount,
        edScore: Math.round(edScore * 10) / 10
      };
    });

    // 5. Sort by ED Score (Trending Top 5)
    const trending = [...engagementData]
      .sort((a, b) => b.edScore - a.edScore)
      .slice(0, 5);

    // 6. Fetch Recent Signals (Latest activity)
    const recentReviews = await Review.find({})
      .populate("userId", "username profileImage")
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    const signals = recentReviews.map(r => ({
      id: (r as any)._id.toString(),
      user: (r.userId as any).username,
      action: "Committed Archive Log",
      target: r.animeId,
      timestamp: r.createdAt
    }));

    return {
      success: true,
      trending,
      signals,
      totalUsers: await User.countDocuments(),
      totalLogs: await Review.countDocuments(),
      totalManga: await Manga.countDocuments()
    };
  } catch (error: any) {
    console.error("❌ Leyline Analysis Error:", error);
    return { error: "Failed to sync with global engagement leylines." };
  }
}

export async function getSyndicates() {
  try {
    await dbConnect();
    
    // Auto-seed if no syndicates exist
    const count = await Syndicate.countDocuments();
    if (count === 0) {
      await seedSyndicates();
    }

    const syndicates = await Syndicate.find({}).populate("members", "trustLevel").lean();
    
    // Calculate real-time Power Level (sum of member trust)
    const processed = syndicates.map(s => {
      const pLevel = ((s.members as any[]) || []).reduce((acc, member) => acc + (member.trustLevel || 1), 0);
      return {
        ...JSON.parse(JSON.stringify(s)),
        powerLevel: pLevel
      };
    });

    return JSON.parse(JSON.stringify(processed));
  } catch (error) {
    console.error("❌ Syndicate Retrieval Error:", error);
    return [];
  }
}

export async function joinSyndicate(slug: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return { error: "Authentication required" };

  try {
    await dbConnect();
    const userId = (session.user as any).id;
    
    const syndicate = await Syndicate.findOne({ slug });
    if (!syndicate) return { error: "Syndicate not found" };

    const memberIds = syndicate.members.map((id: any) => id.toString());
    if (memberIds.includes(userId)) {
      return { error: "Already a member of this Syndicate" };
    }

    syndicate.members.push(userId);
    await syndicate.save();

    // Reward the user for joining a faction
    await User.findByIdAndUpdate(userId, { $inc: { trustLevel: 5 } });

    return { success: true };
  } catch (error) {
    return { error: "Joining action failed" };
  }
}

export async function leaveSyndicate(slug: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return { error: "Authentication required" };

  try {
    await dbConnect();
    const userId = (session.user as any).id;
    
    const syndicate = await Syndicate.findOne({ slug });
    if (!syndicate) return { error: "Syndicate not found" };

    syndicate.members = syndicate.members.filter((id: any) => id.toString() !== userId);
    await syndicate.save();

    return { success: true };
  } catch (error) {
    return { error: "Leaving action failed" };
  }
}

async function seedSyndicates() {
  const initialGroups = [
    {
      name: "The Seinen Syndicate",
      slug: "seinen-syndicate",
      description: "Dedicated to the complex architecture of Seinen masterpieces. Focus: Berserk, Vinland Saga, Monster.",
      genre: "Seinen",
      accentColor: "#dc2626",
      iconType: "ShieldAlert"
    },
    {
      name: "Cyberpunk Cell",
      slug: "cyberpunk-cell",
      description: "Analyzing the high-tech, low-life fragments of dystopian futures. Focus: Ghost in the Shell, Akira, Edgerunners.",
      genre: "Cyberpunk",
      accentColor: "#06b6d4",
      iconType: "Zap"
    },
    {
      name: "Shonen Front",
      slug: "shonen-front",
      description: "Archive of the battle-driven spirits and legendary growth artifacts. Focus: One Piece, Naruto, Bleach.",
      genre: "Shonen",
      accentColor: "#f97316",
      iconType: "Flame"
    },
    {
      name: "Psychological Node",
      slug: "psychological-node",
      description: "Deciphering the neural pathways and mind-bending distortions of the human psyche.",
      genre: "Psychological",
      accentColor: "#8b5cf6",
      iconType: "Brain"
    }
  ];

  try {
    await Syndicate.insertMany(initialGroups);
    console.log("✅ Seeded Legendary Syndicates");
  } catch (e) {
    console.error("❌ Seeding failed:", e);
  }
}

/**
 * Commits a binary artifact (image/file) to the local archival storage.
 */
export async function uploadArchiveAsset(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) return { error: "No artifact detected." };

    // Sanitization & Uniqueness Logic
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Convert to Base64 String
    const base64String = buffer.toString('base64');
    const dataUrl = `data:${file.type};base64,${base64String}`;
    
    return { 
      success: true, 
      url: dataUrl 
    };
  } catch (error) {
    console.error("❌ Artifact Commit Failed:", error);
    return { error: "Leyline Transmission Failed: Unable to commit artifact." };
  }
}

// --- ADVANCED CARD PROTOCOLS ---

/**
 * Tracks an interaction with an anime card (view/hover)
 */
export async function trackCardInteraction(animeId: string) {
  try {
    await dbConnect();
    await Anime.findOneAndUpdate(
      { id: animeId },
      { $inc: { "telemetry.views": 1 } }
    );
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

/**
 * Generates a personalized affinity score for every anime based on the user's profile
 */
export async function getPersonalizedAffinities() {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const userId = (session?.user as any)?.id;

    const allAnime = await Anime.find({}).lean();
    
    // If guest, calculate global popularity sync instead
    if (!userId) {
      const affinities: Record<string, number> = {};
      const maxViews = Math.max(...allAnime.map((a: any) => a.telemetry?.views || 1));
      
      allAnime.forEach((a: any) => {
        const views = a.telemetry?.views || 1;
        // Base popularity score (40-99%)
        affinities[a.id] = Math.floor((views / maxViews) * 59) + 40;
      });
      return affinities;
    }

    const user = await User.findById(userId).lean();
    if (!user) {
      return {};
    }

    // 1. Forge the user's 'Genre Soul' (Weighted Genre Profile)
    const genreSoul: Record<string, number> = {};
    const statusWeights: Record<string, number> = {
      "Active Transmission": 3,
      "Synchronized": 2,
      "Queued Artifact": 1
    };

    if (user.watchlist && user.watchlist.length > 0) {
      for (const entry of user.watchlist) {
        const animeObj = allAnime.find((a: any) => a.id === entry.animeId);
        if (animeObj && animeObj.categories) {
          const weight = statusWeights[entry.status] || 1;
          animeObj.categories.forEach((cat: string) => {
            genreSoul[cat] = (genreSoul[cat] || 0) + weight;
          });
        }
      }
    }

    // Incorporate Manga 'Genre Soul' fragments
    if (user.mangaList && user.mangaList.length > 0) {
      const allManga = await Manga.find({}).lean();
      const mangaStatusWeights: Record<string, number> = {
        "Reading": 3,
        "Completed": 2,
        "Plan to Read": 1,
        "Dropped": 0.5
      };

      for (const entry of user.mangaList) {
        const mangaObj = allManga.find((m: any) => m.id === entry.mangaId);
        if (mangaObj && mangaObj.categories) {
          const weight = mangaStatusWeights[entry.status] || 1;
          mangaObj.categories.forEach((cat: string) => {
            genreSoul[cat] = (genreSoul[cat] || 0) + weight;
          });
        }
      }
    }

    // 2. Calculate Affinity for all anime
    const finalAffinities: Record<string, number> = {};
    const soulTotal = Object.values(genreSoul).reduce((a, b) => a + b, 0);

    if (allAnime && allAnime.length > 0) {
      allAnime.forEach((anime: any) => {
        let score = 0;
        if (anime.categories) {
          anime.categories.forEach((cat: string) => {
            if (genreSoul[cat]) {
              score += genreSoul[cat];
            }
          });
        }

        // Normalize to a 0-100% Sync Rate, with a healthy baseline (min 40%)
        const syncPercentage = soulTotal > 0 ? (score / soulTotal) * 100 : 50;
        finalAffinities[anime.id] = Math.min(Math.floor(syncPercentage + 40), 99); 
      });
    }

    return finalAffinities;
  } catch (error) {
    console.error("Affinity calculation failed:", error);
    return {};
  }
}

/**
 * Generates an AI Oracle Forge insight (Glimpse) for an anime. 
 * This would typically use Gemini, but here we provide a high-fidelity archival fallback.
 */
export async function generateGlimpse(animeId: string) {
  try {
    await dbConnect();
    const anime = await Anime.findOne({ id: animeId });
    if (!anime) return { error: "Fragment not found" };

    if (anime.glimpse) return { glimpse: anime.glimpse };

    // Archetype-based generation for immediate high-fidelity feel
    const insights = [
      `A neural distortion of identity and existence. Reality is the first casualty.`,
      `The architect of your own destruction lies within these archives.`,
      `A visual transmission of unbridled kinetic energy and primal growth.`,
      `Archive of a broken world where code and blood are indistinguishable.`,
      `A strategic descent into the darkest corridors of the human psyche.`
    ];

    const randomGlimpse = insights[Math.floor(Math.random() * insights.length)];
    anime.glimpse = randomGlimpse;
    await anime.save();

    return { glimpse: randomGlimpse };
  } catch (error) {
    return { error: "Oracle fail" };
  }
}
export async function getNotifications() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return [];

  try {
    await dbConnect();
    const userId = (session.user as any).id;
    const notifications = await Notification.find({ recipientId: userId })
      .sort({ createdAt: -1 })
      .limit(20)
      .lean();
    
    return JSON.parse(JSON.stringify(notifications));
  } catch (error) {
    console.error("❌ Notification Retrieval Failure:", error);
    return [];
  }
}

export async function markNotificationRead(notificationId: string) {
  try {
    await dbConnect();
    await Notification.findByIdAndUpdate(notificationId, { read: true });
    return { success: true };
  } catch (error) {
    return { error: "Failed to update notification status." };
  }
}
