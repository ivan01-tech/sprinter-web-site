"use client";

import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full bg-[#f9f8f6] py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl px-6 md:px-12 py-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-black">
          Vous avez des questions ? <br className="hidden md:block" />
          <span className="block">Contactez-nous !</span>
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Adresse email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            placeholder="Votre téléphone"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Choisir un sujet</option>
            <option value="project">Nouveau projet</option>
            <option value="quote">Demander un devis</option>
            <option value="support">Support client</option>
          </select>
          <textarea
            placeholder="Écrivez votre message"
            rows={4}
            className="md:col-span-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              ENVOYER LE MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;