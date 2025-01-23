import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Hero = () => {
  return (
    <div>
       
       <section className="px-40 pt-20 justify-between lg:px-40 py-16 gap-10" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
       <p className="text-lg text-gray-700 text-center "
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
       YOUR PARTNER IN APP DEVELOPMENT
        </p>
  <div className="flex flex-col md:flex-row items-center justify-between">
    {/* Left Section: Image and Circles */}
    <div className="relative w-full md:w-1/2 h-[500px]  mb-10 md:mb-0">
      {/* Circle Backgrounds */}
      <div className="circlePosition w-[500px] h-[400px] bg-[#20D9A1] rounded-[100%] absolute blur-[100px] top-[15%] left-[0%]" style={{ opacity: 0.3 }}></div>
      <div className="circlePosition w-[500px] h-[400px] bg-[#5F39FF] rounded-[100%] absolute blur-[100px] top-[15%] left-[30%]" style={{ opacity: 0.3 }}></div>

      {/* Image */}
      <img
        src="/dataAnalytics.jpg"
        alt="Hero Image"
        className="absolute z-10 w-[500px] h-[280px] rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>

    {/* Right Section: Heading */}
    <div className="w-full md:w-1/2 text-left">
      <h2 className="text-6xl text-black mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
      Unlock the Power of Your Data with Wisematic

      </h2>
    </div>
  </div>
</section>

 
  <div className="flex flex-col md:flex-row items-start justify-between ">
  <div className="w-full md:w-1/2 text-left space-y-4 pl-60">
    <h1 className="text-2xl text-gray-900">
    DATA ANALYTICS</h1>
    <p className="text-6xl text-black"
     style={{ fontFamily: "'Poppins', sans-serif", maxWidth: '400px' }}>
     Unlock the Power of AI and Automation.
    </p>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 text-left mr-20 pr-20">
  <p className="text-lg text-gray-500 mb-4"
             style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            At Wisematic, we transform raw data into actionable insights that drive business growth. Our expert team leverages advanced techniques to deliver predictive modeling, data visualization, and customer segmentation solutions tailored to your specific needs.A solid data strategy is essential for harnessing the full potential of your data. Wisematic designs data architectures that support your business goals and ensure data accessibility, integrity, and security. Our experts work closely with you to create a roadmap for data-driven success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-10">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-black text-lg font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Data-Driven Success</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-black text-lg font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>End-to-End Expertise</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className=" text-lg text-black font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Measurable Results</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className=" text-lg text-black font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Cutting-Edge Technology</span>
              </div>
            </div>


  </div>
  </div>
  
    </div>
  )
}

export default Hero
