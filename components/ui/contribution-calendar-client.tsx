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
      // GitHub uses distinct colors with clear empty state
      light: [
        "hsl(0, 0%, 92%)", // Level 0 - Empty (light gray)
        "hsl(142, 52%, 85%)", // Level 1 - Very light green
        "hsl(142, 62%, 65%)", // Level 2 - Light green
        "hsl(142, 72%, 45%)", // Level 3 - Medium green
        "hsl(142, 82%, 35%)", // Level 4 - Dark green
      ] as [string, string, string, string, string],
      dark: [
        "hsl(0, 0%, 18%)", // Level 0 - Empty (dark gray)
        "hsl(142, 40%, 25%)", // Level 1 - Very dark green
        "hsl(142, 50%, 35%)", // Level 2 - Dark green
        "hsl(142, 60%, 45%)", // Level 3 - Medium green
        "hsl(142, 70%, 55%)", // Level 4 - Bright green
      ] as [string, string, string, string, string],
    },
  },
  leetcode: {
    label: "LeetCode",
    icon: Code2,
    theme: {
      light: [
        "hsl(0, 0%, 92%)",
        "hsl(25, 70%, 85%)",
        "hsl(25, 80%, 65%)",
        "hsl(25, 90%, 51%)",
        "hsl(25, 95%, 41%)",
      ] as [string, string, string, string, string],
      dark: [
        "hsl(0, 0%, 18%)",
        "hsl(25, 60%, 25%)",
        "hsl(25, 70%, 35%)",
        "hsl(25, 80%, 45%)",
        "hsl(25, 90%, 55%)",
      ] as [string, string, string, string, string],
    },
  },
  codeforces: {
    label: "Codeforces",
    icon: Trophy,
    theme: {
      light: [
        "hsl(0, 0%, 92%)",
        "hsl(220, 70%, 85%)",
        "hsl(220, 75%, 65%)",
        "hsl(220, 82%, 47%)",
        "hsl(220, 90%, 37%)",
      ] as [string, string, string, string, string],
      dark: [
        "hsl(0, 0%, 18%)",
        "hsl(220, 50%, 25%)",
        "hsl(220, 60%, 35%)",
        "hsl(220, 70%, 45%)",
        "hsl(220, 80%, 55%)",
      ] as [string, string, string, string, string],
    },
  },
  combined: {
    label: "Combined",
    icon: Trophy,
    theme: {
      light: [
        "hsl(0, 0%, 92%)",
        "hsl(270, 70%, 85%)",
        "hsl(270, 80%, 65%)",
        "hsl(270, 90%, 50%)",
        "hsl(270, 95%, 40%)",
      ] as [string, string, string, string, string],
      dark: [
        "hsl(0, 0%, 18%)",
        "hsl(270, 50%, 30%)",
        "hsl(270, 60%, 40%)",
        "hsl(270, 70%, 50%)",
        "hsl(270, 80%, 60%)",
      ] as [string, string, string, string, string],
    },
  },
} as const;

// Calculate contribution level based on count
// This mimics GitHub's actual algorithm more closely
function calculateLevel(count: number, maxCount: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  
  // For very low counts, always show level 1
  if (count <= 2) return 1;
  
  // Use quartile-based approach for higher counts
  // This ensures better distribution across levels
  const quartile = maxCount / 4;
  
  if (count <= quartile) return 1;
  if (count <= quartile * 2) return 2;
  if (count <= quartile * 3) return 3;
  return 4;
}

// Merge contributions from all platforms
function mergeCombinedContributions(
  contributions: PlatformContributions | null
): Activity[] {
  if (!contributions) return [];

  const dateMap = new Map<string, number>();

  // Aggregate all contributions by date
  ["github", "leetcode", "codeforces"].forEach((platform) => {
    const platformData =
      contributions[platform as keyof PlatformContributions];
    if (platformData) {
      platformData.forEach((activity) => {
        const current = dateMap.get(activity.date) || 0;
        dateMap.set(activity.date, current + activity.count);
      });
    }
  });

  // Find max count for level calculation
  const counts = Array.from(dateMap.values());
  const maxCount = Math.max(...counts, 1);

  // Convert map to sorted array with proper levels
  return Array.from(dateMap.entries())
    .map(([date, count]) => ({
      date,
      count,
      level: calculateLevel(count, maxCount),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

// Process platform data with proper level calculation
function processPlatformData(data: Activity[]): Activity[] {
  if (!data || data.length === 0) return [];
  
  const maxCount = Math.max(...data.map(a => a.count), 1);
  
  return data.map(activity => ({
    ...activity,
    level: calculateLevel(activity.count, maxCount),
  }));
}

export default function ContributionCalendarClient({
  contributions,
}: ContributionCalendarClientProps) {
  const [hoveredPlatform, setHoveredPlatform] =
    useState<Platform | null>(null);

  // Early return if no contributions
  if (!contributions) {
    return null;
  }

  // Calculate combined contributions
  const combinedData = mergeCombinedContributions(contributions);

  // Process individual platform data
  const processedContributions = {
    github: contributions.github ? processPlatformData(contributions.github) : [],
    leetcode: contributions.leetcode ? processPlatformData(contributions.leetcode) : [],
    codeforces: contributions.codeforces ? processPlatformData(contributions.codeforces) : [],
  };

  // Get total counts
  const totalCounts = {
    github: processedContributions.github.reduce((sum, a) => sum + a.count, 0),
    leetcode: processedContributions.leetcode.reduce((sum, a) => sum + a.count, 0),
    codeforces: processedContributions.codeforces.reduce((sum, a) => sum + a.count, 0),
    combined: combinedData.reduce((sum, a) => sum + a.count, 0),
  };

  const renderBlock =
    (platform: Platform) =>
    (block: React.ReactElement, activity: Activity) =>
      (
        <TooltipProvider key={activity.date}>
          <Tooltip>
            <TooltipTrigger asChild>{block}</TooltipTrigger>
            <TooltipContent>
              <div className="text-xs">
                <div className="font-semibold">{activity.date}</div>
                <div className="text-muted-foreground">
                  {activity.count === 0 
                    ? "No contributions" 
                    : `${activity.count} contribution${activity.count !== 1 ? 's' : ''}`}
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );

  const CalendarCard = ({ platform }: { platform: Platform }) => {
    const config = platformConfig[platform];
    const Icon = config.icon;
    const data =
      platform === "combined"
        ? combinedData
        : processedContributions[platform as keyof typeof processedContributions] || [];
    const totalCount = totalCounts[platform];
    const isHovered = hoveredPlatform === platform;

    return (
      <div
        className={clsx(
          "rounded-lg border bg-card p-4 transition-all duration-200 sm:p-6",
          isHovered && "shadow-lg ring-2 ring-primary/20"
        )}
        onMouseEnter={() => setHoveredPlatform(platform)}
        onMouseLeave={() => setHoveredPlatform(null)}
      >
        {/* Header */}
        <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            <h3 className="text-sm font-semibold sm:text-base">{config.label}</h3>
          </div>
          <div className="text-xs text-muted-foreground sm:text-sm">
            {totalCount.toLocaleString()} contributions
          </div>
        </div>

        {/* Calendar */}
        <div className="overflow-x-auto">
          <ActivityCalendar
            data={data}
            theme={config.theme}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            
            renderBlock={renderBlock(platform)}
            showWeekdayLabels
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col">
      {/* Header - Fixed */}
      {/*
      <div className="border-b bg-background/95 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h2 className="text-2xl font-bold tracking-tight">Activity Overview</h2>
        <p className="text-muted-foreground">
          {totalCounts.combined.toLocaleString()} total contributions
        </p>
      </div>
      */}

      {/* Scrollable Calendar Container */}
      <div className="max-h-[75vh] flex-1 space-y-4 overflow-y-auto p-4 sm:space-y-6 sm:p-6">
        <CalendarCard platform="combined" />
        <CalendarCard platform="github" />
        <CalendarCard platform="leetcode" />
        <CalendarCard platform="codeforces" />
      </div>

      {/* Legend - Fixed */}
      {/*
      <div className="border-t bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="h-3 w-3 rounded-sm border"
              style={{
                backgroundColor: platformConfig.combined.theme.light[level],
              }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
      */}
    </div>
  );
}