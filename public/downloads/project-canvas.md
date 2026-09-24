# Project canvas

Use this to walk the Hetionet example, or to sketch a Fall Fest-sized project. Do not train the Hetionet model in the workshop.

Numbers below are from the hybrid-qml-kg-poc README as read on 2026-09-23.

| Step | This project | Your project |
| --- | --- | --- |
| Question | Rank possible Compound-treats-Disease links | |
| Domain | Drugs, diseases, genes, recorded relationships | |
| Data | Hetionet, CtD relation, https://het.io/ | |
| Classical preparation | Positive treatments and hard negatives | |
| Embeddings | RotatE, full graph, 128D, 200 epochs | |
| Classical baseline | Logistic regression, random forest, extra trees, GridSearchCV | |
| Quantum experiment | 16-qubit Pauli feature map, reps=2, QSVC C=0.1; also a ZZ map | |
| Hybrid | Stacking ensemble | |
| Evaluation | PR-AUC. Pauli stack 0.7987. Random forest 0.7838. Extra trees 0.7807. ZZ stack 0.7408. QSVC 0.7216. | |
| Decision | Target above 0.70 was met. A tuned forest is close. Do not call this quantum advantage. | |
| Next experiment | | |

Roles to name: domain expert, data engineer, Python developer, machine-learning practitioner, quantum developer, benchmarking lead, project manager, business analyst, technical writer, presenter.
