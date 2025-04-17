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
import DigitalSolutionsSection from "@/components/DigitalSolutions";
import ExperienceSection from "@/components/Experience";
import ProjectsShowcase from "@/components/Proets";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <>
      <>
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <Navbar />
        </header>
        <main className="relative min-h-screen bg-[#f9f9f9] flex flex-col items-center justify-center">
          <Hero />
          <Pricing />
          <Ticker />
          {/* <Projects /> */}

          {/* <ClientSolutions /> */}

          <DigitalSolutionsSection></DigitalSolutionsSection>

          <ExperienceSection></ExperienceSection>

          {/* <ProjectsShowcase></ProjectsShowcase> */}

          <WorkProcess></WorkProcess>
        </main>
        <Footer />
      </>
    </>
  );
}
