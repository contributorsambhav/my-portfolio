// components/sections/Hero.tsx
"use client";

import { Code2, FileText, Github, Linkedin, Mail, Twitter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code2,
  Twitter
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-32 h-32 mx-auto"
          >
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="rounded-full object-cover border-4 border-primary/20"
              priority
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            {profile.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-muted-foreground"
          >
            {profile.title}
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {profile.bio}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            {profile.social.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  asChild
                  className="group hover:scale-105 transition-transform"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    <span className="capitalize">{link.name}</span>
                  </a>
                </Button>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-12"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <p className="text-sm">Scroll to explore</p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1"
              >
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mx-auto" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}