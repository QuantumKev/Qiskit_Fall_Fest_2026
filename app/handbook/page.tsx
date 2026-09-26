import { readFileSync } from "node:fs";
import path from "node:path";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import { EVENT, HANDBOOK_BLOB, HANDBOOK_RAW } from "@/content/event";

export const metadata = { title: `Participant handbook · ${EVENT.name}` };

export default function HandbookPage() {
  const source = readFileSync(path.join(process.cwd(), "PARTICIPANT_HANDBOOK.md"), "utf8");
  return (
    <div className="stack guide">
      <p className="kicker">Canonical document</p>
      <h1>Participant handbook</h1>
      <p className="lede">
        This page renders PARTICIPANT_HANDBOOK.md. The summary pages link to its headings. The file on GitHub is the same text.
      </p>
      <p>
        <a href={HANDBOOK_BLOB} target="_blank" rel="noopener noreferrer external">
          View the Markdown on GitHub
          <span className="external-mark"> (external)</span>
        </a>
        {" · "}
        <a href={HANDBOOK_RAW} target="_blank" rel="noopener noreferrer external">
          Raw Markdown
          <span className="external-mark"> (external)</span>
        </a>
      </p>
      <MarkdownDocument source={source} label="Participant handbook" />
    </div>
  );
}
