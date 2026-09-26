export const HETIONET_WALKTHROUGH: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "The paper, and what this page will not claim",
    paragraphs: [
      "This walkthrough follows Quantum Kernel Link Prediction on Biomedical Knowledge Graphs, by Jonathan Beale, Kevin Robinson, Mark Jack, and Abdelrahman E. Ahmed of Quantum Global Group, with Abdelrahman E. Ahmed also listed at Alexandria University. The two PDF copies in the workshop notes are the same six-page paper. This page paraphrases it. It does not paste the PDF.",
      "The code repository is https://github.com/Quantum-Global-Group/hybrid-qml-kg-poc. Hetionet itself is https://het.io/. Do not train the model in this workshop.",
      "The comparison below is not quantum advantage, and it is not a clinical result.",
    ],
  },
  {
    heading: "1. The question and the graph",
    paragraphs: [
      "The question is whether a model can rank possible Compound-treats-Disease links for drug repurposing. Hetionet v1.0 supplies the graph: 47,031 entities, 2,250,198 edges, and 24 relation types. The target relation, CtD, has 755 known pairs.",
      "Known treatments are the positive examples. Hard negatives are made by swapping one end of a real edge for another entity of the same kind, then throwing away any pair that is already a known treatment. The split is 604 positives and 604 negatives for training, and 151 and 151 for the test.",
    ],
  },
  {
    heading: "2. Embeddings",
    paragraphs: [
      "RotatE trains on the full graph, all 24 relation types, for 200 epochs, and places each entity in 128 dimensions. In that model a relation acts like a rotation: the head embedding, rotated by the relation, should land near the tail embedding when the triple is valid. Training on the whole graph pulls in gene binding, pathways, and drug class, not only the treats edges.",
      "Figure 1 in the paper is the pipeline picture: those embeddings feed a classical path and a quantum path, then a stack.",
    ],
  },
  {
    heading: "3. Pair features",
    paragraphs: [
      "Each compound–disease pair becomes a vector of 1,177 numbers. The embedding block concatenates the two vectors, takes their absolute difference, takes an element-wise product, and adds a few similarity numbers. A graph block adds degree, neighbors, and path features computed on training edges only. A short domain block adds type and relation counts.",
    ],
  },
  {
    heading: "4. Classical baselines",
    paragraphs: [
      "Three models train on that vector: a tuned random forest, extra trees, and logistic regression. They are the baselines. The paper’s primary table lists optimized random forest at PR-AUC 0.7838 and optimized extra trees at 0.7807.",
    ],
  },
  {
    heading: "5. The quantum kernel",
    paragraphs: [
      "The quantum path first compresses 1,177 dimensions to 24 with principal component analysis, then encodes 16 qubits. Two feature maps are compared, each with two repetitions: ZZ, and a Pauli map that mixes X, Y, Z, and ZZ. The kernel is a fidelity: how much two encoded states overlap. That full kernel, 1,208 by 1,208, is what the paper times at 2,619 seconds on a statevector simulator. The support-vector classifier uses C = 0.1 in the primary run.",
      "Standalone, the Pauli QSVC scores PR-AUC 0.6343. The ZZ QSVC scores 0.7216. Neither beats the tuned forest by itself.",
    ],
  },
  {
    heading: "6. The stack",
    paragraphs: [
      "Stacking asks each base model for out-of-fold probabilities, then trains a logistic regression on those four numbers: forest, extra trees, logistic regression, and QSVC. The point of the stack is that the models miss in different ways. The paper’s variance note says weakly related errors shrink the ensemble’s variance.",
    ],
  },
  {
    heading: "7. The published scores",
    paragraphs: [
      "Primary test PR-AUC, from the paper’s Table II: Pauli ensemble 0.7987, optimized random forest 0.7838, optimized extra trees 0.7807, ZZ ensemble 0.7408, ZZ QSVC 0.7216, Pauli QSVC 0.6343. ROC-AUC is listed for the Pauli ensemble at 0.7456, the forest at 0.7319, extra trees at 0.7301, and the Pauli QSVC at 0.6313.",
      "The Pauli ensemble is 0.0149 above the best classical score in that table. A later ensemble figure of 0.8581 appears in the evidence notes. For that run the quantum kernel was cached while the classical pieces were tuned with Optuna. It is not a fresh quantum result and it is not quantum advantage. A hardware check on IBM Quantum Heron is reported near 0.634, in line with the Pauli simulator QSVC. Read those as the project’s comparison. They are not quantum advantage and not a clinical result.",
    ],
  },
  {
    heading: "8. Why the weaker kernel helps the stack",
    paragraphs: [
      "Figure 2 holds the split fixed and swaps only the feature map. Pauli lowers the standalone QSVC by 8.7 percentage points relative to ZZ, and raises the ensemble by 5.8 percentage points relative to the ZZ ensemble. The ZZ ensemble, 0.7408, sits below the forest. The paper’s reading is that the Pauli map’s errors line up less with the trees, so the meta-learner gets a second opinion. Choosing the higher standalone bar would have picked ZZ and missed the ensemble result.",
    ],
  },
  {
    heading: "9. Scores and trial listings",
    paragraphs: [
      "Figure 3 and Table IV compare model scores with ClinicalTrials.gov listings. The highest score in that table, Abacavir to ocular cancer at 0.793, has no listed trials. Losartan to atherosclerosis and Mitomycin to liver cancer sit near 0.53 and have trial listings. The authors call that a score-validity inversion: a high embedding score can mean the nodes sit near each other in the graph, including through shared context that is not a treatment rationale.",
      "They add ten mechanism features, such as shared targets and shared pathways, computed only from training edges. This workshop does not treat that table as a clinical result. It is a warning about what a score does not show.",
    ],
  },
];
