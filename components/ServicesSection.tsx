"use client";

import React, { useState } from "react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="bg-white text-black py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Procurement Solutions</h3>
            <p className={`${isVisible ? "block" : "hidden"}`}>
              Streamline your procurement process and get the best rates for high-quality products.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cost Optimization</h3>
            <p className={`${isVisible ? "block" : "hidden"}`}>
              Save money with expert negotiations and tailored pricing models for your business.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Time Efficiency</h3>
            <p className={`${isVisible ? "block" : "hidden"}`}>
              Focus on your core operations while we handle sourcing and acquisition.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          {isVisible ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
