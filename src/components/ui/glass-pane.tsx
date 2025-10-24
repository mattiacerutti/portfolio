import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
}

function GlassPane(props: IButtonProps) {
  const {children, className} = props;
  return (
    <div className={`rounded-lg bg-[var(--button-bg)] text-[var(--button-text)] shadow-[inset_0_0_0_1.5px_var(--button-border)] backdrop-blur-md ${className} }`}>{children}</div>
  );
}

export default GlassPane;
