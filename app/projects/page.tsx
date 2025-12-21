"use client";

import { useState } from "react";
import ProjectCard from "@/components/shared/ProjectCard";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "featured", label: "Featured" },
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "ai", label: "AI" },
    { id: "blockchain", label: "Blockchain" },
  ];

  const getFilteredProjects = () => {
    let filtered = allProjects;

    if (activeTab === "featured") {
      filtered = filtered.filter((p) => p.featured);
    } else if (activeTab !== "all") {
      filtered = filtered.filter((p) => p.category === activeTab);
    }

    return filtered.sort((a, b) => {
      if (a.featured === b.featured) {
        return a.title.localeCompare(b.title);
      }
      return b.featured ? -1 : 1;
    });
  };

  return (
    <main className="min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">All Projects</h2>
            <p className="text-muted-foreground mb-8">
              Explore my complete portfolio of projects
            </p>

            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {getFilteredProjects().map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}