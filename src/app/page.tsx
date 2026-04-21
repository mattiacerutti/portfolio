import HomePage from "@/features/home/pages/home";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Mattia Cerutti",
  description: "Software Engineer with 4+ years of experience, building cool stuff and sharing my work.",
  pathname: "/",
  keywords: ["Mattia Cerutti", "Software Engineer", "Portfolio", "Fullstack Developer", "Cerutti"],
});

export default HomePage;
