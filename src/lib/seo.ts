import type {Metadata} from "next";

export const SITE_URL = "https://mattiacerutti.com";
export const SITE_NAME = "Mattia Cerutti";
export const DEFAULT_TITLE = "Mattia Cerutti - Software Engineer";
export const DEFAULT_DESCRIPTION = "Software Engineer with 4+ years of experience, building cool stuff and sharing my work.";

const normalizePath = (pathname: string) => {
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
};

export const absoluteUrl = (pathname: string) => new URL(normalizePath(pathname), SITE_URL).toString();

interface IPageMetadataInput {
  title: string;
  description: string;
  pathname: string;
  type?: "website" | "article";
  keywords?: string[];
}

export function createPageMetadata({title, description, pathname, type = "website", keywords}: IPageMetadataInput): Metadata {
  const url = absoluteUrl(pathname);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
