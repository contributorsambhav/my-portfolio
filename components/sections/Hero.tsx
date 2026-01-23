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
    <section className="pt-12 pb-16 bg-gradient-to-b from-gray-900/60 to-gray-900/30 overflow-hidden">
   

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
       <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center lg:text-left lg:w-1/4"
          >
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <div className="relative w-20 h-20 mx-auto lg:mx-0">
                <div className="absolute -inset-1 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full opacity-60 blur-md" />
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={80}
                  height={80}
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
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3"
            >
              {profile.name}
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-400 mb-4"
            >
              {profile.title}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-gray-500 leading-relaxed mb-6 mx-auto lg:mx-0"
            >
              Building innovative solutions across web2 and web3. Creating scalable applications and contributing to open-source.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 flex-wrap"
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
                    className="group p-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
              
              {/* Resume/Portfolio Link */}
              <motion.a
                href="/projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.65 }}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
              >
                View Work
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Contribution Calendars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 w-full max-w-4xl"
          >
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 sm:p-7 backdrop-blur-sm">
              <ContributionCalendarClient contributions={contributions} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}