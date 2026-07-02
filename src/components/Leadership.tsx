"use client";

import Image from "next/image";
import { Trophy } from "lucide-react";
import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { leadership } from "@/data/portfolio";

export function Leadership() {
  return (
    <AnimatedSection id="leadership" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="/ leadership"
          title="Leadership & Sports"
          subtitle="Competitive drive on the field, strategic leadership off it."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-maroon/20 shadow-xl">
            <Image
              src={leadership.image}
              alt="Yahya Sheikh with football trophies"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-medium text-white/80">Achievements</p>
              <p className="text-2xl font-bold text-white">
                14+ Trophies & Counting
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                <Trophy size={18} className="text-maroon" />
                Leadership Roles
              </h3>
              <ul className="space-y-3">
                {leadership.roles.map((role) => (
                  <li
                    key={role}
                    className="flex gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted transition-colors hover:border-maroon/30"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-maroon" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-foreground">
                Awards & Recognition
              </h3>
              <ul className="space-y-3">
                {leadership.awards.map((award) => (
                  <li
                    key={award}
                    className="rounded-lg border border-maroon/20 bg-maroon/5 px-4 py-3 text-sm text-muted dark:bg-maroon/10"
                  >
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
