const PAGES_HOST = "https://quantumkev.github.io";

export function basePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

/** Prefix a root-relative URL with the Next base path for this build. */
export function withBase(path: string) {
  if (!path.startsWith("/")) return path;
  const prefix = basePath();
  if (!prefix || path === prefix || path.startsWith(`${prefix}/`)) return path;
  return `${prefix}${path}`;
}

/** Absolute URL for a file in public/. The host stays fixed; the base path follows the build. */
export function publicAssetUrl(path: string) {
  return `${PAGES_HOST}${withBase(path)}`;
}
