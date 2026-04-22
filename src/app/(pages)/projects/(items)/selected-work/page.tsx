import SelectedWorkPage from "@/features/projects/pages/selected-work/selected-work";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Selected Work",
  description: "Landing pages and product configurators I've built for clients. Real stuff that's actually live and being used.",
  pathname: "/projects/selected-work",
  type: "article",
});

export default SelectedWorkPage;
