"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { TiltCard } from "./effects/TiltCard";
import { FadeUp, SectionHeader } from "./ui/SectionHeader";

export function Experience() {
  return (
    <FadeUp id="experience" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Journey"
          title="Professional Experience"
          subtitle="Real-world impact across operations, IT, and leadership."
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard>
                <div
                  data-cursor
                  className="glass overflow-hidden rounded-2xl transition-all hover:border-maroon/30 hover:shadow-xl hover:shadow-maroon/5"
                >
                  <div className="grid lg:grid-cols-3">
                    <div className="border-b border-white/5 p-8 lg:border-b-0 lg:border-r">
                      <span className="inline-block rounded-full border border-maroon/30 bg-maroon/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-maroon-light">
                        {exp.period}
                      </span>
                      <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="mt-1 font-medium text-maroon-light">
                        {exp.company}
                      </p>
                    </div>
                    <div className="p-8 lg:col-span-2">
                      <ul className="space-y-3">
                        {exp.highlights.map((item, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.05 }}
                            className="flex gap-3 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-maroon-light" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      {exp.image && (
                        <div className="relative mt-6 aspect-video overflow-hidden rounded-xl border border-white/10">
                          <Image
                            src={exp.image}
                            alt={`${exp.company} dashboard`}
                            fill
                            className="object-cover object-top transition-transform duration-700 hover:scale-105"
                            sizes="600px"
                          />
                        </div>
                      )}
                    </div>
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
