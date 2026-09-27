import { GlossaryView } from "@/components/GlossaryView";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Glossary", "/glossary/");

export default function GlossaryPage() {
  return <GlossaryView />;
}
