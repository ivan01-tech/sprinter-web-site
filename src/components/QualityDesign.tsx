import React from "react";
import Link from "next/link";
import Image from "next/image";

const QualityDesign: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/image_equipe.jpg"
              alt="Équipe au travail"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white font-unbounded mb-6">
            Architectes de Votre Avenir Digital
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Sprinter fusionne créativité audacieuse et précision technique pour
            créer des sites web qui captivent, des applications qui engagent et
            des campagnes qui convertissent.
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
              Innovation visionnaire : Repousser les limites du design et de la
              technologie
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
              Excellence opérationnelle : Livrer des projets impeccables, à
              temps
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
              Impact digital : Stratégies marketing qui dominent le marché
            </li>
          </ul>
          <Link
            href="/contact"
            className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-red-50 transition-colors"
          >
            Collaborons dès maintenant
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QualityDesign;