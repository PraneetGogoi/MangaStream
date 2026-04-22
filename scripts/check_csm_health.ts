import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import dbConnect from "../src/lib/mongoose";
import Manga from "../src/models/Manga";

async function checkCSM() {
  await dbConnect();
  const csm = await Manga.findOne({ title: /Chainsaw Man/i }).lean();
  if (!csm) {
    console.log("CSM not found");
    process.exit(1);
  }

  console.log(`Title: ${csm.title}`);
  console.log(`Total Chapters: ${csm.chapters.length}`);
  
  const chaptersWithPages = csm.chapters.filter((c: any) => c.pages && c.pages.length > 0);
  console.log(`Chapters with pages: ${chaptersWithPages.length}`);
  
  if (csm.chapters.length > 0) {
    console.log(`Chapter 1 Page Count: ${csm.chapters[0].pages?.length || 0}`);
    console.log(`Chapter 107 Page Count: ${csm.chapters[csm.chapters.length - 1].pages?.length || 0}`);
  }

  // Check total size estimate
  const size = JSON.stringify(csm).length;
  console.log(`Estimated Document Size: ${(size / 1024 / 1024).toFixed(2)} MB`);

  process.exit(0);
}

checkCSM();
