"use client";

import { motion } from "framer-motion";
import { Briefcase, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { revealViewport } from "@/lib/motion";

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

function TimelineItem({ job, index, isLast }: { job: Job; index: number; isLast: boolean }) {
  const isFounder = job.company.toLowerCase().includes("independ");
  const Icon = isFounder ? Rocket : Briefcase;

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.1) }}
      className="relative flex gap-4 sm:gap-5"
    >
      {/* Timeline rail */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-surface border border-border flex items-center justify-center shadow-sm z-10">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
        </div>
        {!isLast && (
          <div aria-hidden className="w-px flex-1 bg-gradient-to-b from-border via-border to-transparent mt-1" />
        )}
      </div>

      <div className={`flex-1 min-w-0 ${isLast ? "" : "pb-8 sm:pb-10"}`}>
        <div className="rounded-xl border border-border bg-surface p-4 sm:p-6 hover:border-accent transition-colors duration-300">
          <div className="flex flex-col gap-1">
            <span className="text-xs sm:text-sm font-medium text-accent tabular-nums">
              {job.period}
            </span>
            <h4 className="text-base sm:text-lg font-semibold text-foreground leading-snug break-words">
              {job.title}
            </h4>
            <p className="text-sm text-muted break-words">{job.company}</p>
          </div>

          <p className="mt-3 text-sm text-muted leading-relaxed break-words">
            {job.description}
          </p>

          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium bg-background border border-border text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-10 sm:py-16">
      <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} />
      <ol className="flex flex-col">
        {t.experience.jobs.map((job, index) => (
          <TimelineItem
            key={`${job.company}-${job.period}-${job.title}`}
            job={job}
            index={index}
            isLast={index === t.experience.jobs.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}
