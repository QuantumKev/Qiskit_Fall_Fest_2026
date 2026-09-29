import Link from "next/link";
import { OrganizerGuideViewer } from "@/components/OrganizerGuideViewer";
import { CO_LEAD_SENTENCE, DEEPSTATION_REGISTRATION_URL, EVENT, LOCAL_HOSTS, ORGANIZER_GUIDE_PDF } from "@/content/event";
import { withBase } from "@/lib/base-path";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Registration and Team Access", "/register/");

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

const CAMPUSES: readonly { university: string; registration: string | null }[] = [
  ...LOCAL_HOSTS.map((host) => ({ university: host.university, registration: host.registration })),
  { university: "Florida International University", registration: null },
];

export default function RegisterPage() {
  const guideHref = withBase(ORGANIZER_GUIDE_PDF);

  return (
    <div className="stack guide register-page">
      <h1>Registration and Team Access</h1>
      <p className="lede">
        Registration, team creation, and team management for the Florida Qiskit Fallfest Hackathon are handled through DeepStation. Use the link below to register, create a team, or join an existing team.
      </p>
      <p className="register-actions">
        <a className="button register-cta" href={DEEPSTATION_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
          <span className="cta-label">Register or Join a Team on DeepStation</span>
          <span className="external-cue">
            <ExternalIcon />
            opens in a new tab
          </span>
        </a>
      </p>
      <p>Opens DeepStation in a new tab. DeepStation handles registration and teams. Use the button above, or your campus link when one is listed. Open the organizer guide only if you were asked to review it.</p>
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
                <span className="campus-pending">
                  <span>{host.university}</span>
                  <span className="meta">Link not yet confirmed</span>
                </span>
              )}
            </li>
          ))}
        </ul>
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
      <section className="prose" aria-labelledby="registration-help">
        <h2 id="registration-help">Questions</h2>
        <p>
          {CO_LEAD_SENTENCE} {EVENT.contactOrder}
        </p>
        <p>
          <Link href="/support/">Support</Link>
        </p>
      </section>
    </div>
  );
}
