"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderDot,
  Briefcase,
  Mail,
  Compass,
  CheckSquare,
  BookOpen,
  Link2,
  Layers,
  ArrowRight
} from "lucide-react";
import { allProjects } from "@/data/projects";
import { experiences } from "@/data/experience";

export default function SidebarNav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Dynamic counts calculated directly from source data
  const projectsCount = allProjects.length;
  const experienceCount = experiences.length;
  const archBlogsCount = allProjects.filter(
    (p) => p.architectureDetails || p.architectureDiagram
  ).length;

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      isPageNav: false
    },
    {
      label: "Projects",
      // If on home, scroll to #projects; otherwise navigate to /projects
      href: isHomePage ? "#projects" : "/projects",
      icon: FolderDot,
      count: projectsCount,
      // Navigates to a separate full page if not on home
      isPageNav: !isHomePage
    },
    {
      label: "Experience",
      // If on home, scroll to #experience; otherwise navigate to /work
      href: isHomePage ? "#experience" : "/work",
      icon: Briefcase,
      count: experienceCount,
      isPageNav: !isHomePage
    },
    {
      label: "Contact",
      href: "/contact",
      icon: Mail,
      isPageNav: true
    },
  ];

  const extraItems = [
    {
      label: "Design Decisions",
      href: "/design-decisions",
      icon: Layers,
      count: archBlogsCount,
      isPageNav: true
    },
    {
      label: "Journey",
      href: "/journey",
      icon: Compass,
      isPageNav: true
    },
    {
      label: "Bucket list",
      href: "/journey#bucket-list",
      icon: CheckSquare,
      isPageNav: true
    },
    {
      label: "Links",
      href: "/contact#socials",
      icon: Link2,
      isPageNav: true
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && isHomePage) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  const itemClass = (active: boolean) =>
    `flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors group border ${
      active
        ? "bg-accent/10 text-zinc-950 dark:text-white border-accent/40"
        : "text-zinc-600 dark:text-zinc-400 border-transparent hover:text-accent hover:bg-accent/10 hover:border-accent/30"
    }`;

  return (
    <div className="flex flex-col gap-6 flex-1">
      <div>
        <h3 className="text-[10px] font-semibold text-zinc-500 tracking-wider mb-2 font-mono">NAVIGATION</h3>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={itemClass(active)}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 transition-colors ${active ? "text-accent" : "text-zinc-400 dark:text-zinc-500 group-hover:text-accent"}`} />
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.count !== undefined && (
                    <span className={`text-xs font-mono transition-colors ${active ? "text-accent font-semibold" : "text-zinc-400 dark:text-zinc-500 group-hover:text-accent"}`}>
                      {item.count}
                    </span>
                  )}
                  {item.isPageNav && (
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 opacity-60 group-hover:text-accent group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      <div>
        <h3 className="text-[10px] font-semibold text-zinc-500 tracking-wider mb-2 font-mono">EXTRAS</h3>
        <nav className="flex flex-col gap-1">
          {extraItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href.split("#")[0];
            return (
              <Link
                key={item.label}
                href={item.href}
                className={itemClass(active)}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 transition-colors ${active ? "text-accent" : "text-zinc-400 dark:text-zinc-500 group-hover:text-accent"}`} />
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.count !== undefined && (
                    <span className={`text-xs font-mono transition-colors ${active ? "text-accent font-semibold" : "text-zinc-400 dark:text-zinc-500 group-hover:text-accent"}`}>
                      {item.count}
                    </span>
                  )}
                  {item.isPageNav && (
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 opacity-60 group-hover:text-accent group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
