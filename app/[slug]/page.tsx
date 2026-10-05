import { readFileSync } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { JudgingRubric } from "@/components/JudgingRubric";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import { OnboardingView } from "@/components/OnboardingView";
import { PAGES, pageBySlug } from "@/content/onboarding";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug(slug);
  return page ? pageMeta(page.title, page.href) : {};
}

export default async function OnboardingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug(slug);
  if (!page) notFound();
  const domain =
    slug === "roles" ? (
      <MarkdownDocument
        source={readFileSync(path.join(process.cwd(), "NON-TECHNICAL-TRACK.md"), "utf8")}
        label="Domain/Industry Expert and Builder/Developer Expert"
      />
    ) : null;
  const rubric = slug === "submit" ? <JudgingRubric /> : null;
  return (
    <OnboardingView page={page}>
      {domain}
      {rubric}
    </OnboardingView>
  );
}
