import Link from "next/link";
import { EVENT } from "@/content/event";

export const metadata = { title: `Support · ${EVENT.name}` };

const STEPS = [
  {
    title: "Account or region",
    body: `Open Plan instances are created in ${EVENT.region}. If the instance list is empty, switch the region before you create a second account.`,
  },
  {
    title: "API key",
    body: "This site never asks for the key. If it was pasted into chat or git, revoke it in the IBM dashboard and create a replacement.",
  },
  {
    title: "Qiskit import",
    body: "Activate the virtual environment, then start Jupyter from that same shell. The Bell lab pins qiskit>=2.3.0,<2.4.0.",
  },
  {
    title: "Old tutorial",
    body: "IBMQ.load_account(), execute(), qiskit.Aer, and channel=\"ibm_quantum\" are not the current API.",
  },
];

export default function SupportPage() {
  return (
    <div className="stack guide">
      <p className="kicker">Troubleshooting and support</p>
      <h1>When something breaks</h1>
      <p className="lede">
        The long troubleshooting list is in the handbook. Write to {EVENT.email} or use Discord. Do not send a password, an API key, or a CRN.
      </p>
      {STEPS.map((step) => (
        <section key={step.title} className="prose card">
          <h2>{step.title}</h2>
          <p>{step.body}</p>
        </section>
      ))}
      <ul className="link-list">
        <li>
          <Link href="/handbook/#9-troubleshooting">Handbook troubleshooting</Link>
        </li>
        <li>
          <a href={EVENT.discord} target="_blank" rel="noopener noreferrer external">
            Discord
            <span className="external-mark"> (external)</span>
          </a>
        </li>
        <li>
          <a href={`mailto:${EVENT.email}`}>{EVENT.email}</a>
        </li>
        <li>
          <a href="https://qisk.it/join-slack" target="_blank" rel="noopener noreferrer external">
            Qiskit Slack
            <span className="external-mark"> (external)</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
