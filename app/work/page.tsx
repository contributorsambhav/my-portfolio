// components/ExperienceList.tsx
"use client";

import ExperienceCard from "@/components/shared/ExperienceCard";
import { ExperienceItem } from "@/types";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

interface ExperienceListProps {
  experiences: ExperienceItem[];
}

export default function ExperienceList({  }: ExperienceListProps) {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Work <span className="text-blue-600 dark:text-blue-400">Experiences</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Professional experience building products and leading technical initiatives.
        </p>
      </div>
      
      <div className="space-y-5 max-w-[70%] mx-auto">
      {experiences.map((exp, index) => (
        <Link key={exp.id} href={`/work/${exp.id}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ExperienceCard experience={exp} index={index} />
          </motion.div>
        </Link>
      ))}
      </div>
    </div>
  );
}