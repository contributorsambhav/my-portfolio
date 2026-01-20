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
      "Worked in a team of 8 developers using agile development to deliver comprehensive ERP software system",
      "Implemented object-relational mapping frameworks for database enhancement",
      "Collaborated with 3 cross-functional teams to architect flight management system using Next.js",
    ],
    achievements: [
      "Delivered ERP software with invoicing, GRN, purchase orders, and sales modules, improving operational efficiency by 40% and reducing processing time by 35%",
      "Achieved 50% faster query execution and improved system scalability for 500+ concurrent users",
      "Enhanced booking efficiency by 45% through effective troubleshooting and debugging",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
    ],
    companyUrl: "https://drive.google.com/file/d/1Aq77kbPADmaZEYGNqrrjzhbYdacTg5xC/view?usp=sharing",
    imageUrl: "/images/companies/atlantis.png",
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
      "Created full-stack video platform supporting 50MB+ file processing with automated transformation pipeline",
      "Integrated Two-Factor Authentication using Google Authenticator",
      "Developed secure user authentication and authorization systems",
    ],
    achievements: [
      "Reduced upload time by 65% through efficient coding and system architecture",
      "Improved security compliance by 100% demonstrating proficiency in IT security protocols",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Authenticator",
      "Video Processing",
      "2FA",
    ],
    imageUrl: "/images/companies/nullclass.png",
  },
];