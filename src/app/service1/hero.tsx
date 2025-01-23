import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Hero = () => {
  return (
    <div>
       
       <section className="px-40 pt-20 text-center justify-between lg:px-40 py-16 gap-10"
      style={{paddingLeft: '120px', paddingRight: '120px'}}>
         {/* <p className="text-lg text-gray-700  p-10 mt-10 "
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
         55,000+ TRUSTED BUSINESSES
        </p> */}
        <h2 className="text-6xl  text-black mb-4 "
        style={{ fontFamily: "'Poppins', sans-serif"  }}>
        Unleash Your Business Potential: Wisematic Technology Consultion
        </h2>
      </section>

  <div className="relative z-0 h-screen">
      <div
    className="circlePosition w-[770px] h-[620px] bg-[#20D9A1] rounded-[100%] absolute  blur-[100px] top-[0%] left-[10%]"
    style={{ opacity: 0.3}}
  ></div>
       <div
    className="circlePosition w-[770px] h-[620px] bg-[#5F39FF] rounded-[100%] absolute  blur-[100px] top-[0%] left-[40%]"
    style={{ opacity: 0.3}}
  ></div>
   <img
  src="/consult.jpg"
  alt="Hero Image"
  className="absolute z-10 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1400px] px-20 h-[500px]"
/>
  </div>

  <div className="flex flex-col md:flex-row items-start justify-between ">
  <div className="w-full md:w-1/2 text-left space-y-4 pl-60">
    <h1 className="text-2xl text-gray-900">TECH CONSULTATION</h1>
    <p className="text-6xl text-black"
     style={{ fontFamily: "'Poppins', sans-serif", maxWidth: '500px' }}>
     Providing business solutions tailored to your needs.
    </p>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 text-left mr-20 pr-20">
  <p className="text-lg text-gray-500 mb-4"
             style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              In today’s dynamic technological landscape, navigating the right solutions can be a daunting task. At Wisematic, we bridge that gap, transforming technology into a strategic advantage for your business.
            </p>
            <p className="text-lg text-gray-500 mb-4"
             style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Our expert technology consultants are more than just advisors; they’re your innovation architects. We take a collaborative approach, delving deep into your unique needs and goals.
            </p>
            <p className="text-lg text-gray-500 mb-4"
             style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
              Here’s what sets Wisematic’s technology consultation apart:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-10">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-black text-lg font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Holistic Vision</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-black text-lg font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Future-Proof Strategies</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className=" text-lg text-black font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Agile Implementation</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#303030] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className=" text-lg text-black font-bold"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Tailored Recommendations</span>
              </div>
            </div>


  </div>
  </div>
  
    </div>
  )
}

export default Hero
