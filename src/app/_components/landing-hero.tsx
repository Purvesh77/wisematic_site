

"use client";
import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-between text-white h-screen px-8 lg:px-16"
      style={{
        backgroundImage: "url('/black_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for Dim Effect */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        aria-hidden="true"
      ></div>

      {/* Hero Content (Text on Left) */}
      <div
        className="relative z-10 w-full lg:w-1/2 text-left max-w-xl pb-40"
        style={{ marginLeft: "100px" }}
      >
        <h1 className="text-3xl font-serif italic font-thin mb-4 mt-40">Wise and Stealler</h1>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#584BF4] to-[#28C5AD] bg-clip-text text-transparent">
            Wisematic's Solution:
          </span>
          <br />
          <span>Tangible Results for Business!</span>
        </h1>

        <p className="text-lg text-gray-300 mb-10"
         style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
          Elevate your business with Wisematic’s innovative and reliable
          solutions. Dynamic solutions for tangible business success.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-6">
          {/* Uptime Guarantee Box */}
          <div className="border-1 border-[#fff] text-[#fff] px-4 py-4 rounded-lg font-bold flex flex-col items-center shadow-[2px_2px_5px_rgba(255,255,255,0.3),_-2px_2px_5px_rgba(255,255,255,0.3),_2px_-2px_5px_rgba(255,255,255,0.3),_-2px_-2px_5px_rgba(255,255,255,0.3)]">
  <span
    className="text-5xl font-bold"
    style={{
      color: "#000",
      textShadow: "1px 1px 2px rgba(255, 255, 255, 0.5), -1px 1px 2px rgba(255, 255, 255, 0.5), 1px -1px 2px rgba(255, 255, 255, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.5)"
    }}
  >
    <CountUp start={0} end={99} duration={0.5} />%
  </span>
  <span
    className="text-lg text-white"
    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
  >
    Uptime Guarantee
  </span>
</div>

        <div className="border-1 border-[#fff] text-[#fff] px-4 py-4 rounded-lg font-bold flex flex-col items-center shadow-[2px_2px_5px_rgba(255,255,255,0.3),_-2px_2px_5px_rgba(255,255,255,0.3),_2px_-2px_5px_rgba(255,255,255,0.3),_-2px_-2px_5px_rgba(255,255,255,0.3)]">
  <span
    className="text-5xl font-bold"
    style={{
      color: "#000",
      textShadow: "1px 1px 2px rgba(255, 255, 255, 0.5), -1px 1px 2px rgba(255, 255, 255, 0.5), 1px -1px 2px rgba(255, 255, 255, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.5)"
    }}
  >
    <CountUp start={0} end={200} duration={0.5} />+
  </span>
  <span
    className="text-lg text-white"
    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
  >
    Custom Solutions Tailored
  </span>
</div>

        </div>

        {/* Explore Now Button */}
        <Link
          href="/contact"
          className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white px-10 py-4 rounded-full mt-10 inline-block text-center font-bold"
        >
          Explore Now
        </Link>
      </div>

      {/* Hero Image Collage (Images on Right) */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-end">
        {/* Image Collage Container */}
        <div className="relative w-full h-full grid grid-cols-2 grid-rows-2 gap-4">
          {/* Image 1 */}
          <motion.div
            className="relative row-span-2 col-span-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/work9.jpeg"
              alt="Hero Image 1"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="relative col-span-1 row-span-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <img
              src="/work1.jpg" // Update the second image source
              alt="Hero Image 2"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="relative col-span-1 row-span-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          >
            <img
              src="/work2.png" // Update the third image source if necessary
              alt="Hero Image 3"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
