"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

const socialLinks = [
  {
    href: "https://github.com/contributorsambhav",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/sambhav-2535a8285/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:sambhav511974@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/hackathons", label: "Hackathons" },
  { href: "/web3", label: "Web3" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#09090b] border-t border-white/[0.06]">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold text-white">
                S<span className="text-violet-400">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Building digital experiences with clean code and thoughtful design.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {/* Navigation */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Connect
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 flex items-center gap-1.5">
            © {currentYear} Sambhav Gupta
            <span className="text-gray-700">·</span>
            <span className="inline-flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500/70 fill-red-500/70" />
            </span>
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="mailto:sambhav511974@gmail.com"
              className="text-sm text-gray-600 hover:text-gray-300 transition-colors"
            >
              sambhav511974@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
