"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { GitHubLogo, LinkedInLogo } from "@/components/icons";
import { useLanguage } from "@/lib/language-context";
import { getEmail } from "@/lib/email";
import { revealViewport } from "@/lib/motion";

const socialLinks = [
  { icon: GitHubLogo, label: "GitHub", href: "https://github.com/marcoleejr" },
  { icon: LinkedInLogo, label: "LinkedIn", href: "https://linkedin.com/in/marcoleejr" },
];

export function Footer() {
  const { t } = useLanguage();

  const handleEmail = () => {
    const email = getEmail();
    if (email) window.location.href = `mailto:${email}`;
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={revealViewport}
      transition={{ duration: 0.4 }}
      className="py-12 sm:py-16 border-t border-border"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-accent hover:bg-surface transition-all duration-200 text-muted hover:text-foreground"
              aria-label={link.label}
            >
              <link.icon />
            </a>
          ))}
          <button
            onClick={handleEmail}
            className="p-2.5 rounded-lg border border-border hover:border-accent hover:bg-surface transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 text-muted" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-sm text-muted">{t.footer.builtWith}</p>
          <p className="text-sm text-muted">{t.footer.copyright}</p>
        </div>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          {t.footer.backToTop}
        </a>
      </div>
    </motion.footer>
  );
}
