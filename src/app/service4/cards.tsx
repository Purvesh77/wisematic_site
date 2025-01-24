import React from 'react';
import { FaUserCog, FaBook, FaRobot, FaUtensils, FaHeartbeat, FaBullhorn } from 'react-icons/fa';

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
          {/* Card 1: Custom CRM */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaUserCog className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-10" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Custom CRM
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Streamline your sales and customer relationships with our custom CRM.
            </p>
          </div>

          {/* Card 2: Learning Management System */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaBook className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Learning Management System
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Deliver engaging and effective training with our Learning Management System.
            </p>
          </div>

          {/* Card 3: AI-driven Custom Chat Bot */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaRobot className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              AI-driven Custom Chat Bot
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Enhance customer experience with our AI-driven chat bot.
            </p>
          </div>

          {/* Card 4: Custom Restaurant Management Tools */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaUtensils className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Custom Restaurant Management Tools
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Manage your restaurant efficiently with our custom tools.
            </p>
          </div>

          {/* Card 5: Email Marketing Automation and SMM */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaBullhorn className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Email Marketing Automation and SMM
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Reach your audience and drive results with our email marketing and social media management tools.
            </p>
          </div>

          {/* Card 6: Healthcare Management */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaHeartbeat className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Healthcare Management
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Improve patient care and streamline operations with our healthcare management software.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;