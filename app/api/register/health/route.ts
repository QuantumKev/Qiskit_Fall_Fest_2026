import { NextResponse } from "next/server";
import { organizerConfigured } from "@/lib/registration.mjs";

export async function GET() {
  return NextResponse.json({ configured: organizerConfigured() });
}
