import { readFileSync } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import { OnboardingView } from "@/components/OnboardingView";
import { EVENT } from "@/content/event";
import { PAGES, pageBySlug } from "@/content/onboarding";

export function generateStaticParams() {
  return PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug(slug);
  return { title: page ? `${page.title} · ${EVENT.name}` : EVENT.name };
}

export default async function OnboardingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug(slug);
  if (!page) notFound();
  const domain =
    slug === "roles" ? (
      <MarkdownDocument
        source={readFileSync(path.join(process.cwd(), "NON-TECHNICAL-TRACK.md"), "utf8")}
        label="Domain track"
      />
    ) : null;
  return <OnboardingView page={page}>{domain}</OnboardingView>;
}
