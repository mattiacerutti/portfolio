import WorkPage from "@/features/work/pages/work";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Work",
  description: "My work experience and career so far.",
  pathname: "/work",
});

export default WorkPage;
