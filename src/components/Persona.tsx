"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { persona, siteConfig } from "@/data/portfolio";
import { AnimatedCounter } from "./effects/AnimatedCounter";
import { FadeUp, SectionHeader } from "./ui/SectionHeader";

export function Persona() {
  return (
    <FadeUp id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-maroon/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Discovery"
          title="The Persona"
          subtitle={persona.headline}
        />

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="space-y-5">
              {persona.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-base leading-relaxed text-muted sm:text-lg"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 glass rounded-2xl p-6"
            >
              <p className="text-xs uppercase tracking-widest text-maroon-light">
                Focusing on
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-foreground">
                {persona.focus}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-4"
          >
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-2xl border border-white/10 glow-maroon">
              <Image
                src="/images/hero.png"
                alt={siteConfig.name}
                fill
                quality={95}
                className="object-cover object-top"
                sizes="400px"
              />
            </div>
            <div className="absolute -right-2 bottom-8 glass rounded-xl px-4 py-3">
              <p className="font-display text-2xl font-bold text-maroon-light">
                <AnimatedCounter value={9} suffix="+" />
              </p>
              <p className="text-xs text-muted">Projects Delivered</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 lg:col-span-3"
          >
            {persona.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass group rounded-2xl p-5 text-center transition-all hover:border-maroon/40 hover:glow-maroon"
              >
                <p className="font-display text-3xl font-bold text-gradient">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </FadeUp>
  );
}
