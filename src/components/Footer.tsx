import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-6 mt-12 border-t border-[#6366f1] bg-gradient-to-r from-[#0f172a] via-[#312e81] to-[#7c3aed]">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
      <span className="text-sm text-[#a5b4fc] font-mono">
        © {new Date().getFullYear()} Ghanshyam Singh. All rights reserved.
      </span>
      <div className="flex gap-4">
        <a
          href="https://github.com/ghanshyam2005singh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="font-mono text-[#a5b4fc] hover:text-white transition-colors underline underline-offset-4"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ghanshyam-singh-b014232b2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="font-mono text-[#a5b4fc] hover:text-white transition-colors underline underline-offset-4"
        >
          LinkedIn
        </a>
        <a
          href="https://iron-industry.tech/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Startup"
          className="font-mono text-[#a5b4fc] hover:text-white transition-colors underline underline-offset-4"
        >
          Startup
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;