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
      className={`text-[var(--muted-foreground)] transition-colors duration-600 hover:text-[var(--foreground)] ${className} ${
        underline && "underline decoration-[var(--muted-foreground)]/30"
      } `}
    >
      {children}
    </Link>
  );
}
