import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-[70vh] py-10 px-2 sm:px-0 overflow-hidden"
    >
      {/* Soft radial background */}
      <div className="soft-bg"></div>

      {/* Glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="glass-card relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-10 py-10 flex flex-col items-center gap-6"
      >
        {/* Avatar */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow">
          {!imgLoaded && (
            <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
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
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 tracking-tight">
          Ghanshyam Singh
        </h2>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-medium">
          Full-stack developer & product builder. I craft scalable, secure, and accessible web ecosystems—empowering people through code, creativity, and community.
        </p>

        {/* List */}
        <ul className="flex flex-col gap-2 items-center text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
          <li>
            <span className="font-medium text-zinc-800 dark:text-zinc-200">Community-Driven:</span> Building tools for students, developers, and underrepresented groups.
          </li>
          <li>
            <span className="font-medium text-zinc-800 dark:text-zinc-200">Product Mindset:</span> Focused on real-world impact and user-centric solutions.
          </li>
          <li>
            <span className="font-medium text-zinc-800 dark:text-zinc-200">Always Learning:</span> Exploring new tech, AI, and best practices.
          </li>
        </ul>

        {/* Quote */}
        <blockquote className="italic text-zinc-700 dark:text-zinc-300 mt-2 text-base sm:text-lg font-semibold">
          &quot;I don’t just build apps—I create ecosystems that empower people.&quot;
        </blockquote>
      </motion.div>
    </section>
  );
};

export default About;