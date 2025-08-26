import React, { useEffect, useState } from "react";

const funnyQuotes = [
  "\"There are only 10 types of people in the world: those who understand binary and those who don't.\" 😄",
  "\"A programmer's wife asks: 'Would you go to the shop and pick up a loaf of bread? And if they have eggs, get a dozen.' The programmer returns home with 12 loaves of bread.\" 🍞",
  "\"Why do programmers prefer dark mode? Because light attracts bugs!\" 🐛",
  "\"99 little bugs in the code, 99 little bugs. Take one down, patch it around... 117 little bugs in the code.\" 🔧",
  "\"A SQL query goes into a bar, walks up to two tables and asks... 'Can I join you?'\" 🍺",
  "\"How many programmers does it take to change a light bulb? None. That's a hardware problem.\" 💡"
];

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Initialize quote selection on client side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const visitCount = parseInt(localStorage.getItem('visitCount') || '0');
      const quoteIndex = visitCount % funnyQuotes.length;
      localStorage.setItem('visitCount', (visitCount + 1).toString());
      setCurrentQuote(quoteIndex);
    }
  }, []);

  useEffect(() => {
    const quote = funnyQuotes[currentQuote];
    
    if (charIndex < quote.length) {
      const timeout = setTimeout(() => {
        setDisplayText(quote.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 15); // Faster typing speed
      
      return () => clearTimeout(timeout);
    } else {
      // Mark typing as complete, show next button
      setIsTypingComplete(true);
    }
  }, [charIndex, currentQuote]);

  const handleNext = () => {
    onFinish();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] backdrop-blur">
      {/* Code-themed Loader */}
      <div className="mb-8">
        <div className="relative w-20 h-20">
          {/* Outer ring */}
          <span className="absolute inset-0 rounded-full border-4 border-[#6366f1] border-t-transparent animate-spin"></span>
          {/* Inner ring */}
          <span className="absolute inset-2 rounded-full border-2 border-[#8b5cf6] border-b-transparent animate-spin" style={{animationDirection: 'reverse'}}></span>
          {/* Center brackets */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#6366f1] font-bold text-lg animate-pulse">
            {'{ }'}
          </div>
        </div>
      </div>
      
      {/* Single Quote Display */}
      <div className="w-full max-w-2xl font-mono text-[#18181b] text-lg text-center px-6">
        <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-[#e5e7eb]">
          <div className="text-[#6366f1] mb-2 text-sm font-semibold">Developer Humor</div>
          <div className="min-h-[80px] flex items-center justify-center">
            {displayText}
            {!isTypingComplete && <span className="animate-pulse text-[#8b5cf6] ml-1">|</span>}
          </div>
          
          {/* Next Button - appears after typing is complete */}
          {isTypingComplete && (
            <div className="mt-6">
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-[#6366f1] text-white font-mono font-semibold rounded-lg hover:bg-[#7c3aed] transition-colors shadow-md"
              >
                Enter Portfolio →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;