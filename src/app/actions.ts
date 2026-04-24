import { MOCK_ANIME } from "@/data/mockAnime";
import { getCharactersForAnime as getMockCharacters } from "@/data/characterRegistry";

// Helper for stubbed responses
const stubError = (msg: string): any => ({ success: false, error: msg || "Backend not available in static mode." });
const stubSuccess = (data: any = {}): any => ({ success: true, ...data });

// Helper for localStorage persistence in static mode
const getStore = (key: string) => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(`manga_${key}`);
  return data ? JSON.parse(data) : [];
};

const setStore = (key: string, data: any) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(`manga_${key}`, JSON.stringify(data));
};

// Database Merging Logic
export async function getAllAnime(): Promise<any[]> {
  const customAnime = getStore("custom_anime");
  const deletedIds = getStore("deleted_anime_ids") as string[];
  
  const baseAnime = MOCK_ANIME.filter(a => !deletedIds.includes(a.id));
  return [...baseAnime, ...customAnime];
}

export async function getAnimeById(id: string): Promise<any> {
  const all = await getAllAnime();
  return all.find(a => a.id === id) || null;
}

export async function upsertAnime(data: any): Promise<any> {
  const customAnime = getStore("custom_anime");
  const existingIndex = customAnime.findIndex((a: any) => a.id === data.id);
  
  let newCustomAnime;
  if (existingIndex >= 0) {
    newCustomAnime = [...customAnime];
    newCustomAnime[existingIndex] = data;
  } else {
    newCustomAnime = [...customAnime, data];
  }
  
  setStore("custom_anime", newCustomAnime);
  return stubSuccess({ action: existingIndex >= 0 ? 'updated' : 'created' });
}

export async function deleteAnime(animeId: string): Promise<any> {
  // If it's a custom anime, remove it from custom list
  const customAnime = getStore("custom_anime");
  const isCustom = customAnime.some((a: any) => a.id === animeId);
  
  if (isCustom) {
    setStore("custom_anime", customAnime.filter((a: any) => a.id !== animeId));
  } else {
    // If it's a base anime, add to deleted list
    const deletedIds = getStore("deleted_anime_ids");
    setStore("deleted_anime_ids", [...deletedIds, animeId]);
  }
  
  return stubSuccess();
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
  setStore(`chars_${animeId}`, characters);
  return stubSuccess();
}

export async function getMockCharacters(animeId: string): Promise<any[]> {
  const customChars = getStore(`chars_${animeId}`);
  if (customChars.length > 0) return customChars;

  const { CharacterRegistry } = await import("@/data/characterRegistry");
  return (CharacterRegistry as any)[animeId] || [];
}

export async function registerUser(formData: FormData): Promise<any> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) return stubError("Credentials required.");

  const users = getStore("users");
  if (users.find((u: any) => u.username.toLowerCase() === username.toLowerCase())) {
    return stubError("Username already exists in the registry.");
  }

  // Admin check
  const role = (username === "praneet" && password === "praneet7888") ? "admin" : "regular";

  const newUser = {
    username,
    password, // In a real app, we would hash this, but for this static mock we store as is
    role,
    createdAt: new Date().toISOString()
  };

  setStore("users", [...users, newUser]);
  return stubSuccess();
}

export async function loginUser(formData: FormData): Promise<any> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) return stubError("Credentials required.");

  // Hardcoded Admin bypass/check if not in users list yet
  if (username === "praneet" && password === "praneet7888") {
    const session = { username, role: "admin", loginTime: Date.now() };
    setStore("session", session);
    return stubSuccess({ user: session });
  }

  const users = getStore("users");
  const user = users.find((u: any) => u.username === username && u.password === password);

  if (!user) return stubError("Invalid credentials.");

  const session = { username: user.username, role: user.role, loginTime: Date.now() };
  setStore("session", session);
  return stubSuccess({ user: session });
}

export async function logoutUser(): Promise<any> {
  if (typeof window !== "undefined") {
    localStorage.removeItem("manga_session");
  }
  return stubSuccess();
}

export async function getCurrentUser(): Promise<any> {
  const session = getStore("session");
  if (Array.isArray(session)) return null; // getStore returns [] by default if not found
  return session;
}

export async function toggleWatchlist(animeId: string): Promise<any> {
  const watchlist = getStore("watchlist");
  const exists = watchlist.find((a: any) => a.id === animeId);
  
  let newWatchlist;
  if (exists) {
    newWatchlist = watchlist.filter((a: any) => a.id !== animeId);
  } else {
    const anime = MOCK_ANIME.find(a => a.id === animeId);
    if (!anime) return stubError("Anime not found.");
    newWatchlist = [...watchlist, { ...anime, watchlistStatus: "Queued Artifact" }];
  }
  
  setStore("watchlist", newWatchlist);
  return stubSuccess({ inWatchlist: !exists });
}

export async function updateWatchlistStatus(animeId: string, status: any): Promise<any> {
  const watchlist = getStore("watchlist");
  const newWatchlist = watchlist.map((a: any) => 
    a.id === animeId ? { ...a, watchlistStatus: status } : a
  );
  setStore("watchlist", newWatchlist);
  return stubSuccess();
}

export async function getUserWatchlist(): Promise<any> {
  return getStore("watchlist");
}

export async function isAnimeInWatchlist(animeId: string): Promise<any> {
  const watchlist = getStore("watchlist");
  return watchlist.some((a: any) => a.id === animeId);
}

export async function ingestAnimeEpisodes(animeId: string, query: string): Promise<any> {
  return stubError("Ingestion disabled in static mode.");
}

export async function updateUserProfile(data: any): Promise<any> {
  const session = getStore("session");
  if (!session) return stubError("Not authenticated.");
  
  const users = getStore("users");
  const userIndex = users.findIndex((u: any) => u.username === session.username);
  
  if (userIndex >= 0) {
    const newUsers = [...users];
    newUsers[userIndex] = { ...newUsers[userIndex], ...data };
    setStore("users", newUsers);
    
    // Update session too
    setStore("session", { ...session, ...data });
    return stubSuccess();
  }
  
  return stubError("User not found.");
}

export async function uploadProfilePicture(formData: FormData): Promise<any> {
  return uploadArchiveAsset(formData);
}

export async function uploadCharacterImage(formData: FormData): Promise<any> {
  return uploadArchiveAsset(formData);
}

export async function submitArchiveLog(animeId: string, data: any): Promise<any> {
  const session = getStore("session");
  const logs = getStore(`logs_${animeId}`);
  const newLog = {
    _id: Math.random().toString(36).substr(2, 9),
    animeId,
    content: data.content,
    rating: data.rating,
    createdAt: new Date().toISOString(),
    userId: {
      username: session?.username || "Guest Personnel",
      trustLevel: session?.role === 'admin' ? 99 : 1,
      profileImage: session?.profileImage || null
    }
  };
  setStore(`logs_${animeId}`, [newLog, ...logs]);
  return stubSuccess();
}

export async function getArchiveLogs(animeId: string): Promise<any> {
  return getStore(`logs_${animeId}`);
}

export async function getEngagementAnalytics(): Promise<any> {
  const customAnime = getStore("custom_anime");
  return stubSuccess({ 
    views: Math.floor(Math.random() * 1000) + 500, 
    interactions: Math.floor(Math.random() * 200) + 50,
    forgedCount: customAnime.length
  });
}

export async function getSyndicates(): Promise<any> {
  const baseSyndicates = [
    { name: "Shadow Garden", slug: "shadow-garden", description: "The elite archive task force.", members: 124, status: "Active" },
    { name: "Order of Yggdrasil", slug: "yggdrasil", description: "Protectors of the digital world tree.", members: 89, status: "Active" }
  ];
  const joined = getStore("joined_syndicates");
  return baseSyndicates.map(s => ({ ...s, isJoined: joined.includes(s.slug) }));
}

export async function joinSyndicate(slug: string): Promise<any> {
  const joined = getStore("joined_syndicates");
  if (!joined.includes(slug)) {
    setStore("joined_syndicates", [...joined, slug]);
  }
  return stubSuccess();
}

export async function leaveSyndicate(slug: string): Promise<any> {
  const joined = getStore("joined_syndicates");
  setStore("joined_syndicates", joined.filter((s: string) => s !== slug));
  return stubSuccess();
}

export async function uploadArchiveAsset(formData: FormData): Promise<any> {
  const file = formData.get("file") as File;
  if (!file) return stubError("No file provided.");

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(stubSuccess({ url: reader.result }));
    };
    reader.onerror = () => {
      resolve(stubError("Failed to read file."));
    };
    reader.readAsDataURL(file);
  });
}

export async function trackCardInteraction(animeId: string): Promise<any> {
  return stubSuccess();
}

export async function getPersonalizedAffinities(): Promise<any> {
  return { "Seinen": 0.8, "Cyberpunk": 0.6, "Supernatural": 0.4 };
}

export async function generateGlimpse(animeId: string): Promise<any> {
  return "Fragment analyzed. Glimpse generated in neural buffer.";
}

export async function getNotifications(): Promise<any> {
  const notifications = getStore("notifications");
  if (notifications.length === 0) {
    return [
      { id: "1", title: "New Vault Entry", message: "A legendary artifact has been forged.", time: "2m ago", read: false },
      { id: "2", title: "System Update", message: "Static archival protocols engaged.", time: "1h ago", read: true }
    ];
  }
  return notifications;
}

export async function markNotificationRead(notificationId: string): Promise<any> {
  const notifications = await getNotifications();
  const newNotifications = notifications.map((n: any) => 
    n.id === notificationId ? { ...n, read: true } : n
  );
  setStore("notifications", newNotifications);
  return stubSuccess();
}

export async function uploadArchiveImage(formData: FormData): Promise<any> {
  return uploadArchiveAsset(formData);
}
