import React from 'react';
import { FaMobileAlt, FaGlobe, FaCheckCircle, FaShippingFast, FaPuzzlePiece, FaLightbulb } from 'react-icons/fa';

const Cards = () => {
  return (
    <div className="relative z-0">
      <div
        className="circlePosition w-[770px] h-[1000px] bg-[#20D9A1] rounded-[100%] absolute blur-[100px] top-[15%] left-[10%]"
        style={{ opacity: 0.3 }}
      ></div>
      <div
        className="circlePosition w-[770px] h-[1000px] bg-[#5F39FF] rounded-[100%] absolute blur-[100px] top-[15%] left-[40%]"
        style={{ opacity: 0.3 }}
      ></div>

      <section className="py-60 -mt-10 px-8 z-10 relative">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          style={{ paddingLeft: '100px', paddingRight: '100px' }}
        >
          {/* Card 1: AI Consulting and Strategy */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaMobileAlt className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-10" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              AI Consulting and Strategy
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              We help you navigate the complex AI landscape to unleash your business potential with AI strategy.
            </p>
          </div>

          {/* Card 2: AI Implementation and Integration */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaGlobe className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              AI Implementation and Integration
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Bridging the gap between strategy and execution. Our experts seamlessly integrate AI solutions into your existing systems.
            </p>
          </div>

          {/* Card 3: Automation Services */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaCheckCircle className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Automation Services
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Unlock the full potential of your business with our comprehensive automation services.
            </p>
          </div>

          {/* Card 4: Data Analysis and Preparation */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaShippingFast className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Data Analysis and Preparation
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Unlock the hidden potential within your data with our expert data analysis and preparation services.
            </p>
          </div>

          {/* Centered Solution Design Card */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center col-span-2 mt-20 transition-transform duration-300 hover:scale-105">
            <FaLightbulb className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Solution Design
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Our expert architects transform complex business needs into innovative, scalable solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;