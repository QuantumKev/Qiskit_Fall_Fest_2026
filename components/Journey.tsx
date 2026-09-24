"use client";

import Link from "next/link";
import { LAST_VERIFIED, MODULES } from "@/content/modules";
import { useProgress } from "@/components/store";

export function Journey() {
  const { done } = useProgress();
  const next = MODULES.find((item) => !done.includes(item.slug)) ?? null;
  const minutes = MODULES.reduce((sum, item) => sum + item.minutes, 0);

  return (
    <div className="stack">
      <p className="kicker">Florida Quantum Readiness Challenge</p>
      <h1>Enter the quantum ecosystem.</h1>
      <p className="lede">
        A guided onboarding for Qiskit Fall Fest. You will learn the words, open IBM Quantum,
        build one Bell circuit, and leave with a next step. This is not a race to a quantum-advantage claim.
      </p>
      <p className="meta">
        About {minutes} minutes across {MODULES.length} modules. IBM screens last checked {LAST_VERIFIED}.
      </p>

      <section className="next-card" aria-labelledby="next-heading">
        <p className="kicker" id="next-heading">
          What should I do next?
        </p>
        {next ? (
          <>
            <h2>
              {next.number} {next.title}
            </h2>
            <p>{next.summary}</p>
            <Link className="button" href={`/learn/${next.slug}`}>
              Continue · {next.minutes} min
            </Link>
          </>
        ) : (
          <>
            <h2>You finished the checklist.</h2>
            <p>Open the last module and write the link, the practice task, and the thing you can show.</p>
            <Link className="button" href="/learn/pathway">
              Review your pathway
            </Link>
          </>
        )}
      </section>

      <ol className="module-list">
        {MODULES.map((item) => {
          const complete = done.includes(item.slug);
          return (
            <li key={item.slug}>
              <Link href={`/learn/${item.slug}`}>
                <span className="module-index">{item.number}</span>
                <span>
                  <strong>{item.title}</strong>
                  <span className="meta">
                    {item.minutes} min · {item.summary}
                  </span>
                </span>
                <span className={complete ? "status done" : "status"}>{complete ? "Done" : "Open"}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
