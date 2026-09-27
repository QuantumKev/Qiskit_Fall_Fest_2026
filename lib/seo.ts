import type { Metadata } from "next";
import { EVENT, absoluteUrl } from "@/content/event";
import { publicAssetUrl } from "@/lib/base-path";

export function pageMeta(title: string, path: string): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description: EVENT.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${EVENT.name}`,
      description: EVENT.description,
      url,
      images: [{ url: publicAssetUrl("/brand/og-qiskit.png"), width: 816, height: 324, alt: "Qiskit wordmark from the Qiskit Fall Fest 2026 materials" }],
    },
  };
}
