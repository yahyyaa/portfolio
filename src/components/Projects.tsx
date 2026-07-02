"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { projects } from "@/data/portfolio";

function ProjectPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex h-full min-h-[200px] items-center justify-center bg-gradient-to-br from-maroon/10 via-maroon/5 to-transparent">
      <div className="text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-maroon/15 text-xl font-bold text-maroon dark:text-maroon-light">
          {title.charAt(0)}
        </div>
        <p className="text-xs text-muted">Screenshot coming soon</p>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeGallery, setActiveGallery] = useState<Record<number, number>>({});

  return (
    <AnimatedSection id="projects" className="section-padding bg-section-alt">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="/ projects"
          title="Featured Projects"
          subtitle="Dashboards, automations, and full-stack apps — selected work that showcases my range."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const gallery = project.gallery ?? (project.image ? [project.image] : []);
            const activeIndex = activeGallery[index] ?? 0;
            const activeImage = gallery[activeIndex];

            return (
              <article
                key={project.title}
                className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-maroon/40 hover:shadow-xl hover:shadow-maroon/5 ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  {activeImage ? (
                    <Image
                      src={activeImage}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  ) : (
                    <ProjectPlaceholder title={project.title} />
                  )}

                  {project.status && (
                    <span className="absolute right-3 top-3 rounded-full bg-maroon px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {project.status}
                    </span>
                  )}

                  {gallery.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {gallery.map((_, gi) => (
                        <button
                          key={gi}
                          onClick={() =>
                            setActiveGallery((prev) => ({ ...prev, [index]: gi }))
                          }
                          className={`h-1.5 rounded-full transition-all ${
                            gi === activeIndex
                              ? "w-4 bg-white"
                              : "w-1.5 bg-white/50 hover:bg-white/80"
                          }`}
                          aria-label={`View image ${gi + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 font-bold text-foreground">{project.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-maroon/8 px-2.5 py-0.5 text-[11px] font-medium text-maroon dark:bg-maroon/15 dark:text-maroon-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
