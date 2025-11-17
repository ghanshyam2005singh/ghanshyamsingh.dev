import React from "react";

const Contact: React.FC = () => (
  <section
    id="contact"
    className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Get In Touch
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Let&apos;s build something amazing together! I&apos;m always open to discussing new opportunities, 
        collaborations, or just having a chat about technology.
      </p>
      
      {/* Contact Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <a
          href="https://alumconn.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium border border-gray-200"
        >
          Alumconn
        </a>
        <a
          href="https://www.linkedin.com/in/ghanshyam-singh-b014232b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium border border-gray-200"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ghanshyam2005singh"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium border border-gray-200"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/https_ghanshyam"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium border border-gray-200"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com/https_ghanshyam"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium border border-gray-200"
        >
          Instagram
        </a>
      </div>

      {/* Email */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <p className="text-gray-600 mb-2">Prefer email?</p>
        <a 
          href="mailto:ghanshyam2005singh@gmail.com"
          className="text-blue-600 hover:text-blue-700 font-medium text-lg"
        >
          ghanshyam2005singh@gmail.com
        </a>
      </div>
    </div>
  </section>
);

export default Contact;