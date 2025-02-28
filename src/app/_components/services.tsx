
"use client";
import React from "react";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaRobot, FaBullhorn } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-5xl text-white mb-4" />,
      title: "Technology Consulting",
      description:
        "Our expert consultants offer strategic guidance and actionable insights, helping you leverage technology to achieve your business goals.",
        path: "/service1",
    },
    {
      icon: <FaMobileAlt className="text-5xl text-white mb-4" />,
      title: "Application Services",
      description:
        "Whether you need custom application development or maintenance, our team delivers robust and innovative solutions tailored to your specific requirements.",
        path: "/service2",
      },
    {
      icon: <FaCloud className="text-5xl text-white mb-4" />,
      title: "Software as Service",
      description:
        "Simplify your operations with our scalable and reliable SaaS solutions. We provide tools that empower your business to function seamlessly.",
        path: "/service3",
      },
    {
      icon: <FaDatabase className="text-5xl text-white mb-4" />,
      title: "Data Analytics",
      description:
        "Our analytics services provide deep insights that drive strategic decision-making, optimize performance, and uncover new growth opportunities.",
        path: "/service5",
      },
    {
      icon: <FaRobot className="text-5xl text-white mb-4" />,
      title: "AI & Automation",
      description:
        "Embrace the future with our advanced AI and automation solutions. From streamlining workflows to enhancing customer experiences.",
        path: "/service4",
      },
    {
      icon: <FaBullhorn className="text-5xl text-white mb-4" />,
      title: "Digital Marketing",
      description:
        "Amplify your reach & connect with your target audience through innovative data-driven marketing strategies. We craft campaigns that resonate and convert.",
        path: "/service6",
      },
  ];

  return (
    <div className="relative flex justify-center items-center px-4 sm:px-10 lg:px-20 py-16 pt-20 bg-black">
      {/* Background Circles */}
     

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl">
        {/* Header Text */}
        <section className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-6xl text-white mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              maxWidth: "700px",
            }}
          >
            Provide powerful solutions at all times.
          </h2>
          <p
            className="text-sm sm:text-base lg:text-lg text-gray-200 ml-0 lg:ml-4 mt-4 lg:mt-10"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            Supercharge your productivity and optimize your workflow with Wisematic.
          </p>
        </section>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-lg bg-white/30 text-white text-center backdrop-blur-lg  rounded-lg  p-6 sm:p-8 flex flex-col items-start justify-between transition-transform transform hover:scale-105 hover:shadow-2xl relative"
            >
              {service.icon}
              <h3
                className="text-xl md:text-2xl text-white mb-3"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm md:text-base text-gray-300 mb-6"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                }}
              >
                {service.description}
              </p>
              <a
                href={service.path}
                className="bg-gray-200 text-black text-sm md:text-base px-6 py-2 rounded-full inline-block font-semibold text-center self-start mt-auto"
                style={{
                  marginTop: "auto",
                }}
              >
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
