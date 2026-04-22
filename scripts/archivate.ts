import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import dbConnect from "../src/lib/mongoose";
import mongoose from "mongoose";
import Manga from "../src/models/Manga";
import { getMangaChapters, getChapterPages } from "../src/lib/mangadex";

const MANGA_TO_ARCHIVE = [
  { id: "801513ba-a712-49c4-b6aa-f47db655a910", title: "Berserk" },
  { id: "a7774051-dc44-46f5-b19b-27123c751995", title: "Chainsaw Man" },
  { id: "2f768b5a-0639-4447-bc8a-f88a24cf6344", title: "Monster" }
];

async function archivate() {
  console.log("🚀 STARTING VAULT ARCHIVAL SEQUENCE...");
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ MONGODB_URI NOT FOUND IN ENV.");
    process.exit(1);
  }
  
  await mongoose.connect(uri);
  console.log("✅ CONNECTED TO ATLAS VAULT.");

  for (const item of MANGA_TO_ARCHIVE) {
    console.log(`\n📦 SEARCHING & ARCHIVING: ${item.title}...`);
    
    try {
      // 1. Search for ID
      const searchRes = await fetch(`https://api.mangadex.org/manga?title=${encodeURIComponent(item.title)}&limit=1`, {
        headers: { "User-Agent": "MangaStreamArchiver/1.0.0" }
      });
      const searchData = await searchRes.json() as any;
      if (!searchData.data || searchData.data.length === 0) {
        console.error(`   - Could not find ${item.title} on Dex Archive.`);
        continue;
      }
      const m = searchData.data[0];
      const dexId = m.id;
      console.log(`   - Found ID: ${dexId}`);

      // 2. Fetch Meta with cover
      const res = await fetch(`https://api.mangadex.org/manga/${dexId}?includes[]=cover_art`, {
        headers: { "User-Agent": "MangaStreamArchiver/1.0.0" }
      });
      const dexData = await res.json() as any;
      const fullM = dexData.data;
      
      const coverRel = fullM.relationships.find((r: any) => r.type === "cover_art");
      const coverFileName = coverRel?.attributes?.fileName;

      const mangaMeta = {
        id: dexId,
        title: fullM.attributes.title.en || Object.values(fullM.attributes.title)[0],
        author: "Archival Record",
        description: fullM.attributes.description.en || "No description archived.",
        coverImage: coverFileName ? `https://uploads.mangadex.org/covers/${dexId}/${coverFileName}` : null,
        categories: fullM.attributes.tags.map((t: any) => t.attributes.name.en).slice(0, 5),
        status: fullM.attributes.status === "ongoing" ? "Ongoing" : "Completed",
        chapters: [] as any[]
      };

      // 3. Fetch Chapters
      console.log(`   - Syncing Chapter Feeds...`);
      const chaptersData = await getMangaChapters(dexId);
      const topChapters = chaptersData.slice(0, 3); // Get first 3 chapters

      for (const ch of topChapters) {
        console.log(`   - Extracting Pages: ${ch.title}...`);
        const pages = await getChapterPages(ch.id);
        mangaMeta.chapters.push({
          id: ch.id,
          title: ch.title,
          pages: pages
        });
      }

      await Manga.findOneAndUpdate({ id: mangaMeta.id }, mangaMeta, { upsert: true, new: true });
      console.log(`✅ ${item.title} ARCHIVATED SUCCESSFULLY!`);

    } catch (err) {
      console.error(`❌ FAILED TO ARCHIVATE ${item.title}:`, err);
    }
  }

  console.log("\n✨ VAULT SYNC COMPLETE.");
  process.exit(0);
}

archivate();
