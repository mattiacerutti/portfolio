export interface Post {
  id: string;
  title: string;
  description: string;
  readTime: string;
  publishedAt: string;
  projectId?: string;
}

export function getPostById(id: string) {
  const post = POSTS.find((item) => item.id === id);
  if (!post) throw new Error(`Post with id ${id} not found`);
  return post;
}

export function getPostsByProjectId(projectId: string) {
  return POSTS.filter((post) => post.projectId === projectId);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export const POSTS: Post[] = [
  {
    id: "scaling-code-typer-to-1000-users",
    title: "Scaling Code Typer to 1,000 Users",
    description: "How a Reddit traffic spike exposed a naive GitHub API dependency and broke everything.",
    readTime: "7 min",
    publishedAt: "2026-01-10",
    projectId: "code-typer",
  },
];

export const LATEST_POSTS = [...POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
