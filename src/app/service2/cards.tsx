import React from 'react'
import { FaMobileAlt, FaGlobe, FaCheckCircle, FaShippingFast, FaPuzzlePiece, FaLightbulb } from 'react-icons/fa';

const Cards = () => {
  return (
    
         <div className="relative z-0 ">
      <div
    className="circlePosition w-[770px] h-[1000px] bg-[#20D9A1] rounded-[100%] absolute  blur-[100px] top-[15%] left-[10%]"
    style={{ opacity: 0.3}}
  ></div>
       <div
    className="circlePosition w-[770px] h-[1000px] bg-[#5F39FF] rounded-[100%] absolute  blur-[100px] top-[15%] left-[40%]"
    style={{ opacity: 0.3}}
  ></div>

      <section className="py-60 -mt-10 px-8 z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                style={{paddingLeft: '100px', paddingRight: '100px'}}>
                  {/* Card 1: Program and Project Management */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px] ">
                  
                      <FaMobileAlt className="text-4xl text-black items-start justify-between" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-10"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>App development services</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>In collaboration with the stakeholder, after properly understanding their requirement we design and develop custom mobile and web applications for various platforms.
Design intuitive user interfaces and engaging user experiences are our top most priorities. We not only provide services that include UI/UX design but also we optimize applications for performance and scalability.</p>
                  </div>
      
                  {/* Card 2: Business Requirements Elicitation and Analysis */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaGlobe className="text-4xl text-black" />
                   
                    <h3 className="text-2xl text-black font-semibold mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Web Development</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>By using agile methodology, we design and develop custom create responsive and engaging websites that drive traffic and conversions. We are pioneer in to development of e-commerce platforms and content management systems.
We not only focus on attractive UI/UX and user-friendly interface but also, we optimize websites for search engines (SEO).</p>
                  </div>
      
                  {/* Card 3: Business Process Automation */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaCheckCircle className="text-4xl text-black" />
                   
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Testing Services</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>At Wisematic we understand that quality is essential to the success of any software product or application. That’s why we offer a comprehensive range of testing services to ensure that your product is reliable, secure, and meets the needs of your users. Our testing services include: Functional Testing, Performance Testing, Security Testing, Usability Testing, Compatibility Testing, and Regression Testing</p>
                  </div>
      
                  {/* Card 4: Technology Integration Strategy */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaShippingFast className="text-4xl text-black" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Agile Delivery</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Embracing agility is key to delivering high-quality software on time and within budget. Our agile delivery methodology fosters collaboration, flexibility, and rapid iteration. Our Agile Delivery Process includes: Iterative Development, Cross-Functional Teams, Frequent Deliverables, Continuous Testing, and Customer Collaboration.
Let’s work together to build exceptional software products using agile methodologies.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaPuzzlePiece className="text-4xl text-black" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>System Integration</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}> Our system integration services ensure your systems work together seamlessly, improving data flow, reducing errors, and optimizing overall operations. Our System Integration Services includes but not limited to: Needs Assessment, Data Mapping, Integration Design, Integration Development, Testing and Validation, Maintenance and Support.
Let us help you unlock the full potential of your systems through seamless integration.</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaLightbulb className="text-4xl text-black" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Solution Design</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Our expert architects transform complex business needs into innovative, scalable solutions using microservices architecture. We bridge the gap between business goals and technical execution, crafting robust, modular system designs. Our architects design adaptable and flexible IT systems aligned with your business objectives.

                    </p>
                  </div>
      </div>  
                
              </section>
              
    </div>
  )
}

export default Cards
