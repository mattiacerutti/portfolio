import { CustomLink } from "@/components/typography/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-8 py-6 text-xl border-b bg-[var(--foreground)]/2 border-gray-500/10 bg-clip-padding backdrop-filter backdrop-blur-md">
      <div className="flex justify-between max-w-5xl mx-auto">
  <CustomLink href="/" className="font-semibold">
          Mattia Cerutti
  </CustomLink>
        <div className="flex items-center gap-3 font-light underline decoration-[var(--muted-foreground)]/30">
          <CustomLink href="/work">
            work
          </CustomLink>
          <CustomLink href="/projects">
            projects
          </CustomLink>
        </div>
      </div>
    </header>
  );
}
