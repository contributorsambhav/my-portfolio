// components/sections/FeaturedProjectsClient.tsx
"use client";

import ProjectCard from "@/components/shared/ProjectCard";
import { motion } from "framer-motion";

interface Project {
  id: string;
  [key: string]: unknown;
}

export default function FeaturedProjectsClient({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <div className="space-y-5">
      {projects.slice(0, 3).map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <ProjectCard project={project as any} index={index} />
        </motion.div>
      ))}
    </div>
  );
}
