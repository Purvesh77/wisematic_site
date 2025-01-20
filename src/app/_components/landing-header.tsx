

"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header
      className="text-white flex justify-between items-center px-6"
      style={{
        backgroundColor: "#232323",
        height: "100px", // Fixed height for the header
      }}
    >
      {/* Logo and Name */}
      <div
        className="flex items-center h-full"
        style={{ gap: "10px" }} // Gap between logo and text
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="h-14"
          style={{ marginLeft: "20px" }}
        />
        <Link
           href="/"
          className="text-3xl font-bold"
          style={{
            margin: 0,
            lineHeight: "1", // Ensures the text doesn't push other content
            display: "flex",
            alignItems: "center", // Ensures vertical alignment
          }}
        >
          WISEMATIC
        </Link>
      </div>

      {/* Navigation Links */}
      <nav
        className="flex items-center "
        style={{ gap: "60px", marginLeft: "250px" }}
      >
        <Link
           href="/about"
          className="cursor-pointer hover:text-[#20D9A1] font-bold"
          style={{ fontSize: "18px" }}
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
            className="cursor-pointer hover:text-[#20D9A1] font-bold"
            style={{ fontSize: "18px" }}
          >
            Services
          </span>
          {showDropdown && (
  <div
    className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md z-50"
    style={{ minWidth: "200px" }}
  >
    <div className="flex flex-col">
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
          style={{ fontSize: "18px" }}
        >
          Learning Center
        </Link>
        <Link
          href="/careers"
          className="cursor-pointer hover:text-[#20D9A1] font-bold"
          style={{ fontSize: "18px" }}
        >
          Careers
        </Link>

        <Link
  href="/contact"
  className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white px-10 py-4 rounded-full  text-center font-bold"
  style={{
    marginLeft: "80px",
    marginRight: "50px",
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

