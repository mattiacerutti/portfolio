"use client";

import React, {useLayoutEffect} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navRef = React.useRef<HTMLDivElement | null>(null);
  const workRef = React.useRef<HTMLAnchorElement | null>(null);
  const projectsRef = React.useRef<HTMLAnchorElement | null>(null);

  const [indicator, setIndicator] = React.useState<{left: number; width: number; visible: boolean}>({
    left: 0,
    width: 0,
    visible: false,
  });

  useLayoutEffect(() => {
    const activeEl = isActive("/work") ? workRef.current : isActive("/projects") ? projectsRef.current : null;
    const navEl = navRef.current;

    if (!navEl || !activeEl) {
      setIndicator((prev) => ({...prev, visible: false}));
      return;
    }

    const measure = () => {
      const navRect = navEl.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      const left = linkRect.left - navRect.left;
      const width = linkRect.width;
      return {left, width};
    };

    const {left, width} = measure();
    const wasVisible = indicator.visible;

    if (!wasVisible) {
      setIndicator({left, width, visible: false});
      const rafShow = requestAnimationFrame(() => {
        setIndicator((prev) => ({...prev, visible: true}));
      });
      const onResize = () => {
        const m = measure();
        setIndicator((prev) => ({...prev, ...m}));
      };
      window.addEventListener("resize", onResize);
      return () => {
        cancelAnimationFrame(rafShow);
        window.removeEventListener("resize", onResize);
      };
    }

    setIndicator({left, width, visible: true});
    const onResize = () => {
      const m = measure();
      setIndicator((prev) => ({...prev, ...m}));
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div ref={navRef} className="relative flex items-center gap-3 font-light decoration-[var(--muted-foreground)]/30">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-1 h-0.5 rounded bg-[var(--foreground)] will-change-transform"
        style={{
          transform: `translateX(${indicator.left}px)`,
          width: indicator.width,
          opacity: indicator.visible ? 1 : 0,
          transitionProperty: indicator.visible ? "transform,width,opacity" : "opacity",
          transitionDuration: indicator.visible ? "300ms" : "200ms",
          transitionTimingFunction: "ease-out",
        }}
      />

      <Link
        href="/work"
        ref={workRef}
        aria-current={isActive("/work") ? "page" : undefined}
        className={`transition-colors duration-600 ${isActive("/work") ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
      >
        work
      </Link>
      <Link
        href="/projects"
        ref={projectsRef}
        aria-current={isActive("/projects") ? "page" : undefined}
        className={`transition-colors duration-600 ${isActive("/projects") ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
      >
        projects
      </Link>
    </div>
  );
}
