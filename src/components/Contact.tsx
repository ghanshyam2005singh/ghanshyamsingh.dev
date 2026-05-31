import React, { useState } from "react";
import { Github, Linkedin, Mail, MapPin, MessageSquare, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-blue-600 font-semibold mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have a project in mind or want to collaborate? Drop me a message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
          <aside className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Let&apos;s build something useful.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I&apos;m open to product work, open-source collaboration,
              internships, and technical writing opportunities.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:ghanshyam2005singh@gmail.com"
                className="flex items-center gap-3 rounded-lg bg-white p-3 text-gray-700 border border-gray-200 hover:text-blue-600"
              >
                <Mail className="h-5 w-5 shrink-0" />
                <span className="min-w-0 break-all text-sm font-medium">
                  ghanshyam2005singh@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-lg bg-white p-3 text-gray-700 border border-gray-200">
                <MapPin className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">India / Remote</span>
              </div>
              <a
                href="https://github.com/ghanshyam2005singh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-white p-3 text-gray-700 border border-gray-200 hover:text-blue-600"
              >
                <Github className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ghanshyam-singh-b014232b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-white p-3 text-gray-700 border border-gray-200 hover:text-blue-600"
              >
                <Linkedin className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder-gray-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-gray-900 placeholder-gray-400"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-600 text-center font-medium">
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-center font-medium">
                  Failed to send message. Please try again or email me directly.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
