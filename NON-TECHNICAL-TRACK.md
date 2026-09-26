# The Domain Track

### Or: why you should come to a quantum hackathon even though you are not a quantum physicist

**Qiskit Fall Fest South Florida 2026**

---

## Read this first

You clicked into this document because someone invited you to a quantum computing hackathon and your honest reaction was some version of *"I might be the least qualified person in that room."*

You wouldn't be! Instead, you'd be the person who knows what the problem is and how to map it from concept to application.

Here is the thing nobody tells you about quantum hackathons: **the hard part is not the quantum.** The algorithms are in textbooks. The code is on GitHub. IBM will hand you a real quantum computer for free from a browser tab. What's genuinely scarce is the thing that separates a project judges remember from one they forget by lunch. The value is having somebody who can say, with authority, *"that's not how procurement actually works,"* or *"our routing constraints aren't the ones in that toy example, here are the real ones,"* or *"even if this worked perfectly, the regulator would never approve it, and here's why."*

That knowledge is not acquirable in a weekend.

---

## 1. The actual argument

### 1.1 Quantum computing's bottleneck is not physicists

There is a shortage of people who can implement a variational quantum eigensolver given the number of jobs available today and universities are now starting to produce them continuously. What the field is visibly short of is people who can connect the machinery to a problem that a real organization would pay to solve.

You can watch this play out in the literature. A large fraction of published quantum "applications" work is physicists picking a problem that is mathematically convenient, solving it, and describing it in language that anyone who works in that industry would find slightly off. Portfolio optimization papers that ignore transaction costs and regulatory capital. Logistics papers that optimize a route without modelling the driver-hours rules that actually bind. Drug discovery papers that compute a molecular property that isn't the one medicinal chemists care about.

None of this is stupidity. It's a knowledge gap that runs in exactly one direction: **it's much easier for a domain expert to learn what a quantum computer can do than for a quantum expert to learn what your industry needs.**

That asymmetry is the whole reason this track exists.

### 1.2 What "understanding quantum well enough" actually requires

You need to hold roughly three ideas. Not the mathematics of them, but the shape of each one.

**One.** A quantum computer is not a faster computer. It is a *differently-shaped* computer. There is a small, specific set of problem structures where it may eventually do something classical machines find hard, and a very large set where it will never beat your laptop. Knowing which is which is 80% of being useful here, and it's a taxonomy question, not a physics question.

**Two.** Today's machines are noisy and small. Real quantum computers make errors constantly. We manage this with error *mitigation*, statistical correction after the fact. Full error *correction*, the thing that makes arbitrarily long computations reliable, is a future technology that's closer than most originally thought. This means: today's demonstrations are small, and the honest framing of almost any hackathon project is "here is the pattern, at toy scale, and here is what would have to change for it to matter in the not too distant future."

**Three.** Nearly everything practical is hybrid. A classical computer does most of the work and hands one specific sub-problem to the quantum processor. The interesting engineering question is almost always *where's the seam*. In other words, which piece of a workflow is worth handing over. That is a systems and process question. You are probably better at it than the physicists are.

That's it. That's the technical foundation. IBM's [Quantum business foundations](https://quantum.cloud.ibm.com/learning/en/courses/quantum-business-foundations) course covers all three properly in about three hours, and hands you a Credly badge at the end. I can't express how much I **HIGHLY RECOMMEND** starting your quantum journey here. You'll not find a more complete course for business foundations.

### 1.3 The three problem shapes

If you remember nothing else from this document, remember this taxonomy. On day one, you will be trying to match something from your world to one of these three shapes. Helpful hint: be sure you do it way before your competitor does. 

---

**Shape 1, Optimization: "find the best arrangement out of an astronomical number"**

You have many discrete choices, they interact with each other, and the number of possible combinations explodes. You're currently using heuristics that give a decent answer, not the best one, and you've quietly accepted that.

*Sounds like:* scheduling, routing, portfolio construction, network design, crew rostering, warehouse slotting, load balancing, bin packing, facility location, supply chain configuration.

*The tell:* somebody in your organization runs a solver overnight and it doesn't always finish.

*Watch out for:* this is the most oversold quantum application category by a distance. Classical optimization is extremely good and has decades of engineering behind it. A project here is credible only if it is specific about what the classical baseline is and honest that it's probably still winning.

---

**Shape 2, Simulation: "model a quantum system with a quantum system"**

Molecules and materials *are* quantum systems. Simulating them classically means approximating something that is natively quantum, and the approximations get expensive fast. This is the application where the theoretical case is strongest, because the match between problem and machine isn't a metaphor.

*Sounds like:* drug candidate screening, catalyst design, battery chemistry, novel materials, photovoltaics, nitrogen fixation, protein-ligand binding, semiconductor design.

*The tell:* your R&D people say "we'd have to synthesize it and find out" or "DFT isn't accurate enough for that system."

*Watch out for:* the molecules within reach of current hardware are small enough to be chemically uninteresting. Framing matters enormously here.

---

**Shape 3, Learning and data: "find structure classical methods can't see"**

Quantum circuits can compute similarity measures between data points in ways that are hard to reproduce classically. Whether that ever translates to better predictions on real data is genuinely open.

*Sounds like:* fraud detection, anomaly detection, classification on small high-dimensional datasets, generative modelling, risk scoring.

*The tell:* your data is scarce and expensive rather than abundant, and the signal is subtle.

*Watch out for:* the most contested of the three. Excellent territory for an honest, skeptical project; poor territory for a bold claim.

---

**If your problem doesn't fit any of these, say so.** "We investigated whether X in our industry is a quantum-shaped problem and concluded it isn't, and here's the analysis" is a genuinely good hackathon submission. It is also a rarer and braver one than yet another QAOA-on-max-cut demo.

---

## 2. Who specifically should come

**Business and operations leaders.** You know where the money and the bottlenecks are. You also know which "efficiency gains" are real and which are the kind that evaporate on contact with the org chart. Quantum will eventually arrive as a procurement decision on someone's desk. Understanding it before then is not a hobby.

**Policymakers and public sector.** Export controls, standards, research funding, post-quantum cryptography migration timelines, national strategy. All of these decisions are being made now, largely by people briefed by vendors. A weekend at a hackathon gives you a calibrated sense of the gap between demo and deployment that no briefing will.

**Investors and analysts.** You are being pitched quantum companies. Some of those pitches are excellent and some are technically incoherent, and the difference is not visible from a deck. Spend two days watching people try to make this technology do useful things and your due diligence questions change permanently.

**Startup founders.** Whether or not you ever touch a qubit, the pattern-matching transfers: you'll leave with a sharper sense of which technical claims to discount. And if you *are* building here, a weekend with actual hardware is worth a month of reading.

**Domain specialists of every kind.** Chemists, logisticians, clinicians, traders, agronomists, actuaries, grid engineers, epidemiologists, lawyers, materials scientists. Any project touching your field is better with you in the room and worse without you.

**Designers, writers, and communicators.** Quantum computing has a severe explanation problem. Every team will have to make an audience understand what they did in five minutes. Almost none of them will be good at it. You will be.

**Students in any discipline.** Including, especially, the ones outside STEM. Some of the sharpest use-case work at these events comes from people whose first question is "wait, why would anyone want that?"

**Absolute beginners with curiosity and no credentials.** This is a real category and you are welcome. Bring the willingness to ask the obvious question. Rooms full of experts are usually one obvious question away from a much better project.

---

## 3. What you'll actually do

Pick a role on day one. Own it. These are real jobs, not participation trophies.

### 🎯 Domain Lead
You are the source of truth about the problem. When the builders make a modelling assumption, you say whether it's acceptable. When they simplify, you say what breaks. You write `USE-CASE.md`.

*Deliverable:* a problem statement precise enough that a stranger in your industry would nod at it.

### 🔍 Problem Framer
You do the translation. You sit between "we want to reduce empty-mile freight" and "this is a constrained optimization over binary assignment variables." You don't have to write the QUBO, you have to get the problem into a state where a builder can.

*Deliverable:* a written decomposition of the problem, variables, constraints, objective, and which constraints are hard versus negotiable.

### 📊 Impact and Feasibility Analyst
You do the arithmetic that makes the project credible. What's the classical baseline? What's a 1% improvement worth in currency? What's the smallest instance that would still be commercially meaningful, and how far is it from what ran on hardware today? This is spreadsheet work and it is enormously valuable.

*Deliverable:* a one-page quantitative case, with the resource gap stated plainly.

### 🎤 Storyteller / Pitch Lead
You own the five minutes that decide everything. You build the narrative, the visuals, and the demo flow. You also protect the team from itself: you're the one who says "we can't claim that."

*Deliverable:* the deck and the demo, rehearsed. Not written at 4am.

### ⚖️ Policy and Risk Analyst
Regulatory constraints, data governance, procurement realities, security implications, ethical exposure. Especially critical in finance, health, energy, and anything public-sector. A project that ignores these isn't rigorous, it's just early.

*Deliverable:* `LIMITATIONS.md`, plus the regulatory section of the use case.

### 💰 Investor-Lens Reviewer
You interrogate the team the way a sceptical partner would. What's the moat? Who buys this and out of whose budget? What has to be true about hardware progress for the timeline to hold? Teams find this uncomfortable and it makes their work substantially better.

*Deliverable:* a written challenge memo the team has to answer.

---

## 4. Industry prompts

Not a menu to pick from, a demonstration of what "quantum-shaped" looks like in different fields, to help you find the equivalent in yours. Your version, with your specifics, will be far better than any of these.

**Financial services**: portfolio rebalancing under transaction costs and regulatory capital constraints | derivative pricing with path-dependent payoffs | collateral optimization across netting sets | fraud detection on sparse labelled data | credit risk with correlated defaults

**Logistics and supply chain**: multi-depot vehicle routing with driver-hours regulations | container loading and stowage | warehouse slotting under seasonal demand | resilient network design under disruption scenarios | last-mile consolidation

**Energy and utilities**: unit commitment across a mixed generation fleet | grid stability classification | optimal placement of storage on a distribution network | battery electrolyte chemistry | demand response scheduling across heterogeneous loads

**Pharma and healthcare**: protein-ligand binding affinity | reaction pathway analysis for synthesis planning | clinical trial site selection and patient allocation | operating theatre and staff scheduling | molecular property prediction with scarce data

**Manufacturing and materials**: catalyst discovery | production line sequencing with changeover costs | alloy and composite property prediction | predictive maintenance scheduling under spare-parts constraints | high-temperature superconductor screening

**Telecommunications**: spectrum allocation | network topology under redundancy requirements | antenna placement and beamforming | traffic routing under QoS constraints | post-quantum cryptography migration planning

**Agriculture and food**: crop rotation planning under soil, water, and market constraints | cold chain routing | fertilizer chemistry (the Haber-Bosch process is roughly 1–2% of global energy use: nitrogen fixation catalysis is a genuinely serious target) | yield prediction from sparse sensor data

**Public sector and policy**: emergency service positioning | public transport network design | vaccine and resource distribution under equity constraints | infrastructure investment sequencing | post-quantum cryptography readiness across government systems

**Insurance**: catastrophe risk modelling with correlated events | reinsurance portfolio structuring | claims triage | pricing in thin-data segments

**Aerospace and defence**: trajectory optimization | satellite constellation scheduling and tasking | structural and materials design | sensor fusion under uncertainty

---

## 5. The Use-Case Canvas

Fill this in before you arrive. One page. Bring it to team formation and read it out, this is how teams find each other.

Copy this block into `submissions/team-<name>/USE-CASE.md` when you form a team.

```markdown
# Use-Case Canvas

## 1. The problem
One paragraph. Assume the reader knows nothing about your industry.
No jargon. If your grandmother wouldn't follow it, rewrite it.

## 2. Who has this problem
Be specific. Not "banks": "mid-size asset managers rebalancing
multi-asset portfolios monthly under UCITS constraints."

## 3. How it's solved today
What tool, what algorithm, how long does it take, how good is the answer?
This is your baseline. Without it you have no story.
If you don't know, that's your first research task.

## 4. What "better" is worth
Put a number on it. Currency, hours, lives, tonnes of CO2, error rate,
any unit, but a number. "It would be nice" is not an answer.

## 5. The quantum shape
Which of the three shapes is it? (Optimization / Simulation / Learning)
Why? What's the combinatorial explosion, the quantum system, or the
hidden structure?

## 6. The honest problem-size gap
How big is a real instance? How big can we run this weekend?
State both numbers. The gap is usually several orders of magnitude
and saying so out loud is a strength, not a weakness.

## 7. What would have to be true
For this to be deployable in five years, what has to happen:
in hardware, in algorithms, in your industry, in regulation?

## 8. What we'll actually build this weekend
A tiny, concrete, achievable thing. Not the vision. The demo.
"We map a 12-node instance of our routing problem to a QUBO,
run it on an IBM QPU, and compare to a classical solver."

## 9. Why anyone should care
Three sentences. This becomes your opening slide.
```

---

## 6. Your pre-work

Three hours, no installation, all in a browser.

**Hour 1: Get an account and play.**
Follow §4 of the [Participant Handbook](PARTICIPANT_HANDBOOK.md) to create your free IBM Quantum account. Then open the [IBM Quantum Composer](https://quantum.cloud.ibm.com/composer) and just drag gates around for twenty minutes. Watch the visualizations respond. You will not understand the mathematics and that is completely fine, you're building the physical intuition that makes every conversation afterwards easier.

**Hours 2–3: Do the business course.**
[Quantum business foundations](https://quantum.cloud.ibm.com/learning/en/courses/quantum-business-foundations). Written for exactly your position. There's an exam and a Credly badge at the end, put it on LinkedIn, it's a legitimate IBM credential.

*Optional extra 4 hours if you're an executive or a policymaker:* [Designing and leading quantum projects](https://quantum.cloud.ibm.com/learning/en/courses/designing-and-leading-quantum-projects), which is about governing this class of initiative rather than doing it.

**Any spare time: read two notebooks.**
Not run. *Read.* Pick two from the "Domain and industry" section of [`NOTEBOOK-CATALOG.md`](NOTEBOOK-CATALOG.md), ideally one near your field. That document explains how to read a notebook productively when you can't read the code, which is a skill and takes about ten minutes to acquire.

**Before you arrive: fill in the Canvas.** Even badly. Even with three of the nine boxes empty. Arriving with a half-formed real problem beats arriving with nothing, by a lot.

---

## 7. The honest caveats

You should know these so you don't accidentally pitch nonsense, and so you can spot it when someone else does.

**Quantum computers are not faster at most things.** They're not faster at your database, your spreadsheet, your web app, your neural network training, or almost anything you currently do. Anyone who tells you "quantum will make everything faster" either doesn't know or is selling.

**There is no commercially deployed quantum advantage today.** Not in finance, not in pharma, not anywhere. There are promising demonstrations and there is serious research. A project claiming otherwise will be marked down, and rightly.

**"Quantum will break encryption" is real but widely misstated.** It requires a fault-tolerant machine that does not yet exist. The genuine, urgent, present-day issue is *harvest-now-decrypt-later*: adversaries storing encrypted traffic today to decrypt in the future, which makes post-quantum cryptography migration a live planning problem right now. That's a legitimately good policy project. "Quantum computers will break Bitcoin next year" is not.

**Timelines from vendors are optimistic.** Including from every vendor. Calibrate accordingly, and notice that the ability to calibrate is itself something you'll acquire this weekend.

**Small demonstrations are legitimate; overclaimed ones aren't.** Running a 10-qubit version of a problem that would need 10,000 qubits to matter is fine and normal and is what everyone does. Saying so is what separates good work from marketing.

Holding all of that and still finding the field interesting is the correct position. The technology is real, the trajectory is real, the timeline is uncertain, and the people who'll benefit most are the ones who understood the shape of it early, which is, again, why you should come.

---

## 8. Frequently asked, honestly answered

**"Will I slow my team down?"**
Only if you stay silent. The single most useful thing you'll do is ask the question you think is too basic. In a room of specialists, the basic question is usually the one nobody has checked.

**"What if I don't understand the presentations?"**
Nobody understands all of them. Not the physicists either, the field is wide and everyone is deep in a narrow strip of it. Ask.

**"Do I need a team beforehand?"**
No. There's a team formation session at kickoff, and reading out your Use-Case Canvas is genuinely the best way to attract collaborators. Builders are actively looking for someone with a real problem.

**"Is this just networking?"**
No, but it is also that. You'll spend two days with people who will be running quantum programs at serious organizations in five years. That's not nothing.

**"I'm not a student. Can I come?"**
Whether a campus day is limited to enrolled students is **TBA**. Ask kevin@quantumglobalgroup.io before you travel. Capacity is up to 50 participants per campus.

**"What if my industry has no quantum use case?"**
Then finding that out rigorously and writing it up is your project, and it is a better project than most. The field needs negative results far more than it needs another optimistic demo.

**"I still feel underqualified."**
Here's IBM's own framing of their introductory course: *you don't need a physics degree or years of programming experience, if you can follow along with a notebook and click "Run," you're ready.* That's the actual bar. You clear it.

---

**Ready?** Go to [`PARTICIPANT_HANDBOOK.md`](PARTICIPANT_HANDBOOK.md) §4, make your own account, and come say hello in <https://discord.gg/vz6uTbtJzR> or by email at kevin@quantumglobalgroup.io.

We'd rather have your industry knowledge and teach you the quantum than the other way around.
