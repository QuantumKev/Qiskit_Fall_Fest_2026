"use client";

import Link from "next/link";
import { useState } from "react";
import { CopyBlock } from "@/components/CopyBlock";
import { useProgress } from "@/components/store";
import {
  CONNECT_CHECK,
  CONNECT_LOAD,
  CONNECT_SAVE,
  CREDENTIAL_ANALOGY,
  RESOURCE_ANALOGY,
  SAVE_WORDS,
} from "@/content/exercise1";
import { DOCS_CHECKED } from "@/content/intro";

const CHECKS = [
  "I submitted the registration form.",
  "I can sign in to IBM Quantum.",
  "I am on the Open Plan.",
  "I know the limit is 10 minutes of QPU time per 28-day window.",
  "The Bell lab will start on the simulator.",
];

function Placeholder({ caption }: { caption: string }) {
  return (
    <figure className="placeholder">
      <figcaption>Screenshot placeholder</figcaption>
      <p>
        {caption} The live IBM screen was not captured on {DOCS_CHECKED}. Follow the official page when a label differs.
      </p>
    </figure>
  );
}

export function ExerciseConnect() {
  const { mode, done, markDone } = useProgress();
  const [ack, setAck] = useState(false);
  const [boxes, setBoxes] = useState<boolean[]>(CHECKS.map(() => false));
  const complete = done.includes("exercise1-complete");
  const simulator = done.includes("exercise1-simulator");

  function toggleBox(index: number) {
    setBoxes((current) => current.map((item, itemIndex) => (itemIndex === index ? !item : item)));
  }

  return (
    <article className="stack guide">
      <p className="kicker">Exercise 1 · 30–40 min · before Composer and the Python lab</p>
      <h1>Get connected to IBM Quantum</h1>
      <p className="lede">
        Register, sign in to IBM Quantum on the Open Plan, and start the Bell lab on a simulator. Open Plan QPU time is 10 minutes per 28-day window. This workshop does not promise more minutes.
      </p>

      <section className="prose">
        <h2>Step 0. Workshop registration</h2>
        <p>Fill this out before the workshop when you can. The form asks for your IBM Cloud email and your experience. It does not ask for a password, an API key, a CRN, or a payment card.</p>
        <p>
          <Link className="button" href="/register">
            Open the registration form
          </Link>
        </p>
        <p>The form can be shared by link and by the QR code on that page. Responses stay with the organizers. There is no public spreadsheet.</p>
      </section>

      <section className="prose">
        <h2>Participant Step 1. Open IBM Quantum</h2>
        <ol>
          <li>Open the inbox for the email address on the registration form only if IBM sends a verification message.</li>
          <li>Check spam or junk for that verification message.</li>
          <li>Sign in at IBM Quantum with that email.</li>
        </ol>
        <details className="trouble">
          <summary>Verification email not received</summary>
          <p>Wait, check spam, and resend once. Do not create a second account yet.</p>
        </details>
        <details className="trouble">
          <summary>Wrong email</summary>
          <p>Tell the facilitator the address you can open today. Do not share a password.</p>
        </details>
        <details className="trouble">
          <summary>Existing IBMid on another email</summary>
          <p>Sign in with the email IBM already knows. Use IBM’s account recovery rather than a new signup.</p>
        </details>
        <details className="trouble">
          <summary>Cannot tell which IBM account is active</summary>
          <p>Read the account name in the header after you sign in. Use the Open Plan.</p>
        </details>
        <details className="trouble">
          <summary>Cannot see the Open Plan</summary>
          <p>Stay on the simulator for the Bell lab. Do not paste a CRN into chat while you sort out the account.</p>
        </details>
      </section>

      <section className="prose">
        <h2>Participant Step 2. Create or access an IBM Cloud account</h2>
        <p>
          Official pages: <a href="https://quantum.cloud.ibm.com/signin">sign in</a> and{" "}
          <a href="https://quantum.cloud.ibm.com/docs/en/guides/cloud-setup">cloud setup</a>. Checked {DOCS_CHECKED}.
        </p>
        <p>An IBMid is the login identity. IBM Cloud is the account that holds access. IBM Quantum Platform is where you open Composer, instances, and documentation. Use the Open Plan. It does not ask you for a credit card. Passwords stay in IBM’s own sign-in. QPU time on that plan is 10 minutes per 28-day window. This workshop does not promise more minutes.</p>
        <ol>
          <li>Open the sign-in page.</li>
          <li>Choose the IBMid or provider IBM offers for your email.</li>
          <li>Verify the email if IBM asks.</li>
          <li>Confirm the Open Plan is the plan you are on.</li>
          <li>Return to IBM Quantum Platform.</li>
        </ol>
        <Placeholder caption="Sign-in and the Open Plan." />
        <h3>Stop and check</h3>
        <ul>
          <li>I can sign in.</li>
          <li>The email is verified.</li>
          <li>The Open Plan is selected.</li>
          <li>The password was not shared.</li>
          <li>No payment information was entered.</li>
        </ul>
      </section>

      <section className="prose">
        <h2>Participant Step 3. Find the Open Plan instance</h2>
        <p>The Bell lab does not need this instance. Create or select an Open Plan instance only when you are ready for a later hardware job. Region us-east is the one the Fall Fest handbook names.</p>
        <ol>
          <li>Sign in to IBM Quantum Platform.</li>
          <li>Check the account and region selector in the header.</li>
          <li>Select the Open Plan.</li>
          <li>Open Instances.</li>
          <li>Find the Open Plan instance.</li>
          <li>Confirm it is active.</li>
          <li>Identify the instance name.</li>
          <li>Locate the CRN. Leave it out of the form and out of chat.</li>
          <li>Save the CRN privately only if a later hardware notebook needs it.</li>
        </ol>
        <Placeholder caption="Account switcher and the Instances list." />
        <p>An instance is the workspace for hardware jobs. A CRN is the unique address of that instance. A region is the geographic setting shown in the header. The simulator path does not use either.</p>
        <div className="table-wrap">
          <table>
            <caption>Resource organization only. This table is not a model of a qubit.</caption>
            <thead>
              <tr>
                <th>Idea</th>
                <th>Home Depot analogy</th>
              </tr>
            </thead>
            <tbody>
              {RESOURCE_ANALOGY.map((row) => (
                <tr key={row.concept}>
                  <td>{row.concept}</td>
                  <td>{row.analogy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="meta">The analogy ends here. It describes where a project lives. It does not describe superposition or entanglement.</p>
      </section>

      {mode === "facilitator" ? (
        <section className="facilitator prose">
          <h2>Facilitator appendix: create an instance</h2>
          <p>This appendix is not the Bell lab. Participants run that lab on the simulator.</p>
          <p>
            IBM’s current page: <a href="https://quantum.cloud.ibm.com/docs/en/guides/instances">Create and manage instances</a>. Recheck it the morning of the workshop. The page checked on {DOCS_CHECKED} says each plan and region needs its own instance, and instances outside the Open Plan can incur cost.
          </p>
          <p>Open a paid plan only with your eyes on the price. Do not ask the room to create one.</p>
        </section>
      ) : null}

      <section className="prose">
        <h2>Participant Step 4. Generate an API key</h2>
        <p>
          Follow <a href="https://quantum.cloud.ibm.com/docs/en/guides/initialize-account">Initialize your account</a>. An API key lets Python and qiskit-ibm-runtime authenticate. It is not the password. Copy it when IBM shows it. It may not be shown again.
        </p>
        <p>Never send the key to a facilitator, the form, chat, GitHub, a screenshot, or a shared notebook.</p>
        <div className="depot" role="note">
          <p className="kicker">Privacy screen</p>
          <p>Your API key belongs only to you. If you are sharing your screen, stop sharing before generating or copying it.</p>
        </div>
        <Placeholder caption="The API key screen. Do not photograph a real key." />
        <label className="complete">
          <input type="checkbox" checked={ack} onChange={() => setAck((value) => !value)} />
          I understand that I must never share or commit my API key.
        </label>
      </section>

      <section className="prose">
        <h2>Participant Step 5. Connect Qiskit on a trusted computer</h2>
        <p>
          Install <code>qiskit-ibm-runtime</code> in the same virtual environment as Qiskit. The import below was checked against qiskit-ibm-runtime {`0.50.0`} on {DOCS_CHECKED}, and it matches IBM’s{" "}
          <a href="https://quantum.cloud.ibm.com/docs/en/guides/save-credentials">save-credentials</a> page. The Bell lab itself stays on the local sampler and does not need this package.
        </p>
        <p>Use this cell only on a trusted personal computer. Replace the placeholders on your machine. Do not save the filled cell into git.</p>
        {ack ? <CopyBlock filename="Save the Open Plan account locally" source={CONNECT_SAVE} /> : <p>Check the privacy box above before the snippet is shown.</p>}
        <p>Later notebooks load the local label:</p>
        <CopyBlock filename="Load the saved name" source={CONNECT_LOAD} />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Word</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              {SAVE_WORDS.map((row) => (
                <tr key={row.word}>
                  <td>
                    <code>{row.word}</code>
                  </td>
                  <td>{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="depot">
          <p className="kicker">Home Depot analogy</p>
          <p>{CREDENTIAL_ANALOGY}</p>
        </aside>
      </section>

      <section className="prose">
        <h2>Shared or untrusted computers</h2>
        <p>
          On a university lab machine, a public notebook, a hosted environment, or a projected instructor computer, do not call <code>save_account()</code>. Follow{" "}
          <a href="https://quantum.cloud.ibm.com/docs/en/guides/cloud-setup-untrusted">IBM’s untrusted-environment guide</a>. Use the temporary credential workflow, and delete or rotate the API key after the session when that is appropriate.
        </p>
      </section>

      <section className="prose">
        <h2>Participant Step 6. Verify the connection</h2>
        <p>This cell checks the import, loads the saved name, and counts compute resources. It does not submit a QPU job. It prints an exception type, not the message, so a key is less likely to land in the output.</p>
        <CopyBlock filename="Verify without printing the key" source={CONNECT_CHECK} />
        <ul>
          <li>Connected: You are ready for the lab.</li>
          <li>Simulator ready: Use StatevectorSampler for the Bell lab. A hardware job spends Open Plan QPU time.</li>
          <li>Action needed: Check your account, region, instance, or API key.</li>
        </ul>
      </section>

      <section className="prose sheet">
        <h2>Completion checkpoint</h2>
        <p>Exercise 1 is complete when every line below is true. The Bell lab starts on the simulator either way.</p>
        {CHECKS.map((label, index) => (
          <label key={label} className="check-line">
            <input type="checkbox" checked={boxes[index]} onChange={() => toggleBox(index)} />
            {label}
          </label>
        ))}
        <p>
          <button type="button" className="button" onClick={() => markDone("exercise1-complete")} disabled={!boxes.every(Boolean)}>
            Unlock Exercise 2
          </button>
        </p>
        <p>
          <button type="button" onClick={() => markDone("exercise1-simulator")}>
            Continue with the simulator
          </button>
        </p>
        {complete ? <p className="verdict ok">Exercise 2 is unlocked.</p> : null}
        {simulator ? <p className="verdict ok">Simulator ready. The Bell lab uses StatevectorSampler.</p> : null}
        <p>
          <Link className="button" href="/intro/bell">
            Bell lab
          </Link>
        </p>
      </section>

      {mode === "facilitator" ? (
        <section className="facilitator prose">
          <h2>Facilitator notes</h2>
          <p>30–40 minutes. The room uses the Open Plan. The Bell lab starts on the simulator. Do not display a CRN or an API key. Do not promise more than 10 minutes of QPU time per 28 days.</p>
          <p>
            Statuses you can set by hand: Registered, Simulator first, Open Plan visible, Connection verified, Needs assistance.
          </p>
          <p>
            <Link href="/organizers">Open the organizer list</Link>
          </p>
        </section>
      ) : (
        <p className="meta">Switch to Facilitator in the header for the instance appendix and the organizer list.</p>
      )}
    </article>
  );
}
