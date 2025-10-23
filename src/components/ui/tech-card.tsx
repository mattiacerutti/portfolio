import React from "react";
import GlassPane from "./glass-pane";

interface ITechCardProps {
  name: string;
}

function TechCard(props: ITechCardProps) {
  const {name} = props;

  return <GlassPane className="px-2 py-1.5 text-xs font-semibold">{name}</GlassPane>;
}

export default TechCard;
