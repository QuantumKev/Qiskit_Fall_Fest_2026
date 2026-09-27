**Florida Qiskit Fallfest Hackathon.** Part of Qiskit Fall Fest 2026. Kickoff and challenge release: October 1, 2026. Local events: October 17–18, 2026. First-place local winner deadline: October 31, 2026. Statewide announcement: November 13, 2026.

---

## 0. The five-minute version

You have **one job before October 1, 2026**: arrive with your own IBM Quantum account and a rough idea of a problem you care about. Nothing else.

| | Builder/Developer Expert | Domain/Industry Expert |
|---|---|---|
| **Who** | Writes code during the event | Frames problems, judges impact, tells the story |
| **Pre-work time** | 3–5 hours | 2–3 hours |
| **Must do** | §2, §3, §4, §5, §6, §7 | §2, §3, §4 (account only), §6, §7 |
| **Can skip** | — | Installing anything. Seriously. |

**Everyone, regardless of track:**

- [ ] Official registration is **Coming soon**. Until that link is published, use the attendance form on this site. It does not collect passwords, API keys, or CRNs.
- [ ] Join the chat → <https://discord.gg/vz6uTbtJzR>
- [ ] Create your own IBM Quantum Platform account → §4
- [ ] Create a GitHub account → §6
- [ ] Read §2 (what we're actually building) and skim the Domain/Industry Expert guide, [`NON-TECHNICAL-TRACK.md`](NON-TECHNICAL-TRACK.md)

If you only have 30 minutes, do the four checkboxes above and stop. Everything else can happen on day one.

---

## 1. What Qiskit Fall Fest is

Qiskit Fall Fest is a worldwide, student-led series of quantum computing events run in partnership with IBM Quantum. Hosts on campuses and in communities around the world run their own hackathons, workshops, and challenges under one banner during the autumn.

The **2026 theme is "A decade of quantum on the cloud."** The theme recognizes ten years since IBM placed its first quantum processor on the cloud. That shift is why a student can open a circuit from a browser. Keep it in mind when you decide how ambitious to be.

**Florida Qiskit Fallfest Hackathon** is the Florida event inside that global program. Kevin Robinson, Robert Loredo, Grant Kurz, and Ayse Torres are statewide co-leads. None of them is the single host.

Campuses: Miami Dade College, Nova Southeastern University, Florida Atlantic University, Embry-Riddle Aeronautical University, Florida Institute of Technology, and Florida Gulf Coast University. Capacity is up to 50 participants per campus.

The home page host directory is the card list: university, verified lead, confirmed venue, registration link when one is public, and a contact. Unconfirmed rooms say **Details coming soon**.

- Miami Dade College: Kevin Robinson. Wolfson Campus, AI Center, Building 2, Room 2104, 300 N.E. Second Ave., Miami, FL 33132. kevin@quantumglobalgroup.io. Registration: <https://deepstation.ai/hackathons/dj31ld8d96fuj1yi97ph4c4c?tab=teams>
- Nova Southeastern University: Grant Kurz. Alan B. Levan Center, 3100 Ray Ferrero Jr. Blvd., 5th Floor, Davie, FL 33314. Contact and registration: details coming soon.
- Florida Atlantic University: Ayse Torres and Kateryna Tsekhmayster. Venue: details coming soon. Kateryna Tsekhmayster, ktsekhmayste2022@fau.edu. Registration: <https://deepstation.ai/hackathons/mtrxfkxet400k68imrz4y5wn>
- Embry-Riddle Aeronautical University: Laxima Niure Kandel. niurekal@erau.edu. Venue and registration: details coming soon.
- Florida Institute of Technology: Dr. Robert Usselman. russelman@fit.edu. Venue and registration: details coming soon.
- Florida Gulf Coast University: Dr. Chengyi Qu. cqu@fgcu.edu. Registration: <https://deepstation.ai/hackathons/e7d3qam34w4084rragu1fv3i>. Venue: details coming soon.

Official IBM announcement: <https://www.ibm.com/quantum/blog/qiskit-fall-fest-2026>

Qiskit-approved website: <https://entangledsolutionsgroup.com/Qiskit-Fall-Fest-2026/>

---

## 2. What you are actually going to build

You are not expected to prove that quantum computing is better than classical computing. Your goal is to define a meaningful problem, explore an appropriate quantum approach, compare it with a classical method when possible, document what happened, and explain what you learned—including the limitations. The benchmarking page and the glossary name the stronger claim teams are not asked to make.

A strong Qiskit Fall Fest project is one of these:

1. **A mapped problem.** Take a real problem from a real industry, show precisely how it becomes something a quantum computer could work on (a QUBO, a Hamiltonian, a kernel), run it small on hardware or simulator, and be honest about what would need to change to make it matter. This is where having someone from industry or a subject matter expert in the domain is helpful. 
2. **A benchmark or comparison.** Run the same problem classically and quantumly at small scale. Show where the crossover *might* be and what's blocking it.
3. **A tool.** Something that makes quantum work easier: a visualizer, a translator from a domain format into a circuit, a teaching aid.
4. **An analysis.** A rigorous, sourced assessment of where quantum does or doesn't fit in a specific sector, with the technical claims actually checked against what current hardware can do.

Notice that **projects 1 and 4 are mostly non-code work**, and projects 2 and 3 are much better when someone on the team knows what the output is supposed to mean. This is why we run a domain track. See §3.

**Judging criteria:** The shared rubric is **Coming soon**. The dimensions named for local review and the statewide announcement are technical execution, problem framing and relevance, honesty about limitations, and presentation. Weights are not published. A project that claims a quantum method beat classical computing, without the comparison written down, is outside this event.

---

## 3. Two pathways, one team

Every team should have both a Domain/Industry Expert and a Builder/Developer Expert. Coding is optional for the Domain/Industry Expert. The interesting projects come from the two roles working on one problem.

| | Domain/Industry Expert | Builder/Developer Expert | Shared |
|---|---|---|---|
| Focus | The problem and whether a quantum approach fits | Circuits, code, and the run | One project and one write-up |
| Coding | Optional | Python and Qiskit | Either person can pair |
| Comparison | Name the classical method | Measure the baseline and the quantum run | Do not promise the quantum result will win |

**Builder/Developer Expert**: you write Qiskit, run circuits, and keep the result next to the baseline. You need Python. You do *not* need a physics background.

**Domain/Industry Expert**: you bring a field that is not quantum computing: finance, logistics, energy, health, law, policy, agriculture, manufacturing, operations, or another practice you know. Your job is to make sure the team is solving a problem that exists. You do not have to install Python. The long-form source is [`NON-TECHNICAL-TRACK.md`](NON-TECHNICAL-TRACK.md), titled Domain/Industry Expert.

**If you are hesitating because you do not write code, read that guide before you decide not to come.**

---

## 4. Step one: IBM Quantum Platform account

**Everyone does this. Both tracks. It takes about ten minutes and it's free.**

Your IBM Quantum account is what gives you (a) access to real quantum computers, (b) the full IBM Quantum Learning course library with in-browser code, and (c) the Composer, a drag-and-drop circuit builder that requires no coding at all.

### 4.1 Create the account

1. Go to <https://quantum.cloud.ibm.com/registration>
2. Sign up with an IBMid or a Google account. If you don't have an IBMid, the flow creates one for you.
3. You'll land on the IBM Quantum Platform dashboard.

> ⚠️ **Heads up on stale instructions.** IBM Quantum Platform moved to IBM Cloud, and the old `docs.quantum.ibm.com` platform was retired on 1 July 2025. If you find a blog post, a YouTube video, or a Fall Fest guide from a previous year that tells you to go to `quantum-computing.ibm.com`, or shows code with `channel="ibm_quantum"`, **it is out of date and will not work.** Use `quantum.cloud.ibm.com` and this handbook.

### 4.2 Create an instance

An *instance* is your allocation of quantum compute. Your account needs at least one.

1. Go to <https://quantum.cloud.ibm.com/instances>
2. Create an instance on the **Open Plan**.
3. Note that Open Plan instances can only be created in the **us-east** region. If your account switcher is set to `eu-de`, switch it.

### 4.3 Get your API key (Builder/Developer Expert only. The Domain/Industry Expert can skip to §6)

1. From the dashboard at <https://quantum.cloud.ibm.com/>, create your API key.
2. **Copy it immediately to a password manager. It is shown once and never again.** It's a 44-character string.
3. Also copy your instance's **CRN** (Cloud Resource Name) from the Instances page — hover over the CRN and click the copy icon.

> Your API key is a credential. Do not paste it into a notebook you're going to commit to GitHub. Do not paste it in the event chat. §5.4 shows you how to store it properly. If you leak it, revoke it from the dashboard and make a new one.

### 4.4 Understand your quantum time budget

The Open Plan gives you **up to 10 minutes of QPU execution time per rolling 28-day window**, free. Track usage on the dashboard and on the [Workloads page](https://quantum.cloud.ibm.com/workloads). The current limit is on the [max execution time page](https://quantum.cloud.ibm.com/docs/en/guides/max-execution-time). Simulators first.

Ten minutes sounds tiny. It is enormous. QPU time is measured in actual execution, and a typical small circuit run costs a couple of seconds. You can run hundreds of jobs. Teams almost never run out, but teams that leave a badly-parameterized loop running unattended absolutely do, so:

- **Develop against a simulator, submit to hardware only when the circuit is final.** (§5.5)
- Check the queue before you submit at 3am on deadline day.
- One person per team should own hardware submissions.

Full plan comparison: <https://quantum.cloud.ibm.com/docs/en/guides/plans-overview>

## 5. Step two: get Qiskit running

> **Domain/Industry Expert: skip this entire section.** Go to §6. You will not need Python. If you get curious later, come back. §5.1 needs no installation.

We recommend **starting in the cloud** and only installing locally if you hit a reason to. Every hackathon loses hours to someone's broken conda environment. Don't be that hour.

### 5.1 Path A (recommended): browser, zero install

Three options, in order of how much we recommend them:

**IBM Quantum Learning (best starting point).** The course lessons at <https://quantum.cloud.ibm.com/learning> contain live code cells you run in the browser with your IBM Quantum account. Nothing to install, nothing to configure, and it's already wired to your account. Start with [Use a quantum computer today](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today).

**IBM Quantum Composer (zero code at all).** <https://quantum.cloud.ibm.com/composer> — drag gates onto a circuit, watch the state visualizations update live, run it. This is the single fastest way to build intuition for what a quantum circuit *is*. Recommended for both tracks, honestly.

**Google Colab (for project work).** Free hosted Jupyter. Start any notebook with:

```python
!pip install qiskit qiskit-ibm-runtime matplotlib pylatexenc
```

Colab is the pragmatic choice for hackathon project work if you don't want to manage a local environment. Caveat: Colab sessions time out and lose state, so save to GitHub often, and don't hardcode your API key in a Colab notebook.

### 5.2 Path B: local install

Do this if you want a persistent environment, you're working offline, or you just prefer local tooling.

**Requirements:** Python 3.10 or later. (Qiskit 2.5.x supports 3.10 through 3.14.) 64-bit OS. Qiskit 2.x dropped 32-bit support entirely.

**macOS / Linux:**

```bash
# 1. Make a project folder and a virtual environment
mkdir fallfest && cd fallfest
python3 -m venv .venv
source .venv/bin/activate

# 2. Install everything in ONE pip command
pip install qiskit qiskit-ibm-runtime jupyter matplotlib pylatexenc numpy
```

**Windows (PowerShell):**

```powershell
mkdir fallfest; cd fallfest
python -m venv .venv
.venv\Scripts\Activate.ps1

pip install qiskit qiskit-ibm-runtime jupyter matplotlib pylatexenc numpy
```

Windows users on Git Bash: activate with `source .venv/scripts/activate` instead.

**Why these packages:**

| Package | What it's for |
|---|---|
| `qiskit` | The SDK itself: circuits, operators, transpiler, local simulators |
| `qiskit-ibm-runtime` | Talks to IBM's real quantum computers. Separate package. You need it. |
| `jupyter` | Notebooks |
| `matplotlib` + `pylatexenc` | Circuit diagrams and plots. Without `pylatexenc`, `circuit.draw('mpl')` fails with a confusing error. |

**Rules that will save you pain:**

1. **Always use a virtual environment.** Not optional. A polluted global Python is the #1 cause of hackathon environment failures.
2. **Install everything in a single `pip install` command.** Running pip repeatedly can produce an environment that resolves but is subtly broken.
3. **If you have an old Qiskit 0.x installation anywhere, do not try to upgrade it in place.** Make a fresh venv. Qiskit 1.0 changed the packaging structure and in-place upgrades from 0.x fail in ways that are genuinely hard to debug.

Official install guide: <https://quantum.cloud.ibm.com/docs/en/guides/install-qiskit>

### 5.3 Verify your install

Save this as `check_setup.py` and run it. It uses only the local simulator. No account needed, no QPU time consumed.

```python
"""Fall Fest environment check. Run: python check_setup.py"""
import sys

print(f"Python: {sys.version.split()[0]}")

import qiskit
print(f"Qiskit: {qiskit.__version__}")

try:
    import qiskit_ibm_runtime
    print(f"Runtime client: {qiskit_ibm_runtime.__version__}")
except ImportError:
    print("Runtime client: NOT INSTALLED  <-- run: pip install qiskit-ibm-runtime")

# Build a Bell state: two qubits, maximally entangled.
from qiskit import QuantumCircuit
from qiskit.primitives import StatevectorSampler

qc = QuantumCircuit(2)
qc.h(0)          # put qubit 0 into superposition
qc.cx(0, 1)      # entangle qubit 1 with qubit 0
qc.measure_all()

result = StatevectorSampler().run([qc], shots=1000).result()
counts = result[0].data.meas.get_counts()

print(f"Bell state counts: {counts}")
print("\nExpect roughly 500 '00' and 500 '11', and essentially no '01' or '10'.")
print("Those two outcomes being correlated and the other two being absent")
print("matches this Bell preparation. A histogram alone is not a complete proof of entanglement.")
```

If that prints something like `{'00': 496, '11': 504}`, you are done. Go to §6.

### 5.4 Connect to real hardware (Builder/Developer Expert)

Once, in a trusted environment (your own laptop, **not** a shared lab machine, **not** Colab):

```python
from qiskit_ibm_runtime import QiskitRuntimeService

QiskitRuntimeService.save_account(
    token="<your-44-character-API-key>",
    instance="<your-instance-CRN>",
    region="us-east",
    set_as_default=True,
)
```

This writes your credentials to a local config file. After that, every notebook just does:

```python
from qiskit_ibm_runtime import QiskitRuntimeService
service = QiskitRuntimeService()          # loads saved credentials
backend = service.least_busy(operational=True, simulator=False)
print(f"Using: {backend.name}")
```

On a shared or untrusted machine, don't save the account — pass the token explicitly each session, or follow the [untrusted environment guide](https://quantum.cloud.ibm.com/docs/en/guides/cloud-setup-untrusted).

The default channel is `ibm_quantum_platform` and you almost never need to specify it. Full detail: <https://quantum.cloud.ibm.com/docs/en/guides/initialize-account>

### 5.5 The one workflow rule

**Iterate on a simulator. Submit to hardware once.**

The local check in §5.3 uses `StatevectorSampler` on your computer. It does not spend Open Plan time and it does not need an API key. Do not start on a QPU.

```python
from qiskit import QuantumCircuit
from qiskit.primitives import StatevectorSampler

qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0, 1)
qc.measure_all()
counts = StatevectorSampler().run([qc], shots=1000).result()[0].data.meas.get_counts()
```

Do not use `channel="ibm_quantum"`, `IBMQ.load_account()`, `execute()`, or `qiskit.Aer`. Those calls belong to older tutorials.

A hardware run is optional, and only after the circuit is final. It spends the Open Plan window of 10 minutes per 28-day rolling window. Noise on hardware can add counts on 01 and 10. That is not a reason to skip the simulator.

IBM’s hello-world guide shows the same four-step pattern, and then a much larger circuit: <https://quantum.cloud.ibm.com/docs/en/guides/hello-world>. This event does not assign that larger circuit. The Bell lab uses a sampler because it needs counts.

---

## 6. Step three: GitHub

**Everyone does this. Both pathways.** A Domain/Industry Expert will use GitHub to read the challenge briefs, file issues, and contribute written work. Market analysis, use-case documents, and slides live in the repo alongside code.

### 6.1 Create an account

1. Go to <https://github.com/signup>
2. Pick a username you'd be comfortable putting on a résumé. This is a public professional identity. `xX_quantum_slayer_Xx` will haunt you.
3. Verify your email address — GitHub blocks several actions until you do.
4. **Turn on two-factor authentication now**, at <https://github.com/settings/security>. GitHub requires 2FA for many contributors and it will interrupt you at the worst moment if you leave it. Use an authenticator app; save the recovery codes somewhere real.
5. Add a display name and a one-line bio. Judges and recruiters look at these.

**Students:** the [GitHub Student Developer Pack](https://education.github.com/pack) is free with a `.edu` address and includes Copilot and a pile of other tools. Apply now, not during the event, approval takes time.

### 6.2 Join the event repository

1. Create a GitHub account if you do not have one.
2. The separate event organization, if organizers publish one, is **TBA**. Until then, the participant site and the submission template live in <https://github.com/QuantumKev/Qiskit_Fall_Fest_2026>.
3. Star that repository if you want GitHub notifications.
4. Do not send a password or an API key to the organizers. A GitHub username is enough when they ask for one.

### 6.3 Repository layout

```
Qiskit_Fall_Fest_2026/
├── README.md
├── PARTICIPANT_HANDBOOK.md
├── NON-TECHNICAL-TRACK.md
├── NOTEBOOK-CATALOG.md
├── challenges/                ← Coming soon, with the October 1 challenge release
└── submissions/
    ├── _TEMPLATE/             ← copy this
    └── team-<yourname>/       ← your team's folder
```

### 6.4 How to submit

Teams work on a branch, then open a pull request. If you've never done this, come to the day-one GitHub clinic — it takes fifteen minutes to learn and we'd rather teach it than have you fight it at 2am.

```bash
# One-time
git clone https://github.com/QuantumKev/Qiskit_Fall_Fest_2026.git
cd Qiskit_Fall_Fest_2026

# Start your team's work
git checkout -b team-<yourteamname>
cp -r submissions/_TEMPLATE submissions/team-<yourteamname>

# As you work
git add submissions/team-<yourteamname>
git commit -m "Add problem framing and initial circuit"
git push -u origin team-<yourteamname>
```

Then open a Pull Request on GitHub against `main`, titled `[SUBMISSION] Team <name> — <project title>`.

**Prefer clicking to typing?** [GitHub Desktop](https://desktop.github.com) does all of the above with buttons. Or edit files directly in the browser on github.com — for written deliverables that's often the fastest path, and it's a completely legitimate way to contribute.

**Deadline: October 31, 2026** for the first-place local winner packet. Pull requests opened after the deadline published with the challenge are not judged. Open the pull request early and keep pushing to it. Do not save the first push for the last hour.

### 6.5 What goes in your submission folder

| File | Required? | Who typically writes it |
|---|---|---|
| `README.md` | ✅ | Domain + Builder together |
| Notebook(s) or source | ✅ | Builder |
| `USE-CASE.md` — the problem, the industry, why it matters, what it'd take to be real | ✅ | **Domain** |
| `requirements.txt` | ✅ if code | Builder |
| Slides / demo video | ✅ | Domain |
| `LIMITATIONS.md` — what you didn't solve and why | Strongly encouraged | Whole team |

That `LIMITATIONS.md` is not a formality. In a field this hype-saturated, a team that clearly states what its approach cannot do reads as more credible, not less, and experienced judges reward it.

New to git? <https://docs.github.com/en/get-started>

---

## 7. Step four: learn something

Pick a lane, budget the hours, don't try to do all of it.

### If you are the Domain/Industry Expert (2–3 hours)

| Resource | Time | Why |
|---|---|---|
| [**Quantum business foundations**](https://quantum.cloud.ibm.com/learning/en/courses/quantum-business-foundations) | 3h | Built for exactly this audience. Ends in an exam and a Credly digital badge you can put on LinkedIn. **Start here.** |
| [**Designing and leading quantum projects**](https://quantum.cloud.ibm.com/learning/en/courses/designing-and-leading-quantum-projects) | 4h | For anyone who might actually have to sponsor or govern one of these. |
| [IBM Quantum Composer](https://quantum.cloud.ibm.com/composer) | 20 min | Play. Drag gates. No coding. Best intuition-per-minute available. |
| [`NON-TECHNICAL-TRACK.md`](NON-TECHNICAL-TRACK.md) | 30 min | Our own guide — roles, industry prompts, and the use-case canvas you'll fill in on day one. |

### If you are the Builder/Developer Expert (3–5 hours)

| Resource | Time | Why |
|---|---|---|
| [**Use a quantum computer today**](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today) | 5h | The fastest on-ramp. IBM's own framing: *you don't need a physics degree or years of programming experience — if you can follow along with a notebook and click "Run," you're ready.* **Start here.** |
| [Basics of quantum information](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information) | 15h | John Watrous's course. The real foundation. Do the first two lessons before the event; finish it after. |
| [Quantum computing in practice](https://quantum.cloud.ibm.com/learning/en/courses/quantum-computing-in-practice) | 8h | 100+ qubit workloads and what actually works on today's hardware. |
| [Hello world guide](https://quantum.cloud.ibm.com/docs/en/guides/hello-world) | 30 min | Your first circuit on real hardware, end to end. |

### If you're going deep on a specific application

| Course | Time | For |
|---|---|---|
| [Variational algorithm design](https://quantum.cloud.ibm.com/learning/en/courses/variational-algorithm-design) | 8h | Optimization projects — the workhorse pattern |
| [Quantum machine learning](https://quantum.cloud.ibm.com/learning/en/courses/quantum-machine-learning) | 10h | Classification, kernels, feature maps |
| [Quantum chemistry with VQE](https://quantum.cloud.ibm.com/learning/en/courses/quantum-chem-with-vqe) | 5h | Molecules, materials, drug discovery |
| [Quantum diagonalization algorithms](https://quantum.cloud.ibm.com/learning/en/courses/quantum-diagonalization-algorithms) | 10h | VQE, Krylov, and the current state of the art |
| [Integrating quantum and HPC](https://quantum.cloud.ibm.com/learning/en/courses/integrating-quantum-and-high-performance-computing) | 6h | Hybrid workflows, realistic deployment |

Full catalog: <https://quantum.cloud.ibm.com/learning/en/courses>

### Notebooks

We've annotated the useful ones, including which are readable without running anything — in [`NOTEBOOK-CATALOG.md`](NOTEBOOK-CATALOG.md). **Domain/Industry Expert: that document was written for you.**

---

## 8. Event schedule

Times, speaker names, and any room that is not listed here are **TBA**.

| Date | What | Where |
|---|---|---|
| October 1, 2026 | Kickoff and challenge release | TBA |
| October 17–18, 2026 | Local events | Miami Dade College Wolfson Campus, AI Center, Building 2, Room 2104; and Alan B. Levan Center at Nova Southeastern University, 5th Floor. Other campus rooms are TBA. |
| October 31, 2026 | First-place local winner deadline | Packet to the hosts |
| November 13, 2026 | Statewide announcement | Venue TBA |

Capacity is up to 50 participants per campus. A setup clinic and a GitHub clinic may run inside the local events. Whether they do is TBA.

---

## 9. Troubleshooting

**`ModuleNotFoundError: No module named 'qiskit'`, but you definitely installed it.**
Your notebook kernel isn't the environment you installed into. Activate the venv *first*, then launch Jupyter from that same shell. If you're in Anaconda Navigator, use the "Applications on" dropdown to select your environment before launching.

**`ImportError` mentioning `qiskit-terra` or "invalid environment".**
You have Qiskit 0.x and 1.0+ colliding. This is not fixable in place. Delete the venv, make a new one, install once.

**Circuit drawing fails or renders as gibberish.**
`pip install pylatexenc matplotlib`, restart the kernel.

**`401 Unauthorized` when connecting to the service.**
Either the API key is wrong, or you're using a bearer token where the API key belongs. Regenerate the key from <https://quantum.cloud.ibm.com/> and re-run `save_account`.

**"No instance found" / can't see any QPUs.**
Check the region switcher at the top of the dashboard — Open Plan instances exist only in `us-east`. If you're looking at `eu-de`, you'll see nothing.

**Compilation errors during `pip install`.**
Your platform has no prebuilt wheel. Check you're on 64-bit Python 3.10+. Ask in <https://discord.gg/vz6uTbtJzR> before you start installing Rust toolchains.

**Jobs sitting in the queue forever.**
Normal at peak times — it's a shared fair-share queue. Use `service.least_busy(operational=True, simulator=False)` and check <https://quantum.cloud.ibm.com/computers>. Meanwhile, keep working against the local simulator.

**Code from a tutorial you found online just doesn't work.**
Check its date. Anything using `channel="ibm_quantum"`, `IBMQ.load_account()`, `execute()`, or `qiskit.Aer` predates the current API. See the warning in §4.1.

**Still stuck:** <https://discord.gg/vz6uTbtJzR> or any co-lead: your local university lead, then Kevin Robinson at kevin@quantumglobalgroup.io. Post the actual error text, not "it doesn't work." Do not paste an API key, a CRN, or a password.

---

## 10. Support and community

- **Event chat:** <https://discord.gg/vz6uTbtJzR>
- **Statewide co-leads:** Kevin Robinson, Robert Loredo, Grant Kurz, and Ayse Torres. None of them is the single host.
  - Kevin Robinson, Quantum Global Group, kevin@quantumglobalgroup.io
  - Robert Loredo. Program questions: kevin@quantumglobalgroup.io
  - Grant Kurz. Local contact: details coming soon. Program questions: kevin@quantumglobalgroup.io
  - Ayse Torres. Program questions: kevin@quantumglobalgroup.io
- **Qiskit-approved website:** <https://entangledsolutionsgroup.com/Qiskit-Fall-Fest-2026/>
- **Qiskit Slack:** <https://qisk.it/join-slack>, the global Qiskit community
- **Qiskit YouTube:** <https://www.youtube.com/qiskit>
- **Documentation:** <https://quantum.cloud.ibm.com/docs>
- **Quantum Computing Stack Exchange:** tag `qiskit`

**Code of conduct:** Coming soon. Until it is published, write to any co-lead: your local university lead, then Kevin Robinson at kevin@quantumglobalgroup.io.

---

## 11. Accessibility, hardware, and cost

- **No laptop?** Loaner laptops are not confirmed. Email any co-lead before you travel: your local university lead, then Kevin Robinson at kevin@quantumglobalgroup.io. Do not assume a machine will be waiting.
- **Weak laptop?** Everything in §5.1 runs in a browser. A Chromebook is sufficient.
- **Nothing here costs money.** Qiskit is open source (Apache 2.0). The IBM Quantum Open Plan is free. GitHub is free. If someone asks you to pay for something to participate, that's not part of this event.
- **Accessibility needs:** contact any co-lead in advance: your local university lead, then Kevin Robinson at kevin@quantumglobalgroup.io.

---

## Appendix A: Glossary for the Domain/Industry Expert

You'll hear these on day one. You don't need to be able to derive any of them.

| Term | What it means when someone says it at this event |
|---|---|
| **Qubit** | The quantum unit of information. Unlike a bit, it can be in a combination of 0 and 1 until measured. |
| **Superposition** | That "combination of states" property. It's not "both at once" in any useful everyday sense, it's a weighted combination that produces probabilities on measurement. |
| **Entanglement** | Two or more qubits whose outcomes are correlated in ways no classical system can reproduce. It's the resource that makes quantum computing different. |
| **Circuit** | A quantum program. A sequence of operations (gates) on qubits. |
| **Gate** | One operation on one or more qubits. The building block. |
| **Shots** | How many times you run a circuit. Quantum results are probabilistic, so you run repeatedly and read the distribution. |
| **QPU** | Quantum Processing Unit: the actual quantum chip. |
| **Transpile** | Rewriting your circuit into the specific gates and connectivity a given QPU physically supports. |
| **Noise** | Real quantum hardware makes errors. Managing this is most of the engineering. |
| **Error mitigation** | Statistical techniques to recover a good answer from noisy runs. Different from error *correction*, which is a future, much bigger thing. |
| **QUBO** | Quadratic Unconstrained Binary Optimization: a standard way of writing an optimization problem that quantum optimizers can consume. If your problem can become a QUBO, it's in scope. |
| **Hamiltonian** | A mathematical description of a system's energy. Chemistry and physics problems are usually posed this way. |
| **VQE / QAOA** | The two most common hybrid quantum-classical algorithms. VQE for finding lowest-energy states; QAOA for optimization. |
| **Utility scale** | Circuits large enough that classical brute-force simulation gets hard — roughly 100+ qubits. Where the interesting current research lives. |

---

## Appendix B: Pre-event checklist

Print this. Tick it before October 1, 2026.

**Everyone**
- [ ] Checked registration. The official link is Coming soon. The site form does not collect secrets.
- [ ] Joined <https://discord.gg/vz6uTbtJzR> and introduced myself
- [ ] Created my own IBM Quantum Platform account (§4.1). Nobody else holds the password.
- [ ] Open Plan instance created in `us-east` (§4.2)
- [ ] API key and CRN saved privately. I can revoke the key and create a replacement if it is exposed.
- [ ] GitHub account created, email verified, 2FA on (§6.1)
- [ ] Read §2 and know what a good project looks like
- [ ] Spent 20 minutes in the [Composer](https://quantum.cloud.ibm.com/composer) just playing

**Builder/Developer Expert, additionally**
- [ ] Python 3.10+ available
- [ ] Qiskit + `qiskit-ibm-runtime` installed, in a venv (§5.2)
- [ ] `check_setup.py` runs and shows a Bell state (§5.3)
- [ ] API key and CRN saved to a password manager (§4.3)
- [ ] `save_account()` run; `QiskitRuntimeService()` connects (§5.4)
- [ ] Ran one circuit on real hardware via the [hello world guide](https://quantum.cloud.ibm.com/docs/en/guides/hello-world)
- [ ] Started [Use a quantum computer today](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today)

**Domain/Industry Expert, additionally**
- [ ] Read [`NON-TECHNICAL-TRACK.md`](NON-TECHNICAL-TRACK.md) end to end
- [ ] Completed [Quantum business foundations](https://quantum.cloud.ibm.com/learning/en/courses/quantum-business-foundations) (and claimed the badge)
- [ ] Skimmed two domain notebooks from [`NOTEBOOK-CATALOG.md`](NOTEBOOK-CATALOG.md)
- [ ] Drafted the Use-Case Canvas with one problem from my own field
- [ ] Can state that problem out loud in 60 seconds

---

*Something in this handbook wrong, broken, or out of date? Open an issue on the repo. Genuinely — links rot and IBM ships changes, and the participant who finds the broken step is doing everyone a favour.*
