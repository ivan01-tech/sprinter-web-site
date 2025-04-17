// src/components/Hero.tsx
import React from "react";
import Link from "next/link";
import { FaUsers } from "react-icons/fa"; // Icône pour les stats

const Hero: React.FC = () => {
  return (
    <section className="bg-white text-black min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Titre principal */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            We’re Design & <br /> Development Agency
          </h1>
        </div>

        {/* Description, stats et bouton */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Stats */}
          <div className="flex items-center mb-6">
            <div className="relative mr-4">
              <FaUsers className="text-4xl text-yellow-400" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-2 py-1">
                10K
              </span>
            </div>
            <p className="text-lg font-semibold">
              More than 10K+ Trusted Customers
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-md">
            We believe that the surest measure of success is when a client
            partners with us more than half our clients stay with us for longer
            than a single longer thanproject.
          </p>

          {/* Bouton */}
          <Link
            href="/contact"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;