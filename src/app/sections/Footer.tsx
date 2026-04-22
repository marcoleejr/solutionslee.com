"use client";

import { motion } from "framer-motion";
import { Globe, MessageSquare, AtSign, Mail } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const socialLinks = [
  { icon: Globe, label: "GitHub", href: "https://github.com/marcoleejr" },
  { icon: MessageSquare, label: "LinkedIn", href: "https://linkedin.com/in/marcoleejr" },
  { icon: AtSign, label: "Twitter", href: "https://x.com/marcoleejr" },
  { icon: Mail, label: "Email", href: "mailto:mv.lee18@gmail.com" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 border-t border-border"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-accent hover:bg-surface transition-all duration-200"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4 text-muted hover:text-foreground transition-colors" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted">{t.footer.builtWith}</p>
        <p className="text-sm text-muted">{t.footer.copyright}</p>
      </div>
    </motion.footer>
  );
}
