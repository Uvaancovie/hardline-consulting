"use client";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <ul className="space-y-8">
          <li>
            <h2 className="text-2xl font-semibold mb-2">Procurement Solutions</h2>
            <p>
              Streamline your procurement process and acquire high-quality
              items at competitive rates.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">Cost Optimization</h2>
            <p>
              Save money through expert negotiations and customized pricing
              solutions tailored to your business needs.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">Time Efficiency</h2>
            <p>
              Focus on your core operations while we handle all your sourcing
              and acquisition needs.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">Tailored Solutions</h2>
            <p>
              Every business is unique, and we ensure that our strategies and
              solutions meet your specific goals and requirements.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
