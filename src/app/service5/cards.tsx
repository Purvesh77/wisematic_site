import React from 'react'
import {  FaChartPie, FaCloud, FaTools, FaSlidersH } from 'react-icons/fa';

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
                  
                      <FaCloud className="text-4xl text-black items-start justify-between" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-10"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Cloud Data Integration and Analytics</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Our team specializes in constructing robust cloud data pipelines and modern data warehouses on leading cloud platforms, including Azure and AWS. We excel at seamlessly integrating on-premises and cloud-based data sources through advanced cloud-native integration tools or by leveraging third-party iPaaS/DaaS solutions.</p>
                  </div>
      
                  {/* Card 2: Business Requirements Elicitation and Analysis */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaTools className="text-4xl text-black" />
                   
                    <h3 className="text-2xl text-black font-semibold mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Data Integration and Data Engineering</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Our team designs and builds efficient data pipelines to prepare source system data for analytics and downstream applications. We employ advanced data integration and big data technologies to cleanse, transform, and enrich data, automating processes for optimal performance.

                    </p>
                  </div>
      
                  {/* Card 3: Business Process Automation */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaSlidersH className="text-4xl text-black" />
                   
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Data Strategy and Architecture Design</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Our teams build cloud-based data “pipelines” and modern data warehouses based on Azure and AWS cloud platforms. We integrate “on-prem” and cloud-based data using cloud-enabled data integration tools or iPaaS/DaaS from 3rd party vendors.</p>
                  </div>
      
                  {/* Card 4: Technology Integration Strategy */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaChartPie className="text-4xl text-black" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Data analytics</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>To unlock the full potential of data stored in data lakes or warehouses, we create interactive dashboards, scorecards, and reports. Our visualizations provide clear, actionable insights through consolidated and interactive views, enabling deep-dive analysis and informed decision-making.</p>
                  </div>
   
                 
      </div>  
                
              </section>
              
    </div>
  )
}

export default Cards
