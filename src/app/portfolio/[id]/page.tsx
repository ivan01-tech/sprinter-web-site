"use client";

import BannerSection from "@/components/design/BannerSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectDetails = () => {
  return (
    <div>
      <BannerSection
        title="Plateforme Nova "
        linkLabel="ACCUEIL / PORTFOLIO"
        linkHref="/"
        backgroundImage="/images/image_banner.jpg"
      />
      <section className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Titre & intro */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plateforme Nova
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Création d'une plateforme digitale performante, intuitive et
              moderne, conçue pour faciliter l'accès aux services numériques
              d’une entreprise innovante.
            </p>
          </div>

          {/* Image principale */}
          <div className="w-full aspect-video relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/projects/image.png"
              alt="Aperçu projet Nova"
              fill
              className="object-cover"
            />
          </div>

          {/* Bloc infos + description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Infos projet */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Informations clés</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>
                  <strong>Client :</strong> Nova Corp
                </li>
                <li>
                  <strong>Date :</strong> Février 2025
                </li>
                <li>
                  <strong>Services :</strong> UI/UX, Développement web, Branding
                </li>
                <li>
                  <strong>Technos :</strong> Next.js, Tailwind, Node.js
                </li>
              </ul>
            </div>

            {/* Description détaillée */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Objectifs & Réalisation</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Le projet Nova visait à créer un espace interactif et moderne
                pour les utilisateurs, avec une navigation fluide, un design
                épuré et des performances techniques de haut niveau.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Nous avons travaillé en collaboration étroite avec le client
                pour développer une interface simple d’utilisation, responsive,
                et orientée conversion.
              </p>
            </div>
          </div>

          {/* Galerie ou image supplémentaire */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/projects/image.png"
                alt="Écran 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/projects/image.png"
                alt="Écran 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
