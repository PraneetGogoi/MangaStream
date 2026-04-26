import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import { DiscoveryAnime, DiscoveryManga } from "@/models/Discovery";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    
    const id = searchParams.get("id");
    const type = searchParams.get("type") || "anime";

    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

    const Model = type === "manga" ? DiscoveryManga : DiscoveryAnime;

    const sourceItem = await Model.findOne({ mal_id: parseInt(id) });
    if (!sourceItem) return NextResponse.json({ error: "Item not found" }, { status: 404 });

    // Find items with at least 2 common genres
    const recommendations = await Model.find({
      mal_id: { $ne: sourceItem.mal_id },
      genres: { $in: sourceItem.genres },
      score: { $gt: 7 } // Quality filter
    })
    .sort({ score: -1, popularity: 1 })
    .limit(6)
    .lean();

    return NextResponse.json(recommendations);

  } catch (error: any) {
    console.error("Recommend Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
