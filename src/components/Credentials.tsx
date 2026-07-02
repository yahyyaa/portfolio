"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { credentials } from "@/data/portfolio";
import { FadeUp, SectionHeader } from "./ui/SectionHeader";

export function Credentials() {
  const [active, setActive] = useState(0);
  const current = credentials[active];

  return (
    <FadeUp id="credentials" className="section-padding grid-bg">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Credentials"
          title="Awards & Recognition"
          subtitle="Scroll the list — the preview updates as you explore."
        />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="space-y-2">
            {credentials.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => setActive(i)}
                data-cursor
                onMouseEnter={() => setActive(i)}
                className={`w-full rounded-xl border px-5 py-4 text-left transition-all ${
                  active === i
                    ? "glass border-maroon/40 glow-maroon"
                    : "border-transparent hover:border-white/10 hover:bg-white/5"
                }`}
              >
                <span className="font-display text-xs text-maroon-light">
                  ({item.id})
                </span>
                <h3
                  className={`mt-1 font-display font-semibold ${
                    active === i ? "text-foreground" : "text-muted"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-muted">{item.issuer}</p>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="glass sticky top-28 overflow-hidden rounded-2xl border border-white/10"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505] via-[#0a0505]/40 to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-maroon-light">
                {current.date}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                {current.title}
              </h3>
              <p className="mt-1 text-sm text-maroon-light">{current.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {current.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </FadeUp>
  );
}
