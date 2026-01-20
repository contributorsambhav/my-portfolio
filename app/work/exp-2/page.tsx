import { ArrowLeft, Award, Calendar, Code, ExternalLink, MapPin } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function AtlantisExperience() {
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
                src="/images/companies/atlantis.png"
                alt="Atlantis Newtech"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Full Stack Developer Intern
              </h1>
              <div className="flex items-center gap-2 text-xl mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Atlantis Newtech Pvt. Ltd.
                </span>
                <a 
                  href="https://drive.google.com/file/d/1Aq77kbPADmaZEYGNqrrjzhbYdacTg5xC/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Apr 2025 - Jun 2025
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Remote
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Demos */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-blue-600" />
            Live Project Demos
          </h2>
          
          <div className="grid gap-6">
            {/* ERP Dashboard */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                ERP Dashboard System
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Comprehensive ERP software with invoicing, GRN, purchase orders, and sales modules.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Platform:</span>
                  <a 
                    href="https://9d771190.erp-dashboard-7il.pages.dev/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    erp-dashboard-7il.pages.dev
                  </a>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Test Credentials:</span>
                  <div className="mt-2 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg font-mono text-xs">
                    Email: soumyadeephalder.web@gmail.com<br/>
                    Password: test@123
                  </div>
                </div>
              </div>
            </div>

            {/* Flight Management System */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Flight Management System
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Admin dashboard for managing flight bookings and operations built with Next.js.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Platform:</span>
                  <a 
                    href="https://27cfcdc9.tjk-admin-dashboard.pages.dev/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    tjk-admin-dashboard.pages.dev
                  </a>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Test Credentials:</span>
                  <div className="mt-2 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg font-mono text-xs">
                    Email: user@example.com<br/>
                    Password: yourpassword123
                  </div>
                </div>
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
              <span>Worked in a team of 8 developers using agile development to deliver comprehensive ERP software system</span>
            </li>
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-blue-600 dark:text-blue-400 mt-1.5 text-xl">•</span>
              <span>Implemented object-relational mapping frameworks for database enhancement</span>
            </li>
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-blue-600 dark:text-blue-400 mt-1.5 text-xl">•</span>
              <span>Collaborated with 3 cross-functional teams to architect flight management system using Next.js</span>
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
              <span>Delivered ERP software with invoicing, GRN, purchase orders, and sales modules, improving operational efficiency by <strong>40%</strong> and reducing processing time by <strong>35%</strong></span>
            </li>
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-yellow-500 mt-1.5 text-xl">★</span>
              <span>Achieved <strong>50%</strong> faster query execution and improved system scalability for <strong>500+</strong> concurrent users</span>
            </li>
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-yellow-500 mt-1.5 text-xl">★</span>
              <span>Enhanced booking efficiency by <strong>45%</strong> through effective troubleshooting and debugging</span>
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
            {["Next.js", "React", "TypeScript", "Node.js", "Prisma ORM", "PostgreSQL"].map((tech) => (
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