"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header
      className="text-white flex justify-between items-center px-6"
      style={{
        backgroundColor: "#1a1a1a",
        height: "80px",
      }}
    >
      {/* Logo and Name */}
      <div
        className="flex items-center h-full"
        style={{ gap: "10px" }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12"
          style={{ marginLeft: "20px" }}
        />
        <Link
          href="/"
          className="text-2xl font-bold"
          style={{
            margin: 0,
            lineHeight: "1",
            display: "flex",
            alignItems: "center",
          }}
        >
          WISEMATIC
        </Link>
      </div>

      {/* Navigation Links */}
      <nav
        className="flex items-center"
        style={{ gap: "40px" }}
      >
        <Link
          href="/about"
          className="cursor-pointer hover:text-[#20D9A1] font-bold"
          style={{ fontSize: "16px" }}
        >
          About Us
        </Link>

        {/* Dropdown for Services */}
        <div
          className="relative h-full flex items-center"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span
            className="cursor-pointer hover:text-[#20D9A1] font-bold flex items-center"
            style={{ fontSize: "16px" }}
          >
            Services <FaChevronDown className={`ml-1 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </span>
          {showDropdown && (
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-black shadow-lg rounded-md z-50 transition-opacity duration-300 ease-in-out"
              style={{ minWidth: "200px", opacity: showDropdown ? 1 : 0 }}
            >
              <div className="flex flex-col text-center">
                <Link href="/service1" className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100">
                  Tech. Consultation
                </Link>
                <Link href="/service2" className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100">
                  Application Services
                </Link>
                <Link href="/service3" className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100">
                  AI and Automation
                </Link>
                <Link href="/service4" className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100">
                  SaaS
                </Link>
                <Link href="/service5" className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100">
                  Data Analysis
                </Link>
                <Link href="/service6" className="px-6 py-2 hover:text-[#20D9A1] hover:bg-gray-100">
                  Digital Marketing
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link
          href="/learn"
          className="cursor-pointer hover:text-[#20D9A1] font-bold"
          style={{ fontSize: "16px" }}
        >
          Learning Center
        </Link>
        <Link
          href="/careers"
          className="cursor-pointer hover:text-[#20D9A1] font-bold"
          style={{ fontSize: "16px" }}
        >
          Careers
        </Link>

        <Link
          href="/contact"
          className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white px-8 py-2 rounded-full text-center font-bold"
          style={{
            marginLeft: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;