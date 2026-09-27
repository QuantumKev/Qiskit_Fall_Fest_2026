import type { Metadata } from "next";
import { IBM_Plex_Mono, Syne } from "next/font/google";
import { AppShell } from "@/components/AppShell";
import { EVENT, absoluteUrl, eventJsonLd } from "@/content/event";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex" });

const socialImage = {
  url: absoluteUrl("/brand/og-qiskit.png"),
  width: 816,
  height: 324,
  alt: "Qiskit wordmark from the Qiskit Fall Fest 2026 materials",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://quantumkev.github.io"),
  title: {
    default: EVENT.seoTitle,
    template: `%s · ${EVENT.name}`,
  },
  description: EVENT.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: EVENT.seoTitle,
    description: EVENT.description,
    url: absoluteUrl("/"),
    siteName: EVENT.name,
    type: "website",
    locale: "en_US",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: EVENT.seoTitle,
    description: EVENT.description,
    images: [socialImage.url],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${plex.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd()) }} />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
