
'use client';
import React from "react";
import Header from "../_components/landing-header";
import Footer from "../_components/footer";

const LearningPage = () => {
  return (
    <div>
      <Header />

      <section className="px-40 pt-40 pb-20 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 ">
          Welcome to Wisematic Learning Center
        </h1>
      </section>

      <div className="px-6 lg:px-20 py-10 bg-[#F7FFFA]">
        <h2 className="text-xl lg:text-2xl font-medium text-gray-700 text-center mb-6"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
          Reset Password
        </h2>

        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 lg:p-8">
          <p className="text-sm lg:text-base text-gray-600 mb-6 text-center"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
            Please enter your email address or username. You will receive a link to create a new password via email.
          </p>

          <form className="space-y-4">
            {/* Username/Email Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Username or Email Address
              </label>
              <input
                type="text"
                id="username"
                placeholder="Your Username or Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#20D9A1]"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className=" bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:from-[#584BF4] hover:to-[#28C5AD] text-white font-bold rounded-full px-10 py-3 transition-all"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LearningPage;
