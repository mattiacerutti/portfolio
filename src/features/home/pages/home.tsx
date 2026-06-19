import VerticalReveal from "@/components/animations/vertical-reveal";
import AnimatedBorder from "@/components/animations/animated-border";
import H3 from "@/components/ui/typography/h3";
import P from "@/components/ui/typography/p";
import Hero from "@/features/home/components/hero";
import {CustomLink} from "@/components/ui/typography/link";
import PostCard from "@/features/posts/components/post-card";
import {LATEST_POSTS} from "@/features/posts/data/posts";
import {HiOutlineArrowRight} from "react-icons/hi";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <div className="mt-8 flex w-full justify-center px-6">
        <div className="flex w-4xl flex-col gap-20">
          <div className="flex flex-col gap-12">
            <div>
              <div className="flex flex-row items-center justify-between">
                <H3>Posts</H3>
                <CustomLink href="/posts" className="group relative flex items-center underline decoration-(--muted-foreground)/30">
                  <P className="transition-transform duration-300 group-hover:-translate-x-6">All posts</P>
                  <HiOutlineArrowRight className="absolute -right-6 h-4 w-4 opacity-0 transition-all duration-300 group-hover:right-0 group-hover:opacity-100" />
                </CustomLink>
              </div>
              <P className="text-(--muted-foreground)">Notes on projects, experiments, and things I&apos;m figuring out.</P>
            </div>
            <AnimatedBorder className="ml-0 flex flex-col gap-10 sm:ml-4" lineClassName="bg-(--button-border)">
              {LATEST_POSTS.slice(0, 3).map((post, index) => (
                <VerticalReveal key={post.id} trigger="instant" startY={30} duration={1.2} delay={index * 0.12} className="block pl-6 sm:pl-8">
                  <PostCard post={post} />
                </VerticalReveal>
              ))}
            </AnimatedBorder>
          </div>
        </div>
      </div>
    </div>
  );
}
