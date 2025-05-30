
"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 5,
    suffix: "+",
    title: "Années d'expertise en solutions digitales",
  },
  {
    number: 100,
    suffix: "+",
    title: "Projets livrés avec succès",
  },
  {
    number: 90,
    suffix: "%",
    title: "Clients satisfaits qui reviennent",
  },
];

const Stats: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-red-400 py-20 my-8">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center md:items-start text-center md:text-left px-4 py-8
              ${
                index !== 0
                  ? "border-t md:border-t-0 md:border-l border-black"
                  : ""
              }
            `}
          >
            <h3 className="text-5xl font-bold text-white font-unbounded mb-2">
              {inView ? <CountUp end={stat.number} duration={2} /> : 0}
              {stat.suffix}
            </h3>
            <h4 className="text-xl font-semibold text-white mb-2">
              {stat.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;