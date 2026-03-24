import React from "react";
import { HiAcademicCap } from "react-icons/hi";

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
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize:   "clamp(36px, 5.5vw, 68px)",
                fontWeight: 600,
                fontStyle:  "italic",
                lineHeight: 1.12,
                color:      "var(--cream)",
                margin:     0,
              }}
            >
              Aspiring to build the next generation of the web.
            </h2>
          </div>

          {/* Right */}
          <div>
            <p
              style={{
                fontSize:   "22px",
                fontWeight: 500,
                color:      "var(--cream)",
                lineHeight: 1.55,
                margin:     "0 0 28px 0",
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
                margin:     "0 0 36px 0",
              }}
            >
              I put countless hours into practicing my craft, building real
              projects across the full stack — from REST APIs and database
              schemas to polished React frontends.
            </p>

            {/* UCR Credential */}
            <div
              style={{
                border:    "1px solid rgba(200,169,110,0.15)",
                padding:   "20px 24px",
                background: "rgba(200,169,110,0.03)",
                display:   "flex",
                alignItems: "flex-start",
                gap:       "16px",
              }}
            >
              <HiAcademicCap
                size={22}
                style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}
              />
              <div>
                <p
                  style={{
                    fontFamily:    "'JetBrains Mono', monospace",
                    fontSize:      "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color:         "var(--gold)",
                    margin:        "0 0 6px 0",
                  }}
                >
                  Education
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize:   "14px",
                    fontWeight: 500,
                    color:      "var(--cream)",
                    margin:     "0 0 4px 0",
                  }}
                >
                  Full Stack Web Development Bootcamp
                </p>
                <p
                  style={{
                    fontFamily:    "'JetBrains Mono', monospace",
                    fontSize:      "10px",
                    letterSpacing: "0.08em",
                    color:         "var(--muted)",
                    margin:        0,
                  }}
                >
                  UC Riverside Extension · 2022–2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
