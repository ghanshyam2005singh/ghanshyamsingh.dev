import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Github,
  Instagram,
  Linkedin,
  Newspaper,
  PanelsTopLeft,
  Twitter,
  Users,
  Video,
} from "lucide-react";
import SEO from "../components/SEO";
import SiteLayout from "../components/SiteLayout";

const featuredLinks = [
    {
    label: "LinkedIn",
    detail: "Professional updates",
    href: "https://www.linkedin.com/in/ghanshyam-singh-b014232b2/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    detail: "@https_ghanshyam",
    href: "https://instagram.com/https_ghanshyam",
    Icon: Instagram,
  },
  {
    label: "GitHub",
    detail: "Projects and open-source work",
    href: "https://github.com/ghanshyam2005singh",
    Icon: Github,
  },
  {
    label: "LeetCode",
    detail: "Problem solving profile",
    href: "https://leetcode.com/u/https_ghanshyam/",
    Icon: Code2,
  },
  
    {
    label: "Portfolio Website",
    detail: "A little more about what I build",
    href: "/",
    Icon: PanelsTopLeft,
  },
];

const moreLinks = [
  {
    label: "Times of India",
    detail: "News media coverage",
    href: "https://timesofindia.indiatimes.com/city/lucknow/lu-students-alumconn-toredefine-campus-connect/articleshow/124099131.cms",
    Icon: Newspaper,
  },
  {
    label: "Medium",
    detail: "Personal blogs",
    href: "https://medium.com/",
    Icon: BookOpen,
  },
  {
    label: "Topmate",
    detail: "Connect with me",
    href: "https://topmate.io/",
    Icon: Video,
  },
  {
    label: "Peerlist",
    detail: "Community and work",
    href: "https://peerlist.io/",
    Icon: Users,
  },
  {
    label: "DEV Community",
    detail: "Developer articles",
    href: "https://dev.to/",
    Icon: Code2,
  },
];

const SocialsPage: React.FC = () => (
  <>
    <SEO
      title="Social Links"
      description="Find Ghanshyam Singh across social media, developer communities, and the web."
      path="/socials"
      type="profile"
      keywords={["Ghanshyam Singh social links", "Ghanshyam Singh Instagram", "Ghanshyam Singh GitHub"]}
    />
    <SiteLayout>
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-xl">
          <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-900/5 backdrop-blur sm:p-9">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-500 p-1 shadow-lg shadow-indigo-500/20">
                <Image
                  src="/assets/cmo-2.jpg"
                  alt="Ghanshyam Singh"
                  width={112}
                  height={112}
                  priority
                  className="h-28 w-28 rounded-full border-4 border-white object-cover"
                />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Ghanshyam Singh
              </p>
              {/* <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Find me around the web
              </h1>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                Follow along for what I’m building, learning, and sharing.
              </p> */}
            </div>

            <div className="mt-3 flex justify-center gap-3">
              {[
                { label: "Instagram", href: "https://instagram.com/https_ghanshyam", Icon: Instagram },
                { label: "GitHub", href: "https://github.com/ghanshyam2005singh", Icon: Github },
                { label: "X", href: "https://twitter.com/https_ghanshyam", Icon: Twitter },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* <p className="mt-4 text-center text-xs font-medium text-slate-500">
              @https_ghanshyam · Instagram &amp; X
            </p> */}

            <div className="mt-8 space-y-3">
              {featuredLinks.map(({ label, detail, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-md hover:shadow-blue-900/5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-blue-100 group-hover:text-blue-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-slate-900">{label}</span>
                    <span className="mt-0.5 block truncate text-sm text-slate-500">{detail}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-blue-600" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="mb-3 px-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                More places to find me
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {moreLinks.map(({ label, detail, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-20 items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 transition hover:border-blue-200 hover:bg-blue-50/60"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-slate-900">{label}</span>
                      <span className="mt-0.5 block text-xs leading-4 text-slate-500">{detail}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-8 text-center text-sm font-medium text-slate-500">
              Thanks for visiting !!
            </p>
          </div>
          <p className="mt-5 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Ghanshyam Singh
          </p>
        </div>
      </section>
    </SiteLayout>
  </>
);

export default SocialsPage;
