import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  userId: mongoose.Types.ObjectId;
  animeId: string;
  content: string;
  rating: number; // 1-10 "Power Level"
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  animeId: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 10 },
  isPublic: { type: Boolean, default: false } // Default to false for Admin-only testing
}, {
  timestamps: true
});

export default mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);
