"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./TerminalProjectCard.module.css";

interface TerminalProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  slug?: string;
  publishedAt?: string;
}

// Fake "file size" based on content length
function fakeSize(content: string): string {
  const bytes = content.length * 8;
  if (bytes > 8000) return `${(bytes / 1024).toFixed(1)}K`;
  return `${bytes}`;
}

// Infer tags from title/description
function inferTags(title: string, description: string): string {
  const text = (title + " " + description).toLowerCase();
  const tagMap: [string, string][] = [
    ["python", "python"],
    ["opencv", "opencv"],
    ["mediapipe", "mediapipe"],
    ["react", "react"],
    ["c++", "c++"],
    ["fastapi", "fastapi"],
    ["mern", "mern"],
    ["next", "nextjs"],
    ["ai", "ai"],
    ["ml", "ml"],
    ["robotics", "robotics"],
    ["gesture", "cv"],
    ["design", "design-sys"],
    ["sensor", "sensor-fusion"],
    ["chromadb", "chromadb"],
    ["telegram", "telegram"],
    ["isl", "isl"],
  ];
  const found = tagMap.filter(([k]) => text.includes(k)).map(([, v]) => v);
  return found.slice(0, 3).join("  ") || "project";
}

export const TerminalProjectCard: React.FC<TerminalProjectCardProps> = ({
  href,
  images,
  title,
  content,
  description,
  avatars,
  link,
  publishedAt,
}) => {
  const [expanded, setExpanded] = useState(false);
  const date = publishedAt
    ? publishedAt.split("T")[0]
    : "2025-01-01";
  const tags = inferTags(title, description);
  const size = fakeSize(content || description);
  const slug = href.replace(/^work\//, "").replace(/^\/work\//, "");

  return (
    <div className={styles.card}>
      {/* ── ls -la row ── */}
      <button
        className={styles.entryRow}
        onClick={() => setExpanded((p) => !p)}
        aria-expanded={expanded}
      >
        <span className={styles.permissions}>-rw-r--r--</span>
        <span className={styles.owner}>yash</span>
        <span className={styles.group}>{tags.split("  ")[0]}</span>
        <span className={styles.size}>{size}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.name}>
          {slug}/
          <span className={styles.expandHint}>{expanded ? " ▾" : " ▸"}</span>
        </span>
      </button>

      {/* ── Expanded ASCII details ── */}
      {expanded && (
        <div className={styles.details}>
          <div className={styles.boxTop}>
            ╔══ <span className={styles.detailTitle}>{title}</span>
            {" "}{"═".repeat(Math.max(0, 46 - title.length))}╗
          </div>

          {description?.trim() && (
            <div className={styles.boxRow}>
              ║ <span className={styles.detailDesc}>{description}</span>
            </div>
          )}

          <div className={styles.boxMeta}>
            ║ <span className={styles.metaLabel}>TAGS</span>
            {"  "}<span className={styles.metaTags}>{tags}</span>
          </div>

          {images[0] && (
            <div className={styles.boxMeta}>
              ║ <span className={styles.metaLabel}>IMG </span>
              {"  "}<span className={styles.metaDim}>{images[0]}</span>
            </div>
          )}

          <div className={styles.boxBottom}>╚{"═".repeat(54)}╝</div>

          <div className={styles.actions}>
            {content?.trim() && (
              <Link href={href} className={styles.actionLink}>
                ○ read case-study
              </Link>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className={styles.actionLink}>
                ○ view project ↗
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
