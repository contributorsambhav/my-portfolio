// components/sections/Hero.tsx
"use client";

import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

import ContributionCalendarClient from "../ui/contribution-calendar-client";
import LeetCodeStatsMeter from "../ui/LeetCodeStatsMeter";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useEffect, useState } from "react";

const socialLinks = [
  { name: "GitHub", icon: Github, key: "Github" },
  { name: "LinkedIn", icon: Linkedin, key: "Linkedin" },
  { name: "Email", icon: Mail, key: "Mail" },
];

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

interface HeroProps {
  contributions?: any;
  leetcodeStats?: LeetCodeStats | null;
}

export default function Hero({ contributions, leetcodeStats: initialStats }: HeroProps) {
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null | undefined>(initialStats);

  // Client-side fallback: fetch LeetCode stats from browser if server-side failed
  useEffect(() => {
    // If we already have real stats (not null/undefined, and totalSolved > 0), skip
    if (initialStats && initialStats.totalSolved > 0) return;

    const fetchStats = async () => {
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

        const res = await fetch("https://leetcode.com/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query,
            variables: { username: "coder_sambhav" },
          }),
        });
        if (!res.ok) return;
        const json = await res.json();

        const allQuestions = json?.data?.allQuestionsCount;
        const acSubmissions = json?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
        const ranking = json?.data?.matchedUser?.profile?.ranking;

        if (!acSubmissions) return;
        console.log(acSubmissions);
        const getCount = (arr: { difficulty: string; count: number }[], diff: string) =>
          arr.find((a) => a.difficulty === diff)?.count ?? 0;

        setLeetcodeStats({
          totalSolved: getCount(acSubmissions, "All"),
          easySolved: getCount(acSubmissions, "Easy"),
          totalEasy: allQuestions ? getCount(allQuestions, "Easy") : 922,
          mediumSolved: getCount(acSubmissions, "Medium"),
          totalMedium: allQuestions ? getCount(allQuestions, "Medium") : 1993,
          hardSolved: getCount(acSubmissions, "Hard"),
          totalHard: allQuestions ? getCount(allQuestions, "Hard") : 902,
          ranking: ranking || 0,
        });
      } catch {
        // silently fail — keep whatever server provided
      }
    };

    fetchStats();
  }, [initialStats]);
  // Get social links from profile
  const getSocialUrl = (key: string) => {
    const social = profile.social.find(s => s.icon === key);
    return social?.url || "#";
  };

  return (
    <section className="pt-8 pb-12 bg-gradient-to-b from-gray-900/60 to-gray-900/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
          {/* Left Column - LeetCode Stats & Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center lg:text-left lg:w-1/3 space-y-6"
          >
            {/* LeetCode Stats - First */}


            <div>
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-2"
              >
                {profile.name}
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-base text-gray-400 mb-3"
              >
                {profile.title}
              </motion.p>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-5 mx-auto lg:mx-0 max-w-md"
              >
                Building innovative solutions across web2 and web3. Creating scalable applications and contributing to open-source.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-2 flex-wrap"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={getSocialUrl(social.key)}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                      className="group p-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}

                {/* Resume/Portfolio Link */}
                <motion.a
                  href="/projects"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.75 }}
                  className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-xs font-medium"
                >
                  View Work
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <LeetCodeStatsMeter stats={leetcodeStats} />
            </motion.div>
          </motion.div>

          {/* Right Column - Contribution Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 w-full max-w-4xl"
          >
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 sm:p-5 backdrop-blur-sm">
              <ContributionCalendarClient contributions={contributions} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}