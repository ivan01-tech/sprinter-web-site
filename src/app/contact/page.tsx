"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerSection from "@/components/design/BannerSection";
import ContactForm from "@/components/design/Contactorm";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const PortfolioBanner: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Utilisation de la clé API Google Maps
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127360.48105879395!2d9.690157149999999!3d4.051056450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610e311f167ab9%3A0xf60ac7d81e632411!2sDouala%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1730134567890!5m2!1sfr!2sfr&key=${googleMapsApiKey}`;

  return (
    <div>
      <BannerSection
        title="CONTACT"
        linkLabel="ACCUEIL / CONTACT"
        linkHref="/"
        backgroundImage="/images/image_banner.jpg"
      />

      <section className="bg-white dark:bg-gray-900 py-16 px-4">
        {/* Informations de contact */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <FaPhoneAlt className="text-red-100 text-xl" />,
              label: "Numéro de téléphone",
              value: "+237 681 418 674",
            },
            {
              icon: <FaEnvelope className="text-red-100 text-xl" />,
              label: "Adresse e-mail",
              value: "contact@sprinterit.com",
            },
            {
              icon: <FaMapMarkerAlt className="text-red-100 text-xl" />,
              label: "Adresse",
              value: "Douala, Cameroun",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center border border-gray-300 dark:border-gray-700"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow mb-4">
                {item.icon}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {item.label}
              </p>
              <p className="font-bold text-lg text-black dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Carte Google Maps */}
        <div className="w-full h-[450px]">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0 rounded-xl shadow"
          />
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default PortfolioBanner;