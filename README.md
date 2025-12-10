# Sambhav's Portfolio - Complete Setup Guide

A modern, responsive portfolio built with Next.js 15, TailwindCSS, shadcn/ui, and Turbopack.

## 🚀 Quick Start

### 1. Installation

```bash
# Create Next.js project with Turbopack
npx create-next-app@latest portfolio --typescript --tailwind --app --turbopack

cd portfolio

# Install shadcn/ui dependencies
npm install class-variance-authority clsx tailwind-merge lucide-react

# Initialize shadcn/ui
npx shadcn@latest init

# Add required shadcn/ui components
npx shadcn@latest add button card badge separator tabs avatar hover-card tooltip dialog

# Install additional dependencies
npm install framer-motion
```

### 2. Create Folder Structure

```bash
mkdir -p components/{ui,layout,sections,shared}
mkdir -p data lib types
mkdir -p public/{images/projects,images/hackathons,videos}
mkdir -p app/{work,projects,hackathons,web3}
```

### 3. Copy All Files

Copy all the files I've provided into their respective locations:

**Types & Data:**
- `types/index.ts` - TypeScript interfaces
- `data/profile.ts` - Your personal information
- `data/experience.ts` - Work experience array
- `data/projects.ts` - Projects array
- `data/hackathons.ts` - Hackathons array
- `data/web3.ts` - Web3 projects and grants

**Components:**
- `components/layout/Header.tsx` - Navigation header
- `components/layout/Footer.tsx` - Footer
- `components/sections/Hero.tsx` - Hero section
- `components/sections/TechStack.tsx` - Tech marquee
- `components/shared/ProjectCard.tsx` - Project card component
- `components/shared/ExperienceCard.tsx` - Experience card component
- `components/shared/HackathonCard.tsx` - Hackathon card component
- `components/shared/VideoModal.tsx` - Video modal component

**Pages:**
- `app/layout.tsx` - Root layout
- `app/page.tsx` - Home page
- `app/work/page.tsx` - Work experience page
- `app/projects/page.tsx` - All projects page
- `app/hackathons/page.tsx` - Hackathons page
- `app/web3/page.tsx` - Web3 & grants page

### 4. Add Your Content

**Profile Image:**
- Add your photo to `public/images/avatar.jpg`

**Project Images & Videos:**
- Add project screenshots to `public/images/projects/`
- Add project demo videos to `public/videos/`

**Update Data Files:**
All your data is centralized in the `data/` folder. Simply edit these files to:
- Update personal info
- Add new projects
- Add new experiences
- Add hackathons
- Track Web3 grants

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Home page
│   ├── work/page.tsx        # Work experience
│   ├── projects/page.tsx    # All projects
│   ├── hackathons/page.tsx  # Hackathons
│   └── web3/page.tsx        # Web3 & grants
├── components/
│   ├── layout/              # Header & Footer
│   ├── sections/            # Page sections
│   ├── shared/              # Reusable components
│   └── ui/                  # shadcn/ui components
├── data/                    # All content data
│   ├── profile.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── hackathons.ts
│   └── web3.ts
├── types/                   # TypeScript definitions
│   └── index.ts
├── lib/                     # Utilities
│   └── utils.ts
└── public/                  # Static assets
    ├── images/
    └── videos/
```

## ✨ Features

### Home Page (/)
- Hero section with animated intro
- Infinite scrolling tech stack marquee
- Featured projects showcase
- Work experience preview
- Quick navigation cards

### Work Page (/work)
- Timeline view of all experiences
- Detailed job descriptions
- Key achievements highlighted
- Technologies used per role

### Projects Page (/projects)
- Category filters (All, Web3, AI, Fullstack, Web)
- Project cards with metrics
- GitHub and live links
- Video demo modals

### Hackathons Page (/hackathons)
- All hackathon participations
- Win badges and achievements
- Team size and role info
- Project demos and code

### Web3 Page (/web3)
- Web3 projects showcase
- Grant applications tracker
- Status filters (completed, applied, in-progress)
- Blockchain-specific tags

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.ts` to customize colors and theme.

### Add New Content

**Add a New Project:**
```typescript
// data/projects.ts
{
  id: "proj-new",
  title: "New Project",
  tagline: "Short description",
  description: "Longer description",
  longDescription: "Full details...",
  technologies: ["React", "Node.js"],
  category: "fullstack",
  featured: true,
  github: "https://github.com/...",
  live: "https://...",
  video: "/videos/demo.mp4",
  highlights: [
    "Key achievement 1",
    "Key achievement 2"
  ],
  metrics: [
    { label: "Users", value: "1000+" }
  ]
}
```

**Add a New Experience:**
```typescript
// data/experience.ts
{
  id: "exp-new",
  company: "Company Name",
  role: "Your Role",
  location: "Location",
  duration: "Jan 2025 - Present",
  startDate: "2025-01",
  endDate: "Present",
  current: true,
  description: [
    "What you did...",
    "Another responsibility..."
  ],
  achievements: [
    "Key achievement 1",
    "Key achievement 2"
  ],
  technologies: ["Tech1", "Tech2"],
  companyUrl: "https://company.com"
}
```

**Add a New Hackathon:**
```typescript
// data/hackathons.ts
{
  id: "hack-new",
  name: "Hackathon Name",
  organizer: "Organizer",
  date: "2025-01",
  location: "Online/City",
  achievement: "Winner",
  position: "1st Place",
  prize: "Prize amount",
  project: "Project Name",
  description: "What you built...",
  technologies: ["Tech1", "Tech2"],
  demo: "https://demo.com",
  github: "https://github.com/...",
  video: "/videos/demo.mp4",
  teamSize: 3,
  role: "Full Stack Developer"
}
```

**Add a Web3 Grant Application:**
```typescript
// data/web3.ts
{
  id: "web3-new",
  title: "Grant Application Title",
  type: "grant",
  status: "applied",
  description: "What you're building...",
  technologies: ["Solidity", "Ethereum"],
  blockchain: "Ethereum",
  grant: {
    name: "Grant Program Name",
    round: "Round 1",
    amount: "10,000 USD"
  },
  github: "https://github.com/...",
  date: "2025-01"
}
```

## 🎥 Adding Videos

1. Add your video files to `public/videos/`
2. Reference them in your data files: `video: "/videos/your-video.mp4"`
3. The VideoModal component will handle playback

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1280px)
- Tablet (768px)
- Mobile (375px)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Environment Variables

No environment variables needed for basic setup. Add later if you integrate:
- Analytics (Google Analytics, Plausible)
- Contact forms
- CMS integration

## 📊 Performance

- Next.js 15 with Turbopack for fast builds
- Image optimization with next/image
- Code splitting by route
- Lazy loading for components
- Framer Motion for smooth animations

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router + Turbopack)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** Vercel

## 📝 To-Do After Setup

- [ ] Add your profile photo to `public/images/avatar.jpg`
- [ ] Update `data/profile.ts` with your info
- [ ] Add project screenshots and videos
- [ ] Update social media links
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Test all links
- [ ] Deploy to Vercel
- [ ] Set up custom domain (optional)
- [ ] Add Google Analytics (optional)

## 🤝 Support

If you encounter any issues:
1. Check the folder structure matches exactly
2. Ensure all dependencies are installed
3. Clear `.next` folder and restart: `rm -rf .next && npm run dev`
4. Check browser console for errors

## 📄 License

MIT License - Feel free to use this template for your portfolio!

---

Built with ❤️ using Next.js, TailwindCSS, and shadcn/ui