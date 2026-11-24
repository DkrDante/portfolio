"use client";

import { useEffect, useRef, useState } from "react";

const RAMP = "░▒▓█";

/**
 * Text that decodes through a block-glyph ramp when its parent is hovered
 * or focused. Renders the plain text on the server and for reduced motion.
 */
export function Scramble({ text }: { text: string }) {
  const [shown, setShown] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timer: ReturnType<typeof setInterval> | undefined;

    const run = () => {
      clearInterval(timer);
      frame = 0;
      timer = setInterval(() => {
        frame++;
        const settled = Math.floor(frame / 1.5);
        setShown(
          text
            .split("")
            .map((ch, i) =>
              ch === " " || i < settled ? ch : RAMP[(i + frame) % RAMP.length],
            )
            .join(""),
        );
        if (settled >= text.length) {
          clearInterval(timer);
          setShown(text);
        }
      }, 28);
    };

    host.addEventListener("mouseenter", run);
    host.addEventListener("focus", run);
    return () => {
      clearInterval(timer);
      host.removeEventListener("mouseenter", run);
      host.removeEventListener("focus", run);
    };
  }, [text]);

  return (
    <span ref={ref} aria-label={text} style={{ whiteSpace: "pre" }}>
      <span aria-hidden>{shown}</span>
    </span>
  );
}
