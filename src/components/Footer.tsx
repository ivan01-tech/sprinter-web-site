// src/components/Footer.tsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-10 px-6 mt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Branding */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">SPRINTER</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Agence de design créatif spécialisée dans les solutions visuelles innovantes
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              <FaFacebookF className="text-blue-600 dark:text-blue-400" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              <FaTwitter className="text-blue-400 dark:text-blue-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              <FaLinkedinIn className="text-blue-700 dark:text-blue-500" />
            </a>
            <a
              href="https://instagram.com"
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
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Conception UI/UX
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Conception d'applications mobiles
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Développement web
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Conception SaaS
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Conception Webflow
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Ressources</h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              À propos de nous
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Portfolio
            </li>
            <li className="text-yellow-500 hover:text-yellow-600 transition-colors cursor-pointer">
              Équipe d'experts
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Plan tarifaire
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Blog & Actualités
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">S'abonner</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Adresse e-mail"
              className="w-full border rounded-full px-4 py-2"
            />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" className="text-sm text-gray-600 dark:text-gray-400">
                J'accepte les termes et conditions.
              </label>
            </div>
            <button className="bg-yellow-400 rounded-full px-4 py-2 hover:bg-yellow-500 transition">
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2025 SPRINTER</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-yellow-500 transition">
            Termes et conditions
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;