import type { NextConfig } from "next";
import path from "node:path";

const pages = process.env.GITHUB_PAGES === "1";
const basePath = pages ? "/Qiskit_Fall_Fest_2026" : "";

const redirects = [
  { source: "/intro", destination: "/", permanent: false },
  { source: "/intro/:section", destination: "/", permanent: false },
  { source: "/sources", destination: "/resources/", permanent: false },
  { source: "/learn/welcome", destination: "/", permanent: false },
  { source: "/learn/setup", destination: "/account/", permanent: false },
  { source: "/learn/vocabulary", destination: "/vocabulary/", permanent: false },
  { source: "/learn/qubi", destination: "/bell/", permanent: false },
  { source: "/learn/qolour", destination: "/bell/", permanent: false },
  { source: "/learn/composer", destination: "/bell/", permanent: false },
  { source: "/learn/python", destination: "/python/", permanent: false },
  { source: "/learn/assess-build", destination: "/benchmarking/", permanent: false },
  { source: "/learn/hetionet", destination: "/hetionet/", permanent: false },
  { source: "/learn/readiness", destination: "/benchmarking/", permanent: false },
  { source: "/learn/pathway", destination: "/resources/", permanent: false },
  { source: "/charter", destination: "/benchmarking/", permanent: false },
  { source: "/challenge", destination: "/submit/", permanent: false },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(pages
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {
        async redirects() {
          return redirects;
        },
      }),
  allowedDevOrigins: ["127.0.0.1"],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
