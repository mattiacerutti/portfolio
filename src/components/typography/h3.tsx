import React from "react";

type H3Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function H3({ children, className = "", ...props }: H3Props) {
  return (
    <h3 className={`text-2xl scroll-m-20 font-semibold tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  );
}
