import React, { useEffect, useState } from "react";

const scriptLines = [
  "Initializing portfolio...",
  "Loading developer tools...",
  "Fetching projects...",
  "Connecting to GitHub...",
  "Ready. Launching UI 🚀"
];

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (current < scriptLines.length) {
      setTyped("");
      let i = 0;
      const typeInterval = setInterval(() => {
        setTyped(scriptLines[current].slice(0, i));
        i++;
        if (i > scriptLines[current].length) {
          clearInterval(typeInterval);
          setTimeout(() => setCurrent(current + 1), 400); // much faster
        }
      }, 20); // much faster typing
      return () => clearInterval(typeInterval);
    } else {
      setTimeout(onFinish, 400); // quick transition to site
    }
  }, [current, onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#7c3aed]">
      <div className="p-8 rounded-2xl border border-[#6366f1] bg-white/90 dark:bg-[#18181b]/90 shadow-2xl w-full max-w-md font-mono text-[#312e81] dark:text-[#a78bfa] text-lg font-semibold tracking-wide backdrop-blur-md">
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
      `}</style>
    </div>
  );
};

export default Loader;