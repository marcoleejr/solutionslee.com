"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/language-context";

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-md border-b border-border shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.span
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute top-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-accent to-amber-400"
      />
      <nav className="w-full max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
        <a
          href="#top"
          className="flex items-center gap-2.5 min-w-0 group"
          aria-label="Marco Lee — top"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-amber-500 text-white text-xs font-bold flex items-center justify-center shadow-[0_2px_10px_color-mix(in_srgb,var(--accent)_40%,transparent)] group-hover:scale-105 transition-transform">
            ML
          </span>
          <span className="hidden sm:block text-sm font-semibold text-foreground truncate">
            Marco Lee
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-surface transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
