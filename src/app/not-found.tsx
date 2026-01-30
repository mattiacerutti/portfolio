import H1 from "@/components/ui/typography/h1";
import H4 from "@/components/ui/typography/h4";

export const metadata = {
  title: "404 | Mattia Cerutti",
  description: "Page not found.",
  openGraph: {
    title: "404 | Mattia Cerutti",
    description: "Page not found.",
    url: "https://mattiacerutti.com/404/",
    siteName: "Mattia Cerutti Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "404 | Mattia Cerutti",
    description: "Page not found.",
  },
};

export default function NotFound() {
  return (
    <div className="absolute flex h-full flex-col items-start justify-center gap-5">
      <div className="flex flex-col items-start gap-2">
        <H1>Oops.</H1>
        <H4 className="font-normal text-[var(--muted-foreground)]">Looks like this page doesn&apos;t exist.</H4>
      </div>
    </div>
  );
}
