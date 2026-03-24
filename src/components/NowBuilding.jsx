import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr);
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins  < 60)  return "less than an hour ago";
  if (hours < 24)  return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (days  === 1) return "yesterday";
  if (days  < 7)   return `${days} days ago`;
  if (days  < 30)  return `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? "s" : ""} ago`;
  return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? "s" : ""} ago`;
}

const NowBuilding = () => {
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/dlrethan/repos?sort=pushed&per_page=10&type=public")
      .then((r) => r.json())
      .then((repos) => {
        if (!Array.isArray(repos)) return;
        const latest = repos.find((r) => r.name !== "dlrethan"); // skip profile readme repo
        if (latest) setRepo(latest);
      })
      .catch(() => {});
  }, []);

  if (!repo) return null;

  return (
    <div
      style={{
        marginTop:   "52px",
        paddingTop:  "36px",
        borderTop:   "1px solid rgba(26,20,16,0.08)",
      }}
    >
      {/* Label */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <div style={{ position: "relative", width: "8px", height: "8px", flexShrink: 0 }}>
          <div className="dot-ring" style={{ background: "#4caf6e" }} />
          <div className="dot"      style={{ background: "#4caf6e" }} />
        </div>
        <span
          style={{
            fontFamily:    "'JetBrains Mono', monospace",
            fontSize:      "9px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color:         "var(--muted)",
          }}
        >
          Currently pushing to
        </span>
      </div>

      {/* Repo link */}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", display: "block" }}
      >
        <div
          style={{
            display:     "flex",
            alignItems:  "flex-start",
            gap:         "14px",
            padding:     "16px 20px",
            border:      "1px solid rgba(26,20,16,0.08)",
            background:  "var(--surface)",
            transition:  "border-color 0.25s, transform 0.25s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "rgba(184,76,28,0.3)";
            e.currentTarget.style.transform   = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(26,20,16,0.08)";
            e.currentTarget.style.transform   = "translateY(0)";
          }}
        >
          <FaGithub size={18} style={{ color: "var(--muted)", flexShrink: 0, marginTop: "2px" }} />
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize:   "18px",
                fontWeight: 600,
                fontStyle:  "italic",
                color:      "var(--cream)",
                margin:     "0 0 4px 0",
                lineHeight: 1.2,
              }}
            >
              {repo.name}
            </p>
            {repo.description && (
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize:   "12px",
                  color:      "var(--cream-dim)",
                  fontWeight: 300,
                  margin:     "0 0 6px 0",
                  lineHeight: 1.5,
                  whiteSpace: "nowrap",
                  overflow:   "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {repo.description}
              </p>
            )}
            <p
              style={{
                fontFamily:    "'JetBrains Mono', monospace",
                fontSize:      "9px",
                letterSpacing: "0.1em",
                color:         "var(--muted)",
                margin:        0,
              }}
            >
              pushed {timeAgo(repo.pushed_at)}
            </p>
          </div>
          <span
            style={{
              fontFamily:    "'JetBrains Mono', monospace",
              fontSize:      "10px",
              color:         "var(--gold)",
              marginLeft:    "auto",
              flexShrink:    0,
              alignSelf:     "center",
            }}
          >
            ↗
          </span>
        </div>
      </a>
    </div>
  );
};

export default NowBuilding;
