import { Fragment } from "react";
import { Link } from "react-router-dom";
import { GLOSSARY } from "@/lib/glossary";

const BY_SLUG = new Set(GLOSSARY.map((t) => t.slug));
const LINK = /\{\{([^|}]+)\|([^}]+)\}\}/g;

const cls =
  "text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-soft hover:decoration-gold";

/**
 * Renders article text with {{target|label}} links:
 *   {{mullion|mullions}}            -> /glossary#mullion
 *   {{/systems/cladding|Cladding}}  -> that path
 * Plain string in, React nodes out, so it is identical on the server and in the browser.
 */
export default function JournalText({ children }: { children: string }) {
  const out: (string | JSX.Element)[] = [];
  let last = 0;
  let i = 0;
  for (const m of children.matchAll(LINK)) {
    if (m.index! > last) out.push(children.slice(last, m.index));
    const [, target, label] = m;
    const to = target.startsWith("/") ? target : BY_SLUG.has(target) ? `/glossary#${target}` : "/glossary";
    out.push(
      <Link key={i++} to={to} className={cls}>
        {label}
      </Link>
    );
    last = m.index! + m[0].length;
  }
  if (last < children.length) out.push(children.slice(last));
  return (
    <>
      {out.map((n, k) => (
        <Fragment key={k}>{n}</Fragment>
      ))}
    </>
  );
}
