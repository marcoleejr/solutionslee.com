"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";

interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string;
  logo: string | null;
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const monogram = project.name.charAt(0).toUpperCase();

  return (
    <div className="reveal-up group relative rounded-xl border border-border bg-surface p-4 sm:p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-[0_8px_30px_color-mix(in_srgb,var(--accent)_12%,transparent)] flex flex-col">
      <div className="flex items-start gap-3 mb-3 sm:mb-4">
        {project.logo ? (
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-white shrink-0 flex items-center justify-center">
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
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-accent to-amber-500 flex items-center justify-center shrink-0 text-white text-sm sm:text-base font-bold">
            {monogram}
          </div>
        )}
        <h4 className="text-base sm:text-lg font-semibold text-foreground min-w-0 break-words flex-1">
          {project.name}
        </h4>
        <ArrowUpRight
          aria-hidden
          className="w-4 h-4 text-muted shrink-0 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3 sm:mb-4 break-words flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium bg-background border border-border text-muted"
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
            className="relative z-10 inline-flex items-center gap-1 text-xs sm:text-sm text-accent hover:text-accent-hover transition-colors"
          >
            {t.projects.github}
            <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
        {/* Stretched link: whole card opens the live site */}
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-accent hover:text-accent-hover transition-colors after:absolute after:inset-0 after:content-['']"
        >
          {t.projects.demo}
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-12 sm:py-16">
      <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {t.projects.items.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
