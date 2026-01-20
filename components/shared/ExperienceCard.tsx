// components/shared/ExperienceCard.tsx
"use client";

import { Building2, Calendar, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-card"
    >
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] gap-0">
        {/* Left Column - 1:1 Image */}
        <div className="relative w-full aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center h-full">
          <Building2 className="w-16 h-16 text-primary" />
          {experience.current && (
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="text-xs">
                Current
              </Badge>
            </div>
          )}
        </div>

        {/* Right Column - Content */}
        <div className="p-6 flex flex-col justify-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-1">{experience.role}</h3>
            <button
              type="button"
              onClick={() =>
              window.open(experience.companyUrl, "_blank", "noopener,noreferrer")
              }
              role="link"
              aria-label={`Open ${experience.company} website`}
              className="text-lg text-primary hover:underline text-left"
            >
              {experience.company}
            </button>
            
            <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-sm">Responsibilities:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {experience.achievements && experience.achievements.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}