import HomePage from "@/features/home/pages/home";
import {createPageMetadata, DEFAULT_DESCRIPTION} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Mattia Cerutti",
  description: DEFAULT_DESCRIPTION,
  pathname: "/",
  keywords: ["Mattia Cerutti", "Software Engineer", "Portfolio", "Fullstack Developer", "Cerutti"],
});

export default HomePage;
