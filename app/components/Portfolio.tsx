"use client";

import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    // Add data attributes for content extraction
    document.querySelectorAll("section").forEach((section) => {
      section.setAttribute("data-extractable", "true");
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-black"
        data-section="hero"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-zinc-900 px-4 py-1 text-sm text-yellow-300">
            Full Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-4">
            Rohit <span className="text-yellow-400">Nayak</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-6">
            React • Next.js • Node.js • TypeScript
          </p>
          <p className="text-base md:text-lg text-zinc-400 max-w-3xl mx-auto mb-10">
            Skilled Full Stack Developer with expertise in React, Next.js,
            Node.js, and TypeScript. Delivered scalable web applications with
            40% efficiency improvements and served 3000+ users.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-yellow-400 text-yellow-300 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About / Summary Section */}
      <section
        id="about"
        className="py-20 px-6 bg-zinc-950"
        data-section="about"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            Professional Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
                Experience
              </h3>
              <p className="text-zinc-300 mb-4">
                Full Stack Developer (U5-based Startup) — Jan 2025 to Apr 2025
                (Remote)
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  • Built responsive web apps with Next.js, TypeScript, and
                  Tailwind CSS.
                </li>
                <li>
                  • Integrated Firebase, improving security and authentication.
                </li>
                <li>
                  • Implemented real-time database sync and role-based access
                  control.
                </li>
                <li>
                  • Delivered 40% efficiency improvements across workflows.
                </li>
                <li>
                  • Collaborated using Agile and Git for sprints and code
                  reviews.
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
                Education
              </h3>
              <p className="text-zinc-300">
                Maharaja Surajmal Institute of Technology — B.Tech (IT)
              </p>
              <p className="text-zinc-400 mb-4">
                2022 – 2026 • CGPA: 7.7/10 • Delhi, IN
              </p>
              <p className="text-zinc-300 font-medium mb-2">
                Relevant Coursework
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li>• Data Structures & Algorithms</li>
                <li>• Database Management Systems</li>
                <li>• Software Engineering</li>
                <li>• Object-Oriented Programming</li>
                <li>• Computer Networks & Operating Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 bg-black"
        data-section="skills"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                Programming
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• JavaScript, TypeScript</li>
                <li>• C, C++</li>
                <li>• SQL, HTML5, CSS3</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                Frontend
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• React, Next.js</li>
                <li>• Tailwind CSS, Material UI</li>
                <li>• GSAP, Responsive Design</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                Backend & Cloud
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Node.js, Express.js, REST APIs</li>
                <li>• MongoDB, PostgreSQL, Firebase</li>
                <li>• Google Cloud, Docker, Vercel</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                Dev Tools
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Git, GitHub, GitLab</li>
                <li>• Postman, VS Code</li>
                <li>• Figma, Performance Optimization</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                Additional
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• SEO, Accessibility, UI/UX</li>
                <li>• API Integration</li>
                <li>• Agile Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 bg-zinc-950"
        data-section="projects"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-yellow-300">
                LuminaUI – Component Library
              </h3>
              <p className="text-zinc-400 text-sm mb-4">Nov 2025</p>
              <p className="text-zinc-300 mb-4">
                Comprehensive component library with 65+ reusable components,
                advanced animations, and responsive design.
              </p>
              <ul className="text-zinc-400 space-y-1 mb-4">
                <li>• GSAP animation system with smoother transitions</li>
                <li>• TypeScript support and detailed documentation</li>
                <li>• High reliability and consistent UI quality</li>
              </ul>
              <div className="flex gap-3">
                <a
                  href="https://luminaui.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300"
                >
                  Live Demo
                </a>
                <span className="px-3 py-2 border border-zinc-700 text-zinc-300 rounded-lg">
                  Next.js • TypeScript • Tailwind • GSAP
                </span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-yellow-300">
                PayGo – Digital Payment Platform
              </h3>
              <p className="text-zinc-400 text-sm mb-4">Oct 2025</p>
              <p className="text-zinc-300 mb-4">
                Secure fintech app for balance updates and UPI-powered
                transactions with real-time monitoring.
              </p>
              <ul className="text-zinc-400 space-y-1 mb-4">
                <li>• 20+ concurrent users and 100+ transactions</li>
                <li>• RESTful API with Express.js and MongoDB</li>
                <li>• Real-time balance updates, deployed on Vercel</li>
              </ul>
              <div className="flex gap-3">
                <a
                  href="https://pay-go-main.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300"
                >
                  Live Demo
                </a>
                <span className="px-3 py-2 border border-zinc-700 text-zinc-300 rounded-lg">
                  React • Node.js • Express • MongoDB • JWT
                </span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-yellow-300">
                AI Content Summarizer
              </h3>
              <p className="text-zinc-400 text-sm mb-4">Jun 2025</p>
              <p className="text-zinc-300 mb-4">
                AI-powered content summarization platform with high accuracy and
                performance optimizations.
              </p>
              <ul className="text-zinc-400 space-y-1 mb-4">
                <li>• Lazy loading and caching for faster responses</li>
                <li>• PDF export and version history</li>
              </ul>
              <div className="flex gap-3">
                <a
                  href="https://text-summarizer-show.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300"
                >
                  Live Demo
                </a>
                <span className="px-3 py-2 border border-zinc-700 text-zinc-300 rounded-lg">
                  Next.js • TypeScript • Tailwind • Rapid API • PDF.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-black"
        data-section="contact"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Contact
          </h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <form className="space-y-6" id="contact-form">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-zinc-100 placeholder-zinc-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-zinc-100 placeholder-zinc-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-zinc-100 placeholder-zinc-500 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-zinc-800">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-yellow-300 text-xl mb-2">📧</div>
                  <div className="font-medium">Email</div>
                  <div className="text-zinc-400 text-sm mt-1">
                    rohitn822@gmail.com
                  </div>
                </div>
                <div>
                  <div className="text-yellow-300 text-xl mb-2">🔗</div>
                  <div className="font-medium">LinkedIn</div>
                  <a
                    href="https://linkedin.com/in/rohitnayak2312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 text-sm mt-1 block hover:text-yellow-300"
                  >
                    rohitnayak2312
                  </a>
                </div>
                <div>
                  <div className="text-yellow-300 text-xl mb-2">💻</div>
                  <div className="font-medium">GitHub</div>
                  <a
                    href="https://github.com/Rohit-2312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 text-sm mt-1 block hover:text-yellow-300"
                  >
                    Rohit-2312
                  </a>
                </div>
                <div>
                  <div className="text-yellow-300 text-xl mb-2">📍</div>
                  <div className="font-medium">Location</div>
                  <div className="text-zinc-400 text-sm mt-1">Delhi, IN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-zinc-950 text-zinc-500 text-center">
        <p>&copy; 2026 Rohit Nayak. All rights reserved.</p>
      </footer>
    </div>
  );
}
