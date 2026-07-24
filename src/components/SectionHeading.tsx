"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-6 sm:mb-8"
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-foreground flex items-center gap-3">
        <span aria-hidden className="inline-block w-6 h-px bg-accent" />
        {title}
      </h3>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-muted pl-9">{subtitle}</p>
      )}
    </motion.div>
  );
}
