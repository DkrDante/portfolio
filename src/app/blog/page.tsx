import { Column } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { PostList } from "@/components/blog/PostList";
import { SectionHeader } from "@/components/home/SectionHeader";
import { getPosts } from "@/app/utils/utils";
import { CardStack, Card } from "@/components/stack/CardStack";
import styles from "./blog.module.scss";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";

export async function generateMetadata() {
  const title = blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
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

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Blog() {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  // one page per tag, Frontier AI first, then by size
  const counts = new Map<string, number>();
  posts.forEach((p) => {
    const t = p.metadata.tag || "Notes";
    counts.set(t, (counts.get(t) ?? 0) + 1);
  });
  const tags = Array.from(counts.entries()).sort((a, b) =>
    a[0] === "Frontier AI" ? -1 : b[0] === "Frontier AI" ? 1 : b[1] - a[1],
  );
  return (
    <Column maxWidth="l" fillWidth paddingBottom="40">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
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
        <Card tone="paper" label="Index" className={styles.head}>
          <SectionHeader
            idx="BLOG"
            label="Engineering & research notes"
            meta={`[ ${posts.length} posts ]`}
            title={blog.title}
            sub="Frontier training data and hard tasks, evals, RAG, agents, MLOps, and the failures that taught me something."
          />
          <ol className={styles.toc}>
            {tags.map(([tag, count], i) => (
              <li key={tag}>
                <a href={`#${slug(tag)}`}>
                  <span className="t-mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.tocName}>{tag}</span>
                  <span className="t-mono">{count} {count === 1 ? "post" : "posts"}</span>
                  <span className="t-arr" aria-hidden>↓</span>
                </a>
              </li>
            ))}
          </ol>
        </Card>
        {tags.map(([tag, count], i) => (
          <Card key={tag} id={slug(tag)} label={tag} tone={i % 2 ? "panel" : "night"} className={styles.group}>
            <SectionHeader idx={String(i + 1).padStart(2, "0")} label={tag} meta={`[ ${count} ${count === 1 ? "post" : "posts"} ]`} />
            <PostList tag={tag} showSummary />
          </Card>
        ))}
      </CardStack>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
