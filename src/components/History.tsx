import React from "react";

type JourneyEntry = {
  year: string;
  title: string;
  description: string;
};

const journeyEntries: JourneyEntry[] = [
  {
    year: "2025",
    title: "Building for the Future",
    description: "Now building startups, mentoring, and contributing to the community. My journey is a blend of failures, wins, and relentless learning—a story that's still being written."
  },
  {
    year: "2021",
    title: "First Laptop, First Hackathon",
    description: "Got my first laptop and entered the world of hackathons. Started building real projects, learned frontend development, and participated in open source programs like SSOC, Microsoft Engage, and GSSOC."
  },
  {
    year: "2019",
    title: "Tech Journey Begins",
    description: "Started my tech journey with a 2GB RAM phone, exploring cybersecurity with Kali Nethunter and Termux. Learned about networking, automation, and built my first IoT projects from scratch."
  },
  {
    year: "2016",
    title: "First Steps in Tech",
    description: "Curiosity sparked with my first gadget teardown. Started learning about how computers work, wrote my first lines of code, and realized tech could be my playground."
  }
];

const History: React.FC = () => {
  return (
    <section id="history" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            My Journey
          </h2>
          <p className="text-lg text-gray-600">
            The story of how I got into technology and built my career
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {journeyEntries.map((entry) => (
            <div key={entry.year} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {entry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {entry.description}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {entry.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;