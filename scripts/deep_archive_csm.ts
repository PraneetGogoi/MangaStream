import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import dbConnect from "../src/lib/mongoose";
import mongoose from "mongoose";
import Manga from "../src/models/Manga";
import { getChapterPages } from "../src/lib/mangadex";

const BASE_URL = "https://api.mangadex.org";
const MANGA_ID = "a77742b1-befd-49a4-bff5-1ad4e6b0ef7b"; // Chainsaw Man ID

async function getFullFeed(mangaId: string) {
  let allChapters: any[] = [];
  let offset = 0;
  let total = 1;

  while (offset < total) {
    console.log(`   - Fetching Chapter Feed (Offset: ${offset})...`);
    const response = await fetch(`${BASE_URL}/manga/${mangaId}/feed?translatedLanguage[]=en&limit=100&order[chapter]=asc&offset=${offset}`, {
      headers: { "User-Agent": "MangaStreamDeepArchiver/1.0.0" }
    });
    const data = await response.json() as any;
    
    total = data.total;
    allChapters = [...allChapters, ...data.data];
    offset += 100;
  }

  return allChapters.map((c: any) => ({
    id: c.id,
    chapter: c.attributes.chapter,
    title: c.attributes.title || `Chapter ${c.attributes.chapter}`
  }));
}

async function deepArchive() {
  console.log("🔥 INITIATING DEEP ARCHIVAL: CHAINSAW MAN");
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ MONGODB_URI NOT FOUND.");
    process.exit(1);
  }
  
  await mongoose.connect(uri);
  console.log("✅ CONNECTED TO ATLAS VAULT.");

  try {
    // 0. Clean Slate
    console.log("🧹 Wiping Stale Records...");
    await Manga.deleteMany({ title: /Chainsaw Man/i });
    console.log("✅ VAULT PURGED.");

    // 1. Get Meta
    console.log("📦 Fetching Metadata...");
    const res = await fetch(`${BASE_URL}/manga/${MANGA_ID}?includes[]=cover_art`, {
      headers: { "User-Agent": "MangaStreamDeepArchiver/1.0.0" }
    });
    const dexData = await res.json() as any;
    const m = dexData.data;
    
    const coverRel = m.relationships.find((r: any) => r.type === "cover_art");
    const coverFileName = coverRel?.attributes?.fileName;

    const mangaMeta = {
      id: MANGA_ID,
      title: m.attributes.title.en || Object.values(m.attributes.title)[0],
      author: "Tatsuki Fujimoto",
      description: m.attributes.description.en || "Archived description.",
      coverImage: coverFileName ? `https://uploads.mangadex.org/covers/${MANGA_ID}/${coverFileName}` : "",
      categories: m.attributes.tags.map((t: any) => t.attributes.name.en).slice(0, 10),
      status: "Ongoing",
      chapters: [] as any[]
    };

    // 2. Get FULL Feed
    console.log("📂 Retrieving Full Chapter Ledger...");
    const allChapters = await getFullFeed(MANGA_ID);
    console.log(`📑 Total Chapters Detected: ${allChapters.length}`);

    // 3. Sequential Page Extraction (Rate Limited Friendly)
    for (let i = 0; i < allChapters.length; i++) {
      const ch = allChapters[i];
      process.stdout.write(`   [${i+1}/${allChapters.length}] Extracting: ${ch.title}... `);
      
      try {
        const pages = await getChapterPages(ch.id);
        mangaMeta.chapters.push({
          id: ch.id,
          title: ch.title,
          pages: pages,
          releaseDate: new Date()
        });
        console.log("DONE");
      } catch (err) {
        console.log("FAILED (Skipping)");
      }

      // Small delay to prevent hitting MangaDex rate limits too hard
      if (i % 5 === 0) await new Promise(r => setTimeout(r, 500));
    }

    console.log("\n💾 Commit To Vault...");
    await Manga.findOneAndUpdate({ id: MANGA_ID }, mangaMeta, { upsert: true, returnDocument: 'after' });
    console.log("🏁 DEEP ARCHIVAL COMPLETE: CHAINSAW MAN IS FULLY SYNCED.");

  } catch (err) {
    console.error("❌ CRITICAL ARCHIVAL FAILURE:", err);
  }

  process.exit(0);
}

deepArchive();
