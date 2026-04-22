"use client";

import { useState } from "react";
import { Hero } from "./sections/Hero";
import { GitHubCalendarSection } from "./sections/GitHubCalendar";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Footer } from "./sections/Footer";
import { AsciiIntro } from "@/components/AsciiIntro";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <AsciiIntro onComplete={() => setIntroComplete(true)} />
      <main className="max-w-3xl mx-auto px-4 sm:px-6">
        <Hero />
        <GitHubCalendarSection />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
