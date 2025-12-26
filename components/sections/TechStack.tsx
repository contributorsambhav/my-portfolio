"use client";

import React, { useState } from "react";

import { allProjects } from "@/data/projects";
import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Languages",
    technologies: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", years: "3+" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", years: "2+" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", years: "2+" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", years: "2+" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", years: "1+" },
      { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg", years: "1+" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", years: "3+" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", years: "3+" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", years: "2+" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", years: "2+" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", years: "2+" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", years: "2+" },
      { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", years: "1+" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", years: "2+" },
    ],
  },
  {
    category: "Databases & Tools",
    technologies: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", years: "2+" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", years: "1+" },
      { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", years: "1+" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", years: "1+" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", years: "2+" },
    ],
  },
  {
    category: "DevOps & Cloud",
    technologies: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", years: "3+" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", years: "3+" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", years: "1+" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", years: "2+" },
      { name: "Cloudflare", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg", years: "1+" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", years: "3+" },
    ],
  },
];

const methodologies = [
  { name: "RESTful APIs", description: "Building scalable REST endpoints" },
  { name: "WebSockets", description: "Real-time bidirectional communication" },
  { name: "JWT Auth", description: "Secure token-based authentication" },
  { name: "Responsive Design", description: "Mobile-first approach" },
];

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="mx-auto w-[90%] md:w-[80%] lg:w-[70%]">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Technologies I work with to build modern applications
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border rounded-xl p-6 md:p-8 space-y-8 shadow-lg"
        >
          {techCategories.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + techIndex * 0.02,
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    onHoverStart={() => setHoveredTech(tech.name)}
                    onHoverEnd={() => setHoveredTech(null)}
                    className="relative group inline-flex items-center gap-2.5 px-4 py-2 bg-background border rounded-lg hover:shadow-lg hover:border-primary/50 transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>

                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                      {tech.name}
                    </span>

                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-popover border rounded-md shadow-lg whitespace-nowrap z-10"
                      >
                        <p className="text-xs font-medium">
                          {tech.years} experience
                        </p>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
                          <div className="w-2 h-2 bg-popover border-r border-b rotate-45" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-6 border-t space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Development Methodologies & Practices
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {methodologies.map((methodology, index) => (
                <motion.div
                  key={methodology.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.03 }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative px-4 py-3 bg-primary/5 border border-primary/10 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default"
                >
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {methodology.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {methodology.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}