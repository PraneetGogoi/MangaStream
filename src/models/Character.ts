import mongoose, { Schema, Document } from "mongoose";

export interface ICharacter extends Document {
  animeId: string;
  name: string;
  role: string;
  description: string;
  image: string;
  bio: string;
  abilities?: string[];
  affiliation?: string;
  status?: string;
  origin?: string;
}

const CharacterSchema: Schema = new Schema({
  animeId: { type: String, required: true, index: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  bio: { type: String, required: true },
  abilities: { type: [String] },
  affiliation: { type: String },
  status: { type: String },
  origin: { type: String }
}, {
  timestamps: true
});

export default mongoose.models.Character || mongoose.model<ICharacter>("Character", CharacterSchema);
