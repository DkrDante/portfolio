"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./TerminalHeader.module.css";

import { routes, display } from "@/app/resources";
import { person } from "@/app/resources/content";

const TimeDisplay = ({ timeZone }: { timeZone: string }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timeZone]);
  return <span className={styles.clock}>{time}</span>;
};

const pathLabel: Record<string, string> = {
  "/": "~",
  "/about": "~/about",
  "/work": "~/work",
  "/blog": "~/blog",
  "/gallery": "~/gallery",
};

export const TerminalHeader = () => {
  const pathname = usePathname() ?? "/";
  const currentPath = pathLabel[pathname] ?? `~${pathname}`;

  return (
    <header className={styles.header}>
      {/* Title bar */}
      <div className={styles.titleBar}>
        {/* Traffic lights */}
        <div className={styles.trafficLights}>
          <span className={styles.dotRed} title="Close" />
          <span className={styles.dotYellow} title="Minimize" />
          <span className={styles.dotGreen} title="Maximize" />
        </div>

        {/* Window title */}
        <div className={styles.windowTitle}>
          <span className={styles.promptUser}>yash</span>
          <span className={styles.promptAt}>@</span>
          <span className={styles.promptHost}>portfolio</span>
          <span className={styles.promptColon}>:</span>
          <span className={styles.promptPath}>{currentPath}</span>
        </div>

        {/* Clock */}
        <div className={styles.clockArea}>
          {display.time && <TimeDisplay timeZone={person.location} />}
        </div>
      </div>

      {/* Nav bar — command shortcuts */}
      <nav className={styles.navBar}>
        <span className={styles.navPrefix}>$</span>
        <div className={styles.navLinks}>
          {routes["/"] && (
            <Link href="/" className={`${styles.navLink} ${pathname === "/" ? styles.navActive : ""}`}>
              <span className={styles.navCmd}>cd</span> ~
            </Link>
          )}
          {routes["/about"] && (
            <Link href="/about" className={`${styles.navLink} ${pathname === "/about" ? styles.navActive : ""}`}>
              <span className={styles.navCmd}>cd</span> about
            </Link>
          )}
          {routes["/work"] && (
            <Link href="/work" className={`${styles.navLink} ${pathname.startsWith("/work") ? styles.navActive : ""}`}>
              <span className={styles.navCmd}>ls</span> work
            </Link>
          )}
          {routes["/blog"] && (
            <Link href="/blog" className={`${styles.navLink} ${pathname.startsWith("/blog") ? styles.navActive : ""}`}>
              <span className={styles.navCmd}>cat</span> blog
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default TerminalHeader;
