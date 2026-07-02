"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-maroon/5 blur-3xl dark:bg-maroon/10" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-maroon/5 blur-3xl" />

      <div className="mx-auto grid max-w-6xl flex-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 font-mono text-sm text-maroon dark:text-maroon-light">
            / hello
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-maroon dark:text-maroon-light">
              {siteConfig.name}
            </span>
          </h1>
          <p className="mt-2 text-xl font-medium text-muted sm:text-2xl">
            {siteConfig.title}
          </p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            {siteConfig.hook}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-white transition-all hover:bg-maroon-dark hover:shadow-lg hover:shadow-maroon/20"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href={siteConfig.cvPath}
              className="inline-flex items-center gap-2 rounded-full border border-maroon px-6 py-3 text-sm font-medium text-maroon transition-all hover:bg-maroon hover:text-white dark:text-maroon-light dark:hover:text-white"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted transition-all hover:border-maroon hover:text-maroon"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-maroon/20 shadow-2xl shadow-maroon/10">
            <Image
              src="/images/hero.png"
              alt={`${siteConfig.name} — professional portrait`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
            <p className="text-xs text-muted">Based in</p>
            <p className="font-semibold text-foreground">{siteConfig.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
