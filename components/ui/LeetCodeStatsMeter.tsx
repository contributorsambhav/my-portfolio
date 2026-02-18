import React from 'react';

interface StatsData {
  totalSolved: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
}

interface LeetCodeStatsMeterProps {
  stats?: StatsData | null;
}

export default function LeetCodeStatsMeter({ stats }: LeetCodeStatsMeterProps) {
  const demoStats: StatsData = {
    totalSolved: 555,
    easySolved: 555,
    totalEasy: 555,
    mediumSolved: 555,
    totalMedium: 555,
    hardSolved: 29,
    totalHard: 555,
    ranking: 2
  };

  const displayStats = stats || demoStats;

  if (!displayStats) {
    return (
      <div className="w-full bg-gray-800/50 border border-gray-700 rounded-2xl p-4">
        <div className="flex items-center justify-center h-48">
          <div className="animate-pulse text-gray-500">Loading stats...</div>
        </div>
      </div>
    );
  }

  const totalQuestions = displayStats.totalEasy + displayStats.totalMedium + displayStats.totalHard;
  const radius = 60; // Reduced from 90
  const circumference = 2 * Math.PI * radius;
  const center = 80; // Reduced from 120 (half of 160)
  const size = 160; // Reduced from 240

  // Calculate individual percentages for multi-segment circle
  const easyPercentage = (displayStats.easySolved / displayStats.totalSolved) * 100;
  const mediumPercentage = (displayStats.mediumSolved / displayStats.totalSolved) * 100;
  const hardPercentage = (displayStats.hardSolved / displayStats.totalSolved) * 100;
  const easyLength = (easyPercentage / 100) * circumference;
  const mediumLength = (mediumPercentage / 100) * circumference;
  const hardLength = (hardPercentage / 100) * circumference;
  const easyOffset = 0;
  const mediumOffset = easyLength;
  const hardOffset = easyLength + mediumLength;

  // Create segments for the circle
  const segments = [
    { percentage: easyPercentage, color: '#f4d805', label: 'Easy' },
    { percentage: mediumPercentage, color: '#06b6d4', label: 'Medium' },
    { percentage: hardPercentage, color: '#ef4444', label: 'Hard' }
  ];

  return (
    <div className="mt-6 flex items-center justify-center lg:justify-start">
      <div className="w-full max-w-md border border-gray-700 rounded-xl p-4">
        <h3 className="text-sm font-medium text-gray-400 mb-3">LeetCode Stats</h3>
        <div className="flex items-center gap-4">
          {/* Circular Meter */}
          <div className="relative flex-shrink-0">
            <svg width={size} height={size} className="transform -rotate-90">
              <defs>
                {/* Gradients for each segment */}
                <linearGradient id="easyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="mediumGradient" x1="0%" y1="0%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
                <linearGradient id="hardGradient" x1="0%" y1="0%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>

              {/* Background circle */}
              <circle cx={center} cy={center} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5" />

              {/* Easy segment */}
              <circle cx={center} cy={center} r={radius} fill="none" stroke="url(#easyGradient)" strokeWidth="5" strokeLinecap="round" strokeDasharray={`${easyLength} ${circumference}`} strokeDashoffset={-easyOffset} className="transition-all duration-1000 ease-out" />

              {/* Medium segment */}
              <circle cx={center} cy={center} r={radius} fill="none" stroke="url(#mediumGradient)" strokeWidth="5" strokeLinecap="round" strokeDasharray={`${mediumLength} ${circumference}`} strokeDashoffset={-mediumOffset} className="transition-all duration-1000 ease-out" />

              {/* Hard segment */}
              <circle cx={center} cy={center} r={radius} fill="none" stroke="url(#hardGradient)" strokeWidth="5" strokeLinecap="round" strokeDasharray={`${hardLength} ${circumference}`} strokeDashoffset={-hardOffset} className="transition-all duration-1000 ease-out" />
            </svg>

            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-xl font-bold text-white">
                {displayStats.totalSolved}
                <span className="text-xs text-gray-400">/{totalQuestions}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-emerald-400 mt-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Solved</span>
              </div>
              {displayStats.ranking > 0 && <div className="text-xs text-gray-400 mt-1">{displayStats.ranking} Rank</div>}
            </div>
          </div>

          {/* Stats cards on the right */}
          <div className="flex-1 space-y-2">
            {/* Easy */}
            <div className="border border-gray-700 rounded-lg p-2.5 hover:bg-gray-700/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-amber-400">Easy</span>
                <span className="text-sm text-gray-300 font-semibold">
                  {displayStats.easySolved}/{displayStats.totalEasy}
                </span>
              </div>
            </div>

            {/* Medium */}
            <div className="border border-gray-700 rounded-lg p-2.5 hover:bg-gray-700/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-cyan-400">Med.</span>
                <span className="text-sm text-gray-300 font-semibold">
                  {displayStats.mediumSolved}/{displayStats.totalMedium}
                </span>
              </div>
            </div>

            {/* Hard */}
            <div className="border border-gray-700 rounded-lg p-2.5 hover:bg-gray-700/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-red-400">Hard</span>
                <span className="text-sm text-gray-300 font-semibold">
                  {displayStats.hardSolved}/{displayStats.totalHard}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
