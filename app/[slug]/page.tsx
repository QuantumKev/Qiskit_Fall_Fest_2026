import { notFound } from "next/navigation";
import { OnboardingView } from "@/components/OnboardingView";
import { PAGES, pageBySlug } from "@/content/onboarding";

export function generateStaticParams() {
  return PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug(slug);
  return { title: page ? `${page.title} · Qiskit Fall Fest` : "Qiskit Fall Fest" };
}

export default async function OnboardingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug(slug);
  if (!page) notFound();
  return <OnboardingView page={page} />;
}
