import { experiences } from "@/data/experience";
import { Briefcase } from "lucide-react";

export default function WorkPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4 border-b border-zinc-200 dark:border-zinc-800/50 pb-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-accent font-semibold">02</span>
          <h1 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">experience.</h1>
          <span className="text-sm text-zinc-500">Where I&apos;ve worked and what I owned.</span>
        </div>
      </section>

      <section className="space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col sm:flex-row gap-5 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/30 shadow-sm"
          >
            <div className="flex-shrink-0 mt-1">
              {exp.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={exp.imageUrl}
                  alt={exp.company}
                  className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 object-contain p-1.5"
                />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-zinc-500" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h2 className="text-zinc-900 dark:text-zinc-100 font-medium text-lg">{exp.company}</h2>
                <span className="text-xs text-zinc-500 font-mono hidden sm:block">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm text-accent font-medium mb-3">
                {exp.role}
              </p>
              <div className="text-xs text-zinc-500 font-mono sm:hidden mb-3">
                {exp.duration}
              </div>
              <ul className="space-y-2.5 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed list-disc list-outside ml-4 max-w-3xl">
                {exp.description.map((desc, i) => (
                  <li key={i} className="pl-1">{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}