import { CONNECT_SAVE } from "@/content/exercise1";

/**
 * Provenance for this file, kept in the content record:
 * - source: FAU Fall Fest materials read 2026-09-25, and IBM Quantum docs checked 2026-09-26.
 * - qgg: Quantum Global Group reading of the Hetionet paper and of the readiness engine. Not a copy of either.
 * - original: participant tools written for this site, including the prototype charter fields.
 */

export const LAST_CHECKED = "2026-09-26";

export const IBM_CLOUD_SETUP = "https://quantum.cloud.ibm.com/docs/en/guides/cloud-setup";
export const QOLOR_COURSE = "https://www.qolour.com/educator-course";
export const QOLOR_EXHIBIT = "https://www.qolour.com/educator-course/statevector-exhibit";
export const ENGINE_URL =
  "https://github.com/Quantum-Global-Group/qgg-quantum-readiness-os/tree/cursor/optimization-readiness-engine-26a9/modules/optimization-readiness-engine";
export const HETIONET_REPO = "https://github.com/Quantum-Global-Group/hybrid-qml-kg-poc";

export type Check = {
  question: string;
  options: string[];
  answer: number;
  why: string;
};

export type StepPage = {
  slug: string;
  href: string;
  number: string;
  title: string;
  minutes: number;
  purpose: string;
  sections: {
    heading: string;
    paragraphs: string[];
    steps?: string[];
    troubles?: { title: string; body: string }[];
  }[];
  table?: { caption: string; headers: string[]; rows: string[][] };
  code?: { filename: string; source: string };
  structureAnalogy?: { concept: string; technical: string; analogy: string }[];
  links?: { href: string; label: string }[];
  check: Check;
  nextHref: string | null;
  nextLabel: string | null;
};

export const BELL_PYTHON = `from qiskit import QuantumCircuit
from qiskit.primitives import StatevectorSampler

bell_circuit = QuantumCircuit(2)
bell_circuit.h(0)
bell_circuit.cx(0, 1)

measured_circuit = bell_circuit.copy()
measured_circuit.measure_all()

sampler = StatevectorSampler()
job = sampler.run([measured_circuit], shots=1024)
result = job.result()
counts = result[0].data["meas"].get_counts()
print(counts)`;

const start: StepPage = {
  slug: "start",
  href: "/",
  number: "01",
  title: "Start here",
  minutes: 10,
  purpose: "See what Fall Fest is, what you will produce, and the path through this site. The work is a process. It is not a quantum-advantage claim and not a Nature paper.",
  sections: [
    {
      heading: "What this is",
      paragraphs: [
        "Qiskit Fall Fest 2026 is a student series with IBM Quantum. This year’s theme is ten years of quantum on the cloud. Florida’s program is an inaugural state championship with local university events, not a single-campus class.",
        "The state championship date in the materials is November 13, 2026, at Florida Atlantic University in Boca Raton. Time and room are TBA.",
        "Local first-place materials are due to the hosts no later than October 31, 2026. That date is still ahead.",
        "Kickoff and challenge release are TBA. The materials name both October 1, 2026 and October 5, 2026, so this page does not treat either date as settled. Local university weekend dates are TBA.",
      ],
    },
    {
      heading: "What you will produce",
      paragraphs: [
        "You will leave with your own IBM Quantum account, one Bell state you can build twice, and a project charter that says what you will test and what you will not claim.",
        "A credible project is a small circuit or a written argument with a classical baseline and a limitation. A strong project can also say that a problem is not quantum-shaped.",
      ],
    },
    {
      heading: "Two roles on one team",
      paragraphs: [
        "Builders write Qiskit. They need Python, not a physics degree.",
        "Domain partners bring a real problem, read the notebooks, and do not have to install Python.",
        "You do not need a team before kickoff. Team formation is at kickoff. A published team-size cap is TBA.",
      ],
    },
  ],
  check: {
    question: "What does a successful onboarding produce?",
    options: [
      "A Nature paper on quantum advantage",
      "An account, one Bell state, and an honest next step",
      "A proof that quantum computers replace classical ones",
      "A finished clinical result",
    ],
    answer: 1,
    why: "This path is an entry. Advantage claims and clinical claims are out of scope.",
  },
  nextHref: "/account",
  nextLabel: "Create your IBM Quantum account",
};

const account: StepPage = {
  slug: "account",
  href: "/account",
  number: "02",
  title: "Account and access",
  minutes: 40,
  purpose: "Create your own IBM Quantum Platform account, your own Open Plan instance, and your own API key. This site never collects passwords, API keys, or CRNs.",
  sections: [
    {
      heading: "Your own account",
      paragraphs: [
        `Checked against IBM’s cloud-setup guide on ${LAST_CHECKED}. If the screen disagrees with this list, follow that guide.`,
        "Create an IBM Cloud account if you do not have one. Sign in to IBM Quantum Platform with an IBMid or a Google account. Those login credentials are not the same thing as your IBM Cloud account password.",
        "In the header account switcher, select your own account and the region where the instance lives. The Fall Fest handbook tells builders to create the Open Plan instance in us-east. You can see only the instances created in the region you are logged into.",
        "Create the Open Plan instance from the Instances page. The instance CRN is the address of that instance. Copy it into a private note. Do not paste it into this form, chat, or git.",
      ],
      steps: [
        "Open IBM Quantum Platform and sign in.",
        "Confirm the account name in the header.",
        "Set the region to us-east when you create the Open Plan instance.",
        "Open Instances and create your Open Plan instance.",
        "Copy the instance CRN into a private note.",
        "Generate an API key on a machine you trust. It may be shown only once.",
        "Open Composer and confirm you can see qubit wires.",
      ],
    },
    {
      heading: "Protect the key",
      paragraphs: [
        "The API key is not your password. On a trusted personal computer you may save it locally with the snippet below. Replace the placeholders on your machine. Do not save the filled cell into git.",
        "On a lab machine, a public notebook, or a projected screen, do not call save_account(). Use IBM’s untrusted-environment guide and delete or rotate the key after the session when that is appropriate.",
        "The Open Plan is 10 minutes of QPU time per 28-day window. The Bell lab starts on a local simulator and does not spend that window. This workshop does not promise more minutes.",
      ],
    },
    {
      heading: "If something fails",
      paragraphs: ["Park a stuck login with a facilitator. Do not create a second account until you know which email you already used."],
      troubles: [
        { title: "Confirmation email missing", body: "Check spam, wait, and resend once." },
        { title: "Wrong account or region", body: "Use the header switcher. Instances from another region stay hidden." },
        { title: "Open Plan not visible", body: "Confirm us-east and that you are signed in to your own account. The Bell lab can still run on the simulator." },
        { title: "Composer does not load", body: "Refresh once. Use current Chrome, Edge, or Firefox." },
      ],
    },
  ],
  code: { filename: "Save the Open Plan account on a trusted computer", source: CONNECT_SAVE },
  links: [
    { href: "https://quantum.cloud.ibm.com/", label: "IBM Quantum Platform" },
    { href: IBM_CLOUD_SETUP, label: "Set up your IBM Cloud account" },
    { href: "https://quantum.cloud.ibm.com/docs/en/guides/instances", label: "Create and manage instances" },
    { href: "https://quantum.cloud.ibm.com/docs/en/guides/save-credentials", label: "Save credentials" },
    { href: "https://quantum.cloud.ibm.com/docs/en/guides/cloud-setup-untrusted", label: "Untrusted computers" },
    { href: "https://quantum.cloud.ibm.com/composer", label: "Composer" },
    { href: "https://quantum.cloud.ibm.com/docs/en/guides/plans-overview", label: "Plan comparison" },
  ],
  check: {
    question: "Where do the API key and the CRN belong?",
    options: ["In this website", "In a chat message", "Only in your private note or a trusted local file", "In a GitHub issue"],
    answer: 2,
    why: "This site does not collect credentials. A trusted computer may store them locally. A shared computer should not.",
  },
  nextHref: "/bell",
  nextLabel: "Build the Bell state",
};

const bell: StepPage = {
  slug: "bell",
  href: "/bell",
  number: "03",
  title: "From Qubi to Bell state",
  minutes: 45,
  purpose: "One circuit, from a Qubi placeholder through Composer. Predict, then simulate. The ideal tallies sit on 00 and 11.",
  sections: [
    {
      heading: "Qubi lesson",
      paragraphs: [
        "The lesson is not here yet. Andrew, co-founder of Qolour, will send a quick lesson later. This page does not include that lesson and does not copy the course.",
      ],
    },
    {
      heading: "The words this circuit uses",
      paragraphs: [
        "A qubit’s state before measurement is written with amplitudes. |0⟩ and |1⟩ are the two basis labels. A superposition is a combination of those labels. One measurement returns one of them.",
        "H on |0⟩ prepares an equal superposition. CX, with qubit 0 as control and qubit 1 as target, ties the two qubits. The ideal state is (|00⟩ + |11⟩) / √2. That state is entangled: it cannot be written as each qubit having its own separate state.",
        "Counts that pile up on 00 and 11 match this preparation. A computational-basis histogram is not, by itself, a complete proof of entanglement.",
      ],
    },
    {
      heading: "Build it in Composer",
      paragraphs: [
        "Write the prediction before you run: mostly 00 and 11, with 01 and 10 missing or tiny in the ideal simulation.",
        "Qiskit prints bitstrings with qubit 0 on the right. In this circuit, 00 and 11 look the same if you reverse them. The rightmost bit is qubit 0.",
      ],
      steps: [
        "Open Composer and create a circuit with two wires.",
        "Place H on qubit 0.",
        "Place CX with control on qubit 0 and target on qubit 1.",
        "Measure both qubits.",
        "Read left to right: H, then CX, then measurement.",
        "Run the ideal simulation.",
        "A later hardware compare is optional. It uses the Open Plan window of 10 minutes per 28 days. Start on the simulator.",
      ],
    },
  ],
  links: [
    { href: QOLOR_COURSE, label: "Qolour educator course" },
    { href: QOLOR_EXHIBIT, label: "Qolour statevector exhibit" },
    { href: "https://quantum.cloud.ibm.com/composer", label: "IBM Quantum Composer" },
  ],
  check: {
    question: "Which ideal outcomes should dominate?",
    options: ["01 and 10", "00 and 11", "Only 00", "All four equally"],
    answer: 1,
    why: "H then CX, with this control and target, puts amplitude on |00⟩ and |11⟩.",
  },
  nextHref: "/python",
  nextLabel: "Rebuild the same circuit in Python",
};

const python: StepPage = {
  slug: "python",
  href: "/python",
  number: "04",
  title: "Bell state in Python and Qiskit",
  minutes: 40,
  purpose: "The same Bell circuit, in current Qiskit, on a local sampler. No API key belongs in this notebook.",
  sections: [
    {
      heading: "Install",
      paragraphs: [
        "This lab pins qiskit>=2.3.0,<2.4.0. The notebook is notebooks/bell_state_lab.ipynb. Install requirements.txt in a virtual environment.",
        "StatevectorSampler runs on your computer. It does not spend Open Plan QPU time. Copy the circuit before measure_all() so the unmeasured circuit is still available.",
      ],
    },
  ],
  table: {
    caption: "Same circuit, line by line",
    headers: ["Code", "Python", "Qiskit", "What to observe"],
    rows: [
      ["from qiskit import QuantumCircuit", "import loads a name.", "QuantumCircuit will store the gates.", "Nothing has run yet."],
      ["from qiskit.primitives import StatevectorSampler", "A second import.", "The local ideal sampler.", "Still no qubits changed."],
      ["bell_circuit = QuantumCircuit(2)", "A name bound to a new object. 2 is an argument.", "Two qubits, indexed from 0.", "Both start in |0⟩."],
      ["bell_circuit.h(0)", "h is a method. 0 selects qubit 0.", "Hadamard on qubit 0.", "Qubit 0 is in equal superposition. Qubit 1 is still |0⟩."],
      ["bell_circuit.cx(0, 1)", "Two arguments: control, then target.", "CX from qubit 0 onto qubit 1.", "The state is (|00⟩ + |11⟩) / √2."],
      ["measured_circuit = bell_circuit.copy()", "copy makes a second object.", "The original stays unmeasured.", "Two Python objects, one circuit."],
      ["measured_circuit.measure_all()", "A method call.", "One classical bit per qubit.", "The next run can return bitstrings."],
      ["sampler = StatevectorSampler()", "A new object from a class.", "Local ideal sampler.", "No QPU time."],
      ["job = sampler.run([measured_circuit], shots=1024)", "A list argument and a named argument.", "1024 ideal shots.", "job is the handle for that run."],
      ["result = job.result()", "The call returns an object.", "The finished sampler output.", "You have not read the tallies yet."],
      ["counts = result[0].data[\"meas\"].get_counts()", "A dictionary comes back.", "Bitstrings and tallies.", "Ideal mass on 00 and 11. Qubit 0 is the rightmost bit."],
    ],
  },
  code: { filename: "Bell state, local sampler", source: BELL_PYTHON },
  structureAnalogy: [
    { concept: "Package or library", technical: "A folder of Python modules you install and import.", analogy: "A department or toolbox" },
    { concept: "Module", technical: "One Python file of related names inside a package.", analogy: "A specific aisle" },
    { concept: "Class", technical: "The definition of a kind of object.", analogy: "The design or type of tool" },
    { concept: "Object or instance", technical: "One value created from a class.", analogy: "The actual tool selected" },
    { concept: "Method", technical: "A function that belongs to an object.", analogy: "An action the tool can perform" },
    { concept: "Argument", technical: "A value you pass into a call.", analogy: "A setting, measurement, or instruction" },
    { concept: "Variable", technical: "A name bound to a value.", analogy: "A labeled container holding something" },
  ],
  check: {
    question: "Why copy the circuit before measure_all()?",
    options: [
      "So a statevector can come from a circuit that has not been measured",
      "Because the service bills twice",
      "To reverse the bit order",
      "Because H must be measured first",
    ],
    answer: 0,
    why: "Measurement is a different step. The copy keeps an unmeasured circuit.",
  },
  nextHref: "/workflow",
  nextLabel: "See how a Qiskit job is organized",
};

const workflow: StepPage = {
  slug: "workflow",
  href: "/workflow",
  number: "05",
  title: "How Qiskit works",
  minutes: 20,
  purpose: "Four moves: map the problem to a circuit, transpile it for a backend, execute it with a primitive, and analyze the result. The glossary is the one definition list.",
  sections: [
    {
      heading: "The four moves",
      paragraphs: [
        "Map. Write the circuit. In this workshop that circuit is the Bell pair: H on qubit 0, then CX from qubit 0 to qubit 1, then measurement.",
        "Optimize or transpile. A simulator can run the abstract circuit. A QPU needs the circuit rewritten for that device’s gates and connections. This ideal lab does not transpile.",
        "Execute with a primitive. A sampler returns a distribution of measured bitstrings. An estimator estimates expectation values. The Bell lab needs counts, so it uses a sampler. StatevectorSampler is the local ideal sampler.",
        "Analyze. get_counts() returns a dictionary. The job is the handle. The result is the finished output. The counts are the tallies, not the amplitudes.",
      ],
    },
    {
      heading: "Backend",
      paragraphs: [
        "A backend is the simulator or QPU you ask to run a circuit. The Bell lab’s backend is the local sampler. A named IBM backend is a later choice, after the circuit is final, and it spends Open Plan time.",
      ],
    },
  ],
  links: [{ href: "/glossary", label: "Glossary" }],
  check: {
    question: "What does a sampler return?",
    options: [
      "A distribution of measured bitstrings",
      "An expectation value of an observable",
      "The unmeasured statevector",
      "An API key",
    ],
    answer: 0,
    why: "Sampler output is counts. An estimator is the primitive for expectation values. This lab uses a sampler.",
  },
  nextHref: "/challenge",
  nextLabel: "Read the Fall Fest challenge",
};

const challenge: StepPage = {
  slug: "challenge",
  href: "/challenge",
  number: "06",
  title: "Fall Fest challenge",
  minutes: 20,
  purpose: "How a team submits, what judges are asked to look at, and the one-page canvas. Unconfirmed details stay TBA.",
  sections: [
    {
      heading: "Timeline",
      paragraphs: [
        "Kickoff and challenge release: TBA. Local university weekend dates: TBA.",
        "Local first-place packet: no later than October 31, 2026. That packet is names, emails, a deck, and a GitHub project link.",
        "State championship: November 13, 2026, Florida Atlantic University, Boca Raton. Time and room are TBA. The submission deadline inside the handbook is TBA.",
      ],
    },
    {
      heading: "What a team turns in",
      paragraphs: [
        "Work on a branch named team-<name>. Open a pull request to main titled [SUBMISSION] Team <name> — <project title>. Draft it early.",
        "Include a README, a notebook or source, USE-CASE.md, requirements.txt if there is code, and slides or a demo. LIMITATIONS.md is encouraged.",
        "The submission template folder is described in the materials and is not in that repository yet. The GitHub org and repository name are TBA. Official registration is TBA. The chat that is already printed is Discord: https://discord.gg/vz6uTbtJzR",
      ],
    },
    {
      heading: "Roles and the canvas",
      paragraphs: [
        "Builders and domain partners share a team. One person owns hardware jobs.",
        "The domain track’s Use-Case Canvas has nine fields: the problem in plain language, who has it, how it is solved today, what better is worth as a number, which problem shape and why, the real size versus the weekend size, what would have to be true in five years, the tiny thing you will build, and three sentences for the opening slide. Copy that page into USE-CASE.md. This site does not keep a second copy of the canvas.",
      ],
    },
    {
      heading: "Judging, and what not to claim",
      paragraphs: [
        "No weights are published. The dimensions named for the rubric are technical execution, problem framing and relevance, honesty about limitations, and presentation. Late pull requests are not judged.",
        "Do not claim quantum advantage, a clinical result, or a complete proof of entanglement from one histogram.",
      ],
    },
  ],
  links: [{ href: "https://discord.gg/vz6uTbtJzR", label: "Discord" }],
  check: {
    question: "Which sentence is a claim this workshop does not want?",
    options: [
      "We measured a classical baseline first.",
      "This histogram proves quantum advantage.",
      "The limitation is written down.",
      "The problem may not be quantum-shaped.",
    ],
    answer: 1,
    why: "A histogram is a tally. Advantage is a comparative claim this onboarding does not make.",
  },
  nextHref: "/problem",
  nextLabel: "Choose a problem type",
};

const problem: StepPage = {
  slug: "problem",
  href: "/problem",
  number: "07",
  title: "Problem selection and classical baseline",
  minutes: 20,
  purpose: "Pick a problem type. Write the classical baseline before any quantum run. A hardware run without that measurement is a demonstration.",
  sections: [
    {
      heading: "Four branches",
      paragraphs: [
        "Optimization. Scheduling, routing, portfolios, and other choices with an objective and rules. Classical solvers are already strong. Do not force a QUBO or QAOA. Use them only if the problem is actually an optimization problem.",
        "Simulation or chemistry. Molecules and materials. The theoretical fit can be strong. Hardware-reachable molecules are chemically small.",
        "Classification, learning, or data. Kernels and similarity on scarce or expensive data. This is the most contested shape.",
        "Not presently quantum-shaped. A sourced write-up of that conclusion is a valid project.",
      ],
    },
    {
      heading: "Baseline first",
      paragraphs: [
        "Name the ordinary method you already have. Decide the metric, the instance size, and what “better” means before you book a QPU.",
        "Optimization problems can use the readiness engine as a separate tool. This page links to it and does not copy it. Other problem types do not go through that engine.",
      ],
    },
  ],
  links: [{ href: ENGINE_URL, label: "Optimization readiness engine" }],
  check: {
    question: "A hardware job with no measured classical baseline is…",
    options: ["Quantum advantage", "A demonstration", "A clinical result", "Proof the problem is quantum-shaped"],
    answer: 1,
    why: "The baseline is the comparison. Without it, the hardware tally is a demonstration.",
  },
  nextHref: "/charter",
  nextLabel: "Write the prototype charter",
};

const charter: StepPage = {
  slug: "charter",
  href: "/charter",
  number: "08",
  title: "Prototype charter",
  minutes: 25,
  purpose: "Read chapter 7 of Quantum Readiness for Leaders, then fill this site’s charter. The book is named by title and chapter. This page does not copy it.",
  sections: [
    {
      heading: "What is cited, and what you fill in",
      paragraphs: [
        "Chapter 7 of Quantum Readiness for Leaders is the attributed reading. The readiness engine is Quantum Global Group’s tool for optimization problems. The fields below are this workshop’s form.",
        "The public host for Assess and Build is not live yet. The engine link on the previous page is the module in the repository.",
      ],
    },
    {
      heading: "Charter fields",
      paragraphs: ["Write these before you ask for QPU time."],
      steps: [
        "Problem, in one sentence.",
        "Problem type: optimization; simulation or chemistry; classification, learning, or data; or not presently quantum-shaped.",
        "Who has the problem.",
        "The classical method used today.",
        "How that baseline will be measured, including the metric and the instance size.",
        "Success criteria for the bounded prototype, written before any quantum run.",
        "What you will build this weekend, and what you will not build.",
        "What you will not claim.",
        "The evidence that would stop the work.",
      ],
    },
  ],
  check: {
    question: "When do you write the success criteria?",
    options: ["After the hardware histogram looks good", "Before any quantum run", "Only if the engine is copied into this repo", "After the state championship"],
    answer: 1,
    why: "The charter fixes the test first. The run comes after.",
  },
  nextHref: "/hetionet",
  nextLabel: "Read the Hetionet case",
};

const hetionet: StepPage = {
  slug: "hetionet",
  href: "/hetionet",
  number: "09",
  title: "Hetionet case study",
  minutes: 15,
  purpose: "A classification and ranking study, not an optimization study. The quantum model did not beat the strongest classical model on its own.",
  sections: [
    {
      heading: "The comparison",
      paragraphs: [
        "This page paraphrases Quantum Kernel Link Prediction on Biomedical Knowledge Graphs, by Jonathan Beale, Kevin Robinson, Mark Jack, and Abdelrahman E. Ahmed. It does not paste the paper.",
        "On the verified primary configuration, test PR-AUC is hybrid stacking 0.7987, Random Forest 0.7838, Extra Trees 0.7807, and Pauli QSVC standalone 0.6343.",
        "The hybrid stack is the best of those four. Standalone Pauli QSVC is below both classical forests. That is not quantum advantage and not a clinical result.",
      ],
    },
    {
      heading: "What to copy as a habit",
      paragraphs: [
        "They named a metric, kept a classical baseline, and reported the comparison. A Fall Fest team can do that at a much smaller size. Do not train this model in the workshop.",
      ],
    },
  ],
  links: [{ href: HETIONET_REPO, label: "Hetionet repository" }],
  check: {
    question: "Which reading matches the primary comparison?",
    options: [
      "Standalone Pauli QSVC beat Random Forest",
      "The hybrid stack led, and the quantum model alone did not beat the strongest classical model",
      "The paper is a clinical result",
      "The paper is an optimization study",
    ],
    answer: 1,
    why: "0.7987 is the hybrid stack. 0.6343 is standalone Pauli QSVC, below 0.7838 and 0.7807.",
  },
  nextHref: "/resources",
  nextLabel: "Open the resource list",
};

const resources: StepPage = {
  slug: "resources",
  href: "/resources",
  number: "10",
  title: "Resources",
  minutes: 10,
  purpose: "One list. Official pages stay on their own sites. This repo does not copy courses, the book, or the engine.",
  sections: [
    {
      heading: "Event",
      paragraphs: [
        "Official registration: TBA. Discord: https://discord.gg/vz6uTbtJzR. Qiskit Slack: https://qisk.it/join-slack. Announcement: https://www.ibm.com/quantum/blog/qiskit-fall-fest-2026.",
      ],
    },
    {
      heading: "IBM Quantum Platform",
      paragraphs: [
        "Platform: https://quantum.cloud.ibm.com/. Cloud setup, instances, save-credentials, untrusted computers, plans, and Composer are linked from the account page and the Bell page.",
      ],
    },
    {
      heading: "Qiskit",
      paragraphs: [
        "Source: https://github.com/Qiskit/qiskit. Construct circuits: https://quantum.cloud.ibm.com/docs/en/guides/construct-circuits. Primitives: https://quantum.cloud.ibm.com/docs/en/api/qiskit/primitives. Learning: https://quantum.cloud.ibm.com/learning/en.",
        "Machine learning course: https://quantum.cloud.ibm.com/learning/en/courses/quantum-machine-learning. Kernel tutorials: https://quantum.cloud.ibm.com/docs/en/tutorials/quantum-kernel-training and https://quantum.cloud.ibm.com/docs/en/tutorials/projected-quantum-kernels.",
      ],
    },
    {
      heading: "Qolour",
      paragraphs: [
        `Educator course: ${QOLOR_COURSE}. Statevector exhibit: ${QOLOR_EXHIBIT}. The lesson is not in this repo.`,
      ],
    },
    {
      heading: "Case study and decision tool",
      paragraphs: [
        `Hetionet repository: ${HETIONET_REPO}. Optimization readiness engine: ${ENGINE_URL}. The public host for Assess and Build is not live yet.`,
      ],
    },
    {
      heading: "Book",
      paragraphs: ["Quantum Readiness for Leaders, by Robert Loredo. Read chapter 7, then use the charter on this site. The book is not copied here."],
    },
  ],
  links: [{ href: "/glossary", label: "Glossary" }],
  check: {
    question: "Where is the definition of a sampler?",
    options: ["A second glossary on every page", "The glossary linked from this site", "Inside the API key", "In a copied course"],
    answer: 1,
    why: "One glossary. Other pages point at it.",
  },
  nextHref: null,
  nextLabel: null,
};

export const START = start;

export const PAGES: StepPage[] = [account, bell, python, workflow, challenge, problem, charter, hetionet, resources];

export const JOURNEY: StepPage[] = [start, ...PAGES];

export function pageBySlug(slug: string) {
  return PAGES.find((page) => page.slug === slug);
}
