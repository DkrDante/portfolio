import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components";
import { CardStack, Card } from "@/components/stack/CardStack";
import { SectionHeader } from "@/components/home/SectionHeader";
import { formatDate } from "@/app/utils/formatDate";
import styles from "./work.module.scss";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";

export async function generateMetadata() {
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/`,
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

export default function Work() {
  let allProjects = getPosts(["src", "app", "work", "projects"]);
  const sorted = [...allProjects].sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  return (
    <Column maxWidth="l" fillWidth paddingBottom="40">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/work`,
            image: `https://${baseURL}/og?title=${encodeURIComponent(work.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/work/${project.slug}`,
              image: project.metadata.images?.[0]
                ? `https://${baseURL}${project.metadata.images[0]}`
                : undefined,
            })),
          }),
        }}
      />
      <CardStack>
        <Card tone="paper" label="Index" className={styles.head}>
          <SectionHeader
            idx="WORK"
            label="Selected projects"
            meta={`[ ${allProjects.length} projects ]`}
            title={work.title}
            sub={work.description}
          />
          <ol className={styles.index}>
            {sorted.map((p, i) => (
              <li key={p.slug}>
                <a href={`/work/${p.slug}`}>
                  <span className="t-mono">{String(i + 1).padStart(2, "0")}</span>
                  {p.metadata.title}
                  <span className="t-arr" aria-hidden>→</span>
                </a>
              </li>
            ))}
          </ol>
        </Card>
        {sorted.map((project, i) => (
          <Card
            key={project.slug}
            label={String(i + 1).padStart(2, "0")}
            tone={i % 2 ? "night" : "panel"}
            className={styles.project}
          >
            <SectionHeader
              idx={String(i + 1).padStart(2, "0")}
              label="Project"
              meta={formatDate(project.metadata.publishedAt, false)}
            />
            <ProjectCard
              priority={i < 1}
              href={`work/${project.slug}`}
              images={project.metadata.images}
              title={project.metadata.title}
              description={project.metadata.summary}
              content={project.content}
              avatars={project.metadata.team?.map((member) => ({ src: member.avatar })) || []}
              link={project.metadata.link || ""}
            />
          </Card>
        ))}
      </CardStack>
    </Column>
  );
}
