import PostHeader from "@/features/posts/components/post-header";
import {getPostById} from "@/features/posts/data/posts";
import FromAiSlopToMyFirstNpmPackagesContent from "@/features/posts/pages/from-ai-slop-to-my-first-npm-packages/from-ai-slop-to-my-first-npm-packages.mdx";

export default function FromAiSlopToMyFirstNpmPackagesPostPage() {
  const post = getPostById("from-ai-slop-to-my-first-npm-packages");

  return (
    <div className="flex flex-col gap-8">
      <PostHeader post={post} />
      <FromAiSlopToMyFirstNpmPackagesContent />
    </div>
  );
}
