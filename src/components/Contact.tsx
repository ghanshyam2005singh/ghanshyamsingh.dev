import React from "react";

const Contact: React.FC = () => (
  <section
    id="contact"
    className="relative max-w-xl mx-auto py-16 px-4 flex flex-col items-center gap-8"
  >
    {/* Soft radial background */}
    <div className="soft-bg"></div>

    <div className="glass-card w-full flex flex-col items-center gap-6 z-10 relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 tracking-tight">
        Contact
      </h2>
      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-medium text-center">
        Let’s build something amazing together! Reach out via any platform below:
      </p>
      <div className="flex flex-wrap justify-center gap-3 w-full">
        <a
          href="https://iron-industry.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition"
        >
          Startup
        </a>
        <a
          href="https://www.linkedin.com/in/ghanshyam-singh-b014232b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 font-semibold bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://discord.gg/FFEZqzGwtG"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 font-semibold bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
        >
          Discord
        </a>
        <a
          href="https://github.com/ghanshyam2005singh"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 font-semibold bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/https_ghanshyam"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 font-semibold bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
        >
          Twitter
        </a>
      </div>
      <p className="text-xs text-zinc-500 mt-4">
        📧 Email: ghanshyam2005singh@gmail.com
      </p>
    </div>
  </section>
);

export default Contact;