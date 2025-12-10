// components/sections/TechStack.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Git', icon: '📝' },
  { name: 'Solidity', icon: '⛓️' },
  { name: 'Web3', icon: '🌐' },
  { name: 'GraphQL', icon: '◼️' },
  { name: 'Redis', icon: '🔴' },
  { name: 'Tailwind', icon: '💨' },
];

export default function TechStack() {
  // Duplicate the array for seamless loop
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="py-16 px-4 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Technologies I Work With
        </h2>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Content */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -50 * technologies.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center gap-3 min-w-[120px] p-4 bg-card border rounded-lg hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl">{tech.icon}</span>
              <span className="text-sm font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Alternative Grid Layout (commented out) */}
      {/* <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center gap-2 p-4 bg-card border rounded-lg hover:shadow-lg transition-all hover:scale-105"
            >
              <span className="text-3xl">{tech.icon}</span>
              <span className="text-xs font-medium text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
}