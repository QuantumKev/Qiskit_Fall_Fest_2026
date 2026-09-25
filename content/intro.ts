import type { Check } from "@/content/modules";

export const INTRO_TITLE = "Build Your First Quantum Program: A Beginner’s Guide to Python and Qiskit";

export const WELCOME_MESSAGE =
  "This guide is not asking participants to prove quantum advantage or publish a paper in Nature. It is designed to help them enter the quantum ecosystem, understand its language, use its tools, and develop the confidence to continue learning.";

export const PROGRESS_LINE =
  "Prepare → Learn the Language → Build Visually → Read the Code → Run the Code → Understand the Results → Find Your Next Step";

export const ANALOGY_END =
  "The analogy ends here. It only organizes software words. Superposition and entanglement are quantum states, not rooms, tools, or construction steps.";

export const QISKIT_TESTED = "2.3.1";
export const RUNTIME_TESTED = "0.50.0";
export const DOCS_CHECKED = "2026-09-25";

export const PHASES = [
  { id: "prepare", label: "Prepare" },
  { id: "language", label: "Learn the Language" },
  { id: "visual", label: "Build Visually" },
  { id: "read", label: "Read the Code" },
  { id: "run", label: "Run the Code" },
  { id: "results", label: "Understand the Results" },
  { id: "next", label: "Find Your Next Step" },
] as const;

export type PhaseId = (typeof PHASES)[number]["id"];

export const INTRO_SECTIONS = [
  { slug: "welcome", phase: "prepare", title: "Welcome", minutes: 5 },
  { slug: "prepare", phase: "prepare", title: "Exercise 1: Get connected", minutes: 40 },
  { slug: "language", phase: "language", title: "What are Python and Qiskit?", minutes: 20 },
  { slug: "execution", phase: "language", title: "How Python executes code", minutes: 15 },
  { slug: "vocabulary", phase: "language", title: "Quantum vocabulary", minutes: 20 },
  { slug: "composer", phase: "visual", title: "Exercise 2: Composer lab", minutes: 35 },
  { slug: "python", phase: "read", title: "Bell-state Python lab", minutes: 30 },
  { slug: "trace", phase: "run", title: "Watch the program run", minutes: 15 },
  { slug: "practice", phase: "results", title: "Practice", minutes: 20 },
  { slug: "next-step", phase: "next", title: "Where to go next", minutes: 10 },
  { slug: "hackathon", phase: "next", title: "Fall Fest projects", minutes: 20 },
  { slug: "qml", phase: "next", title: "Quantum machine learning", minutes: 15 },
  { slug: "hetionet", phase: "next", title: "Where this can lead", minutes: 10 },
] as const;

export type IntroSlug = (typeof INTRO_SECTIONS)[number]["slug"];

export function introSection(slug: string) {
  return INTRO_SECTIONS.find((item) => item.slug === slug);
}

export type ProgramTerm = {
  keyword: string;
  technical: string;
  homeDepot: string | null;
  pythonExample: string;
  bellLab: string;
};

export const PROGRAM_TERMS: ProgramTerm[] = [
  {
    keyword: "SDK",
    technical: "A software development kit is a bundled set of libraries and tools for building one kind of program.",
    homeDepot: "The Qiskit ecosystem row in the table is the entire Home Depot. SDK is the name for that kit. The table has no separate SDK row.",
    pythonExample: "import qiskit",
    bellLab: "Installing Qiskit gives you the SDK. The import lines are how this lab picks tools out of it.",
  },
  {
    keyword: "Package",
    technical: "A package is a folder of Python modules that you install and import as one library.",
    homeDepot: "A department or toolbox.",
    pythonExample: "import qiskit",
    bellLab: "qiskit is the package. StatevectorSampler lives in that package.",
  },
  {
    keyword: "Library",
    technical: "A library is a package written so other programs can call it.",
    homeDepot: "A department or toolbox.",
    pythonExample: "import qiskit",
    bellLab: "Qiskit is the library this lab calls. Python is the language that calls it.",
  },
  {
    keyword: "Module",
    technical: "A module is one Python file of related names inside a package.",
    homeDepot: "A specific aisle.",
    pythonExample: "from qiskit.primitives import StatevectorSampler",
    bellLab: "qiskit.primitives is the aisle that holds StatevectorSampler.",
  },
  {
    keyword: "Import",
    technical: "An import statement loads a name from a module so later lines can use it.",
    homeDepot: null,
    pythonExample: "from qiskit import QuantumCircuit",
    bellLab: "The first lines import QuantumCircuit and StatevectorSampler. Later lines use those names.",
  },
  {
    keyword: "Class",
    technical: "A class is the definition of a kind of object, including the data it holds and the methods it offers.",
    homeDepot: "The design or type of tool.",
    pythonExample: "QuantumCircuit",
    bellLab: "QuantumCircuit is the class. StatevectorSampler is another class.",
  },
  {
    keyword: "Object",
    technical: "An object, or instance, is one value created from a class.",
    homeDepot: "The actual tool selected.",
    pythonExample: "bell_circuit = QuantumCircuit(2)",
    bellLab: "bell_circuit is the object. sampler is a second object, created later.",
  },
  {
    keyword: "Method",
    technical: "A method is a function that belongs to an object and runs when you call it with a period.",
    homeDepot: "An action the tool can perform.",
    pythonExample: "bell_circuit.h(0)",
    bellLab: "h, cx, copy, measure_all, run, result, and get_counts are methods in this lab.",
  },
  {
    keyword: "Function",
    technical: "A function is a named block of code you call. A method is a function attached to an object.",
    homeDepot: null,
    pythonExample: "print(house_color)",
    bellLab: "print is a function. It writes a value out. It does not change the qubits.",
  },
  {
    keyword: "Variable",
    technical: "A variable is a name bound to a value by assignment.",
    homeDepot: "A labeled container holding something.",
    pythonExample: 'house_color = "blue"',
    bellLab: "bell_circuit, measured_circuit, sampler, job, result, and counts are variables.",
  },
  {
    keyword: "Argument",
    technical: "An argument is a value you pass into a function or method call.",
    homeDepot: "A setting, measurement, or instruction.",
    pythonExample: "QuantumCircuit(2)",
    bellLab: "2 tells QuantumCircuit how many qubits. 0 and 1 tell cx which qubits. shots=1024 tells the sampler how many samples.",
  },
  {
    keyword: "Parameter",
    technical: "A parameter is the name in a definition that receives an argument when the function runs.",
    homeDepot: null,
    pythonExample: "def label(name):\n    return name",
    bellLab: "In sampler.run([measured_circuit], shots=1024), shots is the parameter name and 1024 is the argument.",
  },
  {
    keyword: "Return value",
    technical: "A return value is the object or data a function hands back to the caller.",
    homeDepot: null,
    pythonExample: "counts = result[0].data[\"meas\"].get_counts()",
    bellLab: "get_counts returns a dictionary. job.result() returns the result object stored in result.",
  },
  {
    keyword: "Job",
    technical: "A job is the handle for work you have submitted and can ask for later.",
    homeDepot: null,
    pythonExample: "job = sampler.run([measured_circuit], shots=1024)",
    bellLab: "job is that handle. The backend row in the analogy table is the job site, which is a different word.",
  },
  {
    keyword: "Result",
    technical: "A result is the finished output you retrieve from a job.",
    homeDepot: null,
    pythonExample: "result = job.result()",
    bellLab: "result holds the sampler output. The counts are read from result[0].",
  },
];

export const HOME_DEPOT_TABLE: { concept: string; analogy: string }[] = [
  { concept: "Qiskit ecosystem", analogy: "The entire Home Depot" },
  { concept: "Package or library", analogy: "A department or toolbox" },
  { concept: "Module", analogy: "A specific aisle" },
  { concept: "Class", analogy: "The design or type of tool" },
  { concept: "Object or instance", analogy: "The actual tool selected" },
  { concept: "Method", analogy: "An action the tool can perform" },
  { concept: "Argument", analogy: "A setting, measurement, or instruction" },
  { concept: "Variable", analogy: "A labeled container holding something" },
  { concept: "Circuit", analogy: "The construction blueprint" },
  { concept: "Backend", analogy: "The job site where the work runs" },
  { concept: "Transpilation", analogy: "Adapting the blueprint to local building codes and available equipment" },
  { concept: "Sampler", analogy: "The inspection team collecting outcomes" },
  { concept: "Shots", analogy: "The number of repeated inspections" },
  { concept: "Counts", analogy: "The final inspection report" },
];

export const HOUSE_EXAMPLE = `house_color = "blue"\nprint(house_color)`;

export const EXECUTION_STEPS = [
  { title: "Install the package", detail: "The computer needs the Qiskit files before Python can import them.", skip: "ModuleNotFoundError. The name qiskit is not on this computer yet." },
  { title: "Import the required class", detail: "from qiskit import QuantumCircuit loads that class into this notebook.", skip: "NameError: QuantumCircuit is not defined." },
  { title: "Create an object", detail: "bell_circuit = QuantumCircuit(2) builds a two-qubit circuit and stores it.", skip: "NameError: bell_circuit is not defined, on every later line that uses it." },
  { title: "Apply methods to the object", detail: "h(0) and cx(0, 1) append gates, from left to right.", skip: "The circuit stays in the starting state, with both qubits in |0⟩." },
  { title: "Add measurements", detail: "Copy the circuit, then call measure_all() on the copy.", skip: "StatevectorSampler warns you. The classical registers are empty, so the counts are empty." },
  { title: "Create the execution tool", detail: "sampler = StatevectorSampler() builds a local ideal sampler.", skip: "NameError: sampler is not defined." },
  { title: "Submit the circuit", detail: "job = sampler.run([measured_circuit], shots=1024) submits one circuit.", skip: "There is no job to ask." },
  { title: "Receive a job", detail: "run returns a job object. That object is the receipt.", skip: "A later call to job.result() raises NameError." },
  { title: "Retrieve the result", detail: "result = job.result() waits for that ideal run and stores the output.", skip: "counts cannot be read, because result does not exist yet." },
  { title: "Extract and interpret the counts", detail: "get_counts() returns a dictionary of bitstrings and tallies.", skip: "You still have a result object, and you have not yet read the tallies." },
];

export const QUANTUM_CARDS: {
  term: string;
  glossaryTerm?: string;
  plain?: string;
  technical?: string;
  misconception?: string;
  labWhy: string;
  doc: string;
  docLabel: string;
}[] = [
  { term: "Classical bit", glossaryTerm: "Classical bit", labWhy: "Each measurement in this lab writes a classical bit. The histogram counts those bits.", doc: "https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information", docLabel: "Basics of quantum information" },
  { term: "Qubit", glossaryTerm: "Qubit", labWhy: "The Bell circuit uses two qubits, numbered 0 and 1.", doc: "https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information", docLabel: "Basics of quantum information" },
  { term: "State", glossaryTerm: "State", labWhy: "Gates change the state. The statevector is one way to write that state before measurement.", doc: "https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information", docLabel: "Basics of quantum information" },
  { term: "Basis state", glossaryTerm: "Basis state", labWhy: "The ideal Bell state is a combination of the basis states |00⟩ and |11⟩.", doc: "https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information", docLabel: "Basics of quantum information" },
  { term: "Statevector", glossaryTerm: "Statevector", labWhy: "Read it from the unmeasured circuit, before measure_all().", doc: "https://quantum.cloud.ibm.com/docs/en/guides/construct-circuits", docLabel: "Construct circuits" },
  { term: "Amplitude", glossaryTerm: "Amplitude", labWhy: "The ideal Bell state has amplitude 1/√2 on |00⟩ and on |11⟩, and 0 on the other two basis states.", doc: "https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information", docLabel: "Basics of quantum information" },
  { term: "Probability", glossaryTerm: "Probability", labWhy: "Each of 00 and 11 has probability 1/2. One shot still returns only one of them.", doc: "https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information", docLabel: "Basics of quantum information" },
  { term: "Phase", glossaryTerm: "Phase", labWhy: "This lab’s ideal histogram does not display phase. Two different states can share the same probabilities.", doc: "https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information", docLabel: "Basics of quantum information" },
  { term: "Superposition", glossaryTerm: "Superposition", labWhy: "H on qubit 0, starting from |0⟩, prepares an equal superposition on that qubit. Qubit 1 is still |0⟩ until CX.", doc: "https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information", docLabel: "Basics of quantum information" },
  { term: "Entanglement", glossaryTerm: "Entanglement", labWhy: "CX then ties qubit 1 to qubit 0. The counts are a clue. They are not a complete proof.", doc: "https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information", docLabel: "Basics of quantum information" },
  { term: "Quantum gate", glossaryTerm: "Quantum gate", labWhy: "H and CX are the gates in this lab. Measurement is a separate step.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/construct-circuits", docLabel: "Construct circuits" },
  { term: "Hadamard gate", glossaryTerm: "Hadamard gate", labWhy: "Place H on qubit 0. That is bell_circuit.h(0).", doc: "https://quantum.cloud.ibm.com/docs/en/guides/construct-circuits", docLabel: "Construct circuits" },
  { term: "CNOT or CX gate", glossaryTerm: "CNOT or CX gate", labWhy: "bell_circuit.cx(0, 1) uses qubit 0 as control and qubit 1 as target.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/construct-circuits", docLabel: "Construct circuits" },
  { term: "Control qubit", glossaryTerm: "Control qubit", labWhy: "In this lab the control is qubit 0, the first argument of cx.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/construct-circuits", docLabel: "Construct circuits" },
  { term: "Target qubit", glossaryTerm: "Target qubit", labWhy: "In this lab the target is qubit 1, the second argument of cx.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/construct-circuits", docLabel: "Construct circuits" },
  { term: "Quantum circuit", glossaryTerm: "Quantum circuit", labWhy: "Composer shows the circuit as wires and boxes. Python stores the same circuit in bell_circuit.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/construct-circuits", docLabel: "Construct circuits" },
  { term: "Measurement", glossaryTerm: "Measurement", labWhy: "measure_all() adds the measurements that turn the state into bitstrings.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/construct-circuits", docLabel: "Construct circuits" },
  { term: "Classical register", glossaryTerm: "Classical register", labWhy: "measure_all() creates a classical register named meas and writes one bit per qubit.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/construct-circuits", docLabel: "Construct circuits" },
  { term: "Shot", glossaryTerm: "Shot", labWhy: "shots=1024 repeats the ideal measurement 1024 times.", doc: "https://quantum.cloud.ibm.com/docs/en/api/qiskit/primitives", docLabel: "Qiskit primitives" },
  { term: "Counts", glossaryTerm: "Counts", labWhy: "get_counts() returns how many shots landed on each bitstring.", doc: "https://quantum.cloud.ibm.com/docs/en/api/qiskit/primitives", docLabel: "Qiskit primitives" },
  { term: "Histogram", glossaryTerm: "Histogram", labWhy: "Composer draws the counts as bars. In the ideal Bell lab, the tall bars are 00 and 11.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/composer", docLabel: "IBM Quantum Composer" },
  { term: "Simulator", glossaryTerm: "Simulator", labWhy: "StatevectorSampler is a local ideal simulator. It is the path to use while a classroom invitation is pending.", doc: "https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.primitives.StatevectorSampler", docLabel: "StatevectorSampler" },
  { term: "QPU", glossaryTerm: "Quantum processing unit or QPU", labWhy: "A QPU is optional in this workshop. The ideal lab does not submit a hardware job.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/hello-world", docLabel: "First circuit on hardware" },
  { term: "Noise", glossaryTerm: "Noise", labWhy: "Hardware can show a few 01 or 10 counts. The ideal sampler should not.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/hello-world", docLabel: "First circuit on hardware" },
  { term: "Backend", glossaryTerm: "Backend", labWhy: "The sampler is the local backend for this lab. A named IBM backend is a later choice.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/transpile", docLabel: "Transpilation" },
  { term: "Transpilation", glossaryTerm: "Transpilation", labWhy: "This ideal lab does not transpile. Hardware runs do, so the same blueprint can fit a device.", doc: "https://quantum.cloud.ibm.com/docs/en/guides/transpile", docLabel: "Introduction to transpilation" },
  {
    term: "Sampler",
    plain: "A sampler runs a measured circuit and collects bitstring counts.",
    technical: "In current Qiskit, a Sampler V2 accepts circuits and samples their classical output registers. StatevectorSampler is the local ideal reference implementation.",
    misconception: "A sampler does not return the statevector. Counts are tallies of shots.",
    labWhy: "StatevectorSampler samples the measured copy 1024 times.",
    doc: "https://quantum.cloud.ibm.com/docs/en/api/qiskit/primitives",
    docLabel: "Qiskit primitives",
  },
  {
    term: "Estimator",
    plain: "An estimator approximates the average value of an observable on a circuit.",
    technical: "Estimator V2 takes circuits and observables and estimates expectation values. It does not return shot counts.",
    misconception: "Estimator is not a second name for Sampler. This workshop does not run an estimator.",
    labWhy: "The Bell lab needs counts, so it uses a sampler. Leave the estimator for a later exercise.",
    doc: "https://quantum.cloud.ibm.com/docs/en/api/qiskit/primitives",
    docLabel: "Qiskit primitives",
  },
];

export const COMPOSER_FLOW = "Starting state → Hadamard → CNOT → Measurement → Counts";

export const COMPOSER_STEPS: { title: string; action: string; pause: string }[] = [
  {
    title: "Open IBM Quantum Composer",
    action: "Go to the Composer guide, then open Composer from the platform once you are signed in.",
    pause: "Before any gate, what should the wires show?",
  },
  {
    title: "Start a new circuit",
    action: "Create a new circuit. If you only see one wire, add a qubit so two wires are on the canvas.",
    pause: "How many wires do you need for this lab?",
  },
  {
    title: "Locate qubit 0 and qubit 1",
    action: "Find the wire labels. Counting starts at 0. Qubit 0 and qubit 1 are different wires.",
    pause: "Which wire is qubit 0?",
  },
  {
    title: "Add an H gate to qubit 0",
    action: "Drag H onto qubit 0 only. Leave qubit 1 empty at this column.",
    pause: "If both qubits start in |0⟩, what does H change, and what does it leave alone?",
  },
  {
    title: "Add a CX gate",
    action: "Place CX with qubit 0 as the control and qubit 1 as the target.",
    pause: "Which bitstrings should be possible after this gate, and which should be absent?",
  },
  {
    title: "Add measurement operations",
    action: "Measure both qubits. The meters come after the gates.",
    pause: "What will one measurement return: a statevector, or one bitstring?",
  },
  {
    title: "Review the circuit from left to right",
    action: "Read H, then CX, then the measurements. That is the same order as the Python methods.",
    pause: "What happens to the result if CX is placed before H?",
  },
  {
    title: "Run or simulate",
    action: "Use the ideal simulation option Composer offers today. A hardware run is optional and depends on the classroom plan.",
    pause: "Will 1024 shots land on exactly 512 and 512?",
  },
  {
    title: "Examine the histogram",
    action: "Open the histogram of counts.",
    pause: "Which bars should be tall in the ideal run?",
  },
  {
    title: "Name the ideal results",
    action: "00 and 11 are the primary ideal results because the prepared state has amplitude on |00⟩ and |11⟩ only.",
    pause: "Why is that histogram still not a complete proof of entanglement?",
  },
];

export const BELL_SOURCE = `from qiskit import QuantumCircuit
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

export const BELL_LINES: { line: string; python: string; qiskit: string; effect: string; composer: string }[] = [
  {
    line: "from qiskit import QuantumCircuit",
    python: "from and import load the class QuantumCircuit into this notebook.",
    qiskit: "QuantumCircuit is the class that will store gates.",
    effect: "No qubit has changed.",
    composer: "You have not opened a canvas yet.",
  },
  {
    line: "from qiskit.primitives import StatevectorSampler",
    python: "This import loads one class from the primitives module.",
    qiskit: "StatevectorSampler is the local ideal sampler used in this workshop.",
    effect: "No circuit exists yet.",
    composer: "No run has been requested.",
  },
  {
    line: "bell_circuit = QuantumCircuit(2)",
    python: "QuantumCircuit is the class. 2 is the argument. The call creates an object. = assigns that object to the variable bell_circuit.",
    qiskit: "The circuit has two qubits, indexed from 0, and no gates yet. Both start in |0⟩.",
    effect: "You selected a two-room blueprint and labeled it bell_circuit.",
    composer: "A new circuit with two wires.",
  },
  {
    line: "bell_circuit.h(0)",
    python: "The period selects the method h. Parentheses hold the argument 0.",
    qiskit: "Apply a Hadamard gate to qubit 0.",
    effect: "Qubit 0 becomes (|0⟩ + |1⟩) / √2. Qubit 1 stays |0⟩.",
    composer: "H on wire 0.",
  },
  {
    line: "bell_circuit.cx(0, 1)",
    python: "The comma separates two arguments. The first is the control. The second is the target.",
    qiskit: "Apply CX with control qubit 0 and target qubit 1.",
    effect: "The ideal state becomes (|00⟩ + |11⟩) / √2.",
    composer: "Control on wire 0, target on wire 1.",
  },
  {
    line: "measured_circuit = bell_circuit.copy()",
    python: "copy() returns a second object. Assignment stores it under a new name.",
    qiskit: "The original circuit stays unmeasured so a statevector can be read from it.",
    effect: "Two Python objects now hold the same gates.",
    composer: "Duplicate the circuit before you add meters.",
  },
  {
    line: "measured_circuit.measure_all()",
    python: "Parentheses are required. This call passes no extra arguments.",
    qiskit: "Add one classical bit per qubit and measure into the register named meas.",
    effect: "The next sampler run can return bitstrings.",
    composer: "Measurement on both wires.",
  },
  {
    line: "sampler = StatevectorSampler()",
    python: "Calling the class constructs an object and assigns it to sampler.",
    qiskit: "This sampler uses a statevector. It does not call IBM and it does not use an API key.",
    effect: "An execution tool now exists.",
    composer: "Choose an ideal simulator, when Composer offers one.",
  },
  {
    line: "job = sampler.run([measured_circuit], shots=1024)",
    python: "Square brackets build a list with one circuit. shots is a named argument.",
    qiskit: "Submit that measured circuit for 1024 ideal shots.",
    effect: "You receive a job.",
    composer: "Run, with 1024 shots if that control is visible.",
  },
  {
    line: "result = job.result()",
    python: "result() is a method on the job. Its return value is stored in result.",
    qiskit: "This asks the local sampler for the finished output.",
    effect: "The tallies exist inside result, and they are not printed yet.",
    composer: "The run finishes and the results panel can open.",
  },
  {
    line: 'counts = result[0].data["meas"].get_counts()',
    python: "[0] selects the first published result. [\"meas\"] selects the classical register by its name. get_counts returns a dictionary.",
    qiskit: "Keys are bitstrings. Values are how many shots hit that string. Qubit 0 is the rightmost bit.",
    effect: "You can read the inspection report. Phases are no longer on the page.",
    composer: "The numbers behind the histogram.",
  },
  {
    line: "print(counts)",
    python: "print is a function. counts is the argument.",
    qiskit: "The notebook shows the dictionary. Ideal runs pile up on 00 and 11.",
    effect: "A computational-basis histogram is not, by itself, a complete proof of entanglement.",
    composer: "Look at the histogram and name the tall bars.",
  },
];

export const PUNCTUATION: { mark: string; name: string; meaning: string }[] = [
  { mark: ".", name: "Period", meaning: "The period reaches a method or attribute on an object, as in bell_circuit.h." },
  { mark: "( )", name: "Parentheses", meaning: "Parentheses call a function or method. measure_all() still needs them when you pass nothing extra." },
  { mark: ",", name: "Comma", meaning: "The comma separates arguments. cx(0, 1) passes control, then target." },
  { mark: "[ ]", name: "Square brackets", meaning: "Square brackets build the list passed to run, and they pick result[0] and the \"meas\" register." },
  { mark: "\" \"", name: "Quotation marks", meaning: "Quotation marks make a string, such as \"meas\" or \"blue\"." },
  { mark: "=", name: "Equals sign", meaning: "One equals sign assigns the value on the right to the name on the left." },
  { mark: "#", name: "Comment symbol", meaning: "Python ignores the rest of a line after #. Use comments to say why a line is there." },
  { mark: "indent", name: "Indentation", meaning: "Indentation groups lines inside a function, if, or for. The Bell lab’s main lines sit at the left edge." },
];

export const TRACE_STEPS = [
  { label: "Import", line: "from qiskit import QuantumCircuit", exists: "The name QuantumCircuit becomes available.", circuit: "No circuit object yet.", output: "Nothing is printed.", skip: "NameError if a later line mentions QuantumCircuit." },
  { label: "Create circuit", line: "bell_circuit = QuantumCircuit(2)", exists: "The variable bell_circuit points at a QuantumCircuit object.", circuit: "Two qubits, no gates, both in |0⟩.", output: "Nothing is printed.", skip: "NameError: bell_circuit is not defined." },
  { label: "Apply H", line: "bell_circuit.h(0)", exists: "The same object gains one gate.", circuit: "H on qubit 0.", output: "Nothing is printed.", skip: "Qubit 0 stays |0⟩, so CX later cannot build this Bell state." },
  { label: "Apply CX", line: "bell_circuit.cx(0, 1)", exists: "The circuit object now holds H and CX.", circuit: "Ideal state (|00⟩ + |11⟩) / √2.", output: "Nothing is printed.", skip: "The qubits stay separable. Ideal counts would not pile up on only 00 and 11." },
  { label: "Add measurement", line: "measured_circuit.measure_all()", exists: "measured_circuit is a second object. bell_circuit is still unmeasured.", circuit: "Meters on the copy only.", output: "Nothing is printed.", skip: "The sampler warns that the circuit has no classical registers, and the counts come back empty." },
  { label: "Create sampler", line: "sampler = StatevectorSampler()", exists: "The variable sampler points at a StatevectorSampler.", circuit: "The circuit does not change.", output: "Nothing is printed.", skip: "NameError: sampler is not defined." },
  { label: "Submit job", line: "job = sampler.run([measured_circuit], shots=1024)", exists: "job points at the submitted run.", circuit: "The circuit does not gain gates.", output: "No counts yet.", skip: "NameError when the next line reads job." },
  { label: "Retrieve result", line: "result = job.result()", exists: "result holds the sampler output.", circuit: "Unchanged.", output: "The dictionary is inside result and not printed.", skip: "NameError: result is not defined." },
  { label: "Extract counts", line: "counts = result[0].data[\"meas\"].get_counts()", exists: "counts is a dictionary.", circuit: "Unchanged.", output: "Still not printed until print.", skip: "You cannot see which bitstrings occurred." },
  { label: "Interpret output", line: "print(counts)", exists: "All of the earlier names still exist.", circuit: "Unchanged.", output: "A dictionary whose ideal keys are 00 and 11.", skip: "The run finished and the room never saw the numbers." },
];

export const ERROR_CLUES = [
  { name: "NameError", clue: "Python cannot use a name before that name has been imported, created, or assigned. Run the cell that creates the name, then run this cell again." },
  { name: "ModuleNotFoundError", clue: "The package is missing from this environment. Install the pinned requirements in the same virtual environment, then restart the notebook kernel." },
  { name: "Incorrect method name", clue: "The period is fine and the word after it is not a method on that object. Check the spelling against the line list. This lab calls sampler.run." },
  { name: "Cell executed out of order", clue: "Notebooks remember names from cells you already ran. Restart the kernel and run from the top." },
  { name: "Measurements omitted", clue: "StatevectorSampler warns you and returns empty classical data. Copy the circuit and call measure_all() on the copy." },
  { name: "Result before the job", clue: "job.result() needs the variable job. Submit with sampler.run first." },
  { name: "Outdated Qiskit syntax", clue: "This lab was run on Qiskit 2.3.1. If import qiskit prints a different minor version, follow the API page for that version." },
  { name: "Bitstring order", clue: "Qiskit prints qubit 0 as the rightmost bit. 00 and 11 look the same if you reverse them. 01 does not." },
];

export const PRACTICE: { title: string; prompt: string; hint: string; solution: string }[] = [
  {
    title: "Change the shot count",
    prompt: "Change shots=1024 to shots=100.",
    hint: "Predict the shape of the dictionary before you run it. Which keys should remain, and what should happen to the numbers?",
    solution: "The ideal keys stay 00 and 11. The values become smaller and usually less even, because 100 shots estimate the same probabilities with a wider relative swing.",
  },
  {
    title: "Predict what stays consistent",
    prompt: "Write one sentence about what changes and one sentence about what should remain consistent.",
    hint: "Separate the probabilities from one finite sample.",
    solution: "The prepared state stays (|00⟩ + |11⟩) / √2, so 00 and 11 remain the ideal outcomes. The exact tallies change from run to run. They are not locked at half the shot count.",
  },
  {
    title: "Remove the CX gate",
    prompt: "Delete bell_circuit.cx(0, 1), predict, then run the measured copy.",
    hint: "H is still on qubit 0. Qubit 1 never gets a gate. What can qubit 1 measure?",
    solution: "Qubit 1 stays |0⟩. Qubit 0 is in an equal superposition, so it measures 0 or 1. Qiskit prints qubit 0 as the rightmost bit. The ideal strings are 00 and 01.",
  },
  {
    title: "Replace H with X",
    prompt: "Put an X gate on qubit 0 instead of H, and keep CX.",
    hint: "X on |0⟩ prepares |1⟩. CX then flips the target when the control is 1.",
    solution: "The ideal state is |11⟩. Counts should pile up on 11. There is no equal superposition in this variant.",
  },
  {
    title: "Comment every line",
    prompt: "Add a # comment to each line that says why it is there.",
    hint: "A comment can name the class, the object, or the gate. It does not change the circuit.",
    solution: "Python ignores text after #. The circuit is unchanged if the comments are the only edit. A useful comment says intent, such as “copy before measurement so the statevector stays available.”",
  },
  {
    title: "Find the parts of speech",
    prompt: "Mark one class, one object, one method, and one argument in the program.",
    hint: "QuantumCircuit and StatevectorSampler are classes. Names on the left of = are variables that hold objects.",
    solution: "QuantumCircuit is a class. bell_circuit is an object. h is a method. 0, 1, and 1024 are arguments. shots is a parameter name.",
  },
  {
    title: "Match Python to Composer",
    prompt: "Pair each gate and measurement line with the box you placed on the canvas.",
    hint: "Read both from left to right. The import and sampler lines have no gate box.",
    solution: "h(0) is H on wire 0. cx(0, 1) is CX from wire 0 to wire 1. measure_all() is the two meters. QuantumCircuit(2) is the pair of wires.",
  },
  {
    title: "Run a cell out of order",
    prompt: "Restart the kernel, skip the import cell, and run the QuantumCircuit line.",
    hint: "Read the error name before you read the paragraph under it.",
    solution: "You should see NameError: QuantumCircuit is not defined. That is a clue about order. Restart, run the import, then run the circuit cell. It is not a verdict on you.",
  },
];

export const NEXT_STOPS: { situation: string; destination: string; href: string }[] = [
  { situation: "I do not understand the concept", destination: "IBM Quantum Learning", href: "https://quantum.cloud.ibm.com/learning/en" },
  { situation: "I do not understand a Qiskit class or method", destination: "Qiskit API reference", href: "https://quantum.cloud.ibm.com/docs/en/api/qiskit/primitives" },
  { situation: "I want to see a complete workflow", destination: "IBM tutorials", href: "https://www.ibm.com/quantum/qiskit" },
  { situation: "I want to build visually", destination: "IBM Quantum Composer", href: "https://quantum.cloud.ibm.com/docs/en/guides/composer" },
  { situation: "My code produces an error", destination: "Read the error, verify the installed version, and check the API documentation", href: "https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.primitives.StatevectorSampler" },
  { situation: "I want to inspect the open-source code", destination: "Qiskit GitHub", href: "https://github.com/Qiskit/qiskit" },
  { situation: "I want to run on hardware", destination: "IBM’s first-circuit-on-hardware guide", href: "https://quantum.cloud.ibm.com/docs/en/guides/hello-world" },
  { situation: "I need foundational preparation", destination: "Kevin’s Qolour videos and educator resources. Read the video titles from the live course menu.", href: "https://www.qolour.com/educator-course" },
];

export const PRIMARY_SOURCES: { title: string; href: string }[] = [
  { title: "Qiskit tutorials on IBM", href: "https://www.ibm.com/quantum/qiskit" },
  { title: "IBM Quantum documentation", href: "https://quantum.cloud.ibm.com/docs/en/guides" },
  { title: "IBM Quantum Composer", href: "https://quantum.cloud.ibm.com/docs/en/guides/composer" },
  { title: "Hello world, now the hardware guide", href: "https://quantum.cloud.ibm.com/docs/en/guides/hello-world" },
  { title: "Construct circuits", href: "https://quantum.cloud.ibm.com/docs/en/guides/construct-circuits" },
  { title: "Primitives API", href: "https://quantum.cloud.ibm.com/docs/en/api/qiskit/primitives" },
  { title: "Qiskit source", href: "https://github.com/Qiskit/qiskit" },
  { title: "Qiskit documentation source", href: "https://github.com/Qiskit/documentation" },
  { title: "Qolour educator course", href: "https://www.qolour.com/educator-course" },
  { title: "Qolour statevector exhibit", href: "https://www.qolour.com/educator-course/statevector-exhibit" },
];

export const QML_COURSE = "https://quantum.cloud.ibm.com/learning/en/courses/quantum-machine-learning";

export const QML_KERNEL = "https://quantum.cloud.ibm.com/docs/en/tutorials/quantum-kernel-training";

export const QML_PROJECTED = "https://quantum.cloud.ibm.com/docs/en/tutorials/projected-quantum-kernels";

export const FALL_FEST_LINKS = [
  { label: "Discord", href: "https://discord.gg/vz6uTbtJzR" },
  { label: "IBM Quantum registration", href: "https://quantum.cloud.ibm.com/registration" },
  { label: "Qiskit Slack", href: "https://qisk.it/join-slack" },
  { label: "IBM announcement", href: "https://www.ibm.com/quantum/blog/qiskit-fall-fest-2026" },
  { label: "Domain-track note", href: "https://www.linkedin.com/pulse/domain-track-entangled-solutions-group-tgrwe/" },
  { label: "Plan comparison", href: "https://quantum.cloud.ibm.com/docs/en/guides/plans-overview" },
  { label: "Open Plan updates", href: "https://www.ibm.com/quantum/blog/open-plan-updates" },
  { label: "Classroom accounts", href: "https://ibm.biz/classroom-account" },
];

export const USE_CASE_FIELDS = [
  "The problem in plain language.",
  "Who has it.",
  "How it is solved today.",
  "What “better” is worth, as a number.",
  "Which of the three problem shapes, and why.",
  "The real-instance size versus the weekend size.",
  "What would have to be true in five years.",
  "The tiny thing you will actually build.",
  "Three sentences for the opening slide.",
];

export const PROJECT_KINDS = [
  "A real industry problem mapped to a QUBO, a Hamiltonian, or a kernel, and run small.",
  "A small classical-versus-quantum comparison.",
  "A tool.",
  "A sourced analysis of where quantum does not fit.",
];

export const DAY_ONE_ROLES = [
  "Domain Lead, for USE-CASE.md.",
  "Problem Framer, for variables, constraints, and the objective.",
  "Impact and Feasibility Analyst, for the baseline, the value, and the size gap.",
  "Pitch Lead, for the five-minute deck and the demo.",
  "Policy and Risk Analyst, for LIMITATIONS.md.",
  "Investor-Lens Reviewer, for who would buy it and what hardware progress the timeline needs.",
];

export const HACKATHON_GAP_NOTE =
  "Still blank. The source files leave these as placeholders or unanswered questions.";

export const HACKATHON_GAPS = [
  "Grant Kurz’s public event name, his campus, and his October weekend dates.",
  "Registration URL. The files still say {{REGISTRATION_LINK}}.",
  "Code-of-conduct URL.",
  "Participant help email. The files still say {{ORGANIZER_EMAIL}}.",
  "GitHub org and submission repo name. The files still say {{GITHUB_ORG}} and {{REPO_NAME}}.",
  "Local event name and host org. The handbook still says {{EVENT_NAME}} and {{HOST_ORG}}.",
  "A chat link other than the Discord invite, if that invite is not the one to use.",
  "Hackathon-platform URL, participant dashboard, photo Drive, and the speaker schedule.",
  "How to create or join a project on Grant’s platform. The files ask him and stop there.",
  "A numeric team-size cap. “Up to [4]” in the sponsorship template is still in brackets.",
  "Judging weights, a score sheet, and who judges.",
  "Which local kickoff date applies. October 1 and October 5 both appear. This page does not choose.",
  "State championship time and room on November 13.",
  "Whether participants will use the Open Plan or a classroom account. No classroom-minute quota is stated.",
  "Whether the extra 180 Open Plan minutes are still offered.",
  "Non-student eligibility.",
  "Submission deadline. The files still say {{SUBMISSION_DEADLINE}}.",
  "The folders challenges/, resources/, and submissions/_TEMPLATE/. They are described and are not in the tree.",
];

export const PROGRAM_NAME =
  "FAU-hosted Qiskit Fall Fest 2026, inaugural state championship.";

export const PROGRAM_BANNER =
  "The README banner reads Qiskit Fall Fest 2026, October 2026, Florida, hosted by Florida Atlantic University. The theme is ten years of quantum on the cloud. Fall Fest is a worldwide student-led series with IBM Quantum.";

export const KICKOFF_LINES =
  "The README says everything else can wait until kickoff, and that sentence says October 5. The key-dates table on the same page says local kickoff and challenge release are October 1, 2026. The handbook banner is October 5 through November 13, 2026. The pre-event job is to arrive by October 5 with a working environment and a rough problem. This page does not choose between October 1 and October 5.";

export const CHAMPIONSHIP_LINE =
  "The state championship is November 13 at Florida Atlantic University, Boca Raton campus. Time and room are still TBD. The sponsorship template header says Friday, November 13, 2026, at that campus. Its glance table still says [Championship Venue, City].";

export const WINNER_PACKET =
  "Local first-place winners (names, emails, deck, and GitHub project link) are due to the hosts no later than October 31.";

export const BEFORE_KICKOFF = [
  "Register. The link is still {{REGISTRATION_LINK}}.",
  "Join the chat. The only concrete URL in that slot is the Discord invite.",
  "Create a free IBM Quantum account. Handbook section 4. Sign up on the IBM Quantum registration page.",
  "Send a GitHub username so organizers can add you to the org. The org is still {{GITHUB_ORG}}. The repo is still https://github.com/{{GITHUB_ORG}}/{{REPO_NAME}}.",
];

export const COST_LINE =
  "Nothing to pay. The Open Plan, Qiskit, and GitHub are free. No laptop is fine if you partner with someone who has one. A weak laptop is fine because the work runs in a browser.";

export const TRACKS = [
  "Builders write Qiskit. They need Python, not a physics degree. Pre-work is about 3–5 hours.",
  "Domain people bring an industry problem, do not install Python, and read notebooks. Pre-work is about 2–3 hours.",
];

export const EVERYONE_LINE =
  "Everyone, on both tracks: register, join the chat, create an IBM Quantum account, create a GitHub account and join the event repo, read what you are building, and skim the domain track. Thirty minutes means those four account steps only.";

export const ACCOUNT_FACTS = [
  "quantum-computing.ibm.com and channel=\"ibm_quantum\" are described as dead after July 1, 2025.",
  "The handbook tells builders to create an Open Plan instance in us-east only, copy an API key once and the instance CRN, and keep the key out of git and out of chat. The domain track can skip the key and the local install.",
  "The preferred handbook path is the browser: IBM Quantum Learning, starting with “Use a quantum computer today,” Composer for zero code, then Colab with qiskit, qiskit-ibm-runtime, matplotlib, and pylatexenc.",
  "A local install is the fallback: Python 3.10 or later, a fresh virtual environment, and one unpinned pip install. The handbook says Qiskit 2.5.x supports Python 3.10 through 3.14. This site’s Bell lab pin stays qiskit>=2.3.0,<2.4.0.",
  "The setup check is a local Bell circuit with StatevectorSampler. It uses no account and no QPU time. Hardware save_account is for a trusted machine only, region us-east, default channel ibm_quantum_platform.",
];

export const PLAN_BLANK =
  "Still blank: whether this room will use the Open Plan or a classroom account. The files attach no minute quota to classroom accounts. This workshop’s Exercise 1 still follows a classroom invitation and says you do not create a separate instance on that path.";

export const PROBLEM_SHAPES = [
  "Optimization: scheduling, routing, and portfolios. Classical solvers are already strong, so name a baseline.",
  "Simulation: molecules and materials. This is the strongest theoretical fit. Hardware-reachable molecules are chemically small.",
  "Learning and data: kernels and similarity on scarce, expensive, subtle data such as fraud, anomaly, and risk. This is the most contested shape, and it fits a skeptical project.",
];

export const VALID_SKEPTICAL =
  "A write-up that a problem is not quantum-shaped is a valid submission, and the materials call that better than average.";

export const SUBMISSION_STEPS = [
  "Work on a branch named team-<name>.",
  "Copy submissions/_TEMPLATE into submissions/team-<name>. That template folder is described and is not in the tree yet.",
  "Open a pull request to main titled [SUBMISSION] Team <name> — <project title>. Draft the pull request early.",
  "Include README.md, a notebook or source, USE-CASE.md, requirements.txt if there is code, and slides or a demo video.",
  "LIMITATIONS.md is strongly encouraged. The materials say judges reward it.",
  "GitHub Desktop or editing in the browser is accepted for written work. GitHub is required on both tracks. Students are pointed at the GitHub Student Developer Pack.",
];

export const JOIN_FACTS = [
  "Registration URL: still {{REGISTRATION_LINK}}.",
  "Chat: the Discord invite is the only concrete URL. {{CHAT_LINK}} is still unset.",
  "Create the free IBM Quantum account.",
  "Send your GitHub username and accept the org invite. The org name is still unset.",
  "You do not need a team before kickoff. Team formation is at kickoff.",
  "How to create or join a project on Grant’s platform is an unanswered question in the files.",
];

export const TEAM_SIZE_LINE =
  "No participant-facing team-size cap is written. The sponsorship template says “teams of up to [4],” and that number is still in brackets. Each team should have a builder side and a domain side. One person owns hardware submissions.";

export const JUDGING_LINE =
  "No judging weights, score sheet, or judge names are published. The materials say FAU will publish one rubric for local events and the statewide championship. The dimensions named for that rubric are technical execution (a simulator only, or also a real device), problem framing and relevance, honesty about limitations, and presentation. Pull requests after {{SUBMISSION_DEADLINE}} are not judged.";

export const AWARD_TEMPLATE_LINE =
  "The sponsorship template lists 1st, 2nd, and 3rd, and says local winners advance. That file is a placeholder kit for campuses. Local events are two-day October weekends dated [Saturday–Sunday, October XX–XX, 2026]. Headcount is still “up to [40–50] students in teams of up to [4].” Beginners are welcome. The bracketed numbers stay blank.";

export const LIGHTNING_TALK_LINE =
  "The Pitch Lead owns a five-minute deck and demo. The sponsorship template also lists a five-minute sponsor lightning talk. That line is a sponsorship benefit.";

export const HOST_CONTACTS: { name: string; detail: string; href?: string }[] = [
  { name: "Robert Loredo", detail: "RLoredo2026@fau.edu. He leads this initiative.", href: "https://linkedin.com/in/robertloredo" },
  { name: "Ayse Torres", detail: "LinkedIn is still blank." },
  { name: "Kevin Robinson", detail: "LinkedIn is still blank." },
  { name: "Grant Kurz", detail: "LinkedIn is still blank. The files have no separate public name, date block, proposal form, join URL, team cap, or rubric for an event under his name." },
];

export const SEPTEMBER_LINE =
  "A September host kickoff is described as a recorded overview of team setup, IBM Quantum access, and Qiskit, plus a shared calendar of campus hackathons. Still blank: the September date and the recording URL.";

export const CANVAS_NOTE =
  "Fill the nine-field Use-Case Canvas before arrival, read it aloud at team formation, and copy it to submissions/team-<name>/USE-CASE.md. Challenge statements are described as published at kickoff in challenges/, and that folder is not in the tree. This workshop’s project canvas is a Hetionet sketch for the local lab. It is a different sheet from the nine-field canvas.";

export const OPEN_PLAN_MINUTES =
  "The Open Plan gives up to 10 minutes of QPU time per rolling 28-day window. Usage is on the dashboard and the Workloads page. Iterate on a simulator, and send a circuit to hardware only after it is final. A StatevectorSampler setup check uses no account and no QPU time. QiskitRuntimeService(channel=\"local\") is described as free, instant, and unlimited. Hardware selection after that is least_busy(operational=True, simulator=False). One person per team owns those hardware jobs. An unattended loop burns the quota.";

export const PROMO_BLANK =
  "Still blank: whether an extra 180 minutes over 12 months for active Open Plan users are still offered. The handbook says to check the Open Plan updates page.";

export const QML_FIT =
  "Shape 3 is the learning fit: scarce, expensive data and a subtle signal, including fraud, anomaly, classification, generative modeling, and risk. The catalog’s industry example is hybrid ensemble classification for grid stability.";

export const QML_OUTPUT_BLANK =
  "Still blank as a lab. The FAU files do not say what quantum machine learning code to implement, or what to do with that output. The general project bar still applies: run small, compare with a classical baseline, state the size gap, and say what the result does not show.";

export const HETIONET_PIPELINE = [
  "Define the problem",
  "Prepare data",
  "Establish a classical baseline",
  "Design the quantum component",
  "Run experiments",
  "Benchmark results",
  "Communicate findings",
];

export const INTRO_CHECKS: Record<string, Check[]> = {
  welcome: [
    {
      question: "What is this guide for?",
      options: [
        "Proving quantum advantage",
        "Entering the tools, the language, and a next step",
        "Publishing a Nature paper",
        "Replacing classical computers",
      ],
      answer: 1,
      why: "The welcome states the aim: enter the ecosystem and keep learning.",
    },
  ],
  language: [
    {
      question: "In bell_circuit = QuantumCircuit(2), what is QuantumCircuit?",
      options: ["A variable", "A class", "A count", "A backend"],
      answer: 1,
      why: "QuantumCircuit is the class. bell_circuit is the variable that holds the object. 2 is the argument.",
    },
  ],
  execution: [
    {
      question: "Which warning matches notebook order?",
      options: [
        "Python runs every cell whenever you open the file",
        "Python cannot use a name before that name has been imported, created, or assigned",
        "A later cell always repairs an earlier typo",
        "Imports may sit below the first use",
      ],
      answer: 1,
      why: "Names come from cells you have already run.",
    },
  ],
  vocabulary: [
    {
      question: "Which description of a qubit should you keep?",
      options: [
        "A qubit is simply both 0 and 1",
        "A qubit has a quantum state described with amplitudes, and measurement returns a classical result",
        "A qubit stores two classical bits",
        "A histogram is the qubit",
      ],
      answer: 1,
      why: "Measurement produces one classical outcome. The state before that look is not a pair of stored bits.",
    },
  ],
  composer: [
    {
      question: "Which ideal outcomes should dominate?",
      options: ["01 and 10", "00 and 11", "only 00", "all four equally"],
      answer: 1,
      why: "H then CX, with this control and target, puts amplitude on |00⟩ and |11⟩.",
    },
  ],
  python: [
    {
      question: "Why copy the circuit before measure_all()?",
      options: [
        "So the statevector is taken from a circuit that has not been measured",
        "Because IBM charges for two circuits",
        "To reverse the bit order",
        "Because H must be measured first",
      ],
      answer: 0,
      why: "bell_circuit stays unmeasured. measured_circuit receives the meters.",
    },
  ],
  trace: [
    {
      question: "What does a NameError usually tell you in this lab?",
      options: [
        "The quantum state is wrong",
        "A name was used before it was imported, created, or assigned",
        "The histogram proved entanglement",
        "The API key was copied into the cell",
      ],
      answer: 1,
      why: "Read the error as a clue about order.",
    },
  ],
  practice: [
    {
      question: "After you drop shots from 1024 to 100, what should stay consistent in the ideal Bell circuit?",
      options: [
        "The exact integers in the dictionary",
        "The ideal outcomes 00 and 11",
        "A bar for 01",
        "A printed API key",
      ],
      answer: 1,
      why: "Fewer shots change the tallies. They do not change which strings the ideal state supports.",
    },
  ],
  "next-step": [
    {
      question: "You want the meaning of a Qiskit method. Where do you look first?",
      options: ["A copied course pasted into chat", "The Qiskit API reference", "A hardware job", "The Hetionet training script"],
      answer: 1,
      why: "Class and method questions belong on the API reference. Concepts belong in IBM Quantum Learning.",
    },
  ],
  hackathon: [
    {
      question: "When do the FAU materials say you need a team?",
      options: [
        "Before you register",
        "You do not need a team before kickoff. Team formation is at kickoff.",
        "The sponsorship template’s bracketed number is the published cap",
        "Only after the state championship",
      ],
      answer: 1,
      why: "The handbook says you do not need a team beforehand. This page does not choose between the October 1 and October 5 kickoff lines, and it does not turn the bracketed template number into a cap.",
    },
  ],
  qml: [
    {
      question: "Where do the FAU materials put the 10 minutes?",
      options: [
        "On classroom accounts, as a quota",
        "On the Open Plan: up to 10 minutes of QPU time per rolling 28-day window. A StatevectorSampler check uses no QPU time.",
        "On every simulator run",
        "As a team-size rule",
      ],
      answer: 1,
      why: "The handbook attaches that window to the Open Plan. It does not state a classroom-minute quota. The setup check uses StatevectorSampler and no QPU time.",
    },
  ],
  hetionet: [
    {
      question: "Which reading matches the Hetionet README?",
      options: [
        "The best listed score is a stacking ensemble, with a tuned random forest close behind",
        "The project is a clinical result",
        "The project is quantum advantage",
        "Standalone QSVC is the best listed score",
      ],
      answer: 0,
      why: "Test PR-AUC 0.7987 versus 0.7838. Report the comparison. This page does not train the model.",
    },
  ],
};

export const INTRO_FACILITATOR: Record<string, { timing: string; notes: string[] }> = {
  welcome: {
    timing: "5 minutes. Read the welcome once.",
    notes: ["Say the seven-step line out loud and point at the rail.", "Module 00 on the journey is still a separate draft. Confirm that wording before the live session."],
  },
  prepare: {
    timing: "30–40 minutes. Registration should already be done for most of the room.",
    notes: ["Park account problems at a side table.", "Do not ask anyone to paste an API key or a CRN into chat."],
  },
  language: {
    timing: "20 minutes. Search three terms. Do not read every card.",
    notes: ["Keep the Home Depot table on software structure.", "When the card says the analogy stops, stop."],
  },
  execution: {
    timing: "15 minutes. Run the two-line house example, then map it onto the ten Bell steps.",
    notes: ["Restart a kernel on purpose so the room sees a NameError."],
  },
  vocabulary: {
    timing: "20 minutes. Use the cards the Bell lab needs.",
    notes: ["Say that a qubit is not simply both 0 and 1.", "Print the sheet if the room wants paper."],
  },
  composer: {
    timing: "35 minutes. Pause for each prediction.",
    notes: ["Check control versus target.", "Ideal simulation is enough. Do not wait out a long hardware queue."],
  },
  python: {
    timing: "30 minutes. One line at a time.",
    notes: ["The tested sampler line is Qiskit 2.3.1.", "Do not introduce a real API token in this notebook."],
  },
  trace: {
    timing: "15 minutes. Step with the arrow keys.",
    notes: ["Ask what error appears if this step is skipped before you reveal it."],
  },
  practice: {
    timing: "20 minutes. Hints stay closed until a pair asks.",
    notes: ["The CX-removed answer depends on bit order. Write qubit 0 on the right on the board."],
  },
  "next-step": {
    timing: "10 minutes. Each person leaves with one link.",
    notes: ["Read Qolour video titles from the live menu. Do not paste the course."],
  },
  hackathon: {
    timing: "20 minutes. Read both kickoff lines. Do not pick one.",
    notes: [
      "Robert Loredo leads this initiative. Cite him by name and role. Do not read from the book.",
      "Do not fill Grant’s event name, campus, registration URL, GitHub org, team-size cap, or judging weights.",
    ],
  },
  qml: {
    timing: "15 minutes. Open the course the handbook names. Do not paste a notebook into the repo.",
    notes: [
      "Say the 10 minutes are Open Plan QPU time per rolling 28 days. Do not call them classroom minutes.",
      "Do not launch a hardware job from this page. One person per team owns hardware jobs after the circuit is final.",
    ],
  },
  hetionet: {
    timing: "10 minutes. Optional.",
    notes: ["Do not train the model.", "The README figures were rechecked on 2026-09-25 and still match the 2026-09-23 table."],
  },
};
