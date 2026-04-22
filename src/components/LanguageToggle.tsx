"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="px-3 py-2 rounded-lg border border-border hover:border-accent transition-colors duration-200 text-sm font-medium text-foreground"
      aria-label="Toggle language"
    >
      {lang === "es" ? "ES" : "EN"}
    </button>
  );
}
