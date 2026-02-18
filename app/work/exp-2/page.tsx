// app/work/exp-2/page.tsx - Atlantis Experience
"use client";

import { ArrowLeft, Award, Calendar, Code, ExternalLink, FileText, MapPin, Briefcase } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AtlantisExperience() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />

        <div className="max-w-5xl mx-auto relative">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Experience</span>
            </Link>
          </motion.div>

          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-transparent" />

            <div className="relative flex items-start gap-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-white/10">
                <Image
                  src="/EXPERIENCE/StartNd.png"
                  alt="Atlantis Newtech"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-blue-400">
                    Full Stack Developer Intern
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mb-2">
                  Atlantis Newtech{" "}
                  <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Pvt. Ltd.
                  </span>
                </h1>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    Apr 2025 - Jun 2025
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    Remote
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* Content */}
      <section className="py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(59,130,246,0.04),transparent)]" />

        <div className="max-w-5xl mx-auto relative space-y-8">
          {/* Documents Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-violet-400" />
              <h2 className="text-xl font-semibold text-white">Documents</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Certificate of Completion (PDF Preview) */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    Certificate
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-4">Certificate of Completion</h3>

                {/* PDF Preview */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-white/[0.02] border border-white/[0.06]">
                  <iframe
                    src="/EXPERIENCE/StartNd_COC.pdf#toolbar=0&navpanes=0"
                    className="w-full h-full border-0"
                    title="Certificate of Completion - Atlantis Newtech"
                  />
                </div>

                <a
                  href="/EXPERIENCE/StartNd_COC.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm font-medium hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Full Size
                </a>
              </div>

              {/* Offer Letter (Image) */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                    Offer Letter
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-4">Offer Letter</h3>

                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-white/[0.02] border border-white/[0.06]">
                  <Image
                    src="/EXPERIENCE/StartNd_OL.jpeg"
                    alt="Offer Letter - Atlantis Newtech"
                    fill
                    className="object-contain"
                  />
                </div>

                <a
                  href="/EXPERIENCE/StartNd_OL.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl text-sm font-medium hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Full Size
                </a>
              </div>
            </div>
          </motion.div>

          {/* Live Project Demos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <ExternalLink className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Live Project Demos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ERP Dashboard */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-all duration-300">
                <h3 className="text-lg font-medium text-white mb-2">ERP Dashboard System</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  Comprehensive ERP software with invoicing, GRN, purchase orders, and sales modules.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://9d771190.erp-dashboard-7il.pages.dev/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    erp-dashboard-7il.pages.dev
                  </a>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] font-mono text-xs text-gray-500">
                    <span className="text-gray-400">Email:</span> soumyadeephalder.web@gmail.com<br />
                    <span className="text-gray-400">Pass:</span> test@123
                  </div>
                </div>
              </div>

              {/* Flight Management System */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-all duration-300">
                <h3 className="text-lg font-medium text-white mb-2">Flight Management System</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  Admin dashboard for managing flight bookings and operations, enhancing booking efficiency by 45%.
                </p>
                <a
                  href="https://27cfcdc9.tjk-admin-dashboard.pages.dev/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  tjk-admin-dashboard.pages.dev
                </a>
              </div>
            </div>
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Key Responsibilities</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Developed Enterprise Resource Planning software with invoicing, Goods Receipt Note, purchase orders, and sales modules in team of 8 developers, improving operational efficiency by 40% and reducing processing time by 35%",
                  "Implemented Object-Relational Mapping frameworks for database optimization, resulting in 50% faster query execution and improved scalability for 500+ concurrent users",
                  "Architected flight management system using Next.js, enhancing booking efficiency by 45%",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-blue-400/60 mt-0.5">→</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl font-semibold text-white">Key Achievements</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { metric: "40%", label: "Operational Efficiency", desc: "Improved with ERP software" },
                  { metric: "50%", label: "Faster Queries", desc: "500+ concurrent users scalability" },
                  { metric: "45%", label: "Booking Efficiency", desc: "Flight management system" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-1">
                      {item.metric}
                    </div>
                    <div className="text-sm font-medium text-white mb-1">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Code className="w-5 h-5 text-violet-400" />
                <h2 className="text-xl font-semibold text-white">Technologies Used</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "React", "TypeScript", "Node.js", "Prisma ORM", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </main>
  );
}