"use client";

import { Cloud, Code2, Cpu, Database, Sparkles } from "lucide-react";
import React, { useMemo, useState } from "react";

import { JSX } from "react";
import { allProjects } from "@/data/projects";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Technology {
  name: string;
  logo: string;
}

interface TechCategory {
  category: string;
  icon: React.ReactNode;
  technologies: Technology[];
}

interface Methodology {
  name: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "web" | "web3" | "ai" | "fullstack" | "blockchain";
  featured: boolean;
  github?: string;
  live?: string;
  video?: string;
  image?: string;
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

const techCategories: TechCategory[] = [
  {
    category: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    technologies: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    category: "Frameworks",
    icon: <Cpu className="w-4 h-4" />,
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    category: "Databases",
    icon: <Database className="w-4 h-4" />,
    technologies: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    category: "DevOps",
    icon: <Cloud className="w-4 h-4" />,
    technologies: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Cloudflare", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
    ],
  },
];

const methodologies: Methodology[] = [
  { name: "RESTful APIs", description: "Scalable endpoints" },
  { name: "WebSockets", description: "Real-time data" },
  { name: "JWT Auth", description: "Secure tokens" },
  { name: "Responsive", description: "Mobile-first" },
];

export const projectHasTechnology = (project: Project, techName: string): boolean => {
  return project.technologies.some(tech => 
    tech.toLowerCase() === techName.toLowerCase()
  );
};

export default function TechStack(): JSX.Element {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [hoveredPractice, setHoveredPractice] = useState<string | null>(null);
  const router = useRouter();

  const techProjectCounts = useMemo<Record<string, number>>(() => {
    const counts: Record<string, number> = {};
    const allTechs = techCategories.flatMap(cat => cat.technologies.map(t => t.name));
    
    allTechs.forEach(techName => {
      const count = allProjects.filter((project: Project) => 
        projectHasTechnology(project, techName)
      ).length;
      counts[techName] = count;
    });
    
    return counts;
  }, []);

  const handleTechClick = (techName: string): void => {
    router.push(`/projects?tech=${encodeURIComponent(techName)}`);
  };

  return (
    <section className="py-20 px-4 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(59,130,246,0.04),transparent)]" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300/90 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-medium">Tech Arsenal</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mb-3">
            Technical{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400/80 text-sm max-w-lg mx-auto font-light">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Single Box for All Tech Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 mb-6 hover:border-white/[0.12] transition-all duration-500"
        >
          <div className="space-y-5">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.05 }}
                className="flex items-start gap-4"
              >
                {/* Category Label */}
                <div className="flex items-center gap-2 shrink-0 min-w-[140px]">
                  <div className="p-1.5 rounded-lg bg-white/[0.05] text-gray-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">
                    {category.category}
                  </h3>
                </div>
                
                {/* Horizontally Scrollable Technologies */}
                <div className="flex-1 overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                  <div className="flex gap-2 pb-2">
                    {category.technologies.map((tech, techIndex) => {
                      const projectCount = techProjectCounts[tech.name] || 0;
                      const isHovered = hoveredTech === tech.name;
                      
                      return (
                        <motion.button
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: categoryIndex * 0.03 + techIndex * 0.01,
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          onHoverStart={() => setHoveredTech(tech.name)}
                          onHoverEnd={() => setHoveredTech(null)}
                          onClick={() => handleTechClick(tech.name)}
                          className="relative group/tech flex items-center gap-2 px-3 py-2 bg-white/[0.04] border border-white/[0.06] rounded-lg hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-200 cursor-pointer shrink-0"
                        >
                          <div className="w-4 h-4 flex items-center justify-center shrink-0">
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              className="w-full h-full object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>

                          <span className="text-xs font-medium text-gray-300 group-hover/tech:text-white transition-colors whitespace-nowrap">
                            {tech.name}
                          </span>

                          {/* Project count badge */}
                          {projectCount > 0 && (
                            <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded group-hover/tech:bg-blue-500/20">
                              {projectCount}
                            </span>
                          )}

                          {/* Tooltip */}
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-2xl whitespace-nowrap z-20"
                            >
                              <p className="text-xs font-medium text-gray-200">
                                {projectCount} {projectCount === 1 ? 'project' : 'projects'}
                              </p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                <div className="w-2 h-2 bg-gray-900/95 border-r border-b border-white/10 rotate-45 -translate-y-1" />
                              </div>
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Practices - Hover to Show Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500/[0.03] to-purple-500/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-500"
        >
          <div className="flex items-start gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap shrink-0 min-w-[140px] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Practices
            </h3>
            
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent flex-1">
              <div className="flex gap-3 pb-2">
                {methodologies.map((methodology, index) => {
                  const isHovered = hoveredPractice === methodology.name;
                  
                  return (
                    <motion.div
                      key={methodology.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + index * 0.03 }}
                      onHoverStart={() => setHoveredPractice(methodology.name)}
                      onHoverEnd={() => setHoveredPractice(null)}
                      className="relative group px-4 py-2.5 bg-white/[0.04] border border-white/[0.06] rounded-lg hover:bg-purple-500/10 hover:border-purple-500/30 transition-all cursor-default shrink-0"
                    >
                      <div className="flex items-center gap-3">
                        <p className="text-xs font-semibold text-gray-200 group-hover:text-white transition-colors whitespace-nowrap">
                          {methodology.name}
                        </p>
                        
                        {/* Description appears on hover */}
                        <motion.p
                          initial={{ opacity: 0, width: 0 }}
                          animate={isHovered ? { opacity: 1, width: 'auto' } : { opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[10px] text-gray-400 whitespace-nowrap overflow-hidden"
                        >
                          • {methodology.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </section>
  );
}