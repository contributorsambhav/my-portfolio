"use client";

import { useState } from "react";
import { Project } from "@/types";
import { X, Layers, Cpu, Database, Wrench, ShieldAlert, Rocket, MessageSquare, CheckCircle2 } from "lucide-react";

export default function ArchitectureModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"architecture" | "qa">("architecture");

  if (!isOpen || !project.architectureDetails) return null;

  const arch = project.architectureDetails;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#111114] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-900 dark:text-zinc-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-start justify-between gap-4 bg-zinc-50/50 dark:bg-zinc-900/40">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/15 text-accent font-semibold border border-accent/30">
                SYSTEM DESIGN &amp; ARCHITECTURE
              </span>
              <span className="text-xs text-zinc-400 font-mono capitalize">
                {project.category}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close architecture breakdown"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers if Q&A exists */}
        {arch.qa && arch.qa.length > 0 && (
          <div className="flex border-b border-zinc-200 dark:border-zinc-800 px-6 bg-zinc-50/30 dark:bg-zinc-900/20 text-xs font-medium">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`py-3 px-4 border-b-2 transition-colors ${
                activeTab === "architecture"
                  ? "border-accent text-accent font-semibold"
                  : "border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              Architecture &amp; Decisions
            </button>
            <button
              onClick={() => setActiveTab("qa")}
              className={`py-3 px-4 border-b-2 transition-colors ${
                activeTab === "qa"
                  ? "border-accent text-accent font-semibold"
                  : "border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              Interview Q&amp;A Prep ({arch.qa.length})
            </button>
          </div>
        )}

        {/* Content body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-8 flex-1">
          {activeTab === "architecture" ? (
            <>
              {/* Problem statement */}
              {arch.problemStatement && (
                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" /> 01. Problem Statement
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/60">
                    {arch.problemStatement}
                  </p>
                </div>
              )}

              {/* High level architecture */}
              {arch.highLevelArchitecture && (
                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                    <Layers className="w-4 h-4" /> 02. High-Level Architecture
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/60">
                    {arch.highLevelArchitecture}
                  </p>
                </div>
              )}

              {/* Personal contributions */}
              {arch.contributions && arch.contributions.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> 03. Core Engineering Contributions
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {arch.contributions.map((c, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 text-xs sm:text-sm"
                      >
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">
                          {c.title}
                        </span>
                        <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {c.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical decisions */}
              {arch.technicalDecisions && arch.technicalDecisions.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                    <Database className="w-4 h-4" /> 04. Technical Trade-Offs &amp; Decisions
                  </h3>
                  <div className="space-y-2.5">
                    {arch.technicalDecisions.map((d, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-xs sm:text-sm space-y-1.5"
                      >
                        <div className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                          <span className="text-accent">Q:</span> {d.question}
                        </div>
                        <div className="text-zinc-600 dark:text-zinc-400 pl-4 border-l-2 border-accent/40 leading-relaxed">
                          {d.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges faced */}
              {arch.challengesFaced && arch.challengesFaced.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                    <Wrench className="w-4 h-4" /> 05. Production Challenges &amp; Solutions
                  </h3>
                  <div className="space-y-2.5">
                    {arch.challengesFaced.map((ch, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 text-xs sm:text-sm space-y-2"
                      >
                        <div className="font-medium text-red-500 dark:text-red-400">
                          <span className="font-semibold uppercase tracking-wider font-mono text-[10px] bg-red-500/10 px-2 py-0.5 rounded mr-2">
                            Challenge
                          </span>
                          {ch.challenge}
                        </div>
                        <div className="text-zinc-600 dark:text-zinc-300 pl-3 border-l-2 border-emerald-500/50">
                          <span className="font-semibold uppercase tracking-wider font-mono text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded mr-2">
                            Solution
                          </span>
                          {ch.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scalability roadmap */}
              {arch.scalability && arch.scalability.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                    <Rocket className="w-4 h-4" /> 06. Scaling to 100k Users &amp; Future Roadmap
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 list-disc list-inside bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    {arch.scalability.map((s, i) => (
                      <li key={i} className="leading-relaxed">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Elevator pitch */}
              {arch.elevatorPitch && (
                <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> 2-Minute Architecture Pitch
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 italic bg-accent/5 border border-accent/20 p-4 rounded-xl leading-relaxed">
                    &ldquo;{arch.elevatorPitch}&rdquo;
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Interview Q&A Tab */
            <div className="space-y-3">
              {arch.qa?.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 text-xs sm:text-sm space-y-1.5"
                >
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item.question}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 pl-6 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/40 text-xs">
          <div className="flex gap-4 text-zinc-500 font-mono">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub Repo ↗
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                Live Demo ↗
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
