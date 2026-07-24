"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
}

function ExperienceCard({ job, index }: { job: Job; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl border border-border bg-surface p-4 sm:p-6 hover:border-accent transition-colors duration-300"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-surface border border-border flex items-center justify-center shrink-0">
          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1 sm:gap-2">
            <h4 className="text-base sm:text-lg font-semibold text-foreground leading-snug break-words">
              {job.title}
            </h4>
            <p className="text-sm text-muted break-words">{job.company}</p>
            <span className="text-xs sm:text-sm text-muted">{job.period}</span>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 sm:mt-4 inline-flex items-center gap-1 min-h-11 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            {expanded ? t.experience.viewLess : t.experience.viewMore}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-3 sm:mt-4 text-sm text-muted leading-relaxed break-words">
                  {job.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
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
        {t.experience.title}
      </motion.h3>
      <div className="flex flex-col gap-3 sm:gap-4">
        {t.experience.jobs.map((job, index) => (
          <ExperienceCard
            key={`${job.company}-${job.period}-${job.title}`}
            job={job}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
