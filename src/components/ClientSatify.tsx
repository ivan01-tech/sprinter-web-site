"use client"

import React from "react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

const stats = [
  {
    number: 28,
    suffix: "+",
    title: "Années d'expérience",
    description:
      "Vous avez l'impression d'avoir un excellent point de départ pour décrire votre agence créative. Voici une version raffinée.",
  },
  {
    number: 427,
    suffix: "+",
    title: "Projets réussis",
    description:
      "Vous avez l'impression d'avoir un excellent point de départ pour décrire votre agence créative. Voici une version raffinée.",
  },
  {
    number: 241,
    suffix: "+",
    title: "Clients satisfaits",
    description:
      "Vous avez l'impression d'avoir un excellent point de départ pour décrire votre agence créative. Voici une version raffinée.",
  },
]

const Stats: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section className="bg-yellow-400 py-20 my-8">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center md:items-start text-center md:text-left px-4 py-8
              ${index !== 0 ? "border-t md:border-t-0 md:border-l border-black" : ""}
            `}
          >
            <h3 className="text-5xl font-bold text-black font-unbounded mb-2">
              {inView ? <CountUp end={stat.number} duration={2} /> : 0}
              {stat.suffix}
            </h3>
            <h4 className="text-xl font-semibold text-black mb-2">
              {stat.title}
            </h4>
            <p className="text-black text-base max-w-xs">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
