import Link from "next/link";

export default function NotFound() {
  return (
    <div className="stack">
      <h1>This link does not match a page in the workshop.</h1>
      <p>The start page will walk you back in. Bring your curiosity. We’ll help with the qubits.</p>
      <Link className="button" href="/">
        Back to the start
      </Link>
    </div>
  );
}
