// app/page.tsx — Server Component (no "use client")
// Data is fetched server-side with ISR caching for fast loads

import { Award, Briefcase, ChevronRight, Code2, Sparkles } from "lucide-react";

import Divider from "@/components/shared/Divider";
import Hero from "@/components/sections/Hero";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { allProjects } from "@/data/projects";
import dynamic from "next/dynamic";
import { experiences } from "@/data/experience";
import { positionsOfResponsibility } from "@/data/POR";

// Dynamic imports for below-the-fold sections to reduce initial bundle
const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection"),
  {
    loading: () => (
      <div className="py-24 px-4 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/10 border-t-blue-400 rounded-full animate-spin" />
      </div>
    ),
  }
);

const PORSection = dynamic(() => import("@/components/sections/PORSection"), {
  loading: () => (
    <div className="py-24 px-4 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/10 border-t-purple-400 rounded-full animate-spin" />
    </div>
  ),
});

const ExploreSection = dynamic(
  () => import("@/components/sections/ExploreSection"),
  {
    loading: () => (
      <div className="py-24 px-4 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/10 border-t-amber-400 rounded-full animate-spin" />
      </div>
    ),
  }
);

// Server-side data fetching with ISR caching
async function getStatsData() {
  try {
    // In production, use the full URL; in dev, use relative
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/stats`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch stats");
    return await res.json();
  } catch (error) {
    console.error("Error fetching stats:", error);
    return {
      contributions: { github: [], leetcode: [], codeforces: [] },
      leetcodeStats: null,
    };
  }
}

export default async function Home() {
  const { contributions, leetcodeStats } = await getStatsData();

  const featuredProjects = allProjects
    .filter((project) => project.featured)
    .sort((a, b) => Number(a.id) - Number(b.id));

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <Hero contributions={contributions} leetcodeStats={leetcodeStats} />

      {/* Tech Stack */}
      {/* TechStack is a client component — imported normally since it's near the fold */}
      <TechStackWrapper />

      <Divider />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection projects={featuredProjects} />

      <Divider />

      {/* Experience Section — lazy loaded */}
      <ExperienceSection experiences={experiences} />

      <Divider />

      {/* Positions of Responsibility — lazy loaded */}
      <PORSection positions={positionsOfResponsibility} />

      <Divider />

      {/* Explore More — lazy loaded */}
      <ExploreSection />

      <div className="h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </main>
  );
}

// Inline wrapper for TechStack — keeps it as a simple import
import TechStack from "@/components/sections/TechStack";
function TechStackWrapper() {
  return <TechStack />;
}

// Featured Projects section kept in page since it's above-the-fold equivalent
import ProjectCard from "@/components/shared/ProjectCard";
import FeaturedProjectsClient from "@/components/sections/FeaturedProjectsClient";

function FeaturedProjectsSection({ projects }: { projects: typeof allProjects }) {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.08),transparent)]" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          badge="Featured Work"
          badgeIcon={<Sparkles className="w-4 h-4" />}
          title="Featured"
          highlight="Projects"
          description="A showcase of my best work demonstrating full-stack development and problem-solving skills."
          link="/projects"
          linkText="View All Projects"
        />

        <FeaturedProjectsClient projects={projects} />
      </div>
    </section>
  );
}