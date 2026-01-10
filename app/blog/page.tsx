import Link from 'next/link';
import styles from './page.module.css';

const blogPosts = [
  {
    id: 1,
    title: 'このパソコンの素晴らしさ',
    date: '2025.01.19',
    tags: ['つぶやき'],
  },
  {
    id: 2,
    title: 'MicroCMSの使い方',
    date: '2025.01.18',
    tags: ['学び', '取り組み'],
  },
  {
    id: 3,
    title: 'ポートフォリオサイトを作成',
    date: '2025.01.18',
    tags: ['取り組み', '制作物'],
  },
];

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>ブログ</h1>
        <p className={styles.description}>
          日々の学習記録や取り組みについて発信しています
        </p>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
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
          ))}
        </div>
      </div>
    </main>
  );
}
