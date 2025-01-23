"use client";
import Link from "next/link";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaBullhorn
} from "react-icons/fa";
import { useState } from "react";

const Services = () => {
    const services = {
        service1: {
          heading: "Tech Consultation",
          image: "/techConsult.jpeg", // Replace with your image path
          description: (
            <>
              <p className="text-base text-gray-500"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Unleash Your Business&apos;s Potential.</p>
              <p className="text-base text-gray-800 mt-2"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
                We’re not just tech consultants; we’re innovation catalysts. Together, let's build a future-proof business. Envision a world where technology doesn’t just support your business—it propels it forward.
                Every click, every line of code, and every connection takes you one step closer to your boldest ambitions. This is the future we&apos;re creating with you.
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
    
      const [selectedService, setSelectedService] = useState(services.service1);
    
  return (
    <div>
          <section className="px-40 pt-20 text-center ">
         <h1 className="text-5xl  text-black mb-6"
         style={{ fontFamily: "'Poppins', sans-serif"}}>
         How we can help you?
         </h1>
        
         <p className="text-lg text-gray-700 mb-20 mt-10 text-center"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
 From concept to execution, we provide comprehensive support to help you navigate the complexities of digital transformation.
         </p>
</section>

     {/* Links Section */}
     <div className="relative z-0">
      <div
    className="circlePosition w-[750px] h-[500px] bg-[#20D9A1] rounded-[100%] absolute  blur-[100px] top-[15%] left-[10%]"
    style={{ opacity: 0.3}}
  ></div>
       <div
    className="circlePosition w-[750px] h-[500px] bg-[#5F39FF] rounded-[100%] absolute  blur-[100px] top-[15%] left-[40%]"
    style={{ opacity: 0.3}}
  ></div>
      <div className=" py-10 px-40">
      
        <div className="flex justify-center gap-6">
           {/* Links */}
           {Object.keys(services).map((key, index) => (
            <button
            key={index}
            onClick={() => setSelectedService(services[key])}
            className="shadow-lg z-10 bg-white hover:bg-gray-100 hover:text-black text-black px-10 py-4 rounded-full flex items-center justify-center font-bold transition-all duration-300"
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
         <div className="z-10 relative">
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
            <h2 className="text-4xl text-black mb-4"
            style={{ fontFamily: "'Poppins', sans-serif"}}>
              {selectedService.heading}
            </h2>
            <p className="text-base text-gray-700 whitespace-pre-line"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
  {selectedService.description}
</p>
</div>
          </div>
        </div>
      </div>
      </div>

 {/* Centered Read More Button */}
 <div className="flex justify-center"> 
   <Link
     href="/contact"
     className="bg-gray-100 z-10 text-black px-10 py-4 rounded-full mt-10 inline-block text-center font-bold border-2 border-black"
   >
    Explore More
  </Link>
 </div>
    </div>
  )
}

export default Services
