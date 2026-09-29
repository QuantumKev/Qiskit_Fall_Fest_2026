import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { marked } from "marked";
import { decodeHtml, installLinkRenderer, linkifyPlainText } from "../lib/link-text.mjs";

const SENTENCE_END = /[.,;:)]$/;

function hrefs(html) {
  return [...html.matchAll(/href="([^"]*)"/g)].map((match) => match[1]);
}

function assertCleanHrefs(html, label) {
  for (const href of hrefs(html)) {
    assert.equal(SENTENCE_END.test(href), false, `${label} href ends with sentence punctuation: ${href}`);
  }
}

function render(source) {
  const renderer = new marked.Renderer();
  installLinkRenderer(renderer, (href) => href);
  return marked.parse(source, { gfm: true, renderer, async: false });
}

test("a URL followed by a period does not include the period in href", () => {
  const html = render("See https://example.com/path.");
  assert.match(html, /href="https:\/\/example\.com\/path"/);
  assert.doesNotMatch(html, /href="https:\/\/example\.com\/path\./);
  assert.match(html, /<a href="https:\/\/example\.com\/path"[^>]*>https:\/\/example\.com\/path<\/a>\./);
  assert.match(html, /rel="noopener noreferrer external"/);
  assert.doesNotMatch(html, /\(external\)/);
  assertCleanHrefs(html, "period");

  const parts = linkifyPlainText("See https://example.com/path.");
  assert.deepEqual(parts, [
    { type: "text", value: "See " },
    { type: "url", value: "https://example.com/path" },
    { type: "text", value: "." },
  ]);
});

test("the renderer still drops a period if the tokenizer includes it", () => {
  const renderer = new marked.Renderer();
  installLinkRenderer(renderer, (href) => href);
  const html = renderer.link.call(
    { parser: { parseInline: () => "https://example.com/path." } },
    { href: "https://example.com/path.", tokens: [] },
  );
  assert.equal(
    html,
    '<a href="https://example.com/path" target="_blank" rel="noopener noreferrer external">https://example.com/path</a>.',
  );
});

test("commas, colons, semicolons, and closing parentheses stay outside the link", () => {
  for (const mark of [",", ":", ";", ")"]) {
    const html = render(`See https://example.com/path${mark} next`);
    assert.match(html, /href="https:\/\/example\.com\/path"/);
    assert.match(html, new RegExp(`</a>${mark.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} next`));
    const parts = linkifyPlainText(`See https://example.com/path${mark} next`);
    assert.equal(parts.find((part) => part.type === "url").value, "https://example.com/path");
    assert.ok(parts.some((part) => part.type === "text" && part.value.startsWith(mark)));
  }
});

test("query strings, fragments, hyphens, and underscores stay in the href", () => {
  const samples = [
    "https://deepstation.ai/hackathons/dj31ld8d96fuj1yi97ph4c4c?tab=teams",
    "https://www.quantumglobalgroup.io/qiskit-fall-fest/decision-guide/#/assess",
    "https://www.ibm.com/quantum/qiskit#tutorials",
    "https://github.com/Qiskit/qiskit#readme",
    "https://quantum.cloud.ibm.com/",
    "https://example.com/my-path_name",
    "https://en.wikipedia.org/wiki/Quantum_computing_(disambiguation)",
    "https://example.com/file.pdf",
  ];
  for (const url of samples) {
    const html = render(`See ${url}.`);
    assert.ok(hrefs(html).includes(url), html);
    assert.match(html, /<\/a>\./);
    const parts = linkifyPlainText(`See ${url}.`);
    assert.equal(parts.find((part) => part.type === "url").value, url);
    assert.equal(parts.at(-1).value, ".");
  }
});

test("a heading apostrophe stays an apostrophe in visible text", () => {
  const raw = render("### If you're going deep on a specific application");
  const visible = decodeHtml(raw.replace(/<[^>]+>/g, "").trim());
  assert.equal(visible, "If you're going deep on a specific application");
  assert.doesNotMatch(visible, /&#39;|&#x27;/i);
  const markdownSource = readFileSync(new URL("../lib/markdown.ts", import.meta.url), "utf8");
  assert.match(markdownSource, /decodeHtml/);
  assert.match(markdownSource, /\.replace\(\/&#39;\/g, "'"\)/);
  const shown = raw.replace(/&#39;/g, "'").replace(/&#x27;/gi, "'");
  assert.doesNotMatch(shown, /&#39;|&#x27;/i);
});

test("rendered handbook, facilitator guide, domain track, and catalog keep punctuation out of hrefs", () => {
  const markdownSource = readFileSync(new URL("../lib/markdown.ts", import.meta.url), "utf8");
  assert.match(markdownSource, /installLinkRenderer\(renderer, rewriteHref\)/);
  for (const name of ["PARTICIPANT_HANDBOOK.md", "FACILITATOR_GUIDE.md", "NON-TECHNICAL-TRACK.md", "NOTEBOOK-CATALOG.md"]) {
    const html = render(readFileSync(new URL(`../${name}`, import.meta.url), "utf8"));
    assertCleanHrefs(html, name);
    assert.doesNotMatch(html, /\(external\)/);
  }
});
