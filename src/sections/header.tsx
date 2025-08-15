import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-8 py-6 text-xl border-b bg-[var(--foreground)]/2 border-gray-500/10 bg-clip-padding backdrop-filter backdrop-blur-md">
      <div className="flex justify-between max-w-5xl mx-auto">
        <Link href="/" className="font-semibold transition-colors duration-400 text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
          Mattia Cerutti
        </Link>
        <div className="flex items-center gap-3 font-light underline decoration-[var(--muted-foreground)]/30">
          <Link href="/work" className="transition-colors duration-400 text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
            work
          </Link>
          <Link href="/projects" className="transition-colors duration-400 text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
            projects
          </Link>
        </div>
      </div>
    </header>
  );
}
