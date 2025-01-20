"use client";
import Link from "next/link";
import Header from "../_components/landing-header";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaBullhorn, FaSearch, FaMap, FaSync, FaRocket
} from "react-icons/fa";
import { useState } from "react";
import Footer from "../_components/footer";

const AboutUsDetail = () => {
  
  const services = {
    service1: {
      heading: "Tech Consultation",
      image: "/techConsult.jpeg", // Replace with your image path
      description: (
        <>
          <p className="text-base text-gray-500"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Unleash Your Business’s Potential.</p>
          <p className="text-base text-gray-800 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            We’re not just tech consultants; we’re innovation catalysts. Together, let's build a future-proof business. Envision a world where technology doesn’t just support your business—it propels it forward.
            Every click, every line of code, and every connection takes you one step closer to your boldest ambitions. This is the future we’re creating with you.
          </p>
          <p className="text-base text-gray-500 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Are you ready to rewrite your business story?
          </p>
        </>
      ),
    },
    
    
    service2: {
      heading: "App Development",
      image: "/appDev.jpg", // Replace with your image path
      description: (
        <>
          <p className="text-base text-gray-500"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Ignite Your Digital Vision.</p>
          <p className="text-base text-gray-800 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          We’re not just developers; we’re digital artisans crafting bespoke solutions. From concept to creation, we turn your ideas into extraordinary digital experiences. Let’s build something truly remarkable together.
          </p>
          <p className="text-base text-gray-500 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          Have any digital vision in your mind? Let’s connect!!
          </p>
        </>
      ),
    },
    service3: {
      heading: "Automation Solutions",
      image: "/automation.jpg", // Replace with your image path
      description: (
        <>
          <p className="text-base text-gray-500"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Revolutionize Your Business.</p>
          <p className="text-base text-gray-800 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          We’re not just AI and automation experts; we’re your future engineers. Imagine a world where intelligent machines amplify human potential. That’s the reality we’re building together. Let’s harness the power of AI and automation to transform your business and outpace the competition.
          </p>
          <p className="text-base text-gray-500 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          Are you ready to embark on this extraordinary journey?
          </p>
        </>
      ),
    },
    service4: {
      heading: "SaaS Solutions",
      image: "/saas.jpg", // Replace with your image path
      description: (
        <>
          <p className="text-base text-gray-500"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Accelerate Your Business, Simplify Your World !!</p>
          <p className="text-base text-gray-800 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          We’re not just software providers; we’re business enablers. Imagine seamless operations powered by intelligent solutions. That’s the future we deliver. Our SaaS solutions are more than software; they’re strategic assets designed to boost efficiency and drive growth. 
          </p>
          <p className="text-base text-gray-500 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          Let’s partner to unlock your business’s full potential.
          </p>
        </>
      ),
    },
    service5: {
      heading: "Data Analytics",
      image: "/dataAnalytics.jpg", // Replace with your image path
      description: (
        <>
          <p className="text-base text-gray-500"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Uncover Your Data’s Potential.</p>
          <p className="text-base text-gray-800 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          We’re not just data analysts; we’re insight architects. Imagine transforming raw data into actionable intelligence. That’s our expertise. Our data analytics solutions are more than reports; they’re strategic blueprints for growth.
          </p>
          <p className="text-base text-gray-500 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          Let’s unlock the hidden value in your data together.
          </p>
        </>
      ),
    },
    service6: {
      heading: "Digital Marketing",
      image: "/digitalMarketing.jpg", // Replace with your image path
      description: (
        <>
          <p className="text-base text-gray-500"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Dominate the Digital Landscape.</p>
          <p className="text-base text-gray-800 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          We’re not just digital marketers; we’re growth architects. Imagine a world where every click, every impression, and every conversion drives your business forward. That’s the digital world we’ll create for you. Our strategies are more than tactics; they’re investments in your future success. 
          </p>
          <p className="text-base text-gray-500 mt-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          Let’s build a digital empire together.
          </p>
        </>
      ),
    },
  };

  // State to track the selected service
  const [selectedService, setSelectedService] = useState(services.service1);

  return (
   
    <div>
      <Header />
            {/* Custom About Us Header Section with Hero Image */}
            <section className="px-40 pt-40 pb-20 ">
        <h1 className="text-white text-4xl font-bold mb-6"
         style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
         About US
         <div className="text-white text-sm flex items-center mt-4"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
         <a href="/" >
      Home
    </a>
    <span className="mx-4">&gt;</span>
    <span>About Us</span>
   
  </div>
        </h1>
      </section>

      <div className="flex items-center justify-between p-20 bg-[#dfeef1]">
  {/* Left Image */}
  <div className="w-1/2 pt-10 pl-20">
    <img
      src="/about11.jpg" // Replace with your image URL
      alt="Descriptive alt text"
     className="w-[600px] h-[350px] object-cover rounded-lg"
    />
  </div>

  Right Text
  <div className="w-1/2 pl-10 pr-20">
  <h1
  className="text-4xl pr-20 mt-20 font-serif italic bg-gradient-to-r from-[#584BF4] to-[#28C5AD] bg-clip-text text-transparent leading-tight mb-6"
  style={{
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 100, // Adjusted for better boldness
    letterSpacing: '2px', // Adding letter spacing for a spacious look
    textShadow: '1px 1px 2px rgba(0.2, 0.2, 0.2, 0.2)', // Adding a subtle shadow for depth
    transition: 'all 0.3s ease-in-out', // Smooth transition for hover effects
  }}
>
  About Us
</h1>

  <h1 className="text-5xl text-black 700 mb-10"
   style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Making Your Business More Unique </h1> 
    <p className="text-base text-gray-500 mb-4 opacity-0 animate-fadeIn"
     style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
      At Wisematic, we recognize that in today’s fast-paced and competitive
      digital landscape, standing out is not just an advantage—it’s essential
      for success. We are passionately committed to helping your business
      achieve its full potential and exceed industry standards.
    </p>
    <p className="text-base text-gray-500 mb-4 opacity-0 animate-fadeIn"
     style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
      Our comprehensive suite of services is designed to ensure your brand
      doesn’t just survive but thrives and sets new benchmarks.
    </p>
    <p className="text-base text-gray-500 opacity-0 animate-fadeIn"
     style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
      Partner with us and experience a transformative journey where your vision
      meets our expertise, resulting in a powerful synergy that propels your
      business to new heights. At Wisematic, we don’t just make promises—we
      deliver results that speak for themselves.
    </p>
  </div>
</div>
{/* Inline CSS for animations */}
<style jsx>{`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .animate-fadeIn {
    animation: fadeIn 1.5s ease-in-out forwards;
    animation-delay: 0.5s;
  }
`}</style>

       {/* Info Boxes Section */}
       <div className=" pb-20 text-white bg-[#dfeef1]">
         <div className="container mx-auto px-20"
         style={{paddingLeft: '130px'}}>
         
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
             {/* Box 1 */}
              <div className="flex flex-col items-center bg-[#2C2C2C] p-6 w-[380px] h-[200px] rounded-lg shadow-md hover:scale-105 transition-all duration-300">

               <h3 className="text-3xl text-[#28C5AD] font-bold mb-4"
               style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Innovate with Insight</h3>
               <p className="text-center text-base"
               style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
               Harness the power of technology and insight to drive your business forward. Our expertise turns challenges into opportunities.
               </p>
             </div> 
            

             {/* Box 2 */}
             <div className="flex flex-col items-center bg-[#2C2C2C] p-6 w-[380px] h-[200px] rounded-lg shadow-md hover:scale-105 transition-all duration-300">

               <h3 className="text-3xl font-bold mb-4 text-[#28C5AD] "
               style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
               >Empower your vision</h3>
               <p className="text-center text-base"
               style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
               Your vision, our mission. Together, we create solutions that transform ideas into reality and push boundaries.
               </p>
             </div>

             {/* Box 3 */}
             <div className="flex flex-col items-center bg-[#343434] p-6 w-[380px] h-[200px] rounded-lg shadow-md hover:scale-105 transition-all duration-300">
              
               <h3 className="text-3xl font-bold text-[#28C5AD] mb-4"
               style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Lead The Future</h3>
               <p className="text-center text-base"
               style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                 Stay ahead with forward-thinking strategies and cutting-edge technology. Let’s pioneer the future of your industry.
               </p>
             </div>
           </div>
         </div>
       </div>

       <div className="bg-[#F7FFFA]">
       <section className="px-40 pt-40 text-center ">
         <h1 className="text-4xl font-serif italic font-bold bg-gradient-to-r from-[#584BF4] to-[#28C5AD] bg-clip-text text-transparent leading-tight mb-6"
         style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
         How we can help you?
         </h1>
         <h2 className="text-5xl font-semibold text-black mb-4 text-center"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
           We Can Help You..
         </h2>
         <p className="text-lg text-gray-700 mb-4 mt-10 text-center"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
 From concept to execution, we provide comprehensive support to help you navigate the complexities of digital transformation.
         </p>
</section>

      {/* Links Section */}
      <div className="bg-[#F7FFFA] py-10 px-40">
      
        <div className="flex justify-center gap-6">
          {/* Links */}
          {Object.keys(services).map((key, index) => (
            <button
            key={index}
            onClick={() => setSelectedService(services[key])}
            className="bg-[#2C2C2C] hover:bg-[#20D9A1] hover:text-black text-white px-10 py-4 rounded-full flex items-center justify-center font-bold transition-all duration-300"
          >
            {/* Dynamic Icon */}
            {key === "service1" && <FaLaptopCode className="text-3xl mr-4 transition-all duration-100" />}
            {key === "service2" && <FaMobileAlt className="text-3xl mr-4 transition-all duration-100" />}
            {key === "service3" && <FaRobot className="text-3xl mr-4 transition-all duration-100" />}
            {key === "service4" && <FaCloud className="text-3xl mr-4 transition-all duration-100" />}
            {key === "service5" && <FaDatabase className="text-3xl mr-4 transition-all duration-100" />}
            {key === "service6" && <FaBullhorn className="text-3xl mr-4 transition-all duration-100" />}
            {services[key].heading}
          </button>
          
          ))}
        </div>

        {/* Dynamic Box Below */}
        <div className="mt-12 flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg p-8">
          {/* Left: Image */}
          <div className="lg:w-1/3 w-full">
            <img
              src={selectedService.image}
              alt={selectedService.heading}
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Right: Text */}
          <div className="lg:w-2/3 w-full text-left lg:ml-8 mt-4 lg:mt-0">
            <h2 className="text-4xl font-bold text-[#28C5AD] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              {selectedService.heading}
            </h2>
            {/* <p className="text-lg text-gray-700">{selectedService.description}</p> */}
            <p className="text-base text-gray-700 whitespace-pre-line"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
  {selectedService.description}
</p>
          </div>
        </div>
      </div>

{/* Centered Read More Button */}
<div className="flex justify-center">
  <Link
    href="/contact"
    className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] text-white px-10 py-4 rounded-full mt-10 inline-block text-center font-bold hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD]"
  >
    Explore More
  </Link>
</div>



{/* Centered "Our work style" and "How we work?" Text */}
<div className="text-center pt-40">
  <h2 className="text-4xl font-serif italic font-bold bg-gradient-to-r from-[#584BF4] to-[#28C5AD] bg-clip-text text-transparent leading-tight mb-6">
    Our Work Style
  </h2>
  <p className="text-5xl font-semibold text-black mb-4 text-center"
  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
    How we work?
  </p>
</div>

{/* Our Work Process Section */}
<div
  className="text-center mt-16 mb-200"
  style={{ paddingLeft: '80px', paddingRight: '80px' }}
>
  {/* Steps Container */}
  <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-8 ">
    {/* Step 1: Deep Dive Discovery */}
    <div className="bg-[#2C2C2C] p-8 rounded-lg shadow-lg text-center">
      <div className="mb-4">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'linear-gradient(to right, #28C5AD, #584BF4)',
            width: '75px',
            height: '75px',
            margin: '0 auto', // Centers the entire circle horizontally
          }}
        >
          <FaSearch style={{ fontSize: '1.75rem', color: 'white' }} />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-[#28C5AD] mb-4"
      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Deep Dive Discovery</h3>
      <p className="text-gray-300"
      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
        We start by immersing ourselves in your business, understanding its
        intricacies, and gathering key insights to ensure a customized
        approach.
      </p>
    </div>

    {/* Step 2: Strategic Blueprint */}
    <div className="bg-[#2C2C2C] p-8 rounded-lg shadow-lg text-center">
      <div className="mb-4">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'linear-gradient(to right, #28C5AD, #584BF4)',
            width: '75px',
            height: '75px',
            margin: '0 auto',
          }}
        >
          <FaMap style={{ fontSize: '1.75rem', color: 'white' }} />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-[#28C5AD] mb-4"
      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Strategic Blueprint</h3>
      <p className="text-gray-300"
      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
        We design a clear, actionable roadmap to guide your business towards
        its goals, ensuring every step aligns with your long-term vision.
      </p>
    </div>

    {/* Step 3: Agile Development */}
    <div className="bg-[#2C2C2C] p-8 rounded-lg shadow-lg text-center">
      <div className="mb-4">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'linear-gradient(to right, #28C5AD, #584BF4)',
            width: '75px',
            height: '75px',
            margin: '0 auto',
          }}
        >
          <FaSync style={{ fontSize: '1.75rem', color: 'white' }} />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-[#28C5AD] mb-4"
      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Agile Development</h3>
      <p className="text-gray-300"
      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
        Our development process is agile, ensuring continuous progress,
        collaboration, and adaptability to meet your evolving needs.
      </p>
    </div>

    {/* Step 4: Execution & Launch and Beyond */}
    <div className="bg-[#2C2C2C] p-8 rounded-lg shadow-lg text-center">
      <div className="mb-4">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'linear-gradient(to right, #28C5AD, #584BF4)',
            width: '75px',
            height: '75px',
            margin: '0 auto',
          }}
        >
          <FaRocket style={{ fontSize: '1.75rem', color: 'white' }} />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-[#28C5AD] mb-4"
      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
        Execution & Launch and Beyond
      </h3>
      <p className="text-gray-300"
      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
        We execute with precision, ensuring a seamless launch and long-term
        success through post-launch support and continuous improvement.
      </p>
    </div>
  </div>
</div>

  </div>
  <div className="bg-[#F7FFFA] pb-40"></div>
 <Footer/> 
</div>


  );
};

export default AboutUsDetail;

