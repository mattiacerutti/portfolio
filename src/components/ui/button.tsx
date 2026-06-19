import React from "react";
import GlassPane from "@/components/ui/glass-pane";
import {twMerge} from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

function Button(props: ButtonProps) {
  const {children, className} = props;
  return (
    <GlassPane className={twMerge("cursor-pointer transition-colors duration-300 hover:bg-(--button-hover-bg) hover:text-(--button-hover-text)", className)}>{children}</GlassPane>
  );
}

export default Button;
