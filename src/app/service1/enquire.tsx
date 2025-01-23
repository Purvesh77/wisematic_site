import React from 'react'

const Enquire = () => {
  return (
    
        <div className="relative z-0 ">
      <div
    className="circlePosition w-[770px] h-[500px] bg-[#20D9A1] rounded-[100%] absolute  blur-[100px] top-[25%] left-[10%]"
    style={{ opacity: 0.3}}
  ></div>
       <div
    className="circlePosition w-[770px] h-[500px] bg-[#5F39FF] rounded-[100%] absolute  blur-[100px] top-[25%] left-[40%]"
    style={{ opacity: 0.3}}
  ></div>
       <div className=" py-20 px-8">
       <h1 className="text-2xl text-gray-900 text-center -mt-20 mb-4">Enquire Now</h1>
            <h2
              className="text-6xl text-black mb-4 text-center"
              style={{
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Tell us your requirements
            </h2>
  <form className="max-w-3xl mx-auto p-8 space-x-0 z-10 relative">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* First Name */}
      <div className="flex flex-col">
        <label htmlFor="firstName" className="text-gray-700 font-semibold mb-2">First Name 
        <span className='text-red-600 ml-1 text-xl'>*</span> 
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First"
          className="px-4 py-2 border rounded-lg  "
          required
        />
      </div>

      {/* Last Name */}
      <div className="flex flex-col">
        <label htmlFor="lastName" className="text-gray-700 font-semibold mb-2">Last Name 
           <span className='text-red-600 ml-1 text-xl'>*</span> 
            </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last"
          className="px-4 py-2 border rounded-lg  "
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col sm:col-span-2">
        <label htmlFor="email" className="text-gray-700 font-semibold mb-2">Email 
        <span className='text-red-600 ml-1 text-xl'>*</span> 
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Id"
          className="px-4 py-2 border rounded-lg  "
          required
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col sm:col-span-2">
        <label htmlFor="phone" className="text-gray-700 font-semibold mb-2">Phone 
        <span className='text-red-600 ml-1 text-xl'>*</span> 
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number"
          className="px-4 py-2 border rounded-lg  "
          required
        />
      </div>

      {/* Message */}
      <div className="flex flex-col sm:col-span-2">
        <label htmlFor="message" className="text-gray-700 font-semibold mb-2">Your Message 
        <span className='text-red-600 ml-1 text-xl'>*</span> 
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className="px-4 py-2 border rounded-lg  "
          rows={4}
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center sm:col-span-2">
        <button
          type="submit"
          className="px-10 py-4 bg-[#303030] text-white rounded-full shadow-md transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</div>
    </div>
  )
}

export default Enquire
