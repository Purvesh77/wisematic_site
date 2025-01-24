import React from 'react'

const About = () => {
  return (
    <div className='bg-black'>
       <div className="flex flex-col md:flex-row items-start justify-between ">
  {/* Left Section */}
  <div className="w-full md:w-1/2 text-left space-y-4 pl-60">
    <h1 className="text-2xl text-gray-200">About Us</h1>
    <p className="text-6xl text-white"
     style={{ fontFamily: "'Poppins', sans-serif", maxWidth: '400px' }}>
      Making your business more UNIQUE
    </p>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 text-left mr-20 pr-40">
    <p className="text-lg text-gray-400 leading-8 mb-6">
    At Wisematic, we recognize that in today&apos;s fast-paced and competitive digital landscape, standing out is not just an advantage—it&apos;s essential for success. We are passionately committed to helping your business achieve its full potential and exceed industry standards. 
    </p>
    <p className="text-lg text-gray-400 leading-8 mb-6">
Our comprehensive suite of services is designed to ensure your brand doesn&apos;t just survive but thrives and sets new benchmarks.
</p>
  </div>
</div>
<p className="text-lg text-gray-400 leading-8 mt-2 pl-60 pr-20">
Partner with us and experience a transformative journey where your vision meets our expertise, resulting in a powerful synergy that propels your business to new heights. At Wisematic, we don&apos;t just make promises—we deliver results that speak for themselves.
    </p>

    </div>
  )
}

export default About
