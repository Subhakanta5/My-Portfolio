import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-slate-100 shadow-md border-b border-gray-200">
      <nav className="px-10 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            SN
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Subhakanta Nanda
            </h1>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
          <Link to={"/home"} className="cursor-pointer hover:text-blue-900 transition hover:underline ">
            Home
          </Link>

          <Link to={"/about"} className="cursor-pointer hover:text-blue-900 transition hover:underline ">
            About
          </Link>

          <Link to={"/contact"} className="cursor-pointer hover:text-blue-900 transition hover:underline ">
            Contact
          </Link>
          <Link to={"/projects"} className="cursor-pointer hover:text-blue-900 transition hover:underline ">
            Projects
          </Link>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* <button className="px-5 py-2.5 rounded-lg text-blue-600 border-2 border-blue-500 font-medium hover:bg-blue-700 hover:text-white transition">
            Download CV
          </button> */}
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;