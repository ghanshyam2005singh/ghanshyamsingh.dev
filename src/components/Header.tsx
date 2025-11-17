import React from "react";
import { Github, Linkedin, Twitter, Instagram  } from "lucide-react";

const Header: React.FC = () => (
  <header className="w-full py-5 bg-transparent">
    <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
      <span className="text-xl sm:text-2xl z-10 font-extrabold text-[#18181b] font-mono tracking-tight" style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}>
        Portfolio
      </span>
      <nav className="flex gap-5">
        <a
          href="https://instagram.com/http_ghanshyam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-[#6366f1] hover:text-[#1da1f2] transition z-10"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/https_ghanshyam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-[#6366f1] hover:text-[#1da1f2] transition z-10"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/ghanshyam2005singh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-[#6366f1] hover:text-[#1da1f2] transition z-10"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/ghanshyam-singh-b014232b2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#6366f1] hover:text-[#1da1f2] transition z-10"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </nav>
    </div>
  </header>
);

export default Header;