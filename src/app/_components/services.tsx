

"use client";
import React from "react";
import Link from "next/link";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaRobot, FaBullhorn  } from 'react-icons/fa'; // Import icons

const Services = () => {
  return (
    <div className="bg-[#F7FFFA]"> {/* Overall page background */}
      {/* Header Text */}
      <section className="px-40 pt-40 text-center">
        <h1 className="text-4xl font-serif italic font-bold bg-gradient-to-r from-[#584BF4] to-[#28C5AD] bg-clip-text text-transparent leading-tight mb-6">
          Services
        </h1>
        <h2 className="text-5xl font-semibold text-black mb-4 text-center"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
          Service We Provide
        </h2>
        <p className="text-lg text-gray-700 mb-4 p-10 text-center"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          At Wisematic, we offer a comprehensive suite of services designed to
          elevate your business and ensure lasting success. Our diverse range of
          expertise covers every aspect of the digital landscape, allowing us to
          provide tailored solutions that meet your unique needs.
        </p>
      </section>

      {/* Services Cards */}
      <section className="px-4 pt-10 pb-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#F7FFFA] ml-auto "
        style={{paddingLeft: '180px', paddingRight: '180px'}}
      >
        {/* Technology Consulting Card */}
        <div className="bg-[#2C2C2C] text-white px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold w-[350px] min-h-[28rem] overflow-hidden">
          <div
            className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#28C5AD] to-[#584BF4]"
            style={{
              width: "75px",
              height: "75px",
            }}
          >
            <FaLaptopCode className="text-3xl text-white" /> {/* Icon inside circle */}
          </div>
          <h3 className="text-4xl text-[#28C5AD] mb-3 text-center mt-8"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Technology Consulting</h3>
          <p className="text-center mb-3 mt-3"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Our expert consultants offer strategic guidance and actionable insights, helping you leverage technology to achieve your business goals.
          </p>
          <Link
            href="/service1"
            className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white px-5 py-2 rounded-full inline-block font-semibold text-center mt-auto"
          >
            View More
          </Link>
        </div>

        {/* Application Services Card */}
        <div className="bg-[#2C2C2C] text-white px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold  w-[350px] min-h-[28rem] overflow-hidden">
          <div
            className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#28C5AD] to-[#584BF4]"
            style={{
              width: "75px",
              height: "75px",
            }}
          >
            <FaMobileAlt className="text-3xl text-white" /> {/* Icon inside circle */}
          </div>
          <h3 className="text-4xl text-[#28C5AD] mb-3 mt-8 text-center"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Application Services</h3>
          <p className="text-center mb-3 mt-3"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Whether you need custom application development or maintenance, our team delivers robust and innovative solutions tailored to your specific requirements.
          </p>
          <Link
            href="/service2"
            className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white px-5 py-2 rounded-full inline-block font-semibold text-center mt-auto"
          >
            View More
          </Link>
        </div>

                {/* Software as Service Card */}
        <div className="bg-[#2C2C2C] text-white px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold  w-[350px] min-h-[28rem] overflow-hidden">
        <div
            className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#28C5AD] to-[#584BF4]"
            style={{
              width: "75px",
              height: "75px",
            }}
          >
            <FaCloud className="text-3xl text-white" /> {/* Icon inside circle */}
          </div>
         <h3 className="text-4xl text-[#28C5AD] mb-3 mt-8 text-center"
         style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Software as Service</h3>
         <p className="text-center mb-3 mt-3"
         style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
           Simplify your operations with our scalable and reliable SaaS solutions. We provide tools that empower your business to function seamlessly.
           </p>
           <Link
            href="/service3"
            className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white px-5 py-2 rounded-full inline-block font-semibold text-center mt-auto"
          >
            View More
          </Link>
         </div>

         {/* Data Analytics Card */}
      <div className="bg-[#2C2C2C] text-white px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold  w-[350px] min-h-[28rem] overflow-hidden">
      <div
            className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#28C5AD] to-[#584BF4]"
            style={{
              width: "75px",
              height: "75px",
            }}
          >
            <FaDatabase className="text-3xl text-white" /> {/* Icon inside circle */}
          </div>
           <h3 className="text-4xl text-[#28C5AD] mb-3 mt-8 text-center"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Data Analytics</h3>
           <p className="text-center mb-3 mt-3"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
             Our analytics services provide deep insights that drive strategic decision-making, optimize performance, and uncover new growth opportunities.
           </p>
          <Link
             href="/service4"
             className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white px-5 py-2 rounded-full inline-block font-semibold text-center mt-auto"
          >
            View More
          </Link>
        </div>

         {/* AI & Automation Card */}
         <div className="bg-[#2C2C2C] text-white px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold  w-[350px] min-h-[28rem] overflow-hidden">
         <div
            className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#28C5AD] to-[#584BF4]"
            style={{
              width: "75px",
              height: "75px",
            }}
          >
            <FaRobot className="text-3xl text-white" /> {/* Icon inside circle */}
          </div>
           <h3 className="text-4xl text-[#28C5AD] mb-3 mt-8 text-center"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>AI & Automation</h3>
           <p className="text-center mb-3 mt-3"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Embrace the future with our advanced AI and automation solutions. From streamlining workflows to enhancing customer experiences.
           </p>
          <Link
            href="/service5"
            className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white px-5 py-2 rounded-full inline-block font-semibold text-center mt-auto"
          >
            View More
          </Link>
        </div>

        {/* Digital Marketing Card */}
                 <div className="bg-[#2C2C2C] text-white px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold  w-[350px] min-h-[28rem] overflow-hidden">
                 <div
            className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#28C5AD] to-[#584BF4]"
            style={{
              width: "75px",
              height: "75px",
            }}
          >
            <FaBullhorn  className="text-3xl text-white" /> {/* Icon inside circle */}
          </div>
           <h3 className="text-4xl text-[#28C5AD] mb-3 mt-8 text-center"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Digital Marketing</h3>
           <p className="text-center mb-3 mt-3"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          Amplify your reach & connect with your target audience through innovative data-driven marketing strategies. We craft campaigns that resonate and convert.
           </p>
           <Link
             href="/service6"
            className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white px-5 py-2 rounded-full inline-block font-semibold text-center mt-auto"
          >
            View More
           </Link>
           </div>
      </section>
    </div>
  );
};

export default Services;


// "use client";
// import React from "react";
// import { FaShippingFast, FaSyncAlt, FaCoins, FaUserFriends, FaShieldAlt, FaStar, FaHandshake, FaInfinity, FaBookOpen } from "react-icons/fa";

// const Why = () => {
//   const features = [
//     { text: "Always deliver on commitments", icon: <FaShippingFast /> },
//     { text: "Agile and Flexible", icon: <FaSyncAlt /> },
//     { text: "Cost Effective", icon: <FaCoins /> },
//     { text: "Customer Centric", icon: <FaUserFriends /> },
//     { text: "Integrity", icon: <FaShieldAlt /> },
//     { text: "Quality", icon: <FaStar /> },
//     { text: "True Partnership", icon: <FaHandshake /> },
//     { text: "Long-term relationship focused", icon: <FaInfinity /> },
//     { text: "Transfer of knowledge", icon: <FaBookOpen /> },
//   ];

//   return (
//     <div className="bg-[#F7FFFA] min-h-screen flex flex-col items-center justify-center">
//       {/* Header Text */}
//       <section className="px-40 py-16 text-center">
//         <h1 className="text-4xl font-serif italic font-bold bg-gradient-to-r from-[#584BF4] to-[#28C5AD] bg-clip-text text-transparent leading-tight mb-6">
//           Why Us
//         </h1>
//         <h2 className="text-5xl font-semibold text-[#20D9A1] mb-4 text-center">
//           Why Wisematic
//         </h2>
//         <p className="text-lg text-gray-700 mb-4 text-center">
//           Choosing Wisematic means partnering with a team that values
//           commitment, flexibility, and cost-efficiency. We’re dedicated to your
//           success, driven by a customer-first mindset, unwavering integrity, and
//           exceptional quality.
//         </p>
//       </section>

//       {/* 9 Boxes in 3 Columns */}
//       <section className="px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="bg-[#2C2C2C] text-white px-6 py-8 flex flex-col items-center justify-center rounded-lg shadow-lg"
//           >
//             <div className="text-[#20D9A1] text-4xl mb-4">{feature.icon}</div>
//             <p className="text-center text-lg font-medium">{feature.text}</p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Why;
