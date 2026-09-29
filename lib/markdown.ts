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

  const html = (marked.parse(source, { gfm: true, renderer, async: false }) as string)
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'");
  return { html, toc };
}
