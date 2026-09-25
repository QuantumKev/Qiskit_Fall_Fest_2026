import { randomUUID, timingSafeEqual } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";

export const STATUSES = [
  "Registered",
  "Waiting for Classroom Invitation",
  "Invitation sent",
  "Invitation accepted",
  "Instance visible",
  "Connection verified",
  "Needs assistance",
];

export const ROLES = ["student", "faculty", "professional", "community"];
export const LEVELS = ["none", "beginner", "intermediate", "advanced"];
export const YES_NO = ["yes", "no"];

const FIELDS = [
  "fullName",
  "email",
  "organization",
  "role",
  "field",
  "pythonExperience",
  "qiskitExperience",
  "hasIbmAccount",
  "needsAccountHelp",
  "session",
  "followUp",
  "codeOfConduct",
  "noSecrets",
  "liveWorkshop",
];

const SECRET_PATTERNS = [
  /crn:v1/i,
  /api[_-]?key/i,
  /bearer\s+/i,
  /ibm_quantum/i,
  /password/i,
  /-----BEGIN/,
  /\bsk-[A-Za-z0-9]/,
  /<YOUR_/i,
];

export function looksSecret(value) {
  if (typeof value !== "string") return false;
  if (SECRET_PATTERNS.some((pattern) => pattern.test(value))) return true;
  return /^[A-Za-z0-9_\-]{40,}$/.test(value.trim());
}

function cleanText(value, max) {
  if (typeof value !== "string") return null;
  const text = value.trim().replace(/\s+/g, " ");
  if (text.length > max) return null;
  if (looksSecret(text)) return null;
  return text;
}

export function validateRegistration(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, error: "Send the registration fields only." };
  }
  const extra = Object.keys(input).filter((key) => !FIELDS.includes(key));
  if (extra.length) {
    return { ok: false, error: "That form included a field this workshop does not collect." };
  }

  const fullName = cleanText(input.fullName, 120);
  const email = cleanText(input.email, 160);
  const organization = cleanText(input.organization, 160);
  const field = input.field === undefined || input.field === "" ? "" : cleanText(input.field, 160);
  const session = cleanText(input.session, 120);

  if (!fullName || fullName.length < 2) return { ok: false, error: "Enter the name you use in the workshop." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Enter the email address you will use with IBM Cloud." };
  }
  if (!organization || organization.length < 2) {
    return { ok: false, error: "Enter a university or organization." };
  }
  if (!ROLES.includes(input.role)) return { ok: false, error: "Choose a participant status." };
  if (field === null) return { ok: false, error: "Shorten the degree or field, and leave credentials out of it." };
  if (!LEVELS.includes(input.pythonExperience) || !LEVELS.includes(input.qiskitExperience)) {
    return { ok: false, error: "Choose a Python level and a Qiskit level." };
  }
  if (!YES_NO.includes(input.hasIbmAccount) || !YES_NO.includes(input.needsAccountHelp)) {
    return { ok: false, error: "Answer both IBM account questions." };
  }
  if (!session) return { ok: false, error: "Enter the workshop session your facilitator named." };
  if (input.followUp !== true && input.followUp !== false) {
    return { ok: false, error: "Choose whether Fall Fest may send follow-up information." };
  }
  if (input.codeOfConduct !== true) {
    return { ok: false, error: "Agree to the event code of conduct before submitting." };
  }
  if (input.noSecrets !== true) {
    return { ok: false, error: "Confirm that API keys and passwords stay out of this form." };
  }
  if (input.liveWorkshop !== true && input.liveWorkshop !== false) {
    return { ok: false, error: "Say whether you are registering during the live workshop." };
  }

  return {
    ok: true,
    value: {
      fullName,
      email: email.toLowerCase(),
      organization,
      role: input.role,
      field,
      pythonExperience: input.pythonExperience,
      qiskitExperience: input.qiskitExperience,
      hasIbmAccount: input.hasIbmAccount,
      needsAccountHelp: input.needsAccountHelp,
      session,
      followUp: input.followUp,
      codeOfConduct: true,
      noSecrets: true,
      liveWorkshop: input.liveWorkshop,
    },
  };
}

export function storePath(root = process.cwd()) {
  return path.join(root, "data", "registrations.json");
}

export function readRegistrations(file = storePath()) {
  if (!existsSync(file)) return [];
  const parsed = JSON.parse(readFileSync(file, "utf8"));
  if (!Array.isArray(parsed)) return [];
  return parsed;
}

export function writeRegistrations(records, file = storePath()) {
  mkdirSync(path.dirname(file), { recursive: true });
  const temporary = `${file}.tmp`;
  writeFileSync(temporary, JSON.stringify(records, null, 2));
  renameSync(temporary, file);
}

export function upsertRegistration(value, records) {
  const now = new Date().toISOString();
  const status = value.liveWorkshop ? "Waiting for Classroom Invitation" : "Registered";
  const existing = records.find((item) => item.email === value.email);
  if (existing) {
    return records.map((item) =>
      item.email === value.email
        ? { ...item, ...value, updatedAt: now, status: item.status || status }
        : item,
    );
  }
  return [
    ...records,
    {
      id: randomUUID(),
      createdAt: now,
      updatedAt: now,
      status,
      ...value,
    },
  ];
}

export function updateStatus(records, id, status) {
  if (!STATUSES.includes(status)) return null;
  let found = false;
  const next = records.map((item) => {
    if (item.id !== id) return item;
    found = true;
    return { ...item, status, updatedAt: new Date().toISOString() };
  });
  return found ? next : null;
}

export function organizerConfigured(env = process.env) {
  return typeof env.ORGANIZER_TOKEN === "string" && env.ORGANIZER_TOKEN.length >= 20;
}

export function tokenMatches(provided, expected) {
  if (!organizerConfigured({ ORGANIZER_TOKEN: expected })) return false;
  if (typeof provided !== "string" || provided.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(provided), Buffer.from(expected));
}

export function bearerToken(header) {
  if (typeof header !== "string") return "";
  const match = header.match(/^Bearer\s+(.+)$/);
  return match ? match[1].trim() : "";
}
