"use client"

import {
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
import { Dispatch, SetStateAction } from "react"

interface ContactSidebarProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export const ContactSidebar: React.FC<ContactSidebarProps> = ({
  setIsSidebarOpen,
}) => {
  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white text-black shadow-xl p-8 overflow-y-auto z-50">
      {/* Bouton de fermeture */}
      <button
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
      >
        <X size={24} />
      </button>

      {/* En-tête */}
      <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
      <p className="text-gray-600 mb-8">
        Prêt à faire le premier pas vers de nouvelles opportunités ? Parlons de votre projet dès maintenant.
      </p>

      {/* Informations de contact */}
      <div className="space-y-6">
        <InfoItem
          icon={<Phone className="text-white" size={24} />}
          title="Numéro de téléphone"
          value="+44 204 577 0077"
        />
        <InfoItem
          icon={<Mail className="text-white" size={24} />}
          title="Adresse e-mail"
          value="sprinter@gmail.com"
        />
        <InfoItem
          icon={<MapPin className="text-white" size={24} />}
          title="Adresse du bureau"
          value="Washington Ave, NY"
        />
      </div>

      {/* Réseaux sociaux */}
      <div className="mt-10">
        <p className="text-lg font-semibold mb-4">Retrouvez-nous sur</p>
        <div className="flex space-x-3">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Bouton d'action */}
      <div className="mt-12 flex justify-center">
        <button className="bg-yellow-400 w-40 h-40 rounded-full text-black font-bold text-center flex flex-col items-center justify-center text-lg shadow-lg hover:bg-yellow-500 transition-all">
          Parlons-en
        </button>
      </div>
    </div>
  )
}

const InfoItem = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) => (
  <div className="flex items-center space-x-4">
    <div className="bg-yellow-400 p-3 rounded-full">{icon}</div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="font-semibold text-base">{value}</p>
    </div>
  </div>
)

export default ContactSidebar
