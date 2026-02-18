import { ArrowLeft, Award, Calendar, Code, ExternalLink, FileText, MapPin } from "lucide-react";

import Image from "next/image";
// app/work/exp-1/page.tsx - NullClass Experience
import Link from "next/link";

export default function NullClassExperience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work Experience
        </Link>

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700">
              <Image
                src="/images/companies/Nullclass.png  "
                alt="NullClass"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Web Development Intern
              </h1>
              <div className="text-xl text-blue-600 dark:text-blue-400 mb-4 font-semibold">
                NullClass
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Nov 2024 - Jan 2025
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Remote
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documents - Certificate & Offer Letter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-emerald-100 dark:border-emerald-800/30">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Certificate of Completion</h3>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-gray-100 dark:bg-gray-700">
              <Image
                src="/EXPERIENCE/NullClass_COC.jpeg"
                alt="Certificate of Completion - NullClass"
                fill
                className="object-contain"
              />
            </div>
            <a
              href="/EXPERIENCE/NullClass_COC.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Size
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-100 dark:border-blue-800/30">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Offer Letter</h3>
            </div>
            <a
              href="/EXPERIENCE/NullClass_OL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Offer Letter (PDF)
            </a>
          </div>
        </div>

        {/* Project Demo */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-blue-600" />
            Live Project Demo
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Event Management Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Real-time event management platform with communication serving 1200+ participants, achieving 99.9% uptime during live events.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Platform:</span>
                <a
                  href="https://real-life-among-us-dsc.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  real-life-among-us-dsc.vercel.app
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Responsibilities
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-blue-600 dark:text-blue-400 mt-1.5 text-xl">•</span>
              <span>Built event management platform with real-time communication serving 1200+ participants, achieving 99.9% uptime during live events</span>
            </li>
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-blue-600 dark:text-blue-400 mt-1.5 text-xl">•</span>
              <span>Engineered interactive coding games with 15+ programming challenges, increasing participant engagement by 70% and achieving 85% completion rate</span>
            </li>
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-blue-600 dark:text-blue-400 mt-1.5 text-xl">•</span>
              <span>Implemented WebSocket-based polling system for real-time data synchronization across multiple client connections</span>
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Key Achievements
            </h2>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-yellow-500 mt-1.5 text-xl">★</span>
              <span>Served <strong>1200+</strong> participants with <strong>99.9%</strong> uptime during live events</span>
            </li>
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-yellow-500 mt-1.5 text-xl">★</span>
              <span>Increased participant engagement by <strong>70%</strong> with <strong>85%</strong> completion rate</span>
            </li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Technologies Used
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React", "Node.js", "Express", "WebSocket", "Real-time Communication"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}