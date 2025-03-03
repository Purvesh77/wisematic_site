"use client";
import React from "react";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black">
      
      {/* Header Section */}
      <section className="text-center px-6 py-12">
        <h2
          className="z-10 text-6xl text-white mb-6"
          style={{ fontFamily: "'Poppins', sans-serif", maxWidth: "700px" }}
        >
          Feel free to send our friendly team a message
        </h2>
        <p
          className="text-lg text-gray-300 mb-20 mt-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            maxWidth: "700px",
          }}
        >
          Our team of experts are here to help. Whatever the time of day and no
          matter how small the question- we&apos;re here.
        </p>
      </section>

      {/* Contact Section */}
      <section className="px-6 lg:px-40 py-12">
        {/* Right Column: Contact Form */}
        <div className="z-10 p-8 relative flex flex-col justify-center -mt-40">
          <form className="space-y-6 flex flex-col items-center w-[120%] mx-auto">
            {/* Name and Email Input */}
            <div className="flex flex-row gap-4 w-full">
              {/* Name Input */}
              <div className="flex-1 ">
                <label htmlFor="name" className="block text-black font-medium mb-2"></label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  bg-white/30 text-white text-center backdrop-blur-lg"
                  required
                />
              </div>
              {/* Email Input */}
              <div className="flex-1">
                <label htmlFor="email" className="block text-black font-medium mb-2"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-white/30 text-white text-center backdrop-blur-lg"
                  required
                />
              </div>
            </div>
            {/* Message Input */}
            <div className="w-full">
              <label htmlFor="message" className="block text-black font-medium mb-2"></label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-white/30 text-white text-center backdrop-blur-lg"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#3F83C0] z-10 text-white text-center font-bold rounded-full hover:opacity-90 transition-opacity py-4 px-10"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <div className="pb-60"></div>
    </div>
  );
};

export default ContactUs;