"use client";

import { person, social } from "@/app/resources/content";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      fontFamily: "'Source Code Pro', 'JetBrains Mono', monospace",
      fontSize: "11.5px",
      borderTop: "1px solid #131e2b",
      padding: "12px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "10px",
      color: "#2a3a4a",
      background: "rgba(6,8,13,0.85)",
      letterSpacing: "0.01em",
    }}>
      <span>
        <span style={{ color: "#243040" }}>© {year}</span>
        <span style={{ color: "#1c2433", margin: "0 8px" }}>·</span>
        <span style={{ color: "#4fc3f7" }}>{person.name}</span>
        <span style={{ color: "#1c2433", margin: "0 8px" }}>·</span>
        <span style={{ color: "#2a3a4a" }}>Robotics · AI · Systems</span>
      </span>
      <span style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        {social.map(s => s.link && (
          <a
            key={s.name}
            href={s.link}
            target={s.link.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            title={s.name}
            style={{ color: "#2a3a4a", textDecoration: "none", transition: "color 0.15s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#4fc3f7")}
            onMouseOut={e => (e.currentTarget.style.color = "#2a3a4a")}
          >
            {s.name}
          </a>
        ))}
      </span>
    </footer>
  );
};
