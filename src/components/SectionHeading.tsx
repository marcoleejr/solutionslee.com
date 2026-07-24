"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
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
