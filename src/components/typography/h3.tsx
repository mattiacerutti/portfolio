import React from "react";

type H3Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function H3({children, className = "", ...props}: H3Props) {
  return (
    <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  );
}
