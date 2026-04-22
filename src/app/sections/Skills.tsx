"use client";

import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Globe,
  Database,
  Server,
  Layout,
  GitBranch,
  Cloud,
  CreditCard,
  Container,
  Layers,
  Palette,
  Cpu,
  Boxes,
  Hexagon,
  CircleDollarSign,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const skills = [
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: FileCode },
  { name: "React", icon: Layout },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Server },
  { name: "Nest.js", icon: Layers },
  { name: "Laravel", icon: Hexagon },
  { name: "PHP", icon: Code2 },
  { name: "WordPress", icon: Globe },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Turso", icon: Database },
  { name: "Docker", icon: Container },
  { name: "GitHub", icon: GitBranch },
  { name: "Vercel", icon: Cloud },
  { name: "Tailwind CSS", icon: Palette },
  { name: "shadcn/ui", icon: Boxes },
  { name: "Lemon Squeezy", icon: CreditCard },
  { name: "AdSense", icon: CircleDollarSign },
  { name: "Astro", icon: Cpu },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-8 text-foreground"
      >
        {t.skills.title}
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface hover:border-accent transition-colors duration-200"
          >
            <skill.icon className="w-4 h-4 text-accent shrink-0" />
            <span className="text-sm font-medium text-foreground truncate">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
