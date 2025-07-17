// src/components/Navbar.tsx
import React from "react";
import logo from "../assets/logo.jpeg"; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 text-brown py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="flex items-center space-x-2">
          <img src={logo} alt="The Fave Bhite Logo" className="h-8 w-auto" />
          <span className="font-bold text-xl">The Fave Bhite</span>
        </p>
        <div className="space-x-6 hidden md:flex">
          <a href="#products" className="hover:text-orange-500 transition-colors duration-300">Products</a>
          <a href="#about" className="hover:text-orange-500 transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
