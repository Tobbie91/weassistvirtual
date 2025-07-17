import React from "react";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="font-sans scroll-smooth transition-all duration-700 bg-gradient-to-b from-orange-50 to-white text-brown">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
}