import Link, {LinkProps} from "next/link";
import * as React from "react";

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
      className={`transition-colors duration-600 text-[var(--muted-foreground)] hover:text-[var(--foreground)] ${className} ${
        underline && "underline decoration-[var(--muted-foreground)]/30"
      } `}
    >
      {children}
    </Link>
  );
}
