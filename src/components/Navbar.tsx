"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi"; // Icônes de react-icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Vorix
        </Link>

        {/* Liens de navigation (visible sur desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">
            HOME
          </Link>
          <Link href="/pages" className="hover:text-gray-400">
            PAGES
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
          <FiSearch className="text-xl cursor-pointer hover:text-gray-400" />
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
        <Link href="/" className="text-2xl hover:text-gray-400" onClick={toggleMenu}>
          HOME
        </Link>
        <Link href="/pages" className="text-2xl hover:text-gray-400" onClick={toggleMenu}>
          PAGES
        </Link>
        <Link href="/portfolio" className="text-2xl hover:text-gray-400" onClick={toggleMenu}>
          PORTFOLIO
        </Link>
        <Link href="/blog" className="text-2xl hover:text-gray-400" onClick={toggleMenu}>
          BLOG
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;