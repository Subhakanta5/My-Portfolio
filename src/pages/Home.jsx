import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaReact,
  FaDownload,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Profile from "../assets/Subha.png";
import CV from "../assets/Subhakanta Nanda.pdf";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Building modern, responsive, and interactive interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
      color: "text-blue-500",
    },
    {
      icon: <FaLaptopCode />,
      title: "Backend Development",
      description:
        "Developing REST APIs, authentication systems, CRUD applications, and scalable backend services.",
      color: "text-green-400",
    },
    {
      icon: <FaReact />,
      title: "React Applications",
      description:
        "Creating reusable, component-based React applications with clean architecture and responsive design.",
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-7">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Subhakanta
                </span>
              </h1>

              <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    900,
                    "React Developer",
                    200,
                    "Web Developer",
                    900,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>

              {/* Description */}
              <p className="mt-7 text-lg leading-8 text-gray-400 max-w-2xl">
                I build modern, responsive, and user-friendly web applications
                using React, JavaScript, Tailwind CSS, Java, and modern web
                technologies.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-9">
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1"
                >
                  Hire Me
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={CV}
                  download="Subhakanta-Nanda-CV.pdf"
                  className="flex items-center gap-3 px-7 py-3.5 rounded-xl border border-gray-700 bg-slate-900/60 hover:bg-slate-800 hover:border-blue-500 text-gray-200 font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  <FaDownload />
                  Download CV
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-5 mt-10">
                <span className="text-sm text-gray-500">Follow me</span>

                <div className="h-px w-10 bg-gray-700" />

                <a
                  href="https://github.com/Subhakanta5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-500 hover:text-white hover:-translate-y-1 transition-all"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/subhakanta-nanda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-500 hover:text-blue-400 hover:-translate-y-1 transition-all"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* RIGHT - PROFILE */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl scale-110" />

                {/* Profile Container */}
                <div className="relative p-2 rounded-3xl bg-gradient-to-br from-blue-500/50 via-slate-800 to-cyan-500/30 shadow-2xl">
                  <div className="bg-slate-900 p-3 rounded-3xl">
                    <img
                      src={Profile}
                      alt="Subhakanta Nanda"
                      className="w-72 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-gray-500 mb-7">
            Technologies I Work With
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React.js",
              "Tailwind CSS",
              "Java",
              "JavaScript",
              "Spring Boot",
              "MySQL",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-gray-300 text-sm hover:border-blue-500 hover:text-blue-400 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-blue-500 uppercase tracking-[0.25em] text-sm font-semibold">
              What I Do
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              Building Digital Experiences
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              I focus on creating clean, scalable, and user-friendly
              applications that combine great design with reliable
              functionality.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`text-4xl ${skill.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>

                <p className="text-gray-400 leading-7">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-950 to-indigo-950" />

        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Let's Work Together
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-5">
            Let's Build Something
            <span className="text-blue-500"> Amazing</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-8">
            I'm available for freelance projects, internships, and full-time
            opportunities. Let's create something impactful together.
          </p>

          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-3 mt-9 px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-gray-200 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Me
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
