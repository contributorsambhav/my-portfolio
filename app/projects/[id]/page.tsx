"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { allProjects } from "@/data/projects";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Cpu,
  Server,
  Database,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Maximize2,
  X,
  Play,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  FileCode2,
  Share2,
  Copy,
  Check
} from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";

export default function ProjectArchitecturePage() {
  const params = useParams();
  const router = useRouter();
  const rawId = (params?.id as string) || "";
  
  // Find project by id or slug match
  const project = allProjects.find(
    (p) =>
      p.id.toLowerCase() === rawId.toLowerCase() ||
      (rawId === "chess" && p.id === "3") ||
      (rawId === "hiraya" && p.id === "4") ||
      (rawId === "remitpay" && p.id === "1") ||
      (rawId === "flute" && p.id === "2")
  ) || allProjects.find((p) => p.title.toLowerCase().includes(rawId.toLowerCase()));

  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!project) {
    return (
      <div className="py-20 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Architecture Design Not Found
        </h1>
        <p className="text-sm text-zinc-500 max-w-md mx-auto">
          We couldn&apos;t find an architecture case study for &ldquo;{rawId}&rdquo;.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:opacity-95 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>
    );
  }

  const details = project.architectureDetails;
  const diagram = project.architectureDiagram || details?.diagramImage;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Find other projects with architecture details
  const otherArchProjects = allProjects.filter(
    (p) => (p.architectureDetails || p.architectureDiagram) && p.id !== project.id
  );

  return (
    <article className="space-y-12 pb-20">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <Link
          href="/"
          className="hover:text-accent transition-colors"
        >
          sambhav.dev
        </Link>
        <span>/</span>
        <Link
          href="/projects"
          className="hover:text-accent transition-colors"
        >
          projects
        </Link>
        <span>/</span>
        <span className="text-zinc-800 dark:text-zinc-200 font-medium truncate max-w-[200px] sm:max-w-none">
          {project.id}
        </span>
      </nav>

      {/* Top Banner / Hero */}
      <header className="space-y-6 border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href={`/projects#project-${project.id}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              title="Copy Case Study Link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-accent/15 text-accent font-semibold uppercase tracking-wider">
              System Design & Architecture
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block shadow-[0_0_10px_rgb(var(--accent)/0.8)]" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              Deep Dive Engineering Case Study
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Quick External Links & Tech Tags */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-accent text-white hover:opacity-95 shadow-sm transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live Production
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-accent dark:hover:text-accent transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" /> Source Code
              </a>
            )}
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-accent dark:hover:text-accent transition-colors"
              >
                <Play className="w-3.5 h-3.5 text-red-500 fill-red-500" /> Video Demo
              </a>
            )}
          </div>

          {/* Quick Metrics */}
          {project.metrics && (
            <div className="flex flex-wrap gap-2">
              {project.metrics.map((m, i) => (
                <div
                  key={i}
                  className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800 text-[11px]"
                >
                  <span className="text-zinc-500 mr-1.5">{m.label}:</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* Featured Architecture Diagram Display */}
      {diagram && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent" />
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                System Design & Network Topology
              </h2>
            </div>
            <button
              onClick={() => setIsZoomed(true)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" /> Fullscreen View
            </button>
          </div>

          <div
            onClick={() => setIsZoomed(true)}
            className="group relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950/90 shadow-xl cursor-zoom-in transition-all hover:border-accent/50"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full min-h-[340px] max-h-[560px]">
              <Image
                src={diagram}
                alt={`${project.title} Architecture Diagram`}
                fill
                className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>

            {/* Overlay hint */}
            <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-zinc-900/85 backdrop-blur-md text-[11px] font-mono text-zinc-300 border border-zinc-700 flex items-center gap-1.5 shadow-md">
              <Maximize2 className="w-3 h-3 text-accent" /> Click to enlarge diagram
            </div>

            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-zinc-400 border border-zinc-800">
              Eraser Architecture Spec
            </div>
          </div>
        </section>
      )}

      {/* Lightbox / Zoom Modal for Diagram */}
      {isZoomed && diagram && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-white transition-colors cursor-pointer"
            aria-label="Close Fullscreen"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative w-full max-w-7xl h-[88vh] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={diagram}
              alt={`${project.title} Architecture Diagram - Fullscreen`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* 2-Minute Architecture Pitch */}
      {details?.elevatorPitch && (
        <section className="p-6 rounded-2xl border border-accent/30 bg-accent/5 dark:bg-accent/10 space-y-3">
          <div className="flex items-center gap-2 text-accent font-semibold text-sm">
            <Zap className="w-4 h-4 fill-accent" />
            <span>2-Minute Architecture Summary</span>
          </div>
          <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 leading-relaxed font-serif italic">
            &ldquo;{details.elevatorPitch}&rdquo;
          </p>
        </section>
      )}

      {/* Grid: Problem Statement & High-Level Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problem Statement */}
        <section className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-3 shadow-2xs">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>Problem Statement & Business Need</span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {details?.problemStatement || project.longDescription || project.description}
          </p>
        </section>

        {/* High-Level Architecture */}
        <section className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-3 shadow-2xs">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold text-sm">
            <Server className="w-4 h-4 text-accent" />
            <span>High-Level Architecture & Flow</span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {details?.highLevelArchitecture ||
              "Decoupled client-server topology designed for high availability, low-latency client synchronization, and zero-egress distributed cloud hosting."}
          </p>
        </section>
      </div>

      {/* Core Engineering Contributions */}
      {details?.contributions && details.contributions.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-accent" />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Core Engineering Responsibilities & Contributions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {details.contributions.map((c, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all space-y-2 shadow-2xs"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical Decisions & Trade-offs (Why X over Y) */}
      {details?.technicalDecisions && details.technicalDecisions.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-accent" />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Key Architectural Decisions & Trade-Offs (Why X over Y)
            </h2>
          </div>

          <div className="space-y-3">
            {details.technicalDecisions.map((d, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/20 space-y-2"
              >
                <h3 className="text-sm font-semibold text-accent flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {d.question}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pl-3.5 border-l-2 border-accent/30">
                  {d.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Challenges & Solutions */}
      {details?.challengesFaced && details.challengesFaced.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Production Challenges & How They Were Solved
            </h2>
          </div>

          <div className="space-y-4">
            {details.challengesFaced.map((ch, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-3 shadow-2xs"
              >
                <div className="flex items-start gap-2.5">
                  <div className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400">
                    BOTTLENECK
                  </div>
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {ch.challenge}
                  </h3>
                </div>
                <div className="pl-3 sm:pl-5 border-l-2 border-emerald-500/40 space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    Resolution:
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {ch.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Scalability Roadmap */}
      {details?.scalability && details.scalability.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Scalability & 100k Concurrent Users Roadmap
            </h2>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 space-y-3">
            <ul className="space-y-2.5">
              {details.scalability.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                >
                  <span className="font-mono text-xs text-accent font-bold mt-0.5">
                    0{i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Highlights List */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCode2 className="w-4 h-4 text-accent" />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Key System Highlights
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="p-3 rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/20 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Bottom Navigation & Explore Other System Designs */}
      <footer className="pt-10 border-t border-zinc-200 dark:border-zinc-800 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:text-accent dark:hover:text-accent text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:opacity-95 shadow-sm transition-all"
            >
              Test Live Deployment <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* More Architecture Deep Dives */}
        {otherArchProjects.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              More Architecture Case Studies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {otherArchProjects.slice(0, 3).map((op) => (
                <Link
                  key={op.id}
                  href={`/projects/${op.id}`}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-accent dark:hover:border-accent transition-all group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase text-accent font-semibold">
                      {op.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-accent transition-colors line-clamp-1">
                    {op.title}
                  </h4>
                  <p className="text-xs text-zinc-500 line-clamp-2 mt-1">
                    {op.tagline || op.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </footer>
    </article>
  );
}
