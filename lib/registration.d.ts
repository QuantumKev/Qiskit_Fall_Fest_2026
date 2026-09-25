declare module "@/lib/registration.mjs" {
  export const STATUSES: string[];
  export function looksSecret(value: unknown): boolean;
  export function validateRegistration(input: unknown):
    | { ok: true; value: Record<string, unknown> }
    | { ok: false; error: string };
  export function readRegistrations(): RegistrationRecord[];
  export function writeRegistrations(records: RegistrationRecord[]): void;
  export function upsertRegistration(value: Record<string, unknown>, records: RegistrationRecord[]): RegistrationRecord[];
  export function updateStatus(records: RegistrationRecord[], id: string, status: string): RegistrationRecord[] | null;
  export function organizerConfigured(env?: NodeJS.ProcessEnv): boolean;
  export function tokenMatches(provided: string, expected: string | undefined): boolean;
  export function bearerToken(header: string | null): string;
}

export type RegistrationRecord = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  fullName: string;
  email: string;
  organization: string;
  role: string;
  field: string;
  session: string;
  pythonExperience: string;
  qiskitExperience: string;
  hasIbmAccount: string;
  needsAccountHelp: string;
  followUp: boolean;
  liveWorkshop: boolean;
};
