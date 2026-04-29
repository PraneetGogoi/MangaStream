import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import { DiscoveryAnime, DiscoveryManga } from "@/models/Discovery";

/**
 * Advanced Similarity Engine (Neural Link)
 * Calculates relationship weight based on overlap of Genres, Themes, and Demographics.
 */
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    
    const id = searchParams.get("id");
    const type = searchParams.get("type") || "anime";

    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

    const Model = type === "manga" ? DiscoveryManga : DiscoveryAnime;

    // 1. Fetch the source item with full tags
    const sourceItem = await Model.findOne({ mal_id: parseInt(id) }).lean();
    if (!sourceItem) return NextResponse.json({ error: "Item not found" }, { status: 404 });

    const sourceTags = [
      ...(sourceItem.genres || []),
      ...(sourceItem.themes || []),
      ...(sourceItem.demographics || [])
    ];

    if (sourceTags.length === 0) {
      // Fallback: Return top items of same type if no tags exist
      const fallback = await Model.find({ mal_id: { $ne: sourceItem.mal_id } })
        .sort({ popularity: 1, score: -1 })
        .limit(6)
        .lean();
      return NextResponse.json(fallback);
    }

    // 2. Find items sharing at least one tag
    const relatedItems = await Model.find({
      mal_id: { $ne: sourceItem.mal_id },
      $or: [
        { genres: { $in: sourceItem.genres || [] } },
        { themes: { $in: sourceItem.themes || [] } },
        { demographics: { $in: sourceItem.demographics || [] } }
      ]
    })
    .limit(40) // Pool for ranking
    .lean();

    // 3. Rank items by Neural Link Weight (Overlap Count)
    const rankedRecommendations = relatedItems.map((item: any) => {
      const itemTags = [
        ...(item.genres || []),
        ...(item.themes || []),
        ...(item.demographics || [])
      ];
      
      // Calculate Jaccard-like overlap or simple intersection count
      const intersection = itemTags.filter((tag: string) => sourceTags.includes(tag)).length;
      
      // Add a slight bonus for items with similar scores
      const scoreDiff = Math.abs((item.score || 0) - (sourceItem.score || 0));
      const scoreBonus = scoreDiff < 1.0 ? 0.5 : 0;

      return { 
        ...item, 
        neuralWeight: intersection + scoreBonus 
      };
    })
    .sort((a: any, b: any) => {
      if (b.neuralWeight !== a.neuralWeight) return b.neuralWeight - a.neuralWeight;
      return (b.score || 0) - (a.score || 0); // Tie-breaker: Score
    })
    .slice(0, 6);

    return NextResponse.json(rankedRecommendations);

  } catch (error: any) {
    console.error("Similarity Engine Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
