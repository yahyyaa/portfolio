"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  projects,
  projectFilters,
  type ProjectFilter,
} from "@/data/portfolio";
import { TiltCard } from "./effects/TiltCard";
import { FadeUp, SectionHeader } from "./ui/SectionHeader";

function ProjectPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex h-full min-h-[220px] items-center justify-center bg-gradient-to-br from-maroon/20 via-[#1a0808] to-transparent">
      <div className="text-center">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-maroon/30 bg-maroon/10 font-display text-2xl font-bold text-maroon-light">
          {title.charAt(0)}
        </div>
        <p className="text-xs uppercase tracking-widest text-muted">
          Preview Coming Soon
        </p>
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [activeGallery, setActiveGallery] = useState<Record<number, number>>(
    {}
  );

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <FadeUp id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-maroon/5 via-transparent to-maroon/5" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Invention"
          title="Featured Works"
          subtitle="Dashboards, automations, and full-stack systems — filter by stack."
          align="center"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              data-cursor
              className={`relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                filter === f
                  ? "bg-maroon text-white glow-maroon"
                  : "border border-white/10 text-muted hover:border-maroon/40 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const gallery =
                project.gallery ?? (project.image ? [project.image] : []);
              const activeIndex = activeGallery[index] ?? 0;
              const activeImage = gallery[activeIndex];

              return (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <TiltCard>
                    <div
                      data-cursor
                      data-cursor-label="VIEW"
                      className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all hover:border-maroon/40 hover:shadow-2xl hover:shadow-maroon/10"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {activeImage ? (
                          <Image
                            src={activeImage}
                            alt={project.title}
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            sizes="400px"
                          />
                        ) : (
                          <ProjectPlaceholder title={project.title} />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505] via-transparent to-transparent opacity-80" />
                        {project.status && (
                          <span className="absolute right-3 top-3 rounded-full bg-maroon px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            {project.status}
                          </span>
                        )}
                        <span className="absolute bottom-3 left-3 font-display text-xs text-maroon-light">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {gallery.length > 1 && (
                          <div className="absolute bottom-3 right-3 flex gap-1">
                            {gallery.map((_, gi) => (
                              <button
                                key={gi}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveGallery((prev) => ({
                                    ...prev,
                                    [index]: gi,
                                  }));
                                }}
                                className={`h-1.5 rounded-full transition-all ${
                                  gi === activeIndex
                                    ? "w-4 bg-maroon-light"
                                    : "w-1.5 bg-white/40"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {project.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-center text-sm text-muted">
          {projects.length} projects and counting
        </p>
      </div>
    </FadeUp>
  );
}
