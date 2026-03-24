import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer
      style={{
        background:  "var(--surface)",
        borderTop:   "1px solid rgba(26,20,16,0.08)",
        padding:     "40px clamp(20px, 5vw, 48px)",
      }}
    >
      <div
        style={{
          maxWidth:       "1200px",
          margin:         "0 auto",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          flexWrap:       "wrap",
          gap:            "20px",
        }}
      >
        {/* Name */}
        <span
          style={{
            fontFamily:    "'Cormorant Garamond', serif",
            fontSize:      "20px",
            fontWeight:    600,
            fontStyle:     "italic",
            color:         "var(--cream)",
            letterSpacing: "0.04em",
          }}
        >
          Ethan De La Rosa
        </span>

        {/* Social icons */}
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {[
            { href: "https://github.com/dlrethan",                              icon: <FaGithub size={16} />,       label: "GitHub"   },
            { href: "https://www.linkedin.com/in/ethan-de-la-rosa-65422024b/", icon: <FaLinkedin size={16} />,     label: "LinkedIn" },
            { href: "mailto:dlrethan10@gmail.com",                              icon: <HiOutlineMail size={18} />,  label: "Email"    },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              style={{
                color:      "var(--muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily:    "'JetBrains Mono', monospace",
            fontSize:      "9px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color:         "var(--muted)",
            margin:        0,
          }}
        >
          © {new Date().getFullYear()} · Built with React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
