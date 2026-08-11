import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import { Link } from "react-router-dom";

const Projects = () => {
  const desc1 =
    " Built a responsive React.js application with user registration and login authentication, Implemented Protected (Private) Rout to secure dashboard access,In Dashboard profile use Update the profile and Delete the profile, developed authentication flow using React Router DOM, Axios, and JSON Server, implemented session management with login/logout functionality, Created responsive UI using Tailwind CSS and displayed notifications using React Toastify.";

    const desc2="Space Night is a modern and interactive web application built with React.js and Tailwind CSS that takes users on a journey through our Solar System. The project features a visually appealing interface with smooth animations, immersive videos, and detailed information about each planet. Users can explore planetary facts, learn about the unique characteristics of every world, and enjoy a responsive design."

    const desc3="An E-Commerce Website is a modern online shopping application built with React.js, where users can browse products, search and filter items, add products to their cart, and place orders through a simple checkout process."

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <section className="py-20 text-center">
        <p className="text-blue-500 uppercase tracking-widest font-semibold">
          My Work
        </p>

        <h1 className="text-5xl lg:text-6xl font-bold mt-4">
          Featured <span className="text-blue-500">Projects</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg leading-8">
          Here projects I've built using modern web technologies. Each project
          helped me improve my skills in frontend and backend development.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt=""
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">Task Management Dashboard</h2>

              <p
                className="text-gray-400 mt-4 leading-7 cursor-pointer"
                title={desc1}
              >
                {desc1.slice(0, 221)}...
              </p>

              <div className="flex gap-3 mt-6 flex-wrap">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                  React
                </span>

                <span className="px-3 py-1 bg-green-600 rounded-full text-sm">
                  Tailwind Css
                </span>

                {/* <span className="px-3 py-1 bg-cyan-600 rounded-full text-sm">
                  MongoDB
                </span> */}
              </div>

              <div className="flex justify-between mt-8">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition">
                  <FaExternalLinkAlt />
                  <a
                    href="https://taskdashboardmine.netlify.app/"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </button>

                <button className="flex items-center gap-2 border border-gray-600 hover:border-white px-5 py-3 rounded-lg transition">
                  <FaGithub />
                  <a
                    href="https://github.com/Subhakanta5/task-management-dashboard"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt=""
              className="w-full h-60 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                Space Night
              </h2>

              <p
                className="text-gray-400 mt-4 leading-7 cursor-pointer"
                title={desc2}
              >
                {desc2.slice(0, 221)}...
              </p>

              <div className="flex gap-3 mt-6 flex-wrap">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                  React
                </span>

                <span className="px-3 py-1 bg-green-600 rounded-full text-sm">
                  Tailwind Css
                </span>

              </div>

              <div className="flex justify-between mt-[12vh]">

                <a
                href="https://spacenight.netlify.app/"
                target="_blank"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition">
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                href="https://github.com/Subhakanta5/Space-Night"
                target="_blank"
                className="flex items-center gap-2 border border-gray-600 hover:border-white px-5 py-3 rounded-lg transition">
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500 transition duration-300">

            <img
              src=" https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt=""
              className="w-full h-60 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
               E-Commerce Website
              </h2>

              <p
                className="text-gray-400 mt-4 leading-7 cursor-pointer"
                title={desc3}
              >
                {desc3.slice(0, 221)}...
              </p>

              <div className="flex gap-3 mt-6 flex-wrap">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                  React
                </span>

                <span className="px-3 py-1 bg-green-600 rounded-full text-sm">
                  Tailwind Css
                </span>

              </div>

              <div className="flex justify-between mt-[12vh]">

                <a
                href="https://shopshine-0511.web.app/"
                target="_blank"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition">
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                href="https://github.com/"
                target="_blank"
                className="flex items-center gap-2 border border-gray-600 hover:border-white px-5 py-3 rounded-lg transition">
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>
          
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Technologies I Use</h2>

          <div className="flex gap-10  justify-center mt-5">
            <div className="bg-slate-800 rounded-2xl p-12 text-center border border-slate-700">
              <FaReact className="text-6xl text-cyan-400 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">React</h3>
            </div>

            {/* <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700">
              <FaJava className="text-6xl text-orange-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Java</h3>
            </div> */}

            <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700">
              <FaHtml5 className="text-6xl text-orange-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Web Technology</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Interested in Working Together?
          </h2>

          <p className="mt-4 text-gray-400 text-lg">
            I'm always excited to build new projects, solve problems, and
            collaborate on innovative ideas.
          </p>

          <div className="mt-10">
            <Link
              to={"/contact"}
              onClick={()=>window.scrollTo(0,0)}
              className=" bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl font-semibold transition"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
