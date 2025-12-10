// data/achievements.ts
import { Achievement } from '@/types';

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Payman AI Developer Challenge Winner",
    description: "Won 100 USDC prize for building OnBoard, a cryptocurrency payment enhancement platform that reduces transaction fees by 60%.",
    date: "2025-01",
    category: "competition",
    organization: "Payman AI",
    proof: "https://x.com/PaymanAI/status/1908544925764890739",
    icon: "🏆"
  },
  {
    id: "ach-2",
    title: "Smart India Hackathon 2024 - Team Lead",
    description: "Led team to develop AI frame interpolator achieving 36.38 PSNR on Xiph-2K dataset. Demonstrated exceptional leadership in national-level competition.",
    date: "2024-12",
    category: "hackathon",
    organization: "Government of India",
    icon: "🎯"
  },
  {
    id: "ach-3",
    title: "CGPA: 8.99/10.00",
    description: "Maintaining excellent academic performance while actively participating in hackathons, internships, and building projects.",
    date: "2024-present",
    category: "award",
    organization: "NIT Hamirpur",
    icon: "🎓"
  },
  {
    id: "ach-4",
    title: "MLH Local Hack Day - Best Project",
    description: "Won first place for building a real-time collaborative code editor with live syntax highlighting and WebSocket synchronization.",
    date: "2024-10",
    category: "hackathon",
    organization: "Major League Hacking",
    icon: "💻"
  }
];