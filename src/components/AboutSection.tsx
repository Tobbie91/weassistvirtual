import React from "react";

// const AboutSection = () => {
//   return (
//     <section id="about" className="bg-cream py-12 px-4 text-brown scroll-mt-20 transition-all duration-700">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-4">About The Fave Bhite</h2>
//         <p className="text-lg leading-relaxed">
//           The Fave Bhite is a proudly Nigerian snack brand focused on delivering premium kulikuli made from locally sourced groundnuts and prepared using a cherished family recipe. Our product offers a healthier, homemade alternative to overly processed snacks, appealing to both children and adults. With a focus on quality, hygiene, and tradition, The Fave Bhite aims to revive nostalgic flavors in a modern, accessible form. We leverage digital platforms and local distribution to connect with customers across Nigeria and beyond, promoting a snack experience rooted in culture, health, and care.
//         </p>
//         <p className="text-sm mt-4 italic text-[#8B5E3C]">
//           The Fave Bhite is a trademarked product under WeAssit Virtual.
//         </p>
//       </div>
//     </section>
//   );
// };
const AboutSection = () => {
    return (
      <section
        id="about"
        className="relative py-20 px-6 scroll-mt-20 bg-gradient-to-b from-[#fbe9e7] to-[#f3e5ab] text-[#3b2314]"
      >
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-[#3b2314] drop-shadow-md">
            About The Fave Bhite
          </h2>
          <p className="text-lg leading-relaxed text-[#5c3a24] px-4 sm:px-0">
            The Fave Bhite is a proudly Nigerian snack brand focused on delivering
            premium kulikuli made from locally sourced groundnuts and prepared using
            a cherished family recipe. Our product offers a healthier, homemade
            alternative to overly processed snacks, appealing to both children and
            adults.
          </p>
          <p className="text-md mt-6 leading-relaxed text-[#6b3f2b]">
            We leverage digital platforms and local distribution to connect with
            customers across Nigeria and beyond, promoting a snack experience rooted
            in culture, health, and care.
          </p>
          <p className="text-sm mt-6 italic text-[#7b4e34] font-medium">
            The Fave Bhite is a trademarked product under WeAssit Virtual.
          </p>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  