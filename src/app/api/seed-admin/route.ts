import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const password = searchParams.get("password");

  if (!username || !password) {
    return NextResponse.json({ 
      error: "Usage: /api/seed-admin?username=name&password=pass" 
    }, { status: 400 });
  }

  try {
    await dbConnect();
    
    // Demote all other admins to ensure "ONLY" this user has access
    await User.updateMany({ username: { $ne: username } }, { role: "user" });

    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Upsert the specific admin account
    const result = await User.findOneAndUpdate(
      { username },
      { password: hashedPassword, role: "admin" },
      { upsert: true, new: true }
    );

    return NextResponse.json({ 
      message: "Vault access restricted successfully!", 
      authorized_admin: username,
      action: "Master Credentials Set & Others Demoted"
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
