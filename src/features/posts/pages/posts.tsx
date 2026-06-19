import AnimatedBorder from "@/components/animations/animated-border";
import VerticalReveal from "@/components/animations/vertical-reveal";
import H3 from "@/components/ui/typography/h3";
import P from "@/components/ui/typography/p";
import PostCard from "@/features/posts/components/post-card";
import {LATEST_POSTS} from "@/features/posts/data/posts";

export default function PostsPage() {
  const baseDelay = 0.15;

  return (
    <div className="flex flex-col gap-12">
      <div>
        <H3>Posts</H3>
        <P className="text-(--muted-foreground)">Notes on projects, experiments, and things I&apos;m figuring out.</P>
      </div>

      <AnimatedBorder className="ml-0 flex flex-col gap-10 sm:ml-4" lineClassName="bg-(--button-border)">
        {LATEST_POSTS.map((post, idx) => (
          <VerticalReveal key={post.id} trigger="instant" delay={baseDelay * idx} duration={1.5} className="block pl-6 sm:pl-8">
            <PostCard post={post} />
          </VerticalReveal>
        ))}
      </AnimatedBorder>
    </div>
  );
}
