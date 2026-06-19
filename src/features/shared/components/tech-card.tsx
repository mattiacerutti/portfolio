import GlassPane from "@/components/ui/glass-pane";

interface TechCardProps {
  name: string;
}

function TechCard(props: TechCardProps) {
  const {name} = props;

  return <GlassPane className="px-2 py-1.5 text-xs font-semibold">{name}</GlassPane>;
}

export default TechCard;
