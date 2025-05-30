"use client";


import React, { useEffect } from "react";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-black text-white">
      {/* === Background image rotée === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-10" />

        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/banner/image_banner_2.jpg" // Assure-toi qu'elle est dans /public/images/
            alt="Fond Hero"
            fill
            className="object-cover"
            // placeholder="blur"
            // blurDataURL="/images/banner/image_banner_2.jpg" // Assure-toi qu'elle est dans /public/images/
            // blurDataURL="/images/background-hero.jpg"
            priority
          />
        </div>
        {/* Overlay sombre */}
        {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-[1000] z-10" /> */}
      </div>

      {/* === Contenu Hero === */}
      <div className="relative z-20 container md:w-[90%] mx-auto px-6 flex gap-6 flex-col md:flex-row items-center justify-center text-white">
        {/* Titre dynamique */}
        <div
          className="md:w-2/3 mb-10 md:mb-0 text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Sprinter : Transformez vos idées en <br />
            <span className="text-red-400 inline-block">
              <Typewriter
                words={[
                  "succès digital",
                  "applications mobiles",
                  "marques puissantes",
                  "expériences uniques",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
        </div>

        {/* Description, stats et bouton */}
        <div
          className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left"
          data-aos="fade-left"
        >
          {/* Statistique client */}
          <div className="flex items-center mb-6">
            <div className="relative mr-4">
              <FaUsers className="text-4xl text-red-400 drop-shadow-xl" />
              <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs font-bold rounded-full px-2 py-1 shadow">
                90%
              </span>
            </div>
            <p className="text-lg font-semibold drop-shadow">
              90% de clients satisfaits qui reviennent
            </p>
          </div>

          {/* Phrase courte */}
          <p className="text-gray-200 dark:text-gray-300 mb-8 max-w-md drop-shadow-md">
            Design. Développement. Stratégie. On propulse votre marque vers
            demain.
          </p>

          {/* Bouton */}
          <Link
            href="/contact"
            className="bg-red-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-50 transition-colors shadow-lg"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
