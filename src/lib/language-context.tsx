"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { translations, Lang } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  t: typeof translations.en;
  toggle: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const t = translations[lang];

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "es" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("lang", next);
  };

  const toggle = () => setLang(lang === "en" ? "es" : "en");

  return (
    <LanguageContext.Provider value={{ lang, t, toggle, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
