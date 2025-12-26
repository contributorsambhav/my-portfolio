"use client";

import ProjectCard from "@/components/shared/ProjectCard";
import { Search } from "lucide-react";
import { allProjects } from "@/data/projects";
import { useState } from "react";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
    { id: "blockchain", label: "Blockchain" },
    { id: "web", label: "Web" },
    { id: "ai", label: "AI" }
  ];

  const getFilteredProjects = () => {
    let filtered = allProjects;

    // Filter by active tab
    if (activeTab === "featured") {
      filtered = filtered.filter((p) => p.featured);
    } else if (activeTab !== "all") {
      filtered = filtered.filter((p) => p.category === activeTab);
    }

    // Filter by search query - search through all project data
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((p) => {
        // Search in title
        if (p.title?.toLowerCase().includes(query)) return true;
        
        // Search in description
        if (p.description?.toLowerCase().includes(query)) return true;
        
        // Search in tags
        if (p.tags?.some(tag => tag.toLowerCase().includes(query))) return true;
        
        // Search in technologies
        if (p.technologies?.some(tech => tech.toLowerCase().includes(query))) return true;
        
        // Search in skills
        if (p.skills?.some(skill => skill.toLowerCase().includes(query))) return true;
        
        // Search in category
        if (p.category?.toLowerCase().includes(query)) return true;
        
        // Search in any other string fields
        if (p.tech?.toLowerCase().includes(query)) return true;
        if (p.stack?.some(item => item.toLowerCase().includes(query))) return true;
        if (p.tools?.some(tool => tool.toLowerCase().includes(query))) return true;
        
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

  return (
    <main className="min-h-screen">
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">All Projects</h2>
            <p className="text-muted-foreground mb-8">
              Explore my complete portfolio of projects
            </p>

            {/* Search Bar and Tabs */}
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center mb-8">
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
                  {searchQuery 
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