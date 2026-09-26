/**
 * Single event record. Pages read dates, contacts, and TBA states from here.
 * The three Markdown handbooks state the same facts in long form.
 * If a date changes, change it here and in those files together.
 */

export type CoLead = {
  name: string;
  email: string;
  organization?: string;
};

/** Equal weight, in this order. Kevin is last. */
export const CO_LEADS: readonly CoLead[] = [
  { name: "Robert Loredo", email: "rloredo2026@fau.edu", organization: "Florida Atlantic University" },
  { name: "Grant Kurz", email: "grant@deepstation.ai" },
  { name: "Ayse Torres", email: "atorre58@fau.edu", organization: "Florida Atlantic University" },
  { name: "Kevin Robinson", email: "kevin@quantumglobalgroup.io", organization: "Quantum Global Group" },
];

export const CO_LEAD_SENTENCE =
  "Robert Loredo, Grant Kurz, Ayse Torres, and Kevin Robinson are co-leading this event.";

export function formatCoLead(lead: CoLead): string {
  return lead.organization ? `${lead.name}, ${lead.organization}, ${lead.email}` : `${lead.name}, ${lead.email}`;
}

/** Qiskit-approved website. Not the GitHub Pages participant preview. */
export const QISKIT_APPROVED_SITE = "https://entangledsolutionsgroup.com/Qiskit-Fall-Fest-2026/";

export const EVENT = {
  name: "Qiskit Fall Fest South Florida 2026",
  series: "Qiskit Fall Fest 2026",
  theme: "ten years of quantum on the cloud",
  kickoff: "October 1, 2026",
  localEvents: "October 17–18, 2026",
  winnerDeadline: "October 31, 2026",
  statewideAnnouncement: "November 13, 2026",
  discord: "https://discord.gg/vz6uTbtJzR",
  capacity: "up to 50 participants per campus",
  campuses: [
    "Miami Dade College",
    "Nova Southeastern University",
    "Florida Atlantic University",
    "Embry-Riddle Aeronautical University",
    "Florida Tech",
    "Florida Gulf Coast University",
  ],
  venues: [
    {
      campus: "Miami Dade College",
      place:
        "Wolfson Campus, AI Center, Building 2, Room 2104, 300 N.E. Second Ave., Miami, FL 33132",
    },
    {
      campus: "Nova Southeastern University",
      place: "Alan B. Levan Center, 3100 Ray Ferrero Jr. Blvd., 5th Floor, Davie, FL 33314",
    },
  ],
  registration: "Coming soon",
  rubric: "Coming soon",
  codeOfConduct: "Coming soon",
  unconfirmedDetails: "TBA",
  openPlan: "10 minutes of QPU time per 28-day window",
  region: "us-east",
  repo: "https://github.com/QuantumKev/Qiskit_Fall_Fest_2026",
  branch: "cursor/participant-hub-refresh",
  // Participant-site preview. This is not the Qiskit-approved website.
  pagesSite: "https://quantumkev.github.io/Qiskit_Fall_Fest_2026/",
  approvedSite: QISKIT_APPROVED_SITE,
  qiskitPin: "qiskit>=2.3.0,<2.4.0",
} as const;

export const HETIONET_REPO = "https://github.com/Quantum-Global-Group/hybrid-qml-kg-poc";
export const HETIONET_LINKS = {
  readme: HETIONET_REPO,
  paper: `${HETIONET_REPO}/blob/main/docs/PAPER.md`,
  results: `${HETIONET_REPO}/blob/main/docs/RESULTS_EVIDENCE.md`,
  actualVsExploration: `${HETIONET_REPO}/blob/main/docs/ACTUAL_VS_EXPLORATION_RESULTS.md`,
  glossary: `${HETIONET_REPO}/blob/main/docs/DASHBOARD_PRESENTATION_AND_GLOSSARY.md`,
  notebooks: [
    `${HETIONET_REPO}/blob/main/notebooks/01-kg-ingestion.ipynb`,
    `${HETIONET_REPO}/blob/main/notebooks/02-classical-baseline.ipynb`,
    `${HETIONET_REPO}/blob/main/notebooks/03-qml-training.ipynb`,
    `${HETIONET_REPO}/blob/main/notebooks/04-testing.ipynb`,
  ],
  demo: "https://hetqml-web.fly.dev/initialize",
} as const;

export const QOLOR_COURSE = "https://www.qolour.com/educator-course";
export const QOLOR_EXHIBIT = "https://www.qolour.com/educator-course/statevector-exhibit";

export const IBM = {
  platform: "https://quantum.cloud.ibm.com/",
  registration: "https://quantum.cloud.ibm.com/registration",
  composer: "https://quantum.cloud.ibm.com/composer",
  instances: "https://quantum.cloud.ibm.com/instances",
  workloads: "https://quantum.cloud.ibm.com/workloads",
  cloudSetup: "https://quantum.cloud.ibm.com/docs/en/guides/cloud-setup",
  saveCredentials: "https://quantum.cloud.ibm.com/docs/en/guides/save-credentials",
  untrusted: "https://quantum.cloud.ibm.com/docs/en/guides/cloud-setup-untrusted",
  plans: "https://quantum.cloud.ibm.com/docs/en/guides/plans-overview",
  helloWorld: "https://quantum.cloud.ibm.com/docs/en/guides/hello-world",
  patterns: "https://quantum.cloud.ibm.com/docs/en/guides/intro-to-patterns",
  composerGuide: "https://quantum.cloud.ibm.com/docs/en/guides/composer",
  install: "https://quantum.cloud.ibm.com/docs/en/guides/install-qiskit",
  api: "https://quantum.cloud.ibm.com/docs/api",
  docs: "https://quantum.cloud.ibm.com/docs",
  tutorials: "https://www.ibm.com/quantum/qiskit#tutorials",
  learning: "https://quantum.cloud.ibm.com/learning/en",
  qiskitRepo: "https://github.com/Qiskit/qiskit#readme",
  announcement: "https://www.ibm.com/quantum/blog/qiskit-fall-fest-2026",
  slack: "https://qisk.it/join-slack",
} as const;
