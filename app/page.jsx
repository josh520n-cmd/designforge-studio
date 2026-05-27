export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        fontFamily: "Arial",
        overflow: "hidden",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2
          style={{
            color: "#00e5ff",
            margin: 0,
            fontSize: "1.5rem",
          }}
        >
          DESIGNFORGE
        </h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <p>Features</p>
          <p>Tools</p>
          <p>Pricing</p>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 40px",
          gap: "40px",
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <div
            style={{
              color: "#c026ff",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            AI-POWERED CREATIVE PLATFORM
          </div>

          <h1
            style={{
              fontSize: "5rem",
              lineHeight: "0.95",
              marginBottom: "20px",
            }}
          >
            CREATE.
            <br />
            DESIGN.
            <br />
            <span
              style={{
                background: "linear-gradient(to right,#00e5ff,#c026ff)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              DOMINATE.
            </span>
          </h1>

          <p
            style={{
              color: "#b0b0b0",
              fontSize: "1.2rem",
              maxWidth: "600px",
              lineHeight: "1.7",
            }}
          >
            The all-in-one AI studio for creators, clothing brands,
            storytellers, and futuristic digital experiences.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "linear-gradient(to right,#00e5ff,#c026ff)",
                border: "none",
                padding: "16px 28px",
                borderRadius: "14px",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Start Creating
            </button>

            <button
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "16px 28px",
                borderRadius: "14px",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Explore Tools
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
            alt="cyberpunk"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "24px",
              boxShadow: "0 0 40px rgba(192,38,255,0.4)",
            }}
          />
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {[
          "AI Image Generation",
          "Mockup Studio",
          "Brand Kits",
          "Instant Exports",
        ].map((item) => (
          <div
            key={item}
            style={{
              padding: "30px",
              borderRadius: "20px",
              background: "#0d1224",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 style={{ color: "#00e5ff" }}>{item}</h3>

            <p