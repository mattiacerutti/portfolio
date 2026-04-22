import SelectedWorkContent from "@/features/projects/pages/selected-work/selected-work.mdx";
import ProjectHeader from "@/features/projects/components/project-header";
import {getProjectById} from "@/features/projects/data/projects";

export default function SelectedWorkPage() {
  const project = getProjectById("selected-work");

  return (
    <div className="flex flex-col gap-10">
      <ProjectHeader project={project} />
      <SelectedWorkContent />
    </div>
  );
}
