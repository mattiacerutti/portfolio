import {CustomLink} from "@/components/ui/typography/link";
import NavLinks from "@/features/shared/components/layout/nav-links";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-500/10 bg-(--foreground)/2 bg-clip-padding p-6 text-xl backdrop-blur-md">
      <div className="mx-auto grid max-w-4xl grid-cols-[1fr_auto] items-center gap-x-5 gap-y-0">
        <CustomLink href="/" className="group relative inline-flex w-fit items-center justify-self-start font-semibold text-(--foreground)/80">
          <span>Mattia Cerutti</span>
          <span aria-hidden className="absolute right-0 -bottom-1 left-0 h-[1.5px] w-0 rounded-full bg-(--muted-foreground)/60 transition-all duration-300 group-hover:w-full" />
        </CustomLink>
        <NavLinks />
      </div>
    </header>
  );
}
