"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useLanguage } from "@/lib/language-context";
import { useMounted } from "@/lib/use-mounted";

export function GitHubCalendarSection() {
  const { t, lang } = useLanguage();
  const mounted = useMounted();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <h3 className="text-2xl font-semibold mb-8 text-foreground">
        {t.github.title}
      </h3>
      <div className="rounded-xl border border-border p-6 bg-surface overflow-x-auto min-h-[160px]">
        {mounted ? (
          <GitHubCalendar
            username="marcoleejr"
            colorScheme="dark"
            labels={{
              months:
                lang === "es"
                  ? ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
                  : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              weekdays:
                lang === "es"
                  ? ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
                  : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              totalCount:
                lang === "es" ? "{{count}} contribuciones" : "{{count}} contributions",
              legend: {
                less: lang === "es" ? "Menos" : "Less",
                more: lang === "es" ? "Más" : "More",
              },
            }}
          />
        ) : (
          <div className="h-28 animate-pulse rounded-md bg-border/40" aria-hidden />
        )}
      </div>
    </motion.section>
  );
}
