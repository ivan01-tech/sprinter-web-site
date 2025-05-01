import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Plans Tarifaires : Votre Vision, Notre Expertise
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Chez Sprinter, nous offrons une gamme complète de services pour
          propulser votre marque dans l&apos;ère digitale. Du design au
          développement, du marketing digital au community management, chaque
          solution est conçue sur mesure pour maximiser votre impact.
        </p>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1: Essentiel */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Essentiel</h3>
            <p className="text-gray-600 mb-6">
              Idéal pour les startups et PME souhaitant un site web moderne et
              intuitif.
            </p>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Design Web & UX/UI
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Développement Web
              </li>
            </ul>
            <a
              href="/contact"
              className="bg-white border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition"
            >
              Obtenir un devis gratuit
            </a>
          </div>

          {/* Plan 2: Avancé */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Avancé</h3>
            <p className="text-gray-600 mb-6">
              Parfait pour les entreprises cherchant à se démarquer avec une
              présence digitale complète.
            </p>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Design Web & UX/UI
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Développement Web
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Développement Mobile
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Graphisme & Branding
              </li>
            </ul>
            <a
              href="/contact"
              className="bg-red-100 text-white rounded-full px-6 py-3 hover:bg-red-50 transition"
            >
              Obtenir un devis gratuit
            </a>
          </div>

          {/* Plan 3: Premium */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <p className="text-gray-600 mb-6">
              Une solution tout-en-un pour dominer le marché avec une stratégie
              digitale complète.
            </p>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Design Web & UX/UI
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Développement Web
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Développement Mobile
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Graphisme & Branding
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Montage Vidéo
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Marketing Digital
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Community Management
              </li>
            </ul>
            <a
              href="/contact"
              className="bg-white border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition"
            >
              Obtenir un devis gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;