"use client"

import { useEffect } from "react"
import AOS from "aos"
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"
import Image from "next/image"

const teamMembers = [
  {
    name: "Marie Dupont",
    role: "Designer UI/UX",
    image: "/images/image_personne.jpg",
  },
  {
    name: "Lucas Morel",
    role: "Développeur Frontend",
    image: "/images/image_personne.jpg",
  },
  {
    name: "Sofia Leroux",
    role: "Chef de Projet",
    image: "/images/image_personne.jpg",
  },
  {
    name: "Yanis Laurent",
    role: "Développeur Backend",
    image: "/images/image_personne.jpg",
  },
]

export default function TeamSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="py-20 px-6 md:px-16 bg-white text-center">
      <div className="max-w-3xl mx-auto mb-12" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Notre Équipe Derrière le Studio
        </h2>
        <p className="text-gray-500">
          Rencontrez les esprits créatifs qui conçoivent, développent et
          donnent vie à vos idées avec passion et précision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="w-40 h-40 relative mb-4 rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{member.role}</p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-500 hover:text-black transition">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition">
                <FaFacebook />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
