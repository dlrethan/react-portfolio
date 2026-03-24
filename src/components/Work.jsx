import React from "react";

const PROJECTS = [
  // ── Active / recent ──
  {
    num:      "01",
    title:    "Iron Room",
    desc:     "Mobile-first workout tracking app. Log lifts, track PRs, and manage training sessions — all stored client-side.",
    tech:     "React · Vite · localStorage",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
    accent:   "#4f8ef7",
    code:     "https://github.com/dlrethan/iron-room",
    live:     null,
    active:   false,
  },
  {
    num:      "02",
    title:    "Advisor Tracker",
    desc:     "AI-powered tool for auto service advisors. Paste repair items to generate phone scripts and customer texts across 6 tones, with declined service recovery and CSI reminders.",
    tech:     "React · AI · JavaScript",
    gradient: "linear-gradient(135deg, #0d1b0d 0%, #1a2e1a 40%, #0f2e1a 100%)",
    accent:   "#4caf6e",
    code:     "https://github.com/dlrethan/advisor-tracker",
    live:     null,
    active:   true,
  },
  {
    num:      "03",
    title:    "YardDrop",
    desc:     "Garage sales that actually expire. A map-based marketplace for yard and estate sales with auto-expiry, address privacy, and in-app messaging.",
    tech:     "React · Maps · Full Stack",
    gradient: "linear-gradient(135deg, #1c1208 0%, #2e1e08 40%, #3d2a0a 100%)",
    accent:   "#e8a020",
    code:     "https://github.com/dlrethan/yard-drop",
    live:     null,
    active:   true,
  },
  // ── Backend / bootcamp ──
  {
    num:      "04",
    title:    "E-Commerce API",
    desc:     "RESTful back-end for an e-commerce platform. Full CRUD for products, categories, and tags via Sequelize and a MySQL database.",
    tech:     "Node.js · Express · MySQL · Sequelize",
    gradient: "linear-gradient(135deg, #160d2e 0%, #1e1040 40%, #130d30 100%)",
    accent:   "#9b7fe8",
    code:     "https://github.com/dlrethan/E-Commerce-Back-End-with-mysql",
    live:     null,
    active:   false,
  },
  {
    num:      "05",
    title:    "Express Note Taker",
    desc:     "Full-stack note-taking app with a persistent JSON backend. Create, save, and delete notes through a clean Express REST API.",
    tech:     "Node.js · Express · JSON",
    gradient: "linear-gradient(135deg, #0e1a1c 0%, #112428 40%, #0a1a1e 100%)",
    accent:   "#5bc4cc",
    code:     "https://github.com/dlrethan/Express-JS-Note-Taker",
    live:     null,
    active:   false,
  },
  {
    num:      "06",
    title:    "Social Network API",
    desc:     "Back-end API for a social network. Users can share thoughts, react to friends' posts, and build a friend list — powered by MongoDB and Mongoose.",
    tech:     "Node.js · Express · MongoDB · Mongoose",
    gradient: "linear-gradient(135deg, #0d1c10 0%, #112618 40%, #0a1e10 100%)",
    accent:   "#47a248",
    code:     "https://github.com/dlrethan/SocialNetWork-BackEnd",
    live:     null,
    active:   false,
  },
];

const Work = () => {
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
            03 — Recent Work
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

        {/* Project grid — 3×2 */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "2px", background: "rgba(200,169,110,0.06)" }}
        >
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className="project-card"
              style={{ minHeight: "380px" }}
            >
              {/* Active badge */}
              {p.active && (
                <div className="active-badge">
                  <div className="dot-wrap">
                    <div className="dot-ring" />
                    <div className="dot" />
                  </div>
                  <span>Active</span>
                </div>
              )}

              {/* Gradient bg */}
              <div
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: p.gradient,
                  zIndex:     0,
                }}
              />

              {/* Decorative rings */}
              <div
                style={{
                  position:     "absolute",
                  top:          "20px",
                  right:        "20px",
                  width:        "110px",
                  height:       "110px",
                  borderRadius: "50%",
                  border:       `1px solid ${p.accent}1a`,
                  zIndex:       1,
                }}
              />
              <div
                style={{
                  position:     "absolute",
                  top:          "38px",
                  right:        "38px",
                  width:        "74px",
                  height:       "74px",
                  borderRadius: "50%",
                  border:       `1px solid ${p.accent}2e`,
                  zIndex:       1,
                }}
              />

              {/* Bottom gradient fade */}
              <div
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: "linear-gradient(to top, rgba(13,13,13,0.96) 0%, transparent 58%)",
                  zIndex:     2,
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  bottom:   0,
                  left:     0,
                  right:    0,
                  padding:  "28px",
                  zIndex:   3,
                }}
              >
                <p
                  style={{
                    fontFamily:    "'JetBrains Mono', monospace",
                    fontSize:      "10px",
                    letterSpacing: "0.22em",
                    color:         p.accent,
                    margin:        "0 0 8px 0",
                  }}
                >
                  {p.num}
                </p>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize:   "26px",
                    fontWeight: 600,
                    fontStyle:  "italic",
                    color:      "var(--cream)",
                    margin:     "0 0 10px 0",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize:   "13px",
                    lineHeight: 1.7,
                    color:      "var(--cream-dim)",
                    fontWeight: 300,
                    margin:     "0 0 12px 0",
                  }}
                >
                  {p.desc}
                </p>
                <p
                  style={{
                    fontFamily:    "'JetBrains Mono', monospace",
                    fontSize:      "9px",
                    letterSpacing: "0.1em",
                    color:         "var(--muted)",
                    margin:        "0 0 18px 0",
                    textTransform: "uppercase",
                  }}
                >
                  {p.tech}
                </p>

                <div className="card-actions" style={{ display: "flex", gap: "8px" }}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
