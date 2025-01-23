import React from 'react'
import {  FaMousePointer, FaPenNib, FaUsers, FaEnvelope, FaFileAlt  } from 'react-icons/fa';

const Cards = () => {
  return (
    
         <div className="relative z-0 ">
      <div
    className="circlePosition w-[770px] h-[800px] bg-[#20D9A1] rounded-[100%] absolute  blur-[100px] top-[10%] left-[10%]"
    style={{ opacity: 0.3}}
  ></div>
       <div
    className="circlePosition w-[770px] h-[800px] bg-[#5F39FF] rounded-[100%] absolute  blur-[100px] top-[10%] left-[40%]"
    style={{ opacity: 0.3}}
  ></div>

      <section className="py-60 -mt-10 px-8 z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                style={{paddingLeft: '100px', paddingRight: '100px'}}>
                  {/* Card 1: Program and Project Management */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[350px] ">
                  
                      <FaFileAlt  className="text-4xl text-black items-start justify-between" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-10"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Search Engine Optimization (SEO)</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>At Wisematic we help you to increase Organic Visibility. We optimize your website and content to rank higher in search engine results pages (SERPs), driving organic traffic from potential customers actively searching for your products or services. The Unique way of
Keyword Research & Targeting, On-Page Optimization, Link Building and Local SEO by our expert set us apart. Let’s connect and grow together.</p>
                  </div>
      
                  {/* Card 2: Business Requirements Elicitation and Analysis */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[350px]">
                  
                      < FaMousePointer className="text-4xl text-black" />
                   
                    <h3 className="text-2xl text-black font-semibold mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Pay-Per-Click (PPC) Advertising</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Let us help you to reach your targeted Advertising goal. Reach your ideal customer base with laser precision through Google Ads and social media advertising platforms. We help you in Campaign Management: Leverage our expertise to develop, manage, and optimize your PPC campaigns, maximizing return on investment (ROI). At Wisematic we also take care of Conversion Tracking and Budget Optimization</p>
                  </div>
      
                  {/* Card 3: Business Process Automation */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[350px]">
                  
                      <FaUsers className="text-4xl text-black" />
                   
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Social Media Marketing (SMM)</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>We help you in Brand Building & Community Engagement by creating engaging social media content that builds brand awareness, fosters positive relationships with your target audience, and encourages social sharing. Our team is well-versed across major social media platforms (Facebook, Instagram, Twitter, LinkedIn, etc.) to tailor strategies for each platform. Amplify your reach and engagement through targeted social media ads, driving traffic to your website or landing pages and get help for Social Listening & Analytics as well.</p>
                  </div>
      
                  {/* Card 4: Technology Integration Strategy */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center h-[350px]">
                  
                      <FaPenNib className="text-4xl text-black" />
                    
                    <h3 className="text-2xl text-black font-semibold mb-4 -ml-20"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Content Marketing</h3>
                    <p className="text-base text-gray-700 mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Get help in Content Strategy Development and content creation. We develop a data-driven content strategy that aligns with your overall marketing goals and attracts your target audience. Our team of experienced writers and designers create high-quality, engaging content in various formats, including blog posts, articles, infographics, videos, and more. We ensure your content reaches the right audience through optimized distribution channels, including social media, email marketing, and influencer outreach along with providing Content Performance Analysis.

                    </p>
                  </div>
                  
                  {/* Rodmap Card */}
                 
                  <div className="bg-white shadow-lg rounded-lg  p-8 text-center col-span-2 mt-20 ">
        <div className="flex items-center justify-center w-[75px] h-[80px] mb-4 mx-auto ">
          <FaEnvelope className="text-4xl text-black" />
        </div>
        
        <h3 className="text-2xl text-black font-semibold mb-4"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Email Marketing</h3>
        <p className="text-base text-gray-700 mb-4"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}> 
      We design and execute targeted email campaigns that nurture leads, promote special offers, and drive conversions.
      Email List Management and email automation is one of our expertise. We help you build and manage your email subscriber list, ensuring you reach the right audience with the right message. Automate repetitive tasks like welcome emails, abandoned cart reminders, and promotional messages for increased efficiency. We also provide comprehensive Email Analytics & Reporting.
      </p>
            </div>
      </div>  
                
              </section>
              
    </div>
  )
}

export default Cards
