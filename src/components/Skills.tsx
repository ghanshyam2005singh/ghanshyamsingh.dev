import React from "react";
import { motion } from "framer-motion";
import { Database, Cloud, Zap, Shield, Globe, Server, Layers, Users, Award } from "lucide-react";

const skills = [
  {
    icon: <Globe className="w-8 h-8 text-[#6366f1]" />,
    title: "Frontend",
    items: [
      "React.js, Next.js, TypeScript, JavaScript, jQuery",
      "HTML5, CSS3, Tailwind CSS, Responsive Design",
      "Component Architecture, Accessibility, WebSocket Integration",
      "LeetCode: Problem Solving & Algorithms",
    ],
  },
  {
    icon: <Server className="w-8 h-8 text-[#22c55e]" />,
    title: "Backend & API",
    items: [
      "Node.js, Express.js, GoLang, Python, C#, .NET, Java, Rust",
      "RESTful APIs, GraphQL, Prisma ORM, Socket.io, Postman",
      "Authentication (JWT, OAuth), Security (bcrypt, CORS, Rate Limiting)",
      "System Design: Pub/Sub, Load Balancing, Horizontal Scaling, Pipelines",
    ],
  },
  {
    icon: <Database className="w-8 h-8 text-[#ef4444]" />,
    title: "Databases",
    items: [
      "SQL: PostgreSQL, MySQL (Joins, Indexes, Triggers, Transactions, Normalisation)",
      "NoSQL: MongoDB (Document Structure, Schema Design, Aggregation, Indexing)",
      "Redis (Caching, Pub/Sub)",
      "Database Design, Optimization, Prisma ORM",
    ],
  },
  {
    icon: <Cloud className="w-8 h-8 text-[#06b6d4]" />,
    title: "Cloud & DevOps",
    items: [
      "AWS (Educate, Skill Builder, S3, RDS, EC2, IAM, VPC, Elastic Beanstalk, CloudWatch)",
      "Google Cloud (Compute, Storage, Monitoring)",
      "Vercel, Netlify, Render, Cloudflare CDN",
      "Docker (Dockerfile, Compose, Image, Container, Volume, Network)",
      "CI/CD Pipeline, Nginx, Rate Limiting, CORS",
    ],
  },
  {
    icon: <Zap className="w-8 h-8 text-[#a78bfa]" />,
    title: "AI / ML & GenAI",
    items: [
      "Prompt Engineering, LLM Integration (OpenAI, Gemini)",
      "File Processing, AI Integration in Products",
      "Udacity GenAI Certificate, AWS GenAI Certificate",
    ],
  },
  {
    icon: <Shield className="w-8 h-8 text-[#facc15]" />,
    title: "Blockchain & Web3",
    items: [
      "Solidity, Ethereum, Web3.js",
      "Smart Contracts, DApps, Decentralized Tech",
    ],
  },
  {
    icon: <Layers className="w-8 h-8 text-[#6366f1]" />,
    title: "System Design & Architecture",
    items: [
      "OOPs, Microservices, Pub/Sub, Rate Limiting, Load Balancing",
      "Scalable & Secure Architecture, WebSocket Pipelines",
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-[#06b6d4]" />,
    title: "Collaboration & Community",
    items: [
      "Open Source Contributions, Technical Blogging",
      "Mentoring, Team Leadership, User Growth (+X% increase)",
      "LeetCode Profile, Resume Optimization (ATS friendly)",
    ],
  },
  {
    icon: <Award className="w-8 h-8 text-[#f59e42]" />,
    title: "Certifications",
    items: [
      "AWS Educate, AWS Skill Builder, Udacity GenAI",
      "Postman API Expert",
      "Google Cloud Experience",
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
  <section id="skills" className="w-full mx-auto py-16 px-4 flex flex-col items-center gap-8 z-10">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      className="text-3xl sm:text-4xl font-extrabold mb-10 z-10 text-center font-mono tracking-tight text-[#18181b]"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', monospace" }}
    >
      Skills & Experience
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl z-10">
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
    <div className="mt-8 w-full text-center z-10">
      <a
        href="https://leetcode.com/ghanshyam_064/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 rounded-lg bg-[#6366f1] text-white font-bold font-mono shadow hover:bg-[#7c3aed] transition"
      >
        View My LeetCode Profile
      </a>
      <a
        href="https://cv-slayer-ppnn.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 ml-4 rounded-lg bg-[#06b6d4] text-white font-bold font-mono shadow hover:bg-[#0891b2] transition"
      >
        Resume (ATS Optimized)
      </a>
      <a
        href="https://padh-le-bhai-one.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 ml-4 rounded-lg bg-[#22c55e] text-white font-bold font-mono shadow hover:bg-[#16a34a] transition"
      >
        Padh Le Bhai Project
      </a>
    </div>
  </section>
);

export default Skills;