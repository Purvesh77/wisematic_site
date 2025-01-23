import React from 'react'
import { FaChartPie , FaRobot, FaTools, FaBriefcase, FaBrain  } from 'react-icons/fa';

const Cards = () => {
  return (
    
         <div className="relative z-0 ">
      <div
    className="circlePosition w-[770px] h-[600px] bg-[#20D9A1] rounded-[100%] absolute  blur-[100px] top-[15%] left-[10%]"
    style={{ opacity: 0.3}}
  ></div>
       <div
    className="circlePosition w-[770px] h-[600px] bg-[#5F39FF] rounded-[100%] absolute  blur-[100px] top-[15%] left-[40%]"
    style={{ opacity: 0.3}}
  ></div>

      <section className="py-60 -mt-10 px-8 z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                style={{paddingLeft: '100px', paddingRight: '100px'}}>
                  {/* Card 1: Program and Project Management */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px] ">
                  
                      <FaBriefcase className="text-4xl text-black items-start justify-between" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-10"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Ai Consulting and Strategy</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>We help you navigate the complex AI landscape to unleash your business potential with AI strategy. Our experts collaborate to understand your unique business challenges and craft a tailored AI strategy. Together, we identify high-impact AI opportunities, optimize your operations, and drive innovation.</p>
                  </div>
      
                  {/* Card 2: Business Requirements Elicitation and Analysis */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaTools className="text-4xl text-black" />
                   
                    <h3 className="text-2xl text-black font-semibold mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Ai Implementation and Integration</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Bringing Your Vision to Life by bridging the gap between strategy and execution. Our experts seamlessly integrate AI solutions into your existing systems and workflows. From model deployment to infrastructure optimization, we ensure a smooth transition and maximum ROI.</p>
                  </div>
      
                  {/* Card 3: Business Process Automation */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaRobot className="text-4xl text-black" />
                   
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Automation Services</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Supercharge Your Operations with Automation and unlock the full potential of your business with our comprehensive automation services. We streamline your processes, reduce errors, and boost efficiency. Our automation expertise includes: Robotic Process Automation (RPA), Intelligent Automation, Workflow Optimization, and many more. Experience the transformative power of automation and achieve greater productivity and cost savings.</p>
                  </div>
      
                  {/* Card 4: Technology Integration Strategy */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaChartPie className="text-4xl text-black" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Data Analysis and Preparation</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Unleash the Power of Your Data. Unlock the hidden potential within your data with our expert data analysis and preparation services. We transform raw data into actionable insights that drive informed decision-making. Our data services include: Data Collection and Integration,
                    Data Cleaning and Preparation, Data Exploration and Analysis, Data Visualization, Data Modeling etc. Let our data experts help you make sense of your data and gain a competitive edge.
                    
                    </p>
                  </div>
                  
                  {/* Rodmap Card */}
                 
                  <div className="bg-white shadow-lg rounded-lg  p-8 text-center col-span-2 mt-20 ">
        <div className="flex items-center justify-center w-[75px] h-[80px] mb-4 mx-auto ">
          <FaBrain className="text-4xl text-black" />
        </div>
        
        <h3 className="text-2xl text-black font-semibold mb-4"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Strategy, Architecture, and Roadmap</h3>
        <p className="text-base text-gray-700 mb-4"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}> 
      We help you bring your innovative ideas to life with our AI-powered product development services. Our team of experts will work with you to design, develop, and deploy cutting-edge AI solutions that meet your specific business needs.
Our AI product development services include, AI Product Design, AI Product Development, AI Product Testing and Deployment, AI Product Maintenance and Support.
Let us help you create the next generation of AI-powered products that will revolutionize your industry.</p>
      
      </div>
      </div>  
                
              </section>
              
    </div>
  )
}

export default Cards
