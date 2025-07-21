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
          setTimeout(() => setCurrent(current + 1), 600);
        }
      }, 22);
      return () => clearInterval(typeInterval);
    } else {
      setTimeout(onFinish, 700);
    }
  }, [current, onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="p-8 rounded-lg border border-gray-800 bg-gray-900 shadow-lg w-full max-w-md font-mono text-green-400 text-lg">
        {Array.from({ length: current }).map((_, idx) => (
          <div key={idx} className="mb-1">{scriptLines[idx]}</div>
        ))}
        {current < scriptLines.length && (
          <div>
            {typed}
            <span className="animate-blink">|</span>
          </div>
        )}
      </div>
      <style>{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Loader;