import mongoose, { Schema, Document } from "mongoose";

export interface ISyndicate extends Document {
  name: string;
  slug: string;
  description: string;
  genre: string;
  members: mongoose.Types.ObjectId[];
  powerLevel: number; // Aggregate reputation
  accentColor: string;
  iconType: string;
}

const SyndicateSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
  powerLevel: { type: Number, default: 0 },
  accentColor: { type: String, default: "#000000" },
  iconType: { type: String, default: "Layers" }
}, {
  timestamps: true
});

export default mongoose.models.Syndicate || mongoose.model<ISyndicate>("Syndicate", SyndicateSchema);
