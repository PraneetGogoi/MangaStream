import { MOCK_MANGA } from "@/data/mockManga";

// Helper for stubbed responses
const stubError = (msg: string): any => ({ success: false, error: msg || "Backend not available in static mode." });
const stubSuccess = (data: any = {}): any => ({ success: true, ...data });

export async function getAllManga(): Promise<any> {
  return MOCK_MANGA;
}

export async function getMangaChapterPages(mangaId: string, chapterId: string, mangaTitle?: string): Promise<any> {
  const manga = MOCK_MANGA.find(m => m.id === mangaId || m.title === mangaTitle);
  if (!manga) return [];
  
  const chapter = manga.chapters.find(c => c.id === chapterId);
  return chapter?.pages || [];
}

export async function getMangaById(id: string): Promise<any> {
  return MOCK_MANGA.find(m => m.id === id) || null;
}

export async function updateMangaReadingStatus(mangaId: string, status: string, chapter: number = 1): Promise<any> {
  return stubError("Backend not available in static mode.");
}

export async function getUserMangaList(): Promise<any> {
  return [];
}

export async function upsertManga(data: any): Promise<any> {
  return stubError("Backend not available in static mode.");
}

export async function searchMangaVault(query: string): Promise<any> {
  return MOCK_MANGA.filter(m => 
    m.title.toLowerCase().includes(query.toLowerCase()) || 
    m.description.toLowerCase().includes(query.toLowerCase())
  );
}

export async function ingestMangaFromDex(dexId: string): Promise<any> {
  return stubError("Backend not available in static mode.");
}
