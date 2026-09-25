import { HETIONET_WALKTHROUGH } from "@/content/hetionetWalk";

export type Check = {
  question: string;
  options: string[];
  answer: number;
  why: string;
};

export type AnalogyLayer = {
  cooking: string;
  music: string;
  sports: string;
  homeDepot: string;
};

export type CodeNote = {
  line: string;
  python: string;
  qiskit: string;
  qubits: string;
  composer: string;
};

export type Trouble = { title: string; body: string };

export type Module = {
  slug: string;
  number: string;
  title: string;
  minutes: number;
  summary: string;
  outcomes: string[];
  sections: { heading: string; paragraphs: string[]; steps?: string[]; troubles?: Trouble[] }[];
  analogies?: { title: string; layers: AnalogyLayer }[];
  codeNotes?: CodeNote[];
  code?: { filename: string; source: string }[];
  checks: Check[];
  facilitator: {
    timing: string;
    notes: string[];
    questions: string[];
    expected: string[];
    misconceptions: string[];
  };
  nextSlug: string | null;
  nextLabel: string;
};

export const LAST_VERIFIED = "2026-09-23";

const BELL_STATE = `from qiskit import QuantumCircuit
from qiskit.quantum_info import Statevector

bell_circuit = QuantumCircuit(2)

bell_circuit.h(0)
bell_circuit.cx(0, 1)

state = Statevector.from_instruction(bell_circuit)

print(state)
bell_circuit.draw("mpl")`;

const BELL_SAMPLE = `from qiskit.primitives import StatevectorSampler

measured_circuit = bell_circuit.copy()
measured_circuit.measure_all()

sampler = StatevectorSampler()
job = sampler.run([measured_circuit], shots=1024)
result = job.result()

counts = result[0].data.meas.get_counts()

print(counts)`;

export const MODULES: Module[] = [
  {
    slug: "welcome",
    number: "00",
    title: "Welcome and expectations",
    minutes: 15,
    summary: "An entry ramp into the quantum ecosystem. Not a race to publish a quantum-advantage result.",
    outcomes: [
      "Say what this workshop is for and what it is not for.",
      "See the path from accounts to a first circuit to a next step.",
      "Answer the readiness survey without being blocked.",
    ],
    sections: [
      {
        heading: "Welcome",
        paragraphs: [
          "Welcome. Many people will teach this onboarding for the Florida Quantum Readiness Challenge and Qiskit Fall Fest.",
          "You are not expected to become a quantum physicist today, or to prove that a quantum computer beats every classical computer. You are expected to learn how to enter the ecosystem: the words, the account, a first circuit, and a realistic next step.",
          "Quantum computers do not replace classical computers. The serious projects you will hear about use both.",
          "The welcome was drafted for the workshop, not copied from a recording.",
        ],
      },
      {
        heading: "By the end of this workshop, I can…",
        paragraphs: ["Mark these as you go. They match the progress tracker."],
        steps: [
          "Explain what quantum computing is and is not.",
          "Describe how a bit differs from a qubit.",
          "Use statevector, amplitude, gate, circuit, measurement, superposition, and entanglement at an introductory level.",
          "Sign in to the IBM Quantum Platform.",
          "Use the IBM Quantum Open Plan. The Bell lab starts on a simulator.",
          "Build a circuit in IBM Quantum Composer.",
          "Recreate that circuit with basic Python and Qiskit.",
          "Run it on a simulator and read the result.",
          "Describe how the Hetionet hybrid project is organized.",
          "Name a role, a learning link, and a next step.",
        ],
      },
      {
        heading: "Readiness survey",
        paragraphs: ["Answer honestly. Nothing here locks a module. Facilitators use it only to decide where to slow down."],
      },
    ],
    checks: [
      {
        question: "What is a successful outcome of this workshop?",
        options: [
          "A Nature paper on quantum advantage",
          "A clear entry into the tools, vocabulary, and next step",
          "Replacing your organization’s classical computers",
          "A complete proof of entanglement from one histogram",
        ],
        answer: 1,
        why: "The workshop is an entry ramp. Advantage claims and full entanglement proofs are later, harder work.",
      },
    ],
    facilitator: {
      timing: "15 minutes. Keep account problems out of this block.",
      notes: ["Read the welcome, the checklist, then the survey.", "Say that blank survey answers are allowed."],
      questions: ["What would make today useful if you do not master the physics?"],
      expected: ["Opening the tools, explaining the Bell circuit in plain language, and leaving with a next step."],
      misconceptions: ["Some people expect a research breakthrough. Name that, then replace it with readiness."],
    },
    nextSlug: "setup",
    nextLabel: "Prepare your account",
  },
  {
    slug: "setup",
    number: "01",
    title: "Exercise 1: Get connected to IBM Quantum",
    minutes: 40,
    summary: "Register, sign in to IBM Quantum on the Open Plan, and keep the Bell lab on a simulator.",
    outcomes: [
      "Submit the private registration form.",
      "Sign in to IBM Quantum.",
      "Name the Open Plan limit: 10 minutes of QPU time per 28-day window.",
      "Run the Bell lab on a simulator before any hardware job.",
    ],
    sections: [
      {
        heading: "Check the live screen",
        paragraphs: [
          `Steps checked against IBM’s public docs on ${LAST_VERIFIED}. Labels change. If the screen disagrees with this list, follow the official page. Re-check every link the morning of the workshop.`,
          "This site never asks for a password, API token, or account ID. Do not paste those into chat or GitHub.",
        ],
      },
      {
        heading: "Do these in order",
        paragraphs: ["If a step fails, use the troubleshooting box with the same problem. Do not make a second account until you know which email you already used."],
        steps: [
          "Open https://quantum.cloud.ibm.com/",
          "Select Sign in. Official page: https://quantum.cloud.ibm.com/signin",
          "Create an IBM Cloud account if you do not have one. IBM may offer an IBMid or another provider. Use an email you can open today.",
          "Verify the email and finish profile or region prompts. Guide: https://quantum.cloud.ibm.com/docs/guides/cloud-setup",
          "Use your own IBM Quantum Open Plan. QPU time on that plan is 10 minutes per 28-day window. This workshop does not promise more minutes.",
          "The Bell lab uses a local simulator and does not spend that window.",
          "Open Composer: https://quantum.cloud.ibm.com/composer",
          "Confirm you see qubit wires before the Bell lab. Guide: https://quantum.cloud.ibm.com/docs/guides/composer",
          "Find Learning, documentation, workloads or compute, and Composer in the platform menus.",
          "Plan comparison: https://quantum.cloud.ibm.com/docs/en/guides/plans-overview",
        ],
        troubles: [
          { title: "Confirmation email not received", body: "Check spam. Wait, then resend once. Do not create a second account yet." },
          { title: "Existing IBMid not recognized", body: "Try the email on the IBM account, not a forwarding alias. Use IBM’s password reset rather than a new signup." },
          { title: "Signed in on the wrong plan", body: "Use the Open Plan. The Bell lab still runs on the local simulator if the plan is not visible yet." },
          { title: "Wrong account or region", body: "Sign out and back in with the invited identity. Read the account name in the header before you build." },
          { title: "Composer does not load", body: "Refresh once. Try current Chrome, Edge, or Firefox. Confirm you are signed in, not on a marketing page." },
          { title: "Browser or popup blocked", body: "Allow pages for quantum.cloud.ibm.com. A phone hotspot is a fair backup on locked networks." },
          { title: "Joined with a different email", body: "Tell the facilitator the address you used. They can invite that address. Do not share a password." },
          { title: "Cannot access hardware", body: "The Bell lab does not need a QPU. A later hardware job uses the Open Plan window of 10 minutes per 28 days." },
        ],
      },
    ],
    checks: [
      {
        question: "Where do workshop passwords and API tokens belong?",
        options: ["In the slide deck", "In this website", "Only inside IBM’s own sign-in", "In a GitHub issue"],
        answer: 2,
        why: "Credentials stay in IBM’s login. This guide only links to public setup docs.",
      },
    ],
    facilitator: {
      timing: "25 minutes. Park stuck logins at a side table.",
      notes: ["Read the account name aloud. Do not show a CRN.", "Click the IBM URLs the morning of the event."],
      questions: ["Can you see circuit wires, even with no gates yet?"],
      expected: ["Yes. If not, they stay in setup and skip ahead only as observers."],
      misconceptions: ["An IBM login is not extra QPU time. The Open Plan window stays 10 minutes per 28 days."],
    },
    nextSlug: "vocabulary",
    nextLabel: "Learn the vocabulary",
  },
  {
    slug: "vocabulary",
    number: "02",
    title: "Beginner vocabulary",
    minutes: 20,
    summary: "Programming structure uses the Home Depot analogy. Quantum words keep a plain sentence and the technical definition.",
    outcomes: ["Look a word up before guessing.", "Separate amplitude from probability.", "Reject the slogan that a qubit tries every answer at once."],
    sections: [
      {
        heading: "How the cards work",
        paragraphs: [
          "The glossary is the source of the technical definitions on the quantum cards. Search it whenever a term shows up early.",
          "This page uses one analogy, and only for programming structure: package, module, class, object, method, argument, and variable. Those lines are the Home Depot table.",
          "A quantum card is a plain sentence and the technical definition.",
          "The study guide at Quantum-Global-Group/qiskit-2x-cert-study-guide adds plain-English certification cheat-sheet PDFs. Deeper certification practice, after this workshop, is the notebook set in that study guide. It assumes more Qiskit than today.",
        ],
      },
    ],
    checks: [
      {
        question: "Which description of superposition should you keep?",
        options: [
          "The qubit tries every answer at the same time.",
          "The state combines basis states with amplitudes, and a measurement returns one outcome.",
          "The qubit stores a classical bit twice.",
          "The histogram lives inside the qubit.",
        ],
        answer: 1,
        why: "Superposition is a combination of basis states. It is not a claim that the device tries every answer.",
      },
    ],
    facilitator: {
      timing: "20 minutes. Search three terms. Do not read every card.",
      notes: ["Say KYOO-bit, HAD-uh-mard, and KIZ-kit once."],
      questions: ["How is an amplitude different from a probability?"],
      expected: ["Probability is the squared magnitude of the amplitude. Phase can change while probabilities stay put."],
      misconceptions: ["State, statevector, and histogram get mashed together. Separate the state, the list of amplitudes, and the tally."],
    },
    nextSlug: "qubi",
    nextLabel: "Watch the Qubi demonstration",
  },
  {
    slug: "qubi",
    number: "03",
    title: "From a classical bit to a Qubi",
    minutes: 25,
    summary: "A physical Qubi first, then the symbols that will show up in Composer.",
    outcomes: ["Contrast a bit with a qubit state.", "Read |0⟩ and |1⟩.", "Match a physical action to a gate symbol."],
    sections: [
      {
        heading: "The live demo is the next sitting",
        paragraphs: [
          "A classical bit, after you look, is 0 or 1. A qubit is described by a state before that look. One measurement returns one outcome.",
          "The Qubi demonstration itself is the next module. This page does not contain that script.",
        ],
      },
    ],
    analogies: [
      {
        title: "Measurement, beside the definition",
        layers: {
          cooking: "Plating ends the unplated sauce. You get one plate.",
          music: "Pressing record samples the room. It does not print the chord chart.",
          sports: "The whistle ends the play. The diagram was not the final score.",
          homeDepot: "The saw finishes one cut. The pencil marks were the plan.",
        },
      },
    ],
    checks: [
      {
        question: "If the probability of 0 is one half, one measurement gives you…",
        options: ["Both 0 and 1", "Either 0 or 1", "The amplitude printed on the device", "A guaranteed 0"],
        answer: 1,
        why: "One shot is one basis outcome. A probability describes many shots.",
      },
    ],
    facilitator: {
      timing: "25 minutes, at least half with the Qubi in hand.",
      notes: ["Do not say the qubit is simply both values at once.", "Point to the future Composer symbol after each action."],
      questions: [
        "What do you predict if we measure now?",
        "Did that action change the probability, the phase, or both?",
        "Why do we need multiple shots?",
        "What information is gone after measurement?",
      ],
      expected: [
        "Name a probability unless the state is a basis state.",
        "H on |0⟩ changes probabilities. Some gates mainly change phase.",
        "Shots estimate a fraction. One shot cannot.",
        "A computational-basis measurement does not reveal every amplitude.",
      ],
      misconceptions: ["The Qubi’s lamp or readout is a sample, not the statevector."],
    },
    nextSlug: "qolour",
    nextLabel: "Prepare with the statevector exhibit",
  },
  {
    slug: "qolour",
    number: "04",
    title: "Qubi demo",
    minutes: 15,
    summary: "Placeholder. Kevin opens with a Qubi demo using Qolour. Andrew or Sohum may be on the call. The exact demo arrives this weekend.",
    outcomes: ["Open the Qolour links.", "Wait for the weekend demo.", "Leave the script unwritten until it arrives."],
    sections: [
      {
        heading: "Placeholder",
        paragraphs: [
          "Kevin opens this sitting with a Qubi demo that uses Qolour. Andrew or Sohum may be on the call. The exact demo arrives this weekend. This page does not invent the script.",
          "Educator course: https://www.qolour.com/educator-course",
          "Statevector exhibit: https://www.qolour.com/educator-course/statevector-exhibit",
          "The course stays on Qolour. This page does not copy it.",
        ],
      },
    ],
    checks: [
      {
        question: "Why is the Qolour lesson not pasted here?",
        options: [
          "It is optional decoration",
          "The course stays on Qolour so this site does not copy protected material",
          "Qolour replaces IBM Quantum",
          "Statevectors are only metaphors",
        ],
        answer: 1,
        why: "We link, name the objective, and add original questions.",
      },
    ],
    facilitator: {
      timing: "20 minutes live, or prework plus an 8 minute compare.",
      notes: ["The demo script is not in this guide. It arrives this weekend. Link Qolour. Do not paste the course."],
      questions: ["What did you change, and what did the probabilities do?"],
      expected: ["They can point to an amplitude and to its squared magnitude as different numbers."],
      misconceptions: ["The exhibit is a teaching view of a state, not a QPU run."],
    },
    nextSlug: "composer",
    nextLabel: "Build the circuit in Composer",
  },
  {
    slug: "composer",
    number: "05",
    title: "Create your first entangled pair",
    minutes: 35,
    summary: "A two-qubit Bell circuit in Composer. Predict, then run an ideal simulation. A real quantum computer is later, on the Open Plan.",
    outcomes: ["Place H, CX, and measurements correctly.", "Explain the ideal 00 and 11 pattern.", "Say why that histogram is not a full proof of entanglement."],
    sections: [
      {
        heading: "Write a prediction before you run",
        paragraphs: ["You will put H on qubit 0, CX with qubit 0 as control and qubit 1 as target, then measure both. Write which bitstrings you expect to see often."],
      },
      {
        heading: "Click path",
        paragraphs: [`Labels move. Last verified ${LAST_VERIFIED}. Docs: https://quantum.cloud.ibm.com/docs/guides/composer`],
        steps: [
          "Open https://quantum.cloud.ibm.com/composer",
          "Create a new circuit.",
          "Confirm two qubit wires. Add one if you only see a single wire.",
          "Identify qubit 0 and qubit 1. Counting starts at 0.",
          "Place H on qubit 0.",
          "Place CX with control on qubit 0 and target on qubit 1.",
          "Measure both qubits.",
          "Read left to right: H, then CX, then measurements.",
          "Run an ideal simulation if Composer offers one.",
          "Open the histogram.",
          "Ideal results should be mostly 00 and 11, in similar amounts after many shots.",
          "01 and 10 should be missing or tiny in the ideal run.",
          "A later run on a real quantum computer uses the Open Plan. Start with the ideal simulator. That plan is 10 minutes of QPU time per 28-day window. This workshop does not promise more minutes.",
          "Compare the histograms.",
          "A few 01 or 10 counts on hardware are noise, not an immediate reason to redraw.",
        ],
      },
      {
        heading: "Every symbol in the state",
        paragraphs: [
          "The ideal state is |Φ⁺⟩ = (|00⟩ + |11⟩) / √2.",
          "|Φ⁺⟩ names this Bell state. The plus sign in the name distinguishes it from other Bell states.",
          "|00⟩ means both qubits in basis state 0. |11⟩ means both in basis state 1.",
          "The plus between them means a superposition of those two basis states.",
          "Dividing by √2 keeps the state normalized. Each amplitude has magnitude 1/√2, so each of those two results has probability 1/2.",
          "Counts that pile up on 00 and 11 are consistent with this preparation. One computational-basis histogram is not, by itself, a complete experimental proof of entanglement.",
        ],
      },
    ],
    analogies: [
      {
        title: "The pair, beside the equation",
        layers: {
          cooking: "Two plates that leave together either both finished or both unfinished, because one shared step tied them.",
          music: "Two players who only land on the downbeat together after the same cue.",
          sports: "Two teammates whose recorded results match: both successes or both misses.",
          homeDepot: "Two fixtures on one controlled circuit that read both on or both off.",
        },
      },
    ],
    checks: [
      {
        question: "Which ideal outcomes should dominate?",
        options: ["01 and 10", "00 and 11", "only 00", "all four equally"],
        answer: 1,
        why: "H then CX puts equal amplitude on |00⟩ and |11⟩ and none on the other two basis states.",
      },
    ],
    facilitator: {
      timing: "35 minutes. Stop the room for the written prediction.",
      notes: ["Check control versus target. Upside-down CX is the common build error.", "Do not wait out a long hardware queue."],
      questions: ["Why can the two bars differ a little even on a simulator?"],
      expected: ["Finite shots fluctuate. 500 and 524 from 1024 shots can be a correct circuit."],
      misconceptions: ["Matching 00 and 11 bars feel like a finished entanglement experiment. Say out loud that they are not."],
    },
    nextSlug: "python",
    nextLabel: "Rebuild it in Python",
  },
  {
    slug: "python",
    number: "06",
    title: "Rebuild the Bell state with Python and Qiskit",
    minutes: 40,
    summary: "The same circuit in small cells. Qiskit 2.3. Inspect the statevector before you measure.",
    outcomes: ["Print a statevector from an unmeasured circuit.", "Sample 1024 shots.", "Read qubit 0 as the rightmost bit."],
    sections: [
      {
        heading: "Run the notebook",
        paragraphs: [
          "Open notebooks/bell_state_lab.ipynb. Install requirements.txt in a virtual environment. Do not put an API token in the notebook. This lab uses a local statevector sampler.",
          "Quantum-Global-Group/qiskit-2x-cert-study-guide targets qiskit>=2.3.0. This lab pins qiskit>=2.3.0,<2.4.0 so these primitive calls stay on that line.",
          "Qiskit prints bitstrings with qubit 0 on the right. In this lab, 00 and 11 look the same if you reverse them. The moment you see 01 or 10, the rightmost bit is qubit 0.",
        ],
      },
      {
        heading: "Challenges",
        paragraphs: ["Do these after the first pattern looks right."],
        steps: [
          "Change shots from 1024 to 100 and compare.",
          "Remove the CNOT and predict before you run.",
          "Replace H with X.",
          "Comment every line with the intent.",
          "Print each bitstring and count with a for loop.",
          "Write why a QPU can show outcomes the ideal sampler does not.",
        ],
      },
      {
        heading: "Expected result, mistakes, recovery",
        paragraphs: [
          "Expected: equal amplitudes on |00⟩ and |11⟩. Shot counts split between those two strings, not locked at 512 and 512.",
          "Common mistake: sampling the unmeasured circuit, running cells out of order, or swapping the CX qubits.",
          "Recovery: restart the kernel, run from the top, and reinstall the pinned requirements in a clean environment if import fails.",
        ],
      },
    ],
    analogies: [
      {
        title: "The program, in four translations",
        layers: {
          cooking: "Import opens the pantry. QuantumCircuit(2) sets out two bowls. H and CX are steps. The statevector tastes the mixture before service. measure_all plates it. Shots are how many plates you serve to see the pattern.",
          music: "Import loads the library. The circuit is the score. The statevector is the chart. Measurement is pressing record. Shots are takes.",
          sports: "Import brings the rulebook. The circuit is the play. The statevector is the design. One measurement is one snap. Shots are practice reps.",
          homeDepot: "Import unlocks the tool chest. The circuit is the cut list. The statevector is the plan on the counter. Measurement is the finished cut. Shots are repeated cuts.",
        },
      },
    ],
    code: [
      { filename: "Unmeasured circuit", source: BELL_STATE },
      { filename: "Measure and sample", source: BELL_SAMPLE },
    ],
    codeNotes: [
      { line: "from qiskit import QuantumCircuit", python: "import loads a name from a library.", qiskit: "QuantumCircuit will store the gates.", qubits: "No qubit has changed yet.", composer: "Opening a new circuit." },
      { line: "bell_circuit = QuantumCircuit(2)", python: "A variable points at an object. Parentheses pass the argument 2.", qiskit: "Construct a 2-qubit circuit. Indexes start at 0.", qubits: "Both qubits start in |0⟩.", composer: "Two wires." },
      { line: "bell_circuit.h(0)", python: "h is a method. 0 selects the first qubit, not “qubit number 1” in everyday counting.", qiskit: "Apply the Hadamard gate to qubit 0.", qubits: "Qubit 0 becomes (|0⟩+|1⟩)/√2. Qubit 1 is still |0⟩.", composer: "H on wire 0." },
      { line: "bell_circuit.cx(0, 1)", python: "The first argument is the control. The second is the target.", qiskit: "Controlled-X from qubit 0 onto qubit 1.", qubits: "The state becomes (|00⟩+|11⟩)/√2.", composer: "Control dot on wire 0, plus on wire 1." },
      { line: "Statevector.from_instruction(...)", python: "A class method builds a new object from the circuit.", qiskit: "Compute the ideal amplitudes. This does not measure.", qubits: "The amplitudes are still available to print.", composer: "State display before measurement icons." },
      { line: "bell_circuit.copy()", python: "copy makes a second object so the first stays unmeasured.", qiskit: "You want one circuit for the statevector and one for sampling.", qubits: "Same gates, two Python objects.", composer: "Duplicate, then add meters on the copy." },
      { line: "measure_all()", python: "A method call. The parentheses are required even with no extra arguments.", qiskit: "Add one classical bit per qubit and measure into it. The register name is meas.", qubits: "The next run samples outcomes.", composer: "Measurement on both wires." },
      { line: "sampler.run([measured_circuit], shots=1024)", python: "Square brackets make a list. shots is a named argument.", qiskit: "StatevectorSampler draws ideal outcomes. It is not a QPU.", qubits: "1024 independent ideal measurements.", composer: "Run, ideal simulator, 1024 shots." },
      { line: "get_counts()", python: "Returns a dictionary. Keys are bitstrings. Values are tallies.", qiskit: "Those tallies are counts, not amplitudes.", qubits: "You no longer see the phases.", composer: "The numbers behind the histogram." },
    ],
    checks: [
      {
        question: "Why copy the circuit before measure_all()?",
        options: ["Qiskit bills twice", "So the statevector is taken from a circuit that has not been measured", "To reverse bit order", "Because CX must be measured first"],
        answer: 1,
        why: "Measurement is a different step. The copy preserves an unmeasured circuit for Statevector.",
      },
    ],
    facilitator: {
      timing: "40 minutes. Live-code the first cell, then let pairs run the sampler.",
      notes: ["If install fails, pair laptops and still have everyone read each line.", "Do not introduce Runtime tokens here."],
      questions: ["Which bit is on the right?"],
      expected: ["Qubit 0. Use a 01 example on the board, because 00 and 11 hide the convention."],
      misconceptions: ["Older tutorials call execute(). This lab uses the Qiskit 2.3 StatevectorSampler on purpose."],
    },
    nextSlug: "assess-build",
    nextLabel: "Next-Step Quantum Decision Guide",
  },
  {
    slug: "assess-build",
    number: "06a",
    title: "Next-Step Quantum Decision Guide",
    minutes: 15,
    summary: "After both Bell labs and before the Hetionet tour. The live link is still blank.",
    outcomes: [
      "Name the next reading: chapter 7 of Quantum Readiness for Leaders.",
      "Say what Assess does and what Build returns.",
      "Leave the live link blank until a participant-facing address exists.",
    ],
    sections: [
      {
        heading: "After both Bell labs",
        paragraphs: [
          "Composer was the first Bell lab. Python rebuilt the same circuit with a local statevector sampler and no API token. This sitting is next. The Hetionet tour comes after it.",
          "Read chapter 7 of Quantum Readiness for Leaders. Then run Assess, then Build. This page cites the book by title and chapter only. It stores no chapter text, diagrams, page numbers, or Drive file.",
        ],
      },
      {
        heading: "What Assess is",
        paragraphs: [
          "Assess is a browser session about one real problem. The cards ask what kind of problem it is, which methods are worth considering, whether quantum computing belongs in the next step, and what evidence would justify going further. Answers stay in the browser and are not sent anywhere. The recommendation is a named rule over those answers.",
        ],
      },
      {
        heading: "What Build is",
        paragraphs: [
          "Build turns those same answers into working documents you can download as Markdown: an optimization readiness summary, a problem statement, a classical baseline plan, a QUBO readiness assessment, a benchmark plan, a bounded pilot plan, and a next-step roadmap.",
          "A team that already has a project idea uses Assess, then Build. A team that does not yet have a decision uses Learn or the short Demo.",
        ],
      },
      {
        heading: "Live link",
        paragraphs: [
          "Read chapter 7 of Quantum Readiness for Leaders. Then run Assess, then Build.",
          "Walkthrough of the decision tool, the module already in the readiness repo: https://github.com/Quantum-Global-Group/qgg-quantum-readiness-os/tree/cursor/optimization-readiness-engine-26a9/modules/optimization-readiness-engine",
          "No participant-facing address and no Wiser demo address were found. The public host on the FAU site or the Quantum Global Group site is not live yet. This page does not invent one.",
        ],
      },
    ],
    checks: [
      {
        question: "What do you do after both Bell labs and before the Hetionet tour?",
        options: [
          "Train the Hetionet model",
          "Read chapter 7 of Quantum Readiness for Leaders, then run Assess and Build",
          "Open a public engine address printed on this page",
          "Skip to a hardware job",
        ],
        answer: 1,
        why: "The live link is still blank. The instruction is the chapter, then Assess, then Build.",
      },
    ],
    facilitator: {
      timing: "15 minutes on this page. The Demo path is about six minutes and is for showing the module, not for assessing a live problem.",
      notes: [
        "Cite Quantum Readiness for Leaders by title and chapter 7 only. Leave the chapter text and any Drive file out of the room.",
        "The live link is still blank. Leave it blank on the slide.",
      ],
      questions: ["What problem will you take into Assess?"],
      expected: ["A decision they can say out loud, or a stop if they do not have one yet. That second group uses Learn or the Demo."],
      misconceptions: ["A Bell histogram is a reason to book quantum time. Assess asks for evidence before that step."],
    },
    nextSlug: "hetionet",
    nextLabel: "See a full project example",
  },
  {
    slug: "hetionet",
    number: "07",
    title: "Hetionet as a complete project example",
    minutes: 25,
    summary: "A section-by-section walkthrough of the Quantum Global Group biomedical paper. You will not train the model today.",
    outcomes: ["Retell the pipeline in the paper’s order.", "Use the scores the paper prints.", "Say the comparison is not quantum advantage and not a clinical result."],
    sections: [
      ...HETIONET_WALKTHROUGH,
      {
        heading: "Roles",
        paragraphs: [
          "Domain expert, data engineer, Python developer, machine-learning practitioner, quantum developer, benchmarking lead, project manager, business analyst, technical writer, presenter.",
          "A Fall Fest team needs someone guarding the question, someone who can run a classical baseline, and someone who will not exaggerate the result.",
        ],
      },
    ],
    checks: [
      {
        question: "Which statement matches the README?",
        options: [
          "Standalone QSVC is the best model",
          "The best listed score is a stacking ensemble, with a tuned random forest close behind",
          "The repo proves quantum advantage in medicine",
          "PR-AUC above 0.70 was missed",
        ],
        answer: 1,
        why: "0.7987 versus 0.7838. Report the comparison. Do not turn it into an advantage claim.",
      },
    ],
    facilitator: {
      timing: "25 minutes. Draw the pipeline. Show five numbers. Do not launch training.",
      notes: ["The scores are the paper’s Table II. Do not train the model."],
      questions: ["What would a result that loses to the random forest still be good for?"],
      expected: ["It would still document a method and force a decision about complexity."],
      misconceptions: ["Beating chance, or beating a weak model, is a different claim from beating the optimized forests in this table."],
    },
    nextSlug: "readiness",
    nextLabel: "Talk about readiness",
  },
  {
    slug: "readiness",
    number: "08",
    title: "Quantum readiness",
    minutes: 20,
    summary: "Readiness is a reason, a team, a learning plan, and an honest test. It is not knowing everything.",
    outcomes: ["Separate strategy, talent, risk, and use-case choice.", "Attribute the leadership theme without quoting the book.", "Write a Fall Fest-sized next step."],
    sections: [
      {
        heading: "What is sourced, and what is not",
        paragraphs: [
          "Robert Loredo leads this initiative. His book, Quantum Readiness for Leaders, is a strategic resource for the conversation. This page does not copy its paragraphs, questions, diagrams, tables, or framework layout.",
          "Chapter 7 is named on the sitting between the Bell labs and the Hetionet tour. This repository stores no chapter text, diagrams, page numbers, or Drive file.",
          "Loredo’s theme, stated at the level of a citation rather than an excerpt: leaders prepare strategy, technology, talent, and risk before they chase a tool. A person is ready to continue when they can name a role and a next resource. Quantum Global Group’s piece for this room is the Hetionet walkthrough and the reflection prompts below. IBM supplies the platform, Composer, Learning, and Qiskit documentation.",
        ],
      },
      {
        heading: "An original discussion agenda",
        paragraphs: ["Use these headings. They are a teaching agenda for Fall Fest, not a map of the book."],
        steps: [
          "Strategy: why this class or organization is looking at all.",
          "Technology: simulators, QPUs, and the classical systems around them.",
          "Talent: who can write Python, who knows the domain, who can explain a negative result.",
          "Risk: hype, credentials, sensitive data, and claims you cannot support.",
          "Ecosystem: campuses, IBM Learning, and events such as Fall Fest.",
          "Use-case selection: one narrow question that already has a classical baseline.",
          "Teams and partnerships across disciplines.",
          "A workforce step that fits this semester.",
        ],
      },
      {
        heading: "Write this down",
        paragraphs: [
          "Quantum readiness is not knowing everything. It is knowing why you are exploring quantum computing, where it may matter, who must be involved, how you will learn, and how you will evaluate progress honestly.",
          "Answer: What problem interests me? What role could I play? What do I already know? What must I learn next? Who else is required? What classical baseline would I need? What evidence would show progress? Which IBM link is next? What can I actually build during Fall Fest?",
        ],
      },
    ],
    checks: [
      {
        question: "Readiness means…",
        options: [
          "Finishing every tutorial before you may ask a question",
          "A reason, a team, a learning plan, and an honest evaluation",
          "Claiming advantage early",
          "A score IBM assigns at sign-in",
        ],
        answer: 1,
        why: "Access is not readiness. A slogan is not readiness. A plan you can check is.",
      },
    ],
    facilitator: {
      timing: "20 minutes. Ten to frame, ten to write, then two volunteers.",
      notes: ["Keep the book closed unless you are using a licensed excerpt that is not in this repo."],
      questions: ["What claim are you not ready to make?"],
      expected: ["They will not call the Bell lab quantum advantage, a medical result, or a proof of entanglement."],
      misconceptions: ["Creating an account feels like finishing. It is the start of Module 1, already done."],
    },
    nextSlug: "pathway",
    nextLabel: "Choose a learning pathway",
  },
  {
    slug: "pathway",
    number: "09",
    title: "Learning pathway and ecosystem map",
    minutes: 15,
    summary: "Leave with a role, one official IBM link, one practice task, and something you could show.",
    outcomes: ["Follow role, skills, learning, practice, project, portfolio, opportunity.", "Pick a path you can change later.", "Name the next link."],
    sections: [
      {
        heading: "Official links",
        paragraphs: [
          `Checked ${LAST_VERIFIED}.`,
          "Platform: https://quantum.cloud.ibm.com/",
          "Learning: https://quantum.cloud.ibm.com/learning/en",
          "Basics of Quantum Information: https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information",
          "Qiskit in the Classroom: https://quantum.cloud.ibm.com/learning/en/modules",
          "Docs: https://quantum.cloud.ibm.com/docs",
          "Composer: https://quantum.cloud.ibm.com/docs/guides/composer",
          "Plot states: https://quantum.cloud.ibm.com/docs/guides/plot-quantum-states",
          "Qiskit source: https://github.com/Qiskit/qiskit",
          "Later certification practice: https://github.com/Quantum-Global-Group/qiskit-2x-cert-study-guide",
        ],
      },
      {
        heading: "Paths",
        paragraphs: [
          "Developer: Python and circuits. Next is this notebook plus Basics of Quantum Information. Portfolio: the notebook and a short README.",
          "Researcher: baselines and metrics. Next is the Hetionet README. Portfolio: a methods note that includes the classical score.",
          "Educator: definitions and misconceptions. Next is Qiskit in the Classroom and the Qolour educator course. Portfolio: a lesson that teaches H versus X.",
          "Workforce leader, business leader, or project manager: use-case selection and team design. Portfolio: a one-page brief using the nine-step pipeline. Not a trained model.",
          "Cybersecurity professional: this workshop is not a cryptography course. Portfolio: a list of quantum claims you will not make, plus your organization’s own crypto-agility guidance.",
          "Community builder: facilitate Module 1 next time. Portfolio: a cleaned troubleshooting note with secrets removed.",
          "Machine learning is the next part of this journey, at /intro/qml. It is not a separate required hackathon challenge. The handbook names the 10-hour quantum machine learning course, plus the quantum-kernel and projected-kernel tutorials. Kevin is still rereading that source. Iterate on a simulator. Open Plan QPU time is 10 minutes per 28-day window. This workshop does not promise more minutes.",
          "Fall Fest projects: follow /intro/hackathon. The public program name is the FAU-hosted Qiskit Fall Fest 2026, inaugural state championship. October 1 and October 5 both appear as kickoff lines. This page does not choose. Grant’s event name, campus, registration URL, and GitHub org stay blank.",
        ],
      },
    ],
    checks: [
      {
        question: "A complete next step includes…",
        options: ["Only a job title", "A role, a link, a practice task, and something you can show", "A promise of advantage", "Every video, before any code"],
        answer: 1,
        why: "Role, skills, learning, practice, project, portfolio, opportunity.",
      },
    ],
    facilitator: {
      timing: "15 minutes. Circle one path. Write the link on the completion list.",
      notes: ["The survey does not assign people. They may switch paths."],
      questions: ["What could you show someone in two weeks?"],
      expected: ["A notebook, a Composer screenshot, a one-page brief, or a lesson outline."],
      misconceptions: ["The certification study guide is not today’s required homework."],
    },
    nextSlug: null,
    nextLabel: "Workshop checklist",
  },
];

export function moduleBySlug(slug: string) {
  return MODULES.find((item) => item.slug === slug);
}
