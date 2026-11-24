import Link from "next/link";
import { person, social, about, work, blog } from "@/app/resources/content";
import { routes } from "@/app/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pages = [
    { href: "/about", label: about.label, show: routes["/about"] },
    { href: "/work", label: work.label, show: routes["/work"] },
    { href: "/blog", label: blog.label, show: routes["/blog"] },
  ].filter((p) => p.show);

  return (
    <footer className={styles.foot}>
      <div className={styles.inner}>
        <div className={`${styles.top} t-caps`}>
          <span className="t-idx">
            <i>//</i>EOF
          </span>
          <span className="t-rule t-rule--double" aria-hidden />
          <span className="t-dim">built, measured, shipped</span>
        </div>

        <div className={styles.grid}>
          <Link href="/" className={styles.wm}>
            ~/{person.firstName.toLowerCase()}
            <span className="t-cursor" aria-hidden>
              _
            </span>
          </Link>

          <nav className={`${styles.col} t-caps`} aria-label="Pages">
            <span className="t-dim">Pages</span>
            {pages.map((p) => (
              <Link key={p.href} href={p.href}>
                {p.label}
              </Link>
            ))}
          </nav>

          <nav className={`${styles.col} t-caps`} aria-label="Elsewhere">
            <span className="t-dim">Elsewhere</span>
            {social.map(
              (s) =>
                s.link && (
                  <a
                    key={s.name}
                    href={s.link}
                    target={s.link.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {s.name} <span aria-hidden>↗</span>
                  </a>
                ),
            )}
          </nav>
        </div>

        <div className={`${styles.bottom} t-mono`}>
          <span>
            © {currentYear} {person.name}
          </span>
          <span className="t-dim">{person.role}</span>
        </div>
      </div>
    </footer>
  );
};
