"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isSmall = window.innerWidth < 768;
    setEnabled(!isTouch && !isSmall);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor]");
      if (interactive) {
        setHovering(true);
        setLabel(interactive.getAttribute("data-cursor-label") ?? "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 28 : 8),
          y: pos.y - (hovering ? 28 : 8),
          width: hovering ? 56 : 16,
          height: hovering ? 56 : 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div
          className={`flex h-full w-full items-center justify-center rounded-full border border-white ${
            hovering ? "bg-white/10" : "bg-white"
          }`}
        >
          {label && (
            <span className="text-[8px] font-bold uppercase tracking-wider text-white">
              {label}
            </span>
          )}
        </div>
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997] h-1 w-1 rounded-full bg-maroon-light"
        animate={{ x: pos.x - 2, y: pos.y - 2 }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />
    </>
  );
}
