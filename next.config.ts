import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/intro", destination: "/", permanent: false },
      { source: "/intro/:section", destination: "/", permanent: false },
      { source: "/sources", destination: "/resources", permanent: false },
      { source: "/learn/welcome", destination: "/", permanent: false },
      { source: "/learn/setup", destination: "/account", permanent: false },
      { source: "/learn/vocabulary", destination: "/glossary", permanent: false },
      { source: "/learn/qubi", destination: "/bell", permanent: false },
      { source: "/learn/qolour", destination: "/bell", permanent: false },
      { source: "/learn/composer", destination: "/bell", permanent: false },
      { source: "/learn/python", destination: "/python", permanent: false },
      { source: "/learn/assess-build", destination: "/charter", permanent: false },
      { source: "/learn/hetionet", destination: "/hetionet", permanent: false },
      { source: "/learn/readiness", destination: "/charter", permanent: false },
      { source: "/learn/pathway", destination: "/resources", permanent: false },
    ];
  },
  allowedDevOrigins: ["127.0.0.1"],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
