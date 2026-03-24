import React from "react";
import { SiNodedotjs, SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import Css        from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactLogo  from "../assets/react.png";
import Html       from "../assets/html.png";
import Github     from "../assets/github.png";
import Tailwind   from "../assets/tailwind.png";
import Aws        from "../assets/aws.png";

const SKILLS = [
  // — Frontend —
  { name: "JavaScript",  type: "img",  logo: JavaScript, sub: "ES6+ · Async · DOM"          },
  { name: "React",       type: "img",  logo: ReactLogo,  sub: "Hooks · State · SPA"         },
  { name: "HTML",        type: "img",  logo: Html,       sub: "Semantic · Accessible"       },
  { name: "CSS",         type: "img",  logo: Css,        sub: "Flexbox · Grid · Animations" },
  { name: "Tailwind CSS",type: "img",  logo: Tailwind,   sub: "Utility-First Framework"     },
  { name: "GitHub",      type: "img",  logo: Github,     sub: "Version Control · CI"        },
  // — Backend —
  { name: "Node.js",     type: "icon", icon: SiNodedotjs, color: "#68a063", sub: "Server · REST · CLI"         },
  { name: "Express.js",  type: "icon", icon: SiExpress,   color: "#c8a96e", sub: "Routing · Middleware · API"  },
  { name: "MySQL",       type: "icon", icon: SiMysql,     color: "#4479a1", sub: "Relational · Sequelize ORM"  },
  { name: "MongoDB",     type: "icon", icon: SiMongodb,   color: "#47a248", sub: "NoSQL · Mongoose ODM"        },
  { name: "AWS",         type: "img",  logo: Aws,        sub: "Cloud · S3 · Deploy"         },
];

const SkillIcon = ({ skill }) => {
  if (skill.type === "icon") {
    const Icon = skill.icon;
    return (
      <Icon
        size={38}
        style={{ color: skill.color, opacity: 0.85, transition: "opacity 0.3s" }}
      />
    );
  }
  return (
    <img
      src={skill.logo}
      alt={skill.name}
      style={{
        maxWidth:   "38px",
        maxHeight:  "38px",
        objectFit:  "contain",
        filter:     "brightness(0.88) saturate(0.75)",
        transition: "filter 0.3s",
      }}
    />
  );
};

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
              fontFamily: "'Cormorant Garamond', serif",
              fontSize:   "clamp(34px, 5vw, 60px)",
              fontWeight: 600,
              fontStyle:  "italic",
              color:      "var(--cream)",
              margin:     "0 0 16px 0",
              lineHeight: 1.1,
            }}
          >
            Skills & Technologies
          </h2>
          <div className="gold-line" style={{ maxWidth: "100px" }} />
        </div>

        {/* Category labels */}
        <div style={{ marginBottom: "24px" }}>
          <p
            style={{
              fontFamily:    "'JetBrains Mono', monospace",
              fontSize:      "9px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color:         "var(--muted)",
              margin:        0,
            }}
          >
            Frontend · Backend · Cloud
          </p>
        </div>

        {/* Grid — 2 cols mobile, 3 sm, 4 lg */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          style={{ gap: "2px", background: "rgba(200,169,110,0.06)" }}
        >
          {SKILLS.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <div
                  style={{
                    width:          "44px",
                    height:         "44px",
                    flexShrink:     0,
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                  }}
                >
                  <SkillIcon skill={skill} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize:   "14px",
                      fontWeight: 500,
                      color:      "var(--cream)",
                      margin:     "0 0 4px 0",
                    }}
                  >
                    {skill.name}
                  </p>
                  <p
                    style={{
                      fontFamily:    "'JetBrains Mono', monospace",
                      fontSize:      "8px",
                      letterSpacing: "0.1em",
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
