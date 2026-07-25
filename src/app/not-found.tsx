"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-mono text-7xl sm:text-8xl font-bold text-accent">404</p>
      <div className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-foreground">
          {t.notFound.title}
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-md">
          {t.notFound.message}
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 min-h-11 px-5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold shadow-[0_4px_18px_color-mix(in_srgb,var(--accent)_35%,transparent)] transition-all duration-200 hover:-translate-y-0.5"
      >
        <ArrowLeft className="w-4 h-4" />
        {t.notFound.back}
      </Link>
    </main>
  );
}
