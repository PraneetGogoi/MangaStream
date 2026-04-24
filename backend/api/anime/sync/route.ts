export const dynamic = "force-static";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Anime from "@/models/Anime";

export async function GET() {
  console.log("🔥 INITIATING ANIME EPISODE SYNC: CHAINSAW MAN");
  
  try {
    await dbConnect();
    
    const episodes = [
      { number: 1, title: "A Dog & A Chainsaw", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/1" },
      { number: 2, title: "Arrival in Tokyo", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/2" },
      { number: 3, title: "Meowy's Fate", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/3" },
      { number: 4, title: "Rescue", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/4" },
      { number: 5, title: "Gun Devil", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/5" },
      { number: 6, title: "Kill Denji", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/6" },
      { number: 7, title: "The Taste of a Kiss", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/7" },
      { number: 8, title: "Gunfire", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/8" },
      { number: 9, title: "From Kyoto", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/9" },
      { number: 10, title: "Bruised and Battered", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/10" },
      { number: 11, title: "Mission Start", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/11" },
      { number: 12, title: "Katana vs. Chainsaw", url: "https://vidsrc.me/embed/anime/chainsaw-man/1/12" }
    ];

    await Anime.findOneAndUpdate(
      { title: /Chainsaw Man/i },
      { 
        seasons: [{ number: 1, episodes }],
        hasArchive: true 
      },
      { upsert: true }
    );
    
    return NextResponse.json({ success: true, count: episodes.length });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
