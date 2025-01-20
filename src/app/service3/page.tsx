
"use client";
import Header from "../_components/landing-header";
import { FaCheck, FaChartPie , FaTasks, FaRobot, FaMap, FaRoute, FaTools, FaBriefcase, FaBrain  } from 'react-icons/fa';
import Footer from "../_components/footer";

const TechConsultationPage = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <section className="px-40 pt-40 pb-20 ">
        <h1 className="text-white text-4xl font-bold mb-6">
        AI & Automation
         <div className="text-white text-sm flex items-center mt-4">
         <a href="/" >
      Home
    </a>
    <span className="mx-4">&gt;</span>
    <span>Services</span>
    <span className="mx-4">&gt;</span>
    <span>AI & Automation</span>
  </div>
        </h1>
      </section>

      <div className="bg-[#F7FFFA]">
        <section className="py-20 px-8 text-white text-center">
          <h1 className="text-4xl text-gray-800 font-bold mb-8">
          AI and Automation Solutions Tailored to Your Business
          </h1>
        </section>

        {/* Content Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between py-5 px-6">
          {/* Image Section */}
          <div className="flex-1 mb-8 lg:mb-0">
            <img
              src="/automation.jpg" // Replace with your image path
              alt="Tech Consultation"
              className="w-[600px] ml-12 rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-left pr-12">
            <h2 className="text-2xl text-[#28C5AD] font-semibold -mt-5 mb-4">AI & Automation</h2>
            
            <p className="text-lg text-gray-700 mb-4">
            In today’s fast-paced business environment, leveraging artificial intelligence (AI) and automation is no longer an option, but a necessity. At Wisematic, we understand that every business is unique, and therefore, we offer tailored AI and automation solutions to meet your specific needs.
            </p>
            <p className="text-lg text-gray-700 mb-4">
            Our team of experts will work closely with you to understand your business goals and challenges and develop a customized strategy to help you achieve them. We offer a wide range of services.
            </p>
          

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-10">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">Efficiency Boost</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">Data-Driven Insights</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">Competitive Advantage
                </span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-xl font-bold">Scalability</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Cards Section */}
        <section className="py-20 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          style={{paddingLeft: '100px', paddingRight: '100px'}}>
            {/* Card 1: Ai Consulting and Strategy */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaBriefcase className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Ai Consulting and Strategy</h3>
              <p className="text-lg text-white mb-4">Our seasoned project managers blend business acumen with technical expertise. We tailor our approach to your project, whether it’s waterfall, agile, or a hybrid model. Our focus on planning, execution, and stakeholder satisfaction ensures successful delivery every time.</p>
            </div>

            {/* Card 2: Ai Implementation and Integration */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaTools className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Ai Implementation and Integration</h3>
              <p className="text-lg text-white mb-4">We collaborate closely with you to define your project’s success. Our analysts combine design thinking with proven techniques to deeply understand your business objectives and translate them into clear, actionable requirements. </p>
            </div>

            {/* Card 3: Automation Services */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaRobot className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Automation Services</h3>
              <p className="text-lg text-white mb-4">We help our clients to build faster, leaner, and more digitized businesses with automated business workflows. Our teams define the implementation strategy, transition plan, and the new governance structure.</p>
            </div>

            {/* Card 4: Data Analysis and Preparation*/}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaChartPie  className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Data Analysis and Preparation</h3>
              <p className="text-lg text-white mb-4">Our expert Solution Architect will first understand our clients’ objectives, review their environments, system capabilities, and technology components, and then map out an integration strategy that defines efficient interfaces and connection protocols among in-scope systems.</p>
            </div>
            
            {/* Rodmap Card */}
            
            <div className="bg-white rounded-lg  p-8 text-center col-span-2 mt-20 border-2 shadow-[0px_4px_8px_rgba(40,197,173,0.2)]">
  <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
    <FaBrain className="text-4xl text-white" />
  </div>
  
  <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4">Ai-Powered Product Development</h3>
  <p className="text-lg text-gray-700 mb-4"> 
  We help you bring your innovative ideas to life with our AI-powered product development services. Our team of experts will work with you to design, develop, and deploy cutting-edge AI solutions that meet your specific business needs.</p>
  <p className="text-lg text-gray-700 mb-4"> Our AI product development services include, AI Product Design, AI Product Development, AI Product Testing and Deployment, AI Product Maintenance and Support.</p>
  <p className="text-lg text-gray-700 mb-4">
Let us help you create the next generation of AI-powered products that will revolutionize your industry.</p>
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
