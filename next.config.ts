import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  output: "export",
   images: { unoptimized: true }, 
};

export default nextConfig;
