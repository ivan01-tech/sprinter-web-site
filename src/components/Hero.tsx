// src/components/Hero.tsx

"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center justify-center pt-20">
      <div className="container md:w-[90%] mx-auto px-6 flex gap-6 flex-col md:flex-row items-center justify-center">
        {/* Titre principal */}
        <div className="md:w-1/2   mb-10 md:mb-0" data-aos="fade-right">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Nous sommes une agence de <br /> design & développement
          </h1>
        </div>

        {/* Description, stats et bouton */}
        <div
          className="md:w-1/2  flex flex-col items-center md:items-start text-center md:text-left"
          data-aos="fade-left"
        >
          {/* Stats */}
          <div className="flex items-center mb-6">
            <div className="relative mr-4">
              <FaUsers className="text-4xl text-yellow-400" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black dark:text-white text-xs font-bold rounded-full px-2 py-1">
                10K
              </span>
            </div>
            <p className="text-lg font-semibold">
              Plus de 10K+ clients satisfaits
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-400 dark:text-gray-500 mb-8 max-w-md">
            Nous croyons que la meilleure mesure du succès est lorsqu'un client
            collabore avec nous sur le long terme. Plus de la moitié de nos
            clients restent avec nous pour plus d'un projet.
          </p>

          {/* Bouton */}
          <Link
            href="/contact"
            className="bg-yellow-400 text-black dark:text-white font-semibold !py-3 !px-6 rounded-full hover:bg-yellow-500 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
