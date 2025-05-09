"use client";


import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-10 px-6 mt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Branding */}
        <div className="flex-1">
          <Link href="/" className="inline-block mb-2">
            <Image
              src="/images/logos/logo_dark_.png"
              alt="Logo Sprinter"
              width={200}
              height={120}
              className="rounded-full object-cover"
            />
          </Link>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Sprinter : Où l&apos;innovation digitale redéfinit votre succès. Experts
            en design, développement, marketing digital et community management.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.facebook.com/share/1Ds3NP3Xuv/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              <FaFacebookF className="text-blue-600 dark:text-blue-400" />
            </a>
            <a
              href="https://x.com/spinteragence?t=16m00JuMXHaRvcxRqDrqNg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              <FaTwitter className="text-blue-400 dark:text-blue-300" />
            </a>
            <a
              href="https://www.instagram.com/sprinter.agence_web?igsh=YzlyTk1ODq3Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              <FaInstagram className="text-pink-500 dark:text-pink-400" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Nos Services</h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
            <li>
              <Link href="/services" className="hover:text-red-50 transition-colors">
                Design Web & UX/UI
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-50 transition-colors">
                Développement Web
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-50 transition-colors">
                Développement Mobile
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-50 transition-colors">
                Graphisme & Branding
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-50 transition-colors">
                Montage Vidéo
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-50 transition-colors">
                Marketing Digital
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-50 transition-colors">
                Community Management
              </Link>
            </li>
          </ul>
        </div>

        {/* Ressources */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Ressources</h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
            <li>
              <Link href="/about" className="hover:text-red-50 transition-colors">
                À Propos
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-red-50 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-red-50 transition-colors">
                Grille des Prix
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-red-50 transition-colors">
                Blog & Actualités
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Contactez-Nous</h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
            <li>E-mail : contact@sprinterit.com</li>
            <li>Téléphone : +237 681 418 674</li>
            <li>Adresse : Douala, Cameroun</li>
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-10 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2025 SPRINTER</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/terms" className="hover:text-red-50 transition">
            Termes et Conditions
          </Link>
          <Link href="/privacy" className="hover:text-red-50 transition">
            Politique de Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;