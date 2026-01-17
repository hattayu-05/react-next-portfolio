import Link from "next/link";
import styles from "./page.module.css";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [];

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>ブログ</h1>
        <p className={styles.description}>
          日々の学習記録や取り組みについて発信しています
        </p>
        <div className={styles.blogGrid}>
          {blogPosts.length === 0 ? (
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
            blogPosts.map((post) => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.blogDate}>{post.date}</div>
                <div className={styles.blogTags}>
                  {post.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>
                  ブログ記事の内容がここに表示されます。詳細はクリックしてご覧ください。
                </p>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
