import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const glossary = readFileSync(new URL("../content/glossary.ts", import.meta.url), "utf8");
const modules = readFileSync(new URL("../content/modules.ts", import.meta.url), "utf8");
const notebook = readFileSync(new URL("../notebooks/bell_state_lab.ipynb", import.meta.url), "utf8");
const intro = readFileSync(new URL("../content/intro.ts", import.meta.url), "utf8");
const introView = readFileSync(new URL("../components/IntroView.tsx", import.meta.url), "utf8");
const event = readFileSync(new URL("../content/event.ts", import.meta.url), "utf8");
const exercise = readFileSync(new URL("../content/exercise1.ts", import.meta.url), "utf8");
const hetionetWalk = readFileSync(new URL("../content/hetionetWalk.ts", import.meta.url), "utf8");

const required = [
  "Classical bit",
  "Qubit",
  "State",
  "Statevector",
  "Basis state",
  "Amplitude",
  "Probability",
  "Phase",
  "Superposition",
  "Entanglement",
  "Quantum gate",
  "Hadamard gate",
  "X gate",
  "CNOT or CX gate",
  "Control qubit",
  "Target qubit",
  "Quantum circuit",
  "Quantum register",
  "Classical register",
  "Measurement",
  "Shot",
  "Counts",
  "Histogram",
  "Simulator",
  "Quantum processing unit or QPU",
  "Noise",
  "Error",
  "Transpilation",
  "Backend",
  "Qiskit",
  "IBM Quantum Composer",
  "Quantum kernel",
  "Feature map",
  "Benchmark",
  "Baseline",
  "Hybrid quantum-classical workflow",
  "Quantum advantage",
  "Quantum readiness",
];

for (const term of required) {
  test(`glossary defines ${term}`, () => {
    assert.ok(glossary.includes(`term: "${term}"`));
  });
}

test("journey modules stay and beginner vocabulary is gone", () => {
  for (const slug of ["welcome", "setup", "qubi", "composer", "python", "hetionet", "readiness", "pathway"]) {
    assert.ok(modules.includes(`slug: "${slug}"`));
  }
  assert.doesNotMatch(modules, /slug: "vocabulary"/);
  assert.doesNotMatch(modules, /slug: "qolour"/);
  assert.doesNotMatch(modules, /nextSlug: "vocabulary"/);
  assert.doesNotMatch(modules, /nextSlug: "qolour"/);
  assert.match(modules, /title: "Qubi demo from Qolour"/);
  assert.doesNotMatch(modules, /Beginner vocabulary/);
  assert.doesNotMatch(modules, /Kevin/);
});

test("bell lab uses the Qiskit 2.3 sampler and no token", () => {
  assert.match(notebook, /StatevectorSampler/);
  assert.match(notebook, /measure_all/);
  assert.match(notebook, /qubit 0 on the right/);
  assert.match(notebook, /not, by itself, a complete experimental proof of entanglement/);
  assert.doesNotMatch(notebook, /IBM_QUANTUM_TOKEN|api_key\s*=|token\s*=\s*["']|execute\(/i);
});

test("hetionet metrics stay the published ones", () => {
  for (const score of ["0.7987", "0.7838", "0.7807", "0.7408", "0.7216"]) {
    assert.ok(hetionetWalk.includes(score));
  }
  assert.match(hetionetWalk, /not quantum advantage/i);
  assert.match(hetionetWalk, /not a clinical result/);
});

test("verification date is recorded", () => {
  assert.ok(modules.includes('LAST_VERIFIED = "2026-09-23"'));
});

test("the intro guide keeps the welcome, the progress line, and the Bell sampler", () => {
  assert.match(intro, /publish a paper in Nature/);
  assert.match(intro, /Prepare → Learn the Language → Build Visually → Read the Code → Run the Code → Understand the Results → Find Your Next Step/);
  assert.match(intro, /StatevectorSampler/);
  assert.match(intro, /measured_circuit = bell_circuit\.copy\(\)/);
  assert.match(intro, /not, by itself, a complete proof of entanglement/);
  assert.doesNotMatch(intro, /Home Depot/);
  assert.match(event, /are co-leading this event/);
  assert.match(introView, /CO_LEAD_SENTENCE/);
  assert.doesNotMatch(intro, /is the organizer/);
  assert.doesNotMatch(intro, /sponsorship and team lead/);
  assert.doesNotMatch(intro, /leads this initiative/);
  assert.doesNotMatch(introView, /is the organizer/);
  assert.doesNotMatch(introView, /sponsorship and team lead/);
  assert.doesNotMatch(introView, /leads this initiative/);
  assert.doesNotMatch(modules, /leads this initiative/);
  assert.doesNotMatch(intro, /execute\(/);
  assert.doesNotMatch(intro, /\bmusic\b/i);
  assert.doesNotMatch(intro, /\bsports\b/i);
});

test("the Assess and Build pointer sits between the Bell labs and Hetionet", () => {
  const pythonNext = modules.indexOf('nextSlug: "assess-build"');
  const pointer = modules.indexOf('slug: "assess-build"');
  const hetionet = modules.indexOf('slug: "hetionet"');
  assert.ok(pythonNext > 0 && pointer > pythonNext && hetionet > pointer);
  assert.match(modules, /title: "Next-Step Quantum Decision Guide"/);
  assert.match(modules, /chapter 7 of Quantum Readiness for Leaders/);
  assert.match(modules, /Then run Assess, then Build/);
  assert.match(modules, /qgg-quantum-readiness-os\/tree\/cursor\/optimization-readiness-engine-26a9\/modules\/optimization-readiness-engine/);
  assert.match(modules, /not live yet/);
  assert.doesNotMatch(modules, /drive\.google/i);
  assert.doesNotMatch(modules, /Quantum For the Qulture/);
  assert.doesNotMatch(modules, /classroom invitation/i);
});

test("hackathon and machine learning stay inside known rules", () => {
  assert.match(intro, /Qiskit Fall Fest South Florida 2026/);
  assert.match(intro, /October 1, 2026/);
  assert.match(intro, /October 17/);
  assert.match(intro, /rolling 28-day/);
  assert.match(intro, /quantum-kernel-training/);
  assert.match(intro, /projected-quantum-kernels/);
  assert.match(event, /kevin@quantumglobalgroup\.io/);
  assert.match(event, /rloredo2026@fau\.edu/);
  assert.match(event, /grant@deepstation\.ai/);
  assert.match(event, /atorre58@fau\.edu/);
  assert.match(intro, /Qiskit-approved website/);
  assert.doesNotMatch(intro, /is the organizer/);
  assert.doesNotMatch(intro, /October 5/);
  assert.doesNotMatch(intro, /\{\{/);
  assert.doesNotMatch(intro, /introduction\.ipynb/);
  assert.doesNotMatch(intro, /judging criteria are/);
  assert.doesNotMatch(intro, /team limit is \d/);
  assert.doesNotMatch(intro, /classroom/i);
  assert.doesNotMatch(exercise, /Quantum For the Qulture/);
  assert.match(modules, /0\.7987/);
  assert.match(modules, /not quantum advantage/i);
  assert.match(modules, /not a clinical result/);
  assert.doesNotMatch(modules, /team limit is \d/);
  assert.doesNotMatch(modules, /October 5/);
  assert.doesNotMatch(intro, /\bmusic\b/i);
  assert.doesNotMatch(intro, /\bsports\b/i);
  assert.doesNotMatch(intro, /execute\(/);
});

test("participant pages do not show teaching translations", () => {
  const files = ["../components/ModuleView.tsx", "../components/IntroView.tsx", "../components/GlossaryView.tsx", "../components/ExerciseConnect.tsx", "../app/sources/page.tsx"].map(
    (name) => readFileSync(new URL(name, import.meta.url), "utf8"),
  );
  for (const source of files) {
    assert.doesNotMatch(source, /Home Depot|Cooking|Music|Sports/);
    assert.doesNotMatch(source, /entry\.analogy/);
  }
  assert.match(glossary, /technical:/);
  assert.doesNotMatch(modules, /analogies:/);
  assert.doesNotMatch(modules, /statevector-exhibit/);
  assert.match(modules, /www\.qolour\.com\/educator-course/);
  assert.match(modules, /Andrew, co-founder of Qolour/);
});

test("exercise 1 keeps placeholders and points at the untrusted-computer path", () => {
  assert.match(exercise, /<YOUR_PRIVATE_API_KEY>/);
  assert.match(exercise, /<YOUR_OPEN_PLAN_CRN>/);
  assert.doesNotMatch(exercise, /classroom/i);
  assert.doesNotMatch(exercise, /crn:v1/);
  assert.match(exercise, /talks to IBM Quantum Compute/);
  assert.doesNotMatch(exercise, /service desk/);
  assert.doesNotMatch(exercise, /Home Depot/);
});
