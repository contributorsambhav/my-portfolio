// app/page.tsx
"use client";

import { ArrowRight, Award, Briefcase, ChevronRight, Code2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import ExperienceCard from "../components/shared/ExperienceCard";
import Hero from "../components/sections/Hero";
import Link from "next/link";
import PORCard from "../components/shared/PORCard";
import ProjectCard from "../components/shared/ProjectCard";
import TechStack from "../components/sections/TechStack";
import { allProjects } from "@/data/projects";
import { experiences } from "../data/experience";
import { motion } from "framer-motion";
import { positionsOfResponsibility } from "../data/POR";

// Section Header Component
function SectionHeader({ 
  badge, 
  badgeIcon: BadgeIcon,
  title, 
  highlight, 
  description,
  link,
  linkText 
}: { 
  badge: string;
  badgeIcon?: React.ComponentType<{ className?: string }>;
  title: string;
  highlight: string;
  description: string;
  link?: string;
  linkText?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-400">
          {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
          <span className="font-medium">{badge}</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white">
          {title}{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h2>
        
        <p className="text-gray-400/80 max-w-lg font-light">
          {description}
        </p>
      </motion.div>

      {link && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link 
            href={link}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:bg-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all duration-300"
          >
            <span className="text-sm font-medium">{linkText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}

export default function Home() {
  const [contributions, setContributions] = useState<any>(null);

  useEffect(() => {
    // Fetch contributions client-side
    async function fetchContributions() {
      try {
        const [githubRes, leetcodeRes, codeforcesRes] = await Promise.all([
          fetch(`https://github-contributions-api.jogruber.de/v4/contributorsambhav?y=last`).catch(() => null),
          fetch(`https://alfa-leetcode-api.onrender.com/coder_sambhav/calendar`).catch(() => null),
          fetch(`https://codeforces.com/api/user.status?handle=FrozenMind18`).catch(() => null)
        ]);

        const github = githubRes ? await githubRes.json().then(d => d.contributions).catch(() => []) : [];
        const leetcodeData = leetcodeRes ? await leetcodeRes.json().catch(() => null) : null;
        const codeforcesData = codeforcesRes ? await codeforcesRes.json().catch(() => ({ status: 'FAILED' })) : { status: 'FAILED' };
        console.log(leetcodeData, "leetcodeData");
        console.log(codeforcesData, "codeforcesData");
        // Process LeetCode data
        let leetcode: any[] = [];
        if (leetcodeData?.submissionCalendar) {
          const calendarData = typeof leetcodeData.submissionCalendar === 'string' 
            ? JSON.parse(leetcodeData.submissionCalendar)
            : leetcodeData.submissionCalendar;
          const calendar = calendarData as Record<string, number>;
          const counts = Object.values(calendar).filter(v => typeof v === 'number') as number[];
          const maxCount = Math.max(...counts, 1);
          
          leetcode = Object.entries(calendar).map(([timestamp, count]) => {
            const date = new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0];
            const numCount = count as number;
            return {
              date,
              count: numCount,
              level: numCount > 0 ? Math.min(Math.ceil((numCount / maxCount) * 4), 4) as 0 | 1 | 2 | 3 | 4 : 0 as const
            };
          });
        }

        // Process Codeforces data
        let codeforces: any[] = [];
        if (codeforcesData.status === 'OK') {
          const dateCounts: Record<string, number> = {};
          codeforcesData.result.forEach((sub: any) => {
            const date = new Date(sub.creationTimeSeconds * 1000).toISOString().split('T')[0];
            dateCounts[date] = (dateCounts[date] || 0) + 1;
          });
          const maxCount = Math.max(...Object.values(dateCounts), 1);
          codeforces = Object.entries(dateCounts).map(([date, count]) => ({
            date,
            count,
            level: count > 0 ? Math.min(Math.floor((count / maxCount) * 4) + 1, 4) : 0
          }));
        }

        setContributions({ github, leetcode, codeforces });
      } catch (error) {
        console.error('Error fetching contributions:', error);
        setContributions({ github: [], leetcode: [], codeforces: [] });
      }
    }

    fetchContributions();
  }, []);

  const featuredProjects = allProjects
    .filter(project => project.featured)
    .sort((a, b) => Number(a.id) - Number(b.id));

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <Hero contributions={contributions} />

      {/* Tech Stack */}
      <TechStack />

      <Divider />

      {/* Featured Projects Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.08),transparent)]" />
        
        <div className="max-w-6xl mx-auto relative">
          <SectionHeader
            badge="Featured Work"
            badgeIcon={Sparkles}
            title="Featured"
            highlight="Projects"
            description="A showcase of my best work demonstrating full-stack development and problem-solving skills."
            link="/projects"
            linkText="View All Projects"
          />

          <div className="space-y-5">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Experience Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(59,130,246,0.06),transparent)]" />
        
        <div className="max-w-6xl mx-auto relative">
          <SectionHeader
            badge="Career Journey"
            badgeIcon={Briefcase}
            title="Work"
            highlight="Experience"
            description="Professional experience building products and leading technical initiatives."
            link="/work"
            linkText="Full Experience"
          />

          <div className="space-y-5">
            {experiences.slice(0, 2).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ExperienceCard experience={exp} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Positions of Responsibility Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(168,85,247,0.06),transparent)]" />
        
        <div className="max-w-6xl mx-auto relative">
          <SectionHeader
            badge="Leadership"
            badgeIcon={Award}
            title="Positions of"
            highlight="Responsibility"
            description="Leadership roles and community contributions demonstrating initiative and impact."
            link="/por"
            linkText="View All Positions"
          />

          <div className="space-y-5">
            {positionsOfResponsibility.map((por, index) => (
              <motion.div
                key={por.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PORCard por={por} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Explore More Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(120,119,198,0.08),transparent)]" />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white mb-4">
              Explore{" "}
              <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                More
              </span>
            </h2>
            <p className="text-gray-400/80 max-w-lg mx-auto font-light">
              Dive deeper into my journey and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/projects" className="group block">
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-blue-500/[0.08] to-cyan-500/[0.04] border border-blue-500/10 hover:border-blue-500/25 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Code2 className="w-7 h-7 text-blue-400" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      All Projects
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Complete portfolio showcasing full-stack development, AI, and blockchain solutions.
                    </p>
                    
                    <div className="flex items-center gap-2 text-blue-400/80 text-sm font-medium group-hover:text-blue-300 transition-colors">
                      <span>Browse all</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </main>
  );
}