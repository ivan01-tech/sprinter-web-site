"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import CallToAction from "@/components/CallToActions";
import Stats from "@/components/ClientSatify";
import QualityDesign from "@/components/QualityDesign";
import WorkingProcess from "@/components/WorkingProcess";
import TeamSection from "@/components/TeamSections";
import Testimonials from "@/components/Texttinomials";

const PortfolioBanner: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-fixed min-h-[60vh] py-24 sm:py-32 lg:py-40 px-4"
        style={{
          backgroundImage: "url('/images/image_banner.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Contenu centré */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto"
          data-aos="zoom-in"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-unbounded mb-4">
            A Propos
          </h1>
          <Link
            href="/"
            className="inline-block bg-red-400 text-white font-semibold px-6 py-2 rounded hover:bg-red-50 transition-colors"
          >
            ACCUEIL / A PROPOS
          </Link>
        </div>
      </section>
      <QualityDesign></QualityDesign>

      <Stats></Stats>

      <WorkingProcess></WorkingProcess>

      <TeamSection></TeamSection>

      <Testimonials></Testimonials>

      <CallToAction />
    </div>
  );
};

export default PortfolioBanner;
