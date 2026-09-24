import { notFound } from "next/navigation";
import { ModuleView } from "@/components/ModuleView";
import { MODULES, moduleBySlug } from "@/content/modules";

export function generateStaticParams() {
  return MODULES.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const current = moduleBySlug(slug);
  return { title: current ? `${current.title} · Qiskit Fall Fest` : "Qiskit Fall Fest" };
}

export default async function LearnPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const current = moduleBySlug(slug);
  if (!current) notFound();
  return <ModuleView module={current} />;
}
