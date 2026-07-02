"use client";

import { useState } from "react";
import { Preloader } from "./effects/Preloader";
import { CustomCursor } from "./effects/CustomCursor";
import { SmoothScrollProvider } from "./effects/SmoothScrollProvider";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Persona } from "./Persona";
import { TechnicalArsenal } from "./TechnicalArsenal";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Credentials } from "./Credentials";
import { Leadership } from "./Leadership";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function Portfolio() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setReady(true)} />
      {ready && (
        <SmoothScrollProvider>
            <CustomCursor />
            <Navbar />
            <main id="main-content">
              <Hero />
              <Persona />
              <TechnicalArsenal />
              <Experience />
              <Projects />
              <Credentials />
              <Leadership />
              <Education />
              <Contact />
            </main>
            <Footer />
        </SmoothScrollProvider>
      )}
    </>
  );
}
