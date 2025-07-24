import React, { useEffect, useState } from "react";

const scriptLines = [
  "Welcome, human.",
  "Booting up creativity...",
  "Syncing code neurons...",
  "Loading your experience...",
  "Ready to build. 🚀"
];

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);
  const [typed, setTyped] = useState("");

  // Typewriter effect for each line
  useEffect(() => {
    if (current < scriptLines.length) {
      setTyped("");
      let i = 0;
      const typeInterval = setInterval(() => {
        setTyped(scriptLines[current].slice(0, i));
        i++;
        if (i > scriptLines[current].length) {
          clearInterval(typeInterval);
          setTimeout(() => setCurrent(current + 1), 100);
        }
      }, 20);
      return () => clearInterval(typeInterval);
    } else {
      setTimeout(onFinish, 200);
    }
  }, [current, onFinish]);

  // Animated geometric loader
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur">
      {/* Geometric Loader */}
      <div className="mb-10">
        <div className="relative w-20 h-20">
          <span className="absolute inset-0 rounded-full border-4 border-[#6366f1] border-t-transparent animate-spin-slow"></span>
          <span className="absolute inset-3 rounded-full border-2 border-[#6366f1]/60 border-b-transparent animate-spin-reverse"></span>
          <span className="absolute left-1/2 top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-[#6366f1] rounded-full shadow-lg"></span>
        </div>
      </div>
      {/* Typewriter lines */}
      <div className="w-full max-w-md font-mono text-[#18181b] text-lg font-semibold tracking-wide text-center drop-shadow-lg z-10">
        {Array.from({ length: current }).map((_, idx) => (
          <div key={idx} className="mb-1">{scriptLines[idx]}</div>
        ))}
        {current < scriptLines.length && (
          <div>
            {typed}
            <span className="animate-blink text-[#6366f1]">|</span>
          </div>
        )}
      </div>
      <style>{`
        .animate-blink {
          animation: blink 0.8s steps(2, start) infinite;
        }
        @keyframes blink {
          to { opacity: 0; }
        }
        .animate-spin-slow {
          animation: spin 2.2s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 1.7s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;