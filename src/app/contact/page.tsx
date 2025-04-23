"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import CallToAction from "@/components/CallToActions";
import Stats from "@/components/ClientSatify";
import QualityDesign from "@/components/QualityDesign";
import WorkingProcess from "@/components/WorkingProcess";
import BannerSection from "@/components/design/BannerSection";
import ContactForm from "@/components/design/Contactorm";

const PortfolioBanner: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <BannerSection
        title="CONTACT"
        linkLabel="ACCUEIL / CONTACT"
        linkHref="/"
        backgroundImage="/images/image_banner.jpg"
      />

      <ContactForm></ContactForm>
    </div>
  );
};

export default PortfolioBanner;
