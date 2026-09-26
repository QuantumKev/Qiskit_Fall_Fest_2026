"use client";

import { useEffect, useState } from "react";

type Row = {
  id: string;
  fullName: string;
  email: string;
  organization: string;
  role: string;
  session: string;
  status: string;
  followUp: boolean;
  liveWorkshop: boolean;
  needsAccountHelp: string;
};

const TOKEN_KEY = "qff-organizer-token";

export function OrganizerDashboard() {
  const [token, setToken] = useState("");
  const [rows, setRows] = useState<Row[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [message, setMessage] = useState("Enter the organizer token. It stays in this browser tab.");

  useEffect(() => {
    const saved = sessionStorage.getItem(TOKEN_KEY);
    if (saved) setToken(saved);
  }, []);

  async function load(nextToken = token) {
    const response = await fetch("/api/register", {
      headers: { authorization: `Bearer ${nextToken}` },
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      setMessage(body.error || "The list could not be opened.");
      setRows([]);
      return;
    }
    sessionStorage.setItem(TOKEN_KEY, nextToken);
    setRows(body.registrations || []);
    setStatuses(body.statuses || []);
    setMessage(`${(body.registrations || []).length} responses. API keys are not stored.`);
  }

  async function setStatus(id: string, status: string) {
    const response = await fetch("/api/register", {
      method: "PATCH",
      headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (!response.ok) {
      setMessage("The status was not saved.");
      return;
    }
    setRows((current) => current.map((row) => (row.id === id ? { ...row, status } : row)));
  }

  function copyEmails() {
    const emails = Array.from(new Set(rows.map((row) => row.email))).join("\n");
    void navigator.clipboard.writeText(emails);
    setMessage("Email addresses copied, one per line.");
  }

  function copyAttendance() {
    const header = "name,email,organization,role,session,status";
    const lines = rows.map((row) =>
      [row.fullName, row.email, row.organization, row.role, row.session, row.status]
        .map((value) => `"${String(value).replaceAll('"', '""')}"`)
        .join(","),
    );
    void navigator.clipboard.writeText([header, ...lines].join("\n"));
    setMessage("Attendance list copied for university leads. It has no API keys.");
  }

  return (
    <div className="stack">
      <form
        className="survey"
        onSubmit={(event) => {
          event.preventDefault();
          void load();
        }}
      >
        <label>
          Organizer token
          <input type="password" value={token} onChange={(event) => setToken(event.target.value)} autoComplete="current-password" />
        </label>
        <button className="button" type="submit">
          Open the private list
        </button>
      </form>
      <p role="status">{message}</p>
      {rows.length ? (
        <>
          <p>
            <button type="button" onClick={copyEmails}>
              Copy emails for IBM
            </button>{" "}
            <button type="button" onClick={copyAttendance}>
              Copy attendance list
            </button>
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Organization</th>
                  <th>Session</th>
                  <th>Help</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.fullName}</td>
                    <td>{row.email}</td>
                    <td>{row.organization}</td>
                    <td>{row.session}</td>
                    <td>{row.needsAccountHelp}</td>
                    <td>
                      <select value={row.status} onChange={(event) => void setStatus(row.id, event.target.value)} aria-label={`Status for ${row.fullName}`}>
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : null}
    </div>
  );
}
