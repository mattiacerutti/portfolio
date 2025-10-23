import {createHighlighter} from "shiki";

let highlighter: Awaited<ReturnType<typeof createHighlighter>>;

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-dark", "dracula"],
      langs: ["ts"],
    });
  }
  return highlighter;
}
