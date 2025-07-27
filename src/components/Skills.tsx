import React from "react";
import { motion } from "framer-motion";
import { Database, Cloud, Zap, Shield, Globe } from "lucide-react";

const skills = [
  {
    icon: <Globe className="w-8 h-8 text-[#6366f1]" />,
    title: "Frontend",
    items: [
      "React, Next.js, TypeScript, JavaScript",
      "HTML5, CSS3, Tailwind CSS",
      "Component Architecture, Accessibility",
    ],
  },
  {
    icon: <Database className="w-8 h-8 text-[#22c55e]" />,
    title: "Backend",
    items: [
      "Node.js, Express.js, Python, Go, Rust, Java, C++, .NET",
      "RESTful APIs, GraphQL, Prisma, Socket.io",
      "Authentication, Security, Real-time Apps",
    ],
  },
  {
    icon: <Database className="w-8 h-8 text-[#ef4444]" />,
    title: "Databases",
    items: [
      "MongoDB, PostgreSQL, MySQL, Redis",
      "Firebase, Supabase",
      "Data Modeling & Optimization",
    ],
  },
  {
    icon: <Cloud className="w-8 h-8 text-[#06b6d4]" />,
    title: "Cloud & DevOps",
    items: [
      "AWS, Google Cloud, Vercel, Netlify",
      "Docker, GitHub, CI/CD",
      "Performance & Monitoring",
    ],
  },
  {
    icon: <Zap className="w-8 h-8 text-[#a78bfa]" />,
    title: "AI / ML",
    items: [
      "OpenAI, Google Gemini API",
      "Prompt Engineering, File Processing",
      "AI Integration in Products",
    ],
  },
  {
    icon: <Shield className="w-8 h-8 text-[#facc15]" />,
    title: "Blockchain (Learning)",
    items: [
      "Solidity, Ethereum, Web3",
      "Smart Contracts, DApps",
      "Decentralized Tech",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.13, type: "spring" as const, stiffness: 120 }
  }),
};

const Skills: React.FC = () => (
  <section id="skills" className="w-full mx-auto py-16 px-4 flex flex-col items-center gap-8">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      className="text-3xl sm:text-4xl font-extrabold mb-10 z-10 text-center font-mono tracking-tight text-[#18181b]"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}
    >
      Skills
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="flex flex-col items-start group relative rounded-xl border border-[#e5e7eb] bg-white/80 hover:bg-white/100 shadow-md hover:shadow-lg p-6 transition-all"
        >
          <div className="mb-4">{skill.icon}</div>
          <h3
            className="text-xl font-bold mb-2 font-mono text-[#18181b]"
            style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}
          >
            {skill.title}
          </h3>
          <ul className="list-disc list-inside text-[#6366f1] text-sm space-y-1 font-mono">
            {skill.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;