"use client"

import React from "react"
import Link from "next/link"

const steps = [
  {
    number: "1",
    title: "Fusion Labs",
    description:
      "Etiam imperdiet imperdiet orci. Curabitur nisi. Fusce fermentum. Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.",
  },
  {
    number: "2",
    title: "Quirk Media",
    description:
      "Etiam imperdiet imperdiet orci. Curabitur nisi. Fusce fermentum. Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.",
  },
  {
    number: "3",
    title: "Spark Pulse",
    description:
      "Etiam imperdiet imperdiet orci. Curabitur nisi. Fusce fermentum. Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.",
  },
  {
    number: "4",
    title: "Nova Web",
    description:
      "Etiam imperdiet imperdiet orci. Curabitur nisi. Fusce fermentum. Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.",
  },
]

const WorkingProcess: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Contenu gauche */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white font-unbounded mb-6">
              Notre Processus de Travail
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Nous visons à accompagner les marques de toutes tailles et industries avec des stratégies basées sur les données qui produisent des résultats concrets. Nous croyons en la création de campagnes qui non seulement génèrent des résultats, mais qui inspirent également.
            </p>
            <Link
              href="/process"
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors"
            >
              En savoir plus
            </Link>
          </div>

          {/* Étapes avec ligne verticale */}
          <div className="md:w-1/2 relative">
            {/* Ligne verticale */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-300 dark:bg-gray-600 z-0" />

            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex items-start mb-10">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xl font-bold z-10">
                    {step.number}
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex-1">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkingProcess
