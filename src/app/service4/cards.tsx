import React from 'react'
import {  FaUserCog, FaBook, FaRobot, FaUtensils, FaHeartbeat, FaBullhorn } from 'react-icons/fa';

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
                  
                      < FaUserCog  className="text-4xl text-black items-start justify-between" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-10"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Custom CRM</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Streamline your sales and customer relationships with our custom CRM. Our CRM is designed to help you manage your sales pipeline, track customer interactions, and improve customer satisfaction. With features like lead scoring, contact management, and sales forecasting, you can close more deals and grow your business</p>
                  </div>
      
                  {/* Card 2: Business Requirements Elicitation and Analysis */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaBook className="text-4xl text-black" />
                   
                    <h3 className="text-2xl text-black font-semibold mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Learning Management System</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Deliver engaging and effective training with our Learning Management System. Our LMS allows you to create, manage, and deliver online courses and training programs. With features like course authoring, learner management, and reporting, you can track employee progress and development.</p>
                  </div>
      
                  {/* Card 3: Business Process Automation */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaRobot className="text-4xl text-black" />
                   
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>AI driven Custom Chat Bot</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Enhance customer experience with our AI-driven chat bot. Our chat bot is powered by artificial intelligence to provide 24/7 customer support. With features like natural language processing and machine learning, our chat bot can answer customer questions, resolve issues, and even make recommendations.</p>
                  </div>
      
                  {/* Card 4: Technology Integration Strategy */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaUtensils className="text-4xl text-black" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Custom restaurant management tools</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Manage your restaurant efficiently with our custom tools. Our restaurant management tools help you streamline operations, manage inventory, and improve customer satisfaction. With features like online ordering, table management, and employee scheduling, you can run your restaurant more smoothly and profitably.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaBullhorn className="text-4xl text-black" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Email marketing Automation and SMM</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}> Reach your audience and drive results with our email marketing and social media management tools. Our email marketing and social media management tools help you create engaging campaigns, track performance, and increase ROI. With features like email automation, social media scheduling, and analytics, you can reach your target audience and achieve your marketing goals.</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[300px]">
                  
                      <FaHeartbeat className="text-4xl text-black" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Healthcare management</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Improve patient care and streamline operations with our healthcare management software. Our healthcare management software helps you manage patient records, schedule appointments, and improve patient outcomes. With features like electronic health records, appointment scheduling, and billing, you can provide better care and run your practice more efficiently.
                    </p>
                  </div>
      </div>  
                
              </section>
              
    </div>
  )
}

export default Cards
