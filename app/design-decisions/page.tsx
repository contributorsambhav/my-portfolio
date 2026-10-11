import { allProjects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  ExternalLink,
  Cpu,
  Server,
  Zap,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Decision Blogs & System Architectures | Sambhav",
  description:
    "Engineering case studies, high-level architectures, trade-offs, and design decisions across distributed systems, AI pipelines, and Web3 platforms.",
};

export default function DesignDecisionBlogsPage() {
  // Filter all projects that have detailed architecture or architecture diagrams
  const architectureProjects = allProjects.filter(
    (p) => p.architectureDetails || p.architectureDiagram
  );

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <section className="space-y-4 border-b border-zinc-200 dark:border-zinc-800/60 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-accent/15 text-accent font-semibold uppercase tracking-wider">
            {architectureProjects.length} System Designs Available
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent inline-block shadow-[0_0_8px_rgb(var(--accent)/0.8)]" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              Deep-Dive Engineering Blogs
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Design Decision Blogs &amp; System Architectures
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            In-depth architectural breakdowns answering: why specific databases and protocols were selected, how real-world bottlenecks were resolved, and how production microservices scale.
          </p>
        </div>
      </section>

      {/* List of System Design Projects */}
      <section className="space-y-10">
        {architectureProjects.map((project, index) => {
          const details = project.architectureDetails;
          const diagram = project.architectureDiagram || details?.diagramImage;

          return (
            <article
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all shadow-sm space-y-6"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:items-start justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-accent font-semibold">
                      0{index + 1}
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-700">·</span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        <Sparkles className="w-2.5 h-2.5" /> Featured Case Study
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-accent transition-colors">
                    <Link href={`/projects/${project.id}`} className="hover:underline">
                      {project.title}
                    </Link>
                  </h2>

                  {project.tagline && (
                    <p className="text-xs sm:text-sm text-accent font-medium">
                      {project.tagline}
                    </p>
                  )}

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {details?.problemStatement || project.longDescription || project.description}
                  </p>

                  {/* Highlights from technical decisions */}
                  {details?.technicalDecisions && details.technicalDecisions.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <div className="text-[11px] font-mono uppercase text-zinc-400 font-semibold flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-accent" /> Key Architectural Trade-Off:
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-300 italic pl-3 border-l-2 border-accent/40">
                        &ldquo;{details.technicalDecisions[0].question}&rdquo; &rarr;{" "}
                        <span className="text-zinc-500 dark:text-zinc-400 not-italic">
                          {details.technicalDecisions[0].answer}
                        </span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Right: Architecture Diagram Thumbnail */}
                {diagram && (
                  <Link
                    href={`/projects/${project.id}`}
                    className="group/img lg:w-72 sm:w-96 w-full aspect-video relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 flex-shrink-0 shadow-md cursor-pointer hover:border-accent transition-colors"
                  >
                    <Image
                      src={diagram}
                      alt={`${project.title} Architecture`}
                      fill
                      className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-mono text-white">
                      <span>View Diagram Spec</span>
                      <ArrowRight className="w-3.5 h-3.5 text-accent" />
                    </div>
                  </Link>
                )}
              </div>

              {/* Action Buttons & Tech Pills */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-accent text-white hover:opacity-95 shadow-sm transition-all group/btn"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Read Architecture Blog</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-accent dark:hover:text-accent border border-zinc-200 dark:border-zinc-700/60 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-accent dark:hover:text-accent border border-zinc-200 dark:border-zinc-700/60 transition-colors"
                    >
                      <GitHubIcon className="w-3.5 h-3.5" /> GitHub
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
