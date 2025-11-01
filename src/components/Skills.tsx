import React from "react";

const skills = [
  {
    title: "Frontend",
    items: [
      "React.js, Next.js, TypeScript, JavaScript",
      "HTML5, CSS3, Tailwind CSS, Responsive Design",
      "Component Architecture, Accessibility",
    ],
  },
  {
    title: "Backend & API",
    items: [
      "Node.js, Express.js, GoLang, Python, Java",
      "RESTful APIs, GraphQL, Prisma ORM",
      "Authentication (JWT, OAuth), Security",
      "Rate Limiting, Caching, CORS",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL, MySQL (Joins, Indexes, Optimization)",
      "MongoDB (Document Design, Aggregation)",
      "Firebase Firestore & Supabase",
      "Redis (Caching, Pub/Sub)",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (S3, RDS, EC2, Lambda, CloudWatch)",
      "Google Cloud Platform",
      "Docker, Kubernetes, Kubestellar",
      "CI/CD Pipelines, Nginx",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Prompt Engineering, LLM Integration",
      "OpenAI, Gemini API Integration",
      "AI-powered Applications",
      "AWS GenAI, Udacity GenAI Certified",
    ],
  },
  {
    title: "System Design & Architecture",
    items: [
      "Scalable & Secure Architecture",
      "WebSocket Pipelines, OOPs, Microservices",
      "Pub/Sub, Rate Limiting, Load Balancing",
    ],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="py-16 px-4 z-10 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-6xl z-10 mx-auto">
      {/* Header */}
      <div className="text-center z-10 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Skills & Technologies
        </h2>
        <p className="text-lg text-gray-600">
          Technologies I work with to build scalable solutions
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 z-10 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {skill.title}
            </h3>
            <ul className="space-y-2">
              {skill.items.map((item, idx) => (
                <li key={idx} className="text-gray-600 text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action Links */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://leetcode.com/ghanshyam_064/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          LeetCode Profile
        </a>
        <a
          href="https://drive.google.com/file/d/1KV2Mxz8nbwsALgMxQ3CcFJtbMa3JGUl3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          View Resume
        </a>
        <a
          href="https://github.com/ghanshyam2005singh"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Github
        </a>
      </div>
    </div>
  </section>
);

export default Skills;