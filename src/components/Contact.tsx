"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { FadeUp, SectionHeader } from "./ui/SectionHeader";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: null,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "Connect",
    href: siteConfig.linkedin,
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "yahyyaa",
    href: siteConfig.github,
  },
];

export function Contact() {
  return (
    <FadeUp id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-t from-maroon/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Connect"
          title="Get In Touch"
          subtitle="Open to Data Analyst and Business Intelligence roles. Let's build something intelligent."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  data-cursor
                  data-cursor-label="GO"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-maroon/40 hover:glow-maroon"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon/15 text-maroon-light transition-all group-hover:bg-maroon group-hover:text-white">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted">
                      {link.label}
                    </p>
                    <p className="font-display font-semibold text-foreground">
                      {link.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="glass flex items-center gap-4 rounded-2xl p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon/15 text-maroon-light">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted">
                      {link.label}
                    </p>
                    <p className="font-display font-semibold text-foreground">
                      {link.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
