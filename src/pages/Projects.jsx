import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Task Management Dashboard",
      category: "Web Application",
      image:
        "/src/assets/dashboard.png",
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
        "/src/assets/spacenight.png",
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
        "/src/assets/ecommerce.png",
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
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 lg:pb-24">

        {/* Background Glow */}
        <div
          className="
            absolute
            -top-32
            sm:-top-40
            left-1/2
            -translate-x-1/2
            w-[280px]
            h-[280px]
            sm:w-[400px]
            sm:h-[400px]
            lg:w-[550px]
            lg:h-[550px]
            bg-blue-600/10
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            text-center
          "
        >

          <p
            className="
              text-blue-400
              uppercase
              tracking-[0.2em]
              sm:tracking-[0.3em]
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            My Work
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              leading-tight
              mt-4
              sm:mt-5
            "
          >
            Featured{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-blue-400
                to-cyan-400
              "
            >
              Projects
            </span>
          </h1>

          <p
            className="
              max-w-3xl
              mx-auto
              mt-5
              sm:mt-7
              text-sm
              sm:text-base
              lg:text-lg
              text-gray-400
              leading-7
              sm:leading-8
            "
          >
            A collection of projects I've built using modern web
            technologies. Each project represents my approach to
            solving problems, designing interfaces, and building
            reliable applications.
          </p>
        </div>
      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}
      <section
        className="
          relative
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          pb-20
          sm:pb-28
          lg:pb-32
        "
      >

        {/* Section Header */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-5
            sm:gap-6
            mb-10
            sm:mb-14
          "
        >

          <div>

            <p
              className="
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.2em]
                sm:tracking-[0.3em]
                text-blue-400
                font-semibold
              "
            >
              Selected Work
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                mt-3
                sm:mt-4
              "
            >
              Projects I've Built
            </h2>

            <p
              className="
                text-sm
                sm:text-base
                text-gray-400
                mt-4
                sm:mt-5
                max-w-2xl
                leading-7
              "
            >
              A selection of projects showcasing my experience in
              frontend development, responsive design, and modern
              web technologies.
            </p>

          </div>

          <div className="hidden md:block shrink-0">
            <span className="text-sm text-gray-500">
              03 Projects
            </span>
          </div>

        </div>


        {/* Project Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-5
            sm:gap-7
            lg:gap-8
          "
        >

          {projects.map((project, index) => (

            <article
              key={project.title}
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                sm:rounded-[24px]
                lg:rounded-[28px]
                bg-slate-900/80
                border
                border-slate-800
                backdrop-blur-xl
                transition-all
                duration-500
                md:hover:-translate-y-2
                md:hover:border-slate-600
                md:hover:shadow-2xl
                md:hover:shadow-blue-950/40
              "
            >

              {/* ================= IMAGE ================= */}
              <div
                className="
                  relative
                  h-52
                  sm:h-60
                  md:h-56
                  lg:h-64
                  overflow-hidden
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-contain
                    transition-transform
                    duration-700
                    ease-out
                    md:group-hover:scale-105
                  "
                />

                {/* Image Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/30
                    to-transparent
                  "
                />

                {/* Hover Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-blue-500/0
                    md:group-hover:bg-blue-500/5
                    transition-colors
                    duration-500
                  "
                />

                {/* Project Number */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5">

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      sm:w-11
                      sm:h-11
                      rounded-full
                      bg-slate-950/75
                      backdrop-blur-md
                      border
                      border-white/10
                      text-xs
                      sm:text-sm
                      font-semibold
                      text-gray-300
                      md:group-hover:text-blue-400
                      md:group-hover:border-blue-400/30
                      transition-all
                      duration-300
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* Category */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    sm:bottom-5
                    sm:left-5
                    right-4
                    sm:right-auto
                  "
                >

                  <span
                    className="
                      inline-flex
                      max-w-full
                      px-3
                      sm:px-4
                      py-1.5
                      sm:py-2
                      rounded-full
                      bg-slate-950/75
                      backdrop-blur-md
                      border
                      border-slate-700
                      text-[10px]
                      sm:text-xs
                      font-medium
                      text-gray-300
                      truncate
                      md:group-hover:border-blue-500/40
                      md:group-hover:text-blue-300
                      transition-all
                      duration-300
                    "
                  >
                    {project.category}
                  </span>

                </div>

              </div>


              {/* ================= CONTENT ================= */}
              <div
                className="
                  flex
                  flex-col
                  flex-1
                  p-5
                  sm:p-6
                  lg:p-7
                "
              >

                {/* Title */}
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >

                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      font-bold
                      tracking-tight
                      text-white
                      leading-tight
                      md:group-hover:text-blue-400
                      transition-colors
                      duration-300
                    "
                  >
                    {project.title}
                  </h3>

                  <FaExternalLinkAlt
                    size={12}
                    className="
                      mt-1
                      sm:mt-2
                      shrink-0
                      text-gray-600
                      md:group-hover:text-blue-400
                      md:group-hover:-translate-y-1
                      md:group-hover:translate-x-1
                      transition-all
                      duration-300
                    "
                  />

                </div>


                {/* Description */}
                <p
                  className="
                    mt-3
                    sm:mt-4
                    text-sm
                    text-gray-400
                    leading-6
                    sm:leading-7
                  "
                >
                  {project.description}
                </p>


                {/* Divider */}
                <div className="my-5 sm:my-6 h-px bg-slate-800" />


                {/* Technologies */}
                <div>

                  <p
                    className="
                      text-[10px]
                      sm:text-xs
                      uppercase
                      tracking-wider
                      text-gray-600
                      font-semibold
                      mb-3
                    "
                  >
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech.name}
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          sm:gap-2
                          px-2.5
                          sm:px-3
                          py-1.5
                          sm:py-2
                          rounded-lg
                          bg-slate-800/70
                          border
                          border-slate-700
                          text-[10px]
                          sm:text-xs
                          text-gray-300
                          transition-all
                          duration-300
                          md:hover:bg-slate-700
                          md:hover:border-slate-600
                          md:hover:-translate-y-0.5
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
                <div
                  className="
                    mt-auto
                    pt-6
                    sm:pt-7
                    grid
                    grid-cols-2
                    gap-2.5
                    sm:gap-3
                  "
                >

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-1.5
                      sm:gap-2
                      px-3
                      sm:px-5
                      py-2.5
                      sm:py-3
                      rounded-xl
                      bg-blue-600
                      hover:bg-blue-500
                      text-white
                      text-xs
                      sm:text-sm
                      font-semibold
                      shadow-lg
                      shadow-blue-600/10
                      hover:shadow-blue-500/20
                      transition-all
                      duration-300
                    "
                  >
                    <FaExternalLinkAlt size={10} />
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
                      gap-1.5
                      sm:gap-2
                      px-3
                      sm:px-5
                      py-2.5
                      sm:py-3
                      rounded-xl
                      bg-slate-800
                      border
                      border-slate-700
                      hover:border-slate-500
                      hover:bg-slate-700
                      text-gray-200
                      text-xs
                      sm:text-sm
                      font-semibold
                      transition-all
                      duration-300
                    "
                  >
                    <FaGithub size={14} />
                    Code
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}
      <section
        className="
          border-y
          border-slate-800
          bg-slate-900/60
          py-16
          sm:py-20
          lg:py-24
        "
      >

        <div
          className="
            max-w-6xl
            mx-auto
            px-5
            sm:px-8
          "
        >

          <div className="text-center mb-10 sm:mb-14">

            <p
              className="
                text-blue-400
                uppercase
                tracking-[0.2em]
                sm:tracking-[0.25em]
                text-xs
                sm:text-sm
                font-semibold
              "
            >
              Tech Stack
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                mt-3
                sm:mt-4
              "
            >
              Technologies I Use
            </h2>

            <p
              className="
                text-sm
                sm:text-base
                text-gray-400
                mt-4
                sm:mt-5
                max-w-2xl
                mx-auto
              "
            >
              Tools and technologies I use to design and develop
              modern applications.
            </p>

          </div>


          {/* Tech Grid */}
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-2
              md:grid-cols-4
              gap-3
              sm:gap-5
            "
          >

            {/* React */}
            <div
              className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                sm:rounded-2xl
                p-5
                sm:p-7
                text-center
                md:hover:border-cyan-500/50
                md:hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <FaReact
                className="
                  text-4xl
                  sm:text-5xl
                  text-cyan-400
                  mx-auto
                  md:group-hover:scale-110
                  transition
                "
              />

              <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold">
                React.js
              </h3>
            </div>


            {/* JavaScript */}
            <div
              className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                sm:rounded-2xl
                p-5
                sm:p-7
                text-center
                md:hover:border-yellow-500/50
                md:hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <FaJs
                className="
                  text-4xl
                  sm:text-5xl
                  text-yellow-400
                  mx-auto
                  md:group-hover:scale-110
                  transition
                "
              />

              <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold">
                JavaScript
              </h3>
            </div>


            {/* HTML */}
            <div
              className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                sm:rounded-2xl
                p-5
                sm:p-7
                text-center
                md:hover:border-orange-500/50
                md:hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <FaHtml5
                className="
                  text-4xl
                  sm:text-5xl
                  text-orange-500
                  mx-auto
                  md:group-hover:scale-110
                  transition
                "
              />

              <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold">
                HTML5
              </h3>
            </div>


            {/* Tailwind */}
            <div
              className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                sm:rounded-2xl
                p-5
                sm:p-7
                text-center
                md:hover:border-cyan-500/50
                md:hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <SiTailwindcss
                className="
                  text-4xl
                  sm:text-5xl
                  text-cyan-300
                  mx-auto
                  md:group-hover:scale-110
                  transition
                "
              />

              <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold">
                Tailwind CSS
              </h3>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section
        className="
          relative
          overflow-hidden
          py-20
          sm:py-24
          lg:py-28
        "
      >

        {/* Background */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-blue-950
            via-slate-950
            to-indigo-950
          "
        />

        {/* Glow */}
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-64
            h-64
            sm:w-80
            sm:h-80
            lg:w-96
            lg:h-96
            bg-blue-600/20
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            relative
            max-w-4xl
            mx-auto
            text-center
            px-5
            sm:px-8
          "
        >

          <p
            className="
              text-blue-400
              uppercase
              tracking-[0.2em]
              sm:tracking-[0.25em]
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            Let's Work Together
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-6xl
              font-bold
              mt-4
              sm:mt-5
              leading-tight
            "
          >
            Have a Project in Mind?
          </h2>

          <p
            className="
              mt-5
              sm:mt-6
              text-sm
              sm:text-base
              lg:text-lg
              text-gray-400
              leading-7
              sm:leading-8
              max-w-2xl
              mx-auto
            "
          >
            I'm always interested in building new products, solving
            challenging problems, and collaborating on exciting ideas.
          </p>

          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              sm:gap-3
              mt-7
              sm:mt-9
              px-6
              sm:px-8
              py-3
              sm:py-4
              rounded-xl
              bg-blue-600
              hover:bg-blue-500
              font-semibold
              text-sm
              sm:text-base
              shadow-lg
              shadow-blue-600/20
              md:hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            Let's Connect
            <FaExternalLinkAlt size={12} />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Projects;