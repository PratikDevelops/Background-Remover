import React from "react";
import { assets, plans } from "../assets/assets";

function Plans() {
  return (
    <div className="py-12 px-6 rounded-xl mx-6 mt-6 shadow-lg text-center bg-gradient-to-r from-blue-50 to-purple-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
        Choose Your Plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((items, key) => (
          <div
            key={key}
            className="p-6 bg-white rounded-xl shadow-md transform transition-all hover:scale-105 hover:shadow-lg flex flex-col items-center"
          >
            <img
              src={assets.credit_icon}
              alt="Credit Icon"
              className="w-12 h-12 mb-4 bg-blue-100 p-3 rounded-full shadow-md"
            />
            
            <h2 className="text-xl font-bold text-gray-900 mb-2">{items.id}</h2>
            <p className="text-gray-600 mb-4">{items.desc}</p>
            <p className="text-blue-500 font-semibold text-lg">{items.credits} Credits</p>
            <p className="text-gray-800 text-lg font-bold mt-2">₹{items.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
