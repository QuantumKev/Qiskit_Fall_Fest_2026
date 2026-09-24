# Vocabulary

Plain definition, technical definition, and one analogy. The analogy does not replace the quantum word. The live glossary in the app is the same list.

## Classical bit

A classical bit is the smallest unit of ordinary computer information. After you look at it, it is either 0 or 1.

A bit is a binary variable with a definite value in {0, 1}. Classical circuits transform bits with logic gates such as AND, OR, and NOT.

**Home Depot:** A light switch that is either off or on when you look at it.

## Qubit

*KYOO-bit*

A qubit is the basic unit of quantum information. Before measurement it is described by a quantum state, not by a single stored 0 or 1.

A qubit’s pure state is a normalized vector in a two-dimensional complex vector space, spanned by |0⟩ and |1⟩.

**Music:** A note that has not been recorded yet. The recording is one definite sample.

## State

The state is the complete description of what we know about the qubits before we measure them.

For an isolated pure state of n qubits, the state is a normalized vector with 2ⁿ amplitudes, one for each computational basis string.

**Cooking:** The bowl after you have mixed the ingredients and before you plate a serving.

## Statevector

*STATE-vek-ter*

A statevector is the list of amplitudes that describes a quantum state.

In the computational basis, an n-qubit statevector is a column of 2ⁿ complex numbers whose squared magnitudes sum to 1.

**Music:** A chord chart that lists every note, how loud it is, and its timing.

## Basis state

*BAY-sis*

A basis state is one of the definite labels we use to write a state, such as |0⟩, |1⟩, |00⟩, or |11⟩.

The computational basis is the orthonormal set of states labeled by classical bit strings.

**Sports:** The scoreboard categories. A final score lands in one category.

## Amplitude

An amplitude is the complex number in front of a basis state. It is not the probability itself.

If the state is Σ αₓ |x⟩, the probability of reading x is |αₓ|².

**Music:** The volume and timing of one note in a chord.

## Probability

A probability is the chance of a particular measurement result. All the chances add up to 1.

For a computational-basis measurement, P(x) = |αₓ|².

**Sports:** A shooting percentage. One shot can miss. Many shots show the percentage.

## Phase

*fayz*

Phase is the part of an amplitude that changes how states combine, even when the probabilities look the same.

A complex amplitude can be written as r·e^{iφ}. The angle φ is the phase.

**Music:** Two speakers playing the same note. A small delay can make the room louder or quieter.

## Superposition

*SOO-per-puh-ZISH-un*

A superposition is a state that is a combination of basis states, with amplitudes, before measurement.

A state is a superposition when more than one computational-basis amplitude is nonzero. Measurement returns one basis state.

**Cooking:** A sauce that has been seasoned but not plated. Plating gives you one serving.

## Entanglement

*en-TANG-gull-ment*

Entanglement is a correlation between qubits that cannot be written as each qubit having its own separate state.

A multi-qubit pure state is entangled when it cannot be factored into a tensor product of single-qubit states. The Bell state (|00⟩ + |11⟩)/√2 is entangled.

**Sports:** Two teammates whose results were prepared together. One player’s card does not tell the whole play.

## Quantum gate

A quantum gate is an operation that changes the state of one or more qubits.

A gate is a unitary operator on the state space. It is reversible, unlike a measurement.

**Cooking:** A step that changes the bowl. Serving is measurement.

## Hadamard gate

*HAD-uh-mard*

The Hadamard gate, written H, takes |0⟩ into an equal superposition of |0⟩ and |1⟩.

H|0⟩ = (|0⟩ + |1⟩)/√2 and H|1⟩ = (|0⟩ − |1⟩)/√2.

**Music:** Splitting one tone into two equal speakers.

## X gate

The X gate flips |0⟩ and |1⟩ when the qubit is in a basis state.

X|0⟩ = |1⟩ and X|1⟩ = |0⟩. On a superposition it exchanges the amplitudes.

**Home Depot:** A switch that flips a definite setting. It does not create the equal superposition H creates.

## CNOT or CX gate

*SEE-not, or controlled-X*

CNOT, also called CX, flips the target qubit when the control qubit is |1⟩.

In Qiskit’s little-endian bitstrings, read the rightmost bit as qubit 0.

**Home Depot:** The second fixture changes only if the first fixture is on.

## Control qubit

The control qubit is the qubit that decides whether a controlled gate acts.

In CX, the control is not flipped by an ideal CX.

**Sports:** The player who calls the play.

## Target qubit

The target qubit is the qubit a controlled gate may change.

For CX, X acts on the target when the control is |1⟩.

**Sports:** The teammate who runs the route when the play is called.

## Quantum circuit

A quantum circuit is a sequence of gates, and usually measurements, in time order.

A circuit specifies operations on quantum registers and, when measurements are present, maps results into classical bits.

**Cooking:** A recipe card read from left to right.

## Quantum register

A quantum register is the group of qubits a circuit uses.

QuantumCircuit(2) creates a quantum register of two qubits, indexed 0 and 1.

**Home Depot:** Two labeled bins on the workbench. Bin 0 is the first bin.

## Classical register

A classical register is the group of ordinary bits that store measurement results.

measure_all() adds a classical bit for each qubit. The sampler result uses the name meas.

**Cooking:** The ticket printed when a dish leaves the pass.

## Measurement

Measurement asks for a classical result. You get one basis outcome, not the full list of amplitudes.

A computational-basis measurement samples a bit string x with probability |αₓ|².

**Cooking:** Plating one serving.

## Shot

A shot is one run of the circuit that ends in one measurement result.

The shots argument tells a sampler how many times to sample.

**Sports:** One free throw.

## Counts

Counts are how many shots produced each bitstring.

A counts dictionary maps bitstrings to integers. The values sum to the number of shots.

**Home Depot:** A tally sheet at the register.

## Histogram

A histogram is a bar chart of counts or probabilities for each measured bitstring.

The Bell lab’s ideal histogram is mostly two bars, 00 and 11. That chart is not a complete proof of entanglement.

**Sports:** A bar for each possible scoreline after many plays.

## Simulator

A simulator is an ordinary computer calculating what an ideal, or sometimes a noisy, quantum circuit would do.

A statevector simulator stores the 2ⁿ amplitudes and samples them. It is not a QPU.

**Cooking:** A practice kitchen with no burnt pans. It is not Saturday service.

## Quantum processing unit or QPU

*Q-P-U*

A QPU is the quantum hardware that runs circuits on real qubits.

Results include noise from the device and the environment.

**Home Depot:** The real job site, not the drawing on the counter.

## Noise

Noise is unwanted disturbance that makes hardware results differ from the ideal state.

Decoherence, gate errors, readout errors, and crosstalk can make unexpected bitstrings appear.

**Music:** Hum in a recording.

## Error

An error is a specific failure: a gate that did not do exactly what the circuit asked, or a measurement that was read wrong.

Finite shots also fluctuate in an ideal simulation. 500 and 524 from 1024 shots can be a correct circuit.

**Sports:** A dropped pass on a play that was called correctly.

## Transpilation

*trans-pih-LAY-shun*

Transpilation rewrites your circuit so a particular backend can run it.

The transpiler maps abstract gates onto a backend’s basis gates and coupling map.

**Home Depot:** Turning a design sketch into a cut list for the tools in this store.

## Backend

A backend is the simulator or QPU you ask to run a circuit.

A backend is a named execution target, not the same thing as your IBM Cloud region.

**Cooking:** Which kitchen you send the ticket to.

## Qiskit

*KIZ-kit*

Qiskit is IBM’s open-source toolkit for writing and running quantum circuits in Python.

This workshop pins the Qiskit 2.3 line and uses QuantumCircuit, Statevector, and StatevectorSampler.

**Home Depot:** The tool brand for the same project you laid out in Composer.

## IBM Quantum Composer

Composer is the visual circuit editor in the IBM Quantum Platform.

Time moves left to right. Each wire is a qubit. Blocks are gates.

**Music:** A piano roll.

## Quantum kernel

A quantum kernel is a way of comparing two data points by using a quantum circuit.

A fidelity quantum kernel estimates overlaps of states prepared by a feature map. QSVC uses such a kernel.

**Music:** Judging how close two songs are after the same arrangement.

## Feature map

A feature map is the circuit pattern that loads classical numbers into a quantum state.

The Hetionet repository’s best reported quantum path uses a Pauli feature map with two repetitions on 16 features.

**Cooking:** How a written grocery order becomes ingredients in the pan.

## Benchmark

A benchmark is a fair test you can repeat, used to compare methods.

In the Hetionet project, models are compared with PR-AUC.

**Sports:** Everyone runs the same course.

## Baseline

A baseline is a strong, simpler method you compare against before claiming a new method helped.

The Hetionet README reports optimized RandomForest and ExtraTrees beside QSVC and stacking.

**Sports:** The current team record.

## Hybrid quantum-classical workflow

A hybrid workflow uses ordinary computers and quantum circuits in one project, each where it fits.

Hetionet embeds a knowledge graph classically, trains classical models, evaluates a quantum model, and stacks them.

**Home Depot:** A renovation that uses hand tools and one specialized cutter.

## Quantum advantage

Quantum advantage would mean a quantum method beats the best practical classical method on a useful task by a margin that matters.

This workshop does not attempt it, and the Hetionet results are not presented as advantage.

**Sports:** Winning a championship, not a scrimmage against a partial roster.

## Quantum readiness

Quantum readiness is knowing why you are exploring quantum computing, who must be involved, what you will learn, and how you will judge progress.

The discussion covers strategy, technology, talent, risk, ecosystems, use-case selection, and workforce pathways. The leadership theme is attributed to Robert Loredo’s Quantum Readiness for Leaders and interpreted for Fall Fest by Quantum Global Group.

**Home Depot:** Having the plan, the permits, the crew, and a way to inspect the work.
