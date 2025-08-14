import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-8 py-6 text-xl border-b bg-[var(--background)]/5 border-gray-500/10 backdrop-blur-md">
      <div className="flex justify-between max-w-5xl mx-auto">
        <Link href="/" className="font-semibold transition-colors duration-400 text-[var(--link-text)] hover:text-[var(--link-hover)]">
          @mattcer
        </Link>
        <div className="flex items-center gap-3 font-light underline decoration-[var(--link-text)]/30">
          <Link href="/work" className="transition-colors duration-400 text-[var(--link-text)] hover:text-[var(--link-hover)]">
            work
          </Link>
          <Link href="/projects" className="transition-colors duration-400 text-[var(--link-text)] hover:text-[var(--link-hover)]">
            projects
          </Link>
        </div>
      </div>
    </header>
  );
}
