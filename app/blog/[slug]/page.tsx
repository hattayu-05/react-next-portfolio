import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogDetail, getBlogSlugs } from "../../../lib/microcms";
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

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  try {
    const slugs = await getBlogSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogDetail(params.slug).catch(() => null);
  if (!post) {
    return {
      title: "記事が見つかりません",
    };
  }
  const description = (post.body ?? post.content ?? "").slice(0, 120);
  return {
    title: `${post.title} | Blog`,
    description,
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogDetail(params.slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const tags = formatTags(post.tags);
  const bodyHtml = post.body ?? post.content ?? "";

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.meta}>
          <span>{post.publishedAt?.slice(0, 10) ?? "公開日未設定"}</span>
          {post.updatedAt && <span>更新: {post.updatedAt.slice(0, 10)}</span>}
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <article
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
        <Link href="/blog" className={styles.backLink}>
          ← ブログ一覧へ戻る
        </Link>
      </div>
    </main>
  );
}
