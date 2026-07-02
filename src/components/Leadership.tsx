"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { leadership } from "@/data/portfolio";
import { TiltCard } from "./effects/TiltCard";
import { FadeUp, SectionHeader } from "./ui/SectionHeader";

export function Leadership() {
  return (
    <FadeUp id="leadership" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Beyond Data"
          title="Leadership & Sports"
          subtitle="Competitive excellence and campus leadership that shaped who I am."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <TiltCard>
            <motion.div
              data-cursor
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 glow-maroon"
            >
              <Image
                src={leadership.image}
                alt="Yahya Sheikh with football trophies"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-widest text-maroon-light">
                  Achievements
                </p>
                <p className="font-display text-3xl font-bold text-foreground">
                  14+ Trophies
                </p>
              </div>
            </motion.div>
          </TiltCard>

          <div className="space-y-4">
            {leadership.roles.map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass flex items-center gap-4 rounded-xl px-5 py-4 transition-all hover:border-maroon/30"
              >
                <span className="font-display text-sm font-bold text-maroon-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-muted">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
