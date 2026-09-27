"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CO_LEAD_SENTENCE, CO_LEADS, EVENT, QISKIT_APPROVED_SITE } from "@/content/event";
import { JOURNEY } from "@/content/onboarding";
import { ProgressProvider, useProgress } from "@/components/store";

const AUDIENCE = [
  { href: "/", label: "For Participants" },
  { href: "/facilitator/", label: "For Facilitators and Local Hosts" },
];

const NAV = [
  { href: "/handbook/", label: "Handbook" },
  { href: "/roles/", label: "Pathways" },
  { href: "/resources/", label: "Resources" },
  { href: "/support/", label: "Support" },
  { href: "/register/", label: "Register" },
];

function Header() {
  const pathname = usePathname();
  const { done } = useProgress();
  const complete = JOURNEY.filter((item) => done.includes(item.slug)).length;
  const ratio = JOURNEY.length === 0 ? 0 : Math.round((complete / JOURNEY.length) * 100);

  return (
    <header className="site-header">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="header-row">
        <Link href="/" className="wordmark">
          <span aria-hidden="true">QFF</span>
          {EVENT.name}
        </Link>
        <nav className="audience-nav" aria-label="Audience">
          {AUDIENCE.map((item) => {
            const current = item.href === "/" ? pathname === "/" : pathname.startsWith("/facilitator");
            return (
              <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <nav className="header-nav" aria-label="Primary">
          {NAV.map((item) => {
            const current = pathname.startsWith(item.href.replace(/\/$/, ""));
            return (
              <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
          <Link href="/glossary/" aria-current={pathname.startsWith("/glossary") ? "page" : undefined}>
            Glossary
          </Link>
        </nav>
        <div className="header-tools">
          <p className="progress-pill">
            <span className="progress-track" aria-hidden="true">
              <span style={{ width: `${ratio}%` }} />
            </span>
            {complete}/{JOURNEY.length} done
          </p>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>{EVENT.name}</p>
      <p>{CO_LEAD_SENTENCE}</p>
      <nav aria-label="Footer">
        <Link href="/">For Participants</Link>
        <Link href="/facilitator/">For Facilitators and Local Hosts</Link>
        <Link href="/handbook/">Participant handbook</Link>
        <Link href="/roles/">Domain/Industry Expert</Link>
        <Link href="/catalog/">Notebook catalog</Link>
        <a href={EVENT.discord} target="_blank" rel="noopener noreferrer external">
          Discord
          <span className="external-mark"> (external)</span>
        </a>
        <a href={QISKIT_APPROVED_SITE} target="_blank" rel="noopener noreferrer external">
          Qiskit-approved website
          <span className="external-mark"> (external)</span>
        </a>
        {CO_LEADS.map((lead) =>
          lead.email ? (
            <a key={lead.email} href={`mailto:${lead.email}`}>
              {lead.name}, {lead.email}
            </a>
          ) : null,
        )}
        <Link href="/support/">Support</Link>
      </nav>
    </footer>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider>
      <Header />
      <main id="content" className="site-main">
        {children}
      </main>
      <Footer />
    </ProgressProvider>
  );
}
