import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import dbConnect from "../src/lib/mongoose";
import Manga from "../src/models/Manga";

async function checkPages() {
  await dbConnect();
  const csm = await Manga.findOne({ title: /Chainsaw Man/i });
  if (!csm) {
    console.log("Chainsaw Man not found.");
    process.exit(1);
  }

  console.log(`Title: ${csm.title}`);
  console.log(`Total Chapters: ${csm.chapters.length}`);
  
  const emptyChapters = csm.chapters.filter((c: any) => c.pages.length === 0);
  console.log(`Chapters with 0 pages: ${emptyChapters.length}`);
  
  if (csm.chapters.length > 0) {
    console.log(`First Chapter Pages: ${csm.chapters[0].pages.length}`);
    console.log(`Sample Page URL: ${csm.chapters[0].pages[0]}`);
  }

  process.exit(0);
}

checkPages();
