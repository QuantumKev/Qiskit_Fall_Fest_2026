# Florida Qiskit Fallfest Hackathon

One participant path: the event, an IBM Quantum account, vocabulary, one Bell state in Composer and again in Python, the Qiskit workflow, two pathways, a classical baseline, benchmarking, the Hetionet example, a team, and a GitHub submission.

This repository, https://github.com/QuantumKev/Qiskit_Fall_Fest_2026, is the source of the participant website. Team projects are submitted in the private repository https://github.com/robertloredo/FAU-Qiskit-Fallfest-2026. Ask to join that repository.

This is an entry ramp. You are not expected to prove that quantum computing is better than classical computing.

Sticker accents in `public/brand/stickers/` come from [Qiskit Fall Fest 2026 materials](https://github.com/Qiskit-Fall-Fest-2026/materials-resources/tree/main/00_Deliverables/Stickers/SVG). The social image `public/brand/og-qiskit.png` is the Qiskit wordmark from that repository’s PNG folder. The white Qiskit mark and the black IBM Quantum wordmark are in `public/brand/` and are shown on the dark page background. The wordmark keeps its white field. The earlier reverse JPEG is a solid white field and is not shown. Files are stored in this repo. They are not hotlinked.

## Run the guide

```bash
npm install
npm test
npm run lint
npm run dev
```

Open http://127.0.0.1:3000. A workshop session can use `npx next dev -H 127.0.0.1 -p 3010`.

Start at `/`. The participant handbook is `/handbook/`. Registration is `/register/`. Responses stay on the server in a gitignored file and require `ORGANIZER_TOKEN` from `.env.example`. The static GitHub Pages build does not include that API. Do not commit API keys, CRNs, or notebook outputs that contain them.

The Bell notebook is `notebooks/bell_state_lab.ipynb`. Install `requirements.txt` in its own virtual environment (`qiskit>=2.3.0,<2.4.0`). The lab uses a local statevector sampler. Participants use the IBM Quantum Open Plan: up to 10 minutes of QPU execution time per rolling 28-day window, in `us-east`. The workshop does not promise more minutes.

`npm run pages` writes a static export to `out/` with base path `/Qiskit_Fall_Fest_2026/`. GitHub Actions workflow `.github/workflows/pages.yml` builds that export. The participant-site preview is https://quantumkev.github.io/Qiskit_Fall_Fest_2026/ after Pages is enabled. This repository does not treat that URL as live until a signed-out request succeeds. The Qiskit-approved website is https://entangledsolutionsgroup.com/Qiskit-Fall-Fest-2026/.

## What is here

- Twelve-step journey with a progress count stored in this browser (`qff-progress`).
- `PARTICIPANT_HANDBOOK.md`, `NON-TECHNICAL-TRACK.md` (visible title: Domain/Industry Expert and Builder/Developer Expert), `FACILITATOR_GUIDE.md`, and `NOTEBOOK-CATALOG.md` rendered in full.
- Submission template in `submissions/_TEMPLATE/`.
- Searchable glossary. Knowledge checks. Copyable Bell code.

Dates and contacts live in `content/event.ts`.

## Sources

IBM plans, cloud setup, and the hello-world guide were checked on 2026-09-26. Qolour is linked, not copied. Robert Loredo’s *Quantum Readiness for Leaders*, chapter 7, is cited by title. The book is not copied.

Hetionet primary test PR-AUC: hybrid stacking 0.7987, Random Forest 0.7838, Extra Trees 0.7807. A later 0.8581 figure kept a cached quantum kernel while classical pieces were tuned with Optuna. Do not describe this as a quantum method beating the best classical method. The benchmarking page defines that comparison.
