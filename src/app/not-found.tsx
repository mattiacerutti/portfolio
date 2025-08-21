export const metadata = {
    title: "404 | Mattia Cerutti",
    description: "Page not found on Mattia Cerutti's portfolio.",
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
import H2 from "@/components/typography/h2";
import H4 from "@/components/typography/h4";
import P from "@/components/typography/p";
import { CustomLink } from "@/components/typography/link";

export default function NotFound() {
    return (
        <div className="absolute flex flex-col items-center justify-center h-full gap-3">
            <div className="flex flex-col items-start">
                <H2>Hmmm..</H2>
                <H4 className="!font-normal">Looks like this page doesn&apos;t exist.</H4>
            </div>
            <P className="!font-normal"><CustomLink href="/" underline>Go to home</CustomLink></P>
        </div>
    )
}
