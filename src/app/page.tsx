import { Hero } from "./sections/Hero";
import { GitHubCalendarSection } from "./sections/GitHubCalendar";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6">
      <Hero />
      <GitHubCalendarSection />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
