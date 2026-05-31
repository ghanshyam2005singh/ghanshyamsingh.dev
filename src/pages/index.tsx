import React from "react";
import About from "../components/About";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Code2,
  Newspaper,
  Sparkles,
} from "lucide-react";
import SiteLayout from "../components/SiteLayout";
import { BlogPostMeta, getAllPosts } from "../../lib/blog";

type HomeProps = {
  posts: BlogPostMeta[];
};

const focusCards = [
  {
    title: "Projects",
    href: "/projects",
    description: "Products, experiments, and open-source work with live links.",
    Icon: Code2,
  },
  {
    title: "Experience",
    href: "/experience",
    description: "Mentorships, internships, and achievements from my journey.",
    Icon: Briefcase,
  },
  {
    title: "News",
    href: "/news",
    description: "Media coverage, press mentions, and public recognition.",
    Icon: Newspaper,
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Long-form notes on building, open source, and lessons learned.",
    Icon: BookOpen,
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with me for collaborations, opportunities, or just to say hello.",
    Icon: Sparkles,
  },
];

const Home: React.FC<HomeProps> = ({ posts }) => {
  const featuredPost = posts[0];

  return (
    <>
      <Head>
        <title>Ghanshyam Singh - Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio website. Explore my projects, skills, journey, achievements, and contact information."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <SiteLayout>
        <About />

        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-blue-600 font-semibold mb-2">Start here</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Pick what you want to explore.
                </h2>
              </div>
              <p className="max-w-xl text-gray-600 leading-relaxed">
                A clearer map of the portfolio: work, experience, media coverage,
                and writing are split into dedicated pages.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-8 items-stretch">
              {featuredPost && (
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                >
                  <div className="relative h-72 bg-white">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-2 text-sm font-semibold text-blue-600 backdrop-blur">
                      Latest blog
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-gray-500 mb-3">
                      {featuredPost.readTime}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5">
                      {featuredPost.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 font-semibold text-blue-600">
                      Read the story
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusCards.map(({ title, href, description, Icon }, index) => (
                  <Link
                    key={title}
                    href={href}
                    className={`group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                        <Icon className="h-6 w-6" />
                      </span>
                      <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {description}
                    </p>
                  </Link>
                ))}

                <div className="rounded-lg border border-blue-100 bg-blue-50 p-5 sm:col-span-2">
                  <div className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Navigation tip</span>
                  </div>
                  <p className="text-sm leading-relaxed text-blue-900">
                    Use the header for direct pages, or use these cards as a quick
                    guided path when someone lands here for the first time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default Home;
