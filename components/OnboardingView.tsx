"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState, type ReactNode } from "react";
import { BellFigure, ExpectedHistogram } from "@/components/BellFigure";
import { CopyBlock } from "@/components/CopyBlock";
import { HostDirectory } from "@/components/HostDirectory";
import { useProgress } from "@/components/store";
import { EVENT } from "@/content/event";
import { GLOSSARY } from "@/content/glossary";
import { AREA_LINKS, JOURNEY, type Check, type StepPage } from "@/content/onboarding";
import { withBase } from "@/lib/base-path";
import { slugify } from "@/lib/slug";

function ExternalAnchor({ href, children }: { href: string; children: ReactNode }) {
  const external = /^https?:\/\//.test(href);
  if (!external) {
    return <Link href={href}>{children}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer external">
      {children}
      <span className="external-mark"> (external)</span>
    </a>
  );
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);
  return parts.map((part, index) =>
    part.startsWith("http") ? (
      <ExternalAnchor key={`${part}-${index}`} href={part}>
        {part}
      </ExternalAnchor>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

function DataTable({ caption, headers, rows }: { caption: string; headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrap">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`}>
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CheckCard({ check }: { check: Check }) {
  const [picked, setPicked] = useState<number | null>(null);
  const correct = picked === check.answer;
  const group = slugify(check.question);

  return (
    <fieldset className="check">
      <legend>{check.question}</legend>
      <div className="check-options">
        {check.options.map((option, index) => (
          <label key={option} className="check-option">
            <input
              type="radio"
              name={group}
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

export function OnboardingView({ page, children }: { page: StepPage; children?: ReactNode }) {
  const { done, toggleDone } = useProgress();
  const complete = done.includes(page.slug);
  const journeyIndex = JOURNEY.findIndex((item) => item.slug === page.slug);
  const onJourney = journeyIndex >= 0;

  return (
    <article className="stack guide">
      <p className="kicker">
        {page.slug === "start"
          ? "For Participants"
          : onJourney
            ? `Step ${page.number} of ${JOURNEY.length} · ${page.minutes} min`
            : `Reference · ${page.minutes} min`}
      </p>
      <h1>{page.slug === "start" ? EVENT.name : page.title}</h1>
      {page.slug === "start" ? (
        <>
          <p className="brand-line">{EVENT.seriesLine}</p>
          <ul className="sticker-row">
            <li>
              <Image className="sticker sticker-qiskit" src={withBase("/brand/stickers/qiskit-white.svg")} width={204} height={81} alt="Qiskit" unoptimized />
            </li>
            <li>
              <Image className="sticker sticker-theme" src={withBase("/brand/stickers/theme-magenta.svg")} width={463} height={81} alt="a decade of quantum on the cloud" unoptimized />
            </li>
            <li>
              <Image className="sticker sticker-cloud" src={withBase("/brand/stickers/cloud.svg")} width={447} height={142} alt="Cloud sticker" unoptimized />
            </li>
          </ul>
        </>
      ) : null}
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

      {page.sections.map((section) => {
        const id = section.id || slugify(section.heading);
        return (
          <Fragment key={id}>
          <section id={id} className="prose card">
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
            {section.steps ? (
              <ol>
                {section.steps.map((step) => (
                  <li key={step}>
                    <RichText text={step} />
                  </li>
                ))}
              </ol>
            ) : null}
            {section.linkedSteps ? (
              <ol>
                {section.linkedSteps.map((step) => (
                  <li key={step.text}>
                    <RichText text={step.text} />
                    {step.hrefs?.map((link) => (
                      <span key={link.href}>
                        {" "}
                        <ExternalAnchor href={link.href}>{link.label}</ExternalAnchor>
                      </span>
                    ))}
                  </li>
                ))}
              </ol>
            ) : null}
            {section.table ? <DataTable {...section.table} /> : null}
            {section.troubles?.map((trouble) => (
              <details key={trouble.title} className="trouble">
                <summary>{trouble.title}</summary>
                <p>{trouble.body}</p>
              </details>
            ))}
          </section>
          {page.slug === "start" && section.id === "event" ? <HostDirectory /> : null}
        </Fragment>
        );
      })}

      {page.glossaryTerms ? (
        <section className="prose card" aria-label="Vocabulary">
          <div className="card-grid">
            {page.glossaryTerms.map((term) => {
              const entry = GLOSSARY.find((item) => item.term === term);
              if (!entry) return null;
              return (
                <article key={term} className="term-card">
                  <h2>{entry.term}</h2>
                  <p>{entry.plain}</p>
                  <p>{entry.technical}</p>
                </article>
              );
            })}
          </div>
        </section>
      ) : null}

      {page.showCircuit ? <BellFigure /> : null}
      {page.showHistogram ? <ExpectedHistogram /> : null}

      {page.table ? (
        <section className="prose card">
          <h2>{page.table.caption}</h2>
          <DataTable {...page.table} />
        </section>
      ) : null}

      {page.code ? <CopyBlock filename={page.code.filename} source={page.code.source} /> : null}

      {page.stages?.map((stage) => (
        <section key={stage.name} id={slugify(stage.name)} className="prose card stage-card">
          <h2>{stage.name}</h2>
          <p>{stage.definition}</p>
          <CopyBlock filename={stage.name} source={stage.code} />
          <dl className="stage-facts">
            <div>
              <dt>Input</dt>
              <dd>{stage.input}</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>{stage.output}</dd>
            </div>
            <div>
              <dt>Vocabulary</dt>
              <dd>{stage.vocabulary}</dd>
            </div>
            <div>
              <dt>Why it matters</dt>
              <dd>{stage.why}</dd>
            </div>
            <div>
              <dt>A beginner mistake</dt>
              <dd>{stage.mistake}</dd>
            </div>
          </dl>
        </section>
      ))}

      {page.structureAnalogy ? (
        <section className="prose card">
          <h2>Software structure</h2>
          <p>The technical definition is in the first column. One Home Depot line sits beside it. This analogy stops at these programming words.</p>
          <DataTable
            caption="Software structure"
            headers={["Word", "Technical definition", "Home Depot"]}
            rows={page.structureAnalogy.map((row) => [row.concept, row.technical, row.analogy])}
          />
        </section>
      ) : null}

      {children}

      {page.links ? (
        <ul className="link-list">
          {page.links.map((link) => (
            <li key={link.href}>
              <ExternalAnchor href={link.href}>{link.label}</ExternalAnchor>
            </li>
          ))}
        </ul>
      ) : null}

      {page.slug === "start" ? (
        <>
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
          <nav className="area-grid" aria-label="Areas">
            {AREA_LINKS.map((area) => (
              <Link key={area.href} href={area.href}>
                {area.label}
              </Link>
            ))}
          </nav>
        </>
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
