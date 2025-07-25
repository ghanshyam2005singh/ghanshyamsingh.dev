import React from "react";

const Contact: React.FC = () => (
  <section
    id="contact"
    className="w-full mx-auto py-16 px-4 flex flex-col items-center gap-8"
  >
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center font-mono tracking-tight text-[#18181b]" style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}>
      Contact
    </h2>
    <p className="text-base sm:text-lg text-[#18181b] font-mono text-center mb-4">
      <span className="inline-block animate-wiggle">💬</span> Let’s build something amazing together! Reach out via any platform below:
    </p>
    <div className="flex flex-wrap justify-center gap-3 w-full">
      <a
        href="https://iron-industry.tech/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 z-10 font-semibold text-[#6366f1] hover:underline font-mono transition"
        style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}
      >
        Startup
      </a>
      <a
        href="https://www.linkedin.com/in/ghanshyam-singh-b014232b2/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 z-10 font-semibold text-[#6366f1] hover:underline font-mono transition"
        style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}
      >
        LinkedIn
      </a>
      <a
        href="https://discord.gg/FFEZqzGwtG"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 z-10 font-semibold text-[#6366f1] hover:underline font-mono transition"
        style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}
      >
        Discord
      </a>
      <a
        href="https://github.com/ghanshyam2005singh"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 z-10 font-semibold text-[#6366f1] hover:underline font-mono transition"
        style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}
      >
        GitHub
      </a>
      <a
        href="https://twitter.com/https_ghanshyam"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 z-10 font-semibold text-[#6366f1] hover:underline font-mono transition"
        style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}
      >
        Twitter
      </a>
    </div>
    <p className="text-xs z-10 text-[#6366f1] mt-4 font-mono text-center">
      Email: <span className="underline">ghanshyam2005singh@gmail.com</span>
    </p>
  </section>
);

export default Contact;