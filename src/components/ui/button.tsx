import React from "react";
import GlassPane from "./glass-pane";

interface IButtonProps {
  children?: React.ReactNode;
  className?: string;
}

function Button(props: IButtonProps) {
  const {children, className} = props;
  return (
    <GlassPane className={`cursor-pointer transition-colors duration-300 hover:bg-[var(--button-hover-bg)] hover:text-[var(--button-hover-text)] ${className}`}>
      {children}
    </GlassPane>
  );
}

export default Button;
