import type {PropsWithChildren} from "react";

import MdxSection from "@/features/shared/components/mdx-section";

interface PostMdxSectionProps {
  delay: number;
  className?: string;
  contentClassName?: string;
}

export default function PostMdxSection(props: PropsWithChildren<PostMdxSectionProps>) {
  return <MdxSection {...props} />;
}
