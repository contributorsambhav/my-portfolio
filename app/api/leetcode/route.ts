// app/api/leetcode/route.ts
// Proxy route for LeetCode GraphQL — solves CORS issues for client-side fallback.
// The client calls this route (same origin, no CORS), and we forward to LeetCode.

import { NextRequest, NextResponse } from "next/server";

const LEETCODE_CSRF_TOKEN = "LkTZdB6pQlwQ5QGoLzF9KrCiDFteSmXf";
const BROWSER_UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": BROWSER_UA,
        Referer: "https://leetcode.com",
        Origin: "https://leetcode.com",
        "x-csrftoken": LEETCODE_CSRF_TOKEN,
        Cookie: `csrftoken=${LEETCODE_CSRF_TOKEN}; LEETCODE_SESSION=`,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timer);

    if (!res.ok) {
      return NextResponse.json(
        { error: "LeetCode API error", status: res.status },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Proxy failed", message },
      { status: 502 }
    );
  }
}
