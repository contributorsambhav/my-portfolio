// app/api/stats/route.ts
// Cached server-side API route that fetches all external data
// ISR: revalidates every hour instead of fetching on every page visit

import { NextResponse } from "next/server";
import { getStatsData } from "@/lib/stats";

export const revalidate = 3600; // 1 hour cache

export async function GET() {
  const data = await getStatsData();
  return NextResponse.json(data);
}
