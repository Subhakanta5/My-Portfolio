import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";

const Contact = () => {
  const [submit,setSubmit]=useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })

  const handleInput=(e)=>{
    const {name,value}=e.target
    setSubmit({...submit,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    toast.success("Send Message Successfully")
    setSubmit({
    name:"",
    email:"",
    subject:"",
    message:""
    })
  }
  
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold">
          Contact <span className="text-blue-500">Me</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to collaborate? Feel free to get in
          touch. I'm always open to discussing new opportunities and ideas.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-2xl border border-slate-800">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>

              {/* <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-2xl border border-slate-800">
                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-2xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +91
                  </p>
                </div>
              </div> */}

              <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-2xl border border-slate-800">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Email
                  </h3>

                  <p className="text-gray-400">
                   subhakantananda5@gmail.com
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="mt-12">

              <h3 className="text-2xl font-bold mb-6">
                Follow Me
              </h3>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:bg-blue-600 transition cursor-pointer">
                 <a href="https://github.com/Subhakanta5" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
                </div>

                <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:bg-blue-700 transition cursor-pointer">
                 <a href="https://www.linkedin.com/in/subhakanta-nanda/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
                </div>

                <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:bg-sky-500 transition cursor-pointer">
                  <a href="https://x.com/" target="_blank"><FaTwitter/></a>
                </div>
                
              

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

            <h2 className="text-3xl font-bold mb-8">
              Send Message
            </h2>

            <form  onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="name"
                  value={submit.name}
                  onChange={handleInput}
                  placeholder="Full Name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  value={submit.email}
                  onChange={handleInput}
                  placeholder="Email Address"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                />

              </div>

              <input
                type="text"
                name="subject"
                value={submit.subject}
                onChange={handleInput}
                placeholder="Subject"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <textarea
                name="message"
                rows="6"
                value={submit.message}
                onChange={handleInput}
                placeholder="Write your message..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none resize-none focus:border-blue-500"
              ></textarea>

              <button
              type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 border-t border-slate-800 py-16">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Let's Build Something Amazing Together 🚀
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Whether you have a project, an idea, or just want to say hello,
            I'd love to hear from you.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl font-semibold transition">
            Start a Conversation
          </button>

        </div>

      </section>

    </div>
  );
};

export default Contact;