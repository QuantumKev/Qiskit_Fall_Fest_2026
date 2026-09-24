import type { Metadata } from "next";
import { IBM_Plex_Mono, Syne } from "next/font/google";
import { AppShell } from "@/components/AppShell";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex" });

export const metadata: Metadata = {
  title: "Qiskit Fall Fest 2026",
  description: "Guided Qiskit onboarding for the Florida Quantum Readiness Challenge and Qiskit Fall Fest.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${plex.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
