import React from "react";
import Link from "next/link";

import { Projects } from "@/components/work/Projects";
import { PostList } from "@/components/blog/PostList";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SolveRateHistogram } from "@/components/home/SolveRateHistogram";
import { Scramble } from "@/components/home/Scramble";
import { Typeline } from "@/components/home/Typeline";
import { Mailchimp } from "@/components";
import { CardStack, Card } from "@/components/stack/CardStack";

import { baseURL, routes } from "@/app/resources";
import { home, person, newsletter, social } from "@/app/resources/content";
import styles from "./home.module.scss";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const PHRASES = [
  "eval --suite rag-faithfulness --judge calibrated",
  "author --task swe-hard --target-solve 0.10:0.30",
  "verify --reward-hack-probes all",
  "train --policy grpo --env sandboxed-repo",
  "ship --to production --monitor drift",
];

/* tiny ASCII sketches for the focus cards */
const SKETCH = [
  ["query ─┬─ retrieve ─ verify ─┐", "       └─ abstain ◄──── low conf"],
  ["push ─► ci ─► eval ─► load ═══►", "  ✗ regress   ✓ ship   ▒▒▓█ p99"],
  ["eeg ∿∿∿∿╲╱∿∿∿╲╱∿∿∿∿ ─► state", "split: subject ✓  window ✗"],
  ["█ agent · ◆ goal · # wall", "#  █ ─ ─ ─ ─ ─ ─ ─ ─ ◆  #"],
];

const LETTERS = ["A", "B", "C", "D"];

export default function Home() {
  const email = social.find((s) => s.icon === "email")?.link;

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />

      <CardStack>
        {/* ═══ HERO: the paper sheet ═══ */}
        <Card tone="paper" label="Intro" className={styles.hero}>
          <div className={`${styles.heroTop} t-caps t-rise`}>
            <span>[ AI/ML engineer · evals · RL tasks · robotics ]</span>
            <span className="t-rule" aria-hidden />
            <span className={styles.status}>
              <span className={styles.dot} aria-hidden /> available for
              collaborations
            </span>
          </div>

          <h1
            className={`t-display ${styles.headline} t-rise`}
            style={{ "--d": ".08s" } as React.CSSProperties}
          >
            {home.headline}
          </h1>

          <div className={styles.heroBody}>
            <p
              className={`t-sub ${styles.lede} t-rise`}
              style={{ "--d": ".18s" } as React.CSSProperties}
            >
              {home.subline}
            </p>
            <div
              className={`${styles.ctas} t-rise`}
              style={{ "--d": ".28s" } as React.CSSProperties}
            >
              <Link href="/work" className="t-btn">
                <Scramble text="See the work" />{" "}
                <span className="t-arr">→</span>
              </Link>
              <a href="#writing" className="t-btn t-btn--ghost">
                <Scramble text="Read the notes" />{" "}
                <span className="t-arr">↓</span>
              </a>
            </div>
          </div>

          <div
            className={`${styles.term} t-rise`}
            style={{ "--d": ".38s" } as React.CSSProperties}
          >
            <Typeline phrases={PHRASES} prefix="yash@lab:~$" />
          </div>

          <ul className={styles.facts}>
            {home.highlights.map((h) => (
              <li key={h.label} className="t-chip">
                <b>■</b>
                {h.value} · {h.label}
              </li>
            ))}
          </ul>
        </Card>

        {/* ═══ 01 FOCUS ═══ */}
        <Card label="What I build" className={styles.section}>
          <SectionHeader
            idx="01"
            label="What I build"
            meta="[ 4 tracks ]"
            title="Systems that survive contact with real data."
            sub={
              <>
                Most of my work sits where models meet messy inputs:{" "}
                <strong>retrieval</strong>, <strong>evaluation</strong>,{" "}
                <strong>signals from the body</strong> and{" "}
                <strong>robots that can't afford to guess</strong>.
              </>
            }
          />
          <div className={styles.focus}>
            {home.focus.items.map((item, i) => (
              <article key={item.title} className={styles.card}>
                <div className={`${styles.cardTop} t-caps`}>
                  <span className="t-lime">{LETTERS[i]}</span>
                  <span className="t-rule" aria-hidden />
                  <span className="t-dim">0{i + 1}</span>
                </div>
                <pre className={styles.sketch} aria-hidden>
                  {SKETCH[i].join("\n")}
                </pre>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </article>
            ))}
          </div>
        </Card>

        {/* ═══ 02 CALIBRATION ═══ */}
        <Card label="Hard tasks" tone="night" className={styles.section}>
          <SectionHeader
            idx="02"
            label="Hard tasks, on purpose"
            meta="[ frontier training ]"
            title="A task the model always solves teaches it nothing."
            sub={
              <>
                Lately I've been writing{" "}
                <strong>
                  evaluation and RL tasks that frontier models struggle on
                </strong>
                . The craft is calibration: each task is run many times against
                the target model and only the ones it solves{" "}
                <strong>10–30% of the time</strong> survive. Hover the columns.
              </>
            }
          />
          <div className={styles.calib}>
            <SolveRateHistogram />
            <aside className={styles.calibNotes}>
              <ol>
                <li>
                  <span className="t-idx">
                    <i>//</i>0%
                  </span>
                  <p>
                    No successes means no gradient. Usually it means the task,
                    or its grader, is broken.
                  </p>
                </li>
                <li>
                  <span className="t-idx">
                    <i>//</i>10–30%
                  </span>
                  <p>
                    The model sometimes finds the path. Every success is a
                    strong, rare learning signal.
                  </p>
                </li>
                <li>
                  <span className="t-idx">
                    <i>//</i>100%
                  </span>
                  <p>
                    Already learned. It burns compute and teaches nothing new.
                  </p>
                </li>
              </ol>
              <Link
                href="/blog/the-10-30-band-calibrating-task-difficulty"
                className="t-btn t-btn--ghost"
              >
                <Scramble text="Why the band works" />{" "}
                <span className="t-arr">→</span>
              </Link>
            </aside>
          </div>
        </Card>

        {/* ═══ 03 WORK ═══ */}
        <Card label="Work" className={styles.section}>
          <SectionHeader
            idx="03"
            label="Selected work"
            meta={<Link href="/work">all projects →</Link>}
            title="Shipped, measured, written up."
          />
          <div className={styles.work}>
            <Projects range={[1, 2]} />
          </div>
        </Card>

        {/* ═══ 04 WRITING ═══ */}
        {routes["/blog"] && (
          <Card
            label="Writing"
            tone="night"
            className={styles.section}
            id="writing"
          >
            <SectionHeader
              idx="04"
              label="Writing"
              meta={<Link href="/blog">all notes →</Link>}
              title="Notes from the bench."
              sub="Frontier training data, evals, RAG, agents and the bugs that taught me something."
            />
            <PostList range={[1, 6]} />
          </Card>
        )}

        {/* ═══ CLOSING CTA ═══ */}
        <Card label="Contact" className={styles.closing}>
          <p className={`${styles.prompt} t-mono`}>
            <span className="t-lime">&gt;</span>contact --yash
            <span className="t-cursor" aria-hidden>
              █
            </span>
          </p>
          <p className="t-sub">
            Building evals, RL environments, or an AI system that has to work on
            the first real user? I'd like to hear about it.
          </p>
          <div className={styles.ctas}>
            {email && (
              <a href={email} className="t-btn t-btn--lime">
                <Scramble text="Send an email" />{" "}
                <span className="t-arr">→</span>
              </a>
            )}
            <Link href="/about" className="t-btn t-btn--ghost">
              <Scramble text="About me" /> <span className="t-arr">→</span>
            </Link>
          </div>
        </Card>
      </CardStack>

      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </div>
  );
}
