// src/components/ClientSolutions.tsx
import React from "react";
import { FaChartLine } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Importer les styles de Swiper
import "swiper/css";
import "swiper/css/pagination";

const solutions = [
  {
    title: "Digital Marketing",
    description:
      "Designed user interface contributes to a positive user experience, and a good user experience.",
  },
  {
    title: "Web Development",
    description:
      "Building responsive and scalable websites to enhance your online presence.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing designs for better user engagement.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing designs for better user engagement.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing designs for better user engagement.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing designs for better user engagement.",
  },
];

const ClientSolutions: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Our Latest Client Solutions
        </h2>

        {/* Carrousel avec Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1, // Mobile (< 768px)
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // Tablette (≥ 768px)
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // Desktop (≥ 1024px)
              spaceBetween: 30,
            },
          }}
          className="pb-12"
        >
          {solutions.map((solution, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-400 rounded-full p-3">
                    <FaChartLine className="text-white text-2xl" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Style personnalisé pour les dots de pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db; /* Couleur des dots inactifs (gris) */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #000; /* Couleur des dots actifs (noir) */
        }
      `}</style>
    </section>
  );
};

export default ClientSolutions;

// // src/components/ClientSolutions.tsx
// import React, { useState } from "react";
// import { FaChartLine } from "react-icons/fa";

// const solutions = [
//   {
//     title: "Digital Marketing",
//     description:
//       "Designed user interface contributes to a positive user experience, and a good user experience.",
//   },
//   {
//     title: "Web Development",
//     description:
//       "Building responsive and scalable websites to enhance your online presence.",
//   },
//   {
//     title: "UI/UX Design",
//     description:
//       "Creating intuitive and visually appealing designs for better user engagement.",
//   },
// ];

// const ClientSolutions: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleDotClick = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Titre */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
//           Our Latest Client Solutions
//         </h2>

//         {/* Version Desktop : Grille */}
//         <div className="hidden md:grid md:grid-cols-3 gap-8">
//           {solutions.map((solution, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg p-8 text-center"
//             >
//               <div className="flex justify-center mb-4">
//                 <div className="bg-yellow-400 rounded-full p-3">
//                   <FaChartLine className="text-white text-2xl" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
//               <p className="text-gray-600">{solution.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Version Mobile : Carrousel */}
//         <div className="md:hidden">
//           <div className="bg-white rounded-lg shadow-lg p-8 text-center">
//             <div className="flex justify-center mb-4">
//               <div className="bg-yellow-400 rounded-full p-3">
//                 <FaChartLine className="text-white text-2xl" />
//               </div>
//             </div>
//             <h3 className="text-xl font-semibold mb-4">
//               {solutions[currentIndex].title}
//             </h3>
//             <p className="text-gray-600">{solutions[currentIndex].description}</p>
//           </div>

//           {/* Dots de navigation */}
//           <div className="flex justify-center gap-2 mt-6">
//             {solutions.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleDotClick(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   currentIndex === index ? "bg-black" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientSolutions;
