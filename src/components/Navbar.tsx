"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3 shadow-lg shadow-black/20" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#"
          data-cursor
          data-cursor-label="TOP"
          className="font-display text-xl font-bold tracking-tight"
        >
          <span className="text-gradient">Yahya</span>
          <span className="text-muted">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-cursor
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-maroon-light to-transparent"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          data-cursor
          data-cursor-label="HI"
          className="hidden rounded-full border border-maroon/50 bg-maroon/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-maroon-light transition-all hover:bg-maroon hover:text-white sm:inline-flex"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
