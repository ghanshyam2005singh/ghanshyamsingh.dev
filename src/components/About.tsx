import React, { useState, useEffect } from "react";
import Image from "next/image";

const roles = ["Developer", "Coder"];
const typingSpeed = 120;
const pauseTime = 1000;

const GITHUB_USERNAME = "ghanshyam2005singh";

// Updated values from your latest GitHub stats
const STATIC_TOTAL_CONTRIBUTIONS = 1200; // Updated
const STATIC_HIGHEST_STREAK = 45;        // Updated

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
    <span className="text-[#6366f1] font-mono">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Fetch GitHub stats using the public API
const useGithubStats = (username: string) => {
  const [stats, setStats] = useState<{
    public_repos: number;
    followers: number;
    totalPRs: number;
    totalIssues: number;
    totalStars: number;
  } | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Get user info
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const user = await userRes.json();

        // Get repos (for stars)
        let page = 1;
        type Repo = { stargazers_count?: number };
        let repos: Repo[] = [];
        while (true) {
          const repoRes = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
          );
          const repoPage = await repoRes.json();
          if (!repoPage.length) break;
          repos = repos.concat(repoPage);
          page++;
        }
        const totalStars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);

        // Get PRs and Issues (search API, only public)
        const prRes = await fetch(
          `https://api.github.com/search/issues?q=author:${username}+type:pr`
        );
        const prData = await prRes.json();

        const issueRes = await fetch(
          `https://api.github.com/search/issues?q=author:${username}+type:issue`
        );
        const issueData = await issueRes.json();

        setStats({
          public_repos: user.public_repos,
          followers: user.followers,
          totalPRs: prData.total_count,
          totalIssues: issueData.total_count,
          totalStars,
        });
      } catch {
        setStats(null);
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
      className="w-full flex flex-col md:grid md:grid-cols-12 items-center justify-center min-h-[70vh] py-12 px-4 sm:px-8 md:gap-6 gap-8 z-10"
    >
      {/* About Text */}
      <div className="md:col-span-5 order-2 md:order-1 flex flex-col items-start justify-center max-w-xl md:pl-12 pl-0 pr-0 md:pr-8 relative z-10 w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-mono mb-4 text-[#18181b]">
          Hii, I am Ghanshyam Singh
        </h1>
        <h2 className="text-2xl sm:text-3xl font-mono mb-2 text-[#18181b]">
          <Typewriter />
        </h2>
        <p className="text-base sm:text-lg font-sans text-[#18181b]">
          I love building things for the web, Building tools for students, developers and Exploring new tech, AI.
        </p>
      </div>
      {/* Photo */}
      <div className="md:col-span-4 order-1 md:order-2 flex flex-col items-center justify-center relative z-10 w-full md:w-auto mb-8 md:mb-0">
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-[#6366f1] shadow-md bg-white mb-6">
          {!imgLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <Image
            src="/assets/cmo-2.jpg"
            alt="Ghanshyam Singh"
            fill
            className={`object-cover transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            onLoadingComplete={() => setImgLoaded(true)}
            priority
          />
        </div>
      </div>
      {/* GitHub Stats */}
      <div className="md:col-span-3 order-3 flex flex-col items-center w-full max-w-md bg-white/90 rounded-xl shadow-lg border border-[#e5e7eb] p-6 mt-4 z-10">
        <h3 className="text-xl font-bold font-mono text-[#6366f1] mb-4">GitHub Stats</h3>
        <div className="grid grid-cols-2 gap-4 w-full text-center">
          <div>
            <div className="text-2xl font-bold text-[#18181b]">{STATIC_TOTAL_CONTRIBUTIONS}+</div>
            <div className="text-xs font-mono text-[#6366f1]">Total Contributions</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#18181b]">{STATIC_HIGHEST_STREAK}</div>
            <div className="text-xs font-mono text-[#6366f1]">Highest Streak</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#18181b]">{github?.public_repos ?? "111"}</div>
            <div className="text-xs font-mono text-[#6366f1]">Repos</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#18181b]">{github?.followers ?? "28"}</div>
            <div className="text-xs font-mono text-[#6366f1]">Followers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#18181b]">{github?.totalPRs ?? "90"}</div>
            <div className="text-xs font-mono text-[#6366f1]">Pull Requests</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#18181b]">{github?.totalIssues ?? "35"}</div>
            <div className="text-xs font-mono text-[#6366f1]">Issues</div>
          </div>
        </div>
        {/* Contribution Board (as image, since API not available) */}
        <div className="w-full flex flex-col items-center mt-6">
          <span className="text-xs font-mono text-[#6366f1] mb-1">Contribution Board</span>
          <img
            src={`https://ghchart.rshah.org/006d32/${GITHUB_USERNAME}`}
            alt="GitHub Contribution Chart"
            className="rounded-xl shadow-md w-full max-w-xs"
            style={{ height: "auto" }}
            loading="lazy"
          />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #about {
            display: flex !important;
            flex-direction: column !important;
          }
          #about > div:nth-child(2) { order: 1 !important; }
          #about > div:nth-child(1) { order: 2 !important; }
          #about > div:nth-child(3) { order: 3 !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
