"use client";

import {ViewTransition} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

const ACTIVE_NAV_INDICATOR = "nav-active-link-indicator";

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="flex items-center gap-3 decoration-(--muted-foreground)/30">
      <Link
        href="/work"
        aria-current={isActive("/work") ? "page" : undefined}
        className={`relative transition-colors duration-600 ${isActive("/work") ? "text-(--foreground)" : "text-(--muted-foreground) hover:text-(--foreground)"}`}
      >
        work
        {isActive("/work") && (
          <ViewTransition name={ACTIVE_NAV_INDICATOR}>
            <span aria-hidden className="pointer-events-none absolute right-0 -bottom-1 left-0 h-0.5 rounded bg-(--foreground)" />
          </ViewTransition>
        )}
      </Link>
      <Link
        href="/projects"
        aria-current={isActive("/projects") ? "page" : undefined}
        className={`relative transition-colors duration-600 ${isActive("/projects") ? "text-(--foreground)" : "text-(--muted-foreground) hover:text-(--foreground)"}`}
      >
        projects
        {isActive("/projects") && (
          <ViewTransition name={ACTIVE_NAV_INDICATOR}>
            <span aria-hidden className="pointer-events-none absolute right-0 -bottom-1 left-0 h-0.5 rounded bg-(--foreground)" />
          </ViewTransition>
        )}
      </Link>
    </div>
  );
}
