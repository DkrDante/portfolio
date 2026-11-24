import Link from "next/link";
import { getPosts } from "@/app/utils/utils";
import { formatDate } from "@/app/utils/formatDate";
import styles from "./PostList.module.scss";

interface PostListProps {
  range?: [number, number?];
  showSummary?: boolean;
  tag?: string;
}

/** Index-style list of posts: NN · date · title · tag · arrow. */
export function PostList({ range, showSummary = false, tag }: PostListProps) {
  const posts = getPosts(["src", "app", "blog", "posts"])
    .filter((p) => !tag || p.metadata.tag === tag)
    .sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );
  const shown = range ? posts.slice(range[0] - 1, range[1] ?? posts.length) : posts;
  const offset = range ? range[0] - 1 : 0;

  return (
    <ol className={styles.list}>
      {shown.map((post, i) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className={styles.row}>
            <span className={`${styles.n} t-mono`}>{String(offset + i + 1).padStart(2, "0")}</span>
            <span className={`${styles.date} t-mono`}>
              {formatDate(post.metadata.publishedAt, false)}
            </span>
            <span className={styles.main}>
              <span className={styles.title}>{post.metadata.title}</span>
              {showSummary && post.metadata.summary && (
                <span className={styles.summary}>{post.metadata.summary}</span>
              )}
            </span>
            {post.metadata.tag && <span className={`t-chip ${styles.tag}`}>{post.metadata.tag}</span>}
            <span className={`${styles.arr} t-mono`} aria-hidden>
              →
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
