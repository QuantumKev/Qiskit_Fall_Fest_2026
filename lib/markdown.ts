import { marked, type Tokens } from "marked";
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
    const plain = text.replace(/<[^>]+>/g, "");
    const id = slugify(plain);
    toc.push({ depth, id, text: plain });
    return `<h${depth} id="${id}">${text}</h${depth}>\n`;
  };
  renderer.link = function ({ href, tokens }: Tokens.Link) {
    const text = this.parser.parseInline(tokens);
    const next = rewriteHref(href);
    const external = /^https?:\/\//.test(next);
    if (next.split("#")[0].endsWith(".pdf")) return `<a href="${next}" target="_blank" rel="noopener">${text}</a>`;
    if (!external) return `<a href="${next}">${text}</a>`;
    return `<a href="${next}" target="_blank" rel="noopener noreferrer external">${text}</a>`;
  };

  const html = marked.parse(source, { gfm: true, renderer, async: false }) as string;
  return { html, toc };
}
