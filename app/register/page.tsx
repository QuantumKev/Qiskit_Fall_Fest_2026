import Link from "next/link";
import { OrganizerGuideViewer } from "@/components/OrganizerGuideViewer";
import { CO_LEADS, LOCAL_HOSTS, ORGANIZER_GUIDE_PDF, type LocalHost } from "@/content/event";
import { withBase } from "@/lib/base-path";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Registration and Team Access", "/register/");

const REGISTRATION_HELP = CO_LEADS.find((person) => person.email === "grant@deepstation.ai");

const MIAMI_AND_NOVA_COLEADS = [
  { name: "Kevin Robinson", email: "kevin@quantumglobalgroup.io" },
  { name: "Grant Kurz", email: "grant@deepstation.ai" },
] as const;

function ExternalIcon() {
  return (
    <svg className="external-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"
      />
    </svg>
  );
}

function campusPeople(host: LocalHost): { name: string; email: string }[] {
  if (host.university === "Miami Dade College" || host.university === "Nova Southeastern University") {
    return [...MIAMI_AND_NOVA_COLEADS];
  }
  return host.contacts.flatMap((contact) => {
    if (!contact.href?.startsWith("mailto:")) return [];
    const email = contact.href.slice("mailto:".length);
    if (email === REGISTRATION_HELP?.email) return [];
    const named = contact.label.split(",")[0]?.trim();
    const name = named && !named.includes("@") ? named : host.leads[0];
    return name ? [{ name, email }] : [];
  });
}

const CAMPUSES: readonly { university: string; registration: string | null; people: readonly { name: string; email: string }[] }[] = [
  ...LOCAL_HOSTS.map((host) => ({
    university: host.university,
    registration: host.registration,
    people: campusPeople(host),
  })),
  { university: "Florida International University", registration: null, people: [{ name: "Anqi Wu", email: "anwu@fiu.edu" }] },
];

export default function RegisterPage() {
  const guideHref = withBase(ORGANIZER_GUIDE_PDF);

  return (
    <div className="stack guide register-page">
      <h1>Registration and Team Access</h1>
      <p className="lede">
        Registration, team creation, and team management for the Florida Qiskit Fallfest Hackathon are handled through DeepStation. Choose your campus below to register, create a team, or join an existing team.
      </p>
      <section aria-labelledby="campus-links">
        <h2 id="campus-links">Your campus</h2>
        <ul className="campus-list">
          {CAMPUSES.map((host) => (
            <li key={host.university}>
              {host.registration ? (
                <a href={host.registration} target="_blank" rel="noopener noreferrer">
                  {host.university}
                  <ExternalIcon />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <span>{host.university}</span>
              )}
              {host.people.map((person) => (
                <span key={person.email}>
                  {person.name}, <a href={`mailto:${person.email}`}>{person.email}</a>
                </span>
              ))}
              {host.registration ? null : <span className="meta">Link not yet confirmed</span>}
            </li>
          ))}
        </ul>
        {REGISTRATION_HELP?.email ? (
          <p>
            If you have trouble with registration, contact {REGISTRATION_HELP.name} at{" "}
            <a href={`mailto:${REGISTRATION_HELP.email}`}>{REGISTRATION_HELP.email}</a>.
          </p>
        ) : null}
      </section>
      <h2>DeepStation Hackathons Organizer Guide</h2>
      <p>
        This guide is for campus leads, facilitators, and event organizers managing their local hackathon through DeepStation. Scroll through the complete guide below, open it full screen, or download a copy.
      </p>
      <div className="guide-actions">
        <a className="button button-secondary" href={guideHref} target="_blank" rel="noopener noreferrer">
          Open Guide Full Screen
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a className="button button-secondary" href={guideHref} download="deepstation-hackathons-organizer-guide.pdf">
          Download Organizer Guide
        </a>
      </div>
      <OrganizerGuideViewer src={guideHref} />
      <p>
        <Link href="/support/">Support</Link>
      </p>
    </div>
  );
}
