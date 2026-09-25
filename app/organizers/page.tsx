import { OrganizerDashboard } from "@/components/OrganizerDashboard";

export const metadata = { title: "Organizers · Qiskit Fall Fest" };

export default function OrganizersPage() {
  return (
    <div className="stack guide">
      <p className="kicker">Organizers only</p>
      <h1>Registration responses</h1>
      <p className="lede">
        Statuses come from the form and from updates you type here. The list has no API keys and no CRNs. Set ORGANIZER_TOKEN on the server before responses can be stored.
      </p>
      <OrganizerDashboard />
    </div>
  );
}
