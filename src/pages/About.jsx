import React from "react";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaGithub,
  FaAward,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

import { SiTailwindcss, SiMysql, SiSpringboot } from "react-icons/si";

import {
  BriefcaseBusiness,
  GraduationCap,
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
      icon: <GraduationCap />,
      link: "/certificate/subu.pdf",
    },
    {
      title: "Full Stack Development With React JS",
      issuer: "QSpiders",
      description:
        "Completed Full Stack Development training covering Java, JavaScript, React.js, HTML, CSS, SQL, and web technologies.",
      icon: <FaAward />,
      link: "/certificate/Subhapic.jpeg",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}
      <section
        className="
          relative
          overflow-hidden
          pt-28
          sm:pt-32
          lg:pt-36
          pb-16
          sm:pb-20
          lg:pb-24
        "
      >

        {/* Background Glows */}
        <div
          className="
            absolute
            -top-32
            -left-32
            sm:-top-40
            sm:-left-40
            w-72
            h-72
            sm:w-96
            sm:h-96
            bg-blue-600/20
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            top-80
            -right-32
            sm:top-60
            sm:-right-40
            w-72
            h-72
            sm:w-96
            sm:h-96
            bg-cyan-600/10
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
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-12
              sm:gap-14
              lg:gap-16
              items-center
            "
          >

            {/* =================================================
                PROFILE IMAGE
            ================================================= */}
            <div
              className="
                flex
                justify-center
                lg:justify-start
                order-1
                lg:order-1
              "
            >

              <div className="relative">

                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-blue-600/20
                    rounded-3xl
                    blur-2xl
                    scale-105
                  "
                />

                {/* Decorative Border */}
                <div
                  className="
                    absolute
                    -top-2
                    -left-2
                    sm:-top-4
                    sm:-left-4
                    w-full
                    h-full
                    rounded-3xl
                    border
                    border-blue-500/50
                  "
                />

                {/* Image Container */}
                <div
                  className="
                    relative
                    p-1.5
                    sm:p-2
                    rounded-3xl
                    bg-slate-900
                    border
                    border-slate-700
                    shadow-2xl
                  "
                >

                  <img
                    src={Profile}
                    alt="Subhakanta Nanda"
                    className="
                      w-56
                      h-64
                      sm:w-72
                      sm:h-80
                      md:w-80
                      md:h-96
                      lg:w-80
                      lg:h-96
                      object-cover
                      rounded-2xl
                    "
                  />

                </div>

              </div>

            </div>


            {/* =================================================
                HERO CONTENT
            ================================================= */}
            <div
              className="
                order-2
                lg:order-2
                text-center
                lg:text-left
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
                About Me
              </p>

              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-extrabold
                  mt-4
                  sm:mt-5
                  leading-tight
                "
              >
                Passionate{" "}

                <span
                  className="
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-blue-400
                    to-cyan-400
                  "
                >
                  Full Stack Developer
                </span>
              </h1>

              <p
                className="
                  text-gray-400
                  mt-5
                  sm:mt-7
                  text-sm
                  sm:text-base
                  lg:text-lg
                  leading-7
                  sm:leading-8
                "
              >
                I'm a passionate developer focused on building modern,
                responsive, and user-friendly web applications. I enjoy
                turning ideas into clean and functional digital experiences.
              </p>

              <p
                className="
                  text-gray-400
                  mt-4
                  sm:mt-5
                  text-sm
                  sm:text-base
                  lg:text-lg
                  leading-7
                  sm:leading-8
                "
              >
                My primary technologies include React.js, JavaScript,
                Java, Spring Boot, MySQL, and Tailwind CSS. I enjoy
                solving real-world problems through clean code and
                continuous learning.
              </p>


              {/* Info Cards */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-3
                  sm:gap-4
                  mt-7
                  sm:mt-8
                  text-left
                "
              >

                {/* Specialization */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    p-3
                    sm:p-0
                    rounded-xl
                    sm:rounded-none
                    bg-slate-900/60
                    sm:bg-transparent
                    border
                    border-slate-800
                    sm:border-0
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      shrink-0
                      rounded-lg
                      bg-slate-900
                      border
                      border-slate-800
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaCode className="text-blue-400" size={18} />
                  </div>

                  <div>
                    <p className="text-[11px] sm:text-xs text-gray-500">
                      Specialization
                    </p>

                    <p className="font-medium text-sm sm:text-base">
                      Full Stack Development
                    </p>
                  </div>

                </div>


                {/* Development */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    p-3
                    sm:p-0
                    rounded-xl
                    sm:rounded-none
                    bg-slate-900/60
                    sm:bg-transparent
                    border
                    border-slate-800
                    sm:border-0
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      shrink-0
                      rounded-lg
                      bg-slate-900
                      border
                      border-slate-800
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaGithub className="text-white" />
                  </div>

                  <div>
                    <p className="text-[11px] sm:text-xs text-gray-500">
                      Development
                    </p>

                    <p className="font-medium text-sm sm:text-base">
                      Open Source & Projects
                    </p>
                  </div>

                </div>

              </div>


              {/* CTA */}
              <div className="mt-7 sm:mt-9">

                <Link
                  to="/projects"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="
                    inline-flex
                    w-full
                    sm:w-auto
                    items-center
                    justify-center
                    gap-3
                    px-6
                    sm:px-7
                    py-3
                    sm:py-3.5
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
                  Explore My Projects
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          EDUCATION & EXPERIENCE
      ===================================================== */}
      <section
        className="
          bg-slate-900/60
          border-y
          border-slate-800
          py-16
          sm:py-20
          lg:py-24
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-10
          "
        >

          {/* Section Header */}
          <div
            className="
              text-center
              max-w-2xl
              mx-auto
              mb-10
              sm:mb-14
              lg:mb-16
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
              My Journey
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
              Education & Experience
            </h2>

            <p
              className="
                text-sm
                sm:text-base
                text-gray-400
                mt-4
                sm:mt-5
                leading-7
              "
            >
              My academic background, technical learning, and practical
              development experience.
            </p>

          </div>


          {/* Cards */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-5
              sm:gap-7
              lg:gap-8
            "
          >

            {/* =================================================
                EDUCATION
            ================================================= */}
            <div
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                sm:rounded-3xl
                p-5
                sm:p-7
                lg:p-8
                md:hover:border-blue-500/40
                transition
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                  sm:gap-4
                  mb-8
                  sm:mb-10
                "
              >

                <div
                  className="
                    w-11
                    h-11
                    sm:w-12
                    sm:h-12
                    shrink-0
                    rounded-xl
                    bg-blue-500/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <GraduationCap
                    size={25}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Education
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Academic & technical learning
                  </p>
                </div>

              </div>


              <div className="space-y-7 sm:space-y-8">

                {/* Education 1 */}
                <div
                  className="
                    relative
                    pl-6
                    sm:pl-7
                    border-l
                    border-slate-700
                  "
                >

                  <div
                    className="
                      absolute
                      -left-[5px]
                      top-1
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-blue-500
                    "
                  />

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      sm:text-sm
                      text-blue-400
                      mb-2
                    "
                  >
                    <CalendarDays size={14} />
                    2020 - 2023
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold">
                    Bachelor Degree
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 mt-2">
                    Electrical Engineering
                  </p>

                </div>


                {/* Education 2 */}
                <div
                  className="
                    relative
                    pl-6
                    sm:pl-7
                    border-l
                    border-slate-700
                  "
                >

                  <div
                    className="
                      absolute
                      -left-[5px]
                      top-1
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-cyan-400
                    "
                  />

                  <p className="text-xs sm:text-sm text-cyan-400 mb-2">
                    Professional Training
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold">
                    Full Stack Development
                  </h3>

                  <p
                    className="
                      text-sm
                      sm:text-base
                      text-gray-400
                      mt-2
                      leading-6
                      sm:leading-7
                    "
                  >
                    Java, JavaScript, React, HTML, CSS, Tailwind CSS,
                    and Web Technologies.
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                EXPERIENCE
            ================================================= */}
            <div
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                sm:rounded-3xl
                p-5
                sm:p-7
                lg:p-8
                md:hover:border-green-500/40
                transition
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                  sm:gap-4
                  mb-8
                  sm:mb-10
                "
              >

                <div
                  className="
                    w-11
                    h-11
                    sm:w-12
                    sm:h-12
                    shrink-0
                    rounded-xl
                    bg-green-500/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <BriefcaseBusiness
                    size={24}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Experience
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Development & practical work
                  </p>
                </div>

              </div>


              <div className="space-y-7 sm:space-y-8">

                {/* Experience 1 */}
                <div
                  className="
                    relative
                    pl-6
                    sm:pl-7
                    border-l
                    border-slate-700
                  "
                >

                  <div
                    className="
                      absolute
                      -left-[5px]
                      top-1
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-green-400
                    "
                  />

                  <p className="text-xs sm:text-sm text-green-400 mb-2">
                    Frontend Development
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold">
                    Frontend Developer
                  </h3>

                  <p
                    className="
                      text-sm
                      sm:text-base
                      text-gray-400
                      mt-3
                      leading-6
                      sm:leading-7
                    "
                  >
                    Built responsive websites, reusable components,
                    dashboards, and portfolio applications using
                    React.js and Tailwind CSS.
                  </p>

                </div>


                {/* Experience 2 */}
                <div
                  className="
                    relative
                    pl-6
                    sm:pl-7
                    border-l
                    border-slate-700
                  "
                >

                  <div
                    className="
                      absolute
                      -left-[5px]
                      top-1
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-purple-400
                    "
                  />

                  <p className="text-xs sm:text-sm text-purple-400 mb-2">
                    Personal Project
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold">
                    React Task Management Dashboard
                  </h3>

                  <p
                    className="
                      text-sm
                      sm:text-base
                      text-gray-400
                      mt-3
                      leading-6
                      sm:leading-7
                    "
                  >
                    Developed authentication, protected routes,
                    login/logout functionality, API integration using
                    Axios, JSON Server, React Router DOM, and responsive
                    UI using Tailwind CSS.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CERTIFICATES
      ===================================================== */}
<section className="py-16 sm:py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-10 sm:mb-12">
      <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
        Achievements
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        Certificates & Qualifications
      </h2>

      <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
        Certifications and academic achievements that support my technical
        knowledge and professional development.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className="group flex flex-col h-full p-6 sm:p-7 rounded-2xl
          bg-slate-900/70 border border-slate-800
          hover:border-blue-500/40 hover:bg-slate-900
          transition-all duration-300 "
        >
          {/* Top */}
          <div className="flex items-start gap-4">
            <div
              className="shrink-0 w-12 h-12 rounded-xl
              bg-blue-500/10 border border-blue-500/20
              flex items-center justify-center
              text-blue-400 text-xl
              group-hover:bg-blue-500/20
              transition-all duration-300"
            >
              {certificate.icon}
            </div>

            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {certificate.title}
              </h3>

              <p className="mt-1 text-sm text-blue-400 font-medium">
                {certificate.issuer}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base text-gray-400 leading-7 flex-grow">
            {certificate.description}
          </p>

          {/* Bottom - Same position for every card */}
          <div className="mt-6 pt-5 border-t border-slate-800">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-400">
                <FaCheckCircle />
                Completed
              </span>

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                px-4 py-2.5 rounded-xl
                bg-blue-600 hover:bg-blue-500
                text-white text-sm font-semibold
                transition-all duration-300
                hover:shadow-lg hover:shadow-blue-500/20"
              >
                View Certificate
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* =====================================================
          SKILLS
      ===================================================== */}
      <section
        className="
          py-16
          sm:py-20
          lg:py-24
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
          "
        >

          {/* Header */}
          <div
            className="
              text-center
              max-w-2xl
              mx-auto
              mb-10
              sm:mb-14
              lg:mb-16
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
              Technical Skills
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
              "
            >
              Tools and technologies I use to design, develop, and
              build modern applications.
            </p>

          </div>


          {/* Skills */}
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-3
              sm:gap-5
            "
          >

            {skills.map((skill) => (

              <div
                key={skill.name}
                className="
                  group
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-xl
                  sm:rounded-2xl
                  p-4
                  sm:p-6
                  text-center
                  md:hover:border-blue-500/50
                  md:hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div
                  className={`
                    text-4xl
                    sm:text-5xl
                    ${skill.color}
                    flex
                    justify-center
                    md:group-hover:scale-110
                    transition-transform
                    duration-300
                  `}
                >
                  {skill.icon}
                </div>

                <h3
                  className="
                    font-semibold
                    text-sm
                    sm:text-base
                    lg:text-lg
                    mt-3
                    sm:mt-5
                  "
                >
                  {skill.name}
                </h3>

                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    text-gray-500
                    mt-1.5
                    sm:mt-2
                  "
                >
                  {skill.level}
                </p>

              </div>

            ))}

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

        <div
          className="
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

          <div
            className="
              w-14
              h-14
              sm:w-16
              sm:h-16
              mx-auto
              rounded-2xl
              bg-blue-500/10
              flex
              items-center
              justify-center
              mb-6
              sm:mb-7
            "
          >
            <FaAward
              className="
                text-3xl
                sm:text-4xl
                text-blue-400
              "
            />
          </div>

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
            Continuous Growth
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              mt-4
              sm:mt-5
              leading-tight
            "
          >
            Always Learning.
            <span className="text-blue-500">
              {" "}Always Growing.
            </span>
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
            My goal is to continuously improve my technical skills,
            build impactful applications, and contribute to innovative
            software solutions.
          </p>

        </div>

      </section>

    </div>
  );
};

export default About;