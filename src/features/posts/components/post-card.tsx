"use client";

import {ViewTransition} from "react";

import {CustomLink} from "@/components/ui/typography/link";
import {formatPostDate} from "@/features/posts/data/posts";
import type {Post} from "@/features/posts/data/posts";
import {POST_DETAIL_SHARE, POST_DETAIL_TRANSITION_TYPE} from "@/lib/view-transition";

interface PostCardProps {
  post: Post;
}

export default function PostCard(props: PostCardProps) {
  const {post} = props;
  const {id, title, description, readTime, publishedAt} = post;

  return (
    <CustomLink href={`/posts/${id}`} transitionTypes={[POST_DETAIL_TRANSITION_TYPE]} className="group block">
      <article className="py-2 transition-opacity duration-200 hover:opacity-80">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-(--foreground) underline decoration-transparent underline-offset-4 transition-all duration-200 group-hover:decoration-(--muted-foreground)/40 sm:text-xl">
            <ViewTransition name={`post-title-${id}`} default="none" share={POST_DETAIL_SHARE}>
              <span className="inline-block">{title}</span>
            </ViewTransition>
          </h3>

          <p className="text-base leading-relaxed text-(--muted-foreground)">
            <ViewTransition name={`post-description-${id}`} default="none" share={POST_DETAIL_SHARE}>
              <span className="inline-block">{description}</span>
            </ViewTransition>
          </p>

          <div className="mt-2 flex items-center gap-2 text-sm text-(--muted-foreground)">
            <time dateTime={publishedAt}>{formatPostDate(publishedAt)}</time>
            <span>·</span>
            <span>{readTime} read</span>
          </div>
        </div>
      </article>
    </CustomLink>
  );
}
