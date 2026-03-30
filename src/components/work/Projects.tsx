import { getPosts } from "@/app/utils/utils";
import { TerminalProjectCard } from "@/components/TerminalProjectCard";
import styles from "./TerminalProjects.module.css";

interface ProjectsProps {
  range?: [number, number?];
  showHeader?: boolean;
}

export function Projects({ range, showHeader = true }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <div className={styles.container}>
      {showHeader && (
        <div className={styles.header}>
          <span className={styles.prompt}>yash@portfolio:~/work$</span>
          <span className={styles.cmd}> ls -la</span>
        </div>
      )}
      <div className={styles.listing}>
        <div className={styles.listingHeader}>
          total {displayedProjects.length}
        </div>
        {displayedProjects.map((post, index) => (
          <TerminalProjectCard
            priority={index < 2}
            key={post.slug}
            href={`work/${post.slug}`}
            images={post.metadata.images ?? []}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member: { avatar: string }) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
            slug={post.slug}
            publishedAt={post.metadata.publishedAt}
          />
        ))}
      </div>
    </div>
  );
}
