import { SmartImage } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { CardStack, Card } from "@/components/stack/CardStack";
import { SectionHeader } from "@/components/home/SectionHeader";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `https://${baseURL}${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />
      <CardStack>
        {/* ═══ IDENTITY ═══ */}
        <Card tone="paper" label="About" className={styles.hero}>
          <div className={`${styles.heroTop} t-caps`}>
            <span className="t-idx">
              <i>//</i>ABOUT
            </span>
            <span className="t-rule" aria-hidden />
            <span>{person.location.replace("Asia/", "")} · {person.languages.join(" / ")}</span>
          </div>
          <div className={styles.identity}>
            <SmartImage
              src={person.avatar}
              alt={person.name}
              aspectRatio="1 / 1"
              radius="s"
              className={styles.avatar}
              sizes="240px"
              priority
            />
            <div className={styles.nameBlock}>
              <h1 className="t-display">{person.name}</h1>
              <p className={`t-sub ${styles.role}`}>{person.role}</p>
            </div>
          </div>
          {social.length > 0 && (
            <div className={styles.links}>
              {social.map(
                (item) =>
                  item.link && (
                    <a
                      key={item.name}
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="t-btn t-btn--ghost"
                    >
                      {item.name} <span className="t-arr">↗</span>
                    </a>
                  ),
              )}
            </div>
          )}
        </Card>

        {/* ═══ INTRO ═══ */}
        {about.intro.display && (
          <Card label="Intro" className={styles.section}>
            <SectionHeader idx="01" label={about.intro.title} meta="[ readme.md ]" />
            <div className={styles.intro}>{about.intro.description}</div>
          </Card>
        )}

        {/* ═══ EXPERIENCE ═══ */}
        {about.work.display && (
          <Card label="Experience" tone="night" className={styles.section} id={about.work.title}>
            <SectionHeader
              idx="02"
              label={about.work.title}
              meta={`[ ${about.work.experiences.length} roles ]`}
            />
            <ol className={styles.rows}>
              {about.work.experiences.map((experience, index) => (
                <li key={`${experience.company}-${experience.role}-${index}`} className={styles.row}>
                  <div className={styles.rowHead}>
                    <span className={`${styles.n} t-mono`}>{String(index + 1).padStart(2, "0")}</span>
                    <h3 className={styles.rowTitle}>{experience.company}</h3>
                    <span className={`${styles.when} t-mono`}>{experience.timeframe}</span>
                  </div>
                  <p className={`${styles.rowRole} t-caps`}>{experience.role}</p>
                  <ul className={styles.bullets}>
                    {experience.achievements.map((achievement: JSX.Element, i: number) => (
                      <li key={`${experience.company}-${i}`}>{achievement}</li>
                    ))}
                  </ul>
                  {experience.images.length > 0 && (
                    <div className={styles.shots}>
                      {experience.images.map((image: any, i: number) => (
                        <SmartImage
                          key={i}
                          enlarge
                          radius="s"
                          aspectRatio={`${image.width} / ${image.height}`}
                          sizes="360px"
                          alt={image.alt}
                          src={image.src}
                        />
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </Card>
        )}

        {/* ═══ EDUCATION + AWARDS ═══ */}
        {(about.studies.display || about.awards.display) && (
          <Card label="Education" className={styles.section}>
            <div className={styles.split}>
              {about.studies.display && (
                <div>
                  <SectionHeader idx="03" label={about.studies.title} />
                  <ol className={styles.rows}>
                    {about.studies.institutions.map((institution, index) => (
                      <li key={`${institution.name}-${index}`} className={styles.row}>
                        <h3 className={styles.rowTitle}>{institution.name}</h3>
                        <p className={styles.rowText}>{institution.description}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {about.awards.display && (
                <div>
                  <SectionHeader idx="04" label={about.awards.title} />
                  <ol className={styles.rows}>
                    {about.awards.items.map((item, index) => (
                      <li key={`${item.title}-${index}`} className={styles.row}>
                        <h3 className={styles.rowTitle}>
                          <span className="t-lime">■</span> {item.title}
                        </h3>
                        <p className={styles.rowText}>{item.description}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </Card>
        )}

        {/* ═══ SKILLS ═══ */}
        {about.technical.display && (
          <Card label="Skills" tone="night" className={styles.section} id={about.technical.title}>
            <SectionHeader
              idx="05"
              label={about.technical.title}
              meta={`[ ${about.technical.skills.length} areas ]`}
            />
            <div className={styles.skills}>
              {about.technical.skills.map((skill, index) => (
                <article key={`${skill.title}-${index}`} className={styles.skill}>
                  <div className={`${styles.skillTop} t-caps`}>
                    <span className="t-lime">{String.fromCharCode(65 + index)}</span>
                    <span className="t-rule" aria-hidden />
                  </div>
                  <h3 className={styles.rowTitle}>{skill.title}</h3>
                  <p className={styles.rowText}>{skill.description}</p>
                </article>
              ))}
            </div>
          </Card>
        )}
      </CardStack>
    </div>
  );
}
