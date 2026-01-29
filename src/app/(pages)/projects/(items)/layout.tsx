import {CustomLink} from "@/components/typography/link";
import {IoChevronBack} from "react-icons/io5";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-7">
      <CustomLink href="/projects/" className="flex flex-row items-center underline decoration-[var(--muted-foreground)]/30">
        <IoChevronBack className="mr-1 inline-block" />
        All Projects
      </CustomLink>
      {children}
    </div>
  );
}
