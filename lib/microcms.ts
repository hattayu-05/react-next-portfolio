import { Blog, BlogListResponse } from "../types/blog";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;
const blogEndpoint = process.env.MICROCMS_BLOG_ENDPOINT ?? "blog";
const baseUrl = serviceDomain
  ? `https://${serviceDomain}.microcms.io/api/v1/${blogEndpoint}`
  : "";

function ensureEnv() {
  if (!serviceDomain || !apiKey) {
    throw new Error(
      "MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を .env.local に設定してください。",
    );
  }
}

async function fetchFromMicroCMS<T>(
  path = "",
  searchParams?: Record<string, string>,
) {
  ensureEnv();
  const url = new URL(path, `${baseUrl}/`);
  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const res = await fetch(url.toString(), {
    headers: {
      "X-MICROCMS-API-KEY": apiKey!,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(
      `microCMS fetch error: ${res.status} ${res.statusText} - ${detail}`,
    );
  }

  return (await res.json()) as T;
}

export async function getBlogList(limit = 20): Promise<BlogListResponse> {
  return fetchFromMicroCMS<BlogListResponse>("", {
    limit: String(limit),
    orders: "-publishedAt",
    fields: "id,title,body,content,tags,eyecatch,publishedAt,updatedAt",
  });
}

export async function getBlogDetail(slug: string): Promise<Blog> {
  return fetchFromMicroCMS<Blog>(slug);
}

export async function getBlogSlugs(limit = 100): Promise<string[]> {
  const data = await fetchFromMicroCMS<BlogListResponse>("", {
    limit: String(limit),
    fields: "id",
  });
  return data.contents.map((post) => post.id);
}
