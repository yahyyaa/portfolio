"use client";

import { ThemeProvider } from "./ThemeProvider";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Leadership } from "./Leadership";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function Portfolio() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
