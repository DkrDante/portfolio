"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import { person, about, blog, work, social } from "@/app/resources/content";

const contactHref = social.find((s) => s.icon === "email")?.link ?? "/about";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat(locale, options).format(new Date()));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

const links = [
  { href: "/about", label: about.label, show: routes["/about"], match: (p: string) => p === "/about" },
  { href: "/work", label: work.label, show: routes["/work"], match: (p: string) => p.startsWith("/work") },
  { href: "/blog", label: blog.label, show: routes["/blog"], match: (p: string) => p.startsWith("/blog") },
].filter((l) => l.show);

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.wm} aria-label={`${person.name}, home`}>
        <span className={styles.glyph} aria-hidden>
          ▚
        </span>
        <span>~/{person.firstName.toLowerCase()}</span>
      </Link>
      <span className={`t-rule ${styles.rule}`} aria-hidden />
      <nav className={styles.links} aria-label="Primary">
        <ul>
          {links.map((l, i) => (
            <li key={l.href}>
              {i > 0 && (
                <span className={styles.sep} aria-hidden>
                  ·
                </span>
              )}
              <Link
                href={l.href}
                className={l.match(pathname) ? styles.active : undefined}
                aria-current={l.match(pathname) ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <span className={`t-rule ${styles.rule}`} aria-hidden />
      {display.time && (
        <span className={styles.time}>
          <TimeDisplay timeZone={person.location} /> IST
        </span>
      )}
      <a href={contactHref} className={styles.cta}>
        Get in touch <span aria-hidden>→</span>
      </a>
    </header>
  );
};
