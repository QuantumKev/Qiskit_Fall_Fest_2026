import { ClientRedirect } from "@/components/ClientRedirect";
import { INTRO_SECTIONS } from "@/content/intro";

const DESTINATIONS: Record<string, string> = {
  welcome: "/",
  prepare: "/account/",
  language: "/python/",
  execution: "/workflow/",
  vocabulary: "/vocabulary/",
  "qubi-demo": "/vocabulary/",
  bell: "/bell/",
  practice: "/python/",
  "next-step": "/resources/",
  hackathon: "/",
  qml: "/problem/",
  hetionet: "/hetionet/",
};

export function generateStaticParams() {
  return INTRO_SECTIONS.map((item) => ({ section: item.slug }));
}

export default async function IntroSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  return <ClientRedirect href={DESTINATIONS[section] || "/"} />;
}
