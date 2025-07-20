import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap, Shield, Globe } from "lucide-react";

const skills = [
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    title: "Frontend",
    items: [
      "React, Next.js, TypeScript, JavaScript",
      "HTML5, CSS3, Tailwind CSS",
      "Component Architecture, Accessibility",
    ],
  },
  {
    icon: <Database className="w-8 h-8 text-green-400" />,
    title: "Backend",
    items: [
      "Node.js, Express.js, Python, Go, Rust, Java, C++, .NET",
      "RESTful APIs, GraphQL, Prisma, Socket.io",
      "Authentication, Security, Real-time Apps",
    ],
  },
  {
    icon: <Database className="w-8 h-8 text-red-400" />,
    title: "Databases",
    items: [
      "MongoDB, PostgreSQL, MySQL, Redis",
      "Firebase, Supabase",
      "Data Modeling & Optimization",
    ],
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-400" />,
    title: "Cloud & DevOps",
    items: [
      "AWS, Google Cloud, Vercel, Netlify",
      "Docker, GitHub, CI/CD",
      "Performance & Monitoring",
    ],
  },
  {
    icon: <Zap className="w-8 h-8 text-violet-400" />,
    title: "AI / ML",
    items: [
      "OpenAI, Google Gemini API",
      "Prompt Engineering, File Processing",
      "AI Integration in Products",
    ],
  },
  {
    icon: <Shield className="w-8 h-8 text-yellow-400" />,
    title: "Blockchain",
    items: [
      "Solidity, Ethereum, Web3",
      "Smart Contracts, DApps",
      "Decentralized Tech",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.13, type: "spring", stiffness: 120 }
  }),
};

const Skills: React.FC = () => (
  <section id="skills" className="relative max-w-5xl mx-auto py-20 px-4">
    <div className="soft-bg"></div>
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-zinc-900 dark:text-zinc-100"
    >
      Skills
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="glass-card border border-zinc-200 dark:border-zinc-700 rounded-xl p-7 shadow hover:shadow-lg transition-all flex flex-col items-start group relative overflow-hidden"
        >
          <div className="mb-4">{skill.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">{skill.title}</h3>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm space-y-1">
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