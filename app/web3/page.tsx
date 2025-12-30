// app/web3/page.tsx
"use client";

import { ExternalLink, Github, Blocks, TrendingUp, Award, Sparkles } from "lucide-react";
import {
  getActiveGrants,
  getCompletedWeb3Projects,
  getGrantAttempts,
  web3Projects,
} from "@/data/web3";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const filters = [
  { key: "all", label: "All" },
  { key: "projects", label: "Projects" },
  { key: "grants", label: "Grants" },
  { key: "completed", label: "Completed" },
  { key: "applied", label: "Applied" },
  { key: "in-progress", label: "In Progress" },
];

export default function Web3Page() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = web3Projects.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "projects") return project.type === "project";
    if (selectedFilter === "grants") return project.type === "grant";
    return project.status === selectedFilter;
  });

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "in-progress":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "applied":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "rejected":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const stats = [
    {
      icon: Blocks,
      value: getCompletedWeb3Projects().length,
      label: "Projects",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
    {
      icon: TrendingUp,
      value: getActiveGrants().length,
      label: "Active Grants",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: Award,
      value: getGrantAttempts().length,
      label: "Grant Attempts",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300">Decentralized Future</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Web3 & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Blockchain</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Exploring decentralized technologies, building on blockchain, and pursuing grants to fuel innovation
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className={`p-3 rounded-xl ${stat.bg}`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="text-left">
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    selectedFilter === filter.key
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {selectedFilter === filter.key && (
                    <motion.span
                      layoutId="web3-filter-active"
                      className="absolute inset-0 bg-white/[0.08] rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-gray-600 mb-8"
          >
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "item" : "items"}
          </motion.p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative flex flex-col h-full rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${getStatusStyles(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="flex gap-2 mb-4">
                      <span className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-white/[0.04] rounded-lg border border-white/[0.06] capitalize">
                        {project.type}
                      </span>
                      {project.blockchain && (
                        <span className="px-2.5 py-1 text-xs font-medium text-violet-400 bg-violet-500/10 rounded-lg border border-violet-500/20">
                          {project.blockchain}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Grant Info */}
                  {project.grant && (
                    <div className="mx-6 p-4 rounded-xl bg-gradient-to-br from-violet-500/5 to-blue-500/5 border border-violet-500/10">
                      <p className="text-sm font-medium text-white mb-1">
                        {project.grant.name}
                      </p>
                      {project.grant.round && (
                        <p className="text-xs text-gray-500 mb-1">
                          {project.grant.round}
                        </p>
                      )}
                      {project.grant.amount && (
                        <p className="text-sm font-semibold text-violet-400">
                          {project.grant.amount}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="flex-1 p-6 pt-4 space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs text-gray-500 bg-white/[0.03] rounded-md border border-white/[0.04]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 text-xs text-gray-600">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Date */}
                    <p className="text-xs text-gray-600">
                      {new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 bg-white/[0.04] rounded-lg border border-white/[0.06] hover:text-white hover:bg-white/[0.08] transition-all"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 bg-white/[0.04] rounded-lg border border-white/[0.06] hover:text-white hover:bg-white/[0.08] transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                <Blocks className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-gray-500">No projects found for this filter</p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-transparent" />
              <div className="absolute inset-0 border border-violet-500/20 rounded-3xl" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                  <span className="text-xl">🌐</span>
                  <span className="text-sm text-violet-300">Open to Collaborate</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Building the Decentralized Future
                </h3>
                
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Actively exploring Web3 technologies and seeking grants to build impactful blockchain solutions. 
                  Open to collaborations and opportunities in the space!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
