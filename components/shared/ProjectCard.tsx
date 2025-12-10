// components/shared/ProjectCard.tsx
"use client";

import { ExternalLink, Github, Video } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Project } from '@/types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const getCategoryConfig = (category: string) => {
    const configs = {
      web: {
        gradient: 'from-blue-500/20 to-cyan-500/20',
        badge: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
        icon: '🌐'
      },
      web3: {
        gradient: 'from-purple-500/20 to-pink-500/20',
        badge: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
        icon: '⛓️'
      },
      ai: {
        gradient: 'from-green-500/20 to-emerald-500/20',
        badge: 'bg-green-500/10 text-green-500 border-green-500/20',
        icon: '🤖'
      },
      fullstack: {
        gradient: 'from-orange-500/20 to-amber-500/20',
        badge: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
        icon: '💻'
      },
      blockchain: {
        gradient: 'from-pink-500/20 to-rose-500/20',
        badge: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
        icon: '🔗'
      },
    };
    return configs[category as keyof typeof configs] || configs.web;
  };

  const categoryConfig = getCategoryConfig(project.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-card h-full flex flex-col"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-20">
          <Badge className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30">
            ⭐ Featured
          </Badge>
        </div>
      )}

      {/* Project Image/Visual */}
      <div className={`relative h-52 bg-gradient-to-br ${categoryConfig.gradient} overflow-hidden`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center backdrop-blur-sm">
            <div className="text-center space-y-2">
              <span className="text-7xl block">{categoryConfig.icon}</span>
              <Badge className={categoryConfig.badge}>
                {project.category.toUpperCase()}
              </Badge>
            </div>
          </div>
        )}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3 z-10">
          <Badge className={categoryConfig.badge}>
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-sm text-primary/80 font-medium mb-2">
            {project.tagline}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-1">
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="text-primary mt-0.5">•</span>
                <span className="line-clamp-1">{highlight}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 5} more
            </Badge>
          )}
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 pt-4 border-t mt-auto">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-base font-bold text-primary">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2 mt-auto">
          {project.live && (
            <Button asChild variant="default" size="sm" className="flex-1">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </Button>
          )}
          {project.github && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          )}
          {project.video && !project.live && !project.github && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4" />
                Video
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}