"use client";
import React from "react";
import { FaLaptopCode,FaMobileAlt,FaCloud,FaDatabase,FaRobot,FaBullhorn} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-5xl text-black mb-4" />,
      title: "Technology Consulting",
      description: "Our expert consultants offer strategic guidance and actionable insights, helping you leverage technology to achieve your business goals.",
    },
    {
      icon: <FaMobileAlt className="text-5xl text-black mb-4" />,
      title: "Application Services",
      description: "Whether you need custom application development or maintenance, our team delivers robust and innovative solutions tailored to your specific requirements.",
    },
    {
      icon: <FaCloud className="text-5xl text-black mb-4" />,
      title: "Software as Service",
      description: "Simplify your operations with our scalable and reliable SaaS solutions. We provide tools that empower your business to function seamlessly.",
    },
    {
      icon: <FaDatabase className="text-5xl text-black mb-4" />,
      title: "Data Analytics",
      description: "Our analytics services provide deep insights that drive strategic decision-making, optimize performance, and uncover new growth opportunities.",
    },
    {
      icon: <FaRobot className="text-5xl text-black mb-4" />,
      title: "AI & Automation",
      description: "Embrace the future with our advanced AI and automation solutions. From streamlining workflows to enhancing customer experiences.",
    },
    {
      icon: <FaBullhorn className="text-5xl text-black mb-4" />,
      title: "Digital Marketing",
      description: "Amplify your reach & connect with your target audience through innovative data-driven marketing strategies. We craft campaigns that resonate and convert.",
    },
  ];

  return (
    <div className="relative flex justify-center items-center px-20 py-16 mt-20">
      {/* Background Circles */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="circlePosition w-[700px] h-[600px] bg-[#20D9A1] rounded-full blur-[100px] opacity-40"></div>
        <div className="circlePosition w-[700px] h-[600px] bg-[#5F39FF] rounded-full blur-[100px] opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl">
        {/* Header Text */}
        <section className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <h2 className="text-6xl text-black mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Provide powerful solutions at all times.
          </h2>
          <div className="flex items-center text-gray-500">
            <span className="text-2xl mr-2">✱</span>
            <span className="text-2xl mr-2">✹</span>
            <p className="text-lg text-gray-700 ml-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Supercharge your productivity and optimize your workflow with Wisematic.
            </p>
          </div>
        </section>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-lg bg-white text-gray-700 p-8 flex flex-col items-start justify-between rounded-lg font-normal transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              {service.icon}
              <h3 className="text-2xl text-black mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
                {service.title}
              </h3>
              <p className="text-base mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                {service.description}
              </p>
              <a href="#" className="bg-gray-100 text-black text-2xl px-8 py-2 ml-60 rounded-full inline-block font-semibold text-center">
                ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;