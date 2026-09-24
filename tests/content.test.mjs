import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const glossary = readFileSync(new URL("../content/glossary.ts", import.meta.url), "utf8");
const modules = readFileSync(new URL("../content/modules.ts", import.meta.url), "utf8");
const notebook = readFileSync(new URL("../notebooks/bell_state_lab.ipynb", import.meta.url), "utf8");

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

test("ten modules are present", () => {
  for (const slug of [
    "welcome",
    "setup",
    "vocabulary",
    "qubi",
    "qolour",
    "composer",
    "python",
    "hetionet",
    "readiness",
    "pathway",
  ]) {
    assert.ok(modules.includes(`slug: "${slug}"`));
  }
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
    assert.ok(modules.includes(score));
  }
  assert.match(modules, /not quantum advantage/i);
});

test("verification date is recorded", () => {
  assert.ok(modules.includes('LAST_VERIFIED = "2026-09-23"'));
});
