import React, { useState } from "react";

type BlogEntry = {
  year: string;
  title: string;
  short: string;
  full: string;
  likes: number;
};

const initialBlogs: BlogEntry[] = [
  {
    year: "2016",
    title: "First Steps in Tech",
    short: "Curiosity sparked with my first gadget teardown and a taste of coding.",
    full: "2016 was the year I first opened up a gadget to see what was inside. I started learning about how computers work, wrote my first lines of code, and realized tech could be my playground.",
    likes: 0,
  },
  {
    year: "2019",
    title: "Hacker Mode: Activated",
    short: "Started my tech journey with a 2GB RAM phone, hacking, building, and exploring.",
    full: `My tech journey began in 2019, armed with nothing but a 2GB RAM phone and an insatiable curiosity. I installed Kali Nethunter and Termux, diving headfirst into the world of cybersecurity. I learned about RATs, Metasploit, payload binding, TCP, and HTML—spending countless nights exploring the basics of hacking and digital defense.

Fascinated by how things work, I tinkered with engines, machines, and IoT, building gadgets from scratch and understanding the magic behind automation.`,
    likes: 0,
  },
  {
    year: "2021",
    title: "First Laptop, First Hackathon",
    short: "Got my first laptop, entered hackathons, and started building real projects.",
    full: `When I finally got my first laptop, a new world opened up. I attended my first tech event, learned frontend development, and ambitiously tried for GSoC—failing, but learning. I entered hackathons and open source programs like SSOC, Microsoft Engage, and GSSOC, each time growing stronger from setbacks.`,
    likes: 0,
  },
  {
    year: "2025",
    title: "Building for the Future",
    short: "Now building startups, mentoring, and contributing to the community.",
    full: `Today, I’m building startups, mentoring others, and contributing to communities. My journey is a blend of failures, wins, and relentless learning—a story that’s still being written.`,
    likes: 0,
  },
];

const History: React.FC = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleLike = (idx: number) => {
    setBlogs((prev) =>
      prev.map((b, i) => (i === idx ? { ...b, likes: b.likes + 1 } : b))
    );
  };

  return (
    <section id="history" className="w-full mx-auto py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center font-mono tracking-tight text-[#18181b]">
        My Journey Blog
      </h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, idx) => (
          <div
            key={blog.year}
            className="bg-white/90 rounded-xl shadow-md border border-[#e5e7eb] p-6 flex flex-col relative"
          >
            <span className="absolute top-4 right-6 text-xs font-mono bg-[#6366f1]/10 text-[#6366f1] px-3 py-1 rounded-full">
              {blog.year}
            </span>
            <h3 className="text-xl font-bold font-mono text-[#6366f1] mb-2">{blog.title}</h3>
            <p className="text-[#18181b] font-mono mb-3">
              {blog.short}
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <button
                className="flex items-center text-[#6366f1] font-bold hover:underline transition"
                onClick={() => handleLike(idx)}
                aria-label="Like this blog"
              >
                <svg width="20" height="20" fill="currentColor" className="mr-1">
                  <path d="M10 18l-1.45-1.32C4.4 12.36 2 10.28 2 7.5 2 5.5 3.5 4 5.5 4c1.54 0 3.04.99 3.57 2.36h1.87C11.46 4.99 12.96 4 14.5 4 16.5 4 18 5.5 18 7.5c0 2.78-2.4 4.86-6.55 9.18L10 18z" />
                </svg>
                {blog.likes}
              </button>
              <button
                className="text-[#6366f1] font-bold hover:underline transition"
                onClick={() => setExpanded(idx)}
                aria-label="Read more"
              >
                Read More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full blog */}
      {expanded !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-[#6366f1] font-bold text-lg"
              onClick={() => setExpanded(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <span className="text-xs font-mono bg-[#6366f1]/10 text-[#6366f1] px-3 py-1 rounded-full">
              {blogs[expanded].year}
            </span>
            <h3 className="text-2xl font-bold font-mono text-[#6366f1] mt-2 mb-4">{blogs[expanded].title}</h3>
            <div className="text-[#18181b] font-mono whitespace-pre-line">
              {blogs[expanded].full}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default History;