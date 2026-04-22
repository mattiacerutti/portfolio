import CodeTyperPage from "@/features/projects/pages/code-typer/code-typer";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Code Typer",
  description: "A closer look at Code Typer, what it does, how I built it.",
  pathname: "/projects/code-typer",
  type: "article",
});

export default CodeTyperPage;
