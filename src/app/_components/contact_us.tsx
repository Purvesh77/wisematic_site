
"use client";
import React from "react";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      
      <div
    className="circlePosition w-[750px] h-[600px] bg-[#20D9A1] rounded-[100%] absolute  blur-[100px] top-[30%] left-[10%]"
    style={{ opacity: 0.4 }}
  ></div>
       <div
    className="circlePosition w-[750px] h-[600px] bg-[#5F39FF] rounded-[100%] absolute  blur-[100px] top-[30%] left-[40%]"
    style={{ opacity: 0.4 }}
  ></div>
      {/* Header Section */}
      <section className="text-center px-6 py-12">
        <h1 className="text-4xl font-serif italic font-bold bg-gradient-to-r from-[#584BF4] to-[#28C5AD] bg-clip-text text-transparent leading-tight mb-4">
          Contact Us
        </h1>
        <h2 className="z-10 text-5xl font-semibold text-black mb-6"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
          Get In Touch
        </h2>
       
      </section>

      {/* Contact Section */}
      <section className="px-6 lg:px-40 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
          {/* Left Column: Image with Boxes */}
          <div className="flex flex-col items-center mt-20">
            {/* Image */}
            <img
              src="/contact.jpg" // Replace this URL with your actual image URL
              alt="Contact Illustration"
              className="z-10 rounded-lg shadow-lg mb-8 w-full max-w-lg"
            />

            {/* Boxes with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-lg">
              {/* Phone Box */}
              <div className="bg-white z-10 shadow-md rounded-lg p-6 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 z-10 bg-[#303030] text-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75A3.75 3.75 0 016 3h12a3.75 3.75 0 013.75 3.75v12A3.75 3.75 0 0118 21H6a3.75 3.75 0 01-3.75-3.75V6.75z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+1 6473757149</p>
                  <p className="text-gray-600">+1 6474910988</p>
                </div>
              </div>

              {/* Email Box */}
              <div className="bg-white z-10 shadow-md rounded-lg p-6 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-[#303030] text-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5m-16.5 0L12 12m0 0l8.25-5.25m-8.25 5.25v7.5M3.75 6.75v10.5a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V6.75"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">info@wisematic.ca</p>
                  <p className="text-gray-600">sales@wisematic.ca</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white z-10 shadow-lg rounded-lg p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Send Us a Message
            </h3>
            <form className="space-y-6 flex flex-col items-center">
              {/* Name Input */}
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
                  required
                />
              </div>
              {/* Email Input */}
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
                  required
                />
              </div>
              {/* Message Input */}
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#303030] text-white text-center font-bold rounded-full hover:opacity-90 transition-opacity py-4 px-10"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="pb-60"></div>
    </div>
  );
};

export default ContactUs;
