"use server";

import dbConnect from "@/lib/mongoose";
import Anime from "@/models/Anime";
import Character from "../models/Character";
import Review from "../models/Review";
import { MOCK_ANIME } from "@/data/mockAnime";
import fs from "fs/promises";
import path from "path";

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

import User from "@/models/User";
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

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

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

    const index = user.watchlist.indexOf(animeId);
    if (index === -1) {
      user.watchlist.push(animeId);
    } else {
      user.watchlist.splice(index, 1);
    }

    await user.save();
    return { success: true, inWatchlist: index === -1 };
  } catch (error) {
    return { error: "Watchlist currently locked (Offline Mode)" };
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

    const anime = await Anime.find({ id: { $in: user.watchlist } }).lean();
    return JSON.parse(JSON.stringify(anime));
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

    return user?.watchlist.includes(animeId) || false;
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
    
    // Create directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), "public", "uploads", "profile-pics");
    try {
      await fs.mkdir(uploadDir, { recursive: true });
    } catch (e) {
      console.warn("📂 Profile Upload: Directory already exists or creation skipped");
    }
    
    // Prepare filename
    const fileExtension = file.type.split("/")[1];
    const filename = `profile-${userId}-${Date.now()}.${fileExtension}`;
    const filePath = path.join(uploadDir, filename);
    const publicPath = `/uploads/profile-pics/${filename}`;

    // Read file as buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Write to disk
    console.log(`💾 Profile Upload: Writing to ${filePath}`);
    await fs.writeFile(filePath, buffer);

    // Update user record
    const user = await User.findById(userId);
    if (!user) {
      console.error("❌ Profile Upload: User record not found in DB");
      return { error: "User record lost from network" };
    }

    // Delete old picture if exists
    if (user.profileImage && user.profileImage.startsWith("/uploads")) {
      const oldPath = path.join(process.cwd(), "public", user.profileImage);
      try {
        await fs.unlink(oldPath);
        console.log(`♻️ Profile Upload: Purged old artifact ${oldPath}`);
      } catch (e) {
        // Ignore if file doesn't exist
      }
    }

    user.profileImage = publicPath;
    await user.save();

    console.log("✅ Profile Upload: Successfully forged and committed to DB");
    return { success: true, profileImage: publicPath };
  } catch (error: any) {
    console.error("❌ Profile Upload: Fatal System Error:", error.message);
    return { error: `Forgery service failure: ${error.message}` };
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
