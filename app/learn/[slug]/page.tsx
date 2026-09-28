import { ClientRedirect } from "@/components/ClientRedirect";
import { MODULES } from "@/content/modules";

const DESTINATIONS: Record<string, string> = {
  welcome: "/",
  setup: "/account/",
  qubi: "/qolour/",
  composer: "/bell/",
  python: "/python/",
  "assess-build": "/benchmarking/",
  hetionet: "/hetionet/",
  readiness: "/benchmarking/",
  pathway: "/resources/",
};

export function generateStaticParams() {
  return MODULES.map((item) => ({ slug: item.slug }));
}

export default async function LearnPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ClientRedirect href={DESTINATIONS[slug] || "/"} />;
}
