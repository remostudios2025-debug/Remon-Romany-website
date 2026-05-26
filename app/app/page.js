"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div style={{ color: "white", background: "black", minHeight: "100vh", fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section style={{ padding: "80px 40px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "70px", fontWeight: "bold" }}
        >
          REMON ROMANY
        </motion.h1>

        <p style={{ color: "#aaa", fontSize: "20px", maxWidth: "600px" }}>
          Egyptian cinematic artist • Poet • Director • Performer
        </p>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "40px" }}>
        <h2>Artistic Identity</h2>
        <p style={{ color: "#bbb", maxWidth: "700px" }}>
          Founder of 3D Poem — a cinematic poetry experience combining theatre,
          music, lighting and storytelling into live performances.
        </p>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: "40px" }}>
        <h2>Creative Universe</h2>

        <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
          <div style={{ padding: "20px", border: "1px solid #333" }}>
            3D Poem — Live Performances
          </div>

          <div style={{ padding: "20px", border: "1px solid #333" }}>
            Creative Direction Projects
          </div>

          <div style={{ padding: "20px", border: "1px solid #333" }}>
            Media & Theatre Productions
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 40px" }}>
        <h2>Let’s Collaborate</h2>
        <p style={{ color: "#aaa" }}>
          Available for shows, festivals, productions and artistic collaborations.
        </p>

        <a
          href="mailto:remo.lovers@gmail.com"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            background: "gold",
            color: "black",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          Contact Me
        </a>
      </section>

    </div>
  );
}
