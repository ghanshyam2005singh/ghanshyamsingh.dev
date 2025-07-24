import React from "react";
import { Briefcase, Award } from "lucide-react";

const achievements = [
  {
    icon: <Award className="w-6 h-6 text-[#6366f1]" />,
    title: "CTF Cybersecurity Winner",
    desc: "Multiple CTF wins in college and online platforms.",
    year: "2023-2024",
  },
  {
    icon: <Award className="w-6 h-6 text-[#6366f1]" />,
    title: "Adobe Aptitude Cleared",
    desc: "Cleared Adobe's competitive aptitude round.",
    year: "2024",
  },
  {
    icon: <Award className="w-6 h-6 text-[#6366f1]" />,
    title: "Google Cloud Facilitator & Mentee",
    desc: "Participated Google Cloud program, mentored and built cloud projects.",
    year: "2024 & 2025",
  },
  {
    icon: <Award className="w-6 h-6 text-[#6366f1]" />,
    title: "SIH Team Lead",
    desc: "Led team to finals in Smart India Hackathon.",
    year: "2024",
  },
  {
    icon: <Award className="w-6 h-6 text-[#6366f1]" />,
    title: "Open Source Contributor",
    desc: "Contributed to GSSOC, SSOC, Hacketober-Fest, and more.",
    year: "2023-Now",
  },
];

const workExperience = [
  {
    icon: <Briefcase className="w-6 h-6 text-[#6366f1]" />,
    role: "Community Manager & Developer",
    org: "DevRhylme Foundation",
    period: "2024-2025",
    desc: "Managed developer communities, organized events, and mentored students.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#6366f1]" />,
    role: "Startup Building",
    org: "Iron Industry",
    period: "2021-Present",
    desc: "Building SaaS products, leading a tech team, and launching real-world solutions.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#6366f1]" />,
    role: "Full Stack Developer",
    org: "Freelance & Open Source",
    period: "2023-Present",
    desc: "Developed web apps, contributed to open source, and built products for clients.",
  },
];

const AchievmentsAndWorkExperience: React.FC = () => (
  <section id="achievements" className="w-full mx-auto py-16 px-4 flex flex-col items-center z-10 relative">
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center font-mono tracking-tight text-[#18181b] z-10 relative">
      Achievements & Work Experience
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl z-10 relative">
      {/* Achievements */}
      <div className="z-10 relative">
        <h3 className="text-xl font-bold mb-4 font-mono text-[#6366f1] z-10 relative">Achievements</h3>
        <ul className="flex flex-col gap-6 z-10 relative">
          {achievements.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 z-10 relative">
              <div className="flex-shrink-0 z-10 relative">{item.icon}</div>
              <div className="z-10 relative">
                <div className="font-mono text-[#18181b] font-semibold">{item.title}</div>
                <div className="text-xs text-[#6366f1] font-mono">{item.year}</div>
                <div className="text-sm text-[#312e81] font-mono">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Work Experience */}
      <div className="z-10 relative">
        <h3 className="text-xl font-bold mb-4 font-mono text-[#6366f1] z-10 relative">Work Experience</h3>
        <ul className="flex flex-col gap-6 z-10 relative">
          {workExperience.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 z-10 relative">
              <div className="flex-shrink-0 z-10 relative">{item.icon}</div>
              <div className="z-10 relative">
                <div className="font-mono text-[#18181b] font-semibold">{item.role}</div>
                <div className="text-xs text-[#6366f1] font-mono">{item.org} &middot; {item.period}</div>
                <div className="text-sm text-[#312e81] font-mono">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AchievmentsAndWorkExperience;