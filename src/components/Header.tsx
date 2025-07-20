import React from "react";

const Header: React.FC = () => (
  <header className="w-full py-8 bg-white dark:bg-gray-900 border-b border-zinc-200 dark:border-zinc-700 shadow-sm">
    <div className="max-w-4xl mx-auto flex flex-col items-center px-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-center text-zinc-900 dark:text-zinc-100 tracking-tight">
        Ghanshyam Singh
      </h1>
      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-4 text-center font-medium tracking-wide">
        <span className="inline-block animate-wiggle">🚀</span> Crafting Impactful Digital Experiences.
      </p>
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
            className="relative font-medium text-zinc-800 dark:text-zinc-200 hover:text-primary transition-colors duration-200
              after:content-[''] after:block after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;