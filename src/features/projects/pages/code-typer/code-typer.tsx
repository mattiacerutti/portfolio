import ProjectHeader from "@/features/projects/components/project-header";
import {getProjectById} from "@/features/projects/data/projects";
import CodeTyperContent from "@/features/projects/pages/code-typer/code-typer.mdx";

export default function CodeTyperPage() {
  const project = getProjectById("code-typer");

  return (
    <div className="flex flex-col gap-8">
      <ProjectHeader project={project} />
      <CodeTyperContent />
    </div>
  );
}
