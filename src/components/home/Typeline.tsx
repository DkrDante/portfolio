"use client";

import { useEffect, useState } from "react";

/** A terminal line that types and deletes through a list of phrases. */
export function Typeline({ phrases, prefix = "$" }: { phrases: string[]; prefix?: string }) {
  const [text, setText] = useState(phrases[0] ?? "");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let p = 0;
    let i = phrases[0]?.length ?? 0;
    let deleting = true;
    let hold = 18;

    const id = setInterval(() => {
      if (hold > 0) {
        hold--;
        return;
      }
      const phrase = phrases[p];
      if (deleting) {
        i--;
        if (i <= 0) {
          deleting = false;
          p = (p + 1) % phrases.length;
        }
      } else {
        i++;
        if (i >= phrases[p].length) {
          deleting = true;
          hold = 40;
        }
      }
      setText((deleting ? phrase : phrases[p]).slice(0, Math.max(0, i)));
    }, 45);

    return () => clearInterval(id);
  }, [phrases]);

  return (
    <span className="t-mono">
      <span className="t-dim">{prefix} </span>
      {text}
      <span className="t-cursor" aria-hidden>
        █
      </span>
    </span>
  );
}
