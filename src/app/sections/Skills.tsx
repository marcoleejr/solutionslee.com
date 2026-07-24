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
  Container,
  Layers,
  Palette,
  Hexagon,
  Smartphone,
  BrainCircuit,
  Bot,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const skills = [
  { name: "Laravel", icon: Hexagon },
  { name: "PHP", icon: Code2 },
  { name: "React", icon: Layout },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: FileCode },
  { name: "JavaScript", icon: Code2 },
  { name: "React Native", icon: Smartphone },
  { name: "Ionic", icon: Smartphone },
  { name: "WordPress (Headless)", icon: Globe },
  { name: "NestJS", icon: Layers },
  { name: "Node.js", icon: Server },
  { name: "AWS", icon: Cloud },
  { name: "AI Agents / RAG", icon: BrainCircuit },
  { name: "LLM Tooling", icon: Bot },
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "Docker", icon: Container },
  { name: "Tailwind CSS", icon: Palette },
  { name: "GitHub", icon: GitBranch },
  { name: "Vercel", icon: Cloud },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-foreground"
      >
        {t.skills.title}
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg border border-border bg-surface hover:border-accent transition-colors duration-200 min-w-0"
          >
            <skill.icon className="w-4 h-4 text-accent shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-foreground leading-snug break-words">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
