import React from "react";

type H1Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function H1({children, className = "", ...props}: H1Props) {
  return (
    <h1 className={`scroll-m-20 text-5xl font-extrabold tracking-tight text-balance ${className}`} {...props}>
      {children}
    </h1>
  );
}
