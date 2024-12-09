import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center text-center px-6">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logo.jpeg"
          alt="Hardline Consulting Logo"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      {/* Hero Content */}
      <div className="max-w-4xl">
        <h1 className="text-5xl font-extrabold mb-6">
          Streamline Your Procurement with Hardline Consulting
        </h1>
        <p className="text-lg mb-8 leading-relaxed">
          We specialize in sourcing high-quality items for businesses at the best rates, saving you time and money so you can focus on what truly matters. Experience tailored solutions that drive efficiency and value for your company.
        </p>
        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition">
            Get Started
          </button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </div>
      {/* Optional Image or Additional Content */}
      <div className="mt-12 w-full max-w-4xl">
        <img
          src="/hero-image-placeholder.jpg"
          alt="Hardline Consulting Hero"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
