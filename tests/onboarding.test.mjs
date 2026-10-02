import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const onboarding = readFileSync(new URL("../content/onboarding.ts", import.meta.url), "utf8");
const view = readFileSync(new URL("../components/OnboardingView.tsx", import.meta.url), "utf8");
const register = readFileSync(new URL("../app/register/page.tsx", import.meta.url), "utf8");
const event = readFileSync(new URL("../content/event.ts", import.meta.url), "utf8");

const titles = [
  "Start here",
  "Account and tools",
  "Basic quantum vocabulary",
  "Bell state in Composer",
  "Bell state in Python and Qiskit",
  "How Qiskit Works: One Bell State, End to End",
  "Two pathways",
  "Project frame and classical baseline",
  "Benchmarking and readiness",
  "Hetionet example",
  "Form a team",
  "Prepare and submit",
];

test("the participant journey is twelve pages fed by one event record", () => {
  for (const title of titles) {
    assert.ok(onboarding.includes(`title: "${title}"`));
  }
  assert.match(onboarding, /from "@\/content\/event"/);
  assert.match(event, /October 1, 2026/);
  assert.match(event, /October 17–18, 2026/);
  assert.match(event, /localCeremony: "October 18, 2026"/);
  assert.match(event, /October 31, 2026/);
  assert.match(event, /stateChampionship: "November 14, 2026"/);
  assert.match(event, /endDate: "2026-11-14"/);
  assert.doesNotMatch(event, /November 13, 2026/);
  assert.doesNotMatch(event, /November 18/);
  assert.doesNotMatch(event, /2026-11-13/);
  assert.match(event, /kevin@quantumglobalgroup\.io/);
  assert.match(event, /grant@deepstation\.ai/);
  assert.match(event, /atorre58@fau\.edu/);
  assert.match(event, /rloredo2026@fau\.edu/);
  assert.match(event, /name: "Robert Loredo"/);
  assert.match(event, /https:\/\/entangledsolutionsgroup\.com\/Qiskit-Fall-Fest-2026\//);
  assert.doesNotMatch(onboarding, /CO_LEAD_SENTENCE/);
  assert.match(onboarding, /Qiskit-approved website/);
  assert.doesNotMatch(onboarding, /is the organizer/);
  assert.doesNotMatch(onboarding, /sponsorship and team lead/);
  assert.doesNotMatch(event, /sponsorshipLead/);
  assert.doesNotMatch(event, /organizer:/);
  assert.match(onboarding, /StatevectorSampler/);
  assert.match(event, /qiskit>=2\.3\.0,<2\.4\.0/);
  assert.match(onboarding, /EVENT\.qiskitPin/);
  assert.match(event, /up to 10 minutes of QPU execution time per rolling 28-day window/);
  assert.doesNotMatch(onboarding, /10 minutes per month/);
  assert.doesNotMatch(onboarding, /This path is not a quantum-advantage paper/);
  assert.doesNotMatch(onboarding, /Park a stuck login/);
  assert.match(event, /us-east/);
  assert.match(onboarding, /EVENT\.openPlan/);
  assert.match(onboarding, /EVENT\.region/);
  assert.match(onboarding, /0\.7987/);
  assert.match(onboarding, /0\.7838/);
  assert.match(onboarding, /0\.7807/);
  assert.match(onboarding, /0\.8581/);
  assert.match(onboarding, /quantum kernel was cached/);
  assert.match(onboarding, /Optuna/);
  assert.match(onboarding, /not quantum advantage/);
  assert.match(onboarding, /not a clinical result/);
  assert.match(onboarding, /chapter 7 of Quantum Readiness for Leaders/i);
  assert.match(onboarding, /label: "Next-Step Quantum Decision Guide"/);
  assert.match(onboarding, /https:\/\/www\.quantumglobalgroup\.io\/qiskit-fall-fest\/decision-guide\/#\/assess/);
  assert.doesNotMatch(onboarding, /Tool deployment pending/);
  assert.doesNotMatch(onboarding, /not deployed/);
  assert.match(event, /www\.qolour\.com\/educator-course/);
  assert.match(event, /statevector-exhibit/);
  assert.match(onboarding, /QOLOR_COURSE/);
  assert.match(onboarding, /\[SUBMISSION\] Team/);
  assert.doesNotMatch(onboarding, /classroom/i);
  assert.doesNotMatch(onboarding, /\{\{[A-Z_]+/);
  assert.doesNotMatch(onboarding, /execute\(/);
  assert.doesNotMatch(onboarding, /IBMQ\.load_account/);
  assert.doesNotMatch(onboarding, /qiskit\.Aer/);
  assert.doesNotMatch(onboarding, /channel="ibm_quantum"/);
  assert.doesNotMatch(onboarding, /channel="local"/);
  assert.doesNotMatch(onboarding, /October 5/);
  assert.doesNotMatch(onboarding, /gmail/i);
  assert.doesNotMatch(register, /\{\{[A-Z_]+/);
  assert.doesNotMatch(register, /Grant will send/);
});

test("the Qolour workshop lesson is on the participant path", () => {
  assert.match(onboarding, /title: "Quantum from Zero to One"/);
  assert.match(onboarding, /slug: "qolour"/);
  assert.match(onboarding, /Andrew Chen, Qolour \(andrew@qolour\.com\)/);
  assert.match(onboarding, /handheld Qubi/);
  assert.match(onboarding, /\/downloads\/qolour-quantum-from-zero-to-one\.pdf/);
  assert.match(onboarding, /QOLOR_COURSE/);
  const workshop = onboarding.slice(onboarding.indexOf('id: "workshop-1"'), onboarding.indexOf('id: "workshop-2"'));
  assert.match(workshop, /href: "\/qolour\/"/);
  assert.match(workshop, /Quantum from Zero to One/);
  assert.doesNotMatch(onboarding, /The lesson is not in this repo/);
  assert.doesNotMatch(onboarding, /not in this repo yet/);
  assert.doesNotMatch(onboarding, /you have one job/i);
  assert.doesNotMatch(onboarding, /before October 1/i);
  assert.doesNotMatch(onboarding, /\(external\)/);
  const guide = readFileSync(new URL("../FACILITATOR_GUIDE.md", import.meta.url), "utf8");
  assert.match(guide, /## Workshop lesson/);
  assert.match(guide, /Quantum from Zero to One/);
  assert.match(guide, /\/qolour\//);
  assert.match(guide, /qolour-quantum-from-zero-to-one\.pdf/);
  assert.match(guide, /www\.qolour\.com\/educator-course/);
  assert.match(guide, /Andrew Chen, Qolour/);
  const pdf = readFileSync(new URL("../public/downloads/qolour-quantum-from-zero-to-one.pdf", import.meta.url));
  assert.ok(pdf.subarray(0, 5).toString() === "%PDF-");
});

test("the start page strip is the journey section names", () => {
  assert.match(view, /aria-label="Sections"/);
  assert.match(view, /item\.title/);
  assert.match(view, /check-option/);
  assert.doesNotMatch(view, /Learn the Language/);
  assert.doesNotMatch(view, /Find Your Next Step/);
  assert.doesNotMatch(view, /Build Visually/);
});

test("Home Depot is one software-structure table", () => {
  assert.match(onboarding, /A department or toolbox/);
  assert.match(view, /This analogy stops at these programming words/);
  const bell = onboarding.slice(onboarding.indexOf('slug: "bell"'), onboarding.indexOf('slug: "python"'));
  const workflow = onboarding.slice(onboarding.indexOf('slug: "workflow"'), onboarding.indexOf('slug: "roles"'));
  assert.doesNotMatch(bell, /Home Depot/);
  assert.doesNotMatch(workflow, /Home Depot/);
});
