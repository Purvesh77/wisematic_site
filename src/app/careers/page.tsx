

'use client'
import React, { useState } from "react";
import Header from "../_components/landing-header";
import JobCardPage from "./jobCard";
import Footer from "../_components/footer";

const Careers = () => {
  const [showJobCategory, setShowJobCategory] = useState(false);
  const [showJobType, setShowJobType] = useState(false);
  const [showJobLocation, setShowJobLocation] = useState(false);

  return (
    <div>
      <Header />
      
      
      <section className="px-40 pt-40 pb-20 ">
        <h1 className="text-white text-4xl font-bold mb-6"
         style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
         Carrers
         <div className="text-white text-sm flex items-center mt-4"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
         <a href="/" >
      Home
    </a>
    <span className="mx-4">&gt;</span>
    <span>Careers</span>
   
  </div>
        </h1>
      </section>


      {/* <section className="flex flex-col items-center justify-center text-center p-40 bg-[#dfeef1]">
  <h1 className="text-4xl font-bold text-[#2C2C2C] mb-4"
   style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Join Our Team, Shape the Future Sentence</h1>
  <p className="text-xl text-[#4D4D4D]"
   style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
    We’re looking for talented individuals to join our dynamic team. Explore exciting career opportunities!
  </p>
</section> */}

<section
  className="relative flex flex-col items-center justify-center text-center p-40 bg-[#dfeef1] overflow-hidden"
>
  {/* Heading and Content */}
  <h1
    className="text-4xl font-bold text-[#2C2C2C] mb-4"
    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
  >
    Join Our Team, Shape the Future
  </h1>
  <p
    className="text-xl text-[#4D4D4D]"
    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
  >
    We’re looking for talented individuals to join our dynamic team. Explore
    exciting career opportunities!
  </p>

  {/* Floating Bubbles */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full opacity-20 animate-float"
        style={{
          width: `${Math.random() * 50 + 20}px`, // Random bubble size
          height: `${Math.random() * 50 + 20}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 5}s`,
        }}
      ></div>
    ))}
  </div>

  {/* Inline CSS */}
  <style jsx>{`
    @keyframes float {
      0% {
        transform: translateY(0);
        opacity: 0.5;
      }
      50% {
        transform: translateY(-20px);
        opacity: 1;
      }
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    .animate-float {
      animation: float infinite linear;
    }
  `}</style>
</section>


      <div className="bg-[#F7FFFA] py-16 ">
      <div className="flex flex-wrap gap-4 items-center justify-center">
{/* Search Bar */}
<input
  type="text"
  placeholder="Search for jobs"
  className="border border-gray-300 rounded-md px-4 m-0 py-2 text-gray-400 w-full max-w-sm"
/>
{/* Job Category Dropdown */}
<div
  className="relative"
  onMouseEnter={() => setShowJobCategory(true)}
  onMouseLeave={() => setShowJobCategory(false)}
>
  <div className="cursor-pointer px-4 py-2 border bg-white text-gray-400 border-gray-300 rounded-md hover:bg-gray-100">
    All Job Categories
  </div>
  {showJobCategory && (
    <div
      className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md z-50"
      style={{ minWidth: "200px" }}
    >
      <div className="flex flex-col">
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          Engineering
        </span>
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          Design
        </span>
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          Marketing
        </span>
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          Product
        </span>
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          Sales
        </span>
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          Operations
        </span>
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          HR
        </span>
      </div>
    </div>
  )}
</div>

{/* Job Type Dropdown */}
<div
  className="relative"
  onMouseEnter={() => setShowJobType(true)}
  onMouseLeave={() => setShowJobType(false)}
>
  <div className="cursor-pointer px-4 py-2 border bg-white text-gray-400 border-gray-300 rounded-md hover:bg-gray-100">
    All Job Types
  </div>
  {showJobType && (
    <div
      className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md z-50"
      style={{ minWidth: "200px" }}
    >
      <div className="flex flex-col">
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          Full-time
        </span>
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          Co-op
        </span>
      </div>
    </div>
  )}
</div>

{/* Job Location Dropdown */}
<div
  className="relative"
  onMouseEnter={() => setShowJobLocation(true)}
  onMouseLeave={() => setShowJobLocation(false)}
>
  <div className="cursor-pointer px-4 py-2 border bg-white text-gray-400 border-gray-300 rounded-md hover:bg-gray-100">
    All Locations
  </div>
  {showJobLocation && (
    <div
      className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md z-50"
      style={{ minWidth: "200px" }}
    >
      <div className="flex flex-col">
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          Hybrid
        </span>
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          Remote
        </span>
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
          Toronto
        </span>
        <span className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100 cursor-pointer">
        Vancouver
        </span>
      </div>
    </div>
  )}
</div>
</div>

<JobCardPage />
</div>
<div className="bg-[#F7FFFA] "></div>
 <Footer/>
    </div>
  );
};

export default Careers;