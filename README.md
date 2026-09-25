# Qiskit Fall Fest 2026

Guided onboarding for the Florida Quantum Readiness Challenge and Qiskit Fall Fest. Ten modules take a beginner from an IBM Quantum sign-in to a two-qubit Bell circuit, a tour of the Hetionet hybrid project, and a next learning step.

This is an entry ramp. It does not ask anyone to publish a quantum-advantage result.

## Run the guide

```bash
npm install
npm test
npm run dev
```

Open http://127.0.0.1:3010 for a workshop session (`npx next dev -H 127.0.0.1 -p 3010`). `npm run dev` still uses port 3000.

The beginner path is `/intro`. Exercise 1 is `/learn/setup` and the registration form is `/register`. Registration responses stay on the server in a gitignored file and require `ORGANIZER_TOKEN` from `.env.example`. Do not commit API keys, CRNs, or notebook outputs that contain them.

The Bell notebook is `notebooks/bell_state_lab.ipynb`. Install `requirements.txt` in its own virtual environment (`qiskit>=2.3.0,<2.4.0`). The lab uses a local statevector sampler. Do not put an API token, password, or classroom CRN in the notebook or in this site.

## What is here

- Journey with time estimates, completion checkboxes, and “What should I do next?”
- Participant and Facilitator modes. Facilitator notes stay hidden until that mode is on. Progress is stored in this browser (`qff-progress`, `qff-mode`, `qff-survey`).
- Searchable glossary. Analogies from cooking, music, sports, and Home Depot sit beside the technical definition.
- Knowledge checks, account troubleshooting, and a source manifest.
- Downloads: `public/downloads/vocabulary.md`, `bell-lab.md`, `project-canvas.md`.

## Sources

IBM screens and the Hetionet README were checked on 2026-09-23. Recheck the IBM links the morning of the workshop. Qolour is linked, not copied. Robert Loredo’s *Quantum Readiness for Leaders* is cited by title. No book text or page numbers are included.

The certification study guide at [Quantum-Global-Group/qiskit-2x-cert-study-guide](https://github.com/Quantum-Global-Group/qiskit-2x-cert-study-guide) is later practice. Its 2026-09-20 cheat-sheet commit is plain-English exam material. It does not contain the four analogy layers, so the analogies in this repo are original teaching translations for Fall Fest. Replace an analogy sentence if a preferred version exists. Leave the technical sentence unless it is wrong.

Hetionet test PR-AUC, from that project README: stacking (Pauli) 0.7987, random forest 0.7838, extra trees 0.7807, stacking (ZZ) 0.7408, QSVC 0.7216. The published target above 0.70 was met. A tuned classical forest is close. Do not describe this as quantum advantage.

## Facilitator launch check

- Click every IBM URL the morning of the event.
- Confirm the classroom invitation email and the account name you will read aloud. Do not put the CRN on a slide.
- Name the Qolour video titles from the live course menu.
- Confirm the welcome wording with Kevin before reading it.
- Keep a side table for sign-in problems so the room can reach Composer.
