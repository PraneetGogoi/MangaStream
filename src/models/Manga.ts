import mongoose, { Schema, Document } from "mongoose";

export interface IMangaChapter {
  id: string;
  title: string;
  pages: string[];
  releaseDate?: Date;
}

export interface IManga extends Document {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  categories: string[];
  status: "Ongoing" | "Completed" | "Hiatus";
  chapters: IMangaChapter[];
  hasArchive?: boolean;
  telemetry?: {
    views: number;
    libraryAdds: number;
  };
}

const MangaSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true },
  categories: { type: [String], required: true },
  status: { 
    type: String, 
    enum: ["Ongoing", "Completed", "Hiatus"], 
    default: "Ongoing" 
  },
  chapters: [{
    id: { type: String, required: true },
    title: { type: String, required: true },
    pages: { type: [String], required: true },
    releaseDate: { type: Date, default: Date.now }
  }],
  hasArchive: { type: Boolean, default: false },
  telemetry: {
    views: { type: Number, default: 0 },
    libraryAdds: { type: Number, default: 0 }
  }
}, {
  timestamps: true
});

export default mongoose.models.Manga || mongoose.model<IManga>("Manga", MangaSchema);
