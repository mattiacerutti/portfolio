import FromAiSlopToMyFirstNpmPackagesPostPage from "@/features/posts/pages/from-ai-slop-to-my-first-npm-packages/from-ai-slop-to-my-first-npm-packages";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "From AI Slop to My First npm Packages",
  description: "How rewriting a mobile app made me care about backwards-compatible tRPC APIs.",
  pathname: "/posts/from-ai-slop-to-my-first-npm-packages",
  type: "article",
});

export default FromAiSlopToMyFirstNpmPackagesPostPage;
