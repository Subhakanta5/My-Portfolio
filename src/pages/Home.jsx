import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaReact,
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import Profile from "../assets/subhaprofile.png";
import CV from "../assets/Subhakanta Nanda.pdf";

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
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 sm:-top-40 sm:-left-40 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-3xl" />

        <div className="absolute top-40 -right-32 sm:top-40 sm:-right-40 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-600/20 rounded-full blur-3xl" />

        <div className="
          relative
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          pt-24
          sm:pt-28
          lg:pt-32
          pb-16
          sm:pb-20
          lg:pb-24
        ">

          <div className="
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            gap-12
            lg:gap-16
          ">

            {/* ================= LEFT ================= */}
            <div className="text-center lg:text-left">

              {/* Badge */}
              <div className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-blue-500/10
                border
                border-blue-500/20
                text-blue-400
                text-xs
                sm:text-sm
                font-medium
                mb-6
                sm:mb-7
              ">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>


              {/* Heading */}
              <h1 className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                leading-tight
                tracking-tight
              ">
                Hi, I'm{" "}
                <span className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-blue-400
                  to-cyan-400
                ">
                  Subhakanta
                </span>
              </h1>


              {/* Animated Role */}
              <div className="
                mt-5
                min-h-[42px]
                sm:min-h-[48px]
                lg:min-h-[52px]
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                text-gray-300
              ">

                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1500,
                    "React Developer",
                    1500,
                    "Web Developer",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />

              </div>


              {/* Description */}
              <p className="
                mt-6
                sm:mt-7
                text-base
                sm:text-lg
                leading-7
                sm:leading-8
                text-gray-400
                max-w-2xl
                mx-auto
                lg:mx-0
              ">
                I build modern, responsive, and user-friendly web applications
                using React, JavaScript, Tailwind CSS, Java, and modern web
                technologies.
              </p>


              {/* ================= BUTTONS ================= */}
              <div className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                lg:justify-start
                gap-3
                sm:gap-4
                mt-8
                sm:mt-9
              ">

                {/* Hire Me */}
                <Link
                  to="/contact"
                  className="
                    group
                    w-full
                    sm:w-auto
                    inline-flex
                    justify-center
                    items-center
                    gap-3
                    px-7
                    py-3.5
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    font-semibold
                    shadow-lg
                    shadow-blue-600/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Hire Me

                  <FaArrowRight
                    className="
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />

                </Link>


                {/* Download CV */}
                <a
                  href={CV}
                  download="Subhakanta-Nanda-CV.pdf"
                  className="
                    w-full
                    sm:w-auto
                    inline-flex
                    justify-center
                    items-center
                    gap-3
                    px-7
                    py-3.5
                    rounded-xl
                    border
                    border-gray-700
                    bg-slate-900/60
                    hover:bg-slate-800
                    hover:border-blue-500
                    text-gray-200
                    font-semibold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <FaDownload />
                  Download CV
                </a>

              </div>


              {/* ================= SOCIAL ================= */}
              <div className="
                flex
                items-center
                justify-center
                lg:justify-start
                gap-5
                mt-9
                sm:mt-10
              ">

                <span className="text-sm text-gray-500">
                  Follow me
                </span>

                <div className="h-px w-8 sm:w-10 bg-gray-700" />

                <a
                  href="https://github.com/Subhakanta5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    text-2xl
                    text-gray-500
                    hover:text-white
                    hover:-translate-y-1
                    transition-all
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/subhakanta-nanda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    text-2xl
                    text-gray-500
                    hover:text-blue-400
                    hover:-translate-y-1
                    transition-all
                  "
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>


            {/* ================= RIGHT - PROFILE ================= */}
            <div className="
              flex
              justify-center
              lg:justify-end
              order-first
              lg:order-last
            ">

              <div className="relative">

                {/* Glow */}
                <div className="
                  absolute
                  inset-0
                  bg-blue-600/20
                  rounded-full
                  blur-3xl
                  scale-110
                " />


                {/* Profile Container */}
                <div className="
                  relative
                  p-1.5
                  sm:p-2
                  rounded-3xl
                  bg-gradient-to-br
                  from-blue-500/50
                  via-slate-800
                  to-cyan-500/30
                  shadow-2xl
                ">

                  <div className="
                    bg-slate-900
                    p-2
                    sm:p-3
                    rounded-3xl
                  ">

                    <img
                      src={Profile}
                      alt="Subhakanta Nanda"
                      className="
                        w-56
                        h-64
                        xs:w-64
                        xs:h-72
                        sm:w-72
                        sm:h-80
                        md:w-80
                        md:h-96
                        object-cover
                        rounded-2xl
                      "
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TECH STACK ================= */}
      <section className="
        border-y
        border-slate-800
        bg-slate-900/50
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          py-8
          sm:py-10
        ">

          <p className="
            text-center
            text-xs
            sm:text-sm
            uppercase
            tracking-[0.25em]
            sm:tracking-[0.3em]
            text-gray-500
            mb-6
            sm:mb-7
          ">
            Technologies I Work With
          </p>


          <div className="
            flex
            flex-wrap
            justify-center
            gap-2.5
            sm:gap-3
            lg:gap-4
          ">

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
                className="
                  px-3
                  sm:px-5
                  py-2
                  sm:py-2.5
                  rounded-full
                  bg-slate-800
                  border
                  border-slate-700
                  text-gray-300
                  text-xs
                  sm:text-sm
                  hover:border-blue-500
                  hover:text-blue-400
                  transition
                "
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

      </section>


      {/* ================= WHAT I DO ================= */}
      <section className="py-16 sm:py-20 lg:py-24">

        <div className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
        ">

          {/* Section Heading */}
          <div className="
            text-center
            max-w-2xl
            mx-auto
            mb-12
            sm:mb-14
            lg:mb-16
          ">

            <p className="
              text-blue-500
              uppercase
              tracking-[0.25em]
              text-xs
              sm:text-sm
              font-semibold
            ">
              What I Do
            </p>

            <h2 className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              mt-4
            ">
              Building Digital Experiences
            </h2>

            <p className="
              text-gray-400
              mt-5
              leading-7
              text-sm
              sm:text-base
            ">
              I focus on creating clean, scalable, and user-friendly
              applications that combine great design with reliable
              functionality.
            </p>

          </div>


          {/* Cards */}
          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-7
          ">

            {skills.map((skill) => (

              <div
                key={skill.title}
                className="
                  group
                  p-6
                  sm:p-7
                  lg:p-8
                  rounded-2xl
                  bg-slate-900
                  border
                  border-slate-800
                  hover:border-blue-500/50
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div
                  className={`
                    text-4xl
                    ${skill.color}
                    mb-5
                    sm:mb-6
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  `}
                >
                  {skill.icon}
                </div>

                <h3 className="
                  text-xl
                  font-bold
                  mb-3
                  sm:mb-4
                ">
                  {skill.title}
                </h3>

                <p className="
                  text-gray-400
                  leading-7
                  text-sm
                  sm:text-base
                ">
                  {skill.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
      ">

        <div className="
          absolute
          inset-0
          bg-gradient-to-r
          from-blue-950
          via-slate-950
          to-indigo-950
        " />

        <div className="
          absolute
          -top-20
          left-1/2
          -translate-x-1/2
          w-72
          h-72
          sm:w-96
          sm:h-96
          bg-blue-600/20
          rounded-full
          blur-3xl
        " />


        <div className="
          relative
          max-w-4xl
          mx-auto
          text-center
          px-5
          sm:px-6
        ">

          <p className="
            text-blue-400
            uppercase
            tracking-[0.2em]
            sm:tracking-[0.25em]
            text-xs
            sm:text-sm
            font-semibold
          ">
            Let's Work Together
          </p>


          <h2 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            mt-5
            leading-tight
          ">
            Let's Build Something
            <span className="text-blue-500"> Amazing</span>
          </h2>


          <p className="
            mt-5
            sm:mt-6
            text-base
            sm:text-lg
            text-gray-400
            max-w-2xl
            mx-auto
            leading-7
            sm:leading-8
          ">
            I'm available for freelance projects, internships, and full-time
            opportunities. Let's create something impactful together.
          </p>


          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              mt-8
              sm:mt-9
              px-7
              sm:px-8
              py-3.5
              sm:py-4
              rounded-xl
              bg-white
              text-slate-900
              font-bold
              text-sm
              sm:text-base
              hover:bg-gray-200
              hover:-translate-y-1
              transition-all
              duration-300
            "
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