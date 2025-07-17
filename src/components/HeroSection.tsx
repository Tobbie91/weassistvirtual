import React from "react";
import bgImage from '../assets/bg-kuli.jpeg'; 

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bg-zoom"
        style={{
            backgroundImage: `url(${bgImage})`,
            filter: "brightness(0.85)", // subtle darkening without blur
          }}
        
      ></div>

      {/* Warm earthy overlay */}
      <div className="absolute inset-0 bg-[#442A19]/50 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#fef6ee] drop-shadow-lg">
          The Fave Bhite
        </h1>
        <p className="text-lg mb-2 text-[#f3e5d7]">
          Proudly Nigerian kulikuli made from locally sourced groundnuts. A healthier, homemade snack for both children and adults.
        </p>
        <p className="text-sm italic text-[#fddbb0] mb-6">
          A registered product under WeAssit Virtual
        </p>
        <a
          href="https://wa.me/2348135169538?text=Hi!%20I'd%20love%20to%20order%20some%20kulikuli."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fddbb0] hover:bg-[#ffe4c2] text-[#442A19] transition px-6 py-3 rounded-full font-semibold text-lg shadow-md"
        >
          Order Now on WhatsApp
        </a>
      </div>
    </section>
  );
}
