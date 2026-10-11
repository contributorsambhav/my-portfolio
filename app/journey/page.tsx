import { Route, CheckCircle2 } from "lucide-react";

export default function JourneyPage() {
  const journey = [
    {
      year: "2026",
      title: "AEH Intern at Accenture",
      description: "Architected an agentic orchestrator for enterprise microservices, designing multi-step AI workflows with autonomous planning. Deployed scalable cloud infrastructure across AWS.",
    },
    {
      year: "2025",
      title: "Full Stack Developer Intern at Atlantis Newtech",
      description: "Delivered an Enterprise Resource Planning system with an 8-engineer team, improving operational efficiency by 40%.",
    },
    {
      year: "2024",
      title: "Web Development Intern at NullClass",
      description: "Engineered a full-stack video platform supporting 50MB+ uploads via an automated transformation pipeline.",
    },
    {
      year: "2024",
      title: "Web Team Coordinator at GDG NIT Hamirpur",
      description: "Launched an event management platform with real-time communication, serving 1200+ participants at 99.9% uptime.",
    },
    {
      year: "2023",
      title: "Started B.Tech at NIT Hamirpur",
      description: "Pursuing Mathematics and Computing. Diving deep into Data Structures, Algorithms, and Software Engineering.",
    }
  ];

  const bucketList = [
    { text: "Create Portfolio Website", completed: true },
    { text: "Win national hackathon (Smart India Hackathon / Payman AI Dev Challenge)", completed: true },
    { text: "Achieve 36+ PSNR on AI Frame Interpolator for ISRO Problem Statement", completed: true },
    { text: "Solve 500+ LeetCode problems & rank candidate master on Codeforces", completed: true },
    { text: "Ship decentralized remittance protocol on Ethereum & Stellar", completed: true },
    { text: "Contribute major features to open-source developer tooling", completed: false },
    { text: "Lead engineering team for a high-scale production system", completed: false },
  ];

  return (
    <div className="space-y-16">
      {/* 01 Journey Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800/50 pb-6">
          <span className="text-xs font-mono text-accent font-semibold">01</span>
          <h1 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">journey.</h1>
          <span className="text-sm text-zinc-500 hidden sm:block">How I got here.</span>
        </div>

        <div className="relative pt-2">
          {/* Vertical line */}
          <div className="absolute left-[39px] top-6 bottom-4 w-px bg-zinc-200 dark:bg-zinc-800/70 hidden md:block" />

          <div className="space-y-8">
            {journey.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 group p-4 rounded-xl hover:bg-white/60 dark:hover:bg-zinc-900/30 transition-colors">
                <div className="md:w-24 flex-shrink-0 flex items-start md:justify-end mt-1">
                  <span className="text-zinc-500 font-mono text-sm group-hover:text-accent transition-colors font-semibold">
                    {item.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="hidden md:flex flex-shrink-0 relative z-10 w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800 border border-zinc-400 dark:border-zinc-700 mt-2.5 group-hover:border-accent group-hover:bg-accent transition-colors" />

                <div className="flex-1">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Bucket list Section matching screenshot */}
      <section id="bucket-list" className="space-y-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/60">
        <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800/50 pb-4">
          <span className="text-xs font-mono text-accent font-semibold">02</span>
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">bucket list.</h2>
          <span className="text-sm text-zinc-500 hidden sm:block">Things I want to build, do, and accomplish.</span>
        </div>

        <div className="grid grid-cols-1 gap-3 max-w-2xl">
          {bucketList.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/20 group"
            >
              <div className="flex-shrink-0">
                {item.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-zinc-300 dark:border-zinc-700 group-hover:border-accent transition-colors" />
                )}
              </div>
              <span className={`text-sm ${item.completed
                  ? "text-zinc-900 dark:text-zinc-100 font-medium border-b-2 border-accent/80 pb-0.5"
                  : "text-zinc-500 dark:text-zinc-400"
                }`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
