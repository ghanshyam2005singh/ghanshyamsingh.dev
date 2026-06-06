import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BookOpen,
  BriefcaseBusiness,
  FolderKanban,
  Github,
  Home,
  Linkedin,
  Instagram,
  Mail,
  Menu,
  Newspaper,
  Twitter,
  User,
  X,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/about", label: "About", Icon: User },
  { href: "/projects", label: "Projects", Icon: FolderKanban },
  { href: "/experience", label: "Experience", Icon: BriefcaseBusiness },
  { href: "/news", label: "News", Icon: Newspaper },
  { href: "/blog", label: "Blog", Icon: BookOpen },
  { href: "/contact", label: "Contact", Icon: Mail },
];

const socialLinks = [
  {
    href: "https://instagram.com/https_ghanshyam",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://twitter.com/https_ghanshyam",
    label: "Twitter",
    Icon: Twitter,
  },
  {
    href: "https://github.com/ghanshyam2005singh",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/ghanshyam-singh-b014232b2/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (href: string) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/85 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex min-h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-lg sm:text-xl font-extrabold tracking-tight text-[#18181b]"
          onClick={() => setMenuOpen(false)}
        >
          Hello<span className="text-blue-600">!</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 rounded-lg border border-gray-200 bg-white/80 p-1 shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(item.href)
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#6366f1] hover:text-[#1da1f2] transition"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
          <nav className="max-w-6xl mx-auto grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 px-1 py-1.5 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:hidden">
        <div className="flex items-center">
          {navItems.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-2 text-[10px] font-semibold transition-colors ${
                isActive(href)
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate w-full text-center leading-tight">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

export const SocialLinks: React.FC = () => (
  <nav className="flex gap-5">
    {socialLinks.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-[#6366f1] hover:text-[#1da1f2] transition z-10"
        >
          <Icon className="w-6 h-6" />
        </a>
    ))}
  </nav>
);
