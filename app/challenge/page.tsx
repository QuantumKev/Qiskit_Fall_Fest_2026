import { ClientRedirect } from "@/components/ClientRedirect";

export const metadata = { title: "Submission · Qiskit Fall Fest" };

export default function ChallengeRedirect() {
  return <ClientRedirect href="/submit/" />;
}
