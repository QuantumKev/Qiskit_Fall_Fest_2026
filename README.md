# Qiskit Fall Fest 2026

One participant path for Qiskit Fall Fest 2026: account, one Bell state, the challenge, a classical baseline, a prototype charter, and the Hetionet case. The live host for Assess and Build is still not up.

This is an entry ramp. It does not ask anyone to publish a quantum-advantage result.

## Run the guide

```bash
npm install
npm test
npm run dev
```

Open http://127.0.0.1:3010 for a workshop session (`npx next dev -H 127.0.0.1 -p 3010`). `npm run dev` still uses port 3000.

The beginner path is `/intro`. Exercise 1 is `/learn/setup` and the registration form is `/register`. Registration responses stay on the server in a gitignored file and require `ORGANIZER_TOKEN` from `.env.example`. Do not commit API keys, CRNs, or notebook outputs that contain them.

The Bell notebook is `notebooks/bell_state_lab.ipynb`. Install `requirements.txt` in its own virtual environment (`qiskit>=2.3.0,<2.4.0`). The lab uses a local statevector sampler. Do not put an API token or password in the notebook or in this site. Participants use the IBM Quantum Open Plan: 10 minutes of QPU time per 28-day window. The workshop does not promise more minutes.

## What is here

- Journey with time estimates, completion checkboxes, and “What should I do next?”
- Participant and Facilitator modes. Facilitator notes stay hidden until that mode is on. Progress is stored in this browser (`qff-progress`, `qff-mode`, `qff-survey`).
- Searchable glossary. Cards keep the plain sentence and the technical definition.
- Knowledge checks, account troubleshooting, and a source manifest.
- Downloads: `public/downloads/bell-lab.md`, `project-canvas.md`.

## Sources

IBM screens and the Hetionet README were checked on 2026-09-23. Recheck the IBM links the morning of the workshop. Qolour is linked, not copied. Robert Loredo’s *Quantum Readiness for Leaders* is cited by title. No book text or page numbers are included.

The certification study guide at [Quantum-Global-Group/qiskit-2x-cert-study-guide](https://github.com/Quantum-Global-Group/qiskit-2x-cert-study-guide) is later practice. Its 2026-09-20 cheat-sheet commit is plain-English exam material.

Hetionet test PR-AUC, from that project README: stacking (Pauli) 0.7987, random forest 0.7838, extra trees 0.7807, stacking (ZZ) 0.7408, QSVC 0.7216. The published target above 0.70 was met. A tuned classical forest is close. Do not describe this as quantum advantage.

## Facilitator launch check

- Click every IBM URL the morning of the event.
- The room uses the Open Plan. Do not put a CRN on a slide. Do not promise more than 10 minutes of QPU time per 28 days.
- The Qubi lesson from Qolour is not in this guide yet.
- Keep a side table for sign-in problems so the room can reach Composer.
