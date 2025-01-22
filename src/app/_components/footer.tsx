

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-20 mt-12 bg-[#333] ">
      {/* Logo and Header Section */}
      <div
        className="flex items-center justify-center mb-8"
        style={{ gap: "10px" }} // Gap between logo and text
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="h-14"
          style={{ marginLeft: "20px" }}
        />
        <h1
          className="text-3xl font-bold text-white"
          style={{
            margin: 0,
            lineHeight: "1", // Ensures the text doesn't push other content
            display: "flex",
            alignItems: "center", // Ensures vertical alignment
          }}
        >
          WISEMATIC
        </h1>
      </div>

      {/* Footer Text */}
      <div className="text-center text-white">
        <p className="text-lg mb-6">
          We transform bold ideas into extraordinary success through innovative solutions and lasting partnerships.
        </p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-3xl hover:text-[#28C5AD] transition-all" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-3xl hover:text-[#28C5AD] transition-all" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-3xl hover:text-[#28C5AD] transition-all" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-3xl hover:text-[#28C5AD] transition-all" />
          </a>
        </div>
        <p className="mt-12">Copyright © 2025 Wisematic inc. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
