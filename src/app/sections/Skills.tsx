"use client";

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
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";

type CategoryKey = "frontend" | "backend" | "mobile" | "ai" | "infra";

const skillGroups: { key: CategoryKey; skills: { name: string; icon: LucideIcon }[] }[] = [
  {
    key: "backend",
    skills: [
      { name: "Laravel", icon: Hexagon },
      { name: "PHP", icon: Code2 },
      { name: "NestJS", icon: Layers },
      { name: "Node.js", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    key: "infra",
    skills: [
      { name: "WordPress (Headless)", icon: Globe },
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Container },
      { name: "Vercel", icon: Cloud },
      { name: "GitHub", icon: GitBranch },
    ],
  },
  {
    key: "frontend",
    skills: [
      { name: "React", icon: Layout },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: FileCode },
      { name: "JavaScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    key: "mobile",
    skills: [
      { name: "React Native", icon: Smartphone },
      { name: "Ionic", icon: Smartphone },
    ],
  },
  {
    key: "ai",
    skills: [
      { name: "AI-Accelerated Engineering", icon: BrainCircuit },
      { name: "Claude · Codex · Gemini CLI", icon: Bot },
    ],
  },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-10 sm:py-16">
      <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />
      <div className="flex flex-col gap-5 sm:gap-6">
        {skillGroups.map((group) => (
          <div key={group.key} className="reveal-up">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted mb-2.5 sm:mb-3">
              {t.skills.categories[group.key]}
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-border bg-surface hover:border-accent hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm font-medium text-foreground"
                >
                  <skill.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
