import H3 from "@/components/ui/typography/h3";
import P from "@/components/ui/typography/p";
import type {IWorkItem} from "@/features/projects/components/selected-work/work-item-card";
import WorkItemCard from "@/features/projects/components/selected-work/work-item-card";
import ProjectMdxSection from "@/features/projects/components/project-mdx-section";

interface ISelectedWorkGridProps {
  delay: number;
  title: string;
  description: string;
  items: IWorkItem[];
}

export default function SelectedWorkGrid(props: ISelectedWorkGridProps) {
  const {delay, title, description, items} = props;

  return (
    <ProjectMdxSection delay={delay} contentClassName="gap-6">
      <div className="flex flex-col gap-1">
        <H3>{title}</H3>
        <P className="text-sm text-(--muted-foreground)">{description}</P>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <WorkItemCard key={item.name} item={item} />
        ))}
      </div>
    </ProjectMdxSection>
  );
}
