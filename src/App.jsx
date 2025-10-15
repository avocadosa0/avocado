import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function App() {
  const links = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/avocado.bacalar/?igsh=bjcycWFuM2ltZDho#",
      color: "#E4405F",
      icon: <FaInstagram size={22} style={{ marginRight: "10px" }} />,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@avocado.bacalar?_t=ZS-90XtBdJqyH9&_r=1",
      color: "#010101",
      icon: <FaTiktok size={22} style={{ marginRight: "10px" }} />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1Q49sgxi5w/?mibextid=wwXIfr",
      color: "#1877F2",
      icon: <FaFacebook size={22} style={{ marginRight: "10px" }} />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.link/i236q8",
      color: "#25D366",
      icon: <FaWhatsapp size={22} style={{ marginRight: "10px" }} />,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        background:
          "linear-gradient(160deg, #A8E6CF 0%, #56ab2f 50%, #379237 100%)", // 🌿 degradado verde moderno
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        padding: "2rem 1rem",
        textAlign: "center",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          marginBottom: "1.5rem",
          border: "3px solid rgba(255,255,255,0.8)",
          backgroundColor: "#fff",
        }}
      >
        <img
          src="src/assets/avocado.jpeg"
          alt="Avocado Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* TÍTULO */}
      <h1
        style={{
          fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          fontWeight: "700",
          marginBottom: "1rem",
          letterSpacing: "0.5px",
          textShadow: "1px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        Avocado Bacalar
      </h1>

      {/* ENLACES */}
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          display: "flex",
          flexDirection: "column",
          gap: "0.9rem",
        }}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              borderRadius: "12px",
              backgroundColor: link.color,
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
            }}
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </div>

      {/* PIE DE PÁGINA */}
      <p
        style={{
          marginTop: "2.5rem",
          fontSize: "0.9rem",
          opacity: 0.85,
          textShadow: "0 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        © {new Date().getFullYear()} Avocado Bacalar 🌿
      </p>
    </div>
  );
}
