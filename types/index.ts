// types/index.ts

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  social: SocialLink[];
}

export interface Technology {
  name: string;
  category: "language" | "framework" | "tool" | "database" | "other";
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "web" | "web3" | "ai" | "fullstack" | "blockchain";
  featured: boolean;
  github?: string;
  live?: string;
  video?: string;
  image?: string;
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  date: string;
  location: string;
  achievement: string;
  position?: string;
  prize?: string;
  project: string;
  description: string;
  technologies: string[];
  demo?: string;
  github?: string;
  video?: string;
  teamSize?: number;
  role?: string;
}

export interface Web3Project {
  id: string;
  title: string;
  type: "grant" | "project" | "attempt";
  status: "completed" | "in-progress" | "applied" | "rejected";
  description: string;
  technologies: string[];
  blockchain?: string;
  grant?: {
    name: string;
    amount?: string;
    round?: string;
  };
  github?: string;
  live?: string;
  date: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "hackathon" | "competition" | "certification" | "award";
  organization?: string;
  proof?: string;
  icon?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  duration: string;
  gpa: string;
  coursework: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
