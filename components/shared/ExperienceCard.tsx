// components/shared/ExperienceCard.tsx
"use client";

import { Building2, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { ExperienceItem } from "@/types";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="relative lg:w-80 xl:w-96 flex-shrink-0 aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-blue-500/20 to-cyan-600/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <Building2 className="w-12 h-12 text-blue-400 opacity-60" />
              </div>
            </div>
            
            {/* Current Badge */}
            {experience.current && (
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider bg-emerald-500/90 text-black rounded-full">
                  Current
                </span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="space-y-2">
                {/* Category */}
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-blue-400">
                    Experience
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-gray-100 transition-colors">
                  {experience.role}
                </h3>
              </div>

              {/* Quick Link */}
              {experience.companyUrl && (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all group/link"
                >
                  <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>

            {/* Company */}
            <p className="text-sm text-blue-400/80 font-medium mb-2">
              {experience.company}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-1.5 mb-4">
              {experience.description.slice(0, 3).map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                  <span className="text-gray-600 mt-0.5">→</span>
                  <span className="line-clamp-2">{item}</span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            {experience.achievements && experience.achievements.length > 0 && (
              <div className="space-y-1.5 mb-4 py-4 border-t border-white/5">
                <h4 className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Key Achievements</h4>
                {experience.achievements.slice(0, 2).map((achievement, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="text-emerald-500/50 mt-0.5">✓</span>
                    <span className="line-clamp-1">{achievement}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {experience.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-medium text-gray-400 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {experience.technologies.length > 6 && (
                <span className="px-2.5 py-1 text-[11px] font-medium text-gray-500">
                  +{experience.technologies.length - 6} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}