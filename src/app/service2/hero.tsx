import React from "react";
import { FaCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <section className="px-40 pt-20 justify-between lg:px-40 py-16 gap-10">
        <p className="text-lg text-gray-300 text-center" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          YOUR PARTNER IN APP DEVELOPMENT
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Image and Circles */}
          <div className="relative w-full md:w-1/2 h-[500px] mb-10 md:mb-0">
            {/* Circle Backgrounds */}
            <div className="circlePosition w-[500px] h-[400px] bg-[#20D9A1] rounded-[100%] absolute blur-[100px] top-[15%] left-[0%]" style={{ opacity: 0.3 }}></div>
            <div className="circlePosition w-[500px] h-[400px] bg-[#5F39FF] rounded-[100%] absolute blur-[100px] top-[15%] left-[30%]" style={{ opacity: 0.3 }}></div>

            {/* Image with hover effect */}
            <img
              src="/appDev.jpg"
              alt="Hero Image"
              className="absolute z-10 w-[500px] h-[280px] rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Section: Heading */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-6xl mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Craft exceptional digital experiences that drive business growth
            </h2>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2 text-left space-y-4 pl-60">
          <h1 className="text-2xl text-gray-300">APPLICATION SERVICES</h1>
          <p className="text-6xl max-w-[400px]">
            Empowering Your Business with Custom Applications.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 text-left mr-20 pr-20">
          <p className="text-lg text-gray-400 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            We are a team of experienced and passionate application developers who are committed to delivering innovative and high-quality solutions. We specialize in a wide range of application development services, including: Website/ Web application, Android/ IOS/ Hybrid app development, Software testing, System integration and many more. We have a proven track record of delivering successful application development projects. We work closely with our clients to ensure their needs are met and ensure to deliver high-quality applications that meet the highest standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-10">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                <FaCheck className="text-white text-xl" />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Timely Delivery</span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                <FaCheck className="text-white text-xl" />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Quality</span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                <FaCheck className="text-white text-xl" />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Innovation</span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                <FaCheck className="text-white text-xl" />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;