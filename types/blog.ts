export type MicroCMSTag = {
  id: string;
  name?: string;
};

export type MicroCMSImage = {
  url: string;
  width?: number;
  height?: number;
};

export type Blog = {
  id: string;
  title: string;
  body?: string;
  content?: string;
  tags?: MicroCMSTag[] | string[];
  eyecatch?: MicroCMSImage;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
  revisedAt?: string;
};

export type BlogListResponse = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};
