import ProjectHeader from "@/features/projects/components/project-header";
import ProjectRelatedPosts from "@/features/projects/components/project-related-posts";
import {getProjectById} from "@/features/projects/data/projects";
import SelectedWorkContent from "@/features/projects/pages/selected-work/selected-work.mdx";

export default function SelectedWorkPage() {
  const project = getProjectById("selected-work");

  return (
    <div className="flex flex-col gap-10">
      <ProjectHeader project={project} />
      <SelectedWorkContent />
      <ProjectRelatedPosts projectId={project.id} />
    </div>
  );
}
