import { CONNECT_SAVE } from "@/content/exercise1";
import {
  EVENT,
  HETIONET_LINKS,
  HETIONET_REPO,
  IBM,
  QISKIT_APPROVED_SITE,
  QOLOR_COURSE,
  QOLOR_EXHIBIT,
} from "@/content/event";

/**
 * Provenance: FAU Fall Fest materials read 2026-09-25, cleaned to this spec on 2026-09-26.
 * IBM Quantum docs checked 2026-09-26. Hetionet evidence files checked the same day.
 * Dates and contacts come from content/event.ts.
 */

export const LAST_CHECKED = "2026-09-26";

const DECISION_GUIDE_URL = "https://www.quantumglobalgroup.io/qiskit-fall-fest/decision-guide/#/assess";

export type Check = {
  question: string;
  options: string[];
  answer: number;
  why: string;
};

export type Stage = {
  name: string;
  definition: string;
  code: string;
  input: string;
  output: string;
  vocabulary: string;
  why: string;
  mistake: string;
};

export type StepPage = {
  slug: string;
  href: string;
  number: string;
  title: string;
  minutes: number;
  purpose: string;
  sections: {
    id?: string;
    heading: string;
    paragraphs: string[];
    tone?: "callout";
    steps?: string[];
    linkedSteps?: { text: string; hrefs?: { href: string; label: string }[] }[];
    troubles?: { title: string; body: string }[];
    table?: { caption: string; headers: string[]; rows: string[][] };
    cards?: {
      id: string;
      title: string;
      paragraphs: string[];
      links?: { href: string; label: string }[];
    }[];
    embed?: { src: string; title: string };
  }[];
  table?: { caption: string; headers: string[]; rows: string[][] };
  code?: { filename: string; source: string };
  stages?: Stage[];
  showCircuit?: boolean;
  showHistogram?: boolean;
  glossaryTerms?: string[];
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

const MAP_CODE = `from qiskit import QuantumCircuit

bell_circuit = QuantumCircuit(2)
bell_circuit.h(0)
bell_circuit.cx(0, 1)`;

const CHOOSE_CODE = `from qiskit.primitives import StatevectorSampler

# Sampler returns counts. This is the hands-on primitive.
sampler = StatevectorSampler()

# Estimator estimates an expectation value.
# This workshop explains it and does not assign an Estimator lab.`;

const TRANSPILE_CODE = `# The local lab runs the logical circuit on StatevectorSampler.
# A QPU needs an ISA circuit: the device's gates and connections.
# from qiskit.transpiler import generate_preset_pass_manager
# isa_circuit = generate_preset_pass_manager(
#     backend=backend, optimization_level=1
# ).run(measured_circuit)`;

const EXECUTE_CODE = `measured_circuit = bell_circuit.copy()
measured_circuit.measure_all()
job = sampler.run([measured_circuit], shots=1024)`;

const POST_CODE = `result = job.result()
counts = result[0].data["meas"].get_counts()
print(counts)`;

const start: StepPage = {
  slug: "start",
  href: "/",
  number: "01",
  title: "Start here",
  minutes: 10,
  purpose: `Bring your curiosity. We’ll help with the qubits. Here are two simple ways to prepare: create your IBM Quantum account and start thinking about a problem or topic that interests you. No prior quantum experience is required—we’ll guide you through the rest together. ${EVENT.name} is part of ${EVENT.series}. You will leave with an account, one Bell state, and an honest project frame. You are not expected to prove that quantum computing is better than classical computing. Your goal is to define a meaningful problem, explore an appropriate quantum approach, compare it with a classical method when possible, document what happened, and explain what you learned—including the limitations.`,
  sections: [
    {
      id: "prepare",
      heading: "Before you arrive",
      paragraphs: [
        "Essential pre-work is only what you need to access the event. A half-formed idea is a wonderful start. Both pathways are full roles, and coding is optional for the Domain/Industry Expert.",
      ],
      steps: [
        "Required before participating: your own IBM Quantum account. Official registration is Coming soon. Until then, the attendance form on this site tells us you are coming. It does not collect passwords, API keys, or CRNs.",
        `Recommended before the workshop: a GitHub account, a look at what a project can be, and a topic or problem that interests you. Ask to join the private project repository at ${EVENT.participantRepo}. Send your GitHub username.`,
        "Optional next step: a few minutes in Composer, a short IBM course, or a local Qiskit install if you already like working that way.",
        "We will complete this together: the Bell labs, team formation, and the submission walk-through.",
      ],
    },
    {
      id: "event",
      heading: "The event",
      paragraphs: [
        `The theme is ${EVENT.theme}. ${EVENT.themeSummary}`,
        `Kickoff and challenge release: ${EVENT.kickoff}. Local events: ${EVENT.localEvents}. First-place local winner deadline: ${EVENT.winnerDeadline}. Statewide announcement: ${EVENT.statewideAnnouncement}. Capacity is ${EVENT.capacity}.`,
        `The host directory below lists all six universities. A confirmed venue and a local registration link are on the card. Anything still open says ${EVENT.unconfirmedDetails}. The shared code of conduct is ${EVENT.codeOfConduct}. The shared rubric is ${EVENT.rubric}.`,
        `Unresolved program questions go to Kevin Robinson at ${EVENT.programEmail}. The chat is ${EVENT.discord}. The announcement is ${IBM.announcement}. The Qiskit-approved website is ${QISKIT_APPROVED_SITE}.`,
      ],
    },
    {
      id: "produce",
      heading: "What you will produce",
      paragraphs: [
        "Work through these steps. Each one opens the full lab or handbook section. A strong project can also conclude that a problem is not a good fit for a quantum method. That conclusion needs a source and a reason.",
      ],
      linkedSteps: [
        {
          text: `Get access. Open Plan is ${EVENT.openPlan}. Simulators first. The limit is explained at ${IBM.maxExecutionTime}.`,
          hrefs: [{ href: "/account/", label: "Account and tools" }],
        },
        {
          text: "Learn the two circuit-building approaches: IBM Quantum Composer, and Python and Qiskit. The Bell state connects them.",
          hrefs: [
            { href: "/bell/", label: "Composer lab" },
            { href: "/python/", label: "Python and Qiskit lab" },
          ],
        },
        {
          text: "Understand the Qiskit workflow: build the circuit (map), add measurements or name an observable, transpile for a device when you need one, execute with a primitive, then retrieve and interpret the result. A sampler returns measured bitstrings. An estimator returns one number for an observable. A backend is the simulator or processor you run on. A job is that run. Shots are how many times you run it. An ISA circuit is the version rewritten for that device. The result is what comes back, and your job is to explain it.",
          hrefs: [{ href: "/workflow/", label: "Qiskit workflow" }],
        },
        {
          text: "Establish the classical baseline before you compare anything.",
          hrefs: [{ href: "/problem/", label: "Project frame" }],
        },
        {
          text: "Compare responsibly. Do not promise the quantum result will outperform the classical one.",
          hrefs: [{ href: "/benchmarking/", label: "Benchmarking" }],
        },
        {
          text: "Build one of the four project types: a mapped problem, a benchmark, a tool, or an analysis. Document what you tried and what the run cannot support.",
          hrefs: [
            { href: "/problem/", label: "Project frame" },
            { href: "/handbook/#2-what-you-are-actually-going-to-build", label: "What you are actually going to build" },
          ],
        },
        {
          text: "Submit and present through the approved GitHub branch and pull-request process.",
          hrefs: [{ href: "/submit/", label: "Submission guide" }],
        },
      ],
    },
    {
      id: "workshop-1",
      heading: "Workshop 1: Qiskit Foundations",
      paragraphs: [
        "Two hours. The cards below introduce the blocks. The full labs are the linked pages. Kevin Robinson’s videos are for before or after this block. Titles will be listed when they are confirmed.",
      ],
      linkedSteps: [
        { text: "Welcome, then your own IBM account.", hrefs: [{ href: "/account/", label: "Account and tools" }] },
        {
          text: "Open the workshop lesson, Quantum from Zero to One. Andrew Chen of Qolour introduces the ideas with the handheld Qubi.",
          hrefs: [{ href: "/qolour/", label: "Quantum from Zero to One" }],
        },
        { text: "The words the Bell lab needs.", hrefs: [{ href: "/vocabulary/", label: "Vocabulary" }] },
        { text: "One Bell state in Composer, then the same circuit in Python and Qiskit.", hrefs: [{ href: "/bell/", label: "Composer" }, { href: "/python/", label: "Python" }] },
        { text: "Map, transpile, execute, and interpret.", hrefs: [{ href: "/workflow/", label: "Workflow" }] },
      ],
    },
    {
      id: "workshop-2",
      heading: "Workshop 2: Project Readiness and Submission",
      paragraphs: [
        "About 75 to 90 minutes. The Domain/Industry Expert and the Builder/Developer Expert are equal. Coding is optional for the Domain/Industry Expert.",
      ],
      linkedSteps: [
        { text: "Choose a pathway and see the shared responsibilities.", hrefs: [{ href: "/roles/", label: "Two pathways" }] },
        { text: "Frame a problem and write the classical baseline.", hrefs: [{ href: "/problem/", label: "Project frame" }] },
        { text: "Walk the benchmarking sequence.", hrefs: [{ href: "/benchmarking/", label: "Benchmarking" }] },
        { text: "Read the Hetionet example as a finished packet, not as the minimum bar.", hrefs: [{ href: "/hetionet/", label: "Hetionet example" }] },
        { text: "Form a team, then open a pull request from the template.", hrefs: [{ href: "/team/", label: "Form a team" }, { href: "/submit/", label: "Submit" }] },
      ],
    },
  ],
  links: [
    { href: "/handbook/", label: "Participant handbook" },
    { href: "/roles/", label: "Domain/Industry Expert and Builder/Developer Expert" },
    { href: "/catalog/", label: "Notebook catalog" },
    { href: "/support/", label: "Troubleshooting and support" },
    { href: EVENT.discord, label: "Discord" },
    { href: QISKIT_APPROVED_SITE, label: "Qiskit-approved website" },
  ],
  check: {
    question: "What does a successful path through this site produce?",
    options: [
      "A paper claiming quantum computing is better than classical computing",
      "An account, one Bell state, and an honest next step",
      "A proof that quantum computers replace classical ones",
      "A finished clinical result",
    ],
    answer: 1,
    why: "The work is a process. You define a problem, try an approach, compare it when you can, and write down what you learned, including the limits.",
  },
  nextHref: "/account/",
  nextLabel: "Prepare your account and tools",
};

const account: StepPage = {
  slug: "account",
  href: "/account/",
  number: "02",
  title: "Account and tools",
  minutes: 40,
  purpose: "Create your own IBM Quantum Platform account, your own Open Plan instance, and your own API key. This site never collects passwords, API keys, or CRNs.",
  sections: [
    {
      heading: "Your own account",
      paragraphs: [
        `Checked against IBM’s plans and cloud-setup guides on ${LAST_CHECKED}. If a screen disagrees with this list, follow the guide.`,
        "Participants create their own accounts. There is no shared login. Sign in with an IBMid or a Google account. Those login credentials are not the same thing as an API key.",
        `Create the Open Plan instance in ${EVENT.region}. You can see only the instances in the region you are logged into. The Open Plan is ${EVENT.openPlan}. Simulators first. Read the current limit at ${IBM.maxExecutionTime}. The Bell lab starts on a local simulator and does not spend that window.`,
      ],
      steps: [
        "Open IBM Quantum Platform and create your own account if you need one.",
        "Sign in. Confirm the account name in the header.",
        `Create the Open Plan instance in ${EVENT.region}.`,
        "Copy the instance CRN into a private note. The examples below keep the CRN as a placeholder.",
        "Generate an API key on a machine you trust. It may be shown only once. Save it privately.",
        "Confirm access without showing the secret: open Composer and check that qubit wires appear. Do not screenshot the key or the CRN.",
        "If a key is exposed, revoke it in the dashboard and create a replacement. The old key stops working. Do not paste either key here.",
      ],
    },
    {
      heading: "Protect the key",
      paragraphs: [
        "On a trusted personal computer you may save the account locally with the snippet below. Replace the placeholders on your machine. Do not commit the filled cell.",
        "On a lab machine, a public notebook, or a projected screen, do not call save_account(). Use IBM’s untrusted-environment guide, and revoke the key after the session when that is appropriate.",
      ],
    },
    {
      heading: "If something fails",
      paragraphs: [
        `${EVENT.facilitatorDefined} ${EVENT.stuckLogin} Do not create a second account until you know which email you already used.`,
        EVENT.contactOrder,
      ],
      troubles: [
        { title: "Confirmation email missing", body: "What may have happened: the message is in spam, or it is still on its way. Check spam, wait, and resend once. Ask a workshop facilitator if it still does not arrive. You can keep following the projected demonstration while you wait." },
        { title: "A different account or region", body: `What may have happened: the header is on another region, so the Open Plan instance stays hidden. Open Plan instances live in ${EVENT.region}. Switch the header, then read the account name. A facilitator can look with you. The Bell lab can run on the simulator in the meantime.` },
        { title: "Open Plan not visible", body: "What may have happened: the region or the signed-in account is not the one that holds the plan. Confirm both. Ask your university lead if it is still missing. The Bell lab can still run on the simulator while that is resolved." },
        { title: "Composer does not load", body: "What may have happened: the page stalled, or the browser is an older one. Refresh once. Current Chrome, Edge, or Firefox usually load it. Tell a facilitator if it still does not. The Python lab on the next pages can wait, and you can keep reading the circuit here." },
      ],
    },
  ],
  code: { filename: "Save the Open Plan account on a trusted computer", source: CONNECT_SAVE },
  links: [
    { href: IBM.platform, label: "IBM Quantum Platform" },
    { href: IBM.cloudSetup, label: "Set up your IBM Cloud account" },
    { href: IBM.instances, label: "Create and manage instances" },
    { href: IBM.saveCredentials, label: "Save credentials" },
    { href: IBM.untrusted, label: "Untrusted computers" },
    { href: IBM.plans, label: "Plan comparison" },
    { href: IBM.composer, label: "Composer" },
    { href: "/handbook/#4-step-one-ibm-quantum-platform-account", label: "Handbook: IBM account" },
  ],
  check: {
    question: "Where do the API key and the CRN belong?",
    options: ["In this website", "In a chat message", "Only in your private note or a trusted local file", "In a GitHub issue"],
    answer: 2,
    why: "This site does not collect credentials. Revoke a key that leaves that private place, and create a replacement.",
  },
  nextHref: "/vocabulary/",
  nextLabel: "Learn the words this circuit uses",
};

const vocabulary: StepPage = {
  slug: "vocabulary",
  href: "/vocabulary/",
  number: "03",
  title: "Basic quantum vocabulary",
  minutes: 20,
  purpose: "The words for one Bell state. The workshop lesson is Quantum from Zero to One, by Andrew Chen of Qolour. The full definition list is the glossary.",
  sections: [
    {
      heading: "Qubi and Qolour",
      paragraphs: [
        "The workshop lesson is Quantum from Zero to One. Andrew Chen, Qolour (andrew@qolour.com), wrote this 0-to-1 introduction. It uses Qolour’s handheld Qubi. Open the PDF from the lesson page, then come back for the words the Bell lab needs.",
        "The educator course stays on Qolour’s site. This page does not copy it.",
      ],
    },
    {
      heading: "Words for the lab",
      paragraphs: [
        "Read the plain sentence and the technical sentence. The glossary holds the rest of the list, including gates that this lab does not use.",
      ],
    },
  ],
  glossaryTerms: [
    "Qubit",
    "State",
    "Superposition",
    "Entanglement",
    "Hadamard gate",
    "CNOT or CX gate",
    "Measurement",
    "Shot",
    "Counts",
  ],
  links: [
    { href: "/qolour/", label: "Quantum from Zero to One" },
    { href: "/downloads/qolour-quantum-from-zero-to-one.pdf", label: "Open or download Quantum from Zero to One (PDF)" },
    { href: QOLOR_COURSE, label: "Qolour educator course" },
    { href: QOLOR_EXHIBIT, label: "Qolour statevector exhibit" },
    { href: "/glossary/", label: "Full glossary" },
  ],
  check: {
    question: "What does one measurement of a qubit return?",
    options: [
      "The full list of amplitudes",
      "One basis outcome",
      "An API key",
      "A proof that quantum computing is better than classical computing",
    ],
    answer: 1,
    why: "A shot returns one outcome. Repeating the shot builds the counts.",
  },
  nextHref: "/bell/",
  nextLabel: "Build the Bell state in Composer",
};

const bell: StepPage = {
  slug: "bell",
  href: "/bell/",
  number: "04",
  title: "Bell state in Composer",
  minutes: 25,
  purpose: "One circuit. H on qubit 0, CX with control 0 and target 1, then measure. Predict, then simulate.",
  sections: [
    {
      heading: "Build it",
      paragraphs: [
        "Write the prediction before you run: the ideal simulation piles on 00 and 11. Counts on 01 and 10 are missing or tiny.",
        "Qiskit prints bitstrings with qubit 0 on the right. In this circuit, 00 and 11 look the same if you reverse them. The rightmost bit is still qubit 0.",
        "A hardware compare is optional. It uses the Open Plan window. Hardware can show 01 and 10 because of noise. Start on the simulator.",
      ],
      steps: [
        "Open Composer and create a circuit with two wires.",
        "Place H on qubit 0.",
        "Place CX with control on qubit 0 and target on qubit 1.",
        "Measure both qubits.",
        "Read left to right: H, then CX, then measurement.",
        "Run the ideal simulation and compare it with the histogram on this page.",
      ],
      troubles: [
        { title: "The histogram is flat", body: "What may have happened: H is on a different qubit, or CX has the control and target swapped. Check that H is on qubit 0 and that CX uses qubit 0 as control and qubit 1 as target. A facilitator can look at the wires with you. You can keep adjusting on the simulator." },
        { title: "01 and 10 appeared on hardware", body: "What may have happened: hardware noise added counts the ideal circuit does not predict. That can happen on a QPU. The ideal simulator should still pile on 00 and 11. Ask a facilitator if you want a second pair of eyes. Keep the simulator result as the picture of the circuit you wrote." },
        { title: "Composer does not load", body: "What may have happened: the page stalled. Refresh once, and try current Chrome, Edge, or Firefox. Tell a facilitator if it stays blank. The Python lab on the next page does not need Composer, so you can keep learning there." },
      ],
    },
  ],
  showCircuit: true,
  showHistogram: true,
  links: [
    { href: "/qolour/", label: "Quantum from Zero to One" },
    { href: IBM.composer, label: "IBM Quantum Composer" },
    { href: IBM.composerGuide, label: "Composer guide" },
  ],
  check: {
    question: "Which ideal outcomes should dominate?",
    options: ["01 and 10", "00 and 11", "Only 00", "All four equally"],
    answer: 1,
    why: "H then CX, with this control and target, puts amplitude on |00⟩ and |11⟩.",
  },
  nextHref: "/python/",
  nextLabel: "Rebuild the same circuit in Python",
};

const python: StepPage = {
  slug: "python",
  href: "/python/",
  number: "05",
  title: "Bell state in Python and Qiskit",
  minutes: 40,
  purpose: `The same Bell circuit, in current Qiskit, on a local sampler. The notebook pins ${EVENT.qiskitPin}. No API key belongs in it.`,
  sections: [
    {
      heading: "Install",
      paragraphs: [
        `This lab pins ${EVENT.qiskitPin}. The notebook is notebooks/bell_state_lab.ipynb. Install requirements.txt in a virtual environment.`,
        "StatevectorSampler runs on your computer. It does not spend Open Plan time. Copy the circuit before measure_all() so the unmeasured circuit is still available.",
        "The Python words in the table are the words this code uses. There is no separate vocabulary lecture on this page.",
      ],
      troubles: [
        { title: "ModuleNotFoundError: qiskit", body: "The notebook kernel is not the environment where you installed Qiskit. Activate the virtual environment, then start Jupyter from that shell." },
        { title: "The counts use a different name than meas", body: "measure_all() names the classical register meas in this version. Read result[0].data[\"meas\"]." },
        { title: "An API key is about to go into the notebook", body: "Please pause. This cell does not need an API key, and a key in a notebook can be copied by accident. A hardware run is a later, optional step. If a key was shown, revoke it in the IBM dashboard and create a replacement. You can keep learning on the simulator. Ask a facilitator without pasting the key." },
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
  showCircuit: true,
  showHistogram: true,
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
  nextHref: "/workflow/",
  nextLabel: "Follow one Bell state through Qiskit",
};

const workflow: StepPage = {
  slug: "workflow",
  href: "/workflow/",
  number: "06",
  title: "How Qiskit Works: One Bell State, End to End",
  minutes: 25,
  purpose: "Map the Bell pair, choose a primitive, transpile only when a device requires it, execute, then post-process the counts. Sampler is the hands-on primitive. Estimator is conceptual.",
  sections: [
    {
      heading: "Logical circuit and ISA circuit",
      paragraphs: [
        "The logical circuit is the one you wrote: H, CX, and measurement, with no device constraints.",
        "An ISA circuit is that program rewritten for one backend’s basis gates and qubit connections. A local statevector sampler can run the logical circuit. A QPU cannot, until a pass manager has produced the ISA circuit.",
        "IBM’s hello-world guide uses this same shape and then continues into a much larger example. That larger example is not a second lab here.",
      ],
    },
  ],
  stages: [
    {
      name: "Map",
      definition: "Write the problem as a circuit. In this workshop the problem is the Bell pair.",
      code: MAP_CODE,
      input: "Two qubits, both starting in |0⟩, and the gates you intend.",
      output: "A QuantumCircuit object. Nothing has been run.",
      vocabulary: "Circuit, gate, qubit. H and CX are the gates in this map.",
      why: "Every later step uses this object. If the gates land on different qubits, the run still finishes, and it shows a different state.",
      mistake: "What may have happened: H is on qubit 1, or the CX control and target are swapped. Check those two wires and run the simulator again. A facilitator can look with you, and you can keep learning from the histogram while you adjust.",
    },
    {
      name: "Choose Sampler or Estimator",
      definition: "A primitive is the interface that runs the circuit. A sampler returns a distribution of bitstrings. An estimator returns an expectation value of an observable.",
      code: CHOOSE_CODE,
      input: "The question you are asking: counts, or an expectation value.",
      output: "A primitive object. The Bell lab chooses StatevectorSampler.",
      vocabulary: "Sampler, Estimator, primitive. Counts belong to the sampler.",
      why: "The lab reads a histogram. That is sampler data. Estimator answers a different question.",
      mistake: "What may have happened: an estimator was asked for a histogram, or a sampler was asked for an expectation value. This lab uses a sampler because it wants counts. Switch the primitive and run again. The glossary defines both, and a facilitator can point at the line.",
    },
    {
      name: "Transpile",
      definition: "Rewrite the logical circuit into the instructions a chosen backend can run. This ideal lab does not transpile.",
      code: TRANSPILE_CODE,
      input: "The logical circuit and, on hardware, a backend.",
      output: "An ISA circuit when a backend is present. On the local sampler, you keep the logical circuit.",
      vocabulary: "Transpile, backend, ISA circuit, basis gates.",
      why: "A QPU rejects gates and connections it does not have. The simulator used here does not need that rewrite.",
      mistake: "What may have happened: the circuit was transpiled before the logical gates were checked, so a wiring slip and hardware noise showed up together. Confirm the logical circuit on the simulator first. That saves QPU time and makes the next step easier to read.",
    },
    {
      name: "Execute",
      definition: "Hand the measured circuit to the primitive for a number of shots. The job is the handle for that run.",
      code: EXECUTE_CODE,
      input: "The measured circuit and shots=1024.",
      output: "A job. On the local sampler it finishes on your computer.",
      vocabulary: "Job, shot, backend. A shot is one execution of the measured circuit.",
      why: "Quantum outcomes are samples. One shot is one bitstring, not the distribution.",
      mistake: "What may have happened: shots was 1, so one bitstring was read as the whole state. Raise the shot count and run the simulator again. One shot is one sample, and that is a normal thing to discover.",
    },
    {
      name: "Post-process",
      definition: "Turn the finished job into counts and read them. Qubit 0 is the rightmost bit.",
      code: POST_CODE,
      input: "The finished job.",
      output: "A dictionary of bitstrings and tallies. Ideal mass sits on 00 and 11.",
      vocabulary: "Result, counts, histogram. Counts are tallies, not amplitudes.",
      why: "The histogram is the observation. It is not, by itself, a complete proof of entanglement. You are not expected to prove that a quantum method is better than a classical one from this picture alone.",
      mistake: "What may have happened: the left bit was read as qubit 0, or hardware noise was read as a new Bell state. Qubit 0 is the rightmost bit. Noise on 01 and 10 can appear on a QPU. Compare with the simulator, and ask a facilitator if the picture still looks surprising. You can keep learning from the ideal counts.",
    },
  ],
  links: [
    { href: IBM.qiskitRepo, label: "Qiskit repository" },
    { href: IBM.helloWorld, label: "Hello world" },
    { href: IBM.patterns, label: "Introduction to Qiskit patterns" },
    { href: IBM.composerGuide, label: "Composer" },
    { href: IBM.tutorials, label: "Qiskit tutorials" },
    { href: IBM.api, label: "API reference" },
    { href: "/glossary/", label: "Glossary" },
  ],
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
  nextHref: "/roles/",
  nextLabel: "Choose a pathway",
};

const roles: StepPage = {
  slug: "roles",
  href: "/roles/",
  number: "07",
  title: "Two pathways",
  minutes: 20,
  purpose:
    "The Domain/Industry Expert and the Builder/Developer Expert are equal. Coding is optional for the Domain/Industry Expert. The long-form source on this page is Domain/Industry Expert and Builder/Developer Expert.",
  sections: [
    {
      heading: "Start with the guide on this page",
      paragraphs: [
        "The complete pathway guide is rendered below. It names what each expert may take on, and it keeps the shared responsibility matrix. Python is expected for the Builder/Developer Expert. A physics degree is not required. The Domain/Industry Expert does not need to install Python, and may read notebooks without writing them.",
      ],
    },
  ],
  links: [
    { href: "/roles/#two-pathways", label: "Two pathways" },
    { href: "/roles/#shared-responsibility", label: "Shared responsibility" },
    { href: "/handbook/#3-two-pathways-one-team", label: "Handbook: two pathways" },
    { href: "https://www.linkedin.com/pulse/domain-track-entangled-solutions-group-tgrwe/", label: "Domain track, Entangled Solutions Group" },
    { href: "/catalog/", label: "Notebook catalog" },
  ],
  check: {
    question: "Does the Domain/Industry Expert pathway require Python?",
    options: [
      "Yes. Every participant installs Qiskit.",
      "No. A domain partner can frame the problem without writing Python.",
      "Only if the team skips the classical baseline.",
      "Only on hardware.",
    ],
    answer: 1,
    why: "The tracks are equal. Python is the builder tool, not the price of admission.",
  },
  nextHref: "/problem/",
  nextLabel: "Frame a project and a classical baseline",
};

const problem: StepPage = {
  slug: "problem",
  href: "/problem/",
  number: "08",
  title: "Project frame and classical baseline",
  minutes: 20,
  purpose:
    "Choose one of the four project types and write the classical baseline before any quantum run. A hardware run without that measurement is a demonstration. The handbook section is the long form.",
  sections: [
    {
      id: "what-you-are-actually-going-to-build",
      heading: "What you are actually going to build",
      paragraphs: [
        "Quantum advantage means demonstrating, through a fair comparison, that a quantum method outperforms the best relevant classical approach on a useful problem. You are not expected to prove that during a 48-hour hackathon. Your goal is to build a well-scoped project, create credible evidence, and explain honestly what the evidence does and does not show.",
      ],
      cards: [
        {
          id: "a-mapped-problem",
          title: "A mapped problem",
          paragraphs: [
            "Start from a real industry problem. Name who has it and how it is handled today, then write the variables, constraints, objectives, data, and success metrics. Map that statement to a QUBO, a Hamiltonian, a kernel, a circuit, or another quantum representation. A small simulator or approved-hardware example is useful when it stays honest about size. State the gap between the demo and a meaningful instance, and name what must change in the hardware, the algorithms, the data, or the industry conditions. A Domain/Industry Expert or other subject-matter expert is especially valuable here.",
          ],
          links: [
            { href: "/handbook/#a-mapped-problem", label: "Mapped problem in the handbook" },
            { href: DECISION_GUIDE_URL, label: "Assess an optimization problem with the Next-Step Quantum Decision Guide" },
            { href: "/benchmarking/", label: "Review the complete benchmarking sequence" },
          ],
        },
        {
          id: "a-benchmark-or-comparison",
          title: "A benchmark or comparison",
          paragraphs: [
            "Hold one bounded problem fixed and run it classically and with the quantum method. Use the same definition and comparable inputs. Choose the metric before the run, then record configurations, instance sizes, timing, quality, and resource use. You can discuss where a future crossover might occur and what blocks it. A project does not have to find or predict a crossover. Report the result when the classical method stays ahead.",
          ],
          links: [
            { href: "/handbook/#a-benchmark-or-comparison", label: "Benchmark or comparison in the handbook" },
            { href: "/benchmarking/", label: "Build your benchmark plan" },
            { href: "/benchmarking/", label: "Open the benchmarking and readiness guide" },
            { href: DECISION_GUIDE_URL, label: "Next-Step Quantum Decision Guide for an optimization comparison" },
          ],
        },
        {
          id: "a-tool",
          title: "A tool",
          paragraphs: [
            "A tool might visualize a circuit or a state, translate a domain format into a QUBO, a Hamiltonian, a kernel, or a circuit, teach a step, assist a workflow or a benchmark, or track resources and evidence. Say who it is for, what they provide, what they receive, why that matters, and where it stops. A polished interface without a meaningful user problem is not enough.",
          ],
          links: [{ href: "/handbook/#a-tool", label: "Tool projects in the handbook" }],
        },
        {
          id: "an-analysis",
          title: "An analysis",
          paragraphs: [
            "Assess whether quantum computing fits a sector or a problem. Compare the classical methods used now with quantum approaches that might apply, including the hardware and resource gap. Policy, risk, deployment, and readiness are in scope. A well-supported “not a fit yet” or “not quantum-shaped” conclusion is a complete project when the technical claims match current hardware and algorithms, and the sources are credible.",
          ],
          links: [{ href: "/handbook/#an-analysis", label: "Analysis projects in the handbook" }],
        },
      ],
    },
    {
      id: "project-type-roles",
      heading: "Who leads which type",
      tone: "callout",
      paragraphs: [
        "Mapped-problem and analysis projects can be led primarily by Domain/Industry participants. Benchmark and tool projects generally require more Builder/Developer work. All four become stronger when someone understands what the output means in the real world.",
      ],
    },
    {
      id: "choose-your-next-step",
      heading: "Choose your next step",
      tone: "callout",
      paragraphs: [
        "The decision guide is for optimization-shaped problems. Do not force simulation, chemistry, classification, link prediction, or other non-optimization problems through an optimization-only assessment. Those projects still use: Problem → Current method → Classical baseline → Quantum hypothesis → Experiment → Metrics → Evidence → Limitations → Recommendation.",
      ],
      linkedSteps: [
        { text: "", hrefs: [{ href: "/benchmarking/", label: "Use the Benchmarking Sequence" }] },
        { text: "", hrefs: [{ href: DECISION_GUIDE_URL, label: "Open the Next-Step Quantum Decision Guide" }] },
      ],
    },
  ],
  links: [
    { href: "/handbook/#2-what-you-are-actually-going-to-build", label: "Handbook: what you are actually going to build" },
    { href: "/roles/#5-the-use-case-canvas", label: "Use-case canvas for both pathways" },
  ],
  check: {
    question: "A hardware job with no measured classical baseline is…",
    options: ["Proof that quantum computing beat classical computing", "A demonstration", "A clinical result", "Proof the problem is quantum-shaped"],
    answer: 1,
    why: "The baseline is the comparison. Without it, the hardware tally is a demonstration.",
  },
  nextHref: "/benchmarking/",
  nextLabel: "Use the benchmarking sequence",
};

const benchmarking: StepPage = {
  slug: "benchmarking",
  href: "/benchmarking/",
  number: "09",
  title: "Benchmarking and readiness",
  minutes: 25,
  purpose: "Chapter 7 of Quantum Readiness for Leaders is the attributed reading. The sequence below is this workshop’s exercise. The book is not copied here.",
  sections: [
    {
      heading: "What the chapter is, and what this page adds",
      paragraphs: [
        "Chapter 7 of Quantum Readiness for Leaders, by Robert Loredo, is titled Prototyping and Proof-of-Concept Development (Packt, 2026). Public tables of contents place that chapter with the work of trying a small application before an organization commits. This page does not reproduce the chapter, its questions, its tables, or its layout.",
        "For Fall Fest, a prototype is a bounded test with the evidence written down before the run. A recommendation may be to stop.",
      ],
    },
    {
      heading: "The sequence",
      paragraphs: ["Write these in an order that helps the team. The quantum hypothesis may be that a quantum method is not the right fit. That is a useful result, and the Domain/Industry Expert pathway is often the one that can say so."],
      steps: [
        "Problem. One sentence a newcomer can repeat.",
        "Current method. How the work is done today.",
        "Classical baseline. The metric, the instance size, and the score you will compare against.",
        "Quantum hypothesis. What a quantum step might change, and what would show that it did not.",
        "Experiment. The smallest run that could inform the hypothesis. Simulator first.",
        "Metrics. The numbers you agreed to collect.",
        "Evidence. The files, plots, and configuration that produced those numbers.",
        "Limitations. What the run cannot support.",
        "Recommendation. Continue, narrow the question, or stop.",
      ],
    },
    {
      id: "decision-guide",
      heading: "Next-Step Quantum Decision Guide",
      paragraphs: [
        "The project-framing page and the glossary define quantum advantage. This event does not ask you to show it.",
        "The guide below is the live Next-Step Quantum Decision Guide. It loads without an account. Use it for optimization-shaped problems only. Simulation, chemistry, classification, link prediction, and other non-optimization projects stay on the sequence above. Hetionet is classification and link prediction. It is not an optimization result, and it is not a clinical result.",
      ],
      embed: { src: DECISION_GUIDE_URL, title: "Next-Step Quantum Decision Guide" },
    },
    {
      heading: "Charter fields",
      paragraphs: ["These fields are the workshop form. They are not a page from the book."],
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
  links: [{ href: DECISION_GUIDE_URL, label: "Next-Step Quantum Decision Guide" }],
  check: {
    question: "When do you write the success criteria?",
    options: ["After the hardware histogram looks good", "Before any quantum run", "Only if a private tool is copied into this repo", "After the statewide announcement"],
    answer: 1,
    why: "The charter fixes the test first. The run comes after.",
  },
  nextHref: "/hetionet/",
  nextLabel: "Study the Hetionet example",
};

const hetionet: StepPage = {
  slug: "hetionet",
  href: "/hetionet/",
  number: "10",
  title: "Hetionet example",
  minutes: 20,
  purpose: "A finished classification study, not the minimum bar and not an optimization study. The quantum model did not beat the strongest classical model on its own.",
  sections: [
    {
      heading: "From problem to submission",
      paragraphs: [
        "This page paraphrases Quantum Kernel Link Prediction on Biomedical Knowledge Graphs, by Jonathan Beale, Kevin Robinson, Mark Jack, and Abdelrahman E. Ahmed. It does not paste the paper, and it does not copy the notebooks into this repository.",
      ],
      steps: [
        "Problem: rank possible Compound-treats-Disease links. That is a classification and ranking question.",
        "Current method and classical baseline: tuned Random Forest and Extra Trees, among other classical models.",
        "Quantum hypothesis: a quantum kernel might add a useful signal inside a hybrid stack. The project also records where it does not.",
        "Experiment: ingest the graph, fit the classical baseline, train the quantum model, and test. Those are notebooks 01 through 04.",
        "Metrics: test PR-AUC on the verified primary configuration.",
        "Evidence: the README, PAPER.md, RESULTS_EVIDENCE.md, and ACTUAL_VS_EXPLORATION_RESULTS.md.",
        "Limitation: this comparison does not show quantum advantage, the term defined on the benchmarking page and in the glossary, and it is not a clinical result.",
        "The handbook’s final step turns this example into a checklist for your own project. Keep the structure, replace the problem, and do not copy Hetionet.",
        "Recommendation a Fall Fest team can copy as a habit: name the metric, keep the baseline, and publish the comparison at a much smaller size. Do not train this model in the workshop.",
      ],
    },
    {
      heading: "Primary scores",
      paragraphs: [
        "On the verified primary configuration, test PR-AUC is hybrid stacking 0.7987, Random Forest 0.7838, and Extra Trees 0.7807. Standalone Pauli QSVC on that configuration is below both forests.",
        "If you see 0.8581, read it this way: the quantum kernel was cached while the classical pieces were tuned with Optuna. That number is not a fresh quantum win over the primary comparison.",
      ],
    },
  ],
  links: [
    { href: "/handbook/#12-final-step-study-hetionet-and-build-your-project-framework", label: "Handbook: study Hetionet and build your framework" },
    { href: HETIONET_LINKS.readme, label: "Public README" },
    { href: HETIONET_LINKS.paper, label: "PAPER.md" },
    { href: HETIONET_LINKS.results, label: "RESULTS_EVIDENCE.md" },
    { href: HETIONET_LINKS.actualVsExploration, label: "ACTUAL_VS_EXPLORATION_RESULTS.md" },
    { href: HETIONET_LINKS.notebooks[0], label: "01-kg-ingestion" },
    { href: HETIONET_LINKS.notebooks[1], label: "02-classical-baseline" },
    { href: HETIONET_LINKS.notebooks[2], label: "03-qml-training" },
    { href: HETIONET_LINKS.notebooks[3], label: "04-testing" },
    { href: HETIONET_LINKS.glossary, label: "Presentation glossary" },
    { href: HETIONET_LINKS.demo, label: "Hetionet demo" },
  ],
  check: {
    question: "Which reading matches the primary comparison?",
    options: [
      "Standalone Pauli QSVC beat Random Forest, which is quantum advantage",
      "The hybrid stack led, and the quantum model alone did not beat the strongest classical model",
      "The paper is a clinical result",
      "The paper is an optimization study for the readiness tool",
    ],
    answer: 1,
    why: "0.7987 is the hybrid stack. 0.7838 and 0.7807 are the classical forests. The cached 0.8581 run is a different configuration.",
  },
  nextHref: "/team/",
  nextLabel: "Form a team",
};

const team: StepPage = {
  slug: "team",
  href: "/team/",
  number: "11",
  title: "Form a team",
  minutes: 15,
  purpose: "Team formation is at kickoff. You do not need a team before then. Name the jobs even if one person holds two of them for a weekend.",
  sections: [
    {
      heading: "Six roles",
      paragraphs: [
        `Capacity is ${EVENT.capacity}. A published team-size cap beyond that room limit is ${EVENT.unconfirmedDetails}.`,
        "The Domain guide describes day-one jobs such as framing and storytelling. Those jobs sit inside the roles below. They do not create a second team system.",
      ],
      steps: [
        "Domain/Problem Lead. Owns the problem statement and USE-CASE.md.",
        "Data Lead. Knows what the data is, what was left out, and what would leak.",
        "Classical Baseline Lead. Produces the score the quantum run has to face.",
        "Quantum/Qiskit Lead. Owns the circuit or the written reason there is no circuit.",
        "Benchmark/Evidence Lead. Keeps the metric, the configuration, and the limitation next to every number.",
        "Documentation/Demo/Pitch Lead. Owns the README, the demo, and the five-minute story.",
      ],
    },
    {
      heading: "How to find each other",
      paragraphs: [
        `Bring a half-finished use-case canvas from the Domain guide. Read it aloud at team formation on ${EVENT.kickoff}. Builders are looking for a real problem. Domain partners are looking for someone who will write the limitation down.`,
      ],
    },
  ],
  links: [
    { href: "/roles/#5-the-use-case-canvas", label: "Use-case canvas" },
    { href: EVENT.discord, label: "Discord" },
  ],
  check: {
    question: "When do you have to arrive with a finished team?",
    options: [
      "Before you create an IBM account",
      "You do not. Formation is part of kickoff.",
      "Only if you are the Domain/Industry Expert",
      "After the statewide announcement",
    ],
    answer: 1,
    why: "The canvas is how people find a team. A pre-formed team is welcome and not required.",
  },
  nextHref: "/submit/",
  nextLabel: "Prepare the GitHub submission",
};

const submit: StepPage = {
  slug: "submit",
  href: "/submit/",
  number: "12",
  title: "Prepare and submit",
  minutes: 20,
  purpose: `Work on a branch and open a pull request. Please open it by ${EVENT.winnerDeadline} so judging can review every eligible submission fairly. That date is the first-place local packet. The rubric weights are ${EVENT.rubric}.`,
  sections: [
    {
      heading: "The pull request",
      paragraphs: [
        `Copy submissions/_TEMPLATE/ to submissions/team-<name>/ in the private project repository. Branch name: team-<name>. Pull request title: [SUBMISSION] Team <name> — <project title>.`,
        `Open it when you have a draft to share, and keep improving it. The project repository is private: ${EVENT.participantRepo}. Ask to join it, and an organizer will add your GitHub account. This website is the guide. Your team’s project goes in that repository.`,
        `Please open the pull request by ${EVENT.winnerDeadline} so judging can review every eligible submission fairly. A pull request opened after the deadline published with the challenge is not judged. Keep passwords, API keys, and CRNs out of the branch. If one lands there, revoke the key and create a replacement. You can keep writing the story while that is fixed.`,
      ],
    },
    {
      heading: "Checklist",
      paragraphs: ["These are the pieces a reviewer needs. We will walk through them together. Security items stay required because a leaked key can be used by someone else."],
      steps: [
        "README says what the project is, how to run it, and what it does not claim.",
        "USE-CASE.md has the nine canvas fields, including the classical method and the size gap.",
        "LIMITATIONS.md says what the work cannot support.",
        "requirements.txt is present if there is code.",
        "notebooks/ or src/ holds the work the builders will actually run.",
        "results/ holds the metric, the configuration, and the baseline next to any quantum number.",
        "slides/ or demo/ holds the five-minute story.",
        "The pull request title matches [SUBMISSION] Team <name> — <project title>.",
        "No secret is in the diff.",
      ],
    },
    {
      heading: "What a complete Hetionet-style packet contains",
      paragraphs: [
        "Use this as a picture of a finished packet. Do not copy the private training notebooks into your branch, and do not rerun that study as your project.",
      ],
      steps: [
        "A README that states the question and points at the evidence files.",
        "A use-case note: Compound-treats-Disease ranking, not an optimization problem.",
        "A limitations note: not quantum advantage, and not a clinical result.",
        "Notebooks named for the process: ingestion, classical baseline, quantum training, and testing.",
        "Results that lead with hybrid stacking 0.7987, Random Forest 0.7838, and Extra Trees 0.7807.",
        "A sentence on 0.8581: the quantum kernel was cached while classical pieces were tuned with Optuna.",
        "A presentation glossary and, if you want the running demo, the public initialize page.",
      ],
    },
  ],
  links: [
    { href: "/handbook/#64-how-to-submit", label: "Handbook: how to submit" },
    { href: EVENT.participantRepo, label: "Ask to join the project repository" },
    { href: HETIONET_REPO, label: "Hetionet repository" },
  ],
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
  nextHref: "/resources/",
  nextLabel: "Open the resource list",
};

const qolour: StepPage = {
  slug: "qolour",
  href: "/qolour/",
  number: "",
  title: "Quantum from Zero to One",
  minutes: 15,
  purpose:
    "Welcome. This is the lesson for the workshops. Andrew Chen, Qolour (andrew@qolour.com), wrote Quantum from Zero to One, a 0-to-1 introduction that uses Qolour’s handheld Qubi. Open the PDF or download it and keep it beside you. Bring your curiosity. We’ll help with the qubits.",
  sections: [
    {
      heading: "Open the lesson",
      paragraphs: [
        "The PDF is the lesson the workshops use. This page does not reprint the slides. Open it in your browser, or download it and follow along.",
        "Andrew Chen of Qolour prepared it for people who are new to quantum computing. The handheld Qubi is the device the lesson uses. You can start here even if this is your first quantum workshop.",
      ],
    },
    {
      heading: "Educator course",
      paragraphs: [
        "Qolour also offers an educator course on its own site. Use that link when you want the longer course. This page links to it and does not copy it.",
      ],
    },
  ],
  links: [
    { href: "/downloads/qolour-quantum-from-zero-to-one.pdf", label: "Open or download Quantum from Zero to One (PDF)" },
    { href: QOLOR_COURSE, label: "Qolour educator course" },
    { href: "/vocabulary/", label: "Vocabulary" },
    { href: "/bell/", label: "Bell state in Composer" },
  ],
  check: {
    question: "Where do you open the workshop lesson Quantum from Zero to One?",
    options: [
      "As full slide text copied onto this page",
      "In the PDF linked on this page",
      "As a required hackathon submission",
      "Only after the statewide announcement",
    ],
    answer: 1,
    why: "Open or download the PDF. Andrew Chen of Qolour wrote it. The educator course stays on Qolour’s site.",
  },
  nextHref: "/vocabulary/",
  nextLabel: "Learn the words this circuit uses",
};

const resources: StepPage = {
  slug: "resources",
  href: "/resources/",
  number: "",
  title: "Resources",
  minutes: 10,
  purpose: "One list. Official pages stay on their own sites. This repo does not copy courses, the book, or a readiness engine.",
  sections: [
    {
      heading: "Event",
      paragraphs: [
        `Official registration: ${EVENT.registration}. Discord: ${EVENT.discord}. Program questions: ${EVENT.programEmail}. Qiskit-approved website: ${QISKIT_APPROVED_SITE}. Qiskit Slack: ${IBM.slack}. Announcement: ${IBM.announcement}.`,
      ],
    },
    {
      heading: "Handbook and catalog",
      paragraphs: [
        "The participant handbook, the domain track, and the notebook catalog are rendered on this website.",
        `Submit your team project in the private repository ${EVENT.participantRepo}. Ask to join it.`,
      ],
    },
    {
      heading: "IBM Quantum Platform and Qiskit",
      paragraphs: [
        `Platform: ${IBM.platform}. Patterns: ${IBM.patterns}. Hello world: ${IBM.helloWorld}. Composer: ${IBM.composerGuide}. Tutorials: ${IBM.tutorials}. API: ${IBM.api}. Source: ${IBM.qiskitRepo}.`,
      ],
    },
    {
      heading: "Qolour",
      paragraphs: [
        "The workshop lesson is Quantum from Zero to One, by Andrew Chen of Qolour. It uses the handheld Qubi. Open the PDF from the lesson page.",
        `Educator course: ${QOLOR_COURSE}. Statevector exhibit: ${QOLOR_EXHIBIT}. The educator course stays on Qolour’s site.`,
      ],
    },
    {
      heading: "Videos",
      paragraphs: [
        "Kevin Robinson’s videos for before or after the workshop will be listed when the titles are confirmed. They are not named on the live Qolour menu, so this page does not invent titles.",
      ],
    },
    {
      heading: "Case study and readiness",
      paragraphs: [
        `Hetionet repository: ${HETIONET_REPO}. The signed-out demo is ${HETIONET_LINKS.demo}.`,
        "The Next-Step Quantum Decision Guide is the step after both Bell labs and before Hetionet. Use it for optimization-shaped problems only. The benchmarking page defines quantum advantage. Hetionet is not that claim, and it is not a clinical result.",
      ],
    },
    {
      heading: "Book",
      paragraphs: [
        "Quantum Readiness for Leaders, by Robert Loredo. Chapter 7 is Prototyping and Proof-of-Concept Development. Read it, then use the charter on the benchmarking page. The book is not copied here.",
      ],
    },
  ],
  links: [
    { href: "/qolour/", label: "Quantum from Zero to One" },
    { href: "/downloads/qolour-quantum-from-zero-to-one.pdf", label: "Open or download Quantum from Zero to One (PDF)" },
    { href: "/handbook/", label: "Participant handbook" },
    { href: "/catalog/", label: "Notebook catalog" },
    { href: "/glossary/", label: "Glossary" },
    { href: "/support/", label: "Troubleshooting and support" },
    { href: "/roles/", label: "Domain/Industry Expert and Builder/Developer Expert" },
    { href: DECISION_GUIDE_URL, label: "Next-Step Quantum Decision Guide" },
    { href: QISKIT_APPROVED_SITE, label: "Qiskit-approved website" },
  ],
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

export const JOURNEY: StepPage[] = [
  start,
  account,
  vocabulary,
  bell,
  python,
  workflow,
  roles,
  problem,
  benchmarking,
  hetionet,
  team,
  submit,
];

export const PAGES: StepPage[] = [...JOURNEY.filter((page) => page.slug !== "start"), qolour, resources];

export function pageBySlug(slug: string) {
  return PAGES.find((page) => page.slug === slug);
}

export const AREA_LINKS: { href: string; label: string }[] = [
  { href: "/#event", label: "Understand the event" },
  { href: "/#workshop-1", label: "Workshop 1" },
  { href: "/qolour/", label: "Quantum from Zero to One" },
  { href: "/#workshop-2", label: "Workshop 2" },
  { href: "/handbook/", label: "Participant handbook" },
  { href: "/roles/", label: "Domain/Industry Expert and Builder/Developer Expert" },
  { href: "/workflow/", label: "Qiskit workflow" },
  { href: "/hetionet/", label: "Hetionet example" },
  { href: "/benchmarking/", label: "Benchmarking and readiness" },
  { href: "/team/", label: "Team" },
  { href: "/submit/", label: "Submission guide" },
  { href: "/resources/", label: "Resources" },
  { href: "/catalog/", label: "Notebook catalog" },
  { href: "/support/", label: "Troubleshooting and support" },
];
