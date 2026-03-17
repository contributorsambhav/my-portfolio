// components/shared/SectionHeader.tsx
"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SectionHeader({
  badge,
  badgeIcon,
  title,
  highlight,
  description,
  link,
  linkText,
}: {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlight: string;
  description: string;
  link?: string;
  linkText?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-400">
          {badgeIcon}
          <span className="font-medium">{badge}</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white">
          {title}{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h2>

        <p className="text-gray-400/80 max-w-lg font-light">{description}</p>
      </motion.div>

      {link && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href={link}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:bg-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all duration-300"
          >
            <span className="text-sm font-medium">{linkText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
