"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Icônes de react-icons
import ThemeToggle from "./design/ThemeToggle";
import { FaBars } from "react-icons/fa";
import ContactSidebar from "./Siderbar";
import Image from "next/image";

// Définir une interface pour les props (commentée car non utilisée actuellement)
// interface NavbarProps {
//   setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
//   isSidebarOpen: boolean;
// }

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/images/logos/logo-light.png"
            alt="Logo Sprinter"
            width={200}
            height={120}
            className="rounded-full object-cover"
          />
        </Link>

        {/* Liens de navigation (visible sur desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">
            ACCUEIL
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            À PROPOS
          </Link>
          <Link href="/portfolio" className="hover:text-gray-400">
            PORTFOLIO
          </Link>
          <Link href="/blog" className="hover:text-gray-400">
            BLOG
          </Link>
        </div>

        {/* Icônes (recherche + menu hamburger) */}
        <div className="flex items-center space-x-4">
          {/* Bouton de bascule de thème */}
          <ThemeToggle />

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-red-400 text-white shadow-md hover:bg-red-50 transition-all duration-300 ease-in-out"
            aria-label="Ouvrir le menu de contact"
          >
            <FaBars className="text-lg" />
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile (visible quand isOpen est true) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay noir semi-transparent */}
          <div
            className="flex-1 bg-black bg-opacity-10"
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div className="w-[380px] max-w-full bg-black h-full shadow-2xl relative">
            {/* Composant Contact */}
            <ContactSidebar setIsSidebarOpen={setIsSidebarOpen} />
          </div>
        </div>
      )}

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-6 text-3xl"
          onClick={toggleMenu}
        >
          <FiX />
        </button>
        <Link
          href="/"
          className="text-2xl hover:text-gray-400"
          onClick={toggleMenu}
        >
          ACCUEIL
        </Link>
        <Link
          href="/about"
          className="text-2xl hover:text-gray-400"
          onClick={toggleMenu}
        >
          À PROPOS
        </Link>
        <Link
          href="/portfolio"
          className="text-2xl hover:text-gray-400"
          onClick={toggleMenu}
        >
          PORTFOLIO
        </Link>
        <Link
          href="/blog"
          className="text-2xl hover:text-gray-400"
          onClick={toggleMenu}
        >
          BLOG
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;