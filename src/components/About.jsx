import React from "react";

const About = () => {
  return (
    <div
      name="About"
      style={{
        width:      "100%",
        minHeight:  "100vh",
        background: "var(--bg)",
        display:    "flex",
        alignItems: "center",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Ghost number */}
      <span className="ghost-num" style={{ top: "-20px", left: "-10px" }}>
        01
      </span>

      <div
        style={{
          maxWidth:  "1100px",
          margin:    "0 auto",
          padding:   "100px 48px",
          width:     "100%",
          position:  "relative",
          zIndex:    1,
        }}
      >
        {/* Section label */}
        <div style={{ marginBottom: "64px" }}>
          <p
            style={{
              fontFamily:    "'JetBrains Mono', monospace",
              fontSize:      "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color:         "var(--gold)",
              margin:        "0 0 14px 0",
            }}
          >
            01 — About
          </p>
          <div className="gold-line" style={{ maxWidth: "100px" }} />
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: editorial heading */}
          <div>
            <h2
              style={{
                fontFamily:    "'Cormorant Garamond', serif",
                fontSize:      "clamp(36px, 5.5vw, 68px)",
                fontWeight:    600,
                fontStyle:     "italic",
                lineHeight:    1.12,
                color:         "var(--cream)",
                margin:        0,
              }}
            >
              Aspiring to build the next generation of the web.
            </h2>
          </div>

          {/* Right: content */}
          <div>
            <p
              style={{
                fontSize:     "22px",
                fontWeight:   500,
                color:        "var(--cream)",
                lineHeight:   1.55,
                margin:       "0 0 28px 0",
              }}
            >
              Hello — I'm Ethan. Pleasure to meet you. Feel free to explore my work.
            </p>

            <div
              className="gold-line"
              style={{ maxWidth: "60px", marginBottom: "28px", opacity: 0.4 }}
            />

            <p
              style={{
                fontSize:   "15px",
                lineHeight: 1.95,
                color:      "var(--cream-dim)",
                fontWeight: 300,
                margin:     "0 0 20px 0",
              }}
            >
              I want to create projects that make the world a better and more
              convenient place. It's a dream of mine to work on features used by
              millions. I love coding because it reveals the beautiful logic
              behind how computers work — and the problem-solving process has
              become a genuine passion.
            </p>

            <p
              style={{
                fontSize:   "15px",
                lineHeight: 1.95,
                color:      "var(--cream-dim)",
                fontWeight: 300,
                margin:     0,
              }}
            >
              I learned through the bootcamp at UCR, on top of putting countless
              hours into practicing my craft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
