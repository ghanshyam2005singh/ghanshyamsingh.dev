import React from "react";
import { ExternalLink } from "lucide-react";

type Project = {
  name: string;
  url: string;
  description: string;
  stack: string;
  status: string;
};

const projects: Project[] = [
  {
    name: "Homie-Finder",
    url: "https://github.com/ghanshyam2005singh/Homie-Finder",
    description: "Smart roommate matching for students.",
    stack: "Next.js, Firebase, Supabase",
    status: "✅ Completed",
  },
  {
    name: "Zombie Survival Shooter Game",
    url: "https://github.com/ghanshyam2005singh/Zombie-Survival-Shooter",
    description: "Top-down shooter: player vs zombies, score tracking, health system, Firebase integration.",
    stack: "Phaser 3, Firebase, JavaScript, Vercel",
    status: "🟡 In Progress",
  },
  {
    name: "Task Manager",
    url: "https://github.com/ghanshyam2005singh/Task-Manager",
    description: "Full-stack MERN To-Do app with auth, CRUD, modern UI, and security best practices.",
    stack: "MongoDB, Express.js, React, Node.js, JWT, Material-UI",
    status: "✅ Completed",
  },
  {
    name: "Dr. Serena Blake",
    url: "https://github.com/ghanshyam2005singh/Dr.-Serena-Blake",
    description: "Therapist website with accessibility focus.",
    stack: "Next.js, TypeScript",
    status: "✅ Completed",
  },
  {
    name: "CrediVault",
    url: "https://github.com/ghanshyam2005singh/CrediVault",
    description: "Decentralized borrowing dApp: lock WBTC, borrow USDT, track LTV, repay, withdraw.",
    stack: "Next.js 15, Tailwind, Wagmi, Ethers.js, Solidity, Hardhat",
    status: "🟡 In Progress",
  },
  {
    name: "Go Booking App",
    url: "https://github.com/ghanshyam2005singh/Golang-Learning-Project",
    description: "Ticket booking app to learn Go: covers basics to concurrency, file I/O, and testing.",
    stack: "Go (Golang)",
    status: "✅ Completed",
  },
  {
    name: "DataMind AI",
    url: "https://github.com/ghanshyam2005singh/DataMind-AI",
    description: "AI-powered data management agent: organize, retrieve, process, and analyze data.",
    stack: "AI, Cloud, Node.js",
    status: "✅ Completed",
  },
  {
    name: "URL Shortener",
    url: "https://github.com/ghanshyam2005singh/url-shortner",
    description: "Shorten long URLs, generate unique codes, simple Flask web UI.",
    stack: "Flask, MongoDB",
    status: "✅ Completed",
  },
  {
    name: "Blogging-App",
    url: "https://github.com/ghanshyam2005singh/Blogging-App",
    description: "Create account, write blogs, comment, read. Modern blogging platform.",
    stack: "Node.js, Express.js, MongoDB, EJS, JavaScript",
    status: "✅ Completed",
  },
  {
    name: "Discord Bot",
    url: "https://github.com/ghanshyam2005singh/Discord-Bot",
    description: "Custom Discord bot using Node.js.",
    stack: "Node.js, Discord.js",
    status: "✅ Completed",
  },
  {
    name: "Currency Converter",
    url: "https://github.com/ghanshyam2005singh/Currency-Converter-using-API",
    description: "Currency converter using public API.",
    stack: "JavaScript, API",
    status: "✅ Completed",
  },
];

const Projects: React.FC = () => (
  <section
    id="projects"
    className="w-full mx-auto py-16 px-4 flex flex-col items-center gap-8 z-10"
  >
    <h2
      className="text-3xl sm:text-4xl font-extrabold mb-10 text-center font-mono tracking-tight text-[#18181b]"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}
    >
      Additional Projects
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative max-w-6xl mx-auto">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block transition-all relative overflow-visible rounded-xl border border-[#e5e7eb] bg-white/80 hover:bg-white/100 shadow-md hover:shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-mono text-[#6366f1]">{project.status}</span>
            <h3 className="text-lg font-semibold text-[#18181b] group-hover:underline flex items-center gap-2 font-mono ml-2">
              {project.name}
              <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition" />
            </h3>
          </div>
          <p className="text-[#312e81] mb-2 font-mono">{project.description}</p>
          <div className="text-xs text-[#6366f1] font-mono">{project.stack}</div>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;