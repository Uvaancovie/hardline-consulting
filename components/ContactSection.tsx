"use client";

import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}, we will get back to you soon!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
