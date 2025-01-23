
"use client";
import React from "react";
import { FaShippingFast, FaSyncAlt, FaCoins, FaUserFriends, FaShieldAlt, FaStar, FaHandshake, FaInfinity, FaBookOpen } from "react-icons/fa";

const Why = () => {
  const features = [
    { text: "Always deliver on commitments", icon: <FaShippingFast /> },
    { text: "Agile and Flexible", icon: <FaSyncAlt /> },
    { text: "Cost Effective", icon: <FaCoins /> },
    { text: "Customer Centric", icon: <FaUserFriends /> },
    { text: "Integrity", icon: <FaShieldAlt /> },
    { text: "Quality", icon: <FaStar /> },
    { text: "True Partnership", icon: <FaHandshake /> },
    { text: "Long-term relationship focused", icon: <FaInfinity /> },
    { text: "Transfer of knowledge", icon: <FaBookOpen /> },
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      {/* Header Text */}
      <section className="px-40 py-16 text-center">
       
        <h2 className="text-6xl  text-black mb-4 text-center"
        style={{ fontFamily: "'Poppins', sans-serif"}}>
          Why Wisematic
        </h2>
        <p className="text-lg text-gray-700 mb-4 p-10 text-center"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          Choosing Wisematic means partnering with a team that values
          commitment, flexibility, and cost-efficiency. We’re dedicated to your
          success, driven by a customer-first mindset, unwavering integrity, and
          exceptional quality.
        </p>
      </section>

      {/* 9 Boxes in 3 Columns */}
      <div className="relative z-0">
      <div
    className="circlePosition w-[700px] h-[600px] bg-[#20D9A1] rounded-[100%] absolute  blur-[100px] top-[0%] left-[-10%]"
    style={{ opacity: 0.4 }}
  ></div>
       <div
    className="circlePosition w-[700px] h-[600px] bg-[#5F39FF] rounded-[100%] absolute  blur-[100px] top-[0%] left-[40%]"
    style={{ opacity: 0.4 }}
  ></div>
      <section className="px-4 -pt-10 pb-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white z-10 text-white px-6 py-8 flex flex-col items-center justify-center rounded-lg shadow-lg"
          >
            <div className="text-[#303030] text-4xl mb-4 ">{feature.icon}</div>
            <p className="text-center text-[#303030] text-lg font-medium">{feature.text}</p>
          </div>
        ))}
      </section>
      </div> 
    </div>
  );
};

export default Why;
