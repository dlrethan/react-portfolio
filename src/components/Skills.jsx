import React from "react";
import Css        from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactLogo  from "../assets/react.png";
import Html       from "../assets/html.png";
import Github     from "../assets/github.png";
import Tailwind   from "../assets/tailwind.png";

const SKILLS = [
  { name: "JavaScript",  logo: JavaScript, sub: "ES6+ · Async · DOM"           },
  { name: "React",       logo: ReactLogo,  sub: "Hooks · State · SPA"          },
  { name: "CSS",         logo: Css,        sub: "Flexbox · Grid · Animations"  },
  { name: "HTML",        logo: Html,       sub: "Semantic · Accessible"        },
  { name: "GitHub",      logo: Github,     sub: "Version Control · CI"         },
  { name: "Tailwind CSS",logo: Tailwind,   sub: "Utility-First Framework"      },
];

const Skills = () => {
  return (
    <div
      name="Skills"
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
      <span className="ghost-num" style={{ top: "-20px", right: "-10px" }}>
        02
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
            02 — Experience
          </p>
          <h2
            style={{
              fontFamily:    "'Cormorant Garamond', serif",
              fontSize:      "clamp(34px, 5vw, 60px)",
              fontWeight:    600,
              fontStyle:     "italic",
              color:         "var(--cream)",
              margin:        "0 0 16px 0",
              lineHeight:    1.1,
            }}
          >
            Skills & Technologies
          </h2>
          <div className="gold-line" style={{ maxWidth: "100px" }} />
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "2px", background: "rgba(200,169,110,0.06)" }}
        >
          {SKILLS.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                {/* Logo */}
                <div
                  style={{
                    width:          "48px",
                    height:         "48px",
                    flexShrink:     0,
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    style={{
                      maxWidth:   "40px",
                      maxHeight:  "40px",
                      objectFit:  "contain",
                      filter:     "brightness(0.88) saturate(0.8)",
                      transition: "filter 0.3s",
                    }}
                  />
                </div>

                {/* Text */}
                <div>
                  <p
                    style={{
                      fontFamily:  "'DM Sans', sans-serif",
                      fontSize:    "15px",
                      fontWeight:  500,
                      color:       "var(--cream)",
                      margin:      "0 0 5px 0",
                    }}
                  >
                    {skill.name}
                  </p>
                  <p
                    style={{
                      fontFamily:    "'JetBrains Mono', monospace",
                      fontSize:      "9px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color:         "var(--muted)",
                      margin:        0,
                    }}
                  >
                    {skill.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
