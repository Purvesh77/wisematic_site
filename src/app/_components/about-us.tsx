

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import '../styles/about.css'; 

const AboutUs = () => {
  const [animateImages, setAnimateImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateImages(true);
    }, 500); // Delay to start the animations
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section
        className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-16 gap-12"
        style={{
          backgroundColor: "#F7FFFA",
        }}
      >
        {/* Left Side: Image Collage */}
        <div className="relative w-full lg:w-1/2 grid grid-cols-2 gap-4 pl-10">
          {/* Top-left Image */}
          <div className={`relative col-span-1 ${animateImages ? 'image-animation-1' : ''}`}>
            <img
              src="/about4.jpg"
              alt="About Us Image 1"
              className="w-[300px] h-full object-cover rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            />
          </div>
          {/* Top-right Image */}
          <div className={`relative col-span-1 ${animateImages ? 'image-animation-2' : ''}`}>
            <img
              src="/about10.jpeg"
              alt="About Us Image 2"
              className="w-[300px] h-full object-cover rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            />
          </div>
          {/* Bottom-left Image */}
          <div className={`relative col-span-1 ${animateImages ? 'image-animation-3' : ''}`}>
            <img
              src="/about9.jpg"
              alt="About Us Image 3"
              className="w-[300px] h-full object-cover rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            />
          </div>
          {/* Bottom-right Image */}
          <div className={`relative col-span-1 ${animateImages ? 'image-animation-4' : ''}`}>
            <img
              src="/motivating-employees.jpg"
              alt="About Us Image 4"
              className="w-[300px] h-full object-cover rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-4xl pr-20 mt-20 font-serif italic font-bold bg-gradient-to-r from-[#584BF4] to-[#28C5AD] bg-clip-text text-transparent leading-tight mb-6">
            About Us
          </h1>
          <h2 className="text-5xl font-semibold text-black mb-10"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
            Making Your Business More Unique
          </h2>
          <p className="text-base text-gray-700 mb-4"
          style={{ fontFamily: "'Poppins', sans-serif, fontWeight: 500"}}>
            At Wisematic, we recognize that in today’s fast-paced and competitive
            digital landscape, standing out is not just an advantage—it’s
            essential for success. We are passionately committed to helping your
            business achieve its full potential and exceed industry standards.
          </p>
          <p className="text-base text-gray-700 mb-4"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Our comprehensive suite of services is designed to ensure your brand
            doesn’t just survive but thrives and sets new benchmarks.
          </p>
          <p className="text-base text-gray-700"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Partner with us and experience a transformative journey where your
            vision meets our expertise, resulting in a powerful synergy that
            propels your business to new heights. At Wisematic, we don’t just
            make promises—we deliver results that speak for themselves.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] text-white px-10 py-4 rounded-full mt-10 mb-40 inline-block text-center font-bold hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD]"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* New Section for 4 Boxes at the Bottom */}
      <section className="px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 ">
  <div className="border-1 border-[#fff] text-[#fff] px-8 py-4 rounded-lg font-bold flex flex-col items-center shadow-[2px_2px_5px_rgba(255,255,255,0.3),_-2px_2px_5px_rgba(255,255,255,0.3),_2px_-2px_5px_rgba(255,255,255,0.3),_-2px_-2px_5px_rgba(255,255,255,0.3)]">
    <span className="text-8xl text-[#2C2C2C] font-bold" style={{ color: "#000", textShadow: "1px 1px 2px rgba(255, 255, 255, 0.5), -1px 1px 2px rgba(255, 255, 255, 0.5), 1px -1px 2px rgba(255, 255, 255, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.5)" }}>
      <CountUp start={0} end={500} duration={0.5} />+
    </span>
    <span className="text-2xl text-white mt-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
      Project Complete
    </span>
  </div>
  <div className="border-1 border-[#fff] text-[#fff] px-8 py-4 rounded-lg font-bold flex flex-col items-center shadow-[2px_2px_5px_rgba(255,255,255,0.3),_-2px_2px_5px_rgba(255,255,255,0.3),_2px_-2px_5px_rgba(255,255,255,0.3),_-2px_-2px_5px_rgba(255,255,255,0.3)]">
    <span className="text-8xl font-bold" style={{ color: "#000", textShadow: "1px 1px 2px rgba(255, 255, 255, 0.5), -1px 1px 2px rgba(255, 255, 255, 0.5), 1px -1px 2px rgba(255, 255, 255, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.5)" }}>
      <CountUp start={0} end={98} duration={0.5} />%
    </span>
    <span className="text-2xl text-white  mt-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
      Client Retention Ratio
    </span>
  </div>
  <div className="border-1 border-[#fff] text-[#fff] px-8 py-4 rounded-lg font-bold flex flex-col items-center shadow-[2px_2px_5px_rgba(255,255,255,0.3),_-2px_2px_5px_rgba(255,255,255,0.3),_2px_-2px_5px_rgba(255,255,255,0.3),_-2px_-2px_5px_rgba(255,255,255,0.3)]">
    <span className="text-8xl font-bold" style={{ color: "#000", textShadow: "1px 1px 2px rgba(255, 255, 255, 0.5), -1px 1px 2px rgba(255, 255, 255, 0.5), 1px -1px 2px rgba(255, 255, 255, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.5)" }}>
      <CountUp start={0} end={10} duration={0.5} />X
    </span>
    <span className="text-2xl text-white mt-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
      Faster Implementation Time
    </span>
  </div>
  <div className="border-1 border-[#fff] text-[#fff] px-8 py-4 rounded-lg font-bold flex flex-col items-center shadow-[2px_2px_5px_rgba(255,255,255,0.3),_-2px_2px_5px_rgba(255,255,255,0.3),_2px_-2px_5px_rgba(255,255,255,0.3),_-2px_-2px_5px_rgba(255,255,255,0.3)]">
    <span className="text-8xl font-bold" style={{ color: "#000", textShadow: "1px 1px 2px rgba(255, 255, 255, 0.5), -1px 1px 2px rgba(255, 255, 255, 0.5), 1px -1px 2px rgba(255, 255, 255, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.5)" }}>
      <CountUp start={0} end={85} duration={0.5} />%
    </span>
    <span className="text-2xl text-white mt-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
      Clients Achieved ROI in 6 Months
    </span>
  </div>
</section>

    </div>
  );
};

export default AboutUs;
