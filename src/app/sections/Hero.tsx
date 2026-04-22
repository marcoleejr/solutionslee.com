"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, MessageSquare, AtSign, Mail, Copy, Check } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/language-context";

// SVG logos con colores oficiales
const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  { icon: GitHubLogo, label: "GitHub", href: "https://github.com/marcoleejr", color: "hover:text-white" },
  { icon: LinkedInLogo, label: "LinkedIn", href: "https://linkedin.com/in/marcoleejr", color: "hover:text-[#0A66C2]" },
  { icon: TwitterLogo, label: "Twitter", href: "https://x.com/marcoleejr", color: "hover:text-white" },
];

// Email obfuscado anti-spam
const EMAIL_USER = "bWFyY28=";
const EMAIL_DOMAIN = "c29sdXRpb25zbGVlLmNvbQ==";

function getEmail(): string {
  if (typeof window === "undefined") return "";
  try {
    const user = atob(EMAIL_USER);
    const domain = atob(EMAIL_DOMAIN);
    return `${user}@${domain}`;
  } catch {
    return "";
  }
}

export function Hero() {
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
    <section className="py-16 sm:py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-6 sm:gap-8"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-surface border-2 border-border flex items-center justify-center overflow-hidden"
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">ML</span>
        </motion.div>

        {/* Name & Title */}
        <div className="space-y-1 sm:space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            {t.hero.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-muted font-normal"
          >
            {t.hero.title}
          </motion.h2>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-muted leading-relaxed max-w-2xl"
        >
          {t.hero.bio}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-3 sm:space-y-4 w-full"
        >
          <p className="text-xs sm:text-sm text-muted">{t.hero.contact}</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-lg border border-border hover:border-accent hover:bg-surface transition-all duration-200 text-xs sm:text-sm text-foreground ${link.color}`}
              >
                <link.icon />
                {link.label}
              </a>
            ))}
            {/* Email button with copy */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-lg border border-border hover:border-accent hover:bg-surface transition-all duration-200 text-xs sm:text-sm text-foreground"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copiado" : "marco@solutionslee.com"}
            </button>
          </div>
        </motion.div>

        {/* Toggles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-2 sm:gap-3"
        >
          <ThemeToggle />
          <LanguageToggle />
        </motion.div>
      </motion.div>
    </section>
  );
}
