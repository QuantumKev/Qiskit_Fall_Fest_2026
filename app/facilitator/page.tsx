import { readFileSync } from "node:fs";
import path from "node:path";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import { EVENT } from "@/content/event";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Facilitator guide", "/facilitator/");

export default function FacilitatorPage() {
  const source = readFileSync(path.join(process.cwd(), "FACILITATOR_GUIDE.md"), "utf8");
  return (
    <div className="stack guide">
      <p className="kicker">For Facilitators and Local Hosts</p>
      <h1>Facilitator Guide — {EVENT.name}</h1>
      <p className="lede">
        A public run-of-show for instructors, co-hosts, and university leads. Participant instructions stay on the participant pages.
      </p>
      <MarkdownDocument source={source} label="Facilitator guide" />
    </div>
  );
}
