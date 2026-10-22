import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    // { name: "Contact", path: "/contact" },
  ];

  const handleNavigation = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-5 lg:px-8 pt-3">
      <nav
        className="
          max-w-7xl
          mx-auto
          bg-slate-950/80
          backdrop-blur-2xl
          border border-slate-800/80
          rounded-2xl
          shadow-2xl
          shadow-black/20
        "
      >
        <div className="h-[68px] px-3 sm:px-6 lg:px-7 flex items-center justify-between">
          {/* ================= LOGO ================= */}
          <Link
            to="/home"
            onClick={handleNavigation}
            className="flex items-center gap-2 sm:gap-3 group min-w-0"
          >
            {/* Logo */}
            <div
              className="
                         relative
                         w-10 h-10
                         shrink-0
                         rounded-xl
                         bg-gradient-to-br
                         from-blue-500
                         to-cyan-400
                         flex
                         items-center
                         justify-center
                         text-white
                         font-bold
                         text-sm
                         shadow-lg
                         shadow-blue-500/20
                         transition-all
                         duration-300
                         group-hover:scale-105
                         group-hover:rotate-3
                       "
            >
              SN
            </div>

            {/* Name */}
            <div className="min-w-0">
              <h1
                className="
                         text-xs
                         sm:text-sm
                         lg:text-base
                         font-bold
                         text-white
                         leading-tight
                         truncate
                       "
              >
                Subhakanta Nanda
              </h1>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-2 ml-auto mr-5">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavigation}
                  className={`
                    relative
                    px-4
                    py-2.5
                    rounded-xl
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-gray-400 hover:text-white hover:bg-slate-900"
                    }
                  `}
                >
                  {link.name}

                  {active && (
                    <span
                      className="
                        absolute
                        bottom-1
                        left-1/2
                        -translate-x-1/2
                        w-1
                        h-1
                        rounded-full
                        bg-blue-400
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Let's Talk */}
            <Link
              to="/contact"
              onClick={handleNavigation}
              className="
                ml-1
                inline-flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                bg-white
                text-slate-950
                text-sm
                font-semibold
                hover:bg-blue-500
                hover:text-white
                transition-all
                duration-300
                group
              "
            >
              Let's Talk
              <FaArrowRight
                size={11}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="
              md:hidden
              w-10
              h-10
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              text-gray-300
              flex
              items-center
              justify-center
              hover:text-white
              hover:border-blue-500/40
              transition-all
              duration-300
            "
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div
            className="
              border-t
              border-slate-800
              px-4
              sm:px-6
              py-4
            "
          >
            <div className="space-y-2">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleNavigation}
                    className={`
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3.5
                      rounded-xl
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ${
                        active
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "text-gray-400 hover:text-white hover:bg-slate-900"
                      }
                    `}
                  >
                    <span>{link.name}</span>

                    {active && (
                      <span
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-blue-400
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Contact */}
            <Link
              to="/contact"
              onClick={handleNavigation}
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                w-full
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                text-white
                text-sm
                font-semibold
                transition-all
                duration-300
              "
            >
              Let's Talk
              <FaArrowRight size={11} />
            </Link>

            {/* Mobile Socials */}
            <div
              className="
                mt-4
                pt-4
                border-t
                border-slate-800
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <a
                href="https://github.com/Subhakanta5"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-white
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/subhakanta-nanda/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-blue-400
                  transition
                "
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
