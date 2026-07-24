"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Clock } from "lucide-react";
import { LinkedInLogo } from "@/components/icons";
import { useLanguage } from "@/lib/language-context";
import { getEmail } from "@/lib/email";

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = getEmail();
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-10 md:p-12 text-center"
      >
        {/* Accent glow inside the card */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] max-w-full h-64 hero-glow"
        />

        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          {t.contactSection.eyebrow}
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 sm:mb-4 break-words">
          {t.contactSection.title}
        </h3>
        <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
          {t.contactSection.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 min-h-12 px-5 sm:px-6 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm sm:text-base font-semibold shadow-[0_4px_18px_color-mix(in_srgb,var(--accent)_35%,transparent)] transition-all duration-200 hover:-translate-y-0.5 max-w-full"
          >
            {copied ? (
              <Check className="w-4 h-4 shrink-0" />
            ) : (
              <Mail className="w-4 h-4 shrink-0" />
            )}
            <span className="truncate">
              {copied ? t.contactSection.copied : t.contactSection.emailButton}
            </span>
          </button>
          <a
            href="https://linkedin.com/in/marcoleejr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-12 px-5 rounded-lg border border-border hover:border-accent hover:bg-background transition-all duration-200 text-sm text-foreground"
          >
            <LinkedInLogo />
            {t.contactSection.linkedin}
          </a>
        </div>

        <p className="mt-6 inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          {t.contactSection.note}
        </p>
      </motion.div>
    </section>
  );
}
