import React from "react";

const workExperience = [
  {
    role: "Kubestellar Intern",
    org: "CNCF (Cloud Native Computing Foundation)",
    period: "Sept 2025 – Nov 2025",
    desc: "Contributed to Kubestellar, a CNCF project, enhancing Kubernetes multi-cluster management. Implemented features in A2A (Agentic AI) and collaborated with global developers.",
    location: "Remote"
  },
  {
    role: "Full Stack Intern",
    org: "DevRhylme Foundation",
    period: "Dec 2024 – May 2025",
    desc: "Developed responsive web apps using Next.js, TypeScript, Tailwind CSS. Optimized UI/UX pipelines reducing load time by 20% and improving retention by 15%.",
    location: "Remote"
  },
//   {
//     role: "Founder & Lead Developer",
//     org: "Alumconn",
//     period: "Oct 2023 – Present",
//     desc: "Building SaaS products and leading tech team. Developed Alumconn, Padh-le-Bhai, and CV Slayer platforms serving 100+ active users.",
//     location: "Lucknow, India"
//   },
//   {
//     role: "Full Stack Developer",
//     org: "Freelance & Open Source",
//     period: "2023 – Present",
//     desc: "Developed web applications, contributed to open source projects, and built scalable solutions for clients using modern tech stack.",
//     location: "Remote"
//   },
];

const WorkExperience: React.FC = () => (
  <section id="work-experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white z-10">
    <div className="max-w-6xl mx-auto z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Work Experience
        </h2>
        <p className="text-lg text-gray-600">
          My professional journey in tech and startups
        </p>
      </div>
      
      {/* Experience List */}
      <div className="space-y-6">
        {workExperience.map((item, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {item.role}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {item.org} • {item.location}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {item.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkExperience;