"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Hardline Consulting offer?",
    answer:
      "We specialize in sourcing and acquiring high-quality items for businesses, helping streamline procurement processes at competitive rates.",
  },
  {
    question: "How can I get started with Hardline Consulting?",
    answer:
      "Simply contact us through the 'Get in Touch' section, and we’ll discuss your specific business needs and tailor a solution for you.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with businesses across a wide range of industries, including retail, manufacturing, and professional services.",
  },
  {
    question: "What makes Hardline Consulting different?",
    answer:
      "Our commitment to efficiency, cost savings, and tailored solutions sets us apart from competitors. We deliver real value with a focus on your business goals.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-md p-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <span>{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
