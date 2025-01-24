import React, { useState } from "react";
import { FaBriefcase, FaClock, FaHome, FaArrowRight } from "react-icons/fa";

// JobCard Component
const JobCard = ({ title, business, employmentType, location }) => {
  return (
    <div className="bg-[#2C2C2C] shadow-md rounded-lg p-6 hover:shadow-lg w-[430px] transition duration-300 hover:scale-105 w-[430px]">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-col gap-2 text-white">
        {/* Business */}
        <div className="flex items-center gap-2">
          <FaBriefcase className="text-gray-300 text-xl" />
          <span className="text-base text-gray-400">{business}</span>
        </div>
        {/* Employment Type */}
        <div className="flex items-center gap-2">
          <FaClock className="text-gray-300 text-xl" />
          <span className="text-base text-gray-400">{employmentType}</span>
        </div>
        {/* Location */}
        <div className="flex items-center gap-2">
          <FaHome className="text-gray-300 text-xl" />
          <span className="text-base text-gray-400">{location}</span>
        </div>
        <a
          href='/more'
          className="mt-4 ml-[260px] text-base inline-flex items-center text-[#28C5AD] font-semibold hover:underline"
        >
          More Details
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

// JobCardPage Component
const JobCardPage = () => {
  // Initial job cards (first 6)
  const initialJobs = [
    {
      title: "Sr. Bussiness Analyst",
      business: "Business Analyst",
      employmentType: "Fulltime",
      location: "Hybrid",
      link: "/job-details"
    },
    {
      title: "Bussiness Analyst",
      business: "Software Development",
      employmentType: "Co-op",
      location: "Hybrid",
      link: "/job-details"
    },
    {
      title: "Software Tester",
      business: "Software Testing",
      employmentType: "Co-op",
      location: "Toronto",
      link: "/job-details"
    },
    {
      title: "Sales Representative",
      business: "Sales",
      employmentType: "Co-op",
      location: "Toronto",
      link: "/job-details"
    },
    {
      title: "Digital Marketing",
      business: "Digital Marketing",
      employmentType: "Hybrid",
      location: "On-site",
      link: "/job-details"
    },
    {
      title: "Fullstak Developer",
      business: "Fullstak Developer",
      employmentType: "Full Time",
      location: "Remote",
      link: "/job-details"
    }
  ];

  // All job cards (more will be added later)
  const allJobs = [
    ...initialJobs,
    {
      title: "Digital Marketing",
      business: "Digital Marketing",
      employmentType: "Full Time",
      location: "Toronto",
      link: "/job-details"
    },
    {
      title: "Angular and API BI Developer",
      business: "Developer",
      employmentType: "Full Time",
      location: "Remote",
      link: "/job-details"
    },
    {
      title: "Senior Full Stack Developer-Contract",
      business: "Developer",
      employmentType: "Full Time",
      location: "Vancouver",
      link: "/job-details"
    },
    {
      title: ".NET Developer",
      business: "Developer",
      employmentType: "Part-time",
      location: "Remote",
      link: "/job-details"
    },
    {
      title: "Human Resources Management Trainee",
      business: "Human Resource",
      employmentType: "Co-op",
      location: "Toronto",
      link: "/job-details"
    },
    {
      title: "Frontend Developer",
      business: "Developer",
      employmentType: "Co-op",
      location: "Toronto",
      link: "/job-details"
    },
    {
      title: "Business Analyst",
      business: "IT Business analysis",
      employmentType: "Full Time",
      location: "Toronto",
      link: "/job-details"
    }
  ];


  // State to store the displayed jobs
  const [displayedJobs, setDisplayedJobs] = useState(initialJobs);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Load more jobs
  const loadMoreJobs = () => {
    setLoading(true);  // Set loading to true
    setTimeout(() => {
      setDisplayedJobs((prevJobs) => {
        const nextJobs = allJobs.slice(0, prevJobs.length + 7);
        return nextJobs;
      });
      setLoading(false);  // Set loading to false after jobs are loaded
    }, 1000);  // Simulating a delay (you can adjust this or replace it with an actual API call)
  };



  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-20 mr-20">
        {displayedJobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            business={job.business}
            employmentType={job.employmentType}
            location={job.location}
            link={job.link}
          />
        ))}
      </div>
      
      {/* Load More Button */}
      {displayedJobs.length < allJobs.length && (
        <div className="mt-16 text-center">
          <button
            onClick={loadMoreJobs}
            className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1b8c6a]"
          >
            {loading ? "Loading..." : "Load More..."}
          </button>
        </div>
      )}
    </div>
  );
};

 export default JobCardPage;

