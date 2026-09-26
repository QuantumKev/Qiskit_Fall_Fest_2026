"use client";

import { useMemo, useState } from "react";
import { GLOSSARY } from "@/content/glossary";

export function GlossaryView() {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return GLOSSARY.filter((entry) => {
      if (!needle) return true;
      const haystack = [entry.term, entry.plain, entry.technical, entry.why, entry.misconception].join(" ").toLowerCase();
      return haystack.includes(needle);
    });
  }, [query]);

  return (
    <div className="stack">
      <p className="kicker">Glossary</p>
      <h1>Words the labs actually use.</h1>
      <p className="lede">Each card keeps the plain sentence and the technical definition.</p>
      <div className="filters">
        <label>
          Search
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="entanglement, shot, PR-AUC"
          />
        </label>
      </div>
      <p className="meta">
        {matches.length} of {GLOSSARY.length}
      </p>
      <div className="card-grid">
        {matches.map((entry) => (
          <article key={entry.term} className="term-card" id={entry.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
            <h2>{entry.term}</h2>
            {entry.pronunciation ? <p className="meta">{entry.pronunciation}</p> : null}
            <h3>Plain</h3>
            <p>{entry.plain}</p>
            <h3>Technical</h3>
            <p>{entry.technical}</p>
            <h3>Why it matters</h3>
            <p>{entry.why}</p>
            <h3>Common misconception</h3>
            <p>{entry.misconception}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
