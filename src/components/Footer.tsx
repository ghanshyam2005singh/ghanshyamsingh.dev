import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-6 mt-12 border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
      <span className="text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Ghanshyam Singh. All rights reserved.
      </span>
      <div className="flex gap-4">
        <a
          href="https://github.com/ghanshyam2005singh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:underline text-zinc-700 dark:text-zinc-200 hover:text-primary"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ghanshyam-singh-b014232b2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:underline text-zinc-700 dark:text-zinc-200 hover:text-primary"
        >
          LinkedIn
        </a>
        <a
          href="https://iron-industry.tech/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Startup"
          className="hover:underline text-zinc-700 dark:text-zinc-200 hover:text-primary"
        >
          Startup
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;