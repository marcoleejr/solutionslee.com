"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "./sections/Hero";
import { GitHubCalendarSection } from "./sections/GitHubCalendar";
import { Experience } from "./sections/Experience";
import { CaseStudy } from "./sections/CaseStudy";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { WhyHireMe } from "./sections/WhyHireMe";
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
        <CaseStudy />
        <Projects />
        <Skills />
        <WhyHireMe />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
