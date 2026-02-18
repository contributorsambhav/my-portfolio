// app/work/page.tsx
"use client";

import { Briefcase } from "lucide-react";
import ExperienceCard from "@/components/shared/ExperienceCard";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export default function ExperienceList() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.12),transparent)]" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-400">
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">Career Journey</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white">
              Work{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>

            <p className="text-gray-400/80 max-w-2xl mx-auto font-light text-lg">
              Professional experience building products and leading technical initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* Experience Cards */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(59,130,246,0.06),transparent)]" />

        <div className="max-w-5xl mx-auto relative">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Link key={exp.id} href={`/work/${exp.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-8"
                >
                  <ExperienceCard experience={exp} index={index} />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </main>
  );
}