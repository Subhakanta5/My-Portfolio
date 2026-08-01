import React, { useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Profile from"../assets/Subhakanta.jpeg"

const Home = () => {

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* Left Side */}
          <div>

            <p className="text-blue-400 font-semibold tracking-widest uppercase">
              Welcome to My Portfolio
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold mt-5 leading-tight">
              Hi, I'm
              <span className="text-blue-500"> Subhakanta</span>
            </h1>

            <h2   className="text-3xl lg:text-4xl font-bold mt-5 text-gray-300">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
              Passionate about creating beautiful, responsive, and user-friendly
              web applications using modern technologies like React, JavaScript,
              Tailwind CSS and more.
            </p>

            <div className="flex gap-5 mt-10">
              <Link
              to={"/contact"} 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition">
                Hire Me
                <FaArrowRight />
              </Link>

              <button className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition">
                <a href="./src/assets/resume.pdf" download="Subhakanta Nanda resume.pdf" target="_blank">Download CV</a>
              </button>
            </div>

            <div className="flex gap-6 mt-10 text-3xl text-gray-400">
             <a href="https://github.com/Subhakanta5" target="_blank" rel="noopener noreferrer"> <FaGithub className="hover:text-white cursor-pointer transition" /></a>

              <a href="https://www.linkedin.com/in/subhakanta-nanda/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-400 cursor-pointer transition" /></a>
              
            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="w-96 h-96 rounded-full bg-blue-600/20 absolute blur-3xl"></div>

              <div className="relative bg-slate-900 border border-slate-700 rounded-full p-2 shadow-2xl">

                <img
                  src={Profile}
                  alt="Profile"
                  className="w-[38vh] h-[39vh] object-cover rounded-full"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="bg-slate-900 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            What I Do
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-2 transition">
              <FaCode className="text-blue-500 text-5xl mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Frontend Development
              </h3>
              <p className="text-gray-400">
                Building modern, responsive, and interactive user interfaces
                using React and Tailwind CSS.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-2 transition">
              <FaLaptopCode className="text-green-400 text-5xl mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Backend Development
              </h3>
              <p className="text-gray-400">
                Creating REST APIs, authentication systems, and scalable server
                applications.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-2 transition">
              <FaReact className="text-cyan-400 text-5xl mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                React Applications
              </h3>
              <p className="text-gray-400">
                Developing fast and reusable component-based applications with
                React.js.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}
      {/* <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h2 className="text-5xl font-bold text-blue-500">50+</h2>
            <p className="mt-3 text-gray-400">Projects</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h2 className="text-5xl font-bold text-green-400">2+</h2>
            <p className="mt-3 text-gray-400">Years Experience</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h2 className="text-5xl font-bold text-pink-500">25+</h2>
            <p className="mt-3 text-gray-400">Happy Clients</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h2 className="text-5xl font-bold text-yellow-400">100%</h2>
            <p className="mt-3 text-gray-400">Client Satisfaction</p>
          </div>

        </div>

      </section> */}

      {/* CTA */}
      <section className="bg-blue-95000 py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-6 mb-10 text-lg text-blue-100">
            I'm available for freelance work, internships, and full-time
            opportunities.
          </p>

          <Link 
          to={"/contact"} 
          onClick={()=>window.scrollTo(0,0)}
          className=" mt-10 bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-200 transition">
            Contact Me
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;