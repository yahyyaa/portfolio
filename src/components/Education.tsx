"use client";

import { GraduationCap } from "lucide-react";
import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <AnimatedSection id="education" className="section-padding bg-section-alt">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="/ education"
          title="Education"
          subtitle="Academic foundation in data science with consistent excellence."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-maroon/30 hover:shadow-lg"
            >
              <GraduationCap
                size={24}
                className="mb-4 text-maroon dark:text-maroon-light"
              />
              <h3 className="font-bold text-foreground">{item.degree}</h3>
              <p className="mt-1 text-sm font-medium text-maroon dark:text-maroon-light">
                {item.institution}
              </p>
              <p className="mt-3 text-sm text-muted">{item.period}</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
