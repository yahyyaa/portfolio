"use client";

import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          Built by{" "}
          <span className="font-display font-semibold text-gradient">
            {siteConfig.name}
          </span>
        </p>
        <p className="font-display text-xs tracking-widest text-muted">
          © {new Date().getFullYear()} · DATA ANALYST & BI DEVELOPER
        </p>
      </div>
    </footer>
  );
}
