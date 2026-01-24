import Link from "next/link";
import { getBlogList } from "../../lib/microcms";
import styles from "./page.module.css";

export const revalidate = 60;

const formatTags = (tags?: unknown) => {
  if (!tags) return [] as string[];
  if (Array.isArray(tags)) {
    return tags
      .map((tag) => (typeof tag === "string" ? tag : (tag?.name ?? tag?.id)))
      .filter(Boolean) as string[];
  }
  return [] as string[];
};

export default async function Blog() {
  let posts: Awaited<ReturnType<typeof getBlogList>>["contents"] = [];
  try {
    const data = await getBlogList();
    posts = data.contents;
  } catch {
    posts = [];
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>ブログ</h1>
        <p className={styles.description}>
          日々の学習記録や取り組みについて発信しています
        </p>
        <div className={styles.blogGrid}>
          {posts.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                gridColumn: "1 / -1",
                color: "#6b7280",
              }}
            >
              現在ブログ記事はありません。
            </p>
          ) : (
            posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className={styles.blogCard}
              >
                <div className={styles.blogDate}>
                  {post.publishedAt?.slice(0, 10)}
                </div>
                <div className={styles.blogTags}>
                  {formatTags(post.tags).map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>
                  {(post.body ?? post.content ?? "").slice(0, 80) ||
                    "続きを見る"}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
