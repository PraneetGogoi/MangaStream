import { MOCK_ANIME } from "@/data/mockAnime";
import { getCharactersForAnime as getMockCharacters } from "@/data/characterRegistry";

// Helper for stubbed responses
const stubError = (msg: string): any => ({ success: false, error: msg || "Backend not available in static mode." });
const stubSuccess = (data: any = {}): any => ({ success: true, ...data });

export async function getAllAnime(): Promise<any> {
  return MOCK_ANIME;
}

export async function getAnimeById(id: string): Promise<any> {
  return MOCK_ANIME.find(a => a.id === id) || null;
}

export async function getCharactersForAnime(animeId: string): Promise<any> {
  return await getMockCharacters(animeId);
}

export async function getCharacterById(id: string): Promise<any> {
  const { CharacterRegistry } = await import("@/data/characterRegistry");
  for (const seriesId in CharacterRegistry) {
    const mockChars = await getMockCharacters(seriesId);
    const mockMatch = mockChars.find(c => c.name === id || (c as any).id === id);
    if (mockMatch) {
      return { ...mockMatch, animeId: seriesId, _id: id };
    }
  }
  return null;
}

export async function upsertCharacters(animeId: string, characters: any[]): Promise<any> {
  return stubError("Admin character forge disabled in static mode.");
}

export async function registerUser(formData: FormData): Promise<any> {
  return stubError("Registration disabled in static mode.");
}

export async function toggleWatchlist(animeId: string): Promise<any> {
  return stubError("Watchlist disabled in static mode.");
}

export async function updateWatchlistStatus(animeId: string, status: any): Promise<any> {
  return stubError("Watchlist status disabled in static mode.");
}

export async function getUserWatchlist(): Promise<any> {
  return [];
}

export async function isAnimeInWatchlist(animeId: string): Promise<any> {
  return false;
}

export async function upsertAnime(data: any): Promise<any> {
  return stubError("Admin anime edit disabled in static mode.");
}

export async function ingestAnimeEpisodes(animeId: string, query: string): Promise<any> {
  return stubError("Ingestion disabled in static mode.");
}

export async function deleteAnime(animeId: string): Promise<any> {
  return stubError("Deletion disabled in static mode.");
}

export async function updateUserProfile(data: any): Promise<any> {
  return stubError("Profile update disabled in static mode.");
}

export async function uploadProfilePicture(formData: FormData): Promise<any> {
  return stubError("Upload disabled in static mode.");
}

export async function uploadCharacterImage(formData: FormData): Promise<any> {
  return stubError("Upload disabled in static mode.");
}

export async function submitArchiveLog(animeId: string, data: any): Promise<any> {
  return stubError("Logs disabled in static mode.");
}

export async function getArchiveLogs(animeId: string): Promise<any> {
  return [];
}

export async function getEngagementAnalytics(): Promise<any> {
  return stubSuccess({ views: 0, interactions: 0 });
}

export async function getSyndicates(): Promise<any> {
  return [];
}

export async function joinSyndicate(slug: string): Promise<any> {
  return stubError("Syndicates disabled in static mode.");
}

export async function leaveSyndicate(slug: string): Promise<any> {
  return stubError("Syndicates disabled in static mode.");
}

export async function uploadArchiveAsset(formData: FormData): Promise<any> {
  return stubError("Upload disabled in static mode.");
}

export async function trackCardInteraction(animeId: string): Promise<any> {
  return stubSuccess();
}

export async function getPersonalizedAffinities(): Promise<any> {
  return {};
}

export async function generateGlimpse(animeId: string): Promise<any> {
  return "Glimpse generation unavailable.";
}

export async function getNotifications(): Promise<any> {
  return [];
}

export async function markNotificationRead(notificationId: string): Promise<any> {
  return stubSuccess();
}

export async function uploadArchiveImage(formData: FormData): Promise<any> {
  return stubError("Upload disabled in static mode.");
}
