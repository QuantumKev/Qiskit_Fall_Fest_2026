import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const files = ["PARTICIPANT_HANDBOOK.md", "NON-TECHNICAL-TRACK.md", "NOTEBOOK-CATALOG.md"].map((name) =>
  readFileSync(new URL(`../${name}`, import.meta.url), "utf8"),
);

test("canonical documents use the Florida Fallfest facts and drop organizer leftovers", () => {
  const joined = files.join("\n");
  assert.match(joined, /Florida Qiskit Fallfest Hackathon/);
  assert.match(joined, /October 1, 2026/);
  assert.match(joined, /October 17–18, 2026/);
  assert.match(joined, /kevin@quantumglobalgroup\.io/);
  assert.match(joined, /grant@deepstation\.ai/);
  assert.match(joined, /atorre58@fau\.edu/);
  assert.match(joined, /rloredo2026@fau\.edu/);
  assert.match(joined, /Robert Loredo, rloredo2026@fau\.edu/);
  assert.doesNotMatch(joined, /Robert Loredo is the lead\. Kevin Robinson, Grant Kurz, and Ayse Torres are co-leads\./);
  assert.match(joined, /https:\/\/entangledsolutionsgroup\.com\/Qiskit-Fall-Fest-2026\//);
  assert.doesNotMatch(joined, /is the organizer/);
  assert.doesNotMatch(joined, /sponsorship and team lead/);
  assert.match(joined, /StatevectorSampler/);
  assert.doesNotMatch(joined, /October 5|Oct 5/);
  assert.doesNotMatch(joined, /\{\{/);
  assert.doesNotMatch(joined, /classroom account/i);
  assert.doesNotMatch(joined, /channel="local"/);
  assert.doesNotMatch(joined, /gmail/i);
  assert.doesNotMatch(joined, /FAU Qiskit Fall Fest/);
  assert.doesNotMatch(joined, /has loaners/);
});

function sourceFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(full);
    if (/\.(tsx?|mjs|jsx?)$/.test(entry.name)) return [full];
    return [];
  });
}

test("visitor pages do not link to private handbook files on GitHub", () => {
  const root = fileURLToPath(new URL("..", import.meta.url));
  const sources = ["app", "components", "content", "lib"].flatMap((dir) =>
    sourceFiles(path.join(root, dir)),
  );
  const joined = sources.map((file) => readFileSync(file, "utf8")).join("\n");
  assert.doesNotMatch(joined, /raw\.githubusercontent\.com/);
  assert.doesNotMatch(joined, /\/blob\/[^"'`\s]*PARTICIPANT_HANDBOOK\.md/);
  assert.doesNotMatch(joined, /\/blob\/[^"'`\s]*NON-TECHNICAL-TRACK\.md/);
  assert.doesNotMatch(joined, /\/blob\/[^"'`\s]*NOTEBOOK-CATALOG\.md/);
  assert.doesNotMatch(joined, /Handbook Markdown on GitHub|View the Markdown on GitHub|Raw Markdown/);
  assert.match(joined, /\/handbook\//);
  assert.match(joined, /\/roles\//);
  assert.match(joined, /\/catalog\//);
});

test("the home lockup shows the IBM Quantum wordmark and the Fall Fest badge", () => {
  const view = readFileSync(new URL("../components/OnboardingView.tsx", import.meta.url), "utf8");
  assert.match(view, /withBase\("\/brand\/IBM_Quantum_logotype_cover\.jpg"\)/);
  assert.match(view, /width=\{3903\}/);
  assert.match(view, /height=\{1500\}/);
  assert.match(view, /alt="IBM Quantum"/);
  assert.doesNotMatch(view, /Space reserved/);
  assert.doesNotMatch(view, /IBM_Quantum_logotype_rev/);
  assert.doesNotMatch(view, /qiskit_white\.svg/);
  assert.doesNotMatch(view, /stickers\/cloud\.svg/);
  assert.doesNotMatch(view, /stickers\/theme-magenta\.svg/);
  assert.match(view, /badge-black-circular-qiskit-fall-fest-2026\.png/);
  assert.match(view, /width=\{318\}/);
  assert.match(view, /height=\{318\}/);
  assert.match(view, /alt="Qiskit Fall Fest 2026"/);
  assert.doesNotMatch(view, /hero-birds-qiskit-fall-fest-2026/);
  assert.doesNotMatch(view, /text-quantum-blue-pill/);
  assert.match(view, /seriesLine/);
  assert.match(view, /Supported by IBM Quantum\./);
  assert.doesNotMatch(view, /IBM sponsors/);
});

test("project types, pathways, and the Hetionet framework stay in the canonical guides", () => {
  const handbook = readFileSync(new URL("../PARTICIPANT_HANDBOOK.md", import.meta.url), "utf8");
  const track = readFileSync(new URL("../NON-TECHNICAL-TRACK.md", import.meta.url), "utf8");
  const opening =
    "Quantum advantage means demonstrating, through a fair comparison, that a quantum method outperforms the best relevant classical approach on a useful problem. You are not expected to prove that during a 48-hour hackathon. Your goal is to build a well-scoped project, create credible evidence, and explain honestly what the evidence does and does not show.";
  const welcome =
    "Every team should include both perspectives. A builder-only team may create a clean implementation before confirming that the problem matters. A domain-only team may frame a strong opportunity without a testable experiment. The strongest projects come from combining the two.";
  const roleCallout =
    "Mapped-problem and analysis projects can be led primarily by Domain/Industry participants. Benchmark and tool projects generally require more Builder/Developer work. All four become stronger when someone understands what the output means in the real world.";
  const enough =
    "If you are wondering whether you are “technical enough,” read the complete Domain/Industry guide before deciding not to participate. Your industry knowledge may be the part the team cannot replace with code.";
  const close =
    "Use the Hetionet framework as a checklist for your own project. Keep the structure, replace the problem, establish your own baseline, choose an appropriate quantum hypothesis, and document the evidence and limitations.";
  assert.match(handbook, /## 2\. What you are actually going to build/);
  assert.ok(handbook.includes(opening));
  assert.ok(handbook.includes(roleCallout));
  assert.ok(handbook.includes(welcome));
  assert.ok(handbook.includes(enough));
  assert.ok(handbook.includes(close));
  assert.match(handbook, /## 12\. Final Step: Study Hetionet and Build Your Project Framework/);
  assert.match(handbook, /### Official statewide judging rubric/);
  assert.doesNotMatch(handbook, /Official statewide judging rubric: Coming soon/);
  assert.doesNotMatch(handbook, /Weights are not published/);
  assert.match(handbook, /Problem Definition & Relevance/);
  assert.match(handbook, /Quantum Rationale & Understanding of Potential/);
  assert.match(handbook, /Technical Implementation \(Qiskit\)/);
  assert.match(handbook, /Results & Validation/);
  assert.match(handbook, /Innovation & Creativity/);
  assert.match(handbook, /Presentation & Communication/);
  assert.match(handbook, /Q&A, Teamwork & Learning Journey/);
  assert.match(handbook, /\| 15% \|/);
  assert.match(handbook, /\| 20% \|/);
  assert.match(handbook, /\| 10% \|/);
  assert.match(handbook, /\/resources\/qiskit-fall-fest-judging-rubric\.xlsx/);
  const workbook = readFileSync(new URL("../public/resources/qiskit-fall-fest-judging-rubric.xlsx", import.meta.url));
  assert.equal(workbook.subarray(0, 2).toString(), "PK");
  assert.match(handbook, /https:\/\/www\.quantumglobalgroup\.io\/qiskit-fall-fest\/decision-guide\/#\/assess/);
  assert.match(handbook, /https:\/\/www\.linkedin\.com\/pulse\/domain-track-entangled-solutions-group-tgrwe\//);
  assert.ok(track.includes(welcome));
  assert.ok(track.includes(enough));
  assert.match(track, /Select the problem/);
  assert.match(track, /Review together/);
  assert.doesNotMatch(`${handbook}\n${track}`, /misunderstood the assignment|nobody has|no substance|you have one job|before October 1|\(external\)|\{\{/i);
});

test("the submission template and pages workflow exist", () => {
  const readme = readFileSync(new URL("../submissions/_TEMPLATE/README.md", import.meta.url), "utf8");
  const workflow = readFileSync(new URL("../.github/workflows/pages.yml", import.meta.url), "utf8");
  assert.match(readme, /\[SUBMISSION\] Team/);
  assert.match(workflow, /Qiskit_Fall_Fest_2026/);
  assert.doesNotMatch(workflow, /secrets\./);
});
