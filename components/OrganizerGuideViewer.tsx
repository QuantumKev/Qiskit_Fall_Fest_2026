const FALLBACK =
  "Your browser may not support an embedded PDF viewer. Open the guide full screen or download a copy to continue.";

export function OrganizerGuideViewer({ src }: { src: string }) {
  return (
    <div className="pdf-frame">
      <object data={src} type="application/pdf" title="DeepStation Hackathons Organizer Guide" aria-label="DeepStation Hackathons Organizer Guide">
        <p className="pdf-fallback">{FALLBACK}</p>
      </object>
    </div>
  );
}
