// src/components/Testimonials.tsx
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Pour les étoiles de notation
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Pour les flèches de navigation

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  review: string;
  source: string;
  reviewsCount: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Daniyel Karlos",
    role: "Designer UX",
    rating: 4.9,
    review:
      "Il a rapidement livré un design exceptionnel selon les spécifications. La nouvelle page de destination aura un look simple et rafraîchissant tout en maintenant un temps de chargement léger sur les images, tout en conservant un aspect professionnel. Enfin, il semble également très raisonnable d&apos;implémenter un design réactif, donc je suis très satisfait de cela.",
    source: "Clutch",
    reviewsCount: 54,
    avatar: "/images/image_personne.jpg"
  },
  // Ajoute d&apos;autres témoignages si nécessaire
  {
    name: "Marie Dubois",
    role: "Développeuse Front-End",
    rating: 4.8,
    review:
      "Le design livré était exactement ce que nous cherchions. Il est moderne, intuitif et parfaitement adapté à nos besoins. L&apos;équipe a été très réactive et a pris en compte toutes nos suggestions. Je recommande vivement leurs services !",
    source: "Upwork",
    reviewsCount: 32,
    avatar: "/images/image_personne.jpg"
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { name, role, rating, review, source, reviewsCount, avatar } =
    testimonials[currentIndex];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Titre */}
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white leading-tight">
            Ce que les clients <br /> disent de l&apos;outil
          </h2>
        </div>

        {/* Témoignage */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          {/* Notation et Source */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center bg-yellow-400 text-black dark:text-white font-bold rounded-full px-4 py-2">
              <FaStar className="text-lg mr-2" />
              {rating.toFixed(1)}
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white font-semibold rounded-full px-4 py-2">
              {source} - {reviewsCount} Avis
            </div>
          </div>

          {/* Citation */}
          <blockquote className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            {review}
          </blockquote>

          {/* Auteur */}
          <div className="flex items-center gap-4">
            <Image
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-black dark:text-white">{name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 text-black dark:text-white shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              aria-label="Témoignage précédent"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 text-black dark:text-white shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              aria-label="Témoignage suivant"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;