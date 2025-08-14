import React from "react";

type H2Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function H2({children, className = "", ...props}: H2Props) {
  return (
    <h2 className={`text-4xl scroll-m-20 font-semibold tracking-tight ${className}`} {...props}>
      {children}
    </h2>
  );
}
