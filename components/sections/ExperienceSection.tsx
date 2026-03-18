// components/sections/ExperienceSection.tsx
"use client";

import { Briefcase } from "lucide-react";
import ExperienceCard from "@/components/shared/ExperienceCard";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import { ExperienceItem } from "@/types";

export default function ExperienceSection({
  experiences,
}: {
  experiences: ExperienceItem[];
}) {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(59,130,246,0.06),transparent)]" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          badge="Career Journey"
          badgeIcon={<Briefcase className="w-4 h-4" />}
          title="Work"
          highlight="Experience"
          description="Professional experience building products and leading technical initiatives."
          link="/work"
          linkText="Full Experience"
        />

        <div className="space-y-6">
          {experiences.slice(0, 2).map((exp, index) => (
            <Link key={exp.id} href={`/work/${exp.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                <ExperienceCard experience={exp} index={index} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
