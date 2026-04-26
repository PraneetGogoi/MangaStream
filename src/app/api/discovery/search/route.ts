import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import { DiscoveryAnime, DiscoveryManga } from "@/models/Discovery";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    
    const type = searchParams.get("type") || "anime"; // anime or manga
    const query = searchParams.get("q") || "";
    const genre = searchParams.get("genre") || "";
    const sort = searchParams.get("sort") || "popularity"; // popularity, score, rank
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");

    const filter: any = {};
    if (query) {
      filter.$text = { $search: query };
    }
    if (genre) {
      filter.genres = genre;
    }

    const sortObj: any = {};
    if (sort === "score") sortObj.score = -1;
    else if (sort === "rank") sortObj.rank = 1;
    else sortObj.popularity = 1;

    const Model = type === "manga" ? DiscoveryManga : DiscoveryAnime;

    const [items, total] = await Promise.all([
      Model.find(filter)
        .sort(sortObj)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Model.countDocuments(filter)
    ]);

    return NextResponse.json({
      items,
      total,
      page,
      pages: Math.ceil(total / limit)
    });

  } catch (error: any) {
    console.error("Search Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
