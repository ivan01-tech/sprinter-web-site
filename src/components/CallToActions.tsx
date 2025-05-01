// src/components/CallToAction.tsx
import React from "react";
import Link from "next/link";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-red-100 py-16 my-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Titre */}
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-bold text-white font-unbounded leading-tight">
            Travaillons Ensemble
          </h2>
        </div>

        {/* Description et bouton */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white text-lg mb-6 max-w-md">
            Notre agence excelle dans le design graphique, la conception, le
            branding et les éléments visuels, offrant des solutions complètes pour
            les besoins des entreprises sur toutes les es.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black font-semibold py-3 px-6 rounded-full border border-black hover:bg-gray-100 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;