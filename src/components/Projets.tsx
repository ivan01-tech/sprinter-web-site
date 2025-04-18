// src/components/Projects.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

// Importer les styles de Swiper
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    title: "Product Development",
    image:
      "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
  },
  {
    title: "Web Development",
    image:
      "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
  },
  {
    title: "UI/UX Design",
    image:
      "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Let’s See Our Projects
        </h2>

        {/* Carrousel avec Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1, // Mobile
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // Tablette
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // Desktop
              spaceBetween: 30,
            },
          }}
          className="relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  {/* Reflet lumineux */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-30"></div>
                </div>
                {/* Titre */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Style personnalisé pour les flèches de navigation */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #000;
          background: #fff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: background 0.3s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: #f0f0f0;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 16px;
        }
        .shadow-lg {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Projects;
