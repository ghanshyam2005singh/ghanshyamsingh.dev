import React from "react";

const Contact: React.FC = () => (
  <section
    id="contact"
    className="relative w-full mx-auto py-16 px-4 flex flex-col items-center gap-8 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#7c3aed]"
  >
    {/* Soft radial background */}
    <div className="soft-bg"></div>

    <div className="glass-card max-w-xl flex flex-col items-center gap-6 z-10 relative border border-[#6366f1] shadow-2xl">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a78bfa] font-mono tracking-tight mb-1">
        Contact
      </h2>
      <p className="text-base sm:text-lg text-[#312e81] dark:text-[#a78bfa] font-semibold font-mono text-center">
        <span className="inline-block animate-wiggle">💬</span> Let’s build something amazing together! Reach out via any platform below:
      </p>
      <div className="flex flex-wrap justify-center gap-3 w-full">
        <a
          href="https://iron-industry.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 font-semibold bg-[#6366f1] text-white hover:bg-[#7c3aed] transition font-mono"
        >
          Startup
        </a>
        <a
          href="https://www.linkedin.com/in/ghanshyam-singh-b014232b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 font-semibold bg-white text-[#312e81] dark:bg-zinc-800 dark:text-[#a78bfa] hover:bg-[#a5b4fc] hover:text-[#312e81] transition font-mono"
        >
          LinkedIn
        </a>
        <a
          href="https://discord.gg/FFEZqzGwtG"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 font-semibold bg-white text-[#312e81] dark:bg-zinc-800 dark:text-[#a78bfa] hover:bg-[#a5b4fc] hover:text-[#312e81] transition font-mono"
        >
          Discord
        </a>
        <a
          href="https://github.com/ghanshyam2005singh"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 font-semibold bg-white text-[#312e81] dark:bg-zinc-800 dark:text-[#a78bfa] hover:bg-[#a5b4fc] hover:text-[#312e81] transition font-mono"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/https_ghanshyam"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 font-semibold bg-white text-[#312e81] dark:bg-zinc-800 dark:text-[#a78bfa] hover:bg-[#a5b4fc] hover:text-[#312e81] transition font-mono"
        >
          Twitter
        </a>
      </div>
      <p className="text-xs text-[#6366f1] dark:text-[#a78bfa] mt-4 font-mono">
         Email: <span className="underline">ghanshyam2005singh@gmail.com</span>
      </p>
    </div>
  </section>
);

export default Contact;