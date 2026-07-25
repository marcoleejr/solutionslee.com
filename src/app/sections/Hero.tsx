"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Copy, Check, ArrowRight } from "lucide-react";
import { GitHubLogo, LinkedInLogo } from "@/components/icons";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useLanguage } from "@/lib/language-context";
import { getEmail } from "@/lib/email";
import { useMounted } from "@/lib/use-mounted";

const socialLinks = [
  { icon: GitHubLogo, label: "GitHub", href: "https://github.com/marcoleejr" },
  { icon: LinkedInLogo, label: "LinkedIn", href: "https://linkedin.com/in/marcoleejr" },
];

export function Hero() {
  const { t } = useLanguage();
  const mounted = useMounted();
  const [copied, setCopied] = useState(false);
  // Falls back to the ML monogram until public/profile.jpg exists.
  const [photoOk, setPhotoOk] = useState(true);

  const handleCopyEmail = () => {
    const email = getEmail();
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 w-full">
      {/* Decorative background: dot grid + accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-14 w-screen h-[34rem] -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[52rem] max-w-full h-[30rem] hero-glow" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-5 sm:gap-8 w-full min-w-0"
      >
        {/* Availability badge */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-3 py-1.5 text-xs sm:text-sm text-foreground hover:border-accent transition-colors"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {t.hero.availability}
        </motion.a>

        {/* Avatar + Name & Title */}
        <div className="flex items-center gap-4 sm:gap-6 w-full min-w-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative shrink-0"
          >
            <div aria-hidden className="absolute -inset-1 rounded-full avatar-ring" />
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-surface border-2 border-border flex items-center justify-center overflow-hidden">
              {photoOk ? (
                <Image
                  src="/profile.jpg"
                  alt="Marco Lee"
                  width={112}
                  height={112}
                  priority
                  unoptimized
                  className="object-cover w-full h-full"
                  onError={() => setPhotoOk(false)}
                />
              ) : (
                <span className="text-xl sm:text-3xl md:text-4xl font-bold text-accent">ML</span>
              )}
            </div>
          </motion.div>

          <div className="space-y-1 sm:space-y-1.5 min-w-0">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground break-words"
            >
              {t.hero.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-xl md:text-2xl text-muted font-normal break-words"
            >
              {t.hero.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-sm sm:text-base text-accent font-medium break-words"
            >
              {t.hero.stack}
            </motion.p>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-start gap-1.5 text-xs sm:text-sm text-muted break-words"
        >
          <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>{t.hero.location}</span>
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-muted leading-relaxed w-full max-w-2xl break-words"
        >
          {t.hero.bio}
        </motion.p>

        {/* CTAs + Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 w-full min-w-0"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 min-h-11 px-4 sm:px-5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold shadow-[0_4px_18px_color-mix(in_srgb,var(--accent)_35%,transparent)] transition-all duration-200 hover:-translate-y-0.5 group"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 min-h-11 px-3 py-2.5 sm:px-4 rounded-lg border border-border hover:border-accent hover:bg-surface transition-all duration-200 text-sm text-foreground max-w-full"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500 shrink-0" />
            ) : (
              <Copy className="w-4 h-4 shrink-0" />
            )}
            {/* Address is decoded client-side only, so it never appears in the served HTML */}
            <span className="truncate">
              {copied ? t.hero.copied : mounted ? getEmail() : t.hero.emailLabel}
            </span>
          </button>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border hover:border-accent hover:bg-surface transition-all duration-200 text-foreground"
            >
              <link.icon />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full mt-2 sm:mt-4"
        >
          {t.hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface/60 backdrop-blur px-3 py-3 sm:px-4 sm:py-4"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tabular-nums">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dd className="mt-1 text-[11px] sm:text-xs text-muted leading-snug">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
