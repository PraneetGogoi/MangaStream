import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ isSynced: false });
    }

    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const type = searchParams.get("type") || "anime";

    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

    const userId = (session.user as any).id;
    const user = await User.findById(userId);

    if (!user) return NextResponse.json({ isSynced: false });

    let isSynced = false;
    if (type === "anime") {
      isSynced = user.watchlist.some((item: any) => 
        (typeof item === 'string' ? item : item.animeId) === id
      );
    } else {
      isSynced = user.mangaList.some((item: any) => item.mangaId === id);
    }

    return NextResponse.json({ isSynced });

  } catch (error: any) {
    console.error("Sync Status Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
