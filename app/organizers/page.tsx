import { OrganizerDashboard } from "@/components/OrganizerDashboard";
import { CO_LEAD_SENTENCE, CO_LEADS, QISKIT_APPROVED_SITE } from "@/content/event";

export const metadata = { title: "Co-leads · Qiskit Fall Fest" };

export default function OrganizersPage() {
  return (
    <div className="stack guide">
      <p className="kicker">Co-leads</p>
      <h1>Co-leads and registration responses</h1>
      <p className="lede">{CO_LEAD_SENTENCE}</p>
      <ul className="link-list">
        {CO_LEADS.map((lead) => (
          <li key={lead.email}>
            {lead.organization ? `${lead.name}, ${lead.organization}, ` : `${lead.name}, `}
            <a href={`mailto:${lead.email}`}>{lead.email}</a>
          </li>
        ))}
      </ul>
      <p>
        <a href={QISKIT_APPROVED_SITE} target="_blank" rel="noopener noreferrer external">
          Qiskit-approved website
          <span className="external-mark"> (external)</span>
        </a>
      </p>
      <p className="lede">
        Statuses come from the form and from updates you type here. The list has no API keys and no CRNs. Set ORGANIZER_TOKEN on the server before responses can be stored.
      </p>
      <OrganizerDashboard />
    </div>
  );
}
