import {CustomLink} from "@/components/typography/link";
import React from "react";
import NavLinks from "@/components/nav-links";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full p-6 text-xl border-b bg-[var(--foreground)]/2 border-gray-500/10 bg-clip-padding backdrop-blur-md">
      <div className="flex justify-between max-w-4xl mx-auto">
        <CustomLink href="/" className="font-semibold !text-[var(--foreground)]/80">
          Mattia Cerutti
        </CustomLink>
        <NavLinks />
      </div>
    </header>
  );
}
