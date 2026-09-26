import QRCode from "qrcode";
import { headers } from "next/headers";
import { RegisterForm } from "@/components/RegisterForm";

export const metadata = { title: "Register · Qiskit Fall Fest" };

export default async function RegisterPage() {
  const headerList = await headers();
  const hostHeader = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "127.0.0.1:3010";
  const host = /^[A-Za-z0-9.:-]+$/.test(hostHeader) ? hostHeader : "127.0.0.1:3010";
  const proto = headerList.get("x-forwarded-proto") === "https" ? "https" : "http";
  const url = `${proto}://${host}/register`;
  const svg = (await QRCode.toString(url, {
    type: "svg",
    margin: 1,
    color: { dark: "#070b12", light: "#f2f0e9" },
  })).replace(/<\?xml[^>]*>/, "");

  return (
    <div className="stack guide">
      <p className="kicker">Workshop registration</p>
      <h1>Tell the organizers you are coming.</h1>
      <p className="lede">
        This form collects the email you will use with IBM Cloud. It does not collect passwords, API keys, CRNs, or payment cards. Responses are visible only to organizers.
      </p>
      <aside className="placeholder">
        <h2>Official registration link</h2>
        <p>TBA. This form records workshop attendance. It is not the IBM Quantum account, and it does not collect passwords, API keys, or CRNs.</p>
      </aside>
      <details className="trouble">
        <summary>Share this form</summary>
        <p>
          Link: <a href={url}>{url}</a>
        </p>
        <div className="qr-frame" dangerouslySetInnerHTML={{ __html: svg }} />
      </details>
      <RegisterForm />
    </div>
  );
}
