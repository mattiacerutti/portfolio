import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: true,
    viewTransition: true,
  },
  output: "export",
  images: {unoptimized: true},
  trailingSlash: true,
};

export default nextConfig;
