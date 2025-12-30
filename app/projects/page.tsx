"use client";

import { Search, X, Sparkles, Grid3X3, LayoutList } from "lucide-react";
import { Suspense, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { JSX } from "react";
import ProjectCard from "@/components/shared/ProjectCard";
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
  icon: string;
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
  
  // Initialize state from URL params using lazy initialization
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    return searchParams.get("search") || "";
  });
  const [techFilters, setTechFilters] = useState<string[]>(() => {
    const techFromUrl = searchParams.get("tech");
    if (techFromUrl) {
      return techFromUrl.split(',').map(t => t.trim()).filter(Boolean);
    }
    return [];
  });
  const [techInput, setTechInput] = useState<string>("");
  const [showTechSuggestions, setShowTechSuggestions] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const inputRef = useRef<HTMLInputElement>(null);
  const mounted = useRef(true);

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
      .slice(0, 8);
  }, [techInput, techFilters, allTechnologies]);

  const tabs: Tab[] = [
    { id: "all", label: "All", icon: "✦" },
    { id: "featured", label: "Featured", icon: "★" },
    { id: "blockchain", label: "Blockchain", icon: "⛓" },
    { id: "web", label: "Web", icon: "◎" },
    { id: "ai", label: "AI", icon: "◈" },
    { id: "fullstack", label: "Fullstack", icon: "◇" }
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
      if (mounted.current) {
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
    if (mounted.current) {
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
    if (mounted.current) {
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
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(59,130,246,0.08),transparent)]" />
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:72px_72px]" />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-sm text-amber-200/90 mb-8"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-medium">{allProjects.length} Projects</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-white mb-5">
              My{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            
            <p className="text-lg text-gray-400/90 max-w-2xl mx-auto font-light leading-relaxed">
              A curated collection of projects spanning web development, blockchain, and artificial intelligence.
            </p>
          </motion.div>

          {/* Search & Filters Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50" />
              <div className="relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Category Tabs - Horizontal Scroll with Hidden Scrollbar */}
            <div className="flex justify-center px-4 -mx-4">
              <div className="overflow-x-auto scrollbar-hide max-w-full">
                <div className="inline-flex gap-1.5 p-1.5 bg-white/[0.03] border border-white/[0.06] rounded-2xl min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? "text-white"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-white/10"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                        />
                      )}
                      <span className="relative flex items-center gap-2">
                        <span className="text-xs opacity-70">{tab.icon}</span>
                        {tab.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Filter */}
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                {/* Active Tech Filters */}
                <AnimatePresence>
                  {techFilters.map((tech) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-400/25 rounded-full backdrop-blur-sm"
                    >
                      <span className="text-sm text-blue-300 font-medium">{tech}</span>
                      <button
                        onClick={() => removeTechFilter(tech)}
                        className="p-0.5 hover:bg-blue-400/20 rounded-full transition-colors"
                      >
                        <X className="w-3.5 h-3.5 text-blue-300" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {techFilters.length > 0 && (
                  <button
                    onClick={clearAllTechFilters}
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors px-2 py-1"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Tech Input */}
              <div className="relative max-w-sm mx-auto">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Filter by technology..."
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
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/15 transition-all"
                />
                
                {/* Suggestions Dropdown */}
                <AnimatePresence>
                  {showTechSuggestions && techSuggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-[#13131a]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
                    >
                      {techSuggestions.map((tech) => (
                        <button
                          key={tech}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            addTechFilter(tech);
                          }}
                          className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-white/[0.06] hover:text-white transition-colors"
                        >
                          {tech}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* View Toggle & Results Count */}
          <div className="flex items-center justify-between mb-8 px-1">
            <p className="text-sm text-gray-500">
              Showing <span className="text-gray-300 font-medium">{filteredProjects.length}</span> projects
            </p>
            
            <div className="flex items-center gap-1 p-1 bg-white/[0.03] rounded-xl border border-white/[0.06]">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === "list" 
                    ? "bg-white/10 text-white shadow-sm" 
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === "grid" 
                    ? "bg-white/10 text-white shadow-sm" 
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Projects Grid/List */}
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={viewMode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 gap-5" 
                  : "space-y-5"
                }
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                    viewMode={viewMode}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-24"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] flex items-center justify-center">
                  <Search className="w-9 h-9 text-gray-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-300 mb-3">No projects found</h3>
                <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                  {techFilters.length > 0
                    ? `No projects match all selected technologies: ${techFilters.join(', ')}`
                    : searchQuery 
                    ? `No projects found matching "${searchQuery}"`
                    : "Try adjusting your filters to find what you're looking for."}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

export default function ProjectsPage(): JSX.Element {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-white/10 border-t-blue-400 rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Loading projects...</p>
        </div>
      </div>
    }>
      <ProjectsPageContent />
    </Suspense>
  );
}
