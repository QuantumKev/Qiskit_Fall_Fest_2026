"use client";

import { FormEvent, useEffect, useState } from "react";
import { withBase } from "@/lib/base-path";

const EMPTY = {
  fullName: "",
  email: "",
  organization: "",
  role: "",
  field: "",
  pythonExperience: "",
  qiskitExperience: "",
  hasIbmAccount: "",
  needsAccountHelp: "",
  session: "",
  followUp: "",
  codeOfConduct: false,
  noSecrets: false,
  liveWorkshop: false,
};

export function RegisterForm() {
  const [form, setForm] = useState(EMPTY);
  const [configured, setConfigured] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");
  const [ok, setOk] = useState(false);

  useEffect(() => {
    fetch(withBase("/api/register/health"))
      .then((response) => response.json())
      .then((body) => setConfigured(Boolean(body.configured)))
      .catch(() => setConfigured(false));
  }, []);

  function set<K extends keyof typeof EMPTY>(key: K, value: (typeof EMPTY)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setMessage("");
    setOk(false);
    const response = await fetch(withBase("/api/register"), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...form,
        followUp: form.followUp === "yes",
        role: form.role,
        pythonExperience: form.pythonExperience,
        qiskitExperience: form.qiskitExperience,
        hasIbmAccount: form.hasIbmAccount,
        needsAccountHelp: form.needsAccountHelp,
      }),
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      setMessage(body.error || "The form could not be submitted.");
      return;
    }
    setOk(true);
    setMessage(
      body.status === "Simulator first"
        ? "Saved. Your status is Simulator first. The Bell lab uses the local simulator. Open Plan QPU time is 10 minutes per 28-day window."
        : "Saved. The organizers can see this response. They cannot see an API key, because this form never asked for one.",
    );
  }

  return (
    <form className="survey" onSubmit={submit}>
      {configured === false ? (
        <p className="verdict">This form is ready to read. Saving a response waits until the organizer adds a private token on the server. You can still create your IBM Quantum account in the meantime, and you can tell a facilitator you are coming.</p>
      ) : null}
      <label>
        Full name
        <input value={form.fullName} onChange={(event) => set("fullName", event.target.value)} autoComplete="name" required />
      </label>
      <label>
        Email address you will use with IBM Cloud
        <input value={form.email} onChange={(event) => set("email", event.target.value)} type="email" autoComplete="email" required />
      </label>
      <label>
        University or organization
        <input value={form.organization} onChange={(event) => set("organization", event.target.value)} required />
      </label>
      <label>
        Status
        <select value={form.role} onChange={(event) => set("role", event.target.value)} required>
          <option value="">Choose one</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="professional">Professional</option>
          <option value="community">Community member</option>
        </select>
      </label>
      <label>
        Degree program or professional field, optional
        <input value={form.field} onChange={(event) => set("field", event.target.value)} />
      </label>
      <label>
        Previous Python experience
        <select value={form.pythonExperience} onChange={(event) => set("pythonExperience", event.target.value)} required>
          <option value="">Choose one</option>
          <option value="none">None</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>
      <label>
        Previous Qiskit experience
        <select value={form.qiskitExperience} onChange={(event) => set("qiskitExperience", event.target.value)} required>
          <option value="">Choose one</option>
          <option value="none">None</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>
      <label>
        Do you already have an IBM Cloud account?
        <select value={form.hasIbmAccount} onChange={(event) => set("hasIbmAccount", event.target.value)} required>
          <option value="">Choose one</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label>
        Do you need help creating an account?
        <select value={form.needsAccountHelp} onChange={(event) => set("needsAccountHelp", event.target.value)} required>
          <option value="">Choose one</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label>
        Which workshop session are you attending?
        <input value={form.session} onChange={(event) => set("session", event.target.value)} placeholder="Use the session name the facilitator gave you" required />
      </label>
      <label>
        May Fall Fest send follow-up information to this email?
        <select value={form.followUp} onChange={(event) => set("followUp", event.target.value)} required>
          <option value="">Choose one</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label className="check-line">
        <input type="checkbox" checked={form.codeOfConduct} onChange={(event) => set("codeOfConduct", event.target.checked)} />
        I agree to follow the event code of conduct as stated by the organizers.
      </label>
      <label className="check-line">
        <input type="checkbox" checked={form.noSecrets} onChange={(event) => set("noSecrets", event.target.checked)} />
        I understand that API keys and passwords must never be submitted through this form.
      </label>
      <label className="check-line">
        <input type="checkbox" checked={form.liveWorkshop} onChange={(event) => set("liveWorkshop", event.target.checked)} />
        I am registering during the live workshop.
      </label>
      <button className="button" type="submit">
        Submit registration
      </button>
      {message ? <p className={ok ? "verdict ok" : "verdict"} role="status">{message}</p> : null}
    </form>
  );
}
