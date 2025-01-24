import React from "react";
import { FaCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <section className="px-40 pt-20 justify-between lg:px-40 py-16 gap-10">
        <p className="text-lg text-gray-300 text-center" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          TAILORED SOLUTIONS, REAL IMPACT
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Image and Circles */}
          <div className="relative w-full md:w-1/2 h-[500px] mb-10 md:mb-0">
            {/* Circle Backgrounds */}
            <div className="circlePosition w-[500px] h-[400px] bg-[#20D9A1] rounded-[100%] absolute blur-[100px] top-[15%] left-[0%]" style={{ opacity: 0.3 }}></div>
            <div className="circlePosition w-[500px] h-[400px] bg-[#5F39FF] rounded-[100%] absolute blur-[100px] top-[15%] left-[30%]" style={{ opacity: 0.3 }}></div>

            {/* Image with hover effect */}
            <img
              src="/techConsult.jpeg"
              alt="Hero Image"
              className="absolute z-10 w-[500px] h-[280px] rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Section: Heading */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-6xl mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Unleash Your Business Potential: Wisematic Technology Consultation
            </h2>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2 text-left space-y-4 pl-60">
          <h1 className="text-2xl text-gray-300">TECH CONSULTATION</h1>
          <p className="text-6xl max-w-[500px]">
            Providing business solutions tailored to your needs.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 text-left mr-20 pr-20">
          <p className="text-lg text-gray-400 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            In today’s dynamic technological landscape, navigating the right solutions can be a daunting task. At Wisematic, we bridge that gap, transforming technology into a strategic advantage for your business.
          </p>
          <p className="text-lg text-gray-400 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Our expert technology consultants are more than just advisors; they’re your innovation architects. We take a collaborative approach, delving deep into your unique needs and goals.
          </p>
          <p className="text-lg text-gray-400 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
            Here’s what sets Wisematic’s technology consultation apart:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-10">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                <FaCheck className="text-white text-xl" />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Holistic Vision</span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                <FaCheck className="text-white text-xl" />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Future-Proof Strategies</span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                <FaCheck className="text-white text-xl" />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Agile Implementation</span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                <FaCheck className="text-white text-xl" />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Tailored Recommendations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;