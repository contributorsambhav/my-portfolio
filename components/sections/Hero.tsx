// components/sections/Hero.tsx
"use client";

import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

import ContributionCalendarClient from "../ui/contribution-calendar-client";
import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const socialLinks = [
  { name: "GitHub", icon: Github, key: "Github" },
  { name: "LinkedIn", icon: Linkedin, key: "Linkedin" },
  { name: "Email", icon: Mail, key: "Mail" },
];

interface HeroProps {
  contributions?: any;
}

export default function Hero({ contributions }: HeroProps) {
  // Get social links from profile
  const getSocialUrl = (key: string) => {
    const social = profile.social.find(s => s.icon === key);
    return social?.url || "#";
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#09090b] py-20">
      {/* Minimal gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Column - Profile Info (1/3) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-1 text-center lg:text-left"
            >
              {/* Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <div className="relative w-24 h-24 mx-auto lg:mx-0">
                  <div className="absolute -inset-1 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full opacity-60 blur-md" />
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={96}
                    height={96}
                    className="relative rounded-full border-2 border-white/10 object-cover w-full h-full"
                    priority
                  />
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4"
              >
                {profile.name}
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-400 mb-6"
              >
                {profile.title}
              </motion.p>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-500 leading-relaxed mb-10"
              >
                Building innovative solutions across web2 and web3. Creating scalable applications and contributing to open-source.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-3 flex-wrap"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={getSocialUrl(social.key)}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                      className="group p-3 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}
                
                {/* Resume/Portfolio Link */}
                <motion.a
                  href="/projects"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.65 }}
                  className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
                >
                  View Work
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Contribution Calendars (2/3) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-2"
            >
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm h-full flex flex-col justify-center">
                <ContributionCalendarClient contributions={contributions} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}