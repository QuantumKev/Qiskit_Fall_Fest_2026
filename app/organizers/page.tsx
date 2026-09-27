import Link from "next/link";
import { OrganizerDashboard } from "@/components/OrganizerDashboard";
import { CO_LEAD_SENTENCE } from "@/content/event";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Registration responses", "/organizers/");

export default function OrganizersPage() {
  return (
    <div className="stack guide">
      <p className="kicker">For Facilitators and Local Hosts</p>
      <h1>Registration responses</h1>
      <p className="lede">{CO_LEAD_SENTENCE}</p>
      <p>
        Teaching notes, the run of show, and the host directory are in the <Link href="/facilitator/">facilitator guide</Link>. This page is public. It stores no passwords, API keys, or CRNs.
      </p>
      <OrganizerDashboard />
    </div>
  );
}
