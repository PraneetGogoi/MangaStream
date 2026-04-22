import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import dbConnect from "../src/lib/mongoose";
import Manga from "../src/models/Manga";

async function testQuery() {
  await dbConnect();
  const csm = await Manga.findOne({ title: /Chainsaw Man/i });
  if (!csm) {
    console.log("CSM not found");
    process.exit(1);
  }

  const mangaId = csm.id;
  const chapterId = csm.chapters[0].id;

  console.log(`Testing Query: mangaId=${mangaId}, chapterId=${chapterId}`);

  const manga = await Manga.findOne(
    { id: mangaId, "chapters.id": chapterId },
    { "chapters.$": 1 }
  ).lean();

  if (manga && (manga as any).chapters) {
    console.log(`Success! Pages found: ${(manga as any).chapters[0].pages.length}`);
  } else {
    console.log("Query Failed to find chapter.");
  }

  process.exit(0);
}

testQuery();
