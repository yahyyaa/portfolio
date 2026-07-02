"use client";

import { Code2, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { siteConfig } from "@/data/portfolio";

const contactLinks = [
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
    value: "yahya-sheikh",
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
    <AnimatedSection id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="/ contact"
          title="Get In Touch"
          subtitle="Open to Data Analyst and Business Intelligence roles. Let's connect."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link) => (
            <div key={link.label}>
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-maroon hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon/10 text-maroon transition-colors group-hover:bg-maroon group-hover:text-white dark:text-maroon-light">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{link.label}</p>
                    <p className="font-medium text-foreground">{link.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon/10 text-maroon dark:text-maroon-light">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{link.label}</p>
                    <p className="font-medium text-foreground">{link.value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
