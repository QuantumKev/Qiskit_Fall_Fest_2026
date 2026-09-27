import Link from "next/link";
import { EVENT, QISKIT_APPROVED_SITE } from "@/content/event";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Support", "/support/");

const STEPS = [
  {
    title: "Account or region",
    body: `What may have happened: the header is on a region other than ${EVENT.region}, so the instance list looks empty. Open Plan instances are created there. The Open Plan is ${EVENT.openPlan}. Switch the region before you create a second account. Ask a facilitator if the list is still empty. Simulators first, so you can keep learning while the account is sorted out.`,
  },
  {
    title: "If you cannot sign in",
    body: `${EVENT.facilitatorDefined} ${EVENT.stuckLogin} You can keep learning from the projected demonstration and the Bell lab on the simulator.`,
  },
  {
    title: "Who to ask",
    body: EVENT.contactOrder,
  },
  {
    title: "API key",
    body: "What may have happened: a key was pasted into chat or git. This site never asks for the key. Revoke it in the IBM dashboard and create a replacement. Tell a facilitator without sending the key itself. The simulator lab does not need one, so you can keep going.",
  },
  {
    title: "Qiskit import",
    body: `What may have happened: Jupyter is using a different Python than the one where Qiskit was installed. Activate the virtual environment, then start Jupyter from that same shell. The Bell lab pins ${EVENT.qiskitPin}. Ask in Discord with the error text, not a key. Composer in the browser is available while the kernel is fixed.`,
  },
  {
    title: "An older tutorial",
    body: "What may have happened: the tutorial uses IBMQ.load_account(), execute(), qiskit.Aer, or channel=\"ibm_quantum\". Those are not the current API. Use the handbook examples instead. Discord can help if you paste the error text and leave out any API key. You can keep learning from the Bell lab while you compare the two.",
  },
];

export default function SupportPage() {
  return (
    <div className="stack guide">
      <p className="kicker">For Participants</p>
      <h1>When a step needs a hand</h1>
      <p className="lede">
        Unexpected results are normal. The longer list is in the handbook. Each note says what may have happened, one or two things to try, and where to ask. You can keep learning while it is resolved. {EVENT.contactOrder} Please leave passwords, API keys, and CRNs out of the message.
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
