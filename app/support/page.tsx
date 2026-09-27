import Link from "next/link";
import { EVENT, QISKIT_APPROVED_SITE } from "@/content/event";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Support", "/support/");

const STEPS = [
  {
    title: "Account or region",
    body: `Open Plan instances are created in ${EVENT.region}. The Open Plan is ${EVENT.openPlan}. If the instance list is empty, switch the region before you create a second account. Simulators first.`,
  },
  {
    title: "If you cannot sign in",
    body: `${EVENT.facilitatorDefined} ${EVENT.stuckLogin}`,
  },
  {
    title: "Who to ask",
    body: EVENT.contactOrder,
  },
  {
    title: "API key",
    body: "This site never asks for the key. If it was pasted into chat or git, revoke it in the IBM dashboard and create a replacement.",
  },
  {
    title: "Qiskit import",
    body: `Activate the virtual environment, then start Jupyter from that same shell. The Bell lab pins ${EVENT.qiskitPin}.`,
  },
  {
    title: "Old tutorial",
    body: "IBMQ.load_account(), execute(), qiskit.Aer, and channel=\"ibm_quantum\" are not the current API.",
  },
];

export default function SupportPage() {
  return (
    <div className="stack guide">
      <p className="kicker">For Participants</p>
      <h1>When something breaks</h1>
      <p className="lede">
        The long troubleshooting list is in the handbook. {EVENT.contactOrder} Do not send a password, an API key, or a CRN.
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
          <Link href="/account/">Account and tools</Link>
        </li>
        <li>
          <Link href="/facilitator/">Facilitator guide</Link>
        </li>
        <li>
          <a href={EVENT.discord} target="_blank" rel="noopener noreferrer external">
            Discord
            <span className="external-mark"> (external)</span>
          </a>
        </li>
        <li>
          <a href={`mailto:${EVENT.programEmail}`}>Kevin Robinson, {EVENT.programEmail}</a>
        </li>
        <li>
          <a href={QISKIT_APPROVED_SITE} target="_blank" rel="noopener noreferrer external">
            Qiskit-approved website
            <span className="external-mark"> (external)</span>
          </a>
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
