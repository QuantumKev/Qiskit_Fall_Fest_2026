import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const files = ["PARTICIPANT_HANDBOOK.md", "NON-TECHNICAL-TRACK.md", "NOTEBOOK-CATALOG.md"].map((name) =>
  readFileSync(new URL(`../${name}`, import.meta.url), "utf8"),
);

test("canonical documents use the South Florida facts and drop organizer leftovers", () => {
  const joined = files.join("\n");
  assert.match(joined, /Qiskit Fall Fest South Florida 2026/);
  assert.match(joined, /October 1, 2026/);
  assert.match(joined, /October 17–18, 2026/);
  assert.match(joined, /kevin@quantumglobalgroup\.io/);
  assert.match(joined, /StatevectorSampler/);
  assert.doesNotMatch(joined, /October 5|Oct 5/);
  assert.doesNotMatch(joined, /\{\{/);
  assert.doesNotMatch(joined, /classroom account/i);
  assert.doesNotMatch(joined, /channel="local"/);
  assert.doesNotMatch(joined, /gmail/i);
  assert.doesNotMatch(joined, /FAU Qiskit Fall Fest/);
  assert.doesNotMatch(joined, /has loaners/);
});

test("the submission template and pages workflow exist", () => {
  const readme = readFileSync(new URL("../submissions/_TEMPLATE/README.md", import.meta.url), "utf8");
  const workflow = readFileSync(new URL("../.github/workflows/pages.yml", import.meta.url), "utf8");
  assert.match(readme, /\[SUBMISSION\] Team/);
  assert.match(workflow, /Qiskit_Fall_Fest_2026/);
  assert.doesNotMatch(workflow, /secrets\./);
});
