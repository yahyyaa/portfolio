"use client";

import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { aboutText, stats } from "@/data/portfolio";

export function About() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="/ about"
          title="About Me"
          subtitle="Data analyst with a builder's mindset — I don't just analyze data, I ship solutions."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-3">
            {aboutText.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-5 text-center transition-all hover:border-maroon/40 hover:shadow-md"
              >
                <p className="text-2xl font-bold text-maroon dark:text-maroon-light">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
