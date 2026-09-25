import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/intro/composer", destination: "/intro/bell", permanent: false },
      { source: "/intro/python", destination: "/intro/bell", permanent: false },
      { source: "/intro/trace", destination: "/intro/bell", permanent: false },
    ];
  },
  allowedDevOrigins: ["127.0.0.1"],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
