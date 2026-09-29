import { CO_LEADS, EVENT, LEAD, LOCAL_HOSTS, formatCoLead } from "@/content/event";

export function HostDirectory() {
  return (
    <section id="hosts" className="prose card" aria-labelledby="hosts-heading">
      <h2 id="hosts-heading">Lead, co-leads, and local hosts</h2>
      <p>
        {EVENT.name} is part of {EVENT.series}. Each university card lists the verified local lead, the confirmed venue, and a registration link when one is public.
      </p>
      <ul className="co-lead-list">
        <li>{formatCoLead(LEAD)}</li>
        {CO_LEADS.map((lead) => (
          <li key={lead.name}>{formatCoLead(lead)}</li>
        ))}
      </ul>
      <p>
        If a card does not list a public address, send program questions to{" "}
        <a href={`mailto:${EVENT.programEmail}`}>{EVENT.programEmail}</a>. {EVENT.contactOrder}
      </p>
      <div className="host-grid">
        {LOCAL_HOSTS.map((host) => (
          <article key={host.university} className="host-card">
            <h3>{host.university}</h3>
            <p>
              <span className="meta">Local lead</span>
              <br />
              {host.leads.join(", ")}
            </p>
            <p>
              <span className="meta">Venue</span>
              <br />
              {host.venue}
            </p>
            <p>
              <span className="meta">Registration</span>
              <br />
              {host.registration ? (
                <a href={host.registration} target="_blank" rel="noopener noreferrer external">
                  Local registration
                </a>
              ) : (
                EVENT.unconfirmedDetails
              )}
            </p>
            <p>
              <span className="meta">Contact</span>
              <br />
              {host.contacts.map((contact, index) => (
                <span key={contact.label}>
                  {index > 0 ? <br /> : null}
                  {contact.href ? <a href={contact.href}>{contact.label}</a> : contact.label}
                </span>
              ))}
              {host.contacts.some((contact) => contact.href) ? null : (
                <>
                  . Questions: <a href={`mailto:${EVENT.programEmail}`}>{EVENT.programEmail}</a>
                </>
              )}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
