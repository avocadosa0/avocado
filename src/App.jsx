import React from "react";

export default function App() {
  const links = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/avocado.bacalar/?igsh=bjcycWFuM2ltZDho#",
      color: "#E4405F",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@avocado.bacalar?_t=ZS-90XtBdJqyH9&_r=1",
      color: "#010101",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1Q49sgxi5w/?mibextid=wwXIfr",
      color: "#1877F2",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #A8E063 0%, #56AB2F 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "sans-serif",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        🥑 Avocado Bacalar
      </h1>

      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "80%",
            maxWidth: "320px",
            textAlign: "center",
            padding: "1rem",
            margin: "0.5rem 0",
            borderRadius: "12px",
            backgroundColor: link.color,
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
        >
          {link.name}
        </a>
      ))}

      <p style={{ marginTop: "2rem", fontSize: "0.9rem", opacity: 0.8 }}>
        © {new Date().getFullYear()} Avocado Bacalar 🌿
      </p>
    </div>
  );
}
