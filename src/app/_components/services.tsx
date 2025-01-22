

"use client";
import React from "react";
import Link from "next/link";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaRobot, FaBullhorn  } from 'react-icons/fa'; // Import icons

const Services = () => {
  return (
    <div> {/* Overall page background */}
      {/* Header Text */}
      
      <section className="px-40 pt-40 flex flex-col lg:flex-row items-center justify-between lg:px-40 py-16 gap-10"
      style={{paddingLeft: '120px', paddingRight: '120px'}}>
        <h2 className="text-6xl  text-black mb-4 "
        style={{ fontFamily: "'Poppins', sans-serif", maxWidth: '600px',  }}>
         Provide powerful solutions
         at all times.
        </h2>
        <div className="flex flex-col ">

        <p className="text-lg text-gray-700  p-10 mt-10 "
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
         Supercharge your productivity and optimize your workflow with Wisematic.
        </p>
        </div>
      </section>

      {/* Services Cards */}
      <div className="relative z-0">
      <div
    className="circlePosition w-[750px] h-[600px] bg-[#20D9A1] rounded-[100%] absolute  blur-[100px] top-[15%] left-[10%]"
    style={{ opacity: 0.3}}
  ></div>
       <div
    className="circlePosition w-[750px] h-[600px] bg-[#5F39FF] rounded-[100%] absolute  blur-[100px] top-[15%] left-[40%]"
    style={{ opacity: 0.3}}
  ></div>
      <section className="px-4 pt-10 pb-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-auto "
        style={{paddingLeft: '120px', paddingRight: '120px'}}
      >
        {/* Technology Consulting Card */}
        <div className="shadow-lg z-10 bg-white text-gray-700 px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold w-[400px] h-[380px] overflow-hidden">
        
            <FaLaptopCode className="text-6xl text-[#303030] -ml-60" /> 
          
          <h3 className="text-3xl text-black mb-3 text-center mt-8"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Technology Consulting</h3>
          <p className="text-center mb-3 mt-3"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Our expert consultants offer strategic guidance and actionable insights, helping you leverage technology to achieve your business goals.
          </p>
          <Link
            href="/service1"
            className="bg-gray-100 text-white px-8 py-2 rounded-full inline-block font-semibold text-center mt-auto -mr-60"
          >
             <span className="ml-2 text-[#303030] text-3xl">↗</span>
          </Link>
        </div>

        {/* Application Services Card */}
        <div className="shadow-lg z-10 bg-white text-gray-700 px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold w-[400px] h-[380px] overflow-hidden">
         
            <FaMobileAlt className="text-6xl text-[#303030] -ml-60" /> {/* Icon inside circle */}
         
          <h3 className="text-3xl text-black mb-3 mt-8 text-center "
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Application Services</h3>
          <p className="text-center mb-3 mt-3"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Whether you need custom application development or maintenance, our team delivers robust and innovative solutions tailored to your specific requirements.
          </p>
          <Link
            href="/service2"
            className="bg-gray-100 text-white px-8 py-2 rounded-full inline-block font-semibold text-center mt-auto -mr-60"
          >
            <span className="ml-2 text-[#303030] text-3xl">↗</span>
          </Link>
        </div>

                {/* Software as Service Card */}
        <div className="shadow-lg z-10 bg-white text-gray-700 px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold w-[400px] h-[380px] overflow-hidden">
       
            <FaCloud className="text-6xl text-[#303030] -ml-60"  /> {/* Icon inside circle */}
        
         <h3 className="text-3xl text-black mb-3 mt-8 text-center "
         style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Software as Service</h3>
         <p className="text-center mb-3 mt-3"
         style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
           Simplify your operations with our scalable and reliable SaaS solutions. We provide tools that empower your business to function seamlessly.
           </p>
           <Link
            href="/service3"
            className="bg-gray-100 text-white px-8 py-2 rounded-full inline-block font-semibold text-center mt-auto -mr-60"
          >
            <span className="ml-2 text-[#303030] text-3xl">↗</span>
          </Link>
         </div>

         {/* Data Analytics Card */}
      <div className="shadow-lg z-10 bg-white text-gray-700 px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold w-[400px] h-[380px] overflow-hidden">
     
            <FaDatabase className="text-6xl text-[#303030] -ml-60" /> {/* Icon inside circle */}
          
           <h3 className="text-3xl text-black mb-3 mt-8 text-center -ml-20"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Data Analytics</h3>
           <p className="text-center mb-3 mt-3"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
             Our analytics services provide deep insights that drive strategic decision-making, optimize performance, and uncover new growth opportunities.
           </p>
          <Link
             href="/service4"
             className="bg-gray-100 text-white px-8 py-2 rounded-full inline-block font-semibold text-center mt-auto -mr-60"
          >
            <span className="ml-2 text-[#303030] text-3xl">↗</span>
          </Link>
        </div>

         {/* AI & Automation Card */}
         <div className="shadow-lg z-10 bg-white text-gray-700 px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold w-[400px] h-[380px] overflow-hidden">
        
            <FaRobot className="text-6xl text-[#303030] -ml-60" /> {/* Icon inside circle */}
         
           <h3 className="text-3xl text-black mb-3 mt-8 text-center -ml-20"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>AI & Automation</h3>
           <p className="text-center mb-3 mt-3"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Embrace the future with our advanced AI and automation solutions. From streamlining workflows to enhancing customer experiences.
           </p>
          <Link
            href="/service5"
            className="bg-gray-100 text-white px-8 py-2 rounded-full inline-block font-semibold text-center mt-auto -mr-60"
          >
            <span className="ml-2 text-[#303030] text-3xl">↗</span>
          </Link>
        </div>

        {/* Digital Marketing Card */}
                 <div className="shadow-lg z-10 bg-white text-gray-700 px-4 py-6 flex flex-col items-center justify-between rounded-lg font-bold w-[400px] h-[380px] overflow-hidden">
                 
            <FaBullhorn  className="text-6xl text-[#303030] -ml-60" /> {/* Icon inside circle */}
         
           <h3 className="text-3xl text-black mb-3 mt-8 text-center -ml-20"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Digital Marketing</h3>
           <p className="text-center mb-3 mt-3"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          Amplify your reach & connect with your target audience through innovative data-driven marketing strategies. We craft campaigns that resonate and convert.
           </p>
           <Link
             href="/service6"
            className="bg-gray-100 text-white px-8 py-2 rounded-full inline-block font-semibold text-center mt-auto -mr-60"
          >
            <span className="ml-2 text-[#303030] text-3xl">↗</span>
           </Link>
           </div>
      </section>
      </div>
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
