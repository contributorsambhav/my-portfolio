// data/experience.ts
import { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "exp-2",
    company: "Atlantis Newtech Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    location: "Remote",
    duration: "Apr 2025 - Jun 2025",
    startDate: "2025-04",
    endDate: "2025-06",
    current: false,
    description: [
      "Developed Enterprise Resource Planning software with invoicing, Goods Receipt Note, purchase orders, and sales modules in team of 8 developers, improving operational efficiency by 40% and reducing processing time by 35%",
      "Implemented Object-Relational Mapping frameworks for database optimization, resulting in 50% faster query execution and improved scalability for 500+ concurrent users",
      "Architected flight management system using Next.js, enhancing booking efficiency by 45%",
    ],
    achievements: [
      "Improved operational efficiency by 40% and reduced processing time by 35% with ERP software",
      "Achieved 50% faster query execution and improved scalability for 500+ concurrent users",
      "Enhanced booking efficiency by 45% with flight management system",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
    ],
    projectLinks: [
      { label: "ERP Software", url: "https://9d771190.erp-dashboard-7il.pages.dev/login" },
      { label: "Flight Management System", url: "https://27cfcdc9.tjk-admin-dashboard.pages.dev/dashboard" },
    ],
    certificateImage: "/EXPERIENCE/StartNd_COC.pdf",
    offerLetterImage: "/EXPERIENCE/StartNd_OL.jpeg",
    imageUrl: "/EXPERIENCE/StartNd.png",
  },
  {
    id: "exp-1",
    company: "NullClass",
    role: "Web Development Intern",
    location: "Remote",
    duration: "Nov 2024 - Jan 2025",
    startDate: "2024-11",
    endDate: "2025-01",
    current: false,
    description: [
      "Built event management platform with real-time communication serving 1200+ participants, achieving 99.9% uptime during live events",
      "Engineered interactive coding games with 15+ programming challenges, increasing participant engagement by 70% and achieving 85% completion rate",
      "Implemented WebSocket-based polling system for real-time data synchronization across multiple client connections",
    ],
    achievements: [
      "Served 1200+ participants with 99.9% uptime during live events",
      "Increased participant engagement by 70% with 85% completion rate",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "WebSocket",
      "Real-time Communication",
    ],
    projectLinks: [
      { label: "Event Platform", url: "https://real-life-among-us-dsc.vercel.app/" },
    ],
    certificateImage: "/EXPERIENCE/NullClass_COC.jpeg",
    offerLetterImage: "/EXPERIENCE/NullClass_OL.pdf",
    imageUrl: "/EXPERIENCE/Nullclass.png",
  },
];