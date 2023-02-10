import { NextRequest, NextResponse } from "next/server";
import { redis } from "./lib/upstash";

export const config = {
  matcher: "/edge/:path*",
};

export default async function middleware(req: NextRequest) {
  const data = await redis.get("key"); // arbitrary "key" in Redis (returns "value")
  console.log(`found data: ${data}, redirecting...`);
  return NextResponse.redirect(new URL("/login", req.url), {
    status: 302,
  });
}
