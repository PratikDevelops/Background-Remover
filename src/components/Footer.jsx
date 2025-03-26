import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-600 text-white mt-6 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src={assets.logo} alt="Logo" className="w-48" />
        </div>

        <div className="flex gap-8">
          <img
            src={assets.facebook_icon}
            alt="Facebook"
            className="w-12 h-12 transition-transform transform hover:scale-110 cursor-pointer"
          />
          <img
            src={assets.google_plus_icon}
            alt="Google Plus"
            className="w-12 h-12 transition-transform transform hover:scale-110 cursor-pointer"
          />
          <img
            src={assets.twitter_icon}
            alt="Twitter"
            className="w-12 h-12 transition-transform transform hover:scale-110 cursor-pointer"
          />
        </div>
      </div>

      <p className="text-gray-200 text-center text-sm mt-4">
        © {new Date().getFullYear()} bg.removal All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
