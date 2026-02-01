import {CustomLink} from "@/components/ui/typography/link";
import React from "react";
import NavLinks from "@/components/nav-links";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-500/10 bg-[var(--foreground)]/2 bg-clip-padding p-6 text-xl backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl justify-between">
        <CustomLink href="/" className="group font-semibold text-[var(--foreground)]/80 transition-transform duration-300 hover:scale-101">
          <span>Mattia Cerutti</span>
          <div className="h-[1.5px] w-0 rounded-full bg-[var(--button-border)] transition-all duration-300 group-hover:w-full" />
        </CustomLink>
        <NavLinks />
      </div>
    </header>
  );
}
