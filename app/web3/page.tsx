// app/web3/page.tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import {
  getActiveGrants,
  getCompletedWeb3Projects,
  getGrantAttempts,
  web3Projects,
} from "@/data/web3";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const filters = [
  "all",
  "projects",
  "grants",
  "completed",
  "applied",
  "in-progress",
];

export default function Web3Page() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = web3Projects.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "projects") return project.type === "project";
    if (selectedFilter === "grants") return project.type === "grant";
    return project.status === selectedFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "applied":
        return "bg-yellow-500";
      case "rejected":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">⛓️</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Web3 & Blockchain
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Exploring decentralized technologies, building on blockchain, and
            pursuing grants to fuel innovation
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">
                {getCompletedWeb3Projects().length}
              </p>
              <p className="text-muted-foreground">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-yellow-500">
                {getActiveGrants().length}
              </p>
              <p className="text-muted-foreground">Active Grants</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-500">
                {getGrantAttempts().length}
              </p>
              <p className="text-muted-foreground">Grant Attempts</p>
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter)}
              className="capitalize"
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Projects Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-8 text-muted-foreground"
        >
          Showing {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "item" : "items"}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="outline" className="capitalize">
                      {project.type}
                    </Badge>
                    {project.blockchain && (
                      <Badge variant="secondary">{project.blockchain}</Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <CardDescription>{project.description}</CardDescription>

                  {/* Grant Info */}
                  {project.grant && (
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm font-semibold">
                        {project.grant.name}
                      </p>
                      {project.grant.round && (
                        <p className="text-xs text-muted-foreground">
                          {project.grant.round}
                        </p>
                      )}
                      {project.grant.amount && (
                        <p className="text-sm text-primary font-medium">
                          {project.grant.amount}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Date */}
                  <p className="text-xs text-muted-foreground">
                    {new Date(project.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </CardContent>

                <CardFooter className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-lg text-center border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold mb-4">
            🌐 Building the Decentralized Future
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Actively exploring Web3 technologies and seeking grants to build
            impactful blockchain solutions. Open to collaborations and
            opportunities in the space!
          </p>
        </motion.div>
      </div>
    </main>
  );
}
