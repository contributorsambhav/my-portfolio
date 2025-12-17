// data/projects.ts
import { Project } from "@/types";

export const featuredProjects: Project[] = [
  {
    id: "proj-1",
    title: "OnBoard - Cryptocurrency Payment Enhancement Platform",
    tagline: "Winner of Payman AI Dev Challenge - 100 USDC Prize",
    description:
      "Cryptocurrency payment enhancement platform comparing transaction fees across 5+ payment methods with automated crypto transactions.",
    longDescription:
      "Architected software system that compares transaction fees across multiple payment methods and integrates Payman Wallet API for automated crypto transactions, reducing fees by 60% for transfers over 100 USDC. Won 100 USDC prize in Payman AI Dev Challenge.",
    technologies: [
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Solidity",
      "MongoDB",
      "Google OAuth",
      "BetterAuth",
      "Cloudflare",
    ],
    category: "fullstack",
    featured: true,
    github: "https://github.com/contributorsambhav/onboard",
    live: "https://onboard-iota-seven.vercel.app/",
    image: "/projects/onboard.png",
    highlights: [
      "Fee comparison across 5+ payment methods",
      "60% fee reduction for crypto transactions",
      "Automated Payman Wallet API integration",
      "Won 100 USDC in Dev Challenge",
    ],
    metrics: [
      { label: "Fee Reduction", value: "60%" },
      { label: "Prize Won", value: "100 USDC" },
      { label: "Payment Methods", value: "5+" },
    ],
  },
  {
    id: "proj-2",
    title: "Hiraya - AI-Powered Campus Assistant",
    tagline: "Smart campus companion with RAG architecture",
    description:
      "AI assistant with 80% response accuracy using NLP techniques, reducing information retrieval time by 90% for 100+ active users.",
    longDescription:
      "Engineered AI assistant using advanced programming languages and NLP techniques with Retrieval-Augmented Generation ensuring context-aware responses. Features enhanced database queries and caching for optimal performance.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "SQL",
      "Prisma ORM",
      "TailwindCSS",
      "RAG Architecture",
      "NLP",
    ],
    category: "ai",
    featured: true,
    github: "https://github.com/nextgenquanta/rag-test",
    live: "https://hiraya-companion.vercel.app/",
    image: "/projects/hiraya.png",
    highlights: [
      "80% response accuracy with NLP",
      "90% faster information retrieval",
      "RAG architecture implementation",
      "100% context-aware responses",
    ],
    metrics: [
      { label: "Accuracy", value: "80%" },
      { label: "Speed Increase", value: "90%" },
      { label: "Active Users", value: "100+" },
    ],
  },
  {
    id: "proj-3",
    title: "Chess Master - Real-Time Multiplayer Chess Platform",
    tagline: "Play chess with AI and friends in real-time",
    description:
      "Real-time chess platform achieving sub-100ms latency with integrated Stockfish AI engine (2800 ELO rating) and secure JWT authentication.",
    longDescription:
      "Constructed real-time chess platform using WebSockets and advanced software systems. Features Stockfish AI engine integration, secure authentication with JWT and bcrypt, ensuring complete data protection and user privacy.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "WebSockets",
      "Redux",
      "JWT",
      "Stockfish Engine",
    ],
    category: "fullstack",
    featured: true,
    github: "https://github.com/contributorsambhav/ReactChess",
    live: "https://reactchess.onrender.com/",
    image: "/projects/chess-master.png",
    highlights: [
      "Sub-100ms latency with WebSockets",
      "Stockfish AI (2800 ELO rating)",
      "Secure JWT authentication",
      "Real-time multiplayer gameplay",
    ],
    metrics: [
      { label: "Latency", value: "<100ms" },
      { label: "AI Rating", value: "2800 ELO" },
      { label: "Security", value: "100%" },
    ],
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: "proj-4",
    title: "ERP Dashboard - Atlantis Newtech",
    tagline: "Comprehensive enterprise resource planning system",
    description:
      "Full-featured ERP system with invoicing, GRN, purchase orders, and sales modules serving 500+ concurrent users.",
    longDescription:
      "Developed comprehensive ERP software system as part of internship at Atlantis Newtech. Features include complete invoicing system, goods received notes, purchase order management, and sales tracking.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Node.js",
    ],
    category: "fullstack",
    featured: false,
    live: "https://9d771190.erp-dashboard-7il.pages.dev/login",
    image: "/projects/erp.jpg",
    highlights: [
      "40% operational efficiency improvement",
      "35% processing time reduction",
      "500+ concurrent users support",
      "Complete invoicing and sales modules",
    ],
  },
  {
    id: "proj-5",
    title: "Flight Management System",
    tagline: "Streamlined flight booking and management",
    description:
      "Flight management system with enhanced booking efficiency built using Next.js and modern web technologies.",
    longDescription:
      "Architected flight management system during internship, collaborating with cross-functional teams to deliver a comprehensive booking solution with 45% efficiency improvement.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
    category: "fullstack",
    featured: false,
    live: "https://27cfcdc9.tjk-admin-dashboard.pages.dev/dashboard",
    image: "/projects/flight.jpg",
    highlights: [
      "45% booking efficiency increase",
      "Cross-functional team collaboration",
      "Modern responsive design",
      "Real-time booking updates",
    ],
  },
  {
    id: "proj-6",
    title: "Real Life Among Us - Event Platform",
    tagline: "Interactive event management for 1200+ participants",
    description:
      "Event management platform with real-time communication features and interactive coding games.",
    longDescription:
      "Built for Google Developer Student Clubs at NIT Hamirpur. Features include real-time polling system with WebSocket, interactive coding challenges (Spacewars and Codeblocks), and event management for large-scale campus events.",
    technologies: [
      "React",
      "Next.js",
      "WebSockets",
      "Node.js",
      "MongoDB",
    ],
    category: "fullstack",
    featured: false,
    github: "https://github.com/contributorsambhav",
    live: "https://real-life-among-us-dsc.vercel.app/",
    image: "/projects/among-us.jpg",
    highlights: [
      "1200+ participants served",
      "99.9% uptime during events",
      "70% engagement increase",
      "15+ programming challenges",
    ],
  },
];