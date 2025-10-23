import {getHighlighter} from "@/lib/highlighter";

interface ICodeProps {
  language: string;
  inline?: boolean;
  className?: string;
  children: string;
}

export default async function Code(props: ICodeProps) {
  const {language, children, className = "", inline = false} = props;

  if (typeof children !== "string") {
    throw new Error("<Code> children must be plain text");
  }

  const highlighter = await getHighlighter();

  const html = highlighter.codeToHtml(children, {
    lang: language,
    theme: "github-dark",
    transformers: [
      {
        pre(node) {
          if (inline) {
            node.tagName = "span";
          }
          // Remove background
          delete node.properties.style;
        },
        code(node) {
          // Remove background
          delete node.properties.style;
        },
      },
    ],
  });

  const Tag = inline ? "span" : "div";

  return (
    <Tag
      className={`border border-[var(--muted-foreground)]/20 bg-[var(--foreground)]/2 font-mono text-sm shadow-sm ${
        inline ? "inline-block rounded px-1 py-0.5" : "overflow-x-auto rounded p-3"
      } ${className}`}
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
}
