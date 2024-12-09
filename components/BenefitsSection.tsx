"use client";

import React from "react";

const BenefitsSection = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Benefits of Working With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Time Efficiency</h3>
            <p>
              Save countless hours by letting us handle your procurement needs,
              so you can focus on core business operations.
            </p>
          </div>
          <div className="p-6 border border-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cost Savings</h3>
            <p>
              Our expert negotiators ensure that you get the best deals,
              optimizing costs without compromising on quality.
            </p>
          </div>
          <div className="p-6 border border-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Expert Negotiations</h3>
            <p>
              Leverage our industry expertise to secure top-tier deals that
              align with your unique business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
