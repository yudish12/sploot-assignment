import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken");
  console.log(token);
  // If token exists, verify it with your backend API
  if (token) {
    try {
      const verifyResponse = await fetch(
        "http://localhost:5000/api/auth/user",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
          },
        }
      );

      if (verifyResponse.ok) {
        const data = await verifyResponse.json();
        if (request.nextUrl.pathname === "/") {
          return NextResponse.redirect(new URL("/blogs", request.url));
        }
      } else {
        request.cookies.set("authToken", "");
        request.cookies.set("user", "");
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      return NextResponse.next();
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/blogs"],
};
