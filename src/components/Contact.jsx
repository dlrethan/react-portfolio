import React from "react";
import useInView from "../hooks/useInView";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  const [ref, inView] = useInView();
  return (
    <div
      name="Contact"
      id="Cont"
      style={{
        width:           "100%",
        minHeight:       "100vh",
        background:      "var(--bg)",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        position:        "relative",
        overflow:        "hidden",
      }}
    >
      <span className="ghost-num" style={{ top: "-20px", right: "-10px" }}>
        04
      </span>

      <div
        style={{
          position:     "absolute",
          bottom:       "-10%",
          left:         "-5%",
          width:        "60%",
          height:       "70%",
          background:   "radial-gradient(ellipse at center, rgba(200,169,110,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth:  "620px",
          width:     "100%",
          padding:   "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 48px)",
          position:  "relative",
          zIndex:    1,
        }}
      >
        {/* Section label */}
        <div ref={ref} className={`reveal${inView ? " is-visible" : ""}`} style={{ marginBottom: "52px" }}>
          <p
            style={{
              fontFamily:    "'JetBrains Mono', monospace",
              fontSize:      "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color:         "var(--gold)",
              margin:        "0 0 16px 0",
            }}
          >
            04 · Contact
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize:   "clamp(40px, 7vw, 76px)",
              fontWeight: 600,
              fontStyle:  "italic",
              color:      "var(--cream)",
              lineHeight: 1.05,
              margin:     "0 0 20px 0",
            }}
          >
            Let's Work<br />Together.
          </h2>
          <div className="gold-line" style={{ maxWidth: "72px", marginBottom: "20px" }} />

          {/* Email */}
          <a
            href="mailto:dlrethan10@gmail.com"
            style={{
              fontFamily:     "'JetBrains Mono', monospace",
              fontSize:       "11px",
              letterSpacing:  "0.12em",
              color:          "var(--muted)",
              textDecoration: "none",
              display:        "block",
              marginBottom:   "28px",
              transition:     "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            dlrethan10@gmail.com
          </a>

          {/* Secondary action buttons */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "4px" }}>
            <a
              href="https://www.linkedin.com/in/ethan-de-la-rosa-65422024b/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="btn-ghost"
                style={{ padding: "10px 20px", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <FaLinkedin size={13} /> LinkedIn
              </button>
            </a>
            <a
              href="https://docs.google.com/document/d/13CsNSRS8x5ozH_ytB4znlRz4z5A8gaisWyLx5tPditM/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="btn-ghost"
                style={{ padding: "10px 20px", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <BsFillPersonLinesFill size={13} /> Resume
              </button>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className={`reveal${inView ? " is-visible" : ""}`} style={{ transitionDelay: "0.12s" }}>
        <form
          method="post"
          action="https://getform.io/f/86f7f373-8484-4b3d-a401-170ae8c39332"
          style={{ display: "flex", flexDirection: "column", gap: "36px" }}
        >
          <input
            className="form-input"
            type="text"
            placeholder="Your Name"
            name="name"
          />
          <input
            className="form-input"
            type="email"
            placeholder="Your Email"
            name="email"
          />
          <textarea
            className="form-input"
            name="message"
            rows="6"
            placeholder="Your Message"
          />
          <div>
            <button type="submit" className="btn-ghost">
              Send Message →
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
