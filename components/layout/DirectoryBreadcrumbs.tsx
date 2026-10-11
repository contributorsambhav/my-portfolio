"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DirectoryBreadcrumbs() {
  const pathname = usePathname();

  const getPathSegments = () => {
    if (!pathname || pathname === "/") return [];
    const parts = pathname.split("/").filter(Boolean);
    return parts.map((part, index) => {
      const href = "/" + parts.slice(0, index + 1).join("/");
      let label = part;
      if (part === "work") label = "experience";
      return { label, href };
    });
  };

  const segments = getPathSegments();

  return (
    <nav aria-label="Directory Breadcrumbs" className="flex items-center gap-1.5 text-xs select-none">
      {/* Root repo indicator */}
      <Link
        href="/"
        className="font-mono text-zinc-400 dark:text-zinc-500 hover:text-accent transition-colors"
        title="Go to portfolio root"
      >
        portfolio
      </Link>

      <span className="text-zinc-300 dark:text-zinc-700">/</span>

      {/* Main domain / home */}
      <Link
        href="/"
        className={`hover:text-accent transition-colors font-medium ${
          segments.length === 0
            ? "text-zinc-900 dark:text-zinc-100 font-semibold"
            : "text-zinc-600 dark:text-zinc-400"
        }`}
        title="Go to home (sambhav.dev)"
      >
        sambhav.dev
      </Link>

      {/* Dynamic sub-paths */}
      {segments.map((seg, idx) => {
        const isLast = idx === segments.length - 1;
        return (
          <span key={seg.href} className="inline-flex items-center gap-1.5">
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            {isLast ? (
              <span className="font-mono text-accent font-semibold truncate max-w-[120px] sm:max-w-none">
                {seg.label}
              </span>
            ) : (
              <Link
                href={seg.href}
                className="font-mono text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors truncate max-w-[100px] sm:max-w-none"
              >
                {seg.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
