"use client";

import { motion } from "framer-motion";
import { technicalArsenal } from "@/data/portfolio";
import { FadeUp, SectionHeader } from "./ui/SectionHeader";
import { TiltCard } from "./effects/TiltCard";

function ProficiencyBar({ value, delay }: { value: number; delay: number }) {
  return (
    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full bg-gradient-to-r from-maroon-dark via-maroon-light to-maroon"
      />
    </div>
  );
}

export function TechnicalArsenal() {
  return (
    <FadeUp id="skills" className="section-padding grid-bg">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Capabilities"
          title="Technical Arsenal"
          subtitle="Proficiency across analytics, engineering, and intelligent automation."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technicalArsenal.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <TiltCard>
                <div
                  data-cursor
                  className="glass group h-full rounded-2xl p-6 transition-all hover:border-maroon/30 hover:shadow-lg hover:shadow-maroon/10"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <span className="font-display text-xs text-maroon-light">
                      {skill.id}
                    </span>
                    <span className="font-display text-sm font-bold text-maroon-light">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {skill.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{skill.subtitle}</p>
                  <ProficiencyBar value={skill.proficiency} delay={i * 0.08 + 0.2} />
                  <p className="mt-2 text-[10px] uppercase tracking-wider text-muted">
                    Proficiency
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted transition-colors group-hover:border-maroon/30 group-hover:text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
