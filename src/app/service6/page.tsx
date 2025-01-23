
"use client";
import Header from "../_components/landing-header";
import Link from "next/link";
import { FaCheck, FaMousePointer, FaPenNib, FaUsers, FaEnvelope, FaFileAlt  } from 'react-icons/fa';
import Footer from "../_components/footer";


const TechConsultationPage = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <section className="px-40 pt-40 pb-20 ">
        <h1 className="text-white text-4xl font-bold mb-6">
        Digital marketing
         <div className="text-white text-sm flex items-center mt-4">
         <Link href="/" >
      Home
    </Link>
    <span className="mx-4">&gt;</span>
    <span>Services</span>
    <span className="mx-4">&gt;</span>
    <span>Digital marketing</span>
  </div>
        </h1>
      </section>

      <div className="bg-[#F7FFFA]">
        <section className="py-20 px-8 text-white text-center">
          <h1 className="text-4xl text-gray-800 font-bold mb-8">
          Your Partner in Digital Marketing Success
          </h1>
        </section>

        {/* Content Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between py-5 px-6">
          {/* Image Section */}
          <div className="flex-1 mb-8 lg:mb-0">
            <img
              src="/digitalMarketing.jpg" // Replace with your image path
              alt="Tech Consultation"
              className="w-[600px] ml-12 rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-left pr-12">
            <h2 className="text-2xl text-[#28C5AD] font-semibold -mt-5 mb-4">Digital marketing</h2>
            <p className="text-2xl font-serif italic text-gray-900 mb-4">
            Attract, Engage, and Convert: Our Digital Marketing Solutions
            </p>
            <p className="text-lg text-gray-700 mb-4">
            In today’s digital landscape, a strong online presence is essential for businesses of all sizes. Wisematic offers a comprehensive suite of digital marketing services designed to help you reach your target audience, drive traffic, and achieve your business goals. We help you to drive organic traffic from potential customers actively searching for your products or services. 
            </p>
            <p className="text-lg text-gray-700 mb-4">
            Let’s work together to enhance your online presence and unlock your growth. 
            </p>
         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-10">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">Data-Driven Strategies
                </span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">Customer Focus
                </span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">Comprehensive Service Offerings
                </span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">Expert Team
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Cards Section */}
        <section className="py-20 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          style={{paddingLeft: '100px', paddingRight: '100px'}}>
            {/* Card 1: Search Engine Optimization (SEO) */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaFileAlt className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Search Engine Optimization (SEO)</h3>
              <p className="text-lg text-white mb-4">At Wisematic we help you to increase Organic Visibility. We optimize your website and content to rank higher in search engine results pages (SERPs), driving organic traffic from potential customers actively searching for your products or services. The Unique way of
Keyword Research & Targeting, On-Page Optimization, Link Building and Local SEO by our expert set us apart. Let’s connect and grow together.
</p>
            </div>

            {/* Card 2: Pay-Per-Click (PPC) Advertising*/}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaMousePointer className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Pay-Per-Click (PPC) Advertising</h3>
              <p className="text-lg text-white mb-4">Let us help you to reach your targeted Advertising goal. Reach your ideal customer base with laser precision through Google Ads and social media advertising platforms. We help you in Campaign Management: Leverage our expertise to develop, manage, and optimize your PPC campaigns, maximizing return on investment (ROI). At Wisematic we also take care of Conversion Tracking and Budget Optimization
</p>
            </div>

            {/* Card 3: Social Media Marketing (SMM)*/}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaUsers className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Social Media Marketing (SMM)</h3>
              <p className="text-lg text-white mb-4">We help you in Brand Building & Community Engagement by creating engaging social media content that builds brand awareness, fosters positive relationships with your target audience, and encourages social sharing. Our team is well-versed across major social media platforms (Facebook, Instagram, Twitter, LinkedIn, etc.) to tailor strategies for each platform. Amplify your reach and engagement through targeted social media ads, driving traffic to your website or landing pages and get help for Social Listening & Analytics as well.</p>
            </div>

            {/* Card 4: Content Marketing */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaPenNib className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Content Marketing</h3>
              <p className="text-lg text-white mb-4">Get help in Content Strategy Development and content creation. We develop a data-driven content strategy that aligns with your overall marketing goals and attracts your target audience. Our team of experienced writers and designers create high-quality, engaging content in various formats, including blog posts, articles, infographics, videos, and more. We ensure your content reaches the right audience through optimized distribution channels, including social media, email marketing, and influencer outreach along with providing Content Performance Analysis.</p>
            </div>
            
            {/* Rodmap Card */}
            
            <div className="bg-white rounded-lg  p-8 text-center col-span-2 mt-20 border-2 shadow-[0px_4px_8px_rgba(40,197,173,0.2)]">
  <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
    <FaEnvelope  className="text-4xl text-white" />
  </div>
  
  <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Email Marketing</h3>
  <p className="text-lg text-gray-700 mb-4"> 
  We design and execute targeted email campaigns that nurture leads, promote special offers, and drive conversions.
  Email List Management and email automation is one of our expertise. We help you build and manage your email subscriber list, ensuring you reach the right audience with the right message. Automate repetitive tasks like welcome emails, abandoned cart reminders, and promotional messages for increased efficiency. We also provide comprehensive Email Analytics & Reporting.</p>
</div>

          </div>
          
        </section>
        <div className="bg-[#F7FFFA] py-20 px-8">
  <h2 className="text-4xl font-serif italic font-bold bg-gradient-to-r from-[#584BF4] to-[#28C5AD] bg-clip-text text-transparent leading-tight mb-6 text-center">Enquire Now</h2>
  <p className="text-5xl text-[#28C5AD] mb-10 text-center">Tell us your requirements</p>

  <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* First Name */}
      <div className="flex flex-col">
        <label htmlFor="firstName" className="text-gray-700 font-semibold mb-2">First Name *</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First"
          className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none text-black focus:ring-2 focus:ring-[#28C5AD]"
          required
        />
      </div>

      {/* Last Name */}
      <div className="flex flex-col">
        <label htmlFor="lastName" className="text-gray-700 font-semibold mb-2">Last Name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last"
          className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 text-black focus:ring-[#28C5AD]"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col sm:col-span-2">
        <label htmlFor="email" className="text-gray-700 font-semibold mb-2">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Id"
          className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 text-black focus:ring-[#28C5AD]"
          required
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col sm:col-span-2">
        <label htmlFor="phone" className="text-gray-700 font-semibold mb-2">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number"
          className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 text-black focus:ring-[#28C5AD]"
          required
        />
      </div>

      {/* Message */}
      <div className="flex flex-col sm:col-span-2">
        <label htmlFor="message" className="text-gray-700 font-semibold mb-2">Your Message *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 text-black focus:ring-[#28C5AD]"
          rows="4"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center sm:col-span-2">
        <button
          type="submit"
          className="px-10 py-4 bg-[#28C5AD] text-white rounded-full shadow-md hover:bg-[#1e9f85] transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</div>
      </div>
<Footer/> 
    </div>
  );
};

export default TechConsultationPage;
