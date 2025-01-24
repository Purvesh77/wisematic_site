import React from "react";
import { FaCogs, FaTasks, FaChartLine, FaRobot, FaRoute } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="relative z-0 ">
      <div
        className="circlePosition w-[770px] h-[600px] bg-[#20D9A1] rounded-[100%] absolute blur-[100px] top-[15%] left-[10%]"
        style={{ opacity: 0.3 }}
      ></div>
      <div
        className="circlePosition w-[770px] h-[600px] bg-[#5F39FF] rounded-[100%] absolute blur-[100px] top-[15%] left-[40%]"
        style={{ opacity: 0.3 }}
      ></div>

      <section className="py-60 -mt-10 px-8 z-10 relative">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          style={{ paddingLeft: "100px", paddingRight: "100px" }}
        >
          {/* Card 1: Program and Project Management */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaTasks className="text-4xl text-white items-start justify-between" />

            <h3
              className="text-2xl text-white font-semibold mb-4 -ml-10"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              Program and Project Management
            </h3>
            <p
              className="text-base text-gray-300 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              Our seasoned project managers blend business acumen with technical
              expertise. We tailor our approach to your project, whether it’s
              waterfall, agile, or a hybrid model. Our focus on planning,
              execution, and stakeholder satisfaction ensures successful
              delivery every time.
            </p>
          </div>

          {/* Card 2: Business Requirements Elicitation and Analysis */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaChartLine className="text-4xl text-white" />

            <h3
              className="text-2xl text-white font-semibold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              Business Requirements Elicitation and Analysis
            </h3>
            <p
              className="text-base text-gray-300 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              We collaborate closely with you to define your project’s success.
              Our analysts combine design thinking with proven techniques to
              deeply understand your business objectives and translate them into
              clear, actionable requirements.
            </p>
          </div>

          {/* Card 3: Business Process Automation */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaRobot className="text-4xl text-white" />

            <h3
              className="text-2xl text-white font-semibold mb-4 -ml-20"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              Business Process Automation
            </h3>
            <p
              className="text-base text-gray-300 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              We help our clients to build faster, leaner, and more digitized
              businesses with automated business workflows. Our teams define the
              implementation strategy, transition plan, and the new governance
              structure.
            </p>
          </div>

          {/* Card 4: Technology Integration Strategy */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-[300px] transition-transform duration-300 hover:scale-105">
            <FaCogs className="text-4xl text-white" />

            <h3
              className="text-2xl text-white font-semibold mb-4 -ml-20"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              Technology Integration Strategy
            </h3>
            <p
              className="text-base text-gray-300 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              Our expert Solution Architect will first understand our clients’
              objectives, review their environments, system capabilities, and
              technology components, and then map out an integration strategy
              that defines efficient interfaces and connection protocols among
              in-scope systems.
            </p>
          </div>

          {/* Roadmap Card */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center col-span-2 mt-20 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-[75px] h-[80px] mb-4 mx-auto ">
              <FaRoute className="text-4xl text-white" />
            </div>

            <h3
              className="text-2xl text-white font-semibold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              Strategy, Architecture, and Roadmap
            </h3>
            <p
              className="text-base text-gray-300 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              We partner with you to build a technology landscape that propels
              your business forward. At Wisematic, we understand that technology
              is more than just tools; it’s a strategic asset. Our expert
              consultants collaborate closely with your team to assess your
              current IT environment, identify opportunities, and develop a
              clear roadmap to achieve your business goals. We analyze your
              existing IT infrastructure, processes, and capabilities to
              identify strengths, weaknesses, and potential gaps. We develop a
              comprehensive technology strategy aligned with your business
              objectives, ensuring your IT investments deliver maximum ROI.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;