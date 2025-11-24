import React, { useState, useEffect } from "react";
import Image from "next/image";

const roles = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
const typingSpeed = 100;
const pauseTime = 2000;

const GITHUB_USERNAME = "ghanshyam2005singh";

const Typewriter: React.FC = () => {
  const [text, setText] = React.useState("");
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < roles[roleIndex].length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
      setText(roles[roleIndex].slice(0, charIndex + 1));
    } else if (!deleting && charIndex === roles[roleIndex].length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), typingSpeed / 2);
      setText(roles[roleIndex].slice(0, charIndex - 1));
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-blue-600">
      {text}
      <span className="animate-pulse text-blue-600">|</span>
    </span>
  );
};

// Simplified GitHub stats hook
const useGithubStats = (username: string) => {
  const [stats, setStats] = useState<{
    public_repos: number;
    organisations: number;
  } | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const user = await userRes.json();
        
        setStats({
          public_repos: user.public_repos,
          organisations: user.organisations,
        });
      } catch {
        setStats({
          public_repos: 113,
          organisations: 6,
        });
      }
    };
    fetchStats();
  }, [username]);

  return stats;
};

const About: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const github = useGithubStats(GITHUB_USERNAME);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Hi, I&apos;m{" "}
                <span className="text-blue-600">Ghanshyam</span>
              </h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium">
                <Typewriter />
              </div>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                I build digital solutions that make a difference. Passionate about creating 
                tools for students and developers, exploring AI, and turning ideas into reality.
              </p>
            </div>

            {/* Simple Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1600+</div>
                <div className="text-sm text-gray-600">Contributions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{github?.public_repos || 113}</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{github?.organisations || 6}</div>
                <div className="text-sm text-gray-600">organisations</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-6"></div>
                
                {/* Main photo container */}
                <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl">
                  {!imgLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                  <Image
                    src="/assets/cmo-2.jpg"
                    alt="Ghanshyam Singh"
                    fill
                    className={`object-cover transition-opacity duration-700 ${
                      imgLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoadingComplete={() => setImgLoaded(true)}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;