"use client";

import { motion } from "framer-motion";

export default function RemonRomanyWebsite() { const concerts = [ { title: "3D Poem — Heroes", year: "2021", location: "Cairo, Egypt", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1600&auto=format&fit=crop", }, { title: "3D Poem — Beginning", year: "2015", location: "Catholic Center", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop", }, { title: "Visual Poetry Show", year: "2019", location: "Egypt", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop", }, ];

const projects = [ { title: "3D Poem", desc: "A cinematic poetic experience blending theatre, storytelling, music, lighting and performance art.", }, { title: "Creative Direction", desc: "Directing theatrical performances, cinematic content, and large-scale artistic productions.", }, { title: "Media Production", desc: "Producing artistic campaigns, poetry shows, live performances and visual storytelling projects.", }, ];

const socials = [ { name: "YouTube", link: "https://www.youtube.com/@RemonRomany24" }, { name: "Instagram", link: "https://www.instagram.com/remon_romany" }, { name: "TikTok", link: "https://www.tiktok.com/@remonromany24" }, { name: "Facebook", link: "https://www.facebook.com/remon.romany.12" }, { name: "Spotify", link: "https://open.spotify.com/artist/67okH54a80fLsCFE2rAYAT" }, ];

const achievements = [ "Founder of 3D Poem (Cinematic Poetry Format)", "21 Stage Plays Written", "9 Directed Theatre Productions", "50+ Social Media Episodes", "15+ Years in Creative Direction", "Cinematic Performer & Storyteller", ];

const videos = [ { title: "3D Poem Live Experience", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ", }, { title: "Stage Performance Showreel", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ", }, ];

return ( <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans"> {/* HERO */} <section className="relative h-screen flex items-end"> <img
src="https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1800&auto=format&fit=crop"
className="absolute inset-0 w-full h-full object-cover opacity-40"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-yellow-500 tracking-[6px] uppercase text-sm">
          Egyptian Artist • Poet • Director • Performer
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-none mt-4">
          REMON<br />ROMANY
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl">
          A cinematic artist blending poetry, theatre, music, and visual storytelling into immersive live experiences.
        </p>

        <div className="flex gap-4 mt-10">
          <a href="#projects" className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:scale-105 transition">
            Explore Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition">
            Book / Collaborate
          </a>
        </div>
      </motion.div>
    </div>
  </section>

  {/* ABOUT */}
  <section className="py-28 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
    <div>
      <h2 className="text-5xl font-black mb-6">Artistic Identity</h2>
      <p className="text-gray-400 leading-8 mb-6">
        Remon Romany is an Egyptian cinematic artist, poet, director and performer with over 15 years of experience in live theatrical and multimedia productions.
      </p>
      <p className="text-gray-400 leading-8">
        He is the founder of 3D Poem — a unique artistic format that transforms poetry into immersive visual stage experiences combining light, sound, acting and storytelling.
      </p>
    </div>

    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1516280440614-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop"
        className="rounded-3xl h-[600px] object-cover"
      />
    </div>
  </section>

  {/* PROJECTS */}
  <section id="projects" className="py-28 px-6 bg-zinc-950">
    <h2 className="text-5xl font-black mb-16">Creative Universe</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10"
        >
          <div className="text-yellow-500 text-5xl font-black mb-4">0{i + 1}</div>
          <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
          <p className="text-gray-400">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>

  {/* CONCERTS */}
  <section className="py-28 px-6 max-w-7xl mx-auto">
    <h2 className="text-5xl font-black mb-16">Live Performances</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {concerts.map((c, i) => (
        <div key={i} className="relative h-[450px] rounded-3xl overflow-hidden group">
          <img src={c.image} className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-yellow-500 text-sm">{c.year}</p>
            <h3 className="text-2xl font-bold">{c.title}</h3>
            <p className="text-gray-300">{c.location}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* VIDEOS */}
  <section className="py-28 px-6 bg-zinc-950">
    <h2 className="text-5xl font-black mb-16">Cinematic Videos</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {videos.map((v, i) => (
        <div key={i} className="rounded-3xl overflow-hidden border border-white/10">
          <iframe src={v.embed} className="w-full aspect-video" />
          <div className="p-5">
            <h3 className="text-xl font-bold">{v.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* ACHIEVEMENTS */}
  <section className="py-28 px-6 max-w-7xl mx-auto">
    <h2 className="text-5xl font-black mb-16">Achievements</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {achievements.map((a, i) => (
        <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="text-yellow-500 text-4xl font-black mb-3">0{i + 1}</div>
          <p className="text-lg font-bold">{a}</p>
        </div>
      ))}
    </div>
  </section>

  {/* SOCIAL */}
  <section className="py-28 px-6 bg-zinc-950">
    <h2 className="text-5xl font-black mb-16">Social Presence</h2>
    <div className="grid md:grid-cols-5 gap-4">
      {socials.map((s, i) => (
        <a key={i} href={s.link} className="p-6 border border-white/10 rounded-2xl text-center hover:bg-yellow-500 hover:text-black transition">
          {s.name}
        </a>
      ))}
    </div>
  </section>

  {/* CONTACT */}
  <section id="contact" className="py-32 px-6 text-center">
    <h2 className="text-5xl md:text-7xl font-black mb-6">Let’s Collaborate</h2>
    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
      Available for artistic collaborations, festivals, performances, productions and media appearances.
    </p>
    <a href="mailto:remo.lovers@gmail.com" className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full">
      Contact Now
    </a>
  </section>

  {/* FOOTER */}
  <footer className="py-10 text-center text-gray-500 border-t border-white/10">
    <p className="text-yellow-500 text-2xl font-black">REMON ROMANY</p>
    <p>Cinematic Artist • Poet • Director • Performer</p>
  </footer>
</div>

); }
