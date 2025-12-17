// app/page.tsx
import { ArrowRight, Award, Briefcase, Rocket } from "lucide-react";

import { Button } from "../components/ui/button";
import ExperienceCard from "../components/shared/ExperienceCard";
import Hero from "../components/sections/Hero";
import Link from "next/link";
import PORCard from "../components/shared/PORCard";
import ProjectCard from "../components/shared/ProjectCard";
import { Separator } from "../components/ui/separator";
import TechStack from "../components/sections/TechStack";
import { experiences } from "../data/experience";
import { featuredProjects } from "../data/projects";
import { positionsOfResponsibility } from "../data/POR";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Tech Stack Marquee */}
      <TechStack />

      {/* Featured Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Showcasing my best work and achievements
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Experience Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
                <Briefcase className="w-8 h-8" />
                Work Experience
              </h2>
              <p className="text-muted-foreground">
                Professional journey and achievements
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/work" className="flex items-center gap-2">
                More Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.slice(0, 2).map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Positions of Responsibility Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <Award className="w-8 h-8" />
            Positions of Responsibility
          </h2>
          <p className="text-muted-foreground">
            Leadership roles and community contributions
          </p>
        </div>
        <Button asChild variant="outline" size="lg">
          <Link href="/por" className="flex items-center gap-2">
            View All Positions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
          </div>

          <div className="space-y-6">
        {positionsOfResponsibility.map((por, index) => (
          <PORCard key={por.id} por={por} index={index} />
        ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Quick Links Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Explore More
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/hackathons" className="group">
              <div className="p-8 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 bg-linear-to-br from-yellow-500/10 to-orange-500/10">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Hackathons
                </h3>
                <p className="text-muted-foreground">
                  Competition wins and project showcases
                </p>
              </div>
            </Link>

            <Link href="/web3" className="group">
              <div className="p-8 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 bg-linear-to-br from-purple-500/10 to-pink-500/10">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">⛓️</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Web3 & Grants
                </h3>
                <p className="text-muted-foreground">
                  Blockchain projects and grant applications
                </p>
              </div>
            </Link>

            <Link href="/projects" className="group">
              <div className="p-8 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 bg-linear-to-br from-blue-500/10 to-cyan-500/10">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  All Projects
                </h3>
                <p className="text-muted-foreground">
                  Complete portfolio of work
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}