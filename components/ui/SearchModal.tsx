"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, FolderDot, Briefcase, FileText, ArrowUpRight, Compass, CheckSquare, Mail, CornerDownLeft } from "lucide-react";
import { allProjects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { XIcon, GitHubIcon, LinkedInIcon, LeetCodeIcon, CodeforcesIcon, DoraHacksIcon } from "@/components/ui/icons";

interface SearchResult {
  id: string;
  category: "Pages" | "Projects" | "Experience" | "Links";
  title: string;
  subtitle?: string;
  url: string;
  isExternal?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

export default function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Lock body scroll when open
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

  // Static items pool
  const allItems: SearchResult[] = [
    // Navigation Pages
    { id: "page-home", category: "Pages", title: "Home", subtitle: "Overview, bio & featured work", url: "/", icon: FileText },
    { id: "page-projects", category: "Pages", title: "Projects", subtitle: "Full catalog of 16 shipped projects", url: "/projects", icon: FolderDot },
    { id: "page-experience", category: "Pages", title: "Experience", subtitle: "Work history & roles", url: "/work", icon: Briefcase },
    { id: "page-journey", category: "Pages", title: "Journey & Timeline", subtitle: "Milestones, story & education", url: "/journey", icon: Compass },
    { id: "page-bucket", category: "Pages", title: "Bucket List", subtitle: "Goals and aspirations", url: "/journey#bucket-list", icon: CheckSquare },
    { id: "page-contact", category: "Pages", title: "Contact", subtitle: "Get in touch & direct handles", url: "/contact", icon: Mail },
    { id: "page-resume", category: "Pages", title: "Resume", subtitle: "View official resume document", url: "https://drive.google.com/file/d/1uYP_q5i4DDZ-58BAxnJUGgtgF-6rFLvd/view?usp=sharing", isExternal: true, icon: ArrowUpRight },

    // Projects
    ...allProjects.map((p) => ({
      id: `proj-${p.id}`,
      category: "Projects" as const,
      title: p.title,
      subtitle: `${p.technologies.slice(0, 3).join(", ")} · ${p.category}`,
      url: `/projects#project-${p.id}`,
      icon: FolderDot,
    })),

    // Experience
    ...experiences.map((exp) => ({
      id: `exp-${exp.id}`,
      category: "Experience" as const,
      title: `${exp.role} @ ${exp.company}`,
      subtitle: `${exp.duration} · ${exp.location}`,
      url: `/work#experience-${exp.id}`,
      icon: Briefcase,
    })),

    // Socials & Links
    { id: "link-github", category: "Links", title: "GitHub", subtitle: "@contributorsambhav", url: "https://github.com/contributorsambhav", isExternal: true, icon: GitHubIcon },
    { id: "link-linkedin", category: "Links", title: "LinkedIn", subtitle: "Sambhav on LinkedIn", url: "https://www.linkedin.com/in/sambhav-2535a8285/", isExternal: true, icon: LinkedInIcon },
    { id: "link-x", category: "Links", title: "X (Twitter)", subtitle: "@Sambhav59567", url: "https://x.com/Sambhav59567", isExternal: true, icon: XIcon },
    { id: "link-codeforces", category: "Links", title: "Codeforces", subtitle: "@FrozenMind18", url: "https://codeforces.com/profile/FrozenMind18", isExternal: true, icon: CodeforcesIcon },
    { id: "link-leetcode", category: "Links", title: "LeetCode", subtitle: "@coder_sambhav", url: "https://leetcode.com/u/coder_sambhav/", isExternal: true, icon: LeetCodeIcon },
    { id: "link-dorahacks", category: "Links", title: "DoraHacks", subtitle: "@sambhav_511974", url: "https://dorahacks.io/hacker/sambhav_511974", isExternal: true, icon: DoraHacksIcon },
    { id: "link-email", category: "Links", title: "Email", subtitle: "sambhav511974@gmail.com", url: "mailto:sambhav511974@gmail.com", isExternal: true, icon: Mail },
  ];

  // Filtering
  const filtered = query.trim() === ""
    ? allItems.slice(0, 8)
    : allItems.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.subtitle?.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      });

  const handleSelect = (item: SearchResult) => {
    onClose();
    if (item.isExternal) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.url);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        handleSelect(filtered[selectedIndex]);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white dark:bg-[#111114] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-zinc-900 dark:text-zinc-100 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800 focus-within:border-accent/40 transition-colors">
          <Search className="w-5 h-5 text-zinc-400 dark:text-zinc-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, experience, pages, links..."
            className="flex-1 bg-transparent text-sm sm:text-base outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-zinc-900 dark:text-zinc-100"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
              No results found for &ldquo;<span className="text-zinc-900 dark:text-zinc-200 font-medium">{query}</span>&rdquo;
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-all ${
                    isSelected
                      ? "bg-accent/10 dark:bg-accent/15 border border-accent/40 text-zinc-950 dark:text-white shadow-[0_0_15px_rgb(var(--accent)/0.1)]"
                      : "border border-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/60 dark:hover:bg-zinc-850/40"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg flex-shrink-0 transition-all ${
                        isSelected
                          ? "bg-accent text-white shadow-sm shadow-accent/30"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="font-medium truncate flex items-center gap-2">
                        <span className={isSelected ? "text-accent font-semibold" : "text-zinc-900 dark:text-zinc-100"}>
                          {item.title}
                        </span>
                        {item.isExternal && (
                          <ArrowUpRight className={`w-3 h-3 ${isSelected ? "text-accent" : "text-zinc-400 opacity-70"}`} />
                        )}
                      </div>
                      {item.subtitle && (
                        <div className={`text-xs truncate transition-colors ${isSelected ? "text-zinc-700 dark:text-zinc-300" : "text-zinc-500 dark:text-zinc-400"}`}>
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                        isSelected
                          ? "bg-accent/20 text-accent font-semibold border border-accent/30"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                      }`}
                    >
                      {item.category}
                    </span>
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-accent animate-in fade-in duration-150 hidden sm:block" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-500 flex items-center justify-between font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ navigate</span>
            <span>↵ select</span>
            <span>esc close</span>
          </div>
          <span>{filtered.length} results</span>
        </div>
      </div>
    </div>
  );
}

export function SearchTriggerButton({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`group flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-accent/10 dark:hover:bg-accent/15 hover:border-accent/40 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all shadow-2xs hover:shadow-[0_0_15px_rgb(var(--accent)/0.12)] cursor-pointer ${className}`}
        aria-label="Open search palette"
      >
        <div className="flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 group-hover:text-accent transition-colors" />
          <span className="hidden sm:inline font-medium">Search...</span>
        </div>
        <kbd className="font-mono text-[10px] bg-zinc-200/60 dark:bg-zinc-800/80 group-hover:bg-accent/20 group-hover:text-accent group-hover:border-accent/30 px-1.5 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 transition-colors">
          Ctrl K
        </kbd>
      </button>

      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
