
import React from 'react';

const Work = () => {
  return (
    <div>
      <div className="relative z-0 h-screen">
        <div
          className="circlePosition w-[770px] h-[400px] bg-[#20D9A1] rounded-[100%] absolute blur-[100px] top-[35%] left-[10%]"
          style={{ opacity: 0.3 }}
        ></div>
        <div
          className="circlePosition w-[800px] h-[400px] bg-[#5F39FF] rounded-[100%] absolute blur-[100px] top-[35%] left-[40%]"
          style={{ opacity: 0.3 }}
        ></div>

        <section
          className="px-40 pt-40 flex flex-col lg:flex-row items-start justify-between lg:px-40 py-16 gap-10"
          style={{ paddingLeft: '120px', paddingRight: '120px' }}
        >
          <div className="w-full md:w-1/2 text-left space-y-4">
            <h1 className="text-2xl text-gray-900">Our WORK STYLE</h1>
            <h2
              className="text-6xl text-black mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                maxWidth: '600px',
              }}
            >
              How We Work?
            </h2>
            <p className="text-xl text-black pt-40"
             style={{ fontFamily: "'Poppins', sans-serif", maxWidth: '500px',  }}>Wisematic seamlessly integrates with your existing infrastucture, allowing you to effortlessly connect and consolidate data from various sources.</p>
          </div>

          {/* Right side with 4 rectangles in a column */}
          <div className="flex flex-col gap-4 md:w-1/2">
          <div className="bg-white z-10 h-20 rounded-lg flex items-center ">
          <p className="text-gray-400 text-xl pl-10">01.</p>
  <p className="text-black text-xl pl-4">Deep Discovery</p>
</div>
<div className="bg-white z-10 h-20 rounded-lg flex items-center ">
          <p className="text-gray-400 text-xl pl-10">02.</p>
  <p className="text-black text-xl pl-4">Strategic Blueprint</p>
</div>
<div className="bg-white z-10 h-20 rounded-lg flex items-center ">
          <p className="text-gray-400 text-xl pl-10">03.</p>
  <p className="text-black text-xl pl-4">Agile Development and Execution</p>
</div>
<div className="bg-white z-10 h-20 rounded-lg flex items-center ">
          <p className="text-gray-400 text-xl pl-10">04.</p>
  <p className="text-black text-xl pl-4">Launch and Beyond</p>
</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
