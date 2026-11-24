"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CardStack.module.scss";

const NAV = 56; // sticky header height
const GAP = 12; // breathing room above each stuck card

/**
 * Turns its <Card> children into a deck of pages: each card sticks below the
 * nav while the next one slides over it, covered cards recede, and scrolling
 * settles on the nearest card when it stops. Cards taller than the viewport
 * scroll through in full before they stick.
 */
export function CardStack({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [labels, setLabels] = useState<string[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>(":scope > .t-card"));
    if (!cards.length) return;
    setLabels(cards.map((c, i) => c.dataset.label || String(i + 1).padStart(2, "0")));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = () => window.innerWidth <= 640;
    const stickTop = () => (mobile() ? 52 : NAV) + GAP;

    // natural (un-stuck) document position of each card
    let starts: number[] = [];
    let heights: number[] = [];

    const layout = () => {
      const vh = window.innerHeight;
      const top = stickTop();
      cards.forEach((c) => {
        c.style.position = "relative";
        c.style.top = "0px";
        c.style.transform = "";
      });
      starts = cards.map((c) => c.getBoundingClientRect().top + window.scrollY);
      heights = cards.map((c) => c.offsetHeight);
      cards.forEach((c, i) => {
        const t = Math.min(top, vh - heights[i] - GAP);
        c.style.position = "";
        c.style.top = `${t}px`;
        // recede around the centre of whatever part of the card is on screen
        const visibleMid = -t + (vh - Math.max(t, 0)) / 2;
        c.style.transformOrigin = `50% ${visibleMid}px`;
      });
      onScroll();
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        let current = 0;
        cards.forEach((c, i) => {
          const next = cards[i + 1];
          let p = 0;
          if (next) {
            const nextTop = next.getBoundingClientRect().top;
            p = Math.min(1, Math.max(0, (vh - nextTop) / (vh - stickTop())));
          }
          if (!reduce) {
            c.style.transform = p > 0 ? `scale(${1 - 0.06 * p})` : "";
          }
          c.style.setProperty("--cover", String(p * 0.65));
          if (c.getBoundingClientRect().top <= vh * 0.5) current = i;
        });
        setActive(current);
      });
    };

    // settle on the nearest page once scrolling stops
    let settleTimer: ReturnType<typeof setTimeout> | undefined;
    let settling = false;
    const settle = () => {
      if (settling) {
        settling = false;
        return;
      }
      const y = window.scrollY;
      const vh = window.innerHeight;
      const top = stickTop();
      const targets: number[] = [];
      for (let i = 0; i < cards.length; i++) {
        const start = starts[i] - top;
        const end = starts[i] + heights[i] + GAP - vh; // bottom of a tall card reaches the viewport bottom
        // inside a tall card: let the reader scroll freely
        if (end > start + 40 && y > start + 40 && y < end - 40) return;
        targets.push(start);
        if (end > start) targets.push(end);
      }
      const nearest = targets.reduce((a, b) => (Math.abs(b - y) < Math.abs(a - y) ? b : a), targets[0]);
      const dist = Math.abs(nearest - y);
      if (dist > 2 && dist < vh * 0.4) {
        settling = true;
        window.scrollTo({ top: nearest, behavior: reduce ? "auto" : "smooth" });
      }
    };
    const onScrollEnd = () => {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(settle, 140);
    };

    layout();
    const ro = new ResizeObserver(layout);
    cards.forEach((c) => ro.observe(c));
    window.addEventListener("resize", layout);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScrollEnd, { passive: true });

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(settleTimer);
      window.removeEventListener("resize", layout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScrollEnd);
    };
  }, []);

  const goTo = (i: number) => {
    const card = ref.current?.querySelectorAll<HTMLElement>(":scope > .t-card")[i];
    if (!card) return;
    const prevPos = card.style.position;
    card.style.position = "relative";
    const y = card.getBoundingClientRect().top + window.scrollY;
    card.style.position = prevPos;
    const top = (window.innerWidth <= 640 ? 52 : NAV) + GAP;
    window.scrollTo({ top: y - top, behavior: "smooth" });
  };

  return (
    <>
      <div ref={ref} className={styles.stack}>
        {children}
      </div>
      {labels.length > 1 && (
        <nav className={styles.pager} aria-label="Sections">
          <span className={`${styles.count} t-mono`}>
            {String(active + 1).padStart(2, "0")}
            <span className="t-dim">/{String(labels.length).padStart(2, "0")}</span>
          </span>
          {labels.map((l, i) => (
            <button
              key={l + i}
              type="button"
              className={`${styles.tick} ${i === active ? styles.on : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to ${l}`}
              aria-current={i === active ? "true" : undefined}
            >
              <span className={`${styles.label} t-caps`}>{l}</span>
            </button>
          ))}
        </nav>
      )}
    </>
  );
}

interface CardProps {
  children: React.ReactNode;
  label?: string;
  tone?: "night" | "panel" | "paper";
  id?: string;
  className?: string;
}

/** One page in a CardStack. */
export function Card({ children, label, tone = "panel", id, className = "" }: CardProps) {
  return (
    <section
      id={id}
      data-label={label}
      className={`t-card t-card--${tone} ${tone === "paper" ? "t-sheet" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
