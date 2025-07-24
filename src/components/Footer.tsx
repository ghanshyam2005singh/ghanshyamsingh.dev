import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-6 mt-12">
    <div className="max-w-4xl mx-auto flex items-center justify-center px-4">
      <span
        className="text-sm text-[#18181b] font-mono text-center"
        style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}
      >
        ©{new Date().getFullYear()} Ghanshyam Singh. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;