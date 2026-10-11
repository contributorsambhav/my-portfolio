"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderDot, Briefcase, Mail, Compass, CheckSquare, BookOpen, Link2 } from "lucide-react";

export default function SidebarNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Projects", href: "/projects", icon: FolderDot, count: 16 },
    { label: "Experience", href: "/work", icon: Briefcase, count: 3 },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  const extraItems = [
    { label: "Journey", href: "/journey", icon: Compass },
    { label: "Bucket list", href: "/journey#bucket-list", icon: CheckSquare },
    { label: "Links", href: "/contact#socials", icon: Link2 },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

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
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-950 dark:text-white shadow-sm border border-zinc-200/80 dark:border-zinc-800"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100/60 dark:hover:bg-zinc-850/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 transition-colors ${active ? "text-accent" : "text-zinc-400 dark:text-zinc-500"}`} />
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span className={`text-xs font-mono ${active ? "text-accent font-semibold" : "text-zinc-400 dark:text-zinc-500"}`}>
                    {item.count}
                  </span>
                )}
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
            const active = pathname === "/journey" && item.label === "Journey";
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-950 dark:text-white shadow-sm border border-zinc-200/80 dark:border-zinc-800"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100/60 dark:hover:bg-zinc-850/40"
                }`}
              >
                <Icon className={`w-4 h-4 transition-colors ${active ? "text-accent" : "text-zinc-400 dark:text-zinc-500"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
