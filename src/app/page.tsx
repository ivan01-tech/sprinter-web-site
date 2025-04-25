"use client";

import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Ticker from "@/components/Trcker";
import ClientSolutions from "@/components/ClientsSolution";
import Projects from "@/components/Projets";
import DigitalSolutionsSection from "@/components/DigitalSolutions";
import ExperienceSection from "@/components/Experience";
import ProjectsShowcase from "@/components/Proets";
import WorkProcess from "@/components/WorkProcess";
import TeamSection from "@/components/TeamSections";
import Testimonials from "@/components/Texttinomials";

export default function Home() {
  return (
    <>
      <>
        <main className="relative min-h-screen bg-[#f9f9f9] flex flex-col items-center justify-center">
          <Hero />
          <DigitalSolutionsSection />
          <ExperienceSection />
          <Pricing />
          <Ticker />
          <Projects />
          <ClientSolutions />
          <ProjectsShowcase />
          <WorkProcess />
          <TeamSection />
          <Testimonials />
        </main>
      </>
    </>
  );
}
