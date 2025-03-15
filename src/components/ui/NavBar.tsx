"use client"

import { useState, useEffect } from "react";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true); // Show NavBar after scrolling down
      } else {
        setShowNav(false); // Hide NavBar when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-gray-900 bg-opacity-40 backdrop-blur-md text-white py-2 px-8 flex items-center justify-between z-50 border-b border-gray-700 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/logo.png"
          alt="Robowars Logo"
          className="h-20 w-auto" // Adjust logo size here
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="text-lg hover:text-orange-500 transition">
          Home
        </a>
        <a href="#about" className="text-lg hover:text-orange-500 transition">
          About
        </a>
        <a href="#gallery" className="text-lg hover:text-orange-500 transition">
          Gallery
        </a>
        <a href="#contact" className="text-lg hover:text-orange-500 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
