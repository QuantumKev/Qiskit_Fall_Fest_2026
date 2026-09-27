export function BellFigure() {
  return (
    <figure className="circuit-figure">
      <figcaption>
        Bell circuit. In this drawing qubit 0 is the top wire. In a Qiskit bitstring, qubit 0 is the rightmost bit.
      </figcaption>
      <svg viewBox="0 0 640 168" role="img" aria-label="Two-qubit circuit. Hadamard on qubit 0, CNOT from qubit 0 to qubit 1, then measurement on both wires.">
        <line x1="28" y1="48" x2="600" y2="48" />
        <line x1="28" y1="112" x2="600" y2="112" />
        <text x="8" y="52">q0</text>
        <text x="8" y="116">q1</text>
        <rect x="92" y="28" width="40" height="40" />
        <text x="104" y="54">H</text>
        <line x1="168" y1="48" x2="168" y2="112" />
        <circle cx="168" cy="48" r="8" />
        <circle cx="168" cy="112" r="14" />
        <line x1="154" y1="112" x2="182" y2="112" />
        <line x1="168" y1="98" x2="168" y2="126" />
        <rect x="430" y="28" width="36" height="36" />
        <path d="M438 56c8-16 16-16 20 0" />
        <line x1="448" y1="64" x2="448" y2="72" />
        <rect x="430" y="94" width="36" height="36" />
        <path d="M438 122c8-16 16-16 20 0" />
        <line x1="448" y1="130" x2="448" y2="138" />
        <line x1="466" y1="46" x2="520" y2="46" />
        <line x1="466" y1="112" x2="520" y2="112" />
        <line x1="520" y1="28" x2="520" y2="148" />
        <text x="528" y="52">c0</text>
        <text x="528" y="116">c1</text>
      </svg>
    </figure>
  );
}

const BARS = [
  { bit: "00", weight: 100, label: "About half of the ideal shots" },
  { bit: "01", weight: 4, label: "Near zero on the simulator" },
  { bit: "10", weight: 4, label: "Near zero on the simulator" },
  { bit: "11", weight: 100, label: "About half of the ideal shots" },
];

export function ExpectedHistogram() {
  return (
    <figure className="histogram">
      <figcaption>
        Ideal simulator, 1024 shots. Counts pile on 00 and 11. Hardware can also show 01 and 10.
      </figcaption>
      <div className="hist" role="img" aria-label="Bar heights: 00 and 11 are tall. 01 and 10 are near zero.">
        {BARS.map((bar) => (
          <div key={bar.bit} className="hist-row">
            <span>{bar.bit}</span>
            <span className="hist-track">
              <span style={{ width: `${bar.weight}%` }} />
            </span>
            <span>{bar.label}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}
