// components/sections/PORSection.tsx
"use client";

import { Award } from "lucide-react";
import PORCard from "@/components/shared/PORCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import { PositionOfResponsibility } from "@/types";

export default function PORSection({ positions }: { positions: PositionOfResponsibility[] }) {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(168,85,247,0.06),transparent)]" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          badge="Leadership"
          badgeIcon={<Award className="w-4 h-4" />}
          title="Positions of"
          highlight="Responsibility"
          description="Leadership roles and community contributions demonstrating initiative and impact."
          link="/por"
          linkText="View All Positions"
        />

        <div className="space-y-5">
          {positions.map((por, index) => (
            <motion.div
              key={por.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PORCard por={por} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
