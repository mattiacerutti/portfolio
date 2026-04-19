import React from "react";
import {CustomLink} from "@/components/ui/typography/link";
import Image from "next/image";
import {TbBrandGithub} from "react-icons/tb";
import {LiaLinkedinIn} from "react-icons/lia";

export default function Hero() {
  return (
    <header className="w-full px-6 pt-28 pb-16 sm:px-10 sm:pt-32 sm:pb-20">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">Mattia Cerutti</h1>

          <p className="mt-4 text-lg leading-relaxed text-[var(--muted-foreground)]">
            21yo swe @{" "}
            <CustomLink
              href="https://aws.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--foreground)] underline decoration-[var(--muted-foreground)]/30 underline-offset-4"
            >
              AWS
            </CustomLink>{" "}
            building{" "}
            <CustomLink href="/projects/" className="font-semibold text-[var(--foreground)] underline decoration-[var(--muted-foreground)]/30 underline-offset-4">
              cool stuff
            </CustomLink>
            . I enjoy shipping products that solve real problems, learning new technologies along the way, and occasionally writing about what I build.
          </p>

          <div className="mt-6 flex items-center gap-6 text-base font-semibold">
            <CustomLink
              href="https://github.com/mattiacerutti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="flex items-center gap-2 text-[var(--foreground)] transition-opacity hover:opacity-60"
            >
              <TbBrandGithub className="h-5 w-5" />
              GitHub
            </CustomLink>
            <CustomLink
              href="https://www.linkedin.com/in/mattiacerutti/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="flex items-center gap-2 text-[var(--foreground)] transition-opacity hover:opacity-60"
            >
              <LiaLinkedinIn className="h-5 w-5" />
              LinkedIn
            </CustomLink>
          </div>
        </div>

        <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full border-2 border-[var(--button-border)] sm:h-32 sm:w-32">
          <Image src="/face.png" alt="Mattia Cerutti" fill className="object-cover" priority />
        </div>
      </div>
    </header>
  );
}
