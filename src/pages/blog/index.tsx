import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Mail,
  PenLine,
  Sparkles,
  X,
} from "lucide-react";
import SiteLayout from "../../components/SiteLayout";
import BlogSubscribe from "../../components/BlogSubscribe";
import { BlogPostMeta, getAllPosts } from "../../../lib/blog";

type BlogPageProps = {
  posts: BlogPostMeta[];
};

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const dismissed = window.sessionStorage.getItem("blog-subscribe-dismissed");
    if (!dismissed) {
      const timer = window.setTimeout(() => setShowSubscribe(true), 900);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const closeSubscribe = () => {
    window.sessionStorage.setItem("blog-subscribe-dismissed", "true");
    setShowSubscribe(false);
  };

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Blog Subscriber",
          email,
          message: `Please subscribe ${email} to latest blog post notifications.`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        window.sessionStorage.setItem("blog-subscribe-dismissed", "true");
        setTimeout(() => setShowSubscribe(false), 1200);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Blog - Ghanshyam Singh</title>
        <meta
          name="description"
          content="Read Ghanshyam Singh's essays and notes on engineering, open source, projects, and learning."
        />
      </Head>
      <SiteLayout>
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.55fr] gap-8 items-end mb-12">
              <div>
                <p className="text-blue-600 font-semibold mb-3">Writing</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
                  Stories, notes, and build logs.
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                  Long-form posts about open source, products, engineering,
                  and the lessons that only show up while building.
                </p>
              </div>

              <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
                <div className="mb-3 flex items-center gap-2 text-blue-700 font-semibold">
                  <PenLine className="h-5 w-5" />
                  <span>Published from code</span>
                </div>
                <p className="text-sm leading-relaxed text-blue-900">
                  Every post here is a markdown file in the repository, so new
                  writing ships with the site.
                </p>
              </div>
            </div>

            {featuredPost ? (
              <>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                >
                  <div className="relative min-h-80 bg-white">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white">
                      <Sparkles className="h-4 w-4" />
                      Featured essay
                    </div>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString("en", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 font-semibold text-blue-600">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>

                {remainingPosts.length > 0 && (
                  <div className="mt-12">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <h2 className="text-2xl font-bold text-gray-900">
                        More posts
                      </h2>
                      <span className="text-sm font-medium text-gray-500">
                        {remainingPosts.length} article
                        {remainingPosts.length === 1 ? "" : "s"}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {remainingPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                        >
                          <div className="relative h-56 bg-white">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-6">
                            <p className="text-sm text-gray-500 mb-3">
                              {post.readTime}
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">
                              {post.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                              {post.excerpt}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center text-gray-600">
                Add your first markdown file in <span className="font-mono">posts/</span>.
              </div>
            )}
          </div>
        </section>

        <BlogSubscribe source="Blog index bottom CTA" />

        {showSubscribe && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center bg-gray-950/55 px-4 backdrop-blur-sm">
            <div className="relative w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-2xl">
              <button
                type="button"
                aria-label="Close subscribe popup"
                onClick={closeSubscribe}
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Get new posts by email
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Subscribe for a quick notification when a new blog goes live.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="your.email@example.com"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              {status === "success" && (
                <p className="mt-3 text-sm font-semibold text-green-600">
                  You&apos;re on the list.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm font-semibold text-red-600">
                  Couldn&apos;t subscribe right now. Please try again.
                </p>
              )}
            </div>
          </div>
        )}
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

export default BlogPage;
