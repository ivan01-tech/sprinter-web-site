// src/components/Pricing.tsx
import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Pricing Plan to Boost <br /> Your Business
        </h2>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1: Startup */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Startup</h3>
            <p className="text-4xl font-bold mb-4">
              $110 <span className="text-gray-500 text-lg">/mo</span>
            </p>
            <p className="text-gray-600 mb-6">
              We prioritize their success because it is drive authentic relationships.
            </p>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Web & Mobile
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> UI Design Create
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Blockchain Development
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Full Website Design System
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> One Year Support Included
              </li>
            </ul>
            <button className="bg-white border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition">
              Choose This Plan
            </button>
          </div>

          {/* Plan 2: Professional */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Professional</h3>
            <p className="text-4xl font-bold mb-4">
              $130 <span className="text-gray-500 text-lg">/mo</span>
            </p>
            <p className="text-gray-600 mb-6">
              We prioritize their success because it is drive authentic relationships.
            </p>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Web & Mobile
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> UI Design Create
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Blockchain Development
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Full Website Design System
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> One Year Support Included
              </li>
            </ul>
            <button className="bg-yellow-400 text-black rounded-full px-6 py-3 hover:bg-yellow-500 transition">
              Choose This Plan
            </button>
          </div>

          {/* Plan 3: Exclusive */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Exclusive</h3>
            <p className="text-4xl font-bold mb-4">
              $140 <span className="text-gray-500 text-lg">/mo</span>
            </p>
            <p className="text-gray-600 mb-6">
              We prioritize their success because it is drive authentic relationships.
            </p>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Web & Mobile
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> UI Design Create
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Blockchain Development
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Full Website Design System
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> One Year Support Included
              </li>
            </ul>
            <button className="bg-white border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition">
              Choose This Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;