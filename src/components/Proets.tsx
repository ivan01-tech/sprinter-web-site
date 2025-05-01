"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Branding Design platform",
    category: "Branding Design",
    image: "/images/imagesteam.jpg",
  },
  {
    title: "Product Development",
    category: "Product Development",
    image: "/images/imagesteam.jpg",
  },
  {
    title: "UX Strategy",
    category: "UI/UX",
    image: "/images/imagesteam.jpg",
  },
  {
    title: "Mobile App",
    category: "Mobile",
    image: "/images/imagesteam.jpg",
  },
];

export default function ProjectsCarousel() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <section className="py-16 px-6 md:px-16 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Redardez nos derniers Projets
          </h2>
          <div className="space-x-3 hidden md:block">
            <button
              onClick={() => slider.current?.prev()}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => slider.current?.next()}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="keen-slider__slide rounded-2xl overflow-hidden shadow-md group cursor-pointer w-[300px]"
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center">
                    <ArrowUpRight className="text-black w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
