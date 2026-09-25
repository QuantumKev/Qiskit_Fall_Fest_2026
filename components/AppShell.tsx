"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MODULES } from "@/content/modules";
import { ProgressProvider, useProgress } from "@/components/store";

function Header() {
  const pathname = usePathname();
  const { mode, setMode, done } = useProgress();
  const complete = MODULES.filter((item) => done.includes(item.slug)).length;

  return (
    <header className="site-header">
      <div className="header-row">
        <Link href="/" className="wordmark">
          <span>QFF</span>
          Fall Fest 2026
        </Link>
        <nav className="header-nav" aria-label="Primary">
          <Link href="/register" aria-current={pathname === "/register" ? "page" : undefined}>
            Register
          </Link>
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
            Journey
          </Link>
          <Link href="/intro" aria-current={pathname.startsWith("/intro") ? "page" : undefined}>
            Intro
          </Link>
          <Link href="/glossary" aria-current={pathname === "/glossary" ? "page" : undefined}>
            Glossary
          </Link>
          <Link href="/sources" aria-current={pathname === "/sources" ? "page" : undefined}>
            Sources
          </Link>
          {mode === "facilitator" ? (
            <Link href="/organizers" aria-current={pathname === "/organizers" ? "page" : undefined}>
              Organizers
            </Link>
          ) : null}
        </nav>
        <div className="header-tools">
          <p className="progress-pill">
            {complete}/{MODULES.length} done
          </p>
          <div className="mode-switch" role="group" aria-label="Workshop mode">
            <button
              type="button"
              aria-pressed={mode === "participant"}
              onClick={() => setMode("participant")}
            >
              Participant
            </button>
            <button
              type="button"
              aria-pressed={mode === "facilitator"}
              onClick={() => setMode("facilitator")}
            >
              Facilitator
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider>
      <Header />
      <main className="site-main">{children}</main>
    </ProgressProvider>
  );
}
