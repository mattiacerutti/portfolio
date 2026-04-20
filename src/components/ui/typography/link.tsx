import Link, {LinkProps} from "next/link";
import * as React from "react";
import {twMerge} from "tailwind-merge";

type ICustomLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
    underline?: boolean;
    native?: boolean;
    children: React.ReactNode;
  };

export function CustomLink(props: ICustomLinkProps) {
  const {className, children, underline = false, native = false, href, ...extraProps} = props;

  const mergedClassName = twMerge(
    "text-[var(--muted-foreground)] transition-colors duration-600 hover:text-[var(--foreground)]",
    underline && "underline decoration-[var(--muted-foreground)]/30",
    className
  );

  if (native) {
    return (
      <a {...extraProps} href={typeof href === "string" ? href : undefined} className={mergedClassName}>
        {children}
      </a>
    );
  }

  return (
    <Link {...extraProps} href={href} className={mergedClassName}>
      {children}
    </Link>
  );
}
