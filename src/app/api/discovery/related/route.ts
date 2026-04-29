import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import { DiscoveryAnime, DiscoveryManga } from "@/models/Discovery";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    
    const malId = parseInt(searchParams.get("mal_id") || "");
    const type = searchParams.get("type") || "anime";

    if (!malId) {
      return NextResponse.json({ error: "mal_id is required" }, { status: 400 });
    }

    const Model = type === "manga" ? DiscoveryManga : DiscoveryAnime;

    // 1. Fetch the source item
    const sourceItem = await Model.findOne({ mal_id: malId }).lean();

    if (!sourceItem) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // 2. Combine tags for comparison
    const tags = [
      ...(sourceItem.genres || []),
      ...(sourceItem.themes || []),
      ...(sourceItem.demographics || [])
    ];

    if (tags.length === 0) {
      // Fallback if no tags: get top rated items of same type
      const fallback = await Model.find({ mal_id: { $ne: malId } })
        .sort({ score: -1, popularity: 1 })
        .limit(5)
        .lean();
      return NextResponse.json({ items: fallback });
    }

    // 3. Find candidates sharing at least one tag
    // We use $in to find any item that has at least one matching genre, theme, or demographic
    const relatedItems = await Model.find({
      mal_id: { $ne: malId },
      $or: [
        { genres: { $in: sourceItem.genres } },
        { themes: { $in: sourceItem.themes } },
        { demographics: { $in: sourceItem.demographics } }
      ]
    })
    .limit(50) // Get a pool of 50 candidates to rank
    .lean();

    // 4. Rank candidates by overlap count
    const rankedItems = relatedItems.map((item: any) => {
      const itemTags = [
        ...(item.genres || []),
        ...(item.themes || []),
        ...(item.demographics || [])
      ];
      
      // Count matches
      const overlap = itemTags.filter((tag: string) => tags.includes(tag)).length;
      
      return { ...item, overlap };
    })
    .sort((a: any, b: any) => {
      // Primary sort: overlap count
      if (b.overlap !== a.overlap) return b.overlap - a.overlap;
      // Secondary sort: score
      return (b.score || 0) - (a.score || 0);
    })
    .slice(0, 5); // Take top 5

    return NextResponse.json({ items: rankedItems });

  } catch (error: any) {
    console.error("Related Items Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
