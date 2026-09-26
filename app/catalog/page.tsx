import { readFileSync } from "node:fs";
import path from "node:path";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import { EVENT } from "@/content/event";

export const metadata = { title: `Notebook catalog · ${EVENT.name}` };

export default function CatalogPage() {
  const source = readFileSync(path.join(process.cwd(), "NOTEBOOK-CATALOG.md"), "utf8");
  return (
    <div className="stack guide">
      <p className="kicker">Canonical document</p>
      <h1>Resources and notebook catalog</h1>
      <p className="lede">This page renders NOTEBOOK-CATALOG.md. It is the annotated list. The resource page points here instead of copying it.</p>
      <MarkdownDocument source={source} label="Notebook catalog" />
    </div>
  );
}
