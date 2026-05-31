import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import SiteLayout from "../../components/SiteLayout";
import BlogSubscribe from "../../components/BlogSubscribe";
import SEO, { absoluteUrl, personJsonLd } from "../../components/SEO";
import { BlogPost, getPostBySlug, getPostSlugs } from "../../../lib/blog";

type BlogPostPageProps = {
  post: BlogPost;
};

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const articleUrl = `/blog/${post.slug}`;

  return (
    <>
    <SEO
      title={`${post.title} - Ghanshyam Singh Blog`}
      description={post.excerpt}
      path={articleUrl}
      image={post.coverImage}
      type="article"
      publishedTime={post.date}
      keywords={[
        post.title,
        ...post.tags,
        "Ghanshyam Singh blog",
        "Ghanshyam Singh Alumconn",
      ]}
      structuredData={[
        personJsonLd,
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: absoluteUrl(post.coverImage),
          datePublished: post.date,
          dateModified: post.date,
          mainEntityOfPage: absoluteUrl(articleUrl),
          author: {
            "@id": "https://ghanshyam-singh.me/#person",
          },
          publisher: {
            "@id": "https://ghanshyam-singh.me/#person",
          },
          keywords: post.tags.join(", "),
        },
      ]}
    />
    <SiteLayout>
      <article>
        <section className="px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>

            <div className="mb-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              {post.title}
            </h1>
            <p className="text-xl leading-relaxed text-gray-600 mb-6">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-30 sm:h-64 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-contain p-5 sm:p-6"
                priority
              />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-3xl mx-auto rounded-lg border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </section>

        <BlogSubscribe source={`Blog article: ${post.title}`} />
      </article>
    </SiteLayout>
  </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getPostSlugs().map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params?.slug;

  if (typeof slug !== "string") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: getPostBySlug(slug),
    },
  };
};

export default BlogPostPage;
