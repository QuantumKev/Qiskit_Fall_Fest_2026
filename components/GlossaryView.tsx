"use client";

import { useMemo, useState } from "react";
import { GLOSSARY, type AnalogyDomain } from "@/content/glossary";

const DOMAINS: Array<AnalogyDomain | "All"> = ["All", "Cooking", "Music", "Sports", "Home Depot"];

export function GlossaryView() {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState<AnalogyDomain | "All">("All");

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return GLOSSARY.filter((entry) => {
      const domainOk = domain === "All" || entry.analogyDomain === domain;
      if (!domainOk) return false;
      if (!needle) return true;
      const haystack = [entry.term, entry.plain, entry.technical, entry.analogy, entry.why, entry.misconception]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [query, domain]);

  return (
    <div className="stack">
      <p className="kicker">Glossary</p>
      <h1>Words the labs actually use.</h1>
      <p className="lede">
        Each card keeps the technical definition. The analogy is a translation beside it, from cooking, music, sports, or Home Depot.
      </p>
      <div className="filters">
        <label>
          Search
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="entanglement, shot, PR-AUC"
          />
        </label>
        <div className="mode-switch" role="group" aria-label="Analogy domain">
          {DOMAINS.map((item) => (
            <button key={item} type="button" aria-pressed={domain === item} onClick={() => setDomain(item)}>
              {item}
            </button>
          ))}
        </div>
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
            <h3>{entry.analogyDomain}</h3>
            <p>{entry.analogy}</p>
            <h3>Why it matters</h3>
            <p>{entry.why}</p>
            <h3>Watch for this</h3>
            <p>{entry.misconception}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
