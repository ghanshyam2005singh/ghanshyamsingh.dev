import React from "react";

type Project = {
  name: string;
  url: string; // GitHub/source code
  liveUrl?: string; // Live/demo site
  description: string;
  stack: string;
  category: "Featured" | "Additional";
};

const projects: Project[] = [
  {
    name: "Alumconn",
    url: "https://github.com/ghanshyam2005singh/alumconn",
    liveUrl: "https://alumconn.in/",
    description: "Alumni networking platform connecting students with alumni for mentorship, internships, and career guidance. Serving 100+ active users.",
    stack: "Next.js, TypeScript, Tailwind CSS, Firebase",
    category: "Featured",
  },
  {
    name: "CV Slayer",
    url: "https://github.com/ghanshyam2005singh/cv-slayer",
    liveUrl: "https://cv-slayer-ppnn.onrender.com/",
    description: "AI-powered resume builder helping students create professional resumes with smart templates and optimization suggestions.",
    stack: "React, Node.js, AI/ML, MongoDB",
    category: "Featured",
  },
  {
    name: "Padh-le-Bhai",
    url: "https://github.com/ghanshyam2005singh/padh-le-bhai",
    liveUrl: "https://padh-le-bhai-one.vercel.app/",
    description: "Educational platform for students with study materials, practice tests, and interactive learning modules.",
    stack: "Next.js, Firebase, Tailwind CSS",
    category: "Featured",
  },
  // Additional Projects (add liveUrl if available)
  {
    name: "CrediVault",
    url: "https://github.com/ghanshyam2005singh/CrediVault",
    description: "Decentralized borrowing dApp: lock WBTC, borrow USDT, track LTV ratios with smart contract integration.",
    stack: "Next.js, Solidity, Ethers.js, Hardhat",
    category: "Additional",
  },
  {
    name: "Homie-Finder",
    url: "https://github.com/ghanshyam2005singh/Homie-Finder",
    description: "Smart roommate matching platform for students with preference-based algorithms and secure messaging.",
    stack: "Next.js, Firebase, Supabase",
    category: "Additional",
  },
  {
    name: "DataMind AI",
    url: "https://github.com/ghanshyam2005singh/DataMind-AI",
    description: "AI-powered data management agent for organizing, retrieving, and analyzing large datasets efficiently.",
    stack: "Python, AI/ML, Cloud APIs",
    category: "Additional",
  },
  {
    name: "Zombie Survival Game",
    url: "https://github.com/ghanshyam2005singh/Zombie-Survival-Shooter",
    description: "Browser-based top-down shooter game with real-time scoring, health system, and leaderboards.",
    stack: "Phaser 3, JavaScript, Firebase",
    category: "Additional",
  },
];

const Projects: React.FC = () => {
  const featuredProjects = projects.filter(p => p.category === "Featured");
  const additionalProjects = projects.filter(p => p.category === "Additional");

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600">
            Building solutions that make a difference
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.name}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {project.name}
                  </h4>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    Featured
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Tech Stack:</p>
                  <p className="text-sm text-gray-700">{project.stack}</p>
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      -View Project
                    </a>
                  )}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Additional Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalProjects.map((project) => (
              <div
                key={project.name}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.name}
                </h4>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-3">
                  <p className="text-sm text-gray-700">{project.stack}</p>
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Project
                    </a>
                  )}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;