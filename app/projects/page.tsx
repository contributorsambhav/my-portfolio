"use client";

import { allProjects } from "@/data/projects";
import { useState, useMemo } from "react";
import Image from "next/image";
import { ExternalLink, Github, Play, Layers } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(allProjects.map((p) => p.category)));
    return ["all", ...cats];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return allProjects;
    return allProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="space-y-4 border-b border-zinc-200 dark:border-zinc-800/50 pb-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-accent font-semibold">01</span>
          <h1 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">projects.</h1>
          <span className="text-sm text-zinc-500">{allProjects.length} Things I&apos;ve built and shipped.</span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-full capitalize font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-accent text-white shadow-sm"
                  : "bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700/60"
              }`}
            >
              {cat === "all" ? "All Projects" : cat}
              <span className="ml-1.5 opacity-60 text-[10px]">
                {cat === "all"
                  ? allProjects.length
                  : allProjects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Projects List */}
      <section className="space-y-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/70 bg-white dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Project Image */}
              <div className="md:w-64 h-40 flex-shrink-0 relative rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                    <span className="text-3xl font-mono text-accent mb-1 font-bold">
                      {project.category === "blockchain" ? "⛓" : project.category === "ai" ? "◈" : "◇"}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-accent text-white shadow-sm">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <a
                      href={project.live || project.github || project.video}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-accent dark:hover:text-accent transition-colors"
                    >
                      {project.title}
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block shadow-[0_0_8px_rgb(var(--accent)/0.8)]" />
                    </a>
                    <span className="text-xs text-zinc-500 font-mono uppercase hidden sm:block">
                      {project.category}
                    </span>
                  </div>

                  {project.tagline && (
                    <p className="text-xs font-medium text-accent mb-2">
                      {project.tagline}
                    </p>
                  )}

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {project.longDescription || project.description}
                  </p>

                  {/* Highlights (if any) */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-4 hidden sm:block">
                      <ul className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1 list-disc list-inside">
                        {project.highlights.slice(0, 3).map((hl, i) => (
                          <li key={i}>{hl}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-accent dark:hover:text-accent border border-zinc-200 dark:border-zinc-700/60 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-accent dark:hover:text-accent border border-zinc-200 dark:border-zinc-700/60 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" /> GitHub
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-accent dark:hover:text-accent border border-zinc-200 dark:border-zinc-700/60 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 text-red-500 fill-red-500" /> YT Demo
                      </a>
                    )}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-850"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}