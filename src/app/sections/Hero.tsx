"use client";

import { motion } from "framer-motion";
import { Globe, MessageSquare, AtSign, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/language-context";

const socialLinks = [
  { icon: Globe, label: "GitHub", href: "https://github.com/marcoleejr" },
  { icon: MessageSquare, label: "LinkedIn", href: "https://linkedin.com/in/marcoleejr" },
  { icon: AtSign, label: "Twitter", href: "https://x.com/marcoleejr" },
  { icon: Mail, label: "Email", href: "mailto:mv.lee18@gmail.com" },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-8"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-28 h-28 rounded-full bg-surface border-2 border-border flex items-center justify-center overflow-hidden"
        >
          <span className="text-4xl font-bold text-accent">ML</span>
        </motion.div>

        {/* Name & Title */}
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            {t.hero.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted font-normal"
          >
            {t.hero.title}
          </motion.h2>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base md:text-lg text-muted leading-relaxed max-w-2xl"
        >
          {t.hero.bio}
        </motion.p>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-4"
        >
          <p className="text-sm text-muted">{t.hero.contact}</p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent hover:bg-surface transition-all duration-200 text-sm text-foreground"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Toggles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-3"
        >
          <ThemeToggle />
          <LanguageToggle />
        </motion.div>
      </motion.div>
    </section>
  );
}
