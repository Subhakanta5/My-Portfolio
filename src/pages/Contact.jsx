import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [submit, setSubmit] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setSubmit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !submit.name ||
      !submit.email ||
      !submit.subject ||
      !submit.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate sending
    setTimeout(() => {
      toast.success("Message sent successfully!");

      setSubmit({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Bhubaneswar, Odisha, India",
      color: "from-blue-500 to-cyan-500",
    },
     {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+918249816949",
      color: "from-blue-500 to-blue-500",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "subhakantananda5@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/Subhakanta5",
      hover: "hover:bg-gray-700 hover:border-gray-500",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/subhakanta-nanda/",
      hover: "hover:bg-blue-600 hover:border-blue-500",
    },
    {
      icon: <FaTwitter />,
      name: "X",
      url: "https://x.com/",
      hover: "hover:bg-sky-500 hover:border-sky-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            Have a project in mind, a job opportunity, or simply want to
            connect? I'd love to hear from you. Let's create something
            meaningful together.
          </p>

        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ================= LEFT ================= */}
          <div className="lg:col-span-2">

            <div className="mb-8">
              <p className="text-blue-400 font-semibold uppercase tracking-wider text-sm mb-2">
                Contact Information
              </p>

              <h2 className="text-3xl font-bold">
                Get In Touch
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                I'm always interested in hearing about new projects,
                opportunities, and collaborations.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">

              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 p-5 rounded-2xl
                  bg-slate-900/70 border border-slate-800
                  hover:border-slate-700 hover:-translate-y-1
                  transition-all duration-300"
                >

                  <div
                    className={`w-14 h-14 shrink-0 rounded-2xl
                    bg-gradient-to-br ${item.color}
                    flex items-center justify-center
                    text-xl shadow-lg`}
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-500 mb-1">
                      {item.title}
                    </p>

                    <p className="font-medium text-gray-200 break-words">
                      {item.value}
                    </p>
                  </div>

                </div>
              ))}

            </div>

            {/* Social */}
            <div className="mt-10">

              <h3 className="text-xl font-semibold mb-5">
                Follow Me
              </h3>

              <div className="flex gap-4">

                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name}`}
                    className={`w-12 h-12 rounded-xl
                    bg-slate-900 border border-slate-800
                    flex items-center justify-center
                    text-xl text-gray-400
                    ${social.hover}
                    hover:text-white
                    hover:-translate-y-1
                    transition-all duration-300`}
                  >
                    {social.icon}
                  </a>
                ))}

              </div>

            </div>

            {/* Quick Response */}
            <div className="mt-10 p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10">

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-green-500 mt-1 shrink-0" />

                <div>
                  <h4 className="font-semibold text-gray-200">
                    Quick Response
                  </h4>

                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    I usually respond to messages within 24 hours.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="lg:col-span-3">

            <div className="relative bg-slate-900/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 overflow-hidden">

              {/* Form Glow */}
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-blue-600/10 rounded-full blur-3xl" />

              <div className="relative">

                <div className="mb-8">

                  <p className="text-blue-400 font-semibold uppercase tracking-wider text-sm mb-2">
                    Send a Message
                  </p>

                  <h2 className="text-3xl font-bold">
                    Let's Talk
                  </h2>

                  <p className="text-gray-400 mt-3">
                    Fill out the form below and I'll get back to you soon.
                  </p>

                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-5">

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={submit.name}
                        onChange={handleInput}
                        placeholder="Enter your name"
                        className="w-full bg-slate-800/80 border border-slate-700
                        rounded-xl px-4 py-3.5 text-white placeholder-gray-500
                        outline-none focus:border-blue-500
                        focus:ring-2 focus:ring-blue-500/10
                        transition"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={submit.email}
                        onChange={handleInput}
                        placeholder="you@example.com"
                        className="w-full bg-slate-800/80 border border-slate-700
                        rounded-xl px-4 py-3.5 text-white placeholder-gray-500
                        outline-none focus:border-blue-500
                        focus:ring-2 focus:ring-blue-500/10
                        transition"
                      />
                    </div>

                  </div>

                  {/* Subject */}
                  <div>

                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={submit.subject}
                      onChange={handleInput}
                      placeholder="What would you like to discuss?"
                      className="w-full bg-slate-800/80 border border-slate-700
                      rounded-xl px-4 py-3.5 text-white placeholder-gray-500
                      outline-none focus:border-blue-500
                      focus:ring-2 focus:ring-blue-500/10
                      transition"
                    />

                  </div>

                  {/* Message */}
                  <div>

                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={submit.message}
                      onChange={handleInput}
                      placeholder="Tell me about your project or idea..."
                      className="w-full bg-slate-800/80 border border-slate-700
                      rounded-xl px-4 py-3.5 text-white placeholder-gray-500
                      outline-none resize-none
                      focus:border-blue-500
                      focus:ring-2 focus:ring-blue-500/10
                      transition"
                    />

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full sm:w-auto
                    bg-gradient-to-r from-blue-600 to-cyan-500
                    hover:from-blue-500 hover:to-cyan-400
                    disabled:opacity-60 disabled:cursor-not-allowed
                    px-8 py-3.5 rounded-xl
                    font-semibold
                    flex items-center justify-center gap-3
                    shadow-lg shadow-blue-500/20
                    hover:shadow-blue-500/30
                    transition-all duration-300"
                  >

                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}

                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="relative border-t border-slate-800 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-slate-900 to-cyan-950/20" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">

          <p className="text-blue-400 font-semibold mb-3">
            HAVE AN IDEA?
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing
            </span>{" "}
            Together
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether it's a website, web application, or a new idea,
            I'm always excited to work on meaningful projects.
          </p>

          <a
            href="mailto:subhakantananda5@gmail.com"
            className="inline-flex items-center gap-3 mt-8
            bg-white text-slate-950
            hover:bg-gray-200
            px-8 py-4 rounded-xl
            font-semibold
            transition-all duration-300"
          >
            <FaEnvelope />
            Start a Conversation
          </a>

        </div>

      </section>

    </div>
  );
};

export default Contact;