"use client";

import { useEffect, useState } from "react";

export function TypingEffect({
  text,
  speed = 70,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {display}
      {!done && (
        <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-maroon-light align-middle" />
      )}
    </span>
  );
}
