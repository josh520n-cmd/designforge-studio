export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#050816", color: "white", fontFamily: "Arial", padding: "28px" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "70px" }}>
        <h2 style={{ color: "#00e5ff" }}>DESIGNFORGE</h2>
        <button style={{ background: "linear-gradient(90deg,#00e5ff,#c026ff)", color: "white", border: "none", borderRadius: "12px", padding: "12px 18px", fontWeight: "bold" }}>
          Get Started
        </button>
      </nav>

      <section style={{ maxWidth: "900px" }}>
        <p style={{ color: "#c026ff", fontWeight: "bold", letterSpacing: "2px" }}>
          AI-POWERED CREATIVE PLATFORM
        </p>

        <h1 style={{ fontSize: "clamp(3rem, 14vw, 7rem)", lineHeight: ".9", margin: "20px 0" }}>
          CREATE.<br />
          DESIGN.<br />
          <span style={{ background: "linear-gradient(90deg,#00e5ff,#c026ff)", WebkitBackgroundClip: "text", color: "transparent" }}>
            DOMINATE.
          </span>
        </h1>

        <p style={{ color: "#cfcfcf", fontSize: "1.2rem", lineHeight: "1.7", maxWidth: "650px" }}>
          The all-in-one AI studio for creators, clothing brands, storytellers, and futuristic digital experiences.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "32px" }}>
          <button style={{ background: "linear-gradient(90deg,#00e5ff,#c026ff)", color: "white", border: "none", borderRadius: "16px", padding: "16px 26px", fontWeight: "bold", fontSize: "1rem" }}>
            Start Creating
          </button>
          <button style={{ background: "rgba(255,255,255,.06)", color: "white", border: "1px solid rgba(255,255,255,.18)", borderRadius: "16px", padding: "16px 26px", fontWeight: "bold", fontSize: "1rem" }}>
            Explore Tools
          </button>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginTop: "70px" }}>
        {["AI Generation", "Mockup Studio", "Brand Kit", "Instant Export"].map((item) => (
          <div key={item} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(0,229,255,.25)", borderRadius: "22px", padding: "26px", boxShadow: "0 0 30px rgba(192,38,255,.15)" }}>
            <h3 style={{ color: "#00e5ff" }}>{item}</h3>
            <p style={{ color: "#aaa", lineHeight: "1.6" }}>
              Futuristic tools built for creators who want to move fast and stand out.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}