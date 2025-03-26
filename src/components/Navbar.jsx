import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-blue-600 p-4 shadow-lg text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <img
          src={assets.logo}
          alt="logo"
          className="h-10 transition-transform transform hover:scale-110 cursor-pointer"
        />

        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        <div className="hidden md:flex items-center gap-6">
          {isSignedIn ? (
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold">Welcome, {user.firstName}!</span>
              <UserButton />
            </div>
          ) : (
            <button
              onClick={() => openSignIn({})}
              className="flex items-center gap-3 bg-cyan-400 text-purple-700 px-5 py-3 rounded-lg font-semibold shadow-md transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
              <img src={assets.arrow_icon} alt="arrow" className="w-5" />
            </button>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center md:hidden bg-purple-800 mt-3 rounded-lg p-4">
          {isSignedIn ? (
            <div className="flex flex-col items-center gap-4">
              <span className="text-lg font-semibold">Welcome, {user.firstName}!</span>
              <UserButton />
            </div>
          ) : (
            <button
              onClick={() => openSignIn({})}
              className="w-full bg-cyan-400 text-purple-700 px-5 py-3 rounded-lg font-semibold shadow-md transition-all hover:bg-cyan-500"
            >
              Get Started
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
