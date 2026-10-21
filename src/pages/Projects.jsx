import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaHtml5,
  FaJs,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
  {
    title: "Task Management Dashboard",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description:
      "A modern task management platform featuring authentication, protected routes, profile management, session handling, and a responsive dashboard experience.",
    technologies: [
      {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-cyan-300",
      },
      {
        name: "Axios",
        icon: <FaJs />,
        color: "text-yellow-400",
      },
    ],
    live: "https://taskdashboard-0mvq.onrender.com",
    github: "https://github.com/Subhakanta5",
  },

  {
    title: "Space Night",
    category: "Interactive Web Experience",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "An interactive Solar System experience built with React and Tailwind CSS, combining immersive visuals, animations, planet information, and responsive design.",
    technologies: [
      {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-cyan-300",
      },
    ],
    live: "https://spacenight.netlify.app/",
    github: "https://github.com/Subhakanta5",
  },

  {
    title: "E-Commerce Website",
    category: "E-Commerce Application",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description:
      "A responsive e-commerce platform with product browsing, search and filtering, shopping cart management, and a streamlined checkout experience.",
    technologies: [
      {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-cyan-300",
      },
    ],
    live: "https://shopshine-0511.web.app/",
    github: "https://github.com/Subhakanta5",
  },
];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-20">

        {/* Background Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold">
            My Work
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mt-5">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Projects
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-7 text-gray-400 text-lg leading-8">
            A collection of projects I've built using modern web technologies.
            Each project represents my approach to solving problems,
            designing interfaces, and building reliable applications.
          </p>

        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      {/* ================= PROJECTS ================= */}
<section className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-32">

  {/* Section Header */}
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold">
        Selected Work
      </p>

      <h2 className="text-4xl sm:text-5xl font-bold mt-4">
        Projects I've Built
      </h2>

      <p className="text-gray-400 mt-5 max-w-2xl leading-7">
        A selection of projects showcasing my experience in frontend
        development, responsive design, and modern web technologies.
      </p>
    </div>

    <div className="hidden md:block">
      <span className="text-sm text-gray-500">
        03 Projects
      </span>
    </div>

  </div>


  {/* Project Grid */}
  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

    {projects.map((project, index) => (

      <article
        key={project.title}
        className="
          group relative
          flex flex-col
          overflow-hidden
          rounded-[28px]
          bg-slate-900/80
          border border-slate-800
          backdrop-blur-xl
          transition-all duration-500
          hover:-translate-y-2
          hover:border-slate-600
          hover:shadow-2xl
          hover:shadow-blue-950/40
        "
      >

        {/* ================= TOP IMAGE ================= */}
        <div className="relative h-64 overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            className="
              w-full h-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          {/* Image Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-slate-950
              via-slate-950/20
              to-transparent
            "
          />

          {/* Subtle Hover Overlay */}
          <div
            className="
              absolute inset-0
              bg-blue-500/0
              group-hover:bg-blue-500/5
              transition-colors duration-500
            "
          />


          {/* Project Number */}
          <div className="absolute top-5 left-5">

            <span
              className="
                flex items-center justify-center
                w-11 h-11
                rounded-full
                bg-slate-950/70
                backdrop-blur-md
                border border-white/10
                text-sm
                font-semibold
                text-gray-300
                group-hover:text-blue-400
                group-hover:border-blue-400/30
                transition-all duration-300
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

          </div>


          {/* Category */}
          <div className="absolute bottom-5 left-5">

            <span
              className="
                inline-flex
                px-4 py-2
                rounded-full
                bg-slate-950/75
                backdrop-blur-md
                border border-slate-700
                text-xs
                font-medium
                text-gray-300
                transition-all duration-300
                group-hover:border-blue-500/40
                group-hover:text-blue-300
              "
            >
              {project.category}
            </span>

          </div>

        </div>


        {/* ================= CONTENT ================= */}
        <div className="flex flex-col flex-1 p-7">

          {/* Project Title */}
          <div className="flex items-start justify-between gap-4">

            <h3
              className="
                text-2xl
                font-bold
                tracking-tight
                text-white
                transition-colors duration-300
                group-hover:text-blue-400
              "
            >
              {project.title}
            </h3>

            <FaExternalLinkAlt
              size={14}
              className="
                mt-2
                shrink-0
                text-gray-600
                transition-all duration-300
                group-hover:text-blue-400
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />

          </div>


          {/* Description */}
          <p className="mt-4 text-sm text-gray-400 leading-7">
            {project.description}
          </p>


          {/* Divider */}
          <div className="my-6 h-px bg-slate-800" />


          {/* Technologies */}
          <div>

            <p className="text-xs uppercase tracking-wider text-gray-600 font-semibold mb-3">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">

              {project.technologies.map((tech) => (

                <span
                  key={tech.name}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-2
                    rounded-lg
                    bg-slate-800/70
                    border border-slate-700
                    text-xs
                    text-gray-300
                    transition-all duration-300
                    hover:bg-slate-700
                    hover:border-slate-600
                    hover:-translate-y-0.5
                  "
                >

                  <span className={tech.color}>
                    {tech.icon}
                  </span>

                  {tech.name}

                </span>

              ))}

            </div>

          </div>


          {/* ================= ACTIONS ================= */}
          <div className="mt-auto pt-7 flex items-center gap-3">

            {/* Live Demo */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                text-white
                text-sm
                font-semibold
                shadow-lg
                shadow-blue-600/10
                hover:shadow-blue-500/20
                transition-all duration-300
              "
            >
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>


            {/* GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-slate-800
                border border-slate-700
                hover:border-slate-500
                hover:bg-slate-700
                text-gray-200
                text-sm
                font-semibold
                transition-all duration-300
              "
            >
              <FaGithub size={15} />
              Code
            </a>

          </div>

        </div>

      </article>

    ))}

  </div>

</section>


      {/* ================= TECHNOLOGIES ================= */}
      <section className="border-y border-slate-800 bg-slate-900/60 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
              Tech Stack
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              Technologies I Use
            </h2>

            <p className="text-gray-400 mt-5">
              Tools and technologies I use to design and develop modern
              applications.
            </p>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {/* React */}
            <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 text-center hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300">
              <FaReact className="text-5xl text-cyan-400 mx-auto group-hover:scale-110 transition" />
              <h3 className="mt-4 font-semibold">React.js</h3>
            </div>

            {/* JavaScript */}
            <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 text-center hover:border-yellow-500/50 hover:-translate-y-2 transition-all duration-300">
              <FaJs className="text-5xl text-yellow-400 mx-auto group-hover:scale-110 transition" />
              <h3 className="mt-4 font-semibold">JavaScript</h3>
            </div>

            {/* HTML */}
            <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 text-center hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-300">
              <FaHtml5 className="text-5xl text-orange-500 mx-auto group-hover:scale-110 transition" />
              <h3 className="mt-4 font-semibold">HTML5</h3>
            </div>

            {/* Tailwind */}
            <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 text-center hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300">
              <SiTailwindcss className="text-5xl text-cyan-300 mx-auto group-hover:scale-110 transition" />
              <h3 className="mt-4 font-semibold">Tailwind CSS</h3>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-950 to-indigo-950" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center px-6">

          <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Let's Work Together
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-5">
            Have a Project in Mind?
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-8 max-w-2xl mx-auto">
            I'm always interested in building new products, solving
            challenging problems, and collaborating on exciting ideas.
          </p>

          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-3 mt-9 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg shadow-blue-600/20 hover:-translate-y-1 transition-all duration-300"
          >
            Let's Connect
            <FaExternalLinkAlt size={14} />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Projects;
