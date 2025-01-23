import React from "react";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8b4a39bbcbe09e7905b880b50c9a3dfabaf397de53b719ce84399b1ad7646fe?placeholderIfAbsent=true&apiKey=6a706c7eefa24c06ab141fe2c759387a",
    title: "Increased Efficiency",
    description:
      "Our workflows are streamlined, optimised and built to perform.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/832b2220971e991d5dbc45c047ab3e1d3ea916431025283d0874c6ea653e7242?placeholderIfAbsent=true&apiKey=6a706c7eefa24c06ab141fe2c759387a",
    title: "Great Communication",
    description:
      "We're here for you at any time of the day and would love to hear from you.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b37561cde47294a1637a20ce1752f64f86ffde666a6af61ce0c9249ddea59fd2?placeholderIfAbsent=true&apiKey=6a706c7eefa24c06ab141fe2c759387a",
    title: "Increased Efficiency",
    description:
      "Our workflows are streamlined, optimised and built to perform.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c842c0b99ddd8132365c6eedd4c868f3dce9bbc25b79b71942918927a3a5ce99?placeholderIfAbsent=true&apiKey=6a706c7eefa24c06ab141fe2c759387a",
    title: "Great Communication",
    description:
      "We're here for you at any time of the day and would love to hear from you.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb1234a8a3254a4ee402843a5b9bc6b7e1ce87e6d4f94d770e58a03c323ed597?placeholderIfAbsent=true&apiKey=6a706c7eefa24c06ab141fe2c759387a",
    title: "Simple Systems",
    description:
      "Sublime is easy to use and even easy to integrate with existing systems.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/640b81bdc347a4aa9aa8af25a71cdd726b3167dd3b3e2ba0f95263bd77742842?placeholderIfAbsent=true&apiKey=6a706c7eefa24c06ab141fe2c759387a",
    title: "Easily Customized",
    description: "Need a more custom solution? Done - let's chat about it.",
  },
];

const LandingPage = () => {
  return (
    <div className="relative flex flex-col items-center text-6xl tracking-tighter text-zinc-900 max-md:text-4xl">
      <div className="relative z-10 mt-11 leading-tight text-center max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Power your business
      </div>
      <div className="relative z-10 leading-none text-center max-md:text-4xl">
        with Wisematic
      </div>
      <div className="relative z-10 mt-9 text-lg tracking-normal leading-8 text-center max-md:max-w-full">
        Wisematic seamlessly integrates with your existing infrastructure,
        <br />
        allowing you to effortlessly connect and consolidate data from various
        sources.
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 mt-28 text-sm tracking-tight leading-6 max-md:mt-10 max-md:max-w-full">
        {/* Central Background */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[600px] h-[500px] bg-gradient-to-r from-emerald-400 to-indigo-600 rounded-full blur-3xl opacity-30"></div>
        </div>
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-72 h-60 flex flex-col items-center text-center"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-2xl text-zinc-900 mb-2">{feature.title}</h3>
            <p className="text-lg text-neutral-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
