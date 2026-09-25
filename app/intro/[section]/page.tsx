import { notFound } from "next/navigation";
import { IntroView } from "@/components/IntroView";
import { INTRO_SECTIONS, introSection, type IntroSlug } from "@/content/intro";

export function generateStaticParams() {
  return INTRO_SECTIONS.map((item) => ({ section: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const current = introSection(section);
  return { title: current ? `${current.title} · Introduction to Qiskit` : "Introduction to Qiskit" };
}

export default async function IntroSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const current = introSection(section);
  if (!current) notFound();
  return <IntroView slug={current.slug as IntroSlug} />;
}
