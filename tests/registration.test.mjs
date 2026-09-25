import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  looksSecret,
  organizerConfigured,
  readRegistrations,
  tokenMatches,
  upsertRegistration,
  updateStatus,
  validateRegistration,
  writeRegistrations,
} from "../lib/registration.mjs";

const valid = {
  fullName: "Ada Lovelace",
  email: "ada@example.edu",
  organization: "Example University",
  role: "student",
  field: "Physics",
  pythonExperience: "none",
  qiskitExperience: "none",
  hasIbmAccount: "no",
  needsAccountHelp: "yes",
  session: "Morning",
  followUp: true,
  codeOfConduct: true,
  noSecrets: true,
  liveWorkshop: false,
};

test("a complete registration is accepted", () => {
  const parsed = validateRegistration(valid);
  assert.equal(parsed.ok, true);
});

test("secrets are refused and not described back", () => {
  assert.equal(looksSecret("crn:v1:bluemix:public:quantum-computing:us-east:a/b:c::"), true);
  assert.equal(looksSecret("A".repeat(44)), true);
  const parsed = validateRegistration({ ...valid, field: "crn:v1:secret" });
  assert.equal(parsed.ok, false);
  assert.equal(JSON.stringify(parsed).includes("crn:v1"), false);
});

test("the form rejects a password field", () => {
  const parsed = validateRegistration({ ...valid, password: "nope" });
  assert.equal(parsed.ok, false);
});

test("live registration sets the waiting status", () => {
  const parsed = validateRegistration({ ...valid, liveWorkshop: true });
  assert.equal(parsed.ok, true);
  const records = upsertRegistration(parsed.value, []);
  assert.equal(records[0].status, "Simulator first");
  const updated = updateStatus(records, records[0].id, "Connection verified");
  assert.equal(updated[0].status, "Connection verified");
});

test("the store file round-trips outside the repo", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "qff-reg-"));
  const file = path.join(dir, "registrations.json");
  const parsed = validateRegistration(valid);
  writeRegistrations(upsertRegistration(parsed.value, []), file);
  const rows = readRegistrations(file);
  assert.equal(rows[0].email, "ada@example.edu");
  assert.equal(JSON.stringify(rows).includes("api"), false);
});

test("a short organizer token does not count as configured", () => {
  assert.equal(organizerConfigured({ ORGANIZER_TOKEN: "short" }), false);
  assert.equal(tokenMatches("short", "short"), false);
  const token = "workshop-organizer-token";
  assert.equal(tokenMatches(token, token), true);
  assert.equal(tokenMatches("workshop-organizer-tokex", token), false);
});
