"use client";

import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactSidebar from "@/components/Siderbar";
import { useState } from "react";
import { X } from "lucide-react";
import Pricing from "@/components/Pricing";
import Ticker from "@/components/Trcker";
import ClientSolutions from "@/components/ClientsSolution";
import Projects from "@/components/Projets";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html>
      {/* Navigation */}
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <Navbar />
        </header>
        <main className="relative min-h-screen bg-[#f9f9f9] flex flex-col items-center justify-center px-4 sm:px-8">
          {/* Section principale avec Hero */}
          <Hero />
          <Pricing />
          <Ticker />
          <Projects />

          <ClientSolutions />
          {/* Bouton flottant pour ouvrir la sidebar */}

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed bottom-6 right-6 z-40 bg-yellow-400 text-black px-5 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            Contactez-nous
          </button>

          {/* Sidebar (overlay + composant) */}
          {isSidebarOpen && (
            <div className="fixed inset-0 z-50 flex">
              {/* Overlay noir semi-transparent */}
              <div
                className="flex-1 bg-black bg-opacity-50"
                onClick={() => setIsSidebarOpen(false)}
              />

              {/* Sidebar */}
              <div className="w-[380px] max-w-full bg-white h-full shadow-2xl relative">
                {/* Bouton fermeture */}
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="absolute top-5 right-5 text-gray-400 hover:text-black"
                >
                  <X size={24} />
                </button>

                {/* Composant Contact */}
                <ContactSidebar />
              </div>
            </div>
          )}
        </main>
        <Footer />
      </body>
    </html>
  );
}
