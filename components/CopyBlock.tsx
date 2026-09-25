"use client";

import { useState } from "react";

export function CopyBlock({ filename, source }: { filename: string; source: string }) {
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
