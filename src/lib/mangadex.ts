/**
 * MANGADEX ARCHIVAL INTERFACE
 * A tactical utility to interface with the MangaDex public API for archival purposes.
 */

const BASE_URL = "https://api.mangadex.org";

export async function searchManga(query: string) {
  try {
    const response = await fetch(`${BASE_URL}/manga?title=${encodeURIComponent(query)}&limit=10&includes[]=cover_art`);
    const data = await response.json();
    
    return data.data.map((m: any) => {
      const coverRel = m.relationships.find((r: any) => r.type === "cover_art");
      const coverFileName = coverRel?.attributes?.fileName;
      
      return {
        id: m.id,
        title: m.attributes.title.en || Object.values(m.attributes.title)[0],
        description: m.attributes.description.en || "",
        status: m.attributes.status,
        coverImage: coverFileName ? `https://uploads.mangadex.org/covers/${m.id}/${coverFileName}` : null,
        categories: m.attributes.tags.map((t: any) => t.attributes.name.en).slice(0, 5)
      };
    });
  } catch (error) {
    console.error("MangaDex Search Error:", error);
    return [];
  }
}

export async function getMangaChapters(mangaId: string) {
  try {
    const response = await fetch(`${BASE_URL}/manga/${mangaId}/feed?translatedLanguage[]=en&limit=100&order[chapter]=asc`);
    const data = await response.json();
    
    return data.data.map((c: any) => ({
      id: c.id,
      chapter: c.attributes.chapter,
      title: c.attributes.title || `Chapter ${c.attributes.chapter}`,
      externalUrl: `https://mangadex.org/chapter/${c.id}`
    }));
  } catch (error) {
    console.error("MangaDex Feed Error:", error);
    return [];
  }
}

export async function getChapterPages(chapterId: string) {
  try {
    const response = await fetch(`${BASE_URL}/at-home/server/${chapterId}`);
    const data = await response.json();
    if (!data.chapter) return [];
    
    const hash = data.chapter.hash;
    const pages = data.chapter.data;
    
    return pages.map((p: string) => `${data.baseUrl}/data/${hash}/${p}`);
  } catch (error) {
    console.error("MangaDex Pages Error:", error);
    return [];
  }
}
