import React from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center">

        {/* Logo */}
        <Link
          to="/home"
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-full bg-gray-700 text-white flex items-center justify-center text-lg font-bold shadow-md group-hover:scale-105 transition-transform duration-300 ">
            SN
          </div>

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-white leading-tight">
              Subhakanta Nanda
            </h1>
          </div>
        </Link>

        {/* Navigation Links - RIGHT */}
        <ul className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative group text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Underline */}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu */}
        <button
          className="md:hidden ml-auto p-2 rounded-lg text-white hover:bg-gray-500 transition"
        >
          <FaBars size={20} />
        </button>

      </nav>
    </header>
  );
};

export default Navbar;