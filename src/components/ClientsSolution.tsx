import { FaChartLine } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import * as React from "react";

import "swiper/css";
import "swiper/css/pagination";

const solutions = [
  {
    title: "Marketing Digital",
    description:
      "Stratégies SEO, campagnes publicitaires et e-mailing pour maximiser votre visibilité.",
  },
  {
    title: "Développement Web",
    description:
      "Sites dynamiques, sécurisés et optimisés pour tous les appareils.",
  },
  {
    title: "Design Web & UX/UI",
    description:
      "Interfaces visuellement époustouflantes et intuitives, optimisées pour l'engagement utilisateur.",
  },
];

const ClientSolutions: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Nos Solutions pour Vos Ambitions
        </h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-12"
        >
          {solutions.map((solution, index) => (
            <SwiperSlide key={index} style={{ marginBottom: 4 }}>
              {/* <div className="w-full flex justify-center items-center"> */}
                <div className="bg-white rounded-lg shadow-lg p-8 text-center h-full flex flex-col justify-start min-h-[320px]">
                  <div className="flex justify-center mb-4">
                    <div className="bg-red-100 rounded-full p-3">
                      <FaChartLine className="text-white text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #000;
        }
      `}</style>
    </section>
  );
};

export default ClientSolutions;
