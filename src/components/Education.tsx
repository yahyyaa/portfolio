"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { TiltCard } from "./effects/TiltCard";
import { FadeUp, SectionHeader } from "./ui/SectionHeader";

export function Education() {
  return (
    <FadeUp id="education" className="section-padding grid-bg">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Education"
          title="Academic Background"
          subtitle="Foundation in data science with consistent academic excellence."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard>
                <div
                  data-cursor
                  className="glass h-full rounded-2xl p-6 transition-all hover:border-maroon/30 hover:glow-maroon"
                >
                  <p className="font-display text-xs uppercase tracking-widest text-maroon-light">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">
                    {item.institution}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {item.detail}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] text-muted"
                      >
                        {tag}
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
