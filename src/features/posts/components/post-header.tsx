import {ViewTransition} from "react";

import H2 from "@/components/ui/typography/h2";
import P from "@/components/ui/typography/p";
import {formatPostDate} from "@/features/posts/data/posts";
import type {Post} from "@/features/posts/data/posts";
import {POST_DETAIL_SHARE} from "@/lib/view-transition";

interface PostHeaderProps {
  post: Post;
}

export default function PostHeader(props: PostHeaderProps) {
  const {post} = props;
  const {id, title, description, readTime, publishedAt} = post;

  return (
    <div>
      <P className="text-base! text-(--muted-foreground)">
        <time dateTime={publishedAt}>{formatPostDate(publishedAt)}</time> · {readTime} read
      </P>
      <H2 className="inline-block">
        <ViewTransition name={`post-title-${id}`} default="none" share={POST_DETAIL_SHARE}>
          <span className="inline-block">{title}</span>
        </ViewTransition>
      </H2>
      {/* Match the list description width so the view transition keeps the same line wraps and avoids a visual glitch. */}
      <P className="mt-0.5 max-w-[calc(100%-1.5rem)] text-(--muted-foreground) sm:max-w-[calc(100%-3rem)]">
        <ViewTransition name={`post-description-${id}`} default="none" share={POST_DETAIL_SHARE}>
          <span className="inline-block">{description}</span>
        </ViewTransition>
      </P>
    </div>
  );
}
