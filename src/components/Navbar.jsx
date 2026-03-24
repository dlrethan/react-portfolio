import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NAV_ITEMS = [
  { label: "Home",       to: "Home",    offset: 0    },
  { label: "About",      to: "About",   offset: 0    },
  { label: "Experience", to: "Skills",  offset: -80  },
  { label: "Projects",   to: "Work",    offset: -40  },
  { label: "Contact",    to: "Contact", offset: 0    },
];

const Navbar = () => {
  const [nav,      setNav]      = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Main bar ── */}
      <nav
        style={{
          position:     "fixed",
          top: 0, left: 0, right: 0,
          zIndex:       500,
          height:       "72px",
          display:      "flex",
          alignItems:   "center",
          justifyContent: "space-between",
          padding:      "0 48px",
          background:   scrolled ? "rgba(13,13,13,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(200,169,110,0.08)"
            : "1px solid transparent",
          transition:   "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* Monogram */}
        <span
          style={{
            fontFamily:  "'Cormorant Garamond', serif",
            fontSize:    "26px",
            fontWeight:  600,
            fontStyle:   "italic",
            color:       "var(--cream)",
            letterSpacing: "0.12em",
            userSelect:  "none",
          }}
        >
          EDR
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex" style={{ gap: "40px", listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_ITEMS.map(({ label, to, offset }) => (
            <li key={to} style={{ padding: 0 }}>
              <Link to={to} smooth duration={600} offset={offset} className="nav-item">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden"
          style={{ background: "none", border: "none", color: "var(--cream)", fontSize: "18px" }}
          aria-label="Toggle menu"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      {nav && (
        <div
          style={{
            position:       "fixed",
            inset:          0,
            background:     "rgba(13,13,13,0.97)",
            backdropFilter: "blur(20px)",
            zIndex:         450,
            display:        "flex",
            flexDirection:  "column",
            justifyContent: "center",
            alignItems:     "center",
            gap:            "52px",
          }}
        >
          {/* Close */}
          <button
            onClick={() => setNav(false)}
            style={{
              position:   "absolute",
              top:        "28px",
              right:      "28px",
              background: "none",
              border:     "none",
              color:      "var(--muted)",
              fontSize:   "20px",
            }}
          >
            <FaTimes />
          </button>

          {NAV_ITEMS.map(({ label, to, offset }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={600}
              offset={offset}
              onClick={() => setNav(false)}
              style={{
                fontFamily:    "'Cormorant Garamond', serif",
                fontSize:      "clamp(36px, 8vw, 56px)",
                fontWeight:    500,
                fontStyle:     "italic",
                color:         "var(--cream)",
                letterSpacing: "0.02em",
                lineHeight:    1,
              }}
            >
              {label}
            </Link>
          ))}

          {/* Social row */}
          <div style={{ display: "flex", gap: "28px", marginTop: "16px" }}>
            {[
              { href: "https://www.linkedin.com/in/ethan-de-la-rosa-65422024b/", icon: <FaLinkedin size={18} /> },
              { href: "https://github.com/dlrethan",                              icon: <FaGithub   size={18} /> },
              { href: "mailto:dlrethan10@gmail.com",                              icon: <HiOutlineMail size={20} /> },
            ].map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                style={{ color: "var(--muted)", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ── Social sidebar (desktop) ── */}
      <div className="social-sidebar hidden lg:flex">
        <a href="https://www.linkedin.com/in/ethan-de-la-rosa-65422024b/" className="social-item">
          LinkedIn <FaLinkedin size={13} />
        </a>
        <a href="https://github.com/dlrethan" className="social-item">
          GitHub <FaGithub size={13} />
        </a>
        <a href="mailto:dlrethan10@gmail.com" className="social-item">
          Email <HiOutlineMail size={14} />
        </a>
        <a
          href="https://docs.google.com/document/d/13CsNSRS8x5ozH_ytB4znlRz4z5A8gaisWyLx5tPditM/edit?usp=sharing"
          className="social-item"
        >
          Resume <BsFillPersonLinesFill size={13} />
        </a>
      </div>
    </>
  );
};

export default Navbar;
