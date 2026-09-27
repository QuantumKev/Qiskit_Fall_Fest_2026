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
  assert.doesNotMatch(joined, /rloredo2026@fau\.edu/);
  assert.match(joined, /Robert Loredo is the lead/);
  assert.match(joined, /Kevin Robinson, Grant Kurz, and Ayse Torres are co-leads/);
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

test("the home lockup serves the Qiskit mark through the base path", () => {
  const view = readFileSync(new URL("../components/OnboardingView.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(view, /IBM_Quantum_logotype_rev/);
  assert.match(view, /withBase\("\/brand\/qiskit_white\.svg"\)/);
  assert.match(view, /width=\{32\}/);
  assert.match(view, /height=\{32\}/);
  assert.match(view, /alt="Qiskit"/);
  assert.match(view, /seriesLine/);
  assert.match(view, /Supported by IBM Quantum\./);
  assert.doesNotMatch(view, /IBM sponsors/);
});

test("the submission template and pages workflow exist", () => {
  const readme = readFileSync(new URL("../submissions/_TEMPLATE/README.md", import.meta.url), "utf8");
  const workflow = readFileSync(new URL("../.github/workflows/pages.yml", import.meta.url), "utf8");
  assert.match(readme, /\[SUBMISSION\] Team/);
  assert.match(workflow, /Qiskit_Fall_Fest_2026/);
  assert.doesNotMatch(workflow, /secrets\./);
});
