"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, Folder } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-border bg-surface p-6 hover:border-accent transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center shrink-0">
          <Folder className="w-4 h-4 text-accent" />
        </div>
        <h4 className="text-lg font-semibold text-foreground">{project.name}</h4>
      </div>

      <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-md text-xs font-medium bg-surface border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            {t.projects.github}
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
        >
          {t.projects.demo}
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}

export function Projects() {
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
        {t.projects.title}
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.projects.items.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
