
"use client";
import Header from "../_components/landing-header";
import Link from "next/link";
import { FaCheck, FaChartPie, FaCloud, FaTools, FaSlidersH } from 'react-icons/fa';
import Footer from "../_components/footer";

const TechConsultationPage = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <section className="px-40 pt-40 pb-20 ">
        <h1 className="text-white text-4xl font-bold mb-6">
        Data Analysis
         <div className="text-white text-sm flex items-center mt-4">
         <Link href="/" >
      Home
    </Link>
    <span className="mx-4">&gt;</span>
    <span>Services</span>
    <span className="mx-4">&gt;</span>
    <span>Data Analysis</span>
  </div>
        </h1>
      </section>

      <div className="bg-[#F7FFFA]">
        <section className="py-20 px-8 text-white text-center">
          <h1 className="text-4xl text-gray-800 font-bold mb-8">
          Unlock the Power of Your Data with Wisematic
          </h1>
        </section>

        {/* Content Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between py-5 px-6">
          {/* Image Section */}
          <div className="flex-1 mb-8 lg:mb-0">
            <img
              src="/dataAnalytics.jpg" // Replace with your image path
              alt="Tech Consultation"
              className="w-[600px] ml-12 rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-left pr-12 ">
            
            <h2 className="text-2xl text-[#28C5AD] font-semibold -mt-5 mb-4">Data Analysis</h2>
           
            <p className="text-lg text-gray-700 mb-4">
            At Wisematic, we transform raw data into actionable insights that drive business growth. Our expert team leverages advanced techniques to deliver predictive modeling, data visualization, and customer segmentation solutions tailored to your specific needs.A solid data strategy is essential for harnessing the full potential of your data. Wisematic designs data architectures that support your business goals and ensure data accessibility, integrity, and security. Our experts work closely with you to create a roadmap for data-driven success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-10">

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">Data-Driven Success
                </span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">End-to-End Expertise
                </span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">Measurable Results</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">Cutting-Edge Technology
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Cards Section */}
        <section className="py-20 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          style={{paddingLeft: '100px', paddingRight: '100px'}}>
            {/* Card 1: Cloud Data Integration and Analytics */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaCloud className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Cloud Data Integration and Analytics</h3>
              <p className="text-lg text-white mb-4">Our team specializes in constructing robust cloud data pipelines and modern data warehouses on leading cloud platforms, including Azure and AWS. We excel at seamlessly integrating on-premises and cloud-based data sources through advanced cloud-native integration tools or by leveraging third-party iPaaS/DaaS solutions.</p>
            </div>

            {/* Card 2: Data Integration and Data Engineering */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaTools className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Data Integration and Data Engineering</h3>
              <p className="text-lg text-white mb-4">Our team designs and builds efficient data pipelines to prepare source system data for analytics and downstream applications. We employ advanced data integration and big data technologies to cleanse, transform, and enrich data, automating processes for optimal performance.</p>
            </div>

            {/* Card 3:Data Strategy and Architecture Design */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaSlidersH className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Data Strategy and Architecture Design</h3>
              <p className="text-lg text-white mb-4"> Our teams build cloud-based data “pipelines” and modern data warehouses based on Azure and AWS cloud platforms. We integrate “on-prem” and cloud-based data using cloud-enabled data integration tools or iPaaS/DaaS from 3rd party vendors.</p>
            </div>

            {/* Card 4: Data analytics*/}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaChartPie className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Data analytics</h3>
              <p className="text-lg text-white mb-4">To unlock the full potential of data stored in data lakes or warehouses, we create interactive dashboards, scorecards, and reports. Our visualizations provide clear, actionable insights through consolidated and interactive views, enabling deep-dive analysis and informed decision-making.</p>
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
