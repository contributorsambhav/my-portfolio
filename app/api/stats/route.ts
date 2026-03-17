// app/api/stats/route.ts
// Cached server-side API route that fetches all external data
// ISR: revalidates every hour instead of fetching on every page visit

import { NextResponse } from "next/server";

export const revalidate = 3600; // 1 hour cache

const FETCH_TIMEOUT_MS = 8000; // 8 seconds max per external API call

const BROWSER_UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
}

const FALLBACK_LEETCODE_STATS: LeetCodeStats = {
  totalSolved: 364,
  easySolved: 131,
  totalEasy: 922,
  mediumSolved: 204,
  totalMedium: 1993,
  hardSolved: 29,
  totalHard: 902,
  ranking: 0,
};

/** Helper: fetch with an AbortController timeout so requests never hang */
function fetchWithTimeout(
  url: string,
  options: RequestInit & { next?: { revalidate: number } } = {},
  timeoutMs = FETCH_TIMEOUT_MS
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  return fetch(url, { ...options, signal: controller.signal }).finally(() =>
    clearTimeout(timer)
  );
}

// ── LeetCode GraphQL helper ──────────────────────────────────────────
const LEETCODE_CSRF_TOKEN = "LkTZdB6pQlwQ5QGoLzF9KrCiDFteSmXf";

async function leetCodeGraphQL(query: string, variables: Record<string, unknown>) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "User-Agent": BROWSER_UA,
    Referer: "https://leetcode.com",
    Origin: "https://leetcode.com",
    "x-csrftoken": LEETCODE_CSRF_TOKEN,
    Cookie: `csrftoken=${LEETCODE_CSRF_TOKEN}`,
  };

  const res = await fetchWithTimeout("https://leetcode.com/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  return res.json();
}

// ── Data fetchers ────────────────────────────────────────────────────

async function fetchGitHubContributions() {
  try {
    const res = await fetchWithTimeout(
      "https://github-contributions-api.jogruber.de/v4/contributorsambhav?y=last",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.contributions || [];
  } catch {
    return [];
  }
}

async function fetchLeetCodeCalendar() {
  try {
    const query = `
      query userProfileCalendar($username: String!, $year: Int) {
        matchedUser(username: $username) {
          userCalendar(year: $year) {
            submissionCalendar
          }
        }
      }
    `;

    const json = await leetCodeGraphQL(query, { username: "coder_sambhav" });
    if (!json) return [];

    const submissionCalendar =
      json?.data?.matchedUser?.userCalendar?.submissionCalendar;
    if (!submissionCalendar) return [];

    const calendarData =
      typeof submissionCalendar === "string"
        ? JSON.parse(submissionCalendar)
        : submissionCalendar;

    const calendar = calendarData as Record<string, number>;
    const counts = Object.values(calendar).filter(
      (v) => typeof v === "number"
    ) as number[];
    const maxCount = Math.max(...counts, 1);

    return Object.entries(calendar).map(([timestamp, count]) => {
      const date = new Date(parseInt(timestamp) * 1000)
        .toISOString()
        .split("T")[0];
      const numCount = count as number;
      return {
        date,
        count: numCount,
        level:
          numCount > 0
            ? (Math.min(Math.ceil((numCount / maxCount) * 4), 4) as
                | 0
                | 1
                | 2
                | 3
                | 4)
            : (0 as const),
      };
    });
  } catch {
    return [];
  }
}

async function fetchCodeforcesData() {
  try {
    const res = await fetchWithTimeout(
      "https://codeforces.com/api/user.status?handle=FrozenMind18",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();

    if (data.status !== "OK") return [];

    const dateCounts: Record<string, number> = {};
    data.result.forEach((sub: { creationTimeSeconds: number }) => {
      const date = new Date(sub.creationTimeSeconds * 1000)
        .toISOString()
        .split("T")[0];
      dateCounts[date] = (dateCounts[date] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(dateCounts), 1);
    return Object.entries(dateCounts).map(([date, count]) => ({
      date,
      count,
      level:
        count > 0 ? Math.min(Math.floor((count / maxCount) * 4) + 1, 4) : 0,
    }));
  } catch {
    return [];
  }
}

async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
  try {
    const query = `
      query userProblemsSolved($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
          }
        }
      }
    `;

    const json = await leetCodeGraphQL(query, { username: "coder_sambhav" });
    if (!json) return FALLBACK_LEETCODE_STATS;

    const allQuestions = json?.data?.allQuestionsCount;
    const acSubmissions =
      json?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
    const ranking = json?.data?.matchedUser?.profile?.ranking;

    if (!acSubmissions) return FALLBACK_LEETCODE_STATS;

    const getCount = (
      arr: { difficulty: string; count: number }[],
      diff: string
    ) => arr.find((a) => a.difficulty === diff)?.count ?? 0;

    return {
      totalSolved: getCount(acSubmissions, "All"),
      easySolved: getCount(acSubmissions, "Easy"),
      totalEasy: allQuestions ? getCount(allQuestions, "Easy") : 922,
      mediumSolved: getCount(acSubmissions, "Medium"),
      totalMedium: allQuestions ? getCount(allQuestions, "Medium") : 1993,
      hardSolved: getCount(acSubmissions, "Hard"),
      totalHard: allQuestions ? getCount(allQuestions, "Hard") : 902,
      ranking: ranking || 0,
    };
  } catch {
    return FALLBACK_LEETCODE_STATS;
  }
}

export async function GET() {
  const [github, leetcode, codeforces, leetcodeStats] = await Promise.all([
    fetchGitHubContributions(),
    fetchLeetCodeCalendar(),
    fetchCodeforcesData(),
    fetchLeetCodeStats(),
  ]);

  return NextResponse.json({
    contributions: { github, leetcode, codeforces },
    leetcodeStats,
  });
}
