"use client";

import Image from "next/image";
import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="/ experience"
          title="Professional Experience"
          subtitle="From operations floors to ERP systems — real impact at every stage."
        />

        <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-border md:before:left-1/2 md:before:-translate-x-px">
          {experiences.map((exp, i) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className={`relative flex flex-col gap-6 md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-maroon bg-background md:left-1/2 md:-translate-x-1/2">
                <div className="h-3 w-3 rounded-full bg-maroon" />
              </div>

              <div className="hidden flex-1 md:block" />

              <div className="ml-14 flex-1 md:ml-0">
                <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-maroon/30 hover:shadow-lg">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-maroon/10 px-3 py-0.5 text-xs font-medium text-maroon dark:text-maroon-light">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                  <p className="mb-4 font-medium text-maroon dark:text-maroon-light">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((item) => (
                      <li
                        key={item.slice(0, 40)}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-maroon" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.image && (
                    <div className="relative mt-4 aspect-video overflow-hidden rounded-lg border border-border">
                      <Image
                        src={exp.image}
                        alt={`${exp.company} dashboard`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
