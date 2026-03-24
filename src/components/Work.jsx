import React from "react";
import useInView from "../hooks/useInView";

const PROJECTS = [
  {
    num:    "01",
    title:  "Iron Room",
    desc:   "Mobile-first workout tracking app. Log lifts, track PRs, and manage training sessions with everything stored right in the browser.",
    tech:   "React · Vite · localStorage",
    accent: "#B84C1C",
    code:   "https://github.com/dlrethan/iron-room",
    live:   null,
    active: true,
  },
  {
    num:    "02",
    title:  "Advisor Tracker",
    desc:   "AI-powered tool for auto service advisors. Paste repair items to generate phone scripts and customer texts across 6 tones, with declined service recovery and CSI reminders.",
    tech:   "React · AI · JavaScript",
    accent: "#B84C1C",
    code:   "https://github.com/dlrethan/advisor-tracker",
    live:   null,
    active: true,
  },
  {
    num:    "03",
    title:  "YardDrop",
    desc:   "Garage sales that actually expire. A map-based marketplace for yard and estate sales with auto-expiry, address privacy, and in-app messaging.",
    tech:   "React · Maps · Full Stack",
    accent: "#B84C1C",
    code:   "https://github.com/dlrethan/yard-drop",
    live:   null,
    active: true,
  },
  {
    num:    "04",
    title:  "E-Commerce API",
    desc:   "RESTful back-end for an e-commerce platform. Full CRUD for products, categories, and tags via Sequelize and a MySQL database.",
    tech:   "Node.js · Express · MySQL · Sequelize",
    accent: "#B84C1C",
    code:   "https://github.com/dlrethan/E-Commerce-Back-End-with-mysql",
    live:   null,
    active: false,
  },
  {
    num:    "05",
    title:  "Express Note Taker",
    desc:   "Full-stack note-taking app with a persistent JSON backend. Create, save, and delete notes through a clean Express REST API.",
    tech:   "Node.js · Express · JSON",
    accent: "#B84C1C",
    code:   "https://github.com/dlrethan/Express-JS-Note-Taker",
    live:   null,
    active: false,
  },
  {
    num:    "06",
    title:  "Social Network API",
    desc:   "Back-end API for a social network. Users can share thoughts, react to friends posts, and build a friend list. Built with MongoDB and Mongoose.",
    tech:   "Node.js · Express · MongoDB · Mongoose",
    accent: "#B84C1C",
    code:   "https://github.com/dlrethan/SocialNetWork-BackEnd",
    live:   null,
    active: false,
  },
];

const Work = () => {
  const [ref, inView] = useInView();
  return (
    <div
      name="Work"
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
        03
      </span>

      <div
        style={{
          maxWidth:  "1200px",
          margin:    "0 auto",
          padding:   "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 48px)",
          width:     "100%",
          position:  "relative",
          zIndex:    1,
        }}
      >
        {/* Section label */}
        <div ref={ref} className={`reveal${inView ? " is-visible" : ""}`} style={{ marginBottom: "64px" }}>
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
            03 · Recent Work
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
            Projects
          </h2>
          <div className="gold-line" style={{ maxWidth: "100px" }} />
        </div>

        {/* Project grid */}
        <div className={`reveal${inView ? " is-visible" : ""} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`} style={{ gap: "2px", background: "rgba(26,20,16,0.08)", transitionDelay: "0.12s" }}>
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className="project-card-light"
            >
              {/* Left accent bar */}
              <div className="project-card-light__bar" />

              {/* Active badge */}
              {p.active && (
                <div
                  style={{
                    display:       "inline-flex",
                    alignItems:    "center",
                    gap:           "6px",
                    marginBottom:  "20px",
                  }}
                >
                  <div style={{ position: "relative", width: "7px", height: "7px" }}>
                    <div className="dot-ring" style={{ background: "#4caf6e" }} />
                    <div className="dot" style={{ background: "#4caf6e" }} />
                  </div>
                  <span
                    style={{
                      fontFamily:    "'JetBrains Mono', monospace",
                      fontSize:      "9px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color:         "#4caf6e",
                    }}
                  >
                    Active
                  </span>
                </div>
              )}

              {/* Number */}
              <p
                style={{
                  fontFamily:    "'JetBrains Mono', monospace",
                  fontSize:      "10px",
                  letterSpacing: "0.22em",
                  color:         "var(--gold)",
                  margin:        p.active ? "0 0 8px 0" : "0 0 8px 0",
                  marginTop:     p.active ? 0 : "0",
                }}
              >
                {p.num}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize:   "26px",
                  fontWeight: 600,
                  fontStyle:  "italic",
                  color:      "var(--cream)",
                  margin:     "0 0 14px 0",
                  lineHeight: 1.2,
                }}
              >
                {p.title}
              </h3>

              {/* Thin rule */}
              <div
                style={{
                  height:     "1px",
                  background: "var(--border)",
                  marginBottom: "16px",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontSize:   "13px",
                  lineHeight: 1.8,
                  color:      "var(--cream-dim)",
                  fontWeight: 300,
                  margin:     "0 0 20px 0",
                  flexGrow:   1,
                }}
              >
                {p.desc}
              </p>

              {/* Tech */}
              <p
                style={{
                  fontFamily:    "'JetBrains Mono', monospace",
                  fontSize:      "9px",
                  letterSpacing: "0.1em",
                  color:         "var(--muted)",
                  margin:        "0 0 24px 0",
                  textTransform: "uppercase",
                }}
              >
                {p.tech}
              </p>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "8px" }}>
                {p.live && (
                  <a href={p.live}>
                    <button className="btn-ghost btn-ghost-sm">Live ↗</button>
                  </a>
                )}
                <a href={p.code}>
                  <button className="btn-ghost btn-ghost-sm">Code ↗</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
