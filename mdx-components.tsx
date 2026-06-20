import type {MDXComponents} from "mdx/types";

import Blockquote from "@/components/ui/typography/blockquote";
import H2 from "@/components/ui/typography/h2";
import H3 from "@/components/ui/typography/h3";
import H4 from "@/components/ui/typography/h4";
import Li from "@/components/ui/typography/li";
import {CustomLink} from "@/components/ui/typography/link";
import Ol from "@/components/ui/typography/ol";
import P from "@/components/ui/typography/p";
import Ul from "@/components/ui/typography/ul";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <H2 {...props} />,
    h3: (props) => <H3 {...props} />,
    h4: (props) => <H4 {...props} />,
    p: (props) => <P {...props} />,
    ul: (props) => <Ul {...props} />,
    ol: (props) => <Ol {...props} />,
    li: (props) => <Li {...props} />,
    a: (props) => <CustomLink underline {...props} href={props.href ?? "#"} />,
    blockquote: (props) => <Blockquote {...props} />,
    code: (props) => <code className="rounded border border-(--muted-foreground)/15 bg-(--foreground)/5 px-1 py-0.5 font-mono text-sm text-(--foreground)" {...props} />,
    em: (props) => <em className="text-(--foreground)/90 italic" {...props} />,
    strong: (props) => <strong className="font-semibold text-(--foreground)" {...props} />,
    ...components,
  };
}
