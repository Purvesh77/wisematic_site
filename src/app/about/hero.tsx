import React from 'react'

const Hero = () => {
  return (
    <div>
       
       <section className="px-40 pt-20 text-center justify-between lg:px-40 py-16 gap-10"
      style={{paddingLeft: '120px', paddingRight: '120px'}}>
         <p className="text-lg text-gray-700  p-10 mt-10 "
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
         55,000+ TRUSTED BUSINESSES
        </p>
        <h2 className="text-6xl  text-black mb-4 "
        style={{ fontFamily: "'Poppins', sans-serif"  }}>
        We&apos;re powering the future of business with Wisematic
        </h2>
      </section>

{/* Image Section */}
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
  src="/office.jpg"
  alt="Hero Image"
  className="absolute z-10 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1400px] px-20 h-[500px]"
/>
  </div>
    </div>
  )
}

export default Hero
