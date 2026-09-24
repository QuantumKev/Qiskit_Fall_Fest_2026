import Link from "next/link";

export default function NotFound() {
  return (
    <div className="stack">
      <h1>That page is not in the workshop.</h1>
      <Link className="button" href="/">
        Back to the journey
      </Link>
    </div>
  );
}
