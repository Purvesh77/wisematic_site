
"use client";
import '../styles/hero.css'
import { FaCheck } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen relative">
      {/* Left Content */}
      <div
        className="relative z-10 w-full lg:w-1/2 text-left max-w-xl pb-40"
        style={{ marginLeft: "100px" }}
      >
        <h1 className="text-3xl text-[#333]  font-thin mb-4 mt-10">
          Wise and Stealler
        </h1>
        <h1 className="text-6xl leading-tight mb-6">
          <span className="text-black">
            Build your next project faster.
          </span>
        </h1>

        <p
          className="text-lg text-gray-700 mb-10"
          style={{ fontFamily: "'Poppins', sans-serif"}}
        >
          Elevate your business with Wisematic’s innovative and reliable
          solutions. Dynamic solutions for tangible business success.
        </p>

        <div className="flex items-center w-full">
  <div className="relative w-2/3">
    <input
      type="email"
      placeholder="Enter your email address"
      className="w-full p-4 pr-40 border border-gray-300 text-black rounded-full focus:outline-none "
    />
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2  px-6 py-4 bg-[#303030] text-white font-medium rounded-full hover:bg-blue-600 transition duration-300"
    >
      Get Started
    </button>
  </div>
</div>

<div className="flex space-x-8 pt-10">
    
    <div className="flex items-center space-x-2">
      <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full ">
                        <FaCheck className="text-white text-lg" />
                      </div>
      <span className="text-gray-700 text-lg font-medium">Uptime Gurantee</span>
    </div>

  
    <div className="flex items-center space-x-2">
    <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full ">
                        <FaCheck className="text-white text-lg" />
                      </div>
      <span className="text-gray-700 text-lg font-medium">Custom Soluntions Tailored</span>
    </div>
  </div>
      </div>

      

      <div>
      <div
    className="circlePosition w-[460px] h-[400px] bg-[#20D9A1] rounded-[100%] absolute z-1 blur-[100px] top-[20%] left-[45%]"
    style={{ opacity: 0.5}}
  ></div>
       <div
    className="circlePosition w-[460px] h-[420px] bg-[#5F39FF] rounded-[100%] absolute z-1 blur-[100px] top-[20%] left-[69%]"
    style={{ opacity: 0.5}}
  ></div>
      </div>
      <img
    src="/hero.png"
    alt="Hero Image"
    className="absolute z-10 top-[5%] left-[70%] translate-x-[-50%] w-[500px] h-[600px] "
  />
    </section>
  );
};

export default HeroSection;
