import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="container mx-auto px-4 py-20 relative bg-black">
      <div className="text-center mb-12 relative z-10">
        <p className="text-sm text-gray-200 uppercase tracking-wide">Our Testimonials</p>
        <h2 className="text-6xl font-normal text-white mt-4">Check out what<br />our customers have to say</h2>
      </div>
      
      <div className="relative flex justify-center z-10">
        {/* Gradient Background for the Section */}
       
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative p-20">
          {[
            {
              name: "Sarah Smith",
              role: "Marketing Leader @Mailchimp",
              image: "about11.jpg",
              text: "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way."
            },
            {
              name: "John Smith",
              role: "UI Designer @Flowbase",
              image: "about4.jpg",
              text: "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way."
            },
            {
              name: "Emily Johnson",
              role: "Product Manager @TechCorp",
              image: "about11.jpg",
              text: "The platform has transformed the way we work, making our processes more efficient and effective."
            },
            {
              name: "Michael Brown",
              role: "CEO @InnovateX",
              image: "about4.jpg",
              text: "A game-changer for our business. The features are robust and the support is excellent."
            },
            {
              name: "Jessica Lee",
              role: "CTO @WebSolutions",
              image: "about11.jpg",
              text: "Highly recommend this platform for anyone looking to streamline their operations."
            },
            {
              name: "David Wilson",
              role: "Lead Developer @Appify",
              image: "about4.jpg",
              text: "The integration capabilities are top-notch, allowing us to connect with various tools seamlessly."
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/30 text-white text-center backdrop-blur-lg  rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-6 h-6 ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-base text-gray-300 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 z-10" />
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="text-xs text-white">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;