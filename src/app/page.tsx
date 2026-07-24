"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "./sections/Hero";
import { GitHubCalendarSection } from "./sections/GitHubCalendar";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { AsciiIntro } from "@/components/AsciiIntro";

export default function Home() {
  return (
    <>
      <AsciiIntro />
      <Navbar />
      <main
        id="top"
        className="w-full max-w-3xl mx-auto px-4 sm:px-6 min-w-0 box-border"
      >
        <Hero />
        <GitHubCalendarSection />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
