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
