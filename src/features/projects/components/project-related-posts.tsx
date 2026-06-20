import AnimatedBorder from "@/components/animations/animated-border";
import VerticalReveal from "@/components/animations/vertical-reveal";
import H3 from "@/components/ui/typography/h3";
import P from "@/components/ui/typography/p";
import PostCard from "@/features/posts/components/post-card";
import {getPostsByProjectId} from "@/features/posts/data/posts";

interface ProjectRelatedPostsProps {
  projectId: string;
}

export default function ProjectRelatedPosts(props: ProjectRelatedPostsProps) {
  const {projectId} = props;
  const posts = getPostsByProjectId(projectId);

  if (posts.length === 0) return null;

  return (
    <section className="flex flex-col gap-6 pt-4" aria-labelledby="related-posts-title">
      <div>
        <H3 id="related-posts-title">Related posts</H3>
        <P className="text-(--muted-foreground)">Notes from building this.</P>
      </div>

      <AnimatedBorder className="ml-0 flex flex-col gap-6 sm:ml-4" lineClassName="bg-(--button-border)">
        {posts.map((post, index) => (
          <VerticalReveal key={post.id} trigger="scroll" delay={index * 0.1} duration={1.2} className="block pl-6 sm:pl-8">
            <PostCard post={post} />
          </VerticalReveal>
        ))}
      </AnimatedBorder>
    </section>
  );
}
