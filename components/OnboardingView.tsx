"use client";

import Link from "next/link";
import { useState } from "react";
import { CopyBlock } from "@/components/CopyBlock";
import { useProgress } from "@/components/store";
import { JOURNEY, type Check, type StepPage } from "@/content/onboarding";

function CheckCard({ check }: { check: Check }) {
  const [picked, setPicked] = useState<number | null>(null);
  const correct = picked === check.answer;

  return (
    <fieldset className="check">
      <legend>{check.question}</legend>
      <div className="check-options">
        {check.options.map((option, index) => (
          <label key={option}>
            <input
              type="radio"
              name={check.question}
              checked={picked === index}
              onChange={() => setPicked(index)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <p className={picked === null ? "verdict" : correct ? "verdict ok" : "verdict bad"} role="status" aria-live="polite">
        {picked === null ? "Choose one answer." : correct ? `That matches the page. ${check.why}` : `Try the other reading. ${check.why}`}
      </p>
    </fieldset>
  );
}

export function OnboardingView({ page }: { page: StepPage }) {
  const { done, toggleDone } = useProgress();
  const complete = done.includes(page.slug);

  return (
    <article className="stack guide">
      <p className="kicker">
        Step {page.number} of {JOURNEY.length} · {page.minutes} min
      </p>
      <h1>{page.title}</h1>
      <p className="lede">{page.purpose}</p>
      {page.slug === "start" ? (
        <nav className="phase-rail" aria-label="Sections">
          <ol>
            {JOURNEY.map((item) => (
              <li key={item.slug}>
                <Link href={item.href} aria-current={item.slug === page.slug ? "page" : undefined}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      {page.sections.map((section) => (
        <section key={section.heading} className="prose">
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.steps ? (
            <ol>
              {section.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          ) : null}
          {section.troubles?.map((trouble) => (
            <details key={trouble.title} className="trouble">
              <summary>{trouble.title}</summary>
              <p>{trouble.body}</p>
            </details>
          ))}
        </section>
      ))}

      {page.table ? (
        <section className="prose">
          <h2>{page.table.caption}</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  {page.table.headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {page.table.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {page.code ? <CopyBlock filename={page.code.filename} source={page.code.source} /> : null}

      {page.structureAnalogy ? (
        <section className="prose">
          <h2>Software structure</h2>
          <p>The technical definition is in the first column. One Home Depot line sits beside it. This analogy stops at these programming words.</p>
          <div className="table-wrap">
            <table>
              <caption>Software structure</caption>
              <thead>
                <tr>
                  <th>Word</th>
                  <th>Technical definition</th>
                  <th>Home Depot</th>
                </tr>
              </thead>
              <tbody>
                {page.structureAnalogy.map((row) => (
                  <tr key={row.concept}>
                    <td>{row.concept}</td>
                    <td>{row.technical}</td>
                    <td>{row.analogy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {page.links ? (
        <ul>
          {page.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      ) : null}

      {page.slug === "start" ? (
        <ol className="module-list">
          {JOURNEY.map((item) => (
            <li key={item.slug}>
              <Link href={item.href}>
                <span className="module-index">{item.number}</span>
                <span>
                  <strong>{item.title}</strong>
                  <span className="meta">{item.minutes} min</span>
                </span>
                <span className={done.includes(item.slug) ? "status done" : "status"}>
                  {done.includes(item.slug) ? "Done" : "Open"}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      ) : null}

      <CheckCard check={page.check} />

      <div className="page-actions">
        <label className="complete">
          <input type="checkbox" checked={complete} onChange={() => toggleDone(page.slug)} />
          I can do what this page asks.
        </label>
        {page.nextHref && page.nextLabel ? (
          <Link className="button" href={page.nextHref}>
            {page.nextLabel}
          </Link>
        ) : (
          <Link className="button" href="/">
            Back to the start
          </Link>
        )}
      </div>
    </article>
  );
}
