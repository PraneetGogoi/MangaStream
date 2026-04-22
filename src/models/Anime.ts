import mongoose, { Schema, Document } from "mongoose";

export interface IAnime extends Document {
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
}

const AnimeSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  posterImage: { type: String, required: true },
  categories: { type: [String], required: true },
  trailerUrl: { type: String, required: true },
  openings: [{
    title: { type: String, required: true },
    url: { type: String, required: true }
  }],
  previews: { type: [String], required: true },
  mangaChapters: [{
    id: { type: String, required: true },
    title: { type: String, required: true },
    pages: { type: [String], required: true }
  }],
  hasArchive: { type: Boolean, default: false },
  glimpse: { type: String },
  seasons: [{
    number: { type: Number, required: true },
    episodes: [{
      number: { type: Number, required: true },
      title: { type: String, required: true },
      url: { type: String, required: true }
    }]
  }],
  telemetry: {
    views: { type: Number, default: 0 },
    watchlistAdds: { type: Number, default: 0 }
  }
}, {
  timestamps: true
});

export default mongoose.models.Anime || mongoose.model<IAnime>("Anime", AnimeSchema);
