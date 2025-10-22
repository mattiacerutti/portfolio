import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

function Button(props: IButtonProps) {
  const {children, className, hover = true} = props;
  return (
    <div
      className={`text-[var(--button-text)] bg-[var(--button-bg)] shadow-[inset_0_0_0_1.5px_var(--button-border)] flex items-center justify-center rounded-lg ${
        hover && "hover:bg-[var(--button-hover-bg)] hover:text-[var(--button-hover-text)]"
      } transition-colors duration-100 ${className}`}
    >
      {children}
    </div>
  );
}

export default Button;
