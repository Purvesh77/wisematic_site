import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black'>
       
       <section className="px-40 pt-20 text-center justify-between lg:px-40 py-16 gap-10"
      style={{paddingLeft: '120px', paddingRight: '120px'}}>
         <p className="text-lg text-gray-200  p-10 mt-10 "
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
         55,000+ TRUSTED BUSINESSES
        </p>
        <h2 className="text-6xl  text-white mb-4 "
        style={{ fontFamily: "'Poppins', sans-serif"  }}>
        We&apos;re powering the future of business with Wisematic
        </h2>
      </section>

{/* Image Section */}
      <div className="relative z-0 h-screen">
      
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
