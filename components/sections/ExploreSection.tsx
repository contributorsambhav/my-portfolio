// components/sections/ExploreSection.tsx
"use client";

import { ChevronRight, Code2 } from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ExploreSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(120,119,198,0.08),transparent)]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white mb-4">
            Explore{" "}
            <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              More
            </span>
          </h2>
          <p className="text-gray-400/80 max-w-lg mx-auto font-light">
            Dive deeper into my journey and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/projects" className="group block">
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-blue-500/[0.08] to-cyan-500/[0.04] border border-blue-500/10 hover:border-blue-500/25 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-7 h-7 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    All Projects
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Complete portfolio showcasing full-stack development, AI, and
                    blockchain solutions.
                  </p>

                  <div className="flex items-center gap-2 text-blue-400/80 text-sm font-medium group-hover:text-blue-300 transition-colors">
                    <span>Browse all</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
