"use client";

import { useState } from "react";
import styles from "./SolveRateHistogram.module.scss";

/*
 * Illustrative calibration run: a pool of candidate tasks, each attempted
 * 16 times by the target model, bucketed by solve rate in 5% bins.
 * Tasks in the 10–30% band carry learning signal and are kept.
 */
const COUNTS = [41, 15, 12, 14, 13, 10, 9, 8, 8, 7, 6, 6, 7, 6, 7, 8, 10, 12, 16, 47];
const PER_CELL = 4;
const MAX_CELLS = Math.ceil(Math.max(...COUNTS) / PER_CELL);

type Band = "rewrite" | "keep" | "drop";
const band = (bin: number): Band => (bin < 2 ? "rewrite" : bin < 6 ? "keep" : "drop");

const total = COUNTS.reduce((a, b) => a + b, 0);
const kept = COUNTS.filter((_, i) => band(i) === "keep").reduce((a, b) => a + b, 0);

const LABEL: Record<Band, string> = {
  rewrite: "too hard → check the verifier, then rewrite",
  keep: "in band → ships",
  drop: "too easy → dropped",
};

export function SolveRateHistogram() {
  const [hover, setHover] = useState<number | null>(null);

  const readout =
    hover === null
      ? `${kept} of ${total} tasks in band · ${((kept / total) * 100).toFixed(1)}% yield`
      : `${hover * 5}–${hover * 5 + 5}% solved · ${COUNTS[hover]} tasks · ${LABEL[band(hover)]}`;

  return (
    <figure className={styles.fig}>
      <div className={`${styles.head} t-caps`}>
        <span>
          <span className="t-lime">●</span> calibration_run.log
        </span>
        <span className="t-rule" aria-hidden />
        <span className="t-dim">pass@16 · n={total}</span>
      </div>

      <div
        className={styles.plot}
        role="img"
        aria-label={`Histogram of ${total} candidate tasks by model solve rate. ${kept} fall in the 10 to 30 percent band and are kept.`}
        onMouseLeave={() => setHover(null)}
      >
        {COUNTS.map((count, bin) => {
          const cells = Math.ceil(count / PER_CELL);
          const b = band(bin);
          return (
            <button
              type="button"
              key={bin}
              className={`${styles.col} ${styles[b]} ${hover === bin ? styles.on : ""}`}
              onMouseEnter={() => setHover(bin)}
              onFocus={() => setHover(bin)}
              onBlur={() => setHover(null)}
              aria-label={`${bin * 5} to ${bin * 5 + 5} percent solved: ${count} tasks`}
            >
              {Array.from({ length: MAX_CELLS }, (_, c) => (
                <span key={c} className={c < cells ? styles.cell : styles.empty} />
              ))}
            </button>
          );
        })}
      </div>

      <div className={`${styles.axis} t-mono`} aria-hidden>
        <span>0%</span>
        <span className={styles.bandMark}>├■ 10–30% ■┤</span>
        <span>50%</span>
        <span>100%</span>
      </div>

      <figcaption className={`${styles.foot} t-mono`}>
        <span className={styles.readout} aria-live="polite">
          <span className="t-dim">&gt;</span> {readout}
        </span>
        <span className={styles.legend}>
          <i className={styles.lKeep} /> keep <i className={styles.lRewrite} /> rewrite{" "}
          <i className={styles.lDrop} /> drop
        </span>
      </figcaption>
    </figure>
  );
}
