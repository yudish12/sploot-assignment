import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (data.user_data) {
    const cookieStore = await cookies();
    cookieStore.set("authToken", data.user_data.token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    cookieStore.set("user", JSON.stringify(data.user_data), {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json(
      { success: false, message: data.message },
      { status: 401 }
    );
  }
}
