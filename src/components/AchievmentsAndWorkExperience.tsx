import React from "react";
import { Briefcase, Award, Users, Trophy, Shield, Star } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-6 h-6 text-[#f59e0b]" />,
    title: "BNB Chain Gig 2024 Winner",
    desc: "Built scalable decentralized app handling 1K+ transactions with team.",
    year: "2024",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#06b6d4]" />,
    title: "AWS GenAI & Postman API Expert Certified",
    desc: "Completed AWS GenAI Certificate and Postman API Expert certification.",
    year: "2024",
  },
  {
    icon: <Users className="w-6 h-6 text-[#22c55e]" />,
    title: "Google Cloud Arcade Facilitator 2025",
    desc: "Guided 300+ learners through hands-on cloud labs and Google Cloud technologies.",
    year: "2025",
  },
  {
    icon: <Trophy className="w-6 h-6 text-[#6366f1]" />,
    title: "SIH 2024 Internal Hackathon Winner",
    desc: "Led 6-member team to victory in Smart India Hackathon internal competition.",
    year: "2024",
  },
  {
    icon: <Star className="w-6 h-6 text-[#8b5cf6]" />,
    title: "Open Source Contributor",
    desc: "Active contributor to GSSoC, SheBright, DevRhylme Foundation with multiple PRs merged.",
    year: "2023-Present",
  },
  {
    icon: <Users className="w-6 h-6 text-[#ef4444]" />,
    title: "Deputy Head - HackSprint Hackathon",
    desc: "Coordinated 300+ participants and 10+ mentors for IIT Madras BS Program hackathon.",
    year: "2024",
  },
  {
    icon: <Award className="w-6 h-6 text-[#06b6d4]" />,
    title: "Project Maintainer - Innogeeks",
    desc: "Certified project maintainer in open source projects at Innogeeks organization.",
    year: "2024",
  },
];

const workExperience = [
  {
    icon: <Briefcase className="w-6 h-6 text-[#6366f1]" />,
    role: "Full Stack Intern (Remote)",
    org: "DevRhylme Foundation",
    period: "Dec 2024 – May 2025",
    desc: "Developed responsive web apps using Next.js, TypeScript, Tailwind CSS. Optimized UI/UX pipelines reducing load time by 20% and improving retention by 15%. Participated in code reviews and GitHub collaboration.",
    highlights: ["20% load time reduction", "15% retention improvement", "Offer Letter received"],
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#22c55e]" />,
    role: "Founder & Lead Developer",
    org: "Iron Industry (Startup)",
    period: "Oct 2023 – Present",
    desc: "Building SaaS products and leading tech team. Developed Alumconn, Padh-le-Bhai, and CV Slayer platforms serving 100+ active users with real-time features.",
    highlights: ["100+ active users", "3 major SaaS products", "Team leadership"],
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#8b5cf6]" />,
    role: "Full Stack Developer",
    org: "Freelance & Open Source",
    period: "2023 – Present",
    desc: "Developed web applications, contributed to open source projects, and built scalable solutions for clients using modern tech stack.",
    highlights: ["Multiple open source contributions", "Client projects delivery", "Modern tech stack expertise"],
  },
];

const projects = [
  {
    name: "Alumconn",
    tech: "Next.js, TypeScript, Firebase, TailwindCSS",
    desc: "SaaS platform connecting 100+ students & alumni with real-time dashboards, messaging pipelines, and AI features.",
    highlights: ["30% performance boost via SEO", "JWT-based authentication", "Event management features"],
    links: { live: "#", github: "#" }
  },
  {
    name: "Padh-le-Bhai",
    tech: "Next.js, Firebase, Supabase, TailwindCSS",
    desc: "Academic resource-sharing platform with 50+ resources, advanced filters, and document preview features.",
    highlights: ["25% faster data retrieval", "Google Drive API integration", "100+ uploaded documents"],
    links: { live: "https://padh-le-bhai-one.vercel.app/", github: "#" }
  },
  {
    name: "CV Slayer",
    tech: "React, Node.js, Express, Gemini API",
    desc: "AI-powered resume evaluation platform processing 10+ submissions with scoring and feedback.",
    highlights: ["Gemini API integration", "JWT authentication", "Admin dashboard with 100+ feedback logs"],
    links: { live: "https://cv-slayer-ppnn.onrender.com/", github: "#" }
  },
];

const AchievmentsAndWorkExperience: React.FC = () => (
  <section id="achievements" className="w-full mx-auto py-16 px-4 flex flex-col items-center z-10">
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center font-mono tracking-tight text-[#18181b] z-10">
      Experience, Achievements & Projects
    </h2>
    
    <div className="w-full max-w-6xl space-y-12 z-10">
      {/* Work Experience */}
      <div>
        <h3 className="text-2xl font-bold mb-6 font-mono text-[#6366f1] z-10">Work Experience</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
          {workExperience.map((item, idx) => (
            <div key={idx} className="bg-white/90 rounded-xl shadow-md border border-[#e5e7eb] p-6 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <div className="font-mono text-[#18181b] font-bold text-lg">{item.role}</div>
                  <div className="text-sm text-[#6366f1] font-mono font-semibold">{item.org}</div>
                  <div className="text-xs text-[#6366f1] font-mono">{item.period}</div>
                </div>
              </div>
              <div className="text-sm text-[#312e81] font-mono mb-3">{item.desc}</div>
              <div className="space-y-1">
                {item.highlights.map((highlight, hidx) => (
                  <div key={hidx} className="text-xs font-mono text-[#059669] bg-green-50 px-2 py-1 rounded">
                    • {highlight}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Projects */}
      <div>
        <h3 className="text-2xl font-bold mb-6 font-mono text-[#6366f1] z-10">Key Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white/90 rounded-xl shadow-md border border-[#e5e7eb] p-6 flex flex-col">
              <div className="mb-4">
                <div className="font-mono text-[#18181b] font-bold text-lg mb-2">{project.name}</div>
                <div className="text-xs font-mono text-[#6366f1] bg-blue-50 px-2 py-1 rounded mb-3">
                  {project.tech}
                </div>
                <div className="text-sm text-[#312e81] font-mono mb-3">{project.desc}</div>
              </div>
              <div className="space-y-1 mb-4">
                {project.highlights.map((highlight, hidx) => (
                  <div key={hidx} className="text-xs font-mono text-[#059669] bg-green-50 px-2 py-1 rounded">
                    • {highlight}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-mono bg-[#6366f1] text-white rounded hover:bg-[#7c3aed] transition"
                >
                  Live
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-mono bg-[#18181b] text-white rounded hover:bg-[#374151] transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements & Certifications */}
      <div>
        <h3 className="text-2xl font-bold mb-6 font-mono text-[#6366f1] z-10">Achievements & Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {achievements.map((item, idx) => (
            <div key={idx} className="bg-white/90 rounded-xl shadow-md border border-[#e5e7eb] p-6 flex flex-col">
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <div className="font-mono text-[#18181b] font-bold text-base">{item.title}</div>
                  <div className="text-xs text-[#6366f1] font-mono font-semibold">{item.year}</div>
                </div>
              </div>
              <div className="text-sm text-[#312e81] font-mono">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AchievmentsAndWorkExperience;