import { readFileSync } from "node:fs";
import path from "node:path";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import { EVENT } from "@/content/event";

export const metadata = { title: `Participant handbook · ${EVENT.name}` };

export default function HandbookPage() {
  const source = readFileSync(path.join(process.cwd(), "PARTICIPANT_HANDBOOK.md"), "utf8");
  return (
    <div className="stack guide">
      <p className="kicker">Canonical document</p>
      <h1>Participant handbook</h1>
      <p className="lede">
        This page renders the participant handbook in full. Summary pages link to its headings.
      </p>
      <MarkdownDocument source={source} label="Participant handbook" />
    </div>
  );
}
