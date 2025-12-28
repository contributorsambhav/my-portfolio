"use client";

import { Search, X } from "lucide-react";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { JSX } from "react";
import   ProjectCard from "@/components/shared/ProjectCard";
import { allProjects } from "@/data/projects";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "web" | "web3" | "ai" | "fullstack" | "blockchain";
  featured: boolean;
  github?: string;
  live?: string;
  video?: string;
  image?: string;
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface Tab {
  id: string;
  label: string;
}

const projectHasTechnology = (project: Project, techName: string): boolean => {
  return project.technologies.some(tech => 
    tech.toLowerCase() === techName.toLowerCase()
  );
};

const projectHasAllTechnologies = (project: Project, techNames: string[]): boolean => {
  return techNames.every(techName => projectHasTechnology(project, techName));
};

function ProjectsPageContent(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [techFilters, setTechFilters] = useState<string[]>([]);
  const [techInput, setTechInput] = useState<string>("");
  const [showTechSuggestions, setShowTechSuggestions] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  // Get all unique technologies from all projects
  const allTechnologies = useMemo<string[]>(() => {
    const techSet = new Set<string>();
    allProjects.forEach((project: Project) => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter tech suggestions based on input
  const techSuggestions = useMemo<string[]>(() => {
    if (!techInput.trim()) return [];
    const query = techInput.toLowerCase();
    return allTechnologies
      .filter(tech => 
        tech.toLowerCase().includes(query) && 
        !techFilters.includes(tech)
      )
      .slice(0, 10);
  }, [techInput, techFilters, allTechnologies]);

  // Set filters from URL on mount ONLY
  useEffect(() => {
    setMounted(true);
    const techFromUrl = searchParams.get("tech");
    const searchFromUrl = searchParams.get("search");
    
    if (techFromUrl) {
      const techs = techFromUrl.split(',').map(t => t.trim()).filter(Boolean);
      setTechFilters(techs);
    }
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, []); // Empty dependency array - only run once

  const tabs: Tab[] = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
    { id: "blockchain", label: "Blockchain" },
    { id: "web", label: "Web" },
    { id: "ai", label: "AI" }
  ];

  const getFilteredProjects = (): Project[] => {
    let filtered: Project[] = allProjects as Project[];

    // Filter by active tab
    if (activeTab === "featured") {
      filtered = filtered.filter((p) => p.featured);
    } else if (activeTab !== "all") {
      filtered = filtered.filter((p) => p.category === activeTab);
    }

    // Filter by technologies (AND operator - must have ALL selected techs)
    if (techFilters.length > 0) {
      filtered = filtered.filter((p) => projectHasAllTechnologies(p, techFilters));
    }

    // Filter by search query (substring matching for general search)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((p) => {
        if (p.title.toLowerCase().includes(query)) return true;
        if (p.description.toLowerCase().includes(query)) return true;
        if (p.tagline.toLowerCase().includes(query)) return true;
        if (p.longDescription.toLowerCase().includes(query)) return true;
        if (p.technologies.some(tech => tech.toLowerCase().includes(query))) return true;
        if (p.category.toLowerCase().includes(query)) return true;
        
        return false;
      });
    }

    return filtered.sort((a, b) => {
      if (a.featured === b.featured) {
        return a.title.localeCompare(b.title);
      }
      return b.featured ? 1 : -1;
    });
  };

  const filteredProjects = getFilteredProjects();

  const addTechFilter = (tech: string): void => {
    if (tech && !techFilters.includes(tech)) {
      const newFilters = [...techFilters, tech];
      setTechFilters(newFilters);
      setTechInput("");
      setShowTechSuggestions(false);
      
      // Update URL manually
      if (mounted) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("tech", newFilters.join(','));
        router.replace(`/projects?${params.toString()}`);
      }
    }
  };

  const removeTechFilter = (tech: string): void => {
    const newFilters = techFilters.filter(t => t !== tech);
    setTechFilters(newFilters);
    
    // Update URL manually
    if (mounted) {
      const params = new URLSearchParams(searchParams.toString());
      if (newFilters.length > 0) {
        params.set("tech", newFilters.join(','));
      } else {
        params.delete("tech");
      }
      const newUrl = params.toString() ? `/projects?${params.toString()}` : '/projects';
      router.replace(newUrl);
    }
  };

  const clearAllTechFilters = (): void => {
    setTechFilters([]);
    
    // Update URL manually
    if (mounted) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("tech");
      const newUrl = params.toString() ? `/projects?${params.toString()}` : '/projects';
      router.replace(newUrl);
    }
  };

  const handleTechInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && techInput.trim()) {
      e.preventDefault();
      const exactMatch = allTechnologies.find(
        tech => tech.toLowerCase() === techInput.trim().toLowerCase()
      );
      if (exactMatch) {
        addTechFilter(exactMatch);
      } else if (techSuggestions.length > 0) {
        addTechFilter(techSuggestions[0]);
      }
    }
  };

  return (
    <main className="min-h-screen">
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">All Projects</h2>
            <p className="text-muted-foreground mb-8">
              Explore my complete portfolio of projects
            </p>

            {/* Search Bar, Tabs, and Tech Filter in one row on desktop */}
            <div className="flex flex-col gap-4 mb-6">
              {/* Top Row: Search and Tabs */}
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                {/* Search Bar */}
                <div className="relative w-full lg:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Compact Tech Filter */}
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center bg-card/50 border border-border/50 rounded-lg p-3">
                <div className="flex items-center gap-2 min-w-fit">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Technologies:
                  </span>
                  {techFilters.length > 0 && (
                    <button
                      onClick={clearAllTechFilters}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <div className="flex-1 flex flex-wrap gap-2 items-center w-full">
                  {/* Active Tech Filters */}
                  {techFilters.map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 border border-primary/30 rounded text-xs"
                    >
                      <span className="font-medium text-primary">{tech}</span>
                      <button
                        onClick={() => removeTechFilter(tech)}
                        className="p-0.5 hover:bg-primary/20 rounded transition-colors"
                        aria-label={`Remove ${tech} filter`}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}

                  {/* Tech Input with Dropdown */}
                  <div className="relative flex-1 min-w-[200px]">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Add technology..."
                      value={techInput}
                      onChange={(e) => {
                        setTechInput(e.target.value);
                        setShowTechSuggestions(true);
                      }}
                      onFocus={() => setShowTechSuggestions(true)}
                      onBlur={() => {
                        setTimeout(() => setShowTechSuggestions(false), 200);
                      }}
                      onKeyDown={handleTechInputKeyDown}
                      className="w-full px-3 py-1.5 bg-background border border-border rounded text-xs focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    />
                    
                    {/* Suggestions Dropdown with Backdrop Blur */}
                    {showTechSuggestions && techSuggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-1 backdrop-blur-md bg-popover/95 border border-border rounded-lg shadow-2xl z-50 max-h-60 overflow-y-auto">
                        {techSuggestions.map((tech) => (
                          <button
                            key={tech}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              addTechFilter(tech);
                            }}
                            className="w-full px-3 py-2 text-left text-sm hover:bg-accent/80 transition-colors border-b border-border/50 last:border-b-0 backdrop-blur-sm"
                          >
                            <span className="font-medium">{tech}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
{/* 
                  {techFilters.length > 0 && (
                    <span className="text-xs text-muted-foreground italic whitespace-nowrap">
                      (AND filter)
                    </span>
                  )} */}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-4">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className="text-center py-12 bg-card rounded-lg border border-border">
                <p className="text-muted-foreground">
                  {techFilters.length > 0
                    ? `No projects found with all technologies: ${techFilters.join(', ')}`
                    : searchQuery 
                    ? `No projects found matching "${searchQuery}"`
                    : "No projects found matching your filters."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ProjectsPage(): JSX.Element {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProjectsPageContent />
    </Suspense>
  );
}