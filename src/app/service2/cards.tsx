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
          {/* Card 1: App Development Services */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaMobileAlt className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-10" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              App Development Services
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              In collaboration with the stakeholder, after properly understanding their requirement we design and develop custom mobile and web applications for various platforms. Design intuitive user interfaces and engaging user experiences are our top most priorities.
            </p>
          </div>

          {/* Card 2: Web Development */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaGlobe className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Web Development
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              By using agile methodology, we design and develop custom create responsive and engaging websites that drive traffic and conversions.
            </p>
          </div>

          {/* Card 3: Testing Services */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaCheckCircle className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Testing Services
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              At Wisematic we understand that quality is essential to the success of any software product or application. That’s why we offer a comprehensive range of testing services to ensure that your product is reliable, secure, and meets the needs of your users.
            </p>
          </div>

          {/* Card 4: Agile Delivery */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaShippingFast className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Agile Delivery
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Embracing agility is key to delivering high-quality software on time and within budget. Our agile delivery methodology fosters collaboration, flexibility, and rapid iteration.
            </p>
          </div>

          {/* Card 5: System Integration */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaPuzzlePiece className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              System Integration
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Our system integration services ensure your systems work together seamlessly, improving data flow, reducing errors, and optimizing overall operations.
            </p>
          </div>

          {/* Card 6: Solution Design */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaLightbulb className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Solution Design
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Our expert architects transform complex business needs into innovative, scalable solutions using microservices architecture.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;