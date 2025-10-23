import {CustomLink} from "@/components/typography/link";
import React from "react";
import NavLinks from "@/components/nav-links";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-500/10 bg-[var(--foreground)]/2 bg-clip-padding p-6 text-xl backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl justify-between">
        <CustomLink href="/" className="font-semibold !text-[var(--foreground)]/80">
          Mattia Cerutti
        </CustomLink>
        <NavLinks />
      </div>
    </header>
  );
}
