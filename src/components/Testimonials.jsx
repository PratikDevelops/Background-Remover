import React from "react";
import { testimonialsData } from "../assets/assets";

function Testimonials() {
  return (
    <div className="py-12 px-6 rounded-xl mx-6 mt-6 shadow-lg text-center bg-gradient-to-r from-blue-50 to-purple-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
        What Our Customers Say
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto max-w-5xl">
        {testimonialsData.map((item, key) => (
          <div
            key={key}
            className="p-6 bg-white rounded-xl shadow-md transform transition-all hover:scale-105 hover:shadow-lg"
          >
            <p className="text-gray-600 text-lg mb-4 italic">"{item.text}"</p>
            <img
              src={item.image}
              alt={item.author}
              className="w-16 h-16 mx-auto rounded-full border-4 border-blue-500"
            />
            <p className="text-lg font-semibold text-gray-900 mt-3">{item.author}</p>
            <p className="text-sm text-gray-500">{item.jobTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
