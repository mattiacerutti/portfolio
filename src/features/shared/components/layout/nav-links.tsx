"use client";

import {ViewTransition, useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

const ACTIVE_NAV_INDICATOR = "nav-active-link-indicator";

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  {href: "/work", label: "work"},
  {href: "/projects", label: "projects"},
  {href: "/posts", label: "posts"},
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleToggle = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={handleToggle}
        className="flex h-6 w-5 items-center justify-center text-(--foreground) sm:hidden"
      >
        <span className="relative h-3.5 w-5">
          <span className={`absolute top-0 right-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`absolute top-[6px] right-0 h-0.5 w-4 rounded-full bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute right-0 bottom-0 h-0.5 rounded-full bg-current transition-all duration-300 ${isOpen ? "w-5 -translate-y-[6px] -rotate-45" : "w-3"}`} />
        </span>
      </button>

      <nav className="hidden items-center gap-3 decoration-(--muted-foreground)/30 sm:flex">
        {NAV_ITEMS.map((item, index) => (
          <NavLink key={item.href} href={item.href} label={item.label} isActive={isActive(item.href)} showDivider={index < NAV_ITEMS.length - 1} />
        ))}
      </nav>

      <nav
        className={`col-span-2 grid overflow-hidden text-center text-xl transition-all duration-300 ease-out sm:hidden ${
          isOpen ? "grid-rows-[1fr] pt-5 opacity-100" : "grid-rows-[0fr] pt-0 opacity-0"
        }`}
      >
        <div className="flex min-h-0 flex-col items-center gap-4 overflow-hidden pb-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={handleClose}
                className={`relative transition-colors duration-300 ${active ? "text-(--foreground)" : "text-(--muted-foreground) hover:text-(--foreground)"}`}
              >
                {item.label}
                {active && <span aria-hidden className="pointer-events-none absolute right-0 -bottom-1 left-0 h-0.5 rounded bg-(--foreground)" />}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  showDivider: boolean;
}

function NavLink(props: NavLinkProps) {
  const {href, label, isActive, showDivider} = props;

  return (
    <>
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={`relative transition-colors duration-600 ${isActive ? "text-(--foreground)" : "text-(--muted-foreground) hover:text-(--foreground)"}`}
      >
        {label}
        {isActive && (
          <ViewTransition name={ACTIVE_NAV_INDICATOR}>
            <span aria-hidden className="pointer-events-none absolute right-0 -bottom-1 left-0 h-0.5 rounded bg-(--foreground)" />
          </ViewTransition>
        )}
      </Link>
      {showDivider && <span aria-hidden className="text-(--muted-foreground)/50">/</span>}
    </>
  );
}
