import { LAST_VERIFIED } from "@/content/modules";

const SOURCES: { title: string; href?: string; note: string }[] = [
  {
    title: "Introduction to Qiskit",
    href: "/intro",
    note: "Beginner guide added for Fall Fest. Programming analogies on that path use the Home Depot table. Quantum definitions stay technical. Registration responses are not listed here.",
  },
  {
    title: "IBM Quantum Platform",
    href: "https://quantum.cloud.ibm.com/",
    note: "Sign-in, Composer, Learning, and documentation links used in Modules 1, 5, and 9. Recheck the morning of the workshop. This site never collects passwords, API tokens, or classroom CRNs.",
  },
  {
    title: "IBM classroom accounts",
    href: "https://quantum.cloud.ibm.com/docs/en/guides/classroom-accounts",
    note: "How a classroom account differs from a personal login.",
  },
  {
    title: "IBM quantum machine learning course",
    href: "https://quantum.cloud.ibm.com/learning/en/courses/quantum-machine-learning",
    note: "The 10-hour course named in the FAU handbook for classification, kernels, and feature maps. Linked only. This repo does not store the course.",
  },
  {
    title: "Quantum kernel training",
    href: "https://quantum.cloud.ibm.com/docs/en/tutorials/quantum-kernel-training",
    note: "Catalog working notebook for the learning shape. Linked only.",
  },
  {
    title: "Projected quantum kernels",
    href: "https://quantum.cloud.ibm.com/docs/en/tutorials/projected-quantum-kernels",
    note: "Catalog working notebook for the learning shape. Linked only.",
  },
  {
    title: "FAU Qiskit Fall Fest 2026 materials",
    href: "https://github.com/robertloredo/FAU-Qiskit-Fallfest-2026",
    note: "Private repo, default branch main, last push 2026-09-21, read 2026-09-25. Public program name, the dates that appear, Discord, IBM links, the nine-field canvas, and the Open Plan minute rule are paraphrased on /intro/hackathon and /intro/qml. Placeholder fields stay blank. Notebooks and the book are not copied.",
  },
  {
    title: "Qolour educator course",
    href: "https://www.qolour.com/educator-course",
    note: "Linked only. Kevin’s videos and the statevector exhibit stay on Qolour. This repo does not copy that course.",
  },
  {
    title: "Hetionet hybrid project",
    href: "https://github.com/Quantum-Global-Group/hybrid-qml-kg-poc",
    note: "README read 2026-09-23. Reported test PR-AUC: stacking Pauli 0.7987, RandomForest-Optimized 0.7838, ExtraTrees-Optimized 0.7807, stacking ZZ 0.7408, QSVC-Optimized 0.7216. Target above 0.70 was met. This is not a quantum-advantage or clinical claim.",
  },
  {
    title: "Hetionet graph",
    href: "https://het.io/",
    note: "The public biomedical knowledge graph the project studies.",
  },
  {
    title: "Quantum Readiness for Leaders",
    note: "Cited by title as the leadership theme for the readiness module, and by chapter 7 on the sitting between the Bell labs and the Hetionet tour. No chapter text, diagrams, page numbers, publisher excerpt, or Drive file is stored here.",
  },
  {
    title: "Optimization readiness engine",
    note: "Assess and Build are described on the sitting between the Bell labs and the Hetionet tour. The live link is still blank. The engine source is not stored here.",
  },
  {
    title: "Qiskit 2.x certification study guide",
    href: "https://github.com/Quantum-Global-Group/qiskit-2x-cert-study-guide",
    note: "Later practice, not this workshop’s homework. Commit d0fe756 adds plain-English cheat-sheet PDFs. Those files were searched for cooking, music, sports, and Home Depot analogies and did not contain them. Analogies in this guide are original Fall Fest teaching translations.",
  },
];

export const metadata = { title: "Sources · Qiskit Fall Fest" };

export default function SourcesPage() {
  return (
    <div className="stack">
      <p className="kicker">Source manifest</p>
      <h1>What was checked, and what was not copied.</h1>
      <p className="lede">Last verified {LAST_VERIFIED}. If a screen or a README disagrees with this site, follow the source.</p>
      <ul className="source-list">
        {SOURCES.map((source) => (
          <li key={source.title}>
            {source.href ? <a href={source.href}>{source.title}</a> : <strong>{source.title}</strong>}
            <p>{source.note}</p>
          </li>
        ))}
      </ul>
      <p>
        Offline sheets: <a href="/downloads/vocabulary.md">vocabulary</a>,{" "}
        <a href="/downloads/bell-lab.md">Bell lab</a>,{" "}
        <a href="/downloads/project-canvas.md">project canvas</a>.
      </p>
    </div>
  );
}
