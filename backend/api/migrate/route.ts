export const dynamic = "force-static";
import { NextResponse } from "next/server";
import { migrateData } from "@/lib/migration";

export async function GET() {
  try {
    console.log("🚀 Starting Database Sync...");
    await migrateData();
    return NextResponse.json({ success: true, message: "Database re-synced with new asset paths." });
  } catch (error: any) {
    console.error("❌ Sync Failed:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
