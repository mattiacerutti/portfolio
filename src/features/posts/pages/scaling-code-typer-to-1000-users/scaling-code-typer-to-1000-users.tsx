import PostHeader from "@/features/posts/components/post-header";
import {getPostById} from "@/features/posts/data/posts";
import ScalingCodeTyperTo1000UsersContent from "@/features/posts/pages/scaling-code-typer-to-1000-users/scaling-code-typer-to-1000-users.mdx";

export default function ScalingCodeTyperTo1000UsersPostPage() {
  const post = getPostById("scaling-code-typer-to-1000-users");

  return (
    <div className="flex flex-col gap-8">
      <PostHeader post={post} />
      <ScalingCodeTyperTo1000UsersContent />
    </div>
  );
}
