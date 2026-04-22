import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import dbConnect from "../src/lib/mongoose";
import Manga from "../src/models/Manga";

async function listCSM() {
  await dbConnect();
  const records = await Manga.find({ title: /Chainsaw Man/i }).lean();
  console.log(`Found ${records.length} records for Chainsaw Man.`);
  
  records.forEach((r: any, idx) => {
    console.log(`Record ${idx + 1}:`);
    console.log(`  _id: ${r._id}`);
    console.log(`  id: ${r.id}`);
    console.log(`  Chapters: ${r.chapters.length}`);
    const withPages = r.chapters.filter((c: any) => c.pages.length > 0).length;
    console.log(`  Chapters with pages: ${withPages}`);
  });

  process.exit(0);
}

listCSM();
