export default function Marquee({ items }: { items: string[] }) {
  return (
    <section style={{ background: "#12271F", padding: "56px 0", overflow: "hidden", borderBottom: "1px solid rgba(246,245,240,.1)" }}>
      <p
        style={{
          margin: "0 0 34px",
          textAlign: "center",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: ".26em",
          color: "rgba(246,245,240,.4)",
          textTransform: "uppercase",
        }}
      >
        early partner clubs
      </p>
      <div className="fl-marquee-track" style={{ display: "flex", width: "200%" }}>
        {[false, true].map((hidden) => (
          <div
            key={String(hidden)}
            aria-hidden={hidden}
            style={{ display: "flex", alignItems: "center", gap: 78, width: "50%", flex: "none", paddingRight: 78 }}
          >
            {items.map((name) => (
              <span
                key={name}
                style={{
                  flex: "none",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 23,
                  letterSpacing: "-.01em",
                  color: "rgba(246,245,240,.34)",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
