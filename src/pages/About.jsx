import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaAward,
} from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-full h-full border-4 border-blue-500 rounded-3xl"></div>

                <img
                  src="./src/assets/Subhakanta.jpeg"
                  alt=""
                  className="relative w-96 rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-blue-400 uppercase tracking-widest font-semibold">
                About Me
              </p>

              <h1 className="text-5xl font-bold mt-4">
                Passionate Full Stack Developer
              </h1>

              <p className="text-gray-400 mt-8 leading-8 text-lg">
                Hello! I'm a passionate web developer who enjoys creating
                beautiful, responsive, and user-friendly applications. I
                specialize in React.js, Java, Spring Boot, MySQL and Tailwind
                CSS.
              </p>

              <p className="text-gray-400 mt-6 leading-8 text-lg">
                I love solving real-world problems through clean code, learning
                new technologies, and building projects that improve people's
                lives.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-2 gap-5 mt-10">
                {/* <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <h2 className="text-4xl font-bold text-blue-500">
                    25+
                  </h2>
                  <p className="mt-2 text-gray-400">
                    Completed Projects
                  </p>
                </div> */}

                {/* <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <h2 className="text-4xl font-bold text-green-400">
                    2+
                  </h2>
                  <p className="mt-2 text-gray-400">
                    Years Learning
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Education & Experience</h2>

            <p className="text-gray-400 mt-4">
              My learning journey and practical experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Education */}
            <div className="bg-slate-800 rounded-3xl p-8">
              <h2 className="flex items-center justify-center gap-2 text-2xl font-bold mb-8">
                <GraduationCap size={30} />
                Education
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor Degree</h3>
                  <p className="text-blue-400 mt-2">2020 - 2023</p>
                  <p className="text-gray-400 mt-2">Electrical Engineering</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Full Stack Development
                  </h3>
                  <p className="text-blue-400 mt-2">
                    Java, Web Technology
                  </p>
                  <p className="text-gray-400 mt-2">
                    Html, Css, JavaScript, React, Tailwind Css
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-slate-800 rounded-3xl p-8">
              <h2 className="flex items-center justify-center gap-2 text-2xl font-bold mb-8">
                <BriefcaseBusiness size={30} />
                Experience
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>

                  <p className="text-blue-400 mt-2">React & Tailwind CSS</p>

                  <p className="text-gray-400 mt-2">
                    Built responsive websites, reusable components, dashboards,
                    and portfolio applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Personal Projects</h3>

                  <p className="text-blue-400 mt-2">
                    React Task Management Dashboard
                  </p>

                  <p className="text-gray-400 mt-2">
                    Built a responsive React.js application with user
                    registration and login authentication, Implemented Protected
                    (Private) Routes to secure dashboard access, developed
                    authentication flow using React Router DOM, Axios, and JSON
                    Server, implemented session management with login/logout
                    functionality, Created responsive UI using Tailwind CSS and
                    displayed notifications using React Toastify.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">My Skills</h2>

            <p className="text-gray-400 mt-4">
              Technologies I enjoy working with.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaReact />, name: "React", color: "text-cyan-400" },
              // { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
              { icon: <FaJava />, name: "Java", color: "text-red-500" },
              { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
              { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
              { icon: <FaCss />, name: "CSS", color: "text-blue-400" },
              {
                icon: <SiTailwindcss />,
                name: "Tailwind",
                color: "text-cyan-300",
              },
              { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
              // { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
              { icon: <FaGithub />, name: "GitHub", color: "text-white" },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800 hover:border-blue-500 transition"
              >
                <div
                  className={`text-5xl ${skill.color} mb-5 flex justify-center`}
                >
                  {skill.icon}
                </div>

                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement */}
      <section className="bg-blue-950 py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <FaAward className="text-6xl mx-auto mb-6" />

          <h2 className="text-5xl font-bold">Always Learning & Growing</h2>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            My goal is to continuously improve my skills, build impactful
            applications, and contribute to innovative software solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
