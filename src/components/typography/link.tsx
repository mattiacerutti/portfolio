import Link, { LinkProps } from "next/link";
import * as React from "react";

type ICustomLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
    underline?: boolean;
    children: React.ReactNode;
  };

export function CustomLink({
  className,
  children,
  underline = false,
  ...extraProps
}: ICustomLinkProps) {
  return (
    <Link
      {...extraProps}
      className={`transition-colors duration-400 text-[var(--muted-foreground)] hover:text-[var(--foreground)] ${
        underline ? "underline decoration-[var(--muted-foreground)]/30" : ""
      } ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
