export type Character = {
  _id?: string;
  name: string;
  role: string;
  description: string;
  image: string;
  bio: string;
  abilities?: string[];
  affiliation?: string;
  status?: string;
  origin?: string;
};

export type Anime = {
  id: string;
  title: string;
  description: string;
  posterImage: string;
  categories: string[];
  trailerUrl: string;
  openings: { title: string; url: string }[];
  previews: string[];
  mangaChapters?: {
    id: string;
    title: string;
    pages: string[];
  }[];
  characters?: Character[];
  hasArchive?: boolean;
  glimpse?: string;
  seasons?: {
    number: number;
    episodes: {
      number: number;
      title: string;
      url: string;
    }[];
  }[];
  telemetry?: {
    views: number;
    watchlistAdds: number;
  };
};
