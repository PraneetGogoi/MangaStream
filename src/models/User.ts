import mongoose, { Schema, Document } from "mongoose";

export interface IWatchlistEntry {
  animeId: string;
  status: "Queued Artifact" | "Active Transmission" | "Synchronized";
  addedAt: Date;
}

export interface IUser extends Document {
  username: string;
  password?: string;
  role: "user" | "admin";
  watchlist: IWatchlistEntry[]; 
  profileImage?: string; // URL or path to the profile image
  trustLevel: number; // User reputation score
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String }, // Optional for OAuth, required for Credentials
  role: { type: String, enum: ["user", "admin"], default: "user" },
  watchlist: [{
    animeId: { type: String, required: true },
    status: { 
      type: String, 
      enum: ["Queued Artifact", "Active Transmission", "Synchronized"], 
      default: "Queued Artifact" 
    },
    addedAt: { type: Date, default: Date.now }
  }],
  profileImage: { type: String, default: "" },
  trustLevel: { type: Number, default: 1 }
}, {
  timestamps: true
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
