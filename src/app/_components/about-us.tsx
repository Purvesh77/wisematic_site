

"use client";
import CountUp from "react-countup";
import '../styles/about.css'; 

const AboutUs = () => {
 
  return (
    <div>
   
      <div className="border shadow-lg mt-2 -mb-10"></div>
      {/* New Section for 4 Boxes at the Bottom */}
      <section className="px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 ">
  <div className=" px-8 py-4 rounded-lg flex flex-col items-center ">
    <span className="text-5xl text-[#303030] ">
      <CountUp start={0} end={500} duration={0.5} />+ project complete
    </span>
    <span className="text-base text-gray-700 mt-2" style={{ fontFamily: "'Poppins', sans-serif"}}>
      Using Wisematic&apos;s solutions and loving it!
    </span>
  </div>

  <div className="border-1 border-[#fff] text-[#fff] mr-20 -px-20 py-4 rounded-lg flex flex-col items-center ">
    <span className="text-7xl text-[#303030]">
      <CountUp start={0} end={98} duration={0.5} />%
    </span>
    <span className="text-xl text-gray-700  mt-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
      CLIENT RETENTION RATIO
    </span>
  </div>

  <div className="border-1 border-[#fff] text-[#fff] py-4 -px-60 -ml-40 rounded-lg flex flex-col items-center ">
    <span className="text-7xl text-[#303030]">
      <CountUp start={0} end={10} duration={0.5} />X
    </span>
    <span className="text-xl text-gray-700 mt-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
      FASTER IMPLEMENTATION TIME
    </span>
  </div>

  <div className="border-1 border-[#fff] text-[#fff]  py-4 -ml-40 -px-80 rounded-lg flex flex-col items-center ">
    <span className="text-7xl text-[#303030]">
      <CountUp start={0} end={85} duration={0.5} />%
    </span>
    <span className="text-xl text-gray-700 mt-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
      CLIENTS ACHIEVED ROI IN 6 MONTHS
    </span>
  </div>
</section>
<div className="border shadow-lg -mt-10"></div>
    </div>
  );
};

export default AboutUs;
