"use client";

import Link from "next/link";
import { useEffect, useState, type ReactElement } from "react";
import { CopyBlock } from "@/components/CopyBlock";
import { ExerciseConnect } from "@/components/ExerciseConnect";
import { useProgress } from "@/components/store";
import { GLOSSARY } from "@/content/glossary";
import {
  ANALOGY_END,
  BELL_LINES,
  BELL_SOURCE,
  COMPOSER_FLOW,
  COMPOSER_STEPS,
  ERROR_CLUES,
  EXECUTION_STEPS,
  ACCOUNT_FACTS,
  AWARD_TEMPLATE_LINE,
  BEFORE_KICKOFF,
  CANVAS_NOTE,
  CHAMPIONSHIP_LINE,
  COST_LINE,
  DAY_ONE_ROLES,
  EVERYONE_LINE,
  FALL_FEST_LINKS,
  HACKATHON_GAP_NOTE,
  HACKATHON_GAPS,
  HETIONET_PIPELINE,
  HOME_DEPOT_TABLE,
  HOST_CONTACTS,
  HOUSE_EXAMPLE,
  INTRO_CHECKS,
  INTRO_FACILITATOR,
  INTRO_SECTIONS,
  INTRO_TITLE,
  JOIN_FACTS,
  JUDGING_LINE,
  KICKOFF_LINES,
  LIGHTNING_TALK_LINE,
  NEXT_STOPS,
  OPEN_PLAN_MINUTES,
  PHASES,
  PLAN_BLANK,
  PRACTICE,
  PRIMARY_SOURCES,
  PROBLEM_SHAPES,
  PROGRAM_BANNER,
  PROGRAM_NAME,
  PROGRAM_TERMS,
  PROJECT_KINDS,
  PROMO_BLANK,
  PROGRESS_LINE,
  QML_COURSE,
  QML_FIT,
  QML_KERNEL,
  QML_OUTPUT_BLANK,
  QML_PROJECTED,
  SEPTEMBER_LINE,
  SUBMISSION_STEPS,
  TEAM_SIZE_LINE,
  TRACKS,
  USE_CASE_FIELDS,
  VALID_SKEPTICAL,
  WINNER_PACKET,
  PUNCTUATION,
  QUANTUM_CARDS,
  TRACE_STEPS,
  WELCOME_MESSAGE,
  introSection,
  type IntroSlug,
} from "@/content/intro";
import type { Check } from "@/content/modules";

function CheckCard({ check }: { check: Check }) {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <fieldset className="check">
      <legend>{check.question}</legend>
      {check.options.map((option, index) => (
        <label key={option}>
          <input type="radio" name={check.question} checked={picked === index} onChange={() => setPicked(index)} />
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

function PhaseRail({ current }: { current: string }) {
  const section = introSection(current);
  return (
    <nav className="phase-rail" aria-label="Guide progress">
      <p className="progress-sentence">{PROGRESS_LINE}</p>
      <ol>
        {PHASES.map((phase) => (
          <li key={phase.id}>
            <span aria-current={section?.phase === phase.id ? "step" : undefined}>{phase.label}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function SectionLinks({ current }: { current: string }) {
  return (
    <ol className="section-jumps">
      {INTRO_SECTIONS.map((item) => (
        <li key={item.slug}>
          <Link href={`/intro/${item.slug}`} aria-current={item.slug === current ? "page" : undefined}>
            {item.title}
          </Link>
        </li>
      ))}
    </ol>
  );
}

function WelcomeBody() {
  return (
    <>
      <p className="lede">{WELCOME_MESSAGE}</p>
      <p>Python is the language. Qiskit is the quantum toolkit. IBM Quantum Platform is where the lessons, Composer, and computing services live. One example runs through the whole guide: a two-qubit Bell state.</p>
    </>
  );
}

function LanguageBody() {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const terms = PROGRAM_TERMS.filter((term) =>
    [term.keyword, term.technical, term.homeDepot || "", term.bellLab].join(" ").toLowerCase().includes(needle),
  );
  return (
    <div className="stack">
      <p>Python is the programming language. It supplies the grammar: names, assignment, calls, and order.</p>
      <p>Qiskit is an open-source SDK used to create and work with quantum circuits, operators, primitives, and related tools.</p>
      <p>IBM Quantum Platform provides learning resources, Composer, and access to quantum-computing services.</p>
      <div className="table-wrap sheet">
        <table>
          <caption>Home Depot analogy for software structure</caption>
          <thead>
            <tr>
              <th>Programming concept</th>
              <th>Home Depot analogy</th>
            </tr>
          </thead>
          <tbody>
            {HOME_DEPOT_TABLE.map((row) => (
              <tr key={row.concept}>
                <td>{row.concept}</td>
                <td>{row.analogy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="meta">{ANALOGY_END}</p>
      <label>
        Search the language cards
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="class, method, shots" />
      </label>
      <div className="card-grid">
        {terms.map((term) => (
          <article key={term.keyword} className="term-card" id={term.keyword.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
            <h2>{term.keyword}</h2>
            <h3>Technical</h3>
            <p>{term.technical}</p>
            <h3>Home Depot</h3>
            <p>{term.homeDepot ?? "The analogy table has no row for this word. The analogy stops."}</p>
            <h3>Tiny Python</h3>
            <pre>
              <code>{term.pythonExample}</code>
            </pre>
            <h3>In the Bell lab</h3>
            <p>{term.bellLab}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ExecutionBody() {
  return (
    <div className="stack">
      <p>Python generally evaluates notebook cells and statements in the order they are run. Running cells out of order can cause missing-variable and missing-import errors.</p>
      <p className="depot">Python cannot use a name before that name has been imported, created, or assigned.</p>
      <CopyBlock filename="A non-quantum example" source={HOUSE_EXAMPLE} />
      <p>
        <code>house_color</code> is the variable. <code>&quot;blue&quot;</code> is a string value. <code>=</code> is the assignment operator. <code>print</code> is a function call. The first line runs, then the second line reads the name.
      </p>
      <ol className="sheet">
        {EXECUTION_STEPS.map((step, index) => (
          <li key={step.title}>
            <strong>
              {index + 1}. {step.title}
            </strong>
            <p>{step.detail}</p>
            <p className="meta">If you skip it: {step.skip}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function VocabularyBody() {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const cards = QUANTUM_CARDS.filter((card) => card.term.toLowerCase().includes(needle) || card.labWhy.toLowerCase().includes(needle));
  return (
    <div className="stack">
      <p>A qubit has a quantum state described with amplitudes. Measurement produces a classical result. A qubit is not simply both 0 and 1.</p>
      <label>
        Search vocabulary
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="phase, shot, sampler" />
      </label>
      <div className="card-grid sheet">
        {cards.map((card) => {
          const glossary = card.glossaryTerm ? GLOSSARY.find((entry) => entry.term === card.glossaryTerm) : undefined;
          return (
            <article key={card.term} className="term-card" id={card.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
              <h2>{card.term}</h2>
              <h3>Plain</h3>
              <p>{glossary?.plain ?? card.plain}</p>
              <h3>Technical</h3>
              <p>{glossary?.technical ?? card.technical}</p>
              <h3>In this lab</h3>
              <p>{card.labWhy}</p>
              <h3>Common misconception</h3>
              <p>{glossary?.misconception ?? card.misconception}</p>
              <p>
                <a href={card.doc}>{card.docLabel}</a>
              </p>
            </article>
          );
        })}
      </div>
      <p>
        Printable sheet: <a href="/downloads/intro-vocabulary.md">intro vocabulary</a>
      </p>
    </div>
  );
}

function ComposerBody() {
  const { done } = useProgress();
  const unlocked = done.includes("exercise1-complete") || done.includes("exercise1-simulator");
  if (!unlocked) {
    return (
      <div className="stack">
        <p>Exercise 1 comes first. Finish the connection checkpoint, or mark the simulator path if the classroom invitation is still pending.</p>
        <Link className="button" href="/intro/prepare">
          Return to Exercise 1
        </Link>
      </div>
    );
  }
  return (
    <div className="stack">
      <p className="progress-sentence">{COMPOSER_FLOW}</p>
      <p>Composer is the visual blueprint. Python is another way of expressing that same blueprint.</p>
      <p>
        Guide: <a href="https://quantum.cloud.ibm.com/docs/en/guides/composer">IBM Quantum Composer</a>. Open the canvas at{" "}
        <a href="https://quantum.cloud.ibm.com/composer">Composer</a> after you are signed in.
      </p>
      <ol>
        {COMPOSER_STEPS.map((step, index) => (
          <li key={step.title}>
            <strong>
              {index + 1}. {step.title}
            </strong>
            <p className="depot">Pause and predict: {step.pause}</p>
            <p>{step.action}</p>
          </li>
        ))}
      </ol>
      <p>Ideal counts pile up on 00 and 11. A computational-basis histogram is not, by itself, a complete proof of entanglement.</p>
    </div>
  );
}

function PythonBody() {
  const { done } = useProgress();
  const [active, setActive] = useState(0);
  const unlocked = done.includes("exercise1-complete") || done.includes("exercise1-simulator");
  const note = BELL_LINES[active];
  if (!unlocked) {
    return (
      <div className="stack">
        <p>The Python lab opens after Exercise 1, including the simulator-only path while an invitation is pending.</p>
        <Link className="button" href="/intro/prepare">
          Return to Exercise 1
        </Link>
      </div>
    );
  }
  return (
    <div className="stack">
      <p>Tested on Qiskit 2.3.1 with StatevectorSampler. Both <code>result[0].data[&quot;meas&quot;].get_counts()</code> and the attribute form return the same counts. This page uses the bracket form. The circuit is copied before <code>measure_all()</code>.</p>
      <div className="compare">
        <div>
          <h2>Composer</h2>
          <p>{COMPOSER_FLOW}</p>
          <p>H on wire 0, CX from wire 0 to wire 1, then measurements.</p>
        </div>
        <div>
          <h2>Python</h2>
          <ul className="line-list">
            {BELL_LINES.map((line, index) => (
              <li key={line.line}>
                <button type="button" aria-pressed={active === index} onClick={() => setActive(index)}>
                  {line.line}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <article className="term-card" aria-live="polite">
        <h2>This line</h2>
        <p>
          <code>{note.line}</code>
        </p>
        <h3>Python</h3>
        <p>{note.python}</p>
        <h3>Qiskit</h3>
        <p>{note.qiskit}</p>
        <h3>Circuit</h3>
        <p>{note.effect}</p>
        <h3>Composer</h3>
        <p>{note.composer}</p>
      </article>
      <CopyBlock filename="Bell lab, local sampler" source={BELL_SOURCE} />
      <div className="table-wrap sheet">
        <table>
          <caption>Punctuation in this lab</caption>
          <thead>
            <tr>
              <th>Mark</th>
              <th>Name</th>
              <th>What it does here</th>
            </tr>
          </thead>
          <tbody>
            {PUNCTUATION.map((item) => (
              <tr key={item.name}>
                <td>
                  <code>{item.mark}</code>
                </td>
                <td>{item.name}</td>
                <td>{item.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Lab sheet: <a href="/downloads/intro-lab.md">Bell lab sheet</a>. Qubit 0 is the rightmost bit.
      </p>
    </div>
  );
}

function TraceBody() {
  const [step, setStep] = useState(0);
  const current = TRACE_STEPS[step];

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") setStep((value) => Math.min(TRACE_STEPS.length - 1, value + 1));
      if (event.key === "ArrowLeft") setStep((value) => Math.max(0, value - 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="stack">
      <p>Use the buttons or the left and right arrow keys. Each step shows the line, the object, the circuit, the output, and the clue you get if the step is skipped.</p>
      <div className="trace-controls" role="group" aria-label="Execution steps">
        <button type="button" onClick={() => setStep((value) => Math.max(0, value - 1))}>
          Previous
        </button>
        <button type="button" onClick={() => setStep((value) => Math.min(TRACE_STEPS.length - 1, value + 1))}>
          Next
        </button>
      </div>
      <ol className="trace-steps">
        {TRACE_STEPS.map((item, index) => (
          <li key={item.label}>
            <button type="button" className={index === step ? "trace-current" : undefined} aria-pressed={index === step} onClick={() => setStep(index)}>
              {item.label}
            </button>
          </li>
        ))}
      </ol>
      <article className="term-card" aria-live="polite">
        <h2>{current.label}</h2>
        <p>
          Line: <code>{current.line}</code>
        </p>
        <p>What exists: {current.exists}</p>
        <p>Circuit: {current.circuit}</p>
        <p>Output: {current.output}</p>
        <p>If you skip this step: {current.skip}</p>
      </article>
      <div className="card-grid">
        {ERROR_CLUES.map((item) => (
          <article key={item.name} className="term-card">
            <h2>{item.name}</h2>
            <p>{item.clue}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function PracticeBody() {
  return (
    <div className="stack">
      <p>Try the change before you open the hint. Open the solution after you have written a prediction.</p>
      {PRACTICE.map((item, index) => (
        <article key={item.title} className="prose">
          <h2>
            {index + 1}. {item.title}
          </h2>
          <p>{item.prompt}</p>
          <details>
            <summary>Hint</summary>
            <p>{item.hint}</p>
          </details>
          <details>
            <summary>One possible reading</summary>
            <p>{item.solution}</p>
          </details>
        </article>
      ))}
    </div>
  );
}

function NextBody() {
  return (
    <div className="stack">
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>When you are stuck</th>
              <th>Go here</th>
            </tr>
          </thead>
          <tbody>
            {NEXT_STOPS.map((stop) => (
              <tr key={stop.situation}>
                <td>{stop.situation}</td>
                <td>
                  <a href={stop.href}>{stop.destination}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul>
        {PRIMARY_SOURCES.map((source) => (
          <li key={source.href}>
            <a href={source.href}>{source.title}</a>
          </li>
        ))}
      </ul>
      <p>The Qolour course stays on Qolour. This guide links to it and does not copy it. Read video titles from the live menu.</p>
    </div>
  );
}

function FallFestLinkList() {
  return (
    <ul>
      {FALL_FEST_LINKS.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
}

function HackathonBody() {
  return (
    <div className="stack">
      <p>{PROGRAM_NAME} Robert Loredo leads this initiative. These notes paraphrase the FAU materials read on 2026-09-25. They do not copy those files.</p>
      <p>{PROGRAM_BANNER}</p>
      <h2>Dates</h2>
      <p>{KICKOFF_LINES}</p>
      <p>{CHAMPIONSHIP_LINE}</p>
      <p>{WINNER_PACKET}</p>
      <h2>Before kickoff</h2>
      <ol>
        {BEFORE_KICKOFF.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p>{COST_LINE} The code-of-conduct link is still a local-organizer placeholder. Help is the unset chat link, plus Qiskit Slack and IBM Quantum docs.</p>
      <h2>Two tracks on one team</h2>
      <ul>
        {TRACKS.map((track) => (
          <li key={track}>{track}</li>
        ))}
      </ul>
      <p>
        Domain-track note: <a href="https://www.linkedin.com/pulse/domain-track-entangled-solutions-group-tgrwe/">Entangled Solutions Group</a>.
      </p>
      <p>{EVERYONE_LINE}</p>
      <h2>Accounts and the workshop pin</h2>
      <ul>
        {ACCOUNT_FACTS.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      <p>{PLAN_BLANK}</p>
      <h2>What a strong project is</h2>
      <p>A strong project is one of these four. The materials say it is explicitly not a claim of quantum advantage. Kinds 1 and 4 are mostly non-code.</p>
      <ol>
        {PROJECT_KINDS.map((kind) => (
          <li key={kind}>{kind}</li>
        ))}
      </ol>
      <h2>Three problem shapes</h2>
      <ol>
        {PROBLEM_SHAPES.map((shape) => (
          <li key={shape}>{shape}</li>
        ))}
      </ol>
      <p>{VALID_SKEPTICAL}</p>
      <h2>Propose</h2>
      <p>{CANVAS_NOTE}</p>
      <ol>
        {USE_CASE_FIELDS.map((field) => (
          <li key={field}>{field}</li>
        ))}
      </ol>
      <h2>Submit</h2>
      <ol>
        {SUBMISSION_STEPS.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <h2>Join</h2>
      <ul>
        {JOIN_FACTS.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      <p>The workshop registration form on this site records that you are attending this room. It is a different list from the unset Fall Fest registration link.</p>
      <h2>Day-one roles</h2>
      <ul>
        {DAY_ONE_ROLES.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
      <p>{LIGHTNING_TALK_LINE}</p>
      <h2>Team size and judging</h2>
      <p>{TEAM_SIZE_LINE}</p>
      <p>{JUDGING_LINE}</p>
      <p>{AWARD_TEMPLATE_LINE}</p>
      <h2>Host contacts</h2>
      <ul>
        {HOST_CONTACTS.map((host) => (
          <li key={host.name}>
            {host.href ? <a href={host.href}>{host.name}</a> : host.name}. {host.detail}
          </li>
        ))}
      </ul>
      <p>Participant help email in the handbook is still {"{{ORGANIZER_EMAIL}}"}.</p>
      <p>{SEPTEMBER_LINE}</p>
      <h2>Links that are filled in</h2>
      <FallFestLinkList />
      <aside className="placeholder">
        <h2>Still blank</h2>
        <p>{HACKATHON_GAP_NOTE}</p>
        <ul>
          {HACKATHON_GAPS.map((gap) => (
            <li key={gap}>{gap}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

function QmlBody() {
  return (
    <div className="stack">
      <p>Robert Loredo leads this initiative. IBM’s course and tutorials stay on IBM. This page links to them and does not copy them.</p>
      <h2>A fit</h2>
      <p>{QML_FIT}</p>
      <p>{VALID_SKEPTICAL}</p>
      <h2>What to study</h2>
      <ul>
        <li>
          <a href={QML_COURSE}>Quantum machine learning</a>, the 10-hour course the handbook names for classification, kernels, and feature maps.
        </li>
        <li>
          <a href={QML_KERNEL}>Quantum kernel training</a>
        </li>
        <li>
          <a href={QML_PROJECTED}>Projected quantum kernels</a>
        </li>
      </ul>
      <h2>What to implement, and what to do with the output</h2>
      <p>{QML_OUTPUT_BLANK}</p>
      <h2>Simulator first, and the 10 minutes</h2>
      <p>{OPEN_PLAN_MINUTES}</p>
      <p>{PROMO_BLANK}</p>
      <p>{PLAN_BLANK}</p>
      <p>
        Classroom accounts, as an organizer option: <a href="https://ibm.biz/classroom-account">ibm.biz/classroom-account</a>. Plan comparison:{" "}
        <a href="https://quantum.cloud.ibm.com/docs/en/guides/plans-overview">plans overview</a>. Open Plan updates:{" "}
        <a href="https://www.ibm.com/quantum/blog/open-plan-updates">open-plan-updates</a>.
      </p>
    </div>
  );
}

function HetionetBody() {
  return (
    <div className="stack">
      <p>
        Hetionet is a biomedical knowledge graph at <a href="https://het.io/">het.io</a>. The hybrid project is{" "}
        <a href="https://github.com/Quantum-Global-Group/hybrid-qml-kg-poc">hybrid-qml-kg-poc</a>. Before this tour, use the sitting after both Bell labs: <Link href="/learn/assess-build">read chapter 7, then Assess and Build</Link>. This page introduces the pipeline. It does not train the model. Run any new experiment on a simulator first. A StatevectorSampler check uses no QPU time. The 10 minutes are Open Plan QPU time per rolling 28-day window. No classroom-minute quota is stated.
      </p>
      <ol>
        {HETIONET_PIPELINE.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p>README figures rechecked on 2026-09-25. Test PR-AUC: stacking Pauli 0.7987, RandomForest-Optimized 0.7838, ExtraTrees-Optimized 0.7807, stacking ZZ 0.7408, QSVC-Optimized 0.7216. The target above 0.70 was met. A tuned classical forest is close.</p>
      <p>That comparison is not quantum advantage, and it is not a clinical result.</p>
    </div>
  );
}

const BODIES: Record<IntroSlug, () => ReactElement> = {
  welcome: WelcomeBody,
  prepare: ExerciseConnect,
  language: LanguageBody,
  execution: ExecutionBody,
  vocabulary: VocabularyBody,
  composer: ComposerBody,
  python: PythonBody,
  trace: TraceBody,
  practice: PracticeBody,
  "next-step": NextBody,
  hackathon: HackathonBody,
  qml: QmlBody,
  hetionet: HetionetBody,
};

export function IntroHome() {
  return (
    <div className="stack guide">
      <p className="kicker">Introduction to Qiskit</p>
      <h1>{INTRO_TITLE}</h1>
      <p className="lede">{WELCOME_MESSAGE}</p>
      <p className="progress-sentence">{PROGRESS_LINE}</p>
      <ol className="module-list">
        {INTRO_SECTIONS.map((item) => (
          <li key={item.slug}>
            <Link href={`/intro/${item.slug}`}>
              <span className="module-index">{item.minutes}m</span>
              <span>
                <strong>{item.title}</strong>
              </span>
              <span className="status">Open</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function IntroView({ slug }: { slug: IntroSlug }) {
  const section = introSection(slug);
  const { mode, done, toggleDone } = useProgress();
  if (!section) return null;
  const Body = BODIES[slug];
  const progressId = `intro:${slug}`;
  const facilitator = INTRO_FACILITATOR[slug];
  const checks = INTRO_CHECKS[slug] ?? [];
  const index = INTRO_SECTIONS.findIndex((item) => item.slug === slug);
  const next = INTRO_SECTIONS[index + 1];

  return (
    <article className="stack guide">
      <PhaseRail current={slug} />
      <SectionLinks current={slug} />
      <p className="kicker">
        {section.title} · {section.minutes} min
      </p>
      {slug !== "prepare" ? <h1>{section.title}</h1> : null}
      <Body />
      {checks.length ? (
        <section>
          <h2>Knowledge check</h2>
          {checks.map((check) => (
            <CheckCard key={check.question} check={check} />
          ))}
        </section>
      ) : null}
      {mode === "facilitator" && facilitator && slug !== "prepare" ? (
        <section className="facilitator prose">
          <h2>Facilitator notes</h2>
          <p>{facilitator.timing}</p>
          <ul>
            {facilitator.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      ) : null}
      <label className="complete">
        <input type="checkbox" checked={done.includes(progressId)} onChange={() => toggleDone(progressId)} />
        I can do what this section asks.
      </label>
      {next ? (
        <p>
          <Link className="button" href={`/intro/${next.slug}`}>
            {next.title}
          </Link>
        </p>
      ) : (
        <p>
          <Link className="button" href="/">
            Back to the journey
          </Link>
        </p>
      )}
    </article>
  );
}
