"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: "40px" }}>
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: "60px", fontWeight: "bold" }}
      >
        REMON ROMANY
      </motion.h1>

      <p style={{ color: "#ccc", fontSize: "20px", maxWidth: "600px" }}>
        Cinematic Artist • Poet • Director • Performer
      </p>

      <hr style={{ margin: "40px 0", opacity: 0.2 }} />

      <h2>3D Poem Universe</h2>
      <p>Live cinematic poetry performances blending theatre, music and storytelling.</p>

      <h2>Creative Direction</h2>
      <p>Directing stage shows, performances and cinematic productions.</p>

      <h2>Media Production</h2>
      <p>Producing artistic campaigns and visual storytelling experiences.</p>

    </div>
  );
          }
