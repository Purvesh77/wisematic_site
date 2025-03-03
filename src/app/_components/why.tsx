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
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-black">
      {/* Header Text */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-6xl text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Why Wisematic
        </h2>
        <p className="text-lg text-gray-300 mb-4 px-10" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          Choosing Wisematic means partnering with a team that values commitment, flexibility, and cost-efficiency. We’re dedicated to your success, driven by a customer-first mindset, unwavering integrity, and exceptional quality.
        </p>
      </section>

      
      {/* Features Grid */}
      <section className="relative z-10 px-4 pb-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/30 text-white text-center backdrop-blur-lg text-[#303030] px-6 py-8 flex flex-col items-center justify-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <p className="text-center text-lg font-medium">{feature.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Why;