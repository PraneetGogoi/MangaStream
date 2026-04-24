

"use server";

import { MOCK_ANIME } from "@/data/mockAnime";
import { MOCK_MANGA } from "@/data/mockManga";

export type OracleResponse = {
  text: string;
  recommendations?: any[];
  type: "info" | "recommendation" | "unknown" | "greeting";
};

export async function processOracleQuery(query: string): Promise<OracleResponse> {
  const q = query.toLowerCase();
  
  // Greetings
  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("who are you")) {
    return {
      text: "I am FLUFF. I oversee the Digital Vault of MangaStream. How can I assist your discovery today, Archivist?",
      type: "greeting"
    };
  }

  // Recommendations by Genre
  const genres = ["action", "seinen", "shonen", "psychological", "adventure", "fantasy", "sci-fi", "horror", "sports", "romance", "slice of life", "thriller", "mystery", "mecha", "drama", "supernatural"];
  const requestedGenre = genres.find(g => q.includes(g));

  if (q.includes("recommend") || q.includes("suggest") || requestedGenre) {
    let matches = MOCK_ANIME.filter(a => 
      a.categories.some(c => c.toLowerCase().includes(requestedGenre || ""))
    );

    if (matches.length === 0) {
      matches = MOCK_ANIME.slice(0, 3); // Fallback to trending
    }

    const recs = matches.slice(0, 3);
    const names = recs.map(r => r.title).join(", ");
    
    return {
      text: requestedGenre 
        ? `ANALYZING VAULT... Found ${matches.length} artifacts matching [${requestedGenre.toUpperCase()}]. I recommend initializing with: ${names}.`
        : `SCANNING TRENDING LEYLINES... I suggest these legendary archives: ${names}.`,
      recommendations: recs,
      type: "recommendation"
    };
  }

  // Specific Anime Info
  const specificAnime = MOCK_ANIME.find(a => q.includes(a.title.toLowerCase()) || q.includes(a.id.toLowerCase()));
  if (specificAnime) {
    return {
      text: `RETRIEVING FILE [${specificAnime.id.toUpperCase()}]... ${specificAnime.description}`,
      type: "info"
    };
  }

  // Specific Manga Info
  const specificManga = MOCK_MANGA.find(m => q.includes(m.title.toLowerCase()) || q.includes(m.id.toLowerCase()));
  if (specificManga) {
    return {
      text: `RETRIEVING MANGA FRAGMENT [${specificManga.id.toUpperCase()}]... ${specificManga.description} Status: ${specificManga.status}.`,
      type: "info"
    };
  }

  // Release Dates (Mocked logic for now as it's not in mock data explicitly)
  if (q.includes("release") || q.includes("date") || q.includes("when")) {
    return {
      text: "TRANSMISSION DELAY DETECTED. Most archives in our vault are fully synchronized. New transmissions for ongoing series like 'One Piece' and 'Jujutsu Kaisen' are updated weekly. Check the SYNDICATE FEED for live updates.",
      type: "info"
    };
  }

  // Fallback
  return {
    text: "QUERY AMBIGUOUS. My neural pathways cannot locate that specific archive. Try asking for a genre recommendation or a specific anime title.",
    type: "unknown"
  };
}
