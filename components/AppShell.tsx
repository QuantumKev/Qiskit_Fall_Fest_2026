"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { EVENT, HANDBOOK_BLOB } from "@/content/event";
import { JOURNEY } from "@/content/onboarding";
import { ProgressProvider, useProgress } from "@/components/store";

const NAV = [
  { href: "/", label: "Start" },
  { href: "/handbook/", label: "Handbook" },
  { href: "/roles/", label: "Domain" },
  { href: "/resources/", label: "Resources" },
  { href: "/support/", label: "Support" },
  { href: "/register/", label: "Register" },
];

function Header() {
  const pathname = usePathname();
  const { mode, setMode, done } = useProgress();
  const complete = JOURNEY.filter((item) => done.includes(item.slug)).length;
  const ratio = JOURNEY.length === 0 ? 0 : Math.round((complete / JOURNEY.length) * 100);

  return (
    <header className="site-header">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="header-row">
        <Link href="/" className="wordmark">
          <span>QFF</span>
          {EVENT.name}
        </Link>
        <nav className="header-nav" aria-label="Primary">
          {NAV.map((item) => {
            const current = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.replace(/\/$/, ""));
            return (
              <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
          <Link href="/glossary/" aria-current={pathname.startsWith("/glossary") ? "page" : undefined}>
            Glossary
          </Link>
          {mode === "facilitator" ? (
            <Link href="/organizers/" aria-current={pathname.startsWith("/organizers") ? "page" : undefined}>
              Organizers
            </Link>
          ) : null}
        </nav>
        <div className="header-tools">
          <p className="progress-pill">
            <span className="progress-track" aria-hidden="true">
              <span style={{ width: `${ratio}%` }} />
            </span>
            {complete}/{JOURNEY.length} done
          </p>
          <div className="mode-switch" role="group" aria-label="Workshop mode">
            <button type="button" aria-pressed={mode === "participant"} onClick={() => setMode("participant")}>
              Participant
            </button>
            <button type="button" aria-pressed={mode === "facilitator"} onClick={() => setMode("facilitator")}>
              Facilitator
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>{EVENT.name}</p>
      <nav aria-label="Footer">
        <Link href="/handbook/">Participant handbook</Link>
        <a href={HANDBOOK_BLOB} target="_blank" rel="noopener noreferrer external">
          Handbook Markdown on GitHub
          <span className="external-mark"> (external)</span>
        </a>
        <a href={EVENT.discord} target="_blank" rel="noopener noreferrer external">
          Discord
          <span className="external-mark"> (external)</span>
        </a>
        <a href={`mailto:${EVENT.email}`}>{EVENT.email}</a>
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
