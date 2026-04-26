import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import { DiscoveryAnime, DiscoveryManga } from "@/models/Discovery";

export async function GET() {
  try {
    await dbConnect();

    // 1. Anime Type Distribution
    const animeTypes = await DiscoveryAnime.aggregate([
      { $group: { _id: "$type", count: { $sum: 1 }, avgScore: { $avg: "$score" } } },
      { $sort: { count: -1 } }
    ]);

    // 2. Top Genres (Anime)
    const animeGenres = await DiscoveryAnime.aggregate([
      { $unwind: "$genres" },
      { $group: { _id: "$genres", count: { $sum: 1 }, avgScore: { $avg: "$score" } } },
      { $sort: { count: -1 } },
      { $limit: 15 }
    ]);

    // 3. Release Trends (Titles per year)
    const animeTrends = await DiscoveryAnime.aggregate([
      { $match: { year: { $gte: 1980, $lte: 2024 } } },
      { $group: { _id: "$year", count: { $sum: 1 }, avgScore: { $avg: "$score" } } },
      { $sort: { _id: 1 } }
    ]);

    // 4. Score Distribution (Histogram data)
    const animeScores = await DiscoveryAnime.aggregate([
      { $match: { score: { $gt: 0 } } },
      { $bucket: {
        groupBy: "$score",
        boundaries: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.1],
        default: "Other",
        output: { count: { $sum: 1 } }
      }}
    ]);

    // 5. Top Studios
    const topStudios = await DiscoveryAnime.aggregate([
      { $unwind: "$studios" },
      { $group: { _id: "$studios", count: { $sum: 1 }, avgScore: { $avg: "$score" } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    return NextResponse.json({
      anime: {
        types: animeTypes,
        genres: animeGenres,
        trends: animeTrends,
        scores: animeScores,
        studios: topStudios
      }
    });

  } catch (error: any) {
    console.error("Analytics Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
