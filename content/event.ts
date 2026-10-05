/**
 * Single event record. Pages read dates, contacts, and TBA states from here.
 * The Markdown guides state the same public facts in long form.
 * If a date changes, change it here and in those files together.
 *
 * Robert Loredo leads the event. His published address is rloredo2026@fau.edu.
 * Kevin Robinson, Grant Kurz, and Ayse Torres are co-leads. Kevin approved
 * publishing Grant’s, Ayse’s, and Robert’s addresses. Program questions still go to
 * kevin@quantumglobalgroup.io.
 */

import { publicAssetUrl } from "@/lib/base-path";

export type ProgramPerson = {
  name: string;
  role: "lead" | "co-lead";
  email?: string;
  organization?: string;
};

export const LEAD: ProgramPerson = { name: "Robert Loredo", role: "lead", email: "rloredo2026@fau.edu" };

/** Co-leads, in the published order. Kevin builds the site; he is not the lead. */
export const CO_LEADS: readonly ProgramPerson[] = [
  { name: "Kevin Robinson", role: "co-lead", email: "kevin@quantumglobalgroup.io", organization: "Quantum Global Group" },
  { name: "Grant Kurz", role: "co-lead", email: "grant@deepstation.ai" },
  { name: "Ayse Torres", role: "co-lead", email: "atorre58@fau.edu" },
];

export const PROGRAM_EMAIL = "kevin@quantumglobalgroup.io";

export function formatCoLead(person: ProgramPerson): string {
  const role = person.role === "lead" ? "lead" : "co-lead";
  const parts = [person.name, role];
  if (person.organization) parts.push(person.organization);
  if (person.email) parts.push(person.email);
  return parts.join(", ");
}

/** Qiskit-approved website. Not the GitHub Pages participant preview. */
export const QISKIT_APPROVED_SITE = "https://entangledsolutionsgroup.com/Qiskit-Fall-Fest-2026/";

export type HostContact = {
  label: string;
  href: string | null;
};

export type LocalHost = {
  university: string;
  leads: readonly string[];
  venue: string;
  registration: string | null;
  contacts: readonly HostContact[];
};

/** Miami Dade College DeepStation page. Stored once; the registration route reads it from LOCAL_HOSTS. */
export const DEEPSTATION_REGISTRATION_URL =
  "https://deepstation.ai/hackathons/dj31ld8d96fuj1yi97ph4c4c";

/** Root-relative public path. Prefix with withBase() so GitHub Pages keeps the project base path. */
export const ORGANIZER_GUIDE_PDF = "/resources/deepstation-hackathons-organizer-guide.pdf";

export const LOCAL_HOSTS: readonly LocalHost[] = [
  {
    university: "Miami Dade College",
    leads: ["Kevin Robinson", "Grant Kurz"],
    venue: "Wolfson Campus, AI Center, Building 2, Room 2104, 300 N.E. Second Ave., Miami, FL 33132",
    registration: DEEPSTATION_REGISTRATION_URL,
    contacts: [
      { label: "kevin@quantumglobalgroup.io", href: "mailto:kevin@quantumglobalgroup.io" },
      { label: "grant@deepstation.ai", href: "mailto:grant@deepstation.ai" },
    ],
  },
  {
    university: "Florida Atlantic University",
    leads: ["Robert Loredo", "Ayse Torres", "Kateryna Tsekhmayster"],
    venue: "Details coming soon",
    registration: "https://deepstation.ai/hackathons/mtrxfkxet400k68imrz4y5wn",
    contacts: [
      { label: "Robert Loredo, rloredo2026@fau.edu", href: "mailto:rloredo2026@fau.edu" },
      { label: "Ayse Torres, atorre58@fau.edu", href: "mailto:atorre58@fau.edu" },
      { label: "Kateryna Tsekhmayster, ktsekhmayste2022@fau.edu", href: "mailto:ktsekhmayste2022@fau.edu" },
    ],
  },
  {
    university: "Embry-Riddle Aeronautical University",
    leads: ["Laxima Niure Kandel"],
    venue: "Details coming soon",
    registration: "https://deepstation.ai/hackathons/d8cgiq1fhghq7eaw63wghaht",
    contacts: [{ label: "niurekal@erau.edu", href: "mailto:niurekal@erau.edu" }],
  },
  {
    university: "Florida Institute of Technology",
    leads: ["Dr. Robert Usselman"],
    venue: "Details coming soon",
    registration: "https://deepstation.ai/hackathons/ttbgxh2i2x685vbdp7euzusn",
    contacts: [{ label: "russelman@fit.edu", href: "mailto:russelman@fit.edu" }],
  },
  {
    university: "Florida Gulf Coast University",
    leads: ["Dr. Chengyi Qu"],
    venue: "Details coming soon",
    registration: "https://deepstation.ai/hackathons/rg6zdiyur46esnnd8qa26s0h",
    contacts: [{ label: "cqu@fgcu.edu", href: "mailto:cqu@fgcu.edu" }],
  },
];

export const EVENT = {
  name: "Florida Qiskit Fallfest Hackathon",
  seoTitle: "Florida Qiskit Fallfest Hackathon | Qiskit Fall Fest 2026",
  description:
    "Prepare for the Florida Qiskit Fallfest Hackathon, part of Qiskit Fall Fest 2026. Learn quantum fundamentals, IBM Quantum Composer, Python, Qiskit, project benchmarking, and team submission requirements.",
  series: "Qiskit Fall Fest 2026",
  seriesLine: "Part of Qiskit Fall Fest 2026",
  theme: "A decade of quantum on the cloud",
  themeSummary:
    "The 2026 theme recognizes ten years since IBM placed its first quantum processor on the cloud.",
  kickoff: "October 1, 2026",
  localEvents: "October 17–18, 2026",
  localCeremony: "October 18, 2026",
  winnerDeadline: "October 31, 2026",
  final: "November 8, 2026",
  stateChampionship: "November 14, 2026",
  discord: "https://discord.gg/vz6uTbtJzR",
  capacity: "up to 50 participants per campus",
  campuses: LOCAL_HOSTS.map((host) => host.university),
  registration: "Coming soon",
  rubric: "Coming soon",
  codeOfConduct: "Coming soon",
  unconfirmedDetails: "Details coming soon",
  openPlan: "up to 10 minutes of QPU execution time per rolling 28-day window",
  region: "us-east",
  programEmail: PROGRAM_EMAIL,
  /** Source of this website. Participant projects are not submitted here. */
  repo: "https://github.com/QuantumKev/Qiskit_Fall_Fest_2026",
  /** Private project repository. Participants ask to join. */
  participantRepo: "https://github.com/robertloredo/FAU-Qiskit-Fallfest-2026",
  branch: "cursor/participant-hub-refresh",
  pagesSite: "https://quantumkev.github.io/Qiskit_Fall_Fest_2026/",
  approvedSite: QISKIT_APPROVED_SITE,
  qiskitPin: "qiskit>=2.3.0,<2.4.0",
  facilitatorDefined:
    "A workshop facilitator is the instructor, co-host, or designated university lead helping participants during the session.",
  stuckLogin:
    "If you cannot sign in after trying the account troubleshooting steps, ask a workshop facilitator or your university lead for help. You can continue following the projected demonstration while the account issue is being resolved.",
  contactOrder:
    "Ask your local university lead first, then the workshop instructor or designated co-host, then Kevin Robinson at kevin@quantumglobalgroup.io for unresolved program questions. Do not send basic account troubleshooting to IBM unless official IBM account support is required.",
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
  maxExecutionTime: "https://quantum.cloud.ibm.com/docs/en/guides/max-execution-time",
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

export const SITE_ORIGIN = "https://quantumkev.github.io/Qiskit_Fall_Fest_2026";

export function absoluteUrl(path: string) {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Confirmed public facts only. Unverified people and unpublished emails stay out. */
export function eventJsonLd() {
  const hostsKey = "organizer";
  return {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: EVENT.name,
    description: EVENT.description,
    url: absoluteUrl("/"),
    startDate: "2026-10-01",
    endDate: "2026-11-14",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: publicAssetUrl("/brand/og-qiskit.png"),
    [hostsKey]: [LEAD, ...CO_LEADS].map((person) => ({
      "@type": "Person",
      name: person.name,
      jobTitle: person.role === "lead" ? "Lead" : "Co-lead",
      ...(person.email ? { email: person.email } : {}),
      ...(person.organization ? { affiliation: person.organization } : {}),
    })),
    superEvent: {
      "@type": "Event",
      name: EVENT.series,
      url: IBM.announcement,
    },
    location: [
      {
        "@type": "Place",
        name: "Miami Dade College, Wolfson Campus, AI Center",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Building 2, Room 2104, 300 N.E. Second Ave.",
          addressLocality: "Miami",
          addressRegion: "FL",
          postalCode: "33132",
          addressCountry: "US",
        },
      },
      { "@type": "Place", name: "Florida Atlantic University" },
      { "@type": "Place", name: "Embry-Riddle Aeronautical University" },
      { "@type": "Place", name: "Florida Institute of Technology" },
      { "@type": "Place", name: "Florida Gulf Coast University" },
    ],
  };
}
