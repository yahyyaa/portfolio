"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/data/portfolio";
import { TypingEffect } from "./effects/TypingEffect";

const HeroParticles = dynamic(
  () => import("./effects/HeroParticles").then((m) => m.HeroParticles),
  { ssr: false }
);

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0505] via-[#120808] to-[#0a0505]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      {activated && <HeroParticles mouse={mouse} />}

      {!activated && (
        <button
          onClick={() => setActivated(true)}
          data-cursor
          data-cursor-label="GO"
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-pulse text-xs tracking-[0.3em] text-muted transition-colors hover:text-maroon-light"
        >
          ○ CLICK TO ACTIVATE
        </button>
      )}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-28 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-display text-sm tracking-[0.2em] text-maroon-light">
            PORTFOLIO · 2026
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, Welcome to{" "}
            <span className="text-gradient">{siteConfig.name}&apos;s</span>
            <br />
            Portfolio
          </h1>
          <p className="mt-4 min-h-[2rem] font-display text-xl text-muted sm:text-2xl">
            <TypingEffect text={siteConfig.title} speed={55} />
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted/90">
            {siteConfig.hook}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={siteConfig.cvPath}
              data-cursor
              data-cursor-label="CV"
              className="group inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3.5 text-sm font-semibold text-white transition-all hover:glow-maroon"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              data-cursor
              data-cursor-label="GO"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-maroon-light hover:text-maroon-light"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              data-cursor
              className="inline-flex items-center gap-2 px-4 py-3.5 text-sm text-muted transition-colors hover:text-maroon-light"
            >
              View Work
              <ArrowDown size={14} className="animate-bounce" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-maroon/30 via-transparent to-maroon-light/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl glow-maroon">
            <Image
              src="/images/hero.png"
              alt={`${siteConfig.name} — professional portrait`}
              width={800}
              height={1000}
              priority
              quality={95}
              className="h-auto w-full object-cover object-top"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505] via-transparent to-transparent opacity-60" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute -bottom-4 -left-4 glass rounded-xl px-5 py-3"
          >
            <p className="text-[10px] uppercase tracking-widest text-muted">
              Based in
            </p>
            <p className="font-display font-semibold text-foreground">
              {siteConfig.location}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
