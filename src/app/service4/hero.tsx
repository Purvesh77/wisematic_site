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
        src="/saas.jpg"
        alt="Hero Image"
        className="absolute z-10 w-[500px] h-[280px] rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>

    {/* Right Section: Heading */}
    <div className="w-full md:w-1/2 text-left">
      <h2 className="text-6xl text-black mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
      Streamline Your Business with Wisematic's Powerful SAAS Solutions 
      </h2>
    </div>
  </div>
</section>

 
  <div className="flex flex-col md:flex-row items-start justify-between ">
  <div className="w-full md:w-1/2 text-left space-y-4 pl-60">
    <h1 className="text-2xl text-gray-900">
    SOFTWARE as a SERVICE</h1>
    <p className="text-6xl text-black"
     style={{ fontFamily: "'Poppins', sans-serif", maxWidth: '400px' }}>
     Empowering Your Business with Custom Applications.
    </p>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 text-left mr-20 pr-20">
  <p className="text-lg text-gray-500 mb-4"
             style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Struggling to connect with your audience and drive sales? Our SAAS empowers you to create personalized customer journeys, automate marketing tasks, and measure campaign performance with precision. By harnessing the power of data-driven insights, you can optimize your marketing efforts, increase conversions, and build lasting customer relationships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-10">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-black text-lg font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Enhanced Productivity</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-black text-lg font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Cutting-Edge Technology</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className=" text-lg text-black font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Exceptional Customer Support</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className=" text-lg text-black font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Revolutionary Design</span>
              </div>
            </div>


  </div>
  </div>
  
    </div>
  )
}

export default Hero
