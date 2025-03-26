import React from "react";
import ReactCompareImage from "react-compare-image";
import { assets } from "../assets/assets";

const BeforeAfterSlider = () => {
  return (
    <div className="flex flex-col items-center px-8 py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl mx-6 mt-6 shadow-lg">
      <h2 className="text-2xl md:text-4xl font-bold text-purple-600 mb-4 text-center">
        Before & After Comparison
      </h2>
      <div className="w-full max-w-4xl md:max-w-2xl lg:max-w-3xl bg-white md:p-6 rounded-lg shadow-lg">
        <ReactCompareImage 
          leftImage={assets.image_w_bg} 
          rightImage={assets.image_wo_bg} 
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
