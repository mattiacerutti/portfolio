import H1 from "@/components/typography/h1";
import H4 from "@/components/typography/h4";
import {CustomLink} from "@/components/typography/link";
import Button from "@/components/ui/button";

export const metadata = {
  title: "404 | Mattia Cerutti",
  description: "Page not found.",
  openGraph: {
    title: "404 | Mattia Cerutti",
    description: "Page not found.",
    url: "https://mattiacerutti.com/404",
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
    <div className="absolute flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-start">
        <H1>Hmmm..</H1>
        <H4 className="!font-normal">Looks like this page doesn&apos;t exist.</H4>
      </div>
      <CustomLink href="/">
        <Button className="px-4 py-2">Go back home</Button>
      </CustomLink>
    </div>
  );
}
