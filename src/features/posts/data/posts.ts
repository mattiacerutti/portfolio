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

const postDateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function formatPostDate(date: string) {
  return postDateFormatter.format(new Date(date));
}

export const POSTS: Post[] = [
  {
    id: "from-ai-slop-to-my-first-npm-packages",
    title: "From AI Slop to My First NPM Packages",
    description: "How rewriting a mobile app made me care a bit too much about backwards-compatible tRPC contracts.",
    readTime: "10 min",
    publishedAt: "2026-06-29",
  },
  {
    id: "scaling-code-typer-to-1000-users",
    title: "Scaling Code Typer to 1,000 Users",
    description: "How a Reddit post took down my entire project.",
    readTime: "7 min",
    publishedAt: "2026-01-10",
    projectId: "code-typer",
  },
];

export const LATEST_POSTS = POSTS.toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt));
