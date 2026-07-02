"use client";

import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="section-padding bg-section-alt">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="/ skills"
          title="Technical Skills"
          subtitle="Tools and technologies I use to turn data into decisions."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-maroon/30 hover:shadow-lg"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <h3 className="mb-4 font-semibold text-maroon dark:text-maroon-light">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted transition-colors hover:border-maroon hover:text-maroon"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
