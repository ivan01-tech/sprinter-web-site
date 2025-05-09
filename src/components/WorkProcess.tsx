"use client";

import { useEffect } from "react";
import { Lightbulb, Workflow, Rocket } from "lucide-react";
import AOS from "aos";

const steps = [
  {
    step: "ÉTAPE 1",
    title: "Conception et Stratégie",
    icon: <Lightbulb className="h-10 w-10 text-yellow-400" />,
    description:
      "Nous définissons une stratégie sur mesure avec des designs web et graphiques époustouflants, optimisés pour l'engagement et les conversions.",
  },
  {
    step: "ÉTAPE 2",
    title: "Développement Technique",
    icon: <Workflow className="h-10 w-10 text-yellow-400" />,
    description:
      "Nos experts développent des sites web dynamiques et des applications mobiles sécurisées, performantes et adaptées à vos besoins.",
  },
  {
    step: "ÉTAPE 3",
    title: "Lancement et Croissance",
    icon: <Rocket className="h-10 w-10 text-yellow-400" />,
    description:
      "Nous lançons votre projet avec des stratégies marketing, des vidéos percutantes et une gestion de communauté pour maximiser votre impact.",
  },
];

export default function WorkProcess() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="py-20 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12" data-aos="fade-up">
          Notre Processus de Travail
        </h2>
        {/* Timeline */}
        <div className="relative mb-12" data-aos="fade-up">
          <div className="flex justify-between max-w-3xl mx-auto items-center text-sm font-semibold text-black">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                <span className="my-4">{step.step}</span>
                <span className="w-3 h-3 bg-black rounded-full mt-1 absolute -bottom-5"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
