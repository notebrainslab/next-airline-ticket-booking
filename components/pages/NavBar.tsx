"use client"
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="py-6 max-w-7xl mx-auto px-6">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Image src={"/logo.png"} alt="logo" height={100} width={100}/>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between gap-10">
            <ul className="flex items-center justify-center gap-10 text-lg font-semibold">
              <li className="hover:text-blue-600 cursor-pointer">Fight</li>
              <li className="hover:text-blue-600 cursor-pointer">Car</li>
              <li className="hover:text-blue-600 cursor-pointer">Hotel</li>
              <li className="hover:text-blue-600 cursor-pointer">Tour Package</li>
              <li className="hover:text-blue-600 cursor-pointer">Pages</li>
              <li className="hover:text-blue-600 cursor-pointer">News</li>
            </ul>
            <div className="text-xl font-semibold flex items-center gap-3">
            <SearchIcon className="hover:text-blue-600"/>
            <span>Login/Sign Up</span></div>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-2xl"
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="grid grid-cols-3 gap-3 text-center mt-4">
              <li className="p-4 font-semibold hover:text-blue-500 text-xl">Fight</li>
              <li className="p-4 font-semibold hover:text-blue-500 text-xl">Car</li>
              <li className="p-4 font-semibold hover:text-blue-500 text-xl">Hotel</li>
              <li className="p-4 font-semibold hover:text-blue-500 text-xl">Tour Package</li>
              <li className="p-4 font-semibold hover:text-blue-500 text-xl">Pages</li>
              <li className="p-4 font-semibold hover:text-blue-500 text-xl">News</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
