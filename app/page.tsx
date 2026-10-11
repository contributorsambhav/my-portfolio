import { allProjects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { ExternalLink, ArrowRight, Mail, Briefcase, Github, Play } from "lucide-react";
import ContributionCalendarClient from "@/components/ui/contribution-calendar-client";
import { getStatsData } from "@/lib/stats";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

async function CalendarSection() {
  const { contributions } = await getStatsData();
  return <ContributionCalendarClient contributions={contributions} />;
}

export default function Home() {
  const topProjects = allProjects.filter((p) => p.featured).slice(0, 5);

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          Sambhav
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">India · Software Engineer</p>

        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl pt-2">
          <p>
            I care about the parts of software people feel before they notice: how a menu opens, how fast a page shows up, how data flows reliably. I build products end to end, from the first architecture sketch to the final deploy.
          </p>
          <p>
            Currently studying Mathematics &amp; Computing at NIT Hamirpur. I specialize in full-stack development, AI pipelines, and Web3 integrations. Lately I&apos;m building{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 border-b-2 border-accent pb-0.5">RemitPay</span> and{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 border-b-2 border-accent pb-0.5">Saarthi</span>.
          </p>
        </div>

        {/* Calendar Box with Suspense for instant page rendering */}
        <div className="pt-6 max-w-3xl">
          <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 rounded-xl p-6 shadow-sm">
            <Suspense
              fallback={
                <div className="h-28 flex flex-col items-center justify-center gap-2 text-xs text-zinc-400 animate-pulse">
                  <div className="w-6 h-6 border-2 border-zinc-300 dark:border-zinc-700 border-t-accent rounded-full animate-spin" />
                  <span>Loading contributions...</span>
                </div>
              }
            >
              <CalendarSection />
            </Suspense>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-4 text-sm text-zinc-600 dark:text-zinc-400">
            <span>Software engineer, open to full-stack and web3 roles.</span>
            <a
              href="https://drive.google.com/file/d/1uYP_q5i4DDZ-58BAxnJUGgtgF-6rFLvd/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-900 dark:text-zinc-100 font-medium hover:text-accent transition-colors flex items-center gap-1"
            >
              Resume <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-sm font-semibold bg-accent text-accent-contrast px-4 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-[0_0_15px_rgb(var(--accent)/0.25)]"
          >
            <Mail className="w-4 h-4" /> Send an email
          </Link>
          <a
            href="https://github.com/contributorsambhav"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" /> View GitHub
          </a>
        </div>
      </section>

      {/* Projects preview */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/50 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-accent font-semibold">01</span>
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">projects.</h2>
            <span className="text-sm text-zinc-500 hidden sm:block">Things I&apos;ve built and shipped.</span>
          </div>
          <Link
            href="/projects"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1 font-medium"
          >
            All projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-8">
          {topProjects.map((project) => (
            <div
              key={project.id}
              className="group p-5 rounded-xl border border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-5">
                {/* Project Image */}
                <div className="md:w-56 h-36 flex-shrink-0 relative rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                      <span className="text-2xl font-mono text-accent mb-1 font-bold">
                        {project.category === "blockchain" ? "⛓" : project.category === "ai" ? "◈" : "◇"}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <h3 className="text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-accent transition-colors flex items-center gap-2">
                        {project.title}
                        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      </h3>
                      <span className="text-xs text-zinc-500 font-mono uppercase">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-accent dark:hover:text-accent border border-zinc-200 dark:border-zinc-700/60 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-accent dark:hover:text-accent border border-zinc-200 dark:border-zinc-700/60 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" /> GitHub
                        </a>
                      )}
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-accent dark:hover:text-accent border border-zinc-200 dark:border-zinc-700/60 transition-colors"
                        >
                          <Play className="w-3 h-3 text-red-500 fill-red-500" /> YT Demo
                        </a>
                      )}
                    </div>

                    {/* Tech stack */}
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                      {project.technologies.slice(0, 5).join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience preview */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800/50 pb-4">
          <span className="text-xs font-mono text-accent font-semibold">02</span>
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">experience.</h2>
          <span className="text-sm text-zinc-500 hidden sm:block">Where I&apos;ve worked and what I owned.</span>
        </div>

        <div className="space-y-8">
          {experiences.slice(0, 3).map((exp) => (
            <div key={exp.id} className="flex gap-4 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/40 bg-white dark:bg-zinc-900/20">
              <div className="flex-shrink-0 mt-1">
                {exp.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={exp.imageUrl}
                    alt={exp.company}
                    className="w-9 h-9 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 object-contain p-1"
                  />
                ) : (
                  <div className="w-9 h-9 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-zinc-500" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-zinc-900 dark:text-zinc-100 font-medium">{exp.company}</h3>
                  <span className="text-xs text-zinc-500 font-mono hidden sm:block">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                  {exp.role}
                </p>
                <div className="text-xs text-zinc-500 font-mono sm:hidden mb-2">
                  {exp.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}