"use client";

import { Target, Users, BrainCircuit, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";

const icons: LucideIcon[] = [Target, Users, BrainCircuit];

export function WhyHireMe() {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-16">
      <SectionHeading title={t.hire.title} subtitle={t.hire.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {t.hire.items.map((item, index) => {
          const Icon = icons[index] ?? Target;
          return (
            <div
              key={item.title}
              className="reveal-up rounded-xl border border-border bg-surface p-5 sm:p-6 hover:border-accent transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-amber-500 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 break-words">
                {item.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed break-words">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
