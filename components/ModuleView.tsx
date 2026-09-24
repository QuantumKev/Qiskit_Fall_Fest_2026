"use client";

import Link from "next/link";
import { useState } from "react";
import type { Check, Module } from "@/content/modules";
import { LAST_VERIFIED } from "@/content/modules";
import { useProgress, type Survey } from "@/components/store";

function CopyBlock({ filename, source }: { filename: string; source: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(source);
    setCopied(true);
  }

  return (
    <figure className="codeblock">
      <figcaption>
        <span>{filename}</span>
        <button type="button" onClick={copy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </figcaption>
      <pre>
        <code>{source}</code>
      </pre>
    </figure>
  );
}

function CheckCard({ check }: { check: Check }) {
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <fieldset className="check">
      <legend>{check.question}</legend>
      {check.options.map((option, index) => (
        <label key={option}>
          <input
            type="radio"
            name={check.question}
            checked={picked === index}
            onChange={() => setPicked(index)}
          />
          {option}
        </label>
      ))}
      {picked !== null ? (
        <p className={picked === check.answer ? "verdict ok" : "verdict"}>
          {picked === check.answer ? "That matches the lesson." : "Try the other reading."} {check.why}
        </p>
      ) : null}
    </fieldset>
  );
}

function SurveyForm() {
  const { survey, saveSurvey } = useProgress();

  function update(key: keyof Survey, value: string) {
    saveSurvey({ ...survey, [key]: value });
  }

  return (
    <form className="survey" onSubmit={(event) => event.preventDefault()}>
      <p>Your answers stay in this browser. They do not lock any module.</p>
      {(
        [
          ["python", "Have you written Python before?"],
          ["qiskit", "Have you used Qiskit before?"],
          ["ibm", "Have you signed in to IBM Quantum before?"],
          ["math", "How comfortable are you with linear algebra?"],
        ] as const
      ).map(([key, label]) => (
        <label key={key}>
          {label}
          <select value={survey[key]} onChange={(event) => update(key, event.target.value)}>
            <option value="">Choose one</option>
            {key === "math" ? (
              <>
                <option value="none">Not yet</option>
                <option value="some">Some practice</option>
                <option value="comfortable">Comfortable</option>
              </>
            ) : (
              <>
                <option value="no">No</option>
                <option value="a-little">A little</option>
                <option value="yes">Yes</option>
              </>
            )}
          </select>
        </label>
      ))}
    </form>
  );
}

export function ModuleView({ module }: { module: Module }) {
  const { mode, done, toggleDone } = useProgress();
  const complete = done.includes(module.slug);

  return (
    <article className="stack">
      <p className="kicker">
        Module {module.number} · {module.minutes} min
      </p>
      <h1>{module.title}</h1>
      <p className="lede">{module.summary}</p>
      <ul className="outcomes">
        {module.outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>

      {module.sections.map((section) => (
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

      {module.slug === "welcome" ? <SurveyForm /> : null}

      {module.analogies?.map((block) => (
        <section key={block.title} className="prose">
          <h2>{block.title}</h2>
          <p className="meta">Teaching translation. It sits beside the definition and does not replace the quantum word.</p>
          <dl className="analogy-grid">
            <div>
              <dt>Cooking</dt>
              <dd>{block.layers.cooking}</dd>
            </div>
            <div>
              <dt>Music</dt>
              <dd>{block.layers.music}</dd>
            </div>
            <div>
              <dt>Sports</dt>
              <dd>{block.layers.sports}</dd>
            </div>
            <div>
              <dt>Home Depot</dt>
              <dd>{block.layers.homeDepot}</dd>
            </div>
          </dl>
        </section>
      ))}

      {module.code?.map((block) => (
        <CopyBlock key={block.filename} filename={block.filename} source={block.source} />
      ))}

      {module.codeNotes ? (
        <section className="prose">
          <h2>Line by line</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Line</th>
                  <th>Python</th>
                  <th>Qiskit</th>
                  <th>Qubits</th>
                  <th>Composer</th>
                </tr>
              </thead>
              <tbody>
                {module.codeNotes.map((note) => (
                  <tr key={note.line}>
                    <td>
                      <code>{note.line}</code>
                    </td>
                    <td>{note.python}</td>
                    <td>{note.qiskit}</td>
                    <td>{note.qubits}</td>
                    <td>{note.composer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <section className="prose">
        <h2>Knowledge check</h2>
        {module.checks.map((check) => (
          <CheckCard key={check.question} check={check} />
        ))}
      </section>

      {mode === "facilitator" ? (
        <section className="facilitator prose">
          <h2>Facilitator notes</h2>
          <p>{module.facilitator.timing}</p>
          <h3>Run of show</h3>
          <ul>
            {module.facilitator.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <h3>Questions to ask</h3>
          <ul>
            {module.facilitator.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
          <h3>Answers you want to hear</h3>
          <ul>
            {module.facilitator.expected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Misconceptions to catch</h3>
          <ul>
            {module.facilitator.misconceptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : (
        <p className="meta">Switch to Facilitator in the header to see timing and discussion notes.</p>
      )}

      <label className="complete">
        <input type="checkbox" checked={complete} onChange={() => toggleDone(module.slug)} />
        I can do what this module asks.
      </label>

      <section className="next-card">
        <p className="kicker">What should I do next?</p>
        {module.nextSlug ? (
          <>
            <h2>{module.nextLabel}</h2>
            <Link className="button" href={`/learn/${module.nextSlug}`}>
              {module.nextLabel}
            </Link>
          </>
        ) : (
          <>
            <h2>Write your exit ticket</h2>
            <p>Role, one IBM link, one practice task, and something you could show in two weeks.</p>
            <Link className="button" href="/">
              Back to the journey
            </Link>
          </>
        )}
      </section>
      <p className="meta">Sources last checked {LAST_VERIFIED}. See the sources page before you quote a number.</p>
    </article>
  );
}
