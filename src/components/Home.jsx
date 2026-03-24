import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import NowBuilding from "./NowBuilding";

const Home = () => {
  return (
    <div
      name="Home"
      style={{
        width:      "100%",
        minHeight:  "100vh",
        background: "var(--bg)",
        display:    "flex",
        alignItems: "center",
        position:   "relative",
        overflow:   "hidden",
        paddingTop: "72px",
      }}
    >
      {/* Ambient gradient blob */}
      <div
        style={{
          position:     "absolute",
          top:          "10%",
          right:        "-5%",
          width:        "55%",
          height:       "80%",
          background:   "radial-gradient(ellipse at center, rgba(184,76,28,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Vertical rule */}
      <div
        style={{
          position:   "absolute",
          right:      "18%",
          top:        "15%",
          width:      "1px",
          height:     "65%",
          background: "linear-gradient(to bottom, transparent, rgba(26,20,16,0.07), transparent)",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "1100px",
          margin:   "0 auto",
          padding:  "0 clamp(20px, 5vw, 48px)",
          width:    "100%",
        }}
      >
        {/* Pre-label */}
        <p
          className="fade-up d-100"
          style={{
            fontFamily:    "'JetBrains Mono', monospace",
            fontSize:      "11px",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color:         "var(--gold)",
            margin:        "0 0 28px 0",
          }}
        >
          Full Stack Developer
        </p>

        {/* Name — line 1 */}
        <h1
          className="fade-up d-200"
          style={{
            fontFamily:    "'Cormorant Garamond', serif",
            fontSize:      "clamp(46px, 10vw, 120px)",
            fontWeight:    600,
            lineHeight:    1.0,
            letterSpacing: "-0.02em",
            color:         "var(--cream)",
            margin:        0,
          }}
        >
          Ethan
        </h1>

        {/* Name — line 2, italic */}
        <h1
          className="fade-up d-300"
          style={{
            fontFamily:    "'Cormorant Garamond', serif",
            fontSize:      "clamp(46px, 10vw, 120px)",
            fontWeight:    600,
            fontStyle:     "italic",
            lineHeight:    1.0,
            letterSpacing: "-0.02em",
            color:         "var(--cream)",
            margin:        "0 0 40px 0",
          }}
        >
          De La Rosa
          <span className="cursor-blink" style={{ marginLeft: "6px", fontStyle: "normal" }}>
            _
          </span>
        </h1>

        {/* Gold rule */}
        <div
          className="fade-up d-400 gold-line"
          style={{ maxWidth: "72px", marginBottom: "36px" }}
        />

        {/* Bio */}
        <p
          className="fade-up d-500"
          style={{
            maxWidth:    "520px",
            fontSize:    "16px",
            lineHeight:  1.85,
            color:       "var(--cream-dim)",
            fontWeight:  300,
            margin:      "0 0 48px 0",
          }}
        >
          Passionate about building functional, responsive full-stack web
          applications. Trained at the UCR bootcamp, I love turning complex
          problems into clean, elegant solutions.
        </p>

        {/* CTA */}
        <div className="fade-up d-600">
          <Link to="Work" smooth duration={600} offset={-40}>
            <button className="btn-ghost">
              View My Work <HiArrowNarrowRight />
            </button>
          </Link>
        </div>

        {/* Live indicator */}
        <div className="fade-up d-700">
          <NowBuilding />
        </div>
      </div>
    </div>
  );
};

export default Home;
