export interface LegalSection {
  heading: string;
  body: string[];
}

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="fl-px" style={{ background: "#F6F5F0", padding: "160px 40px 120px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div
          style={{
            padding: "14px 18px",
            borderRadius: 12,
            background: "var(--warning-fill)",
            color: "var(--warning-text)",
            fontSize: 13.5,
            fontWeight: 500,
            lineHeight: 1.5,
            marginBottom: 40,
          }}
        >
          Draft — pending legal review. This page is placeholder copy, not final legal advice, and will be replaced once reviewed by counsel.
        </div>

        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", opacity: 0.55 }}>{updated}</div>
        <h1 style={{ margin: "14px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,5vw,56px)", lineHeight: 1.02, letterSpacing: "-.02em" }}>
          {title}
        </h1>
        <p style={{ margin: "22px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.7, opacity: 0.8 }}>{intro}</p>

        <div style={{ margin: "56px 0 0", display: "flex", flexDirection: "column", gap: 40 }}>
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-.01em" }}>{s.heading}</h2>
              <div style={{ margin: "12px 0 0", display: "flex", flexDirection: "column", gap: 12, fontSize: 15, fontWeight: 300, lineHeight: 1.75, opacity: 0.82 }}>
                {s.body.map((p, i) => (
                  <p key={i} style={{ margin: 0 }}>
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
