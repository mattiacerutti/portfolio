import CodeTyperPage from "@/features/projects/pages/code-typer/code-typer";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Code Typer",
  description: "Code typing game for developers. Practice real syntax, not lorem ipsum.",
  pathname: "/projects/code-typer",
});

export default CodeTyperPage;
