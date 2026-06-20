import Link, {LinkProps} from "next/link";
import * as React from "react";
import {twMerge} from "tailwind-merge";

type CustomLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
    underline?: boolean;
    children: React.ReactNode;
  };

export function CustomLink(props: CustomLinkProps) {
  const {className, children, underline = false, href, ...extraProps} = props;

  return (
    <Link
      {...extraProps}
      href={href}
      className={twMerge(
        "text-(--muted-foreground) transition-colors duration-600 hover:text-(--foreground)",
        underline && "underline decoration-(--muted-foreground)/60",
        className
      )}
    >
      {children}
    </Link>
  );
}
