import React, { useState } from "react";
import { Mail } from "lucide-react";

type BlogSubscribeProps = {
  source?: string;
};

const BlogSubscribe: React.FC<BlogSubscribeProps> = ({ source = "Blog page" }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
          message: `Please subscribe ${email} to latest blog post notifications. Source: ${source}.`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-3xl mx-auto rounded-lg border border-blue-100 bg-blue-50 p-6 sm:p-8">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-blue-600 border border-blue-100">
          <Mail className="h-6 w-6" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Subscribe for new blog posts
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Get notified when I publish new posts about open source, projects,
          engineering, and my learning journey.
        </p>
        <form onSubmit={handleSubscribe} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-lg border-2 border-blue-100 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="your.email@example.com"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Mail className="h-5 w-5" />
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {status === "success" && (
          <p className="mt-3 text-sm font-semibold text-green-700">
            Subscribed. You&apos;ll get notified about latest posts.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm font-semibold text-red-600">
            Couldn&apos;t subscribe right now. Please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogSubscribe;
