"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const BlogPreview: React.FC = () => {
  const categories = [
    { name: "Agence", count: 3 },
    { name: "Entreprise", count: 1 },
    { name: "Développement", count: 5 },
    { name: "UI/UX Design", count: 2 },
    { name: "Marketing", count: 4 },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-fixed min-h-[60vh] py-24 sm:py-32 lg:py-40 px-4"
        style={{
          backgroundImage: "url('/images/image_banner.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Contenu centré */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto"
          data-aos="zoom-in"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-unbounded mb-4">
            A Propos
          </h1>
          <Link
            href="/"
            className="inline-block bg-red-100 text-white font-semibold px-6 py-2 rounded hover:bg-red-50 transition-colors"
          >
            ACCUEIL / A PROPOS
          </Link>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
          {/* Contenu principal */}
          <div className="lg:w-3/4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Image */}
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop" // Remplace par ton image
                  alt="Équipe en réunion"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              {/* Texte */}
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    26 Mars, 24 · Branding
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white font-unbounded mb-4">
                    Agence de Design Graphique pour Votre Marque...
                  </h2>
                </div>
                <Link
                  href="/blog/graphic-design"
                  className="bg-red-100 text-white font-semibold py-3 px-6 rounded-full hover:bg-red-50 transition-colors inline-block"
                >
                  Lire plus
                </Link>
              </div>
            </div>
          </div>

          {/* Barre latérale */}
          <div className="lg:w-1/4">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Catégories
            </h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/blog/category/${category.name.toLowerCase()}`}
                    className="flex justify-between text-black dark:text-white hover:text-red-100 dark:hover:text-red-100 transition-colors"
                  >
                    <span>{category.name}</span>
                    <span>({category.count.toString().padStart(2, "0")})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPreview;
