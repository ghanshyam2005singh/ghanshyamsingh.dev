import React from "react";

const Header: React.FC = () => (
  <header className="w-full py-8 bg-gradient-to-r from-[#0f172a] via-[#312e81] to-[#7c3aed] border-b border-[#6366f1] shadow-lg">
    <div className="max-w-4xl mx-auto flex flex-col items-center px-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-center text-white tracking-tight font-mono drop-shadow">
        Ghanshyam Singh
      </h1>
      <nav className="flex gap-6 mt-2">
        {[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#skills", label: "Skills" },
          { href: "#contact", label: "Contact" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="relative font-semibold text-white hover:text-[#a5b4fc] transition-colors duration-200
              after:content-[''] after:block after:h-0.5 after:bg-[#a5b4fc] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;