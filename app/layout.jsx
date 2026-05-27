export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #050510, #0d0d1f)",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "10px",
          color: "#00e5ff",
        }}
      >
        DesignForge Studio
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          color: "#cfcfcf",
          lineHeight: "1.6",
        }}
      >
        AI-powered tools for creators, clothing brands, storytellers,
        and dystopian digital experiences.
      </p>

      <div style={{ marginTop: "30px" }}>
        <button
          style={{
            padding: "14px 24px",
            fontSize: "1rem",
            background: "#00e5ff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Start Creating
        </button>
      </div>
    </main>
  );
}