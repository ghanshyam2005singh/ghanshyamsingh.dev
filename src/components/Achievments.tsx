import React from "react";

const achievements = [
  {
    title: "Google Cloud Arcade Facilitator 2025",
    desc: "Guided 300+ learners through hands-on cloud labs and Google Cloud technologies.",
    year: "2025",
  },
  {
    title: "BNB Chain Gig 2024 Winner",
    desc: "Built scalable decentralized app handling 1K+ transactions with team.",
    year: "2024",
  },
  {
    title: "AWS GenAI & Postman API Expert Certified",
    desc: "Completed AWS GenAI Certificate and Postman API Expert certification.",
    year: "2024",
  },
  {
    title: "SIH 2024 Internal Hackathon Winner",
    desc: "Led 6-member team to victory in Smart India Hackathon internal competition.",
    year: "2024",
  },
  {
    title: "Open Source Contributor",
    desc: "Active contributor to GSSoC, SheBright, DevRhylme Foundation with multiple PRs merged.",
    year: "2023-Present",
  },
  {
    title: "Deputy Head - HackSprint Hackathon",
    desc: "Coordinated 300+ participants and 10+ mentors for IIT Madras BS Program hackathon.",
    year: "2024",
  },
  {
    title: "Project Maintainer - Innogeeks",
    desc: "Certified project maintainer in open source projects at Innogeeks organization.",
    year: "2024",
  },
];

const Achievements: React.FC = () => (
  <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Achievements & Certifications
        </h2>
        <p className="text-lg text-gray-600">
          Recognition and milestones in my tech journey
        </p>
      </div>
      
      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <span className="text-sm text-blue-600 font-medium whitespace-nowrap">
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;