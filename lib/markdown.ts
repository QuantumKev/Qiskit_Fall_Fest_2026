import { marked, type Tokens } from "marked";
import { decodeHtml, installLinkRenderer } from "@/lib/link-text.mjs";
import { basePath } from "@/lib/base-path";
import { slugify } from "@/lib/slug";

export { slugify };

export type TocItem = { depth: number; id: string; text: string };

const DOC_ROUTES: Record<string, string> = {
  "PARTICIPANT_HANDBOOK.md": "/handbook/",
  "NON-TECHNICAL-TRACK.md": "/roles/",
  "NOTEBOOK-CATALOG.md": "/catalog/",
  "FACILITATOR_GUIDE.md": "/facilitator/",
};

function rewriteHref(href: string) {
  const [path, hash] = href.split("#");
  const route = DOC_ROUTES[path];
  const suffix = hash ? `#${hash}` : "";
  if (route) return `${basePath()}${route}${suffix}`;
  if (path.startsWith("/") && !path.startsWith("//")) return `${basePath()}${path}${suffix}`;
  return href;
}

export function renderMarkdown(source: string) {
  const toc: TocItem[] = [];
  const renderer = new marked.Renderer();
  renderer.heading = function ({ tokens, depth }: Tokens.Heading) {
    const text = this.parser.parseInline(tokens);
    const plain = decodeHtml(text.replace(/<[^>]+>/g, ""));
    const id = slugify(plain);
    toc.push({ depth, id, text: plain });
    return `<h${depth} id="${id}">${text}</h${depth}>\n`;
  };
  installLinkRenderer(renderer, rewriteHref);

  const html = wrapMarkdownRegions(
    (marked.parse(source, { gfm: true, renderer, async: false }) as string)
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/gi, "'"),
  );
  return { html, toc };
}

const PROJECT_CARD_IDS = ["a-mapped-problem", "a-benchmark-or-comparison", "a-tool", "an-analysis"] as const;

function wrapProjectTypeCards(html: string) {
  const pattern = /<h3 id="(a-mapped-problem|a-benchmark-or-comparison|a-tool|an-analysis)">/g;
  const matches = [...html.matchAll(pattern)];
  if (matches.length !== 4) return html;
  if (matches.map((match) => match[1]).join() !== PROJECT_CARD_IDS.join()) return html;
  const start = matches[0].index ?? 0;
  const lastStart = matches[3].index ?? 0;
  const rest = html.slice(lastStart);
  const boundary = rest.search(/<h2 |<blockquote|<h3 id="choose-your-next-step">/);
  if (boundary < 0) return html;
  const end = lastStart + boundary;
  const block = html.slice(start, end);
  const pieces = [...block.matchAll(pattern)];
  const cards = pieces.map((piece, index) => {
    const from = piece.index ?? 0;
    const to = index + 1 < pieces.length ? (pieces[index + 1].index ?? block.length) : block.length;
    return `<section class="project-type-card">\n${block.slice(from, to).trim()}\n</section>`;
  });
  return `${html.slice(0, start)}<div class="project-type-grid">\n${cards.join("\n")}\n</div>\n${html.slice(end)}`;
}

function wrapCalloutHeading(html: string) {
  const token = '<h3 id="choose-your-next-step">';
  const start = html.indexOf(token);
  if (start < 0) return html;
  const relative = html.slice(start + token.length).search(/<h2 |<h3 /);
  if (relative < 0) return html;
  const end = start + token.length + relative;
  return `${html.slice(0, start)}<aside class="callout">\n${html.slice(start, end).trim()}\n</aside>\n${html.slice(end)}`;
}

function wrapTables(html: string) {
  return html.replace(
    /<table\b[\s\S]*?<\/table>/g,
    (table) => `<div class="table-wrap" tabindex="0">${table}</div>`,
  );
}

function wrapMarkdownRegions(html: string) {
  return wrapTables(wrapCalloutHeading(wrapProjectTypeCards(html)));
}
