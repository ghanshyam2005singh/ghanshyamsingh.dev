import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-[70vh] py-12 px-2 sm:px-0 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#7c3aed]"
    >
      {/* Soft radial background */}
      <div className="soft-bg"></div>

      {/* Glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="glass-card relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-10 py-10 flex flex-col items-center gap-6 border border-[#6366f1] shadow-2xl"
      >
        {/* Avatar */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-2 border-[#6366f1] shadow-lg">
          {!imgLoaded && (
            <div className="absolute inset-0 bg-[#a5b4fc]/40 dark:bg-[#312e81]/60 animate-pulse" />
          )}
          <Image
            src="/assets/cmo-2.jpg"
            alt="Ghanshyam Singh"
            fill
            className={`object-cover transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            onLoadingComplete={() => setImgLoaded(true)}
            priority
          />
        </div>

        {/* Name */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a78bfa] font-mono tracking-tight mb-1">
          Ghanshyam Singh
        </h2>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-[#312e81] dark:text-[#a78bfa] font-semibold font-mono text-center">
          <span className="inline-block animate-wiggle">💻</span> Full-stack developer & product builder. I craft scalable, secure, and accessible web ecosystems—empowering people through code, creativity, and community.
        </p>

        {/* List */}
        <ul className="flex flex-col gap-2 items-center text-sm sm:text-base text-[#6366f1] dark:text-[#a78bfa] font-mono">
          <li>
            <span className="font-bold text-[#7c3aed] dark:text-[#a78bfa]">{`Community-Driven:`}</span> Building tools for students, developers, and underrepresented groups.
          </li>
          <li>
            <span className="font-bold text-[#7c3aed] dark:text-[#a78bfa]">{`Product Mindset:`}</span> Focused on real-world impact and user-centric solutions.
          </li>
          <li>
            <span className="font-bold text-[#7c3aed] dark:text-[#a78bfa]">{`Always Learning:`}</span> Exploring new tech, AI, and best practices.
          </li>
        </ul>

        {/* Quote */}
        <blockquote className="italic text-[#312e81] dark:text-[#a78bfa] mt-2 text-base sm:text-lg font-semibold font-mono text-center">
          &quot;I don’t just build apps—I create ecosystems that empower people.&quot;
        </blockquote>
      </motion.div>
    </section>
  );
};

export default About;