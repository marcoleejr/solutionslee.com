"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string;
  logo: string | null;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-border bg-surface p-4 sm:p-6 hover:border-accent transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-3 mb-3 sm:mb-4">
        {project.logo ? (
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-white shrink-0 flex items-center justify-center">
            <Image
              src={project.logo}
              alt={project.name}
              width={40}
              height={40}
              className="object-contain w-full h-full"
              unoptimized
            />
          </div>
        ) : (
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-surface border border-border flex items-center justify-center shrink-0">
            <Folder className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
          </div>
        )}
        <h4 className="text-base sm:text-lg font-semibold text-foreground min-w-0 break-words">{project.name}</h4>
      </div>

      <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3 sm:mb-4 break-words">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium bg-surface border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs sm:text-sm text-accent hover:text-accent-hover transition-colors"
          >
            {t.projects.github}
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-accent hover:text-accent-hover transition-colors"
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
    <section className="py-12 sm:py-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-foreground"
      >
        {t.projects.title}
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {t.projects.items.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
