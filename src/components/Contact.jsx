import React from "react";

const Contact = () => {
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
      {/* Ghost number */}
      <span className="ghost-num" style={{ top: "-20px", right: "-10px" }}>
        04
      </span>

      {/* Ambient gradient */}
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
          padding:   "100px 48px",
          position:  "relative",
          zIndex:    1,
        }}
      >
        {/* Section label */}
        <div style={{ marginBottom: "52px" }}>
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
            04 — Contact
          </p>
          <h2
            style={{
              fontFamily:  "'Cormorant Garamond', serif",
              fontSize:    "clamp(40px, 7vw, 76px)",
              fontWeight:  600,
              fontStyle:   "italic",
              color:       "var(--cream)",
              lineHeight:  1.05,
              margin:      "0 0 20px 0",
            }}
          >
            Let's Work<br />Together.
          </h2>
          <div className="gold-line" style={{ maxWidth: "72px", marginBottom: "16px" }} />
          <a
            href="mailto:dlrethan10@gmail.com"
            style={{
              fontFamily:    "'JetBrains Mono', monospace",
              fontSize:      "11px",
              letterSpacing: "0.12em",
              color:         "var(--muted)",
              textDecoration: "none",
              transition:    "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            dlrethan10@gmail.com
          </a>
        </div>

        {/* Form */}
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
  );
};

export default Contact;
