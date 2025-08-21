import { CustomLink } from "@/components/typography/link";
import {IoChevronBack} from "react-icons/io5";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-7">
  <CustomLink
        href="/projects"
        className="underline decoration-[var(--muted-foreground)]/30 transition-colors duration-400 text-[var(--muted-foreground)] hover:text-[var(--foreground)] flex flex-row items-center"
      >
        <IoChevronBack className="inline-block mr-1" />
        Back to Projects
  </CustomLink>
      {children}
    </div>
  );
}
