
import React from "react";
import { FaCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 bg-black">
      {/* Centered Button */}
      <div className="relative z-10 text-3xl bg-white/30 rounded-full text-white text-center backdrop-blur-lg w-80 h-20 flex justify-center items-center">
        WISE & STEALLER
      </div>
      {/* Heading */}
      <h1 className="text-4xl lg:text-7xl text-white text-center leading-tight mt-10">
        <span>Build your next project faster.</span>
      </h1>
      {/* Description */}
      <p
        className="text-base lg:text-xl mt-10 text-gray-400 text-center"
        style={{ fontFamily: "'Poppins', sans-serif", maxWidth: "600px" }}
      >
        Elevate your business with Wisematic&apos;s innovative and reliable
        solutions. Dynamic solutions for tangible business success.
      </p>

      {/* Input Field and Button */}
      <div className="flex justify-center items-center mt-10 w-full">
        <div className="relative w-full max-w-md"> {/* Limit width for input field */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-4 pr-40 border border-gray-300 text-black rounded-full focus:outline-none"
          />
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-6 py-4 bg-[#3F83C0] text-white font-medium rounded-full hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start space-x-0 lg:space-x-8 pt-10 space-y-4 lg:space-y-0 pb-20">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-[#3F83C0] rounded-full">
            <FaCheck className="text-white text-lg" />
          </div>
          <span className="text-white text-base lg:text-lg font-medium">
            Uptime Guarantee
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-[#3F83C0] rounded-full">
            <FaCheck className="text-white text-lg" />
          </div>
          <span className="text-white text-base lg:text-lg font-medium">
            Custom Solutions Tailored
          </span>
        </div>
      </div>

    </div>
  );
};

export default Hero;
