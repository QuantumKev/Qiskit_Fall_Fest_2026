import { NextResponse } from "next/server";
import {
  STATUSES,
  bearerToken,
  organizerConfigured,
  readRegistrations,
  tokenMatches,
  updateStatus,
  upsertRegistration,
  validateRegistration,
  writeRegistrations,
} from "@/lib/registration.mjs";

function authorized(request: Request) {
  const expected = process.env.ORGANIZER_TOKEN;
  return tokenMatches(bearerToken(request.headers.get("authorization")), expected);
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Organizer sign-in required." }, { status: 401 });
  }
  try {
    return NextResponse.json({ registrations: readRegistrations(), statuses: STATUSES });
  } catch {
    return NextResponse.json({ error: "The registration file could not be read." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!organizerConfigured()) {
    return NextResponse.json(
      { error: "The organizer store is not configured. This form is not saving responses." },
      { status: 503 },
    );
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Send the form as JSON." }, { status: 400 });
  }
  const parsed = validateRegistration(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }
  try {
    const records = readRegistrations();
    const next = upsertRegistration(parsed.value, records);
    writeRegistrations(next);
    const saved = next.find((item) => item.email === parsed.value.email);
    return NextResponse.json({ id: saved?.id, status: saved?.status });
  } catch {
    return NextResponse.json({ error: "The response could not be stored." }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Organizer sign-in required." }, { status: 401 });
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Send the update as JSON." }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Send an id and a status." }, { status: 400 });
  }
  const { id, status } = body as { id?: unknown; status?: unknown };
  if (typeof id !== "string" || typeof status !== "string") {
    return NextResponse.json({ error: "Send an id and a status." }, { status: 400 });
  }
  const next = updateStatus(readRegistrations(), id, status);
  if (!next) {
    return NextResponse.json({ error: "That registration or status was not found." }, { status: 400 });
  }
  writeRegistrations(next);
  return NextResponse.json({ ok: true });
}
