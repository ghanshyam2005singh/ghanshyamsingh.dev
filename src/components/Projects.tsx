import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Transition } from "framer-motion";

type Project = {
  name: string;
  url: string;
  description: string;
  stack: string;
  status: string;
};

const projects: Project[] = [
  {
    name: "AlumConnect",
    url: "https://alumconn.in",
    description: "Secure alumni-student networking platform",
    stack: "Next.js, TypeScript, Prisma, PostgreSQL",
    status: "🟢 Live",
  },
  {
    name: "Padh-le-Bhai",
    url: "https://padh-le-bhai-one.vercel.app/",
    description: "Student notes & assignment sharing platform",
    stack: "Next.js, Firebase",
    status: "🟢 Live",
  },
  {
    name: "Dr. Serena Blake",
    url: "https://dr-serena-blake-phi.vercel.app/",
    description: "Therapist website with accessibility focus",
    stack: "Next.js, TypeScript",
    status: "🟢 Live",
  },
  {
    name: "CV-Slayer",
    url: "https://github.com/ghanshyam2005singh/CV-Slayer",
    description: "AI-powered resume reviewer",
    stack: "React, Node.js, Gemini API",
    status: "🟡 In Progress",
  },
  {
    name: "Homie-Finder",
    url: "https://github.com/ghanshyam2005singh/Homie-Finder",
    description: "Smart roommate matching for students",
    stack: "Next.js, Firebase, Supabase",
    status: "🟣 Coming Soon",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.13, type: "spring" as Transition["type"], stiffness: 120 }
  }),
};

const Projects: React.FC = () => (
  <section
    id="projects"
    className="relative max-w-5xl mx-auto py-20 px-4"
  >
    <div className="soft-bg"></div>
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-zinc-900 dark:text-zinc-100"
    >
      Projects
    </motion.h2>
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project, i) => (
        <motion.a
          key={project.name}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="group glass-card block rounded-xl border border-zinc-200 dark:border-zinc-700 shadow hover:shadow-lg transition-all p-6 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:underline flex items-center gap-2">
              {project.name}
              <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition" />
            </h3>
            <span className="text-sm font-mono">{project.status}</span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-300 mb-2">{project.description}</p>
          <div className="text-xs text-zinc-400 dark:text-zinc-400 font-mono">{project.stack}</div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Projects;