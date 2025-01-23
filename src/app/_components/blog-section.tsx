import React from 'react';

const BlogSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-normal text-zinc-900">Most<br />Popular Blog</h2>
        <p className="text-lg text-gray-700 mt-4">
          Learn from our experts in multiple fields of business that will help your team grow.
        </p>
        <button className="mt-4 px-6 py-2 bg-zinc-900 text-white rounded-full">Learn More</button>
      </div>
      <div className="relative flex justify-center">
        {/* Gradient Background */}
        <div className="absolute w-3/4 h-full bg-gradient-to-r from-emerald-400 to-indigo-600 blur-3xl opacity-40"></div>
        
        {/* Blog Cards */}
        <div className="flex justify-center space-x-8 relative">
          {[
            {
              title: "How to Create an Effective Design Portfolio",
              date: "January 12, 2023",
              description: "Experience the solution in SaaS. Join countless satisfied customers who have chosen Wisematic as their go-to SaaS platform",
              image: "dataAnalytics.jpg"
            },
            {
              title: "Building a Navigation Component with Variables",
              date: "January 12, 2023",
              description: "Experience the solution in SaaS. Join countless satisfied customers who have chosen Wisematic as their go-to SaaS platform",
              image: "digital-marketing-2.jpg"
            },
            {
              title: "How Can Designers Prepare for the Future?",
              date: "January 12, 2023",
              description: "Experience the solution in SaaS. Join countless satisfied customers who have chosen Wisematic as their go-to SaaS platform",
              image: "digitalMarketing.jpg"
            }
          ].map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 relative transform transition-transform duration-300 hover:scale-105"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <p className="text-xs text-zinc-500">{blog.date}</p>
                <h3 className="text-2xl text-zinc-900 mt-2">{blog.title}</h3>
                <p className="text-sm text-neutral-600 mt-2">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;