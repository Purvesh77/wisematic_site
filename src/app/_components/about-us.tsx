

// "use client";
// import CountUp from "react-countup";
// import '../styles/about.css'; 

// const AboutUs = () => {
 
//   return (
//     <div>
   
//       <div className="border shadow-lg mt-2 -mb-10"></div>
//       {/* New Section for 4 Boxes at the Bottom */}
//       <section className="px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 ">
//   <div className=" px-8 py-4 rounded-lg flex flex-col items-center ">
//     <span className="text-5xl text-[#303030] ">
//       <CountUp start={0} end={500} duration={0.5} />+ project complete
//     </span>
//     <span className="text-base text-gray-700 mt-2" style={{ fontFamily: "'Poppins', sans-serif"}}>
//       Using Wisematic&apos;s solutions and loving it!
//     </span>
//   </div>

//   <div className="border-1 border-[#fff] text-[#fff] mr-20 -px-20 py-4 rounded-lg flex flex-col items-center ">
//     <span className="text-7xl text-[#303030]">
//       <CountUp start={0} end={98} duration={0.5} />%
//     </span>
//     <span className="text-xl text-gray-700  mt-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
//       CLIENT RETENTION RATIO
//     </span>
//   </div>

//   <div className="border-1 border-[#fff] text-[#fff] py-4 -px-60 -ml-40 rounded-lg flex flex-col items-center ">
//     <span className="text-7xl text-[#303030]">
//       <CountUp start={0} end={10} duration={0.5} />X
//     </span>
//     <span className="text-xl text-gray-700 mt-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
//       FASTER IMPLEMENTATION TIME
//     </span>
//   </div>

//   <div className="border-1 border-[#fff] text-[#fff]  py-4 -ml-40 -px-80 rounded-lg flex flex-col items-center ">
//     <span className="text-7xl text-[#303030]">
//       <CountUp start={0} end={85} duration={0.5} />%
//     </span>
//     <span className="text-xl text-gray-700 mt-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
//       CLIENTS ACHIEVED ROI IN 6 MONTHS
//     </span>
//   </div>
// </section>
// <div className="border shadow-lg -mt-10"></div>
//     </div>
//   );
// };

// export default AboutUs;

"use client";
import CountUp from "react-countup";
import "../styles/about.css";

const AboutUs = () => {
  return (
    <div className="bg-black">
      {/* Top Border */}
     

      {/* New Section for 4 Boxes */}
      <section className="px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Box 1 */}
        <div className="px-6 py-8 bg-white/30 text-white text-center backdrop-blur-lg shadow-lg rounded-lg flex flex-col items-center">
          <span className="text-5xl font-bold text-white mb-2 z-10 relative">
            <CountUp start={0} end={500} duration={0.5} />+
          </span>
          <span
            className="text-center z-10 relative text-white text-sm sm:text-base"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Using Wisematic&apos;s solutions and loving it!
          </span>
        </div>

        {/* Box 2 */}
        <div className="px-6 py-8 bg-white/30 text-white text-center backdrop-blur-lg shadow-lg rounded-lg flex flex-col items-center">
          <span className="text-6xl font-bold text-white mb-2">
            <CountUp start={0} end={98} duration={0.5} />%
          </span>
          <span
            className="text-center text-white text-sm sm:text-base font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            CLIENT RETENTION RATIO
          </span>
        </div>

        {/* Box 3 */}
        <div className="px-6 py-8 bg-white/30 text-white text-center backdrop-blur-lg shadow-lg rounded-lg flex flex-col items-center">
          <span className="text-6xl font-bold text-white mb-2">
            <CountUp start={0} end={10} duration={0.5} />X
          </span>
          <span
            className="text-center text-white text-sm sm:text-base font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            FASTER IMPLEMENTATION TIME
          </span>
        </div>

        {/* Box 4 */}
        <div className="px-6 py-8 bg-white/30 text-white text-center backdrop-blur-lg shadow-lg rounded-lg flex flex-col items-center">
          <span className="text-6xl font-bold text-white mb-2">
            <CountUp start={0} end={85} duration={0.5} />%
          </span>
          <span
            className="text-center text-white text-sm sm:text-base font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            CLIENTS ACHIEVED ROI IN 6 MONTHS
          </span>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
