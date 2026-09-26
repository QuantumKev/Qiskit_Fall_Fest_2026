import type { Metadata } from "next";
import { IBM_Plex_Mono, Syne } from "next/font/google";
import { AppShell } from "@/components/AppShell";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex" });

export const metadata: Metadata = {
  title: "Qiskit Fall Fest South Florida 2026",
  description: "Participant guide for Qiskit Fall Fest South Florida 2026. One Bell state, a classical baseline, and an honest project frame.",
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
