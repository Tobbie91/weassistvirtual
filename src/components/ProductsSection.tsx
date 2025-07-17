// src/components/ProductsSection.tsx
import React from "react";
import product1000 from "../assets/kuli1.jpeg";
import product2500 from "../assets/kuli1.jpeg";

export default function ProductsSection() {
  const products = [
    {
      title: "Kulilkuli – ₦1,000",
      description: "Small-sized pack, perfect for quick snacking.",
      link: "https://wa.me/2348135169538?text=Hi!%20I'd%20like%20to%20order%20the%20₦1000%20kulikuli%20pack.",
      image: product1000,
    },
    {
      title: "Kulilkuli – ₦2,500",
      description: "Large-sized pack for sharing or longer enjoyment.",
      link: "https://wa.me/2348135169538?text=Hi!%20I'd%20like%20to%20order%20the%20₦2500%20kulikuli%20pack.",
      image: product2500,
    },
  ];

  return (
<section id="products" className="py-16 px-6 text-center bg-[#FFF8F2] transition-all duration-700">

<h2 className="text-3xl font-bold mb-8 text-[#4E342E]">Our Products</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-brown/10 hover:scale-[1.02] transition-transform duration-300">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
<h3 className="text-2xl font-semibold mb-2 text-[#4E342E]">{product.title}</h3>
<p className="mb-4 text-[#3E2723]">{product.description}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#4E342E] text-white px-5 py-2 rounded-md font-medium hover:bg-[#F16722] transition-colors duration-300"
            >
              Order via WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
