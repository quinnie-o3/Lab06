import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/api/secret")) {
    const apiKey = process.env.API_KEY;
    const headerKey = request.headers.get("x-api-key");

    if (!apiKey || headerKey !== apiKey) {
      const url = request.nextUrl.clone();
      url.pathname = "/unauthorized";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/secret"],
};
