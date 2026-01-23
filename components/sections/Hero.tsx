// components/sections/Hero.tsx
"use client";

import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

import ContributionCalendarClient from "../ui/contribution-calendar-client";
import LeetCodeStatsMeter from "../ui/LeetCodeStatsMeter";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const socialLinks = [
  { name: "GitHub", icon: Github, key: "Github" },
  { name: "LinkedIn", icon: Linkedin, key: "Linkedin" },
  { name: "Email", icon: Mail, key: "Mail" },
];

interface HeroProps {
  contributions?: any;
}

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

export default function Hero({ contributions }: HeroProps) {
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(null);
  
  // Get social links from profile
  const getSocialUrl = (key: string) => {
    const social = profile.social.find(s => s.icon === key);
    return social?.url || "#";
  };

  useEffect(() => {
    // Fetch LeetCode stats
    async function fetchLeetCodeStats() {
      try {
        // Fetch user's solved stats
        const solvedResponse = await fetch('https://alfa-leetcode-api.onrender.com/coder_sambhav/solved');
        const solvedData = await solvedResponse.json();
        
        // Fetch all problems to get total counts
        const problemsResponse = await fetch('https://alfa-leetcode-api.onrender.com/problems?limit=3000');
        const problemsData = await problemsResponse.json();
        
        if (solvedData && solvedData.solvedProblem !== undefined && problemsData) {
          // Count total problems by difficulty
          const totalEasy = problemsData.filter((p: any) => p.difficulty === 'Easy').length;
          const totalMedium = problemsData.filter((p: any) => p.difficulty === 'Medium').length;
          const totalHard = problemsData.filter((p: any) => p.difficulty === 'Hard').length;
          
          setLeetcodeStats({
            totalSolved: solvedData.solvedProblem,
            easySolved: solvedData.easySolved,
            totalEasy: totalEasy || 922,
            mediumSolved: solvedData.mediumSolved,
            totalMedium: totalMedium || 1993,
            hardSolved: solvedData.hardSolved,
            totalHard: totalHard || 902,
            ranking: solvedData.ranking || 0
          });
        }
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        // Use fallback hardcoded values if API fails
        setLeetcodeStats({
          totalSolved: 364,
          easySolved: 131,
          totalEasy: 922,
          mediumSolved: 204,
          totalMedium: 1993,
          hardSolved: 29,
          totalHard: 902,
          ranking: 0
        });
      }
    }

    fetchLeetCodeStats();
  }, []);

  return (
    <section className="pt-12 pb-16 bg-gradient-to-b from-gray-900/60 to-gray-900/30 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Left Column - LeetCode Stats & Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center lg:text-left lg:w-1/3 space-y-8"
          >
            {/* LeetCode Stats - First */}
          

            <div>
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3"
              >
                {profile.name}
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-400 mb-4"
              >
                {profile.title}
              </motion.p>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm text-gray-500 leading-relaxed mb-6 mx-auto lg:mx-0"
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
                      className="group p-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}
                
                {/* Resume/Portfolio Link */}
                <motion.a
                  href="/projects"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.75 }}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
                >
                  View Work
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 sm:p-7 backdrop-blur-sm">
              <ContributionCalendarClient contributions={contributions} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}