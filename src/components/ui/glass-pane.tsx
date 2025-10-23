import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
}

function GlassPane(props: IButtonProps) {
  const {children, className} = props;
  return (
    <div
      className={`text-[var(--button-text)] bg-[var(--button-bg)] shadow-[inset_0_0_0_1.5px_var(--button-border)] rounded-lg transition-colors duration-300 backdrop-blur-md ${className}
      }`}
    >
      {children}
    </div>
  );
}

export default GlassPane;
