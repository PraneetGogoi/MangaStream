import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Manga from "@/models/Manga";
import { getChapterPages } from "@/lib/mangadex";

const BASE_URL = "https://api.mangadex.org";
const MANGA_ID = "a77742b1-befd-49a4-bff5-1ad4e6b0ef7b";

export async function GET() {
  console.log("🔥 INITIATING SERVER-SIDE DEEP ARCHIVAL: CHAINSAW MAN");
  
  try {
    await dbConnect();
    
    // 0. Clean Slate
    await Manga.deleteMany({ title: /Chainsaw Man/i });
    
    // 1. Get Meta
    const res = await fetch(`${BASE_URL}/manga/${MANGA_ID}?includes[]=cover_art`);
    const dexData = await res.json();
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

    // 2. Get Feed
    const feedRes = await fetch(`${BASE_URL}/manga/${MANGA_ID}/feed?translatedLanguage[]=en&limit=100&order[chapter]=asc`);
    const feedData = await feedRes.json();
    const allChapters = feedData.data.map((c: any) => ({
      id: c.id,
      chapter: c.attributes.chapter,
      title: c.attributes.title || `Chapter ${c.attributes.chapter}`
    }));

    // 3. Sequential Page Extraction (Limited to 100 for safety in one req)
    for (let i = 0; i < allChapters.length; i++) {
      const ch = allChapters[i];
      const pages = await getChapterPages(ch.id);
      mangaMeta.chapters.push({
        id: ch.id,
        title: ch.title,
        pages: pages,
        releaseDate: new Date()
      });
    }

    await Manga.findOneAndUpdate({ id: MANGA_ID }, mangaMeta, { upsert: true });
    
    return NextResponse.json({ success: true, chapters: mangaMeta.chapters.length });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
