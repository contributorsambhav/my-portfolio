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
import { useState } from "react";

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
      light: ["hsl(0, 0%, 80%)", "hsl(142, 70%, 45%)"] as [string, string],
      dark: ["hsl(0, 0%, 15%)", "hsl(142, 70%, 50%)"] as [string, string],
    },
  },
  leetcode: {
    label: "LeetCode",
    icon: Code2,
    theme: {
      light: ["hsl(33, 20%, 90%)", "hsl(25, 95%, 45%)"] as [string, string],
      dark: ["hsl(33, 15%, 12%)", "hsl(25, 95%, 50%)"] as [string, string],
    },
  },
  codeforces: {
    label: "Codeforces",
    icon: Trophy,
    theme: {
      light: ["hsl(210, 20%, 90%)", "hsl(220, 85%, 45%)"] as [string, string],
      dark: ["hsl(210, 15%, 12%)", "hsl(220, 85%, 55%)"] as [string, string],
    },
  },
  combined: {
    label: "Combined",
    icon: Trophy,
    theme: {
      light: ["hsl(280, 20%, 90%)", "hsl(270, 70%, 55%)"] as [string, string],
      dark: ["hsl(280, 15%, 12%)", "hsl(270, 70%, 60%)"] as [string, string],
    },
  },
} as const;

// Merge contributions from all platforms
function mergeCombinedContributions(contributions: PlatformContributions | null): Activity[] {
  if (!contributions) return [];
  
  const dateMap = new Map<string, number>();

  // Aggregate all contributions by date
  ["github", "leetcode", "codeforces"].forEach((platform) => {
    const platformData = contributions[platform as keyof PlatformContributions];
    if (platformData) {
      platformData.forEach((activity) => {
        const current = dateMap.get(activity.date) || 0;
        dateMap.set(activity.date, current + activity.count);
      });
    }
  });

  // Convert map to sorted array
  return Array.from(dateMap.entries())
    .map(([date, count]) => ({
      date,
      count,
      level: Math.min(4, Math.floor(count / 3)) as 0 | 1 | 2 | 3 | 4,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export default function ContributionCalendarClient({
  contributions,
}: ContributionCalendarClientProps) {
  const [hoveredPlatform, setHoveredPlatform] = useState<Platform | null>(null);

  // Early return if no contributions
  if (!contributions) {
    return null;
  }

  // Calculate combined contributions
  const combinedData = mergeCombinedContributions(contributions);
  
  // Get total counts
  const totalCounts = {
    github: contributions.github?.reduce((sum, a) => sum + a.count, 0) || 0,
    leetcode: contributions.leetcode?.reduce((sum, a) => sum + a.count, 0) || 0,
    codeforces: contributions.codeforces?.reduce((sum, a) => sum + a.count, 0) || 0,
    combined: combinedData.reduce((sum, a) => sum + a.count, 0),
  };

  const renderBlock = (platform: Platform) => (block: React.ReactElement, activity: Activity) => (
    <Tooltip>
      <TooltipTrigger asChild>{block}</TooltipTrigger>
      <TooltipContent className="text-xs py-1.5 px-3 rounded">
        <div className="space-y-0.5">
          <div className="font-medium">{activity.date}</div>
          <div className="text-neutral-400">{activity.count} contributions</div>
        </div>
      </TooltipContent>
    </Tooltip>
  );

  const CalendarCard = ({ platform }: { platform: Platform }) => {
    const config = platformConfig[platform];
    const Icon = config.icon;
    const data = platform === "combined" ? combinedData : contributions[platform as keyof PlatformContributions] || [];
    const totalCount = totalCounts[platform];
    const isHovered = hoveredPlatform === platform;

    return (
      <div
        className={clsx(
          "relative group rounded-xl border transition-all duration-300",
          "bg-white/[0.02] backdrop-blur-sm ",
          platform === "combined" 
            ? "border-violet-500/20 hover:border-violet-500/40" 
            : platform === "github"
            ? "border-green-500/10 hover:border-green-500/30"
            : platform === "leetcode"
            ? "border-orange-500/10 hover:border-orange-500/30"
            : "border-blue-500/10 hover:border-blue-500/30",
          isHovered && "scale-[1.02] shadow-lg"
        )}
        onMouseEnter={() => setHoveredPlatform(platform)}
        onMouseLeave={() => setHoveredPlatform(null)}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <div className="flex items-center gap-3.5">
            <div className={clsx(
              "w-12 h-12 rounded-lg flex items-center justify-center",
              platform === "combined" && "bg-violet-500/10",
              platform === "github" && "bg-green-500/10",
              platform === "leetcode" && "bg-orange-500/10",
              platform === "codeforces" && "bg-blue-500/10"
            )}>
              <Icon className={clsx(
                "w-6 h-6",
                platform === "combined" && "text-violet-400",
                platform === "github" && "text-green-400",
                platform === "leetcode" && "text-orange-400",
                platform === "codeforces" && "text-blue-400"
              )} />
            </div>
            <div>
              <h3 className="text-base font-medium text-white">{config.label}</h3>
            </div>
          </div>
          <div className="text-sm text-neutral-500 font-medium">
            {totalCount.toLocaleString()}
          </div>
        </div>

        {/* Calendar */}
        <div className="px-6 pb-6 overflow-x-auto scrollbar-hide">
          <TooltipProvider delayDuration={0} skipDelayDuration={0}>
            <ActivityCalendar
              data={data}
              colorScheme="dark"
              fontSize={13}
              blockSize={12}
              blockMargin={4}
              theme={config.theme}
              showWeekdayLabels={false}
              renderBlock={renderBlock(platform)}
              />
          </TooltipProvider>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col">
      {/* Header - Fixed */}
      {/* <div className="flex items-center justify-between mb-4 px-4 pt-4 flex-shrink-0">
        <div>
          <h3 className="text-base font-medium text-white">Activity Overview</h3>
          <p className="text-sm text-neutral-500 mt-1">
            {totalCounts.combined.toLocaleString()} total contributions
          </p>
        </div>
      </div> */}

      {/* Scrollable Calendar Container */}
      <div className="flex-1 overflow-y-scroll max-h-[72vh] overflow-x-hidden px-4 scrollbar-hide">
        <div className="flex flex-col gap-4 pb-4">
          <CalendarCard platform="combined" />
          <CalendarCard platform="leetcode" />
          <CalendarCard platform="github" />
          <CalendarCard platform="codeforces" />
        </div>
      </div>

      {/* Legend - Fixed */}
      {/* <div className="flex items-center justify-center gap-3 text-sm text-neutral-500 py-4 px-Jan
196 activities in 2025
Less
More
LeetCode
419
Feb
Mar
Apr
May
Jun
Jul
Aug
Sep
Oct
Nov
Dec
Jan4 border-t border-white/5 flex-shrink-0">
        <span>Less</span>
        <div className="flex gap-1.5">
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="w-3.5 h-3.5 rounded-sm"
              style={{ 
                backgroundColor: level === 0 
                  ? "hsl(0, 0%, 15%)" 
                  : `hsl(270, 70%, ${60 - level * 8}%)`
              }}
            />
          ))}
        </div>
        <span>More</span>
      </div> */}
    </div>
  );
}