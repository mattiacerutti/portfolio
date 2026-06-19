import PostsPage from "@/features/posts/pages/posts";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Posts",
  description: "Notes on projects, experiments, and things I'm figuring out.",
  pathname: "/posts",
});

export default PostsPage;
