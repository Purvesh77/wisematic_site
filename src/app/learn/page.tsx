
'use client'
import React, { useState } from "react";
import Header from "../_components/landing-header";
import Footer from "../_components/footer";

const LearningPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <Header />

      <section className="px-40 pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Wisematic Learning Center
        </h1>
      </section>

      <div>
        <div className="px-20 py-20 bg-[#F7FFFA]">
          <h2 className="text-xl text-gray-700 mb-4 text-center pt-10 pb-10 pl-40 pr-40"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            This is only for Wisematic family. You can use your official user id
            and password to login and educate yourself. You can access the
            latest and updated training program to keep yourself updated with
            the dynamic world of technology.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 p-20 pt-40 gap-10 bg-[#dfeef1]">
          {/* Left Column: Image with Boxes */}
          <div className="flex flex-col items-center mt-20">
            {/* Image */}
            <img
              src="/learn.jpg"
              alt="Contact Illustration"
              className="rounded-lg shadow-lg mb-8 w-full max-w-lg"
            />
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center">
          <div className="flex justify-center items-center mb-6">
    <img
      src="/logo.png"
      alt="Logo"
      className="h-14 mb-2"
    />
<h3
  className="text-3xl font-bold text-white"
  style={{
    WebkitTextStroke: '0.6px #aaa4f1', // Outline color (#20D9A1)
    color: 'white', // Inner text color (white)
  }}
>
  WISEMATIC
</h3>



    </div>
            <form className="space-y-6 flex flex-col items-center">
              {/* Username/Email Input */}
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Username or Email Address
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20D9A1]"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="w-full relative">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Your Password"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20D9A1]"
                  required
                />
                {/* Eye Icon for Toggling Password */}
                <button
                  type="button"
                  className="absolute inset-y-0 right-4 flex items-center mt-8 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 3a7 7 0 00-6.928 5.554c-.015.062-.072.084-.072.146 0 .062.057.084.072.146A7 7 0 0010 17a7 7 0 006.928-5.554c.015-.062.072-.084.072-.146 0-.062-.057-.084-.072-.146A7 7 0 0010 3zm0 2a5 5 0 014.546 3H5.454A5 5 0 0110 5zm0 8a5 5 0 01-4.546-3h9.092A5 5 0 0110 13z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 3c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 2a5 5 0 014.546 3H5.454A5 5 0 0110 5zm0 8a5 5 0 01-4.546-3h9.092A5 5 0 0110 13z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Remember Me Checkbox and Forgot Password Link */}
              <div className="w-full flex items-center justify-between">
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300"
                  />
                  Remember Me
                </label>
                <a
                  href="/forgotPassword"
                  className="text-[#20D9A1] hover:underline text-sm"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white text-center font-bold rounded-full hover:opacity-90 transition-opacity py-4 px-10"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="pt-60 bg-[#F7FFFA] "></div>
      <Footer/>
    </div>
  );
};

export default LearningPage;
