"use client";

import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-section-alt py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          Built by{" "}
          <span className="font-semibold text-maroon dark:text-maroon-light">
            {siteConfig.name}
          </span>
        </p>
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} · Data Analyst & BI Developer
        </p>
      </div>
    </footer>
  );
}
