"use client";

import QRCode from "qrcode";
import { useEffect, useState } from "react";

export function RegisterShare() {
  const [url, setUrl] = useState("");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    const next = window.location.href;
    QRCode.toString(next, {
      type: "svg",
      margin: 1,
      color: { dark: "#070b12", light: "#f2f0e9" },
    })
      .then((markup) => {
        setUrl(next);
        setSvg(markup.replace(/<\?xml[^>]*>/, ""));
      })
      .catch(() => setSvg(""));
  }, []);

  return (
    <details className="trouble">
      <summary>Share this form</summary>
      {url ? (
        <p>
          Link: <a href={url}>{url}</a>
        </p>
      ) : (
        <p>The link appears after this page loads.</p>
      )}
      {svg ? <div className="qr-frame" dangerouslySetInnerHTML={{ __html: svg }} /> : null}
    </details>
  );
}
