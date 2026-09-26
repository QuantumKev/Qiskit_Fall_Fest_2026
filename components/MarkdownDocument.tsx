import { renderMarkdown } from "@/lib/markdown";

export function MarkdownDocument({ source, label }: { source: string; label: string }) {
  const { html, toc } = renderMarkdown(source);
  const contents = toc.filter((item) => item.depth === 2 || item.depth === 3);

  return (
    <div className="doc">
      <nav className="toc" aria-label={`${label} contents`}>
        <p className="kicker">Contents</p>
        <ol>
          {contents.map((item) => (
            <li key={item.id} className={item.depth === 3 ? "toc-sub" : undefined}>
              <a href={`#${item.id}`}>{item.text}</a>
            </li>
          ))}
        </ol>
      </nav>
      <article className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
