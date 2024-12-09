import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <header className="p-6 border-b border-gray-300">
        <h1 className="text-3xl font-bold">Hardline Consulting</h1>
      </header>
      <main className="p-6">
        <section id="about-us" className="my-12">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed">
            At Hardline Consulting, we specialize in sourcing and acquiring high-quality items for businesses at the most competitive rates available. Our mission is to help companies streamline their procurement processes, saving both time and money so they can focus on their core operations. With a commitment to efficiency and value, we pride ourselves on delivering tailored solutions that meet the needs of every client. Partner with Hardline Consulting and experience a smarter, faster way to achieve your business goals.
          </p>
        </section>
        <section id="benefits" className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Time Efficiency</li>
            <li>Cost Savings</li>
            <li>Expert Negotiations</li>
            <li>And much more...</li>
          </ul>
        </section>
        <section id="cta" className="my-12 text-center">
          <p className="text-xl font-medium">
            Save time and money with Hardline Consulting. Your partner for the best business deals.
          </p>
        </section>
      </main>
      <footer className="p-6 border-t border-gray-300 text-center">
        <p>&copy; {new Date().getFullYear()} Hardline Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
