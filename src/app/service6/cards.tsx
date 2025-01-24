import React from 'react';
import { FaChartPie, FaCloud, FaTools, FaSlidersH } from 'react-icons/fa';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          {/* Card 1: Cloud Data Integration and Analytics */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaCloud className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-10" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Cloud Data Integration and Analytics
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Our team specializes in constructing robust cloud data pipelines and modern data warehouses on leading cloud platforms.
            </p>
          </div>

          {/* Card 2: Data Integration and Data Engineering */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaTools className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Data Integration and Data Engineering
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Our team designs and builds efficient data pipelines to prepare source system data for analytics and downstream applications.
            </p>
          </div>

          {/* Card 3: Data Strategy and Architecture Design */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaSlidersH className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Data Strategy and Architecture Design
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Our teams build cloud-based data “pipelines” and modern data warehouses based on Azure and AWS cloud platforms.
            </p>
          </div>

          {/* Card 4: Data Analytics */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaChartPie className="text-4xl text-white" />
            <h3 className="text-2xl text-white font-semibold mb-4 -ml-20" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Data Analytics
            </h3>
            <p className="text-base text-gray-300 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              To unlock the full potential of data stored in data lakes or warehouses, we create interactive dashboards and reports.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;