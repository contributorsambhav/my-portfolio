"use client";

import { Activity, ActivityCalendar } from "react-activity-calendar";
import { Code2, Github, Trophy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import clsx from "clsx";
import { useEffect, useState } from "react";

type Platform = "github" | "leetcode" | "codeforces" | "combined";

export interface PlatformContributions {
  github?: Activity[];
  leetcode?: Activity[];
  codeforces?: Activity[];
}

interface ContributionCalendarClientProps {
  contributions: PlatformContributions | null;
}

const platformConfig = {
  github: {
    label: "GitHub",
    icon: Github,
    theme: {
      light: ["hsl(0, 0%, 92%)", "rgb(var(--accent) / 0.3)", "rgb(var(--accent) / 0.5)", "rgb(var(--accent) / 0.75)", "rgb(var(--accent))"] as [string, string, string, string, string],
      dark: ["hsl(0, 0%, 12%)", "rgb(var(--accent) / 0.3)", "rgb(var(--accent) / 0.5)", "rgb(var(--accent) / 0.75)", "rgb(var(--accent))"] as [string, string, string, string, string],
    },
  },
  leetcode: {
    label: "LeetCode",
    icon: Code2,
    theme: {
      light: ["hsl(0, 0%, 92%)", "rgb(var(--accent) / 0.3)", "rgb(var(--accent) / 0.5)", "rgb(var(--accent) / 0.75)", "rgb(var(--accent))"] as [string, string, string, string, string],
      dark: ["hsl(0, 0%, 12%)", "rgb(var(--accent) / 0.3)", "rgb(var(--accent) / 0.5)", "rgb(var(--accent) / 0.75)", "rgb(var(--accent))"] as [string, string, string, string, string],
    },
  },
  codeforces: {
    label: "Codeforces",
    icon: Trophy,
    theme: {
      light: ["hsl(0, 0%, 92%)", "rgb(var(--accent) / 0.3)", "rgb(var(--accent) / 0.5)", "rgb(var(--accent) / 0.75)", "rgb(var(--accent))"] as [string, string, string, string, string],
      dark: ["hsl(0, 0%, 12%)", "rgb(var(--accent) / 0.3)", "rgb(var(--accent) / 0.5)", "rgb(var(--accent) / 0.75)", "rgb(var(--accent))"] as [string, string, string, string, string],
    },
  },
  combined: {
    label: "Combined",
    icon: Trophy,
    theme: {
      light: ["hsl(0, 0%, 92%)", "rgb(var(--accent) / 0.3)", "rgb(var(--accent) / 0.5)", "rgb(var(--accent) / 0.75)", "rgb(var(--accent))"] as [string, string, string, string, string],
      dark: ["hsl(0, 0%, 12%)", "rgb(var(--accent) / 0.3)", "rgb(var(--accent) / 0.5)", "rgb(var(--accent) / 0.75)", "rgb(var(--accent))"] as [string, string, string, string, string],
    },
  },
} as const;

function calculateLevel(count: number, maxCount: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  const quartile = maxCount / 4;
  if (count <= quartile) return 1;
  if (count <= quartile * 2) return 2;
  if (count <= quartile * 3) return 3;
  return 4;
}

function mergeCombinedContributions(
  contributions: PlatformContributions | null
): Activity[] {
  if (!contributions) return [];
  const dateMap = new Map<string, number>();

  ["github", "leetcode", "codeforces"].forEach((platform) => {
    const platformData = contributions[platform as keyof PlatformContributions];
    if (platformData) {
      platformData.forEach((activity) => {
        const current = dateMap.get(activity.date) || 0;
        dateMap.set(activity.date, current + activity.count);
      });
    }
  });

  const counts = Array.from(dateMap.values());
  const maxCount = Math.max(...counts, 1);

  return Array.from(dateMap.entries())
    .map(([date, count]) => ({
      date,
      count,
      level: calculateLevel(count, maxCount),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function processPlatformData(data: Activity[]): Activity[] {
  if (!data || data.length === 0) return [];
  const maxCount = Math.max(...data.map(a => a.count), 1);
  return data.map(activity => ({
    ...activity,
    level: calculateLevel(activity.count, maxCount),
  }));
}

export default function ContributionCalendarClient({
  contributions: initialContributions,
}: ContributionCalendarClientProps) {
  const [activeTab, setActiveTab] = useState<Platform>("combined");
  const [contributions, setContributions] =
    useState<PlatformContributions | null>(initialContributions);

  useEffect(() => {
    const hasLeetCode =
      initialContributions?.leetcode &&
      initialContributions.leetcode.length > 0;
    if (hasLeetCode) return;

    const fetchLeetCode = async () => {
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
        const res = await fetch("/api/leetcode", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query,
            variables: { username: "coder_sambhav" },
          }),
        });
        if (!res.ok) return;
        const json = await res.json();
        const raw = json?.data?.matchedUser?.userCalendar?.submissionCalendar;
        if (!raw) return;

        const calendar: Record<string, number> =
          typeof raw === "string" ? JSON.parse(raw) : raw;
        const counts = Object.values(calendar).filter((v) => typeof v === "number") as number[];
        const maxCount = Math.max(...counts, 1);

        const leetcodeData: Activity[] = Object.entries(calendar).map(
          ([timestamp, count]) => {
            const date = new Date(parseInt(timestamp) * 1000).toISOString().split("T")[0];
            const numCount = count as number;
            return {
              date,
              count: numCount,
              level: numCount > 0
                ? (Math.min(Math.ceil((numCount / maxCount) * 4), 4) as 0 | 1 | 2 | 3 | 4)
                : (0 as const),
            };
          }
        );

        if (leetcodeData.length > 0) {
          setContributions((prev) => ({ ...prev, leetcode: leetcodeData }));
        }
      } catch {
        // fail silently
      }
    };
    fetchLeetCode();
  }, [initialContributions]);

  if (!contributions) return null;

  const combinedData = mergeCombinedContributions(contributions);
  const processedContributions = {
    github: contributions.github ? processPlatformData(contributions.github) : [],
    leetcode: contributions.leetcode ? processPlatformData(contributions.leetcode) : [],
    codeforces: contributions.codeforces ? processPlatformData(contributions.codeforces) : [],
  };

  const totalCounts = {
    github: processedContributions.github.reduce((sum, a) => sum + a.count, 0),
    leetcode: processedContributions.leetcode.reduce((sum, a) => sum + a.count, 0),
    codeforces: processedContributions.codeforces.reduce((sum, a) => sum + a.count, 0),
    combined: combinedData.reduce((sum, a) => sum + a.count, 0),
  };

  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setThemeMode(isDark ? "dark" : "light");
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const config = platformConfig[activeTab];
  const Icon = config.icon;
  const data = activeTab === "combined"
    ? combinedData
    : processedContributions[activeTab as keyof typeof processedContributions] || [];
  const totalCount = totalCounts[activeTab];

  return (
    <div className="flex flex-col gap-6 w-full overflow-hidden">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-zinc-200 dark:border-zinc-800/50 pb-2 overflow-x-auto hide-scrollbar">
        {(["combined", "github", "leetcode", "codeforces"] as Platform[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "text-sm font-medium tracking-tight transition-colors capitalize",
              activeTab === tab
                ? "text-zinc-900 dark:text-zinc-100 border-b-2 border-zinc-900 dark:border-zinc-100 pb-[7px] -mb-[10px]"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 pb-2 -mb-2"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Calendar Header */}
      <div className="flex items-center justify-between gap-4 mt-2">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{config.label}</h3>
        </div>
        <span className="text-xs text-zinc-500">{totalCount.toLocaleString()} contributions</span>
      </div>
      
      {/* Calendar Grid */}
      <div className="overflow-x-auto pb-4">
        {(!data || data.length === 0) ? (
           <div className="h-24 flex items-center justify-center text-xs text-zinc-500 animate-pulse">
             Loading activity...
           </div>
        ) : (
          <ActivityCalendar
            data={data}
            theme={config.theme}
            colorScheme={themeMode}
            blockSize={10}
            blockMargin={4}
            fontSize={12}
            renderBlock={(block, activity) => (
              <TooltipProvider key={activity.date}>
                <Tooltip>
                  <TooltipTrigger asChild>{block}</TooltipTrigger>
                  <TooltipContent>
                    <div className="text-xs">
                      <div className="font-semibold">{activity.date}</div>
                      <div className="text-zinc-400">
                        {activity.count === 0
                          ? "No contributions"
                          : `${activity.count} contribution${activity.count !== 1 ? 's' : ''}`}
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            showWeekdayLabels
          />
        )}
      </div>
    </div>
  );
}