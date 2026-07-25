"use client";

import { TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";

export function CaseStudy() {
  const { t } = useLanguage();

  return (
    <section id="case-study" className="py-10 sm:py-16">
      <SectionHeading title={t.caseStudy.title} subtitle={t.caseStudy.subtitle} />
      <div className="reveal-up relative overflow-hidden rounded-2xl border border-border bg-surface p-5 sm:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-0 w-96 max-w-full h-56 hero-glow"
        />
        <div className="flex items-start gap-3 mb-5 sm:mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-amber-500 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg sm:text-2xl font-bold text-foreground leading-snug break-words">
            {t.caseStudy.heading}
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {t.caseStudy.blocks.map((block, index) => (
            <div key={block.label} className="relative md:pl-0">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                <span className="font-mono text-muted">0{index + 1}</span>
                {block.label}
              </p>
              <p className="text-sm text-muted leading-relaxed break-words">{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
