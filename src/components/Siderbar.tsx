"use client";


import { X, Phone, Mail, MapPin } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

interface ContactSidebarProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
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
      <h2 className="text-3xl font-bold mb-4">
        Contactez Sprinter : Votre projet commence ici
      </h2>
      <p className="text-gray-600 mb-8">
        Une idée ? Un projet ? Une question ? Notre équipe est prête à sprinter
        avec vous. Contactez-nous pour un devis gratuit ou une consultation
        personnalisée.
      </p>

      {/* Informations de contact */}
      <div className="space-y-6">
        <InfoItem
          icon={<Phone className="text-white" size={24} />}
          title="Numéro de téléphone"
          value="+237 681 418 674"
        />
        <InfoItem
          icon={<Mail className="text-white" size={24} />}
          title="Adresse e-mail"
          value="contact@sprinterit.com"
        />
        <InfoItem
          icon={<MapPin className="text-white" size={24} />}
          title="Adresse"
          value="Douala, Cameroun"
        />
      </div>

      {/* Réseaux sociaux */}
      <div className="mt-10">
        <p className="text-lg font-semibold mb-4">Retrouvez-nous sur</p>
        <div className="flex space-x-3">
          <a
            href="https://www.facebook.com/share/1Ds3NP3Xuv/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-red-400 hover:text-black transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://x.com/spinteragence?t=16m00JuMXHaRvcxRqDrqNg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-red-400 hover:text-black transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/sprinter.agence_web?igsh=YzlyTk1ODq3Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-red-400 hover:text-black transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Bouton d'action */}
      <div className="mt-12 flex justify-center">
        <button className="bg-red-400 w-40 h-40 rounded-full text-white font-bold text-center flex flex-col items-center justify-center text-lg shadow-lg hover:bg-red-50 transition-all">
          Demander un devis
        </button>
      </div>
    </div>
  );
};

const InfoItem = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="flex items-center space-x-4">
    <div className="bg-red-400 p-3 rounded-full">{icon}</div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="font-semibold text-base">{value}</p>
    </div>
  </div>
);

export default ContactSidebar;