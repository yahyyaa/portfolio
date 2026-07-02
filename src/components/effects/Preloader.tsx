"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.random() * 18 + 4;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0505]"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-xs tracking-[0.5em] text-maroon-light"
          >
            SYSTEM INITIALIZING
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 font-display text-[10px] tracking-[0.35em] text-muted"
          >
            DATA ◆ INSIGHTS ◆ INNOVATION
          </motion.p>
          <div className="relative mt-10 h-px w-64 overflow-hidden bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-maroon-dark via-maroon-light to-maroon"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="mt-4 font-display text-sm text-foreground">
            {Math.min(Math.round(progress), 100)}%
          </p>
          <button
            onClick={() => {
              setVisible(false);
              onComplete();
            }}
            className="mt-8 text-xs tracking-widest text-muted transition-colors hover:text-maroon-light"
          >
            SKIP INTRO
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
