import { readFileSync } from "node:fs";
import path from "node:path";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import { EVENT } from "@/content/event";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Participant handbook", "/handbook/");

export default function HandbookPage() {
  const source = readFileSync(path.join(process.cwd(), "PARTICIPANT_HANDBOOK.md"), "utf8");
  return (
    <div className="stack guide">
      <p className="kicker">For Participants</p>
      <h1>Participant Handbook — {EVENT.name}</h1>
      <p className="lede">
        This page renders the participant handbook in full. Summary pages link to its headings.
      </p>
      <MarkdownDocument source={source} label="Participant handbook" />
    </div>
  );
}
