import ProjectsPage from "@/features/projects/pages/projects";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description: "Things I've been working on lately.",
  pathname: "/projects",
});

export default ProjectsPage;
