import Link, {LinkProps} from "next/link";
import * as React from "react";
import {twMerge} from "tailwind-merge";

type ICustomLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
    underline?: boolean;
    children: React.ReactNode;
  };

export function CustomLink(props: ICustomLinkProps) {
  const {className, children, underline = false, ...extraProps} = props;
  return (
    <Link
      {...extraProps}
      className={twMerge(
        "text-[var(--muted-foreground)] transition-colors duration-600 hover:text-[var(--foreground)]",
        underline && "underline decoration-[var(--muted-foreground)]/30",
        className
      )}
    >
      {children}
    </Link>
  );
}
