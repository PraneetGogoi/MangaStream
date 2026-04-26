import mongoose, { Schema, Document } from "mongoose";

export interface IDiscoveryAnime extends Document {
  mal_id: number;
  title: string;
  title_english?: string;
  title_japanese?: string;
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired_from?: Date;
  aired_to?: Date;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background?: string;
  premiered?: string;
  broadcast?: string;
  studios: string[];
  genres: string[];
  themes: string[];
  demographics: string[];
  main_picture: string;
  url: string;
  trailer_url?: string;
  year?: number;
  season?: string;
}

const DiscoveryAnimeSchema: Schema = new Schema({
  mal_id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  title_english: { type: String },
  title_japanese: { type: String },
  type: { type: String },
  source: { type: String },
  episodes: { type: Number },
  status: { type: String },
  airing: { type: Boolean },
  aired_from: { type: Date },
  aired_to: { type: Date },
  duration: { type: String },
  rating: { type: String },
  score: { type: Number },
  scored_by: { type: Number },
  rank: { type: Number },
  popularity: { type: Number },
  members: { type: Number },
  favorites: { type: Number },
  synopsis: { type: String },
  background: { type: String },
  premiered: { type: String },
  broadcast: { type: String },
  studios: { type: [String] },
  genres: { type: [String] },
  themes: { type: [String] },
  demographics: { type: [String] },
  main_picture: { type: String },
  url: { type: String },
  trailer_url: { type: String },
  year: { type: Number },
  season: { type: String }
}, { timestamps: true });

// Add text index for search
DiscoveryAnimeSchema.index({ title: 'text', title_english: 'text', title_japanese: 'text' });

export const DiscoveryAnime = mongoose.models.DiscoveryAnime || mongoose.model<IDiscoveryAnime>("DiscoveryAnime", DiscoveryAnimeSchema);

export interface IDiscoveryManga extends Document {
  mal_id: number;
  title: string;
  title_english?: string;
  title_japanese?: string;
  type: string;
  chapters?: number;
  volumes?: number;
  status: string;
  publishing: boolean;
  published_from?: Date;
  published_to?: Date;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background?: string;
  authors: string[];
  serializations: string[];
  genres: string[];
  themes: string[];
  demographics: string[];
  main_picture: string;
  url: string;
}

const DiscoveryMangaSchema: Schema = new Schema({
  mal_id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  title_english: { type: String },
  title_japanese: { type: String },
  type: { type: String },
  chapters: { type: Number },
  volumes: { type: Number },
  status: { type: String },
  publishing: { type: Boolean },
  published_from: { type: Date },
  published_to: { type: Date },
  score: { type: Number },
  scored_by: { type: Number },
  rank: { type: Number },
  popularity: { type: Number },
  members: { type: Number },
  favorites: { type: Number },
  synopsis: { type: String },
  background: { type: String },
  authors: { type: [String] },
  serializations: { type: [String] },
  genres: { type: [String] },
  themes: { type: [String] },
  demographics: { type: [String] },
  main_picture: { type: String },
  url: { type: String }
}, { timestamps: true });

// Add text index for search
DiscoveryMangaSchema.index({ title: 'text', title_english: 'text', title_japanese: 'text' });

export const DiscoveryManga = mongoose.models.DiscoveryManga || mongoose.model<IDiscoveryManga>("DiscoveryManga", DiscoveryMangaSchema);
