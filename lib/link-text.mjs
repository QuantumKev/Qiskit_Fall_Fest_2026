const SENTENCE_PUNCTUATION = new Set([".", ",", ":", ";", "!", "?"]);
const URL_PATTERN = /https?:\/\/[^\s<>"']+/g;

function countChar(value, char) {
  let count = 0;
  for (const item of value) {
    if (item === char) count += 1;
  }
  return count;
}

/**
 * Remove sentence punctuation stuck to the end of a URL.
 * Query strings, fragments (#/assess), hyphens, underscores, and balanced
 * parentheses stay. An unmatched ")" is treated as prose, not part of the URL.
 * @param {string} value
 * @returns {{ href: string, trailing: string }}
 */
export function peelSentencePunctuation(value) {
  let href = value;
  let trailing = "";
  while (href.length > 0) {
    const last = href[href.length - 1];
    if (last === ")") {
      if (countChar(href, ")") <= countChar(href, "(")) break;
    } else if (!SENTENCE_PUNCTUATION.has(last)) {
      break;
    }
    trailing = last + trailing;
    href = href.slice(0, -1);
  }
  return { href, trailing };
}

/**
 * Split prose into text and URL parts. When the visible text is the URL,
 * sentence punctuation is its own text part after the URL.
 * @param {string} text
 * @returns {{ type: "text" | "url", value: string }[]}
 */
export function linkifyPlainText(text) {
  const parts = [];
  let cursor = 0;
  for (const match of text.matchAll(URL_PATTERN)) {
    const start = match.index ?? 0;
    const raw = match[0];
    const { href, trailing } = peelSentencePunctuation(raw);
    if (!href) continue;
    if (start > cursor) parts.push({ type: "text", value: text.slice(cursor, start) });
    parts.push({ type: "url", value: href });
    if (trailing) parts.push({ type: "text", value: trailing });
    cursor = start + raw.length;
  }
  if (cursor < text.length) parts.push({ type: "text", value: text.slice(cursor) });
  if (parts.length === 0) parts.push({ type: "text", value: text });
  return parts;
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * @param {string} href
 * @param {string} text
 * @returns {{ href: string, text: string, trailing: string }}
 */
export function separateUrlPunctuation(href, text) {
  const peeledHref = peelSentencePunctuation(href);
  const textIsUrl = text === href || text === `${peeledHref.href}${peeledHref.trailing}`;
  if (textIsUrl) {
    const peeledText = peelSentencePunctuation(text);
    return { href: peeledHref.href, text: peeledText.href, trailing: peeledText.trailing };
  }
  let label = text;
  let trailing = peeledHref.trailing;
  if (trailing && label.endsWith(trailing)) label = label.slice(0, -trailing.length);
  return { href: peeledHref.href, text: label, trailing };
}

/**
 * Marked link renderer. A URL followed by a period keeps that period outside
 * the anchor, even if the tokenizer hands the period to the renderer.
 * @param {{ link: Function }} renderer
 * @param {(href: string) => string} rewriteHref
 */
export function installLinkRenderer(renderer, rewriteHref) {
  renderer.link = function link({ href, tokens }) {
    const textHtml = this.parser.parseInline(tokens);
    const plain = decodeHtml(textHtml.replace(/<[^>]+>/g, ""));
    const separated = separateUrlPunctuation(href, plain);
    const next = rewriteHref(separated.href);
    const display = separated.text === plain ? textHtml : escapeHtml(separated.text);
    const external = /^https?:\/\//.test(next);
    const pdf = next.split("#")[0].endsWith(".pdf");
    let html;
    if (pdf) html = `<a href="${next}" target="_blank" rel="noopener">${display}</a>`;
    else if (!external) html = `<a href="${next}">${display}</a>`;
    else html = `<a href="${next}" target="_blank" rel="noopener noreferrer external">${display}</a>`;
    return html + escapeHtml(separated.trailing);
  };
}
