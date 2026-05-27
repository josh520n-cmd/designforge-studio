export default function Home() {
  const features = ["AI Generation", "Mockup Studio", "Brand Kit", "Instant Export"];

  return (
    <main style={{ minHeight: "100vh", background: "#030712", color: "white", fontFamily: "Arial", overflow: "hidden" }}>
      <section style={{ position: "relative", padding: "32px", minHeight: "100vh" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top right, rgba(192,38,255,.35), transparent 35%), radial-gradient(circle at left, rgba(0,229,255,.25), transparent 30%)" }} />

        <nav style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ color: "#00e5ff", letterSpacing: "2px" }}>DESIGNFORGE</h2>
          <button style={buttonStyle}>Get Started</button>
        </nav>

        <div style={{ position: "relative", marginTop: "80px", maxWidth: "900px" }}>
          <p style={{ color: "#c026ff", fontWeight: "bold", letterSpacing: "4px" }}>
            AI-POWERED CREATIVE PLATFORM
          </p>

          <h1 style={{ fontSize: "clamp(3.5rem, 14vw, 8rem)", lineHeight: ".9", margin: "20px 0" }}>
            CREATE.<br />
            DESIGN.<br />
            <span style={gradientText}>DOMINATE.</span>
          </h1>

          <p style={{ color: "#cbd5e1", fontSize: "1.2rem", lineHeight: "1.7", maxWidth: "650px" }}>
            A futuristic AI studio for creators, clothing brands, storytellers, and digital entrepreneurs.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "32px" }}>
            <button style={buttonStyle}>Start Creating</button>
            <button style={darkButtonStyle}>Explore Tools</button>
          </div>
        </div>

        <div style={dashboardStyle}>
          <div style={{ color: "#00e5ff", fontWeight: "bold", marginBottom: "16px" }}>STUDIO DASHBOARD</div>
          <div style={inputStyle}>Describe your idea...</div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "14px", marginTop: "18px" }}>
            {["Cyber hoodie", "Neon logo", "Dark ad", "Mockup"].map((item) => (
              <div key={item} style={miniCardStyle}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 32px 80px" }}>
        <p style={{ color: "#c026ff", textAlign: "center", letterSpacing: "4px", fontWeight: "bold" }}>POWERFUL FEATURES</p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(2rem, 8vw, 4rem)" }}>
          Create <span style={gradientText}>without limits.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginTop: "40px" }}>
          {features.map((item) => (
            <div key={item} style={cardStyle}>
              <h3 style={{ color: "#00e5ff" }}>{item}</h3>
              <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>
                Build futuristic content, designs, and brand assets faster with AI-powered creative tools.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const gradientText = {
  background: "linear-gradient(90deg,#00e5ff,#8b5cf6,#c026ff)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const buttonStyle = {
  background: "linear-gradient(90deg,#00e5ff,#8b5cf6,#c026ff)",
  color: "white",
  border: "none",
  borderRadius: "16px",
  padding: "16px 24px",
  fontWeight: "bold",
  fontSize: "1rem",
  boxShadow: "0 0 30px rgba(192,38,255,.35)",
};

const darkButtonStyle = {
  background: "rgba(255,255,255,.06)",
  color: "white",
  border: "1px solid rgba(255,255,255,.18)",
  borderRadius: "16px",
  padding: "16px 24px",
  fontWeight: "bold",
  fontSize: "1rem",
};

const dashboardStyle = {
  position: "relative",
  marginTop: "70px",
  background: "rgba(15,23,42,.72)",
  border: "1px solid rgba(0,229,255,.28)",
  borderRadius: "28px",
  padding: "24px",
  boxShadow: "0 0 50px rgba(0,229,255,.12), 0 0 60px rgba(192,38,255,.12)",
};

const inputStyle = {
  background: "rgba(0,0,0,.35)",
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: "18px",
  padding: "22px",
  color: "#64748b",
};

const miniCardStyle = {
  background: "linear-gradient(135deg, rgba(0,229,255,.14), rgba(192,38,255,.12))",
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: "18px",
  padding: "26px",
  minHeight: "80px",
};

const cardStyle = {
  background: "rgba(15,23,42,.75)",
  border: "1px solid rgba(255,255,255,.1)",
  borderRadius: "24px",
  padding: "28px",
  boxShadow: "0 0 35px rgba(0,229,255,.08)",
};