// components/shared/HackathonCard.tsx
"use client";

import { Calendar, ExternalLink, Github, MapPin, Play, Trophy, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Hackathon } from '@/types';
import VideoModal from './VideoModal';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface HackathonCardProps {
  hackathon: Hackathon;
  index?: number;
}

export default function HackathonCard({ hackathon, index = 0 }: HackathonCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  const getAchievementColor = (achievement: string) => {
    if (achievement.toLowerCase().includes('winner') || achievement.toLowerCase().includes('1st')) {
      return 'bg-yellow-500';
    }
    if (achievement.toLowerCase().includes('finalist') || achievement.toLowerCase().includes('top')) {
      return 'bg-blue-500';
    }
    return 'bg-gray-500';
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Trophy className={`w-5 h-5 ${getAchievementColor(hackathon.achievement)}`} />
                  {hackathon.name}
                </CardTitle>
                <CardDescription className="mt-2">
                  {hackathon.organizer}
                </CardDescription>
              </div>
              <Badge className={getAchievementColor(hackathon.achievement)}>
                {hackathon.achievement}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{hackathon.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{hackathon.location}</span>
              </div>
              {hackathon.teamSize && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Team of {hackathon.teamSize}</span>
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="flex-1 space-y-4">
            {/* Project Name */}
            <div>
              <h4 className="text-sm font-semibold mb-1">Project:</h4>
              <p className="text-sm text-primary">{hackathon.project}</p>
            </div>

            {/* Role & Prize */}
            <div className="flex gap-4 flex-wrap">
              {hackathon.role && (
                <div>
                  <p className="text-xs text-muted-foreground">Role</p>
                  <p className="text-sm font-medium">{hackathon.role}</p>
                </div>
              )}
              {hackathon.prize && (
                <div>
                  <p className="text-xs text-muted-foreground">Prize</p>
                  <p className="text-sm font-medium text-primary">{hackathon.prize}</p>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {hackathon.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {hackathon.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex gap-2">
            {hackathon.github && (
              <Button variant="outline" size="sm" asChild>
                <a href={hackathon.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {hackathon.demo && (
              <Button variant="outline" size="sm" asChild>
                <a href={hackathon.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
            {hackathon.video && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowVideo(true)}
              >
                <Play className="w-4 h-4 mr-2" />
                Video
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>

      {/* Video Modal */}
      {hackathon.video && (
        <VideoModal
          isOpen={showVideo}
          onClose={() => setShowVideo(false)}
          videoUrl={hackathon.video}
          title={hackathon.project}
        />
      )}
    </>
  );
}