import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#442A19] text-[#fef6ee] py-16 px-6 scroll-mt-20 transition-all duration-700"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#fef6ee]">
          Order Now
        </h2>
        <p className="text-lg mb-6 text-[#f3e5d7]">
          Ready to taste the goodness? Click the button below to place your order
          directly via WhatsApp.
        </p>
        <a
          href="https://wa.me/2348135169538"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#fddbb0] text-[#442A19] px-6 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300"
        >
          Chat with Us on WhatsApp
        </a>

        <p className="mt-6 text-md text-[#f3e5d7]">
          Interested in becoming a distributor or placing bulk orders for your store?
          <br />
          <a
            href="https://wa.me/2348135169538?text=Hi,%20I'm%20interested%20in%20becoming%20a%20distributor."
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-[#fddbb0] transition-colors duration-300"
          >
            Chat with us on WhatsApp to get started.
          </a>
        </p>

        <p className="mt-6 text-[#f3e5d7]">
          Or follow us on{" "}
          <a
            href="https://instagram.com/thefavebhite"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#fddbb0] transition-colors duration-300"
          >
            Instagram @thefavebhite
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
