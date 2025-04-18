// src/components/QualityDesign.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const QualityDesign: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/image_equipe.jpg"
              alt="Équipe au travail"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            {/* <div className="absolute bottom-0 left-0 bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-center py-2 w-full">
              <p className="font-semibold">2560+ Clients satisfaits dans le monde</p>
            </div> */}
          </div>
        </div>

        {/* Contenu */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white font-unbounded mb-6">
            Passionnés par un Design de Qualité
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Si vous demandez à nos clients ce que c'est de travailler avec nous, ils parleront de notre engagement envers leur succès. Pour nous, des relations authentiques sont la clé du succès.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Simplicité : Les meilleures idées sont les plus simples
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Maîtrise de l'art de la conversion
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Maintien de normes publicitaires élevées
            </li>
          </ul>
          <Link
            href="/about"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors"
          >
            En savoir plus sur nous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QualityDesign;