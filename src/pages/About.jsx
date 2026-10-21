import React from "react";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaJs,
  FaGithub,
  FaAward,
  FaCode,
  FaCheckCircle,
  FaEmpire,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiSpringboot } from "react-icons/si";
import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import Profile from "../assets/Subha.png";

const About = () => {
  const skills = [
    {
      icon: <FaReact />,
      name: "React.js",
      level: "Advanced",
      color: "text-cyan-400",
    },
     {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      level: "Advanced",
      color: "text-cyan-300",
    },
    // {
    //   icon: <FaJava />,
    //   name: "Java",
    //   level: "Intermediate",
    //   color: "text-red-500",
    // },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      level: "Advanced",
      color: "text-orange-500",
    },
    {
      icon: <FaCode />,
      name: "CSS3",
      level: "Advanced",
      color: "text-blue-400",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      level: "Advanced",
      color: "text-yellow-400",
    },
    {
      icon: <SiSpringboot />,
      name: "Spring Boot",
      level: "Learning",
      color: "text-green-400",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      level: "Intermediate",
      color: "text-blue-500",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      level: "Version Control",
      color: "text-white",
    },
  ];

  const certificates = [
      {
      title: "Bachelor of Technology (B.Tech)",
      issuer: "Electrical Engineering",
      description:
        "Completed Bachelor of Technology (B.Tech) in Electrical Engineering with a strong foundation in technical knowledge, analytical thinking, problem-solving, and engineering principles.",
      icon: <FaEmpire />,
      link: "/src/assets/subu.pdf",
    },
    {
      title: "Full Stack Development With React JS",
      issuer: "QSpiders",
      description:
        "Completed Full Stack Development training covering Java, JavaScript, React.js, HTML, CSS, SQL, and web technologies.",
      icon: <FaAward />,
      link: "/src/assets/Subhapic.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* ================= ABOUT HERO ================= */}
      <section className="relative overflow-hidden pt-28 pb-24">
        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-60 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ================= IMAGE ================= */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-2xl scale-105" />

                {/* Border */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-blue-500/60" />

                {/* Image */}
                <div className="relative p-2 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl">
                  <img
                    src={Profile}
                    alt="Subhakanta Nanda"
                    className="w-72 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div>
              <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
                About Me
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-5 leading-tight">
                Passionate{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Full Stack Developer
                </span>
              </h1>

              <p className="text-gray-400 mt-7 text-lg leading-8">
                I'm a passionate developer focused on building modern,
                responsive, and user-friendly web applications. I enjoy turning
                ideas into clean and functional digital experiences.
              </p>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                My primary technologies include React.js, JavaScript, Java,
                Spring Boot, MySQL, and Tailwind CSS. I enjoy solving real-world
                problems through clean code and continuous learning.
              </p>

              {/* Info */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <CodeIcon />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Specialization</p>

                    <p className="font-medium">Full Stack Development</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <FaGithub />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Development</p>

                    <p className="font-medium">Open Source & Projects</p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 mt-9 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg shadow-blue-600/20 hover:-translate-y-1 transition-all duration-300"
              >
                Explore My Projects
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION & EXPERIENCE ================= */}
      <section className="bg-slate-900/60 border-y border-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
              My Journey
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              Education & Experience
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              My academic background, technical learning, and practical
              development experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* ================= EDUCATION ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/40 transition">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <GraduationCap size={26} className="text-blue-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Education</h2>

                  <p className="text-sm text-gray-500">
                    Academic & technical learning
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Education 1 */}
                <div className="relative pl-7 border-l border-slate-700">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500" />

                  <div className="flex items-center gap-2 text-sm text-blue-400 mb-2">
                    <CalendarDays size={15} />
                    2020 - 2023
                  </div>

                  <h3 className="text-xl font-bold">Bachelor Degree</h3>

                  <p className="text-gray-400 mt-2">Electrical Engineering</p>
                </div>

                {/* Education 2 */}
                <div className="relative pl-7 border-l border-slate-700">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-400" />

                  <p className="text-sm text-cyan-400 mb-2">
                    Professional Training
                  </p>

                  <h3 className="text-xl font-bold">Full Stack Development</h3>

                  <p className="text-gray-400 mt-2">
                    Java, JavaScript, React, HTML, CSS, Tailwind CSS, and Web
                    Technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= EXPERIENCE ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/40 transition">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <BriefcaseBusiness size={25} className="text-green-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Experience</h2>

                  <p className="text-sm text-gray-500">
                    Development & practical work
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Experience 1 */}
                <div className="relative pl-7 border-l border-slate-700">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-green-400" />

                  <p className="text-sm text-green-400 mb-2">
                    Frontend Development
                  </p>

                  <h3 className="text-xl font-bold">Frontend Developer</h3>

                  <p className="text-gray-400 mt-3 leading-7">
                    Built responsive websites, reusable components, dashboards,
                    and portfolio applications using React.js and Tailwind CSS.
                  </p>
                </div>

                {/* Experience 2 */}
                <div className="relative pl-7 border-l border-slate-700">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-purple-400" />

                  <p className="text-sm text-purple-400 mb-2">
                    Personal Project
                  </p>

                  <h3 className="text-xl font-bold">
                    React Task Management Dashboard
                  </h3>

                  <p className="text-gray-400 mt-3 leading-7">
                    Developed authentication, protected routes, login/logout
                    functionality, API integration using Axios, JSON Server,
                    React Router DOM, and responsive UI using Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section className="bg-slate-900 border-y border-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
              Certifications
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              My Certificates
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Professional certifications and technical training that support my
              development journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="group bg-slate-900 border border-slate-800
          rounded-3xl p-7
          hover:border-blue-500/50
          hover:-translate-y-2
          transition-all duration-300 hover:bg-slate-950"
              >
                <div className="flex items-start gap-5">
                  {/* Certificate Icon */}
                  <div
                    className="w-14 h-14 shrink-0 rounded-2xl
              bg-blue-500/10
              border border-blue-500/20
              flex items-center justify-center
              text-blue-400 text-2xl
              group-hover:scale-110
              transition-transform duration-300"
                  >
                    {certificate.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-sm text-blue-400 font-medium mb-2">
                      {certificate.issuer}
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      {certificate.title}
                    </h3>

                    <p className="text-gray-400 mt-3 leading-7">
                      {certificate.description}
                    </p>

                    <div className="flex items-center gap-2 mt-5 text-sm text-green-400">
                      <FaCheckCircle />
                      <span>Completed</span>
                    </div>

                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 px-5 py-2.5
                      rounded-xl bg-blue-600 hover:bg-blue-500
                      text-white text-sm font-semibold
                      shadow-lg shadow-blue-600/20
                      hover:-translate-y-1
                      transition-all duration-300"
                    >
                      <FaAward />
                      Certificate
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
              Technical Skills
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              Technologies I Use
            </h2>

            <p className="text-gray-400 mt-5">
              Tools and technologies I use to design, develop, and build modern
              applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`text-5xl ${skill.color} flex justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>

                <h3 className="font-semibold text-lg mt-5">{skill.name}</h3>

                <p className="text-xs text-gray-500 mt-2">{skill.level}</p>
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
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center mb-7">
            <FaAward className="text-4xl text-blue-400" />
          </div>

          <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Continuous Growth
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mt-5">
            Always Learning.
            <span className="text-blue-500"> Always Growing.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-8 max-w-2xl mx-auto">
            My goal is to continuously improve my technical skills, build
            impactful applications, and contribute to innovative software
            solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

/* Small reusable icon component */
const CodeIcon = () => <FaCode className="text-blue-400" size={18} />;

export default About;
