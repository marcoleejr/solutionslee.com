"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useLanguage } from "@/lib/language-context";
import { useMounted } from "@/lib/use-mounted";

function useIsNarrow() {
  // SSR-safe: default true-ish small values only after mount via matchMedia in parent
  return useMounted();
}

export function GitHubCalendarSection() {
  const { t, lang } = useLanguage();
  const mounted = useIsNarrow();
  const isMobile =
    mounted &&
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 640px)").matches;

  const calendarProps = useMemo(
    () => ({
      username: "marcoleejr" as const,
      colorScheme: "dark" as const,
      blockSize: isMobile ? 8 : 12,
      blockMargin: isMobile ? 2 : 4,
      fontSize: isMobile ? 10 : 12,
      labels: {
        months:
          lang === "es"
            ? ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
            : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        weekdays:
          lang === "es"
            ? ["D", "L", "M", "X", "J", "V", "S"]
            : ["S", "M", "T", "W", "T", "F", "S"],
        totalCount:
          lang === "es" ? "{{count}} contribuciones" : "{{count}} contributions",
        legend: {
          less: lang === "es" ? "Menos" : "Less",
          more: lang === "es" ? "Más" : "More",
        },
      },
    }),
    [isMobile, lang]
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="py-10 sm:py-16"
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-foreground">
        {t.github.title}
      </h3>
      <div className="gh-calendar-wrap rounded-xl border border-border p-3 sm:p-6 bg-surface min-h-[120px] sm:min-h-[160px]">
        {mounted ? (
          <GitHubCalendar {...calendarProps} />
        ) : (
          <div className="h-24 sm:h-28 animate-pulse rounded-md bg-border/40" aria-hidden />
        )}
      </div>
    </motion.section>
  );
}
