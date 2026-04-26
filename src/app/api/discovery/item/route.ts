import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import { DiscoveryAnime, DiscoveryManga } from "@/models/Discovery";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    
    const type = searchParams.get("type") || "anime";
    const id = searchParams.get("id");

    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

    const Model = type === "manga" ? DiscoveryManga : DiscoveryAnime;

    const item = await Model.findOne({ mal_id: parseInt(id) }).lean();
    if (!item) return NextResponse.json({ error: "Item not found" }, { status: 404 });

    return NextResponse.json(item);

  } catch (error: any) {
    console.error("Item Fetch Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
