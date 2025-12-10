// components/shared/ExperienceCard.tsx
"use client";

import { Building2, Calendar, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { ExperienceItem } from '@/types';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{experience.role}</h3>
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary hover:underline"
              >
                {experience.company}
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{experience.duration}</span>
            {experience.current && (
              <Badge variant="secondary" className="text-xs">Current</Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {experience.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {experience.achievements && experience.achievements.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Key Achievements:</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {experience.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}