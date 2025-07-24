import React from "react";
import { GraduationCap, BookOpen, School } from "lucide-react";

const academics = [
  {
    icon: <School className="w-7 h-7 text-[#6366f1]" />,
    title: "10th",
    period: "2019-20",
    desc: "High School",
  },
  {
    icon: <BookOpen className="w-7 h-7 text-[#6366f1]" />,
    title: "12th",
    period: "2021-22",
    desc: "Senior Secondary",
  },
  {
    icon: <BookOpen className="w-7 h-7 text-[#6366f1]" />,
    title: "IIT-JEE Prep",
    period: "2020-23",
    desc: "Competitive Exam Preparation",
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-[#6366f1]" />,
    title: "BTech CSE",
    period: "2023-27",
    desc: "Bachelor of Technology in Computer Science",
  },
];

const Academics: React.FC = () => (
  <section id="academics" className="w-full mx-auto py-16 px-4 flex flex-col items-center z-10 relative">
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center font-mono tracking-tight text-[#18181b] z-10 relative">
      Academics
    </h2>
    {/* Desktop: horizontal timeline */}
    <div className="relative w-full max-w-5xl flex-col items-center z-10 overflow-x-hidden hidden md:flex">
      <div
        className="absolute top-1/2 left-0 right-0 h-1 bg-[#e5e7eb] z-0"
        style={{ transform: "translateY(-50%)" }}
      />
      <div className="flex flex-row items-center justify-between w-full z-10">
        {academics.map((item) => (
          <div key={item.title} className="flex flex-col items-center flex-1 min-w-[120px] z-10 relative">
            <div className="bg-white rounded-full border-2 border-[#6366f1] shadow-md flex items-center justify-center w-14 h-14 mb-2 z-10">
              {item.icon}
            </div>
            <div className="font-mono text-[#6366f1] text-xs mb-1 z-10">{item.period}</div>
            <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] px-4 py-2 min-w-[120px] max-w-[160px] font-mono text-[#18181b] text-center z-10">
              <div className="font-bold text-base">{item.title}</div>
              <div className="text-xs mt-1">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Mobile: snake/vertical timeline */}
    <div className="flex md:hidden flex-col items-center w-full max-w-xs mx-auto relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#e5e7eb] z-0" style={{ transform: "translateX(-50%)" }} />
      {academics.map((item, idx) => (
        <div key={item.title} className="flex w-full z-10 relative mb-8 last:mb-0">
          <div className={`flex ${idx % 2 === 0 ? "justify-start" : "justify-end"} w-full`}>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full border-2 border-[#6366f1] shadow-md flex items-center justify-center w-14 h-14 mb-2 z-10">
                {item.icon}
              </div>
              <div className="font-mono text-[#6366f1] text-xs mb-1 z-10">{item.period}</div>
              <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] px-4 py-2 min-w-[120px] max-w-[180px] font-mono text-[#18181b] text-center z-10">
                <div className="font-bold text-base">{item.title}</div>
                <div className="text-xs mt-1">{item.desc}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Academics;