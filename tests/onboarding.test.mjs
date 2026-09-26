import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const onboarding = readFileSync(new URL("../content/onboarding.ts", import.meta.url), "utf8");
const view = readFileSync(new URL("../components/OnboardingView.tsx", import.meta.url), "utf8");
const register = readFileSync(new URL("../app/register/page.tsx", import.meta.url), "utf8");

const titles = [
  "Start here",
  "Account and access",
  "From Qubi to Bell state",
  "Bell state in Python and Qiskit",
  "How Qiskit works",
  "Fall Fest challenge",
  "Problem selection and classical baseline",
  "Prototype charter",
  "Hetionet case study",
  "Resources",
];

test("the participant journey is ten pages", () => {
  for (const title of titles) {
    assert.ok(onboarding.includes(`title: "${title}"`));
  }
  assert.match(onboarding, /StatevectorSampler/);
  assert.match(onboarding, /qiskit>=2\.3\.0,<2\.4\.0/);
  assert.match(onboarding, /10 minutes of QPU time per 28-day window/);
  assert.match(onboarding, /us-east/);
  assert.match(onboarding, /0\.7987/);
  assert.match(onboarding, /0\.7838/);
  assert.match(onboarding, /0\.7807/);
  assert.match(onboarding, /0\.6343/);
  assert.match(onboarding, /not quantum advantage/);
  assert.match(onboarding, /not a clinical result/);
  assert.match(onboarding, /chapter 7 of Quantum Readiness for Leaders/);
  assert.match(onboarding, /www\.qolour\.com\/educator-course/);
  assert.match(onboarding, /statevector-exhibit/);
  assert.match(onboarding, /Andrew, co-founder of Qolour/);
  assert.match(onboarding, /Kickoff and challenge release: TBA/);
  assert.match(onboarding, /October 31, 2026/);
  assert.match(onboarding, /November 13, 2026/);
  assert.doesNotMatch(onboarding, /classroom/i);
  assert.doesNotMatch(onboarding, /\{\{[A-Z_]+/);
  assert.doesNotMatch(onboarding, /execute\(/);
  assert.doesNotMatch(onboarding, /IBMQ\.load_account/);
  assert.doesNotMatch(onboarding, /qiskit\.Aer/);
  assert.doesNotMatch(onboarding, /channel="ibm_quantum"/);
  assert.doesNotMatch(onboarding, /channel="local"/);
  assert.doesNotMatch(onboarding, /0\.8581/);
  assert.doesNotMatch(onboarding, /October 17/);
  assert.doesNotMatch(register, /\{\{[A-Z_]+/);
  assert.doesNotMatch(register, /Grant will send/);
});

test("the start page strip is the ten section names", () => {
  assert.match(view, /aria-label="Sections"/);
  assert.match(view, /item\.title/);
  assert.doesNotMatch(view, /Learn the Language/);
  assert.doesNotMatch(view, /Find Your Next Step/);
  assert.doesNotMatch(view, /Build Visually/);
});

test("Home Depot is one software-structure table", () => {
  assert.match(onboarding, /A department or toolbox/);
  assert.match(view, /This analogy stops at these programming words/);
  const bell = onboarding.slice(onboarding.indexOf('slug: "bell"'), onboarding.indexOf('slug: "python"'));
  assert.doesNotMatch(bell, /Home Depot/);
});
