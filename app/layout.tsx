import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  CodeforcesIcon,
  LeetCodeIcon,
  DoraHacksIcon,
} from "@/components/ui/icons";
import ThemeAccentSelector from "@/components/ui/theme-accent-selector";
import ThemeToggle from "@/components/ui/theme-toggle";
import SidebarNav from "@/components/layout/SidebarNav";
import MobileHeader from "@/components/layout/MobileHeader";
import DirectoryBreadcrumbs from "@/components/layout/DirectoryBreadcrumbs";
import { SearchTriggerButton } from "@/components/ui/SearchModal";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Sambhav | Software Engineer",
  description: "Software Engineer. Building resilient backends, fluid interfaces, and the details in between.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth hide-scrollbar" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                const d = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (t === 'dark' || (!t && d)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                const a = localStorage.getItem('accent-color');
                if (a) document.documentElement.style.setProperty('--accent', a);
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 antialiased flex flex-col md:flex-row min-h-screen selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-black dark:selection:text-white`}>
        {/* Mobile Header with Left Hamburger & Directory Structure */}
        <MobileHeader />

        {/* Left Sidebar */}
        <aside className="w-64 fixed h-screen p-6 flex flex-col border-r border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-[#09090b] z-20 overflow-y-auto hide-scrollbar hidden md:flex">
          <div className="flex flex-col gap-4 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/avatar.jpg" alt="Sambhav" className="w-16 h-16 rounded-full object-cover border border-zinc-200 dark:border-zinc-800 shadow-sm" />
            <div>
              <h2 className="text-zinc-900 dark:text-zinc-100 font-medium text-lg">Sambhav</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1 leading-relaxed">Full Stack Developer & Web3 Enthusiast. Building scalable applications.</p>
            </div>
          </div>

          {/* Quick Search Button in Sidebar */}
          <div className="mb-6">
            <SearchTriggerButton className="w-full justify-between" />
          </div>

          <SidebarNav />

          <div className="pt-5 flex flex-col gap-3 text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800/50 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a href="https://github.com/contributorsambhav" target="_blank" rel="noreferrer" aria-label="GitHub Profile" title="GitHub" className="hover:text-accent transition-colors"><GitHubIcon className="w-4 h-4" /></a>
                <a href="https://www.linkedin.com/in/sambhav-2535a8285/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" title="LinkedIn" className="hover:text-accent transition-colors"><LinkedInIcon className="w-4 h-4" /></a>
                <a href="https://x.com/Sambhav59567" target="_blank" rel="noreferrer" aria-label="X Profile" title="X (Twitter)" className="hover:text-accent transition-colors"><XIcon className="w-4 h-4" /></a>
                <a href="https://leetcode.com/u/coder_sambhav/" target="_blank" rel="noreferrer" aria-label="LeetCode Profile" title="LeetCode" className="hover:text-accent transition-colors"><LeetCodeIcon className="w-4 h-4" /></a>
                <a href="https://codeforces.com/profile/FrozenMind18" target="_blank" rel="noreferrer" aria-label="Codeforces Profile" title="Codeforces" className="hover:text-accent transition-colors"><CodeforcesIcon className="w-4 h-4" /></a>
                <a href="https://dorahacks.io/hacker/sambhav_511974" target="_blank" rel="noreferrer" aria-label="DoraHacks Profile" title="DoraHacks" className="hover:text-accent transition-colors"><DoraHacksIcon className="w-4 h-4" /></a>
              </div>
              <a href="https://drive.google.com/file/d/1uYP_q5i4DDZ-58BAxnJUGgtgF-6rFLvd/view?usp=sharing" target="_blank" rel="noreferrer" className="text-xs font-medium hover:text-accent transition-colors">Resume</a>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 bg-zinc-50 dark:bg-[#09090b] min-h-screen flex flex-col">
          {/* Top Bar for Desktop */}
          <header className="sticky top-0 z-10 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50 px-8 py-4 items-center justify-between hidden md:flex">
            {/* Directory Structure */}
            <DirectoryBreadcrumbs />

            {/* Right Handles & Controls */}
            <div className="flex items-center gap-3.5 text-zinc-600 dark:text-zinc-400 relative">
              <a href="https://github.com/contributorsambhav" target="_blank" rel="noreferrer" aria-label="GitHub Profile" title="GitHub" className="hover:text-accent transition-colors"><GitHubIcon className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/in/sambhav-2535a8285/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" title="LinkedIn" className="hover:text-accent transition-colors"><LinkedInIcon className="w-4 h-4" /></a>
              <a href="https://x.com/Sambhav59567" target="_blank" rel="noreferrer" aria-label="X Profile" title="X (Twitter)" className="hover:text-accent transition-colors"><XIcon className="w-4 h-4" /></a>
              <a href="https://leetcode.com/u/coder_sambhav/" target="_blank" rel="noreferrer" aria-label="LeetCode Profile" title="LeetCode" className="hover:text-accent transition-colors"><LeetCodeIcon className="w-4 h-4" /></a>
              <a href="https://codeforces.com/profile/FrozenMind18" target="_blank" rel="noreferrer" aria-label="Codeforces Profile" title="Codeforces" className="hover:text-accent transition-colors"><CodeforcesIcon className="w-4 h-4" /></a>
              <a href="https://dorahacks.io/hacker/sambhav_511974" target="_blank" rel="noreferrer" aria-label="DoraHacks Profile" title="DoraHacks" className="hover:text-accent transition-colors"><DoraHacksIcon className="w-4 h-4" /></a>
              <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
              <ThemeAccentSelector />
              <ThemeToggle />
            </div>
          </header>

          <div className="p-6 sm:p-8 md:p-12 lg:px-20 lg:py-14 max-w-4xl w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}