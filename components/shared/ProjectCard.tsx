// components/shared/ProjectCard.tsx
"use client";

import { ExternalLink, Github, Play, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
  viewMode?: "grid" | "list";
}

export default function ProjectCard({ project, index, viewMode = "list" }: ProjectCardProps) {
  const getCategoryConfig = (category: string) => {
    const configs = {
      web: {
        gradient: "from-sky-500/20 to-blue-600/20",
        accent: "bg-sky-500",
        text: "text-sky-400",
        border: "border-sky-500/20",
        label: "Web",
      },
      web3: {
        gradient: "from-violet-500/20 to-purple-600/20",
        accent: "bg-violet-500",
        text: "text-violet-400",
        border: "border-violet-500/20",
        label: "Web3",
      },
      ai: {
        gradient: "from-emerald-500/20 to-green-600/20",
        accent: "bg-emerald-500",
        text: "text-emerald-400",
        border: "border-emerald-500/20",
        label: "AI",
      },
      fullstack: {
        gradient: "from-amber-500/20 to-orange-600/20",
        accent: "bg-amber-500",
        text: "text-amber-400",
        border: "border-amber-500/20",
        label: "Fullstack",
      },
      blockchain: {
        gradient: "from-pink-500/20 to-rose-600/20",
        accent: "bg-pink-500",
        text: "text-pink-400",
        border: "border-pink-500/20",
        label: "Blockchain",
      },
    };
    return configs[category as keyof typeof configs] || configs.web;
  };

  const categoryConfig = getCategoryConfig(project.category);

  // Grid View Card
  if (viewMode === "grid") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group relative"
      >
        <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500">
          {/* Image Section */}
          <div className={`relative aspect-[16/10] bg-gradient-to-br ${categoryConfig.gradient} overflow-hidden`}>
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-2xl ${categoryConfig.accent}/10 flex items-center justify-center`}>
                  <span className="text-3xl opacity-60">
                    {project.category === "web" && "◎"}
                    {project.category === "ai" && "◈"}
                    {project.category === "blockchain" && "⛓"}
                    {project.category === "fullstack" && "◇"}
                    {project.category === "web3" && "⬡"}
                  </span>
                </div>
              </div>
            )}
            
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider bg-amber-500/90 text-black rounded-full">
                  Featured
                </span>
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Quick Actions */}
            <div className="absolute bottom-3 left-3 right-3 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-gray-900 rounded-lg text-xs font-medium hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-lg text-xs font-medium hover:bg-white/20 transition-colors"
                >
                  <Github className="w-3 h-3" />
                  Code
                </a>
              )}
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-lg text-xs font-medium hover:bg-white/20 transition-colors"
                >
                  <Play className="w-3 h-3" />
                  Demo
                </a>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-5 space-y-3">
            {/* Category */}
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${categoryConfig.accent}`} />
              <span className={`text-[11px] font-medium uppercase tracking-wider ${categoryConfig.text}`}>
                {categoryConfig.label}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors line-clamp-1">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
              {project.tagline}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-medium text-gray-400 bg-white/5 rounded-md border border-white/5"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 text-[10px] font-medium text-gray-500">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // List View Card (Default)
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className={`relative lg:w-80 xl:w-96 flex-shrink-0 aspect-[16/10] lg:aspect-auto bg-gradient-to-br ${categoryConfig.gradient}`}>
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-20 h-20 rounded-2xl ${categoryConfig.accent}/10 flex items-center justify-center`}>
                  <span className="text-4xl opacity-60">
                    {project.category === "web" && "◎"}
                    {project.category === "ai" && "◈"}
                    {project.category === "blockchain" && "⛓"}
                    {project.category === "fullstack" && "◇"}
                    {project.category === "web3" && "⬡"}
                  </span>
                </div>
              </div>
            )}
            
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider bg-amber-500/90 text-black rounded-full">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="space-y-2">
                {/* Category */}
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${categoryConfig.accent}`} />
                  <span className={`text-[11px] font-medium uppercase tracking-wider ${categoryConfig.text}`}>
                    {categoryConfig.label}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-gray-100 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Quick Link */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all group/link"
                >
                  <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>

            {/* Tagline */}
            <p className="text-sm text-blue-400/80 font-medium mb-2">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-1.5 mb-4">
                {project.highlights.slice(0, 2).map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="text-gray-600 mt-0.5">→</span>
                    <span className="line-clamp-1">{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-medium text-gray-400 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="px-2.5 py-1 text-[11px] font-medium text-gray-500">
                  +{project.technologies.length - 6} more
                </span>
              )}
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="flex flex-wrap gap-6 py-4 mb-4 border-t border-white/5">
                {project.metrics.slice(0, 3).map((metric) => (
                  <div key={metric.label} className="space-y-0.5">
                    <div className="text-lg font-semibold text-white">
                      {metric.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-xl text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-xl text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
                >
                  <Play className="w-4 h-4" />
                  Watch Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
