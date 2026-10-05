/**
 * Official statewide judging rubric for the Florida Qiskit Fallfest Hackathon.
 * Criteria, descriptions, score levels, and weights are the Rubric sheet.
 * Weights are the sheet's percent format (0%): 0.15 is 15%.
 */

export const JUDGING_RUBRIC_PATH = "/resources/qiskit-fall-fest-judging-rubric.xlsx";

export const RUBRIC_LEAD = "Score each criterion 1–5. Weights convert scores to a total out of 100; hardware bonus adds up to +5.";

export const RUBRIC_FORMULA = "Weighted Score = Σ (criterion score × weight) ÷ 5 × 100 → out of 100. Total = Weighted Score + Hardware Bonus (max 105).";

export const SCORE_LEVELS = [
  "1 – Beginning",
  "2 – Developing",
  "3 – Proficient",
  "4 – Strong",
  "5 – Exceptional",
] as const;

export type RubricCriterion = {
  name: string;
  weight: string;
  measures: string;
  levels: readonly string[];
  question: string;
};

export const RUBRIC_CRITERIA: readonly RubricCriterion[] = [
  {
    name: "Problem Definition & Relevance",
    weight: "15%",
    measures: "Is there a clear, meaningful problem? Does the team explain who it affects and why it matters?",
    levels: [
      "No clear problem; project is a demo without purpose.",
      "Problem named but vague; little sense of why it matters.",
      "Clear problem with some real-world context.",
      "Well-defined problem with clear stakeholders and motivation.",
      "Compelling, specific problem; scope is realistic and impact is clearly argued.",
    ],
    question: "What problem are you solving, and for whom? Why does it matter?",
  },
  {
    name: "Quantum Rationale & Understanding of Potential",
    weight: "20%",
    measures: "Does the team understand WHY quantum might help here, and are they honest about today's limits (noise, qubit counts, no guaranteed speedup)?",
    levels: [
      "No explanation of why quantum is used; or claims are inaccurate / overhyped.",
      "Generic claims (\"quantum is faster\") with little connection to the problem.",
      "Names a relevant quantum idea (superposition, entanglement, sampling, optimization, simulation) and links it to the problem.",
      "Clear reasoning for quantum fit; acknowledges current hardware limits and classical alternatives.",
      "Nuanced view of near-term vs. future potential; realistic about advantage; outlines what scale or hardware would be needed.",
    ],
    question: "Why quantum instead of a classical approach? What would need to improve for this to beat classical methods?",
  },
  {
    name: "Technical Implementation (Qiskit)",
    weight: "20%",
    measures: "Does the code run? Is Qiskit used appropriately (circuits, primitives, transpilation, algorithms)? Judged relative to team experience.",
    levels: [
      "Code missing or does not run.",
      "Runs partially; mostly copied tutorial code with little adaptation.",
      "Working implementation adapted to the problem; reasonable circuit design.",
      "Solid, well-structured code; thoughtful use of Qiskit features (e.g., primitives, transpiler, parameterized circuits).",
      "Polished, documented, reproducible; creative or advanced techniques used correctly (e.g., error mitigation, hybrid workflows).",
    ],
    question: "Walk me through your circuit. What did you build vs. reuse? What was hardest to get working?",
  },
  {
    name: "Results & Validation",
    weight: "10%",
    measures: "Are results shown and interpreted? Is there a comparison to a classical baseline, expected values, or simulator vs. hardware?",
    levels: [
      "No results shown.",
      "Results shown but not explained.",
      "Results explained with some interpretation.",
      "Results compared against a baseline or expectation; limitations discussed.",
      "Rigorous analysis: baselines, error bars or repeated runs, simulator vs. hardware comparison, clear conclusions.",
    ],
    question: "How do you know it worked? What did you compare against? What surprised you?",
  },
  {
    name: "Innovation & Creativity",
    weight: "10%",
    measures: "Is the idea or approach original, or a fresh take on a known problem?",
    levels: [
      "Direct copy of an existing tutorial or example.",
      "Minor variation on a common example.",
      "Some original thinking in problem choice or approach.",
      "Original idea or a creative application to a new domain.",
      "Highly original; would make other teams and judges say \"I hadn't thought of that.\"",
    ],
    question: "What makes your approach different from existing examples?",
  },
  {
    name: "Presentation & Communication",
    weight: "15%",
    measures: "Can the team clearly articulate the problem, the solution and the results to both technical and non-technical audiences?",
    levels: [
      "Hard to follow; problem and solution unclear.",
      "Some structure, but heavy jargon or key pieces missing.",
      "Clear problem-solution story; mostly understandable to non-experts.",
      "Engaging and well-structured; good visuals; explains quantum concepts in plain language.",
      "Excellent storytelling; accessible to any audience while still technically accurate; within time.",
    ],
    question: "Can you explain your project in one sentence to someone with no physics background?",
  },
  {
    name: "Q&A, Teamwork & Learning Journey",
    weight: "10%",
    measures: "Can the team answer questions? Do all members contribute? Can they describe what they learned and next steps?",
    levels: [
      "Cannot answer basic questions about their own project.",
      "Answers are partial; one member carries the team.",
      "Answers most questions; describes some lessons learned.",
      "Confident, accurate answers; shared ownership; clear next steps.",
      "Insightful answers, strong collaboration, clear growth story and realistic roadmap.",
    ],
    question: "What did each of you contribute? What would you do with another month?",
  },
];

export const HARDWARE_BONUS_HEADING = "Hardware Bonus (judge selects one tier per team)";

export const HARDWARE_BONUS: readonly { tier: string; points: string; description: string }[] = [
  { tier: "Simulator only", points: "0", description: "Ran on a local or cloud simulator (e.g., Aer, statevector). No penalty; strong simulator projects can win." },
  { tier: "Real quantum device", points: "3", description: "Circuit executed on real IBM Quantum hardware; job results shown." },
  { tier: "Real device + noise analysis", points: "5", description: "Ran on real hardware AND compared to simulator, analysed noise, or applied error suppression/mitigation." },
];

export const SCORING_NOTES: readonly string[] = [
  "Score relative to a student hackathon, not a research lab. A '3' is a solid, good project.",
  "Simulator-only projects are fully eligible; the bonus rewards the extra effort of running on real hardware, it is not a requirement.",
  "Reward honesty: a team that clearly explains why quantum may NOT yet beat classical methods shows more understanding than one that overclaims.",
];
