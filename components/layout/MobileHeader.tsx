"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  FolderDot,
  Briefcase,
  Mail,
  Compass,
  CheckSquare,
  FileText,
  ArrowUpRight,
  ArrowRight,
  Layers,
} from "lucide-react";
import { allProjects } from "@/data/projects";
import { experiences } from "@/data/experience";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  LeetCodeIcon,
  CodeforcesIcon,
  DoraHacksIcon,
} from "@/components/ui/icons";
import ThemeAccentSelector from "@/components/ui/theme-accent-selector";
import ThemeToggle from "@/components/ui/theme-toggle";
import DirectoryBreadcrumbs from "./DirectoryBreadcrumbs";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Dynamic counts
  const projectsCount = allProjects.length;
  const experienceCount = experiences.length;
  const archBlogsCount = allProjects.filter(
    (p) => p.architectureDetails || p.architectureDiagram
  ).length;

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "/", icon: Home, isPageNav: false },
    {
      label: "Projects",
      href: isHomePage ? "#projects" : "/projects",
      icon: FolderDot,
      count: projectsCount,
      isPageNav: !isHomePage,
    },
    {
      label: "Experience",
      href: isHomePage ? "#experience" : "/work",
      icon: Briefcase,
      count: experienceCount,
      isPageNav: !isHomePage,
    },
    {
      label: "Design Decisions",
      href: "/design-decisions",
      icon: Layers,
      count: archBlogsCount,
      isPageNav: true,
    },
    { label: "Journey", href: "/journey", icon: Compass, isPageNav: true },
    { label: "Bucket List", href: "/journey#bucket-list", icon: CheckSquare, isPageNav: true },
    { label: "Contact", href: "/contact", icon: Mail, isPageNav: true },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/contributorsambhav", icon: GitHubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sambhav-2535a8285/", icon: LinkedInIcon },
    { label: "X", href: "https://x.com/Sambhav59567", icon: XIcon },
    { label: "LeetCode", href: "https://leetcode.com/u/coder_sambhav/", icon: LeetCodeIcon },
    { label: "Codeforces", href: "https://codeforces.com/profile/FrozenMind18", icon: CodeforcesIcon },
    { label: "DoraHacks", href: "https://dorahacks.io/hacker/sambhav_511974", icon: DoraHacksIcon },
  ];

  return (
    <>
      <header className="md:hidden sticky top-0 z-30 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/60 px-4 py-3 flex items-center justify-between">
        {/* Left: Hamburger Button + Directory Structure */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 -ml-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors flex-shrink-0"
            aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="overflow-hidden">
            <DirectoryBreadcrumbs />
          </div>
        </div>

        {/* Right: Accent selector + Theme toggle (No search bar on top) */}
        <div className="flex items-center gap-1.5 pl-2 border-l border-zinc-200 dark:border-zinc-800 flex-shrink-0">
          <ThemeAccentSelector />
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-[53px] z-40 bg-black/60 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white dark:bg-[#0c0c0e] border-b border-r border-zinc-200 dark:border-zinc-800 p-5 shadow-2xl h-[calc(100vh-53px)] overflow-y-auto flex flex-col animate-in slide-in-from-left-6 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* User Profile Header in Drawer */}
            <div className="flex items-center gap-3 pb-5 border-b border-zinc-200 dark:border-zinc-800/60 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jpg"
                alt="Sambhav"
                className="w-11 h-11 rounded-full object-cover border border-zinc-200 dark:border-zinc-800"
              />
              <div>
                <h3 className="text-zinc-900 dark:text-zinc-100 font-medium text-sm">Sambhav</h3>
                <p className="text-zinc-500 text-xs">Software Engineer · Web3</p>
              </div>
            </div>

            {/* Navigation links */}
            <div className="space-y-1 mb-6 flex-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-3 mb-2 font-semibold">
                Menu
              </div>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href.split("#")[0]);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      if (item.href.startsWith("#") && isHomePage) {
                        e.preventDefault();
                        const targetId = item.href.substring(1);
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent/10 dark:bg-accent/15 border border-accent/30 text-accent font-semibold"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-850 hover:text-zinc-950 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-zinc-400 dark:text-zinc-500"}`} />
                      <span>{item.label}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {item.count !== undefined && (
                        <span className={`text-xs font-mono ${isActive ? "text-accent font-semibold" : "text-zinc-400"}`}>
                          {item.count}
                        </span>
                      )}
                      {item.isPageNav && (
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-400 opacity-60" />
                      )}
                    </div>
                  </Link>
                );
              })}

              <a
                href="https://drive.google.com/file/d/1uYP_q5i4DDZ-58BAxnJUGgtgF-6rFLvd/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-850 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                  <span>Resume</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

            {/* Social handles in mobile menu */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/60">
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-1 mb-3 font-semibold">
                Connect
              </div>
              <div className="flex items-center gap-3.5 px-1 text-zinc-500 dark:text-zinc-400">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="p-1.5 hover:text-accent hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
