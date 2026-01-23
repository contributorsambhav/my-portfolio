"use client";

import { Activity, ActivityCalendar } from "react-activity-calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { PlatformContributions } from "./contribution-calendar";
import clsx from "clsx";
import { useState } from "react";

type Platform = "github" | "leetcode" | "codeforces";

interface ContributionCalendarClientProps {
  contributions: PlatformContributions;
}

const platformConfig = {
  github: {
    label: "GitHub",
    theme: {
      light: ["hsl(0, 0%, 80%)", "hsl(0, 0%, 46%)"] as [string, string],
      dark: ["hsl(0, 0%, 15%)", "hsl(0, 0%, 65%)"] as [string, string],
    },
  },
  leetcode: {
    label: "LeetCode",
    theme: {
      light: ["hsl(33, 20%, 90%)", "hsl(25, 95%, 45%)"] as [string, string],
      dark: ["hsl(33, 15%, 12%)", "hsl(25, 95%, 50%)"] as [string, string],
    },
  },
  codeforces: {
    label: "Codeforces",
    theme: {
      light: ["hsl(210, 20%, 90%)", "hsl(220, 85%, 45%)"] as [string, string],
      dark: ["hsl(210, 15%, 12%)", "hsl(220, 85%, 55%)"] as [string, string],
    },
  },
} as const;

const platforms: Platform[] = ["github", "leetcode", "codeforces"];

export default function ContributionCalendarClient({
  contributions,
}: ContributionCalendarClientProps) {
  const [activePlatform, setActivePlatform] = useState<Platform>("github");

  if (!contributions) {
    return null;
  }

  const currentContributions = contributions[activePlatform];
  const config = platformConfig[activePlatform];
  const renderBlock =
    (block: React.ReactElement, activity: Activity) => (
      <Tooltip>
        <TooltipTrigger asChild>{block}</TooltipTrigger>
        <TooltipContent className="text-[0.65rem] py-[4.9px] rounded px-1.5">
          {`${activity.count} activities on ${activity.date}`}
        </TooltipContent>
      </Tooltip>
    )

  const renderColorLegend =
    (block: React.ReactElement, level: number) => (
      <Tooltip >
        <TooltipTrigger asChild>{block}</TooltipTrigger>
        <TooltipContent className="text-[0.65rem] py-[4.9px] rounded px-2">
          {`Level: ${level}`}
        </TooltipContent>
      </Tooltip>
    )

  return (
    <div className="w-full">
      <div className="flex gap-3 mb-3">
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={() => setActivePlatform(platform)}
            className={clsx(
              "text-xs font-medium transition-all duration-200 ease-out",
              activePlatform === platform
                ? "text-neutral-400"
                : "text-neutral-500"
            )}  
          >
            {platformConfig[platform].label}
          </button>
        ))}
      </div>
      <TooltipProvider delayDuration={0} skipDelayDuration={0}>
        <ActivityCalendar
          data={currentContributions}
          colorScheme="dark"
          fontSize={12}
          blockSize={10}
          theme={config.theme}
          showMonthLabels={false}
          renderBlock={renderBlock}
          renderColorLegend={renderColorLegend}
        />
      </TooltipProvider>
    </div>
  );
}