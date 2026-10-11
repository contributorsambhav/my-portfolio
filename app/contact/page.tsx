"use client";

import { Mail, Copy, ArrowUpRight } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  LeetCodeIcon,
  CodeforcesIcon,
  DoraHacksIcon,
} from "@/components/ui/icons";
import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "sambhav511974@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handles = [
    {
      name: "GitHub",
      handle: "@contributorsambhav",
      url: "https://github.com/contributorsambhav",
      icon: GitHubIcon,
    },
    {
      name: "LinkedIn",
      handle: "@Sambhav",
      url: "https://www.linkedin.com/in/sambhav-2535a8285/",
      icon: LinkedInIcon,
    },
    {
      name: "X (Twitter)",
      handle: "@Sambhav59567",
      url: "https://x.com/Sambhav59567",
      icon: XIcon,
    },
    {
      name: "LeetCode",
      handle: "@coder_sambhav",
      url: "https://leetcode.com/u/coder_sambhav/",
      icon: LeetCodeIcon,
    },
    {
      name: "Codeforces",
      handle: "@FrozenMind18",
      url: "https://codeforces.com/profile/FrozenMind18",
      icon: CodeforcesIcon,
    },
    {
      name: "DoraHacks",
      handle: "@sambhav_511974",
      url: "https://dorahacks.io/hacker/sambhav_511974",
      icon: DoraHacksIcon,
    },
    {
      name: "Email",
      handle: "sambhav511974@gmail.com",
      url: `mailto:${email}`,
      icon: Mail,
    },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 max-w-3xl">
      {/* 01 contact. Section */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3 flex items-baseline">
          <span className="text-accent text-lg sm:text-xl font-mono mr-3 font-semibold">01</span>
          contact.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl">
          Email is the quickest way to reach me. For a longer conversation, reach out to schedule a call.
        </p>
      </div>

      {/* Main Email Action Box */}
      <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between mb-16 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors gap-3">
        <div className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 font-medium px-3 text-sm">
          <Mail className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button 
            onClick={handleCopy}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-medium transition-colors"
          >
            <Copy className="w-3.5 h-3.5" /> {copied ? "Copied" : "Copy"}
          </button>
          <a 
            href={`mailto:${email}`}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-[0_0_15px_rgb(var(--accent)/0.25)]"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>Write an email</span>
          </a>
        </div>
      </div>

      {/* 02 socials. Section */}
      <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800/80">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8 flex items-baseline gap-3">
          <span className="text-accent text-base font-mono font-semibold">02</span>
          socials. <span className="text-zinc-500 text-sm font-normal">Where else to find me.</span>
        </h2>

        {/* 2-Column Handles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {handles.map((item) => {
            const Icon = item.icon;
            return (
              <a 
                key={item.name}
                href={item.url} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-between group py-1.5 border-b border-transparent hover:border-zinc-200 dark:hover:border-zinc-800/60 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <Icon className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-accent transition-colors flex-shrink-0" />
                  <span className="text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors text-sm font-medium">
                    {item.handle}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
