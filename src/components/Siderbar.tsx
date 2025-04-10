import { X, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function ContactSidebar() {
  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-8 overflow-y-auto">
      {/* Bouton de fermeture */}
      <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <X size={24} />
      </button>

      {/* En-tête */}
      <h2 className="text-3xl font-bold mb-4">Contactez-nous !</h2>
      <p className="text-gray-600 mb-8">Prêt à franchir le premier pas vers de nouvelles opportunités et à réaliser vos objectifs.</p>

      {/* Informations de contact */}
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-400 p-3 rounded-full">
            <Phone className="text-white" size={24} />
          </div>
          <div>
            <p className="text-gray-500">Numéro de téléphone</p>
            <p className="font-semibold text-lg">+44 204 577 0077</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-yellow-400 p-3 rounded-full">
            <Mail className="text-white" size={24} />
          </div>
          <div>
            <p className="text-gray-500">Adresse e-mail</p>
            <p className="font-semibold text-lg">Vorix@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-yellow-400 p-3 rounded-full">
            <MapPin className="text-white" size={24} />
          </div>
          <div>
            <p className="text-gray-500">Adresse du bureau</p>
            <p className="font-semibold text-lg">Washington Ave, NY</p>
          </div>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="mt-8">
        <p className="text-lg font-semibold mb-4">Réseaux sociaux</p>
        <div className="flex space-x-4">
          <a href="#" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600">
            <Facebook size={20} />
          </a>
          <a href="#" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600">
            <Twitter size={20} />
          </a>
          <a href="#" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Bouton d'action */}
      <div className="mt-12 flex justify-center">
        <button className="bg-yellow-400 w-40 h-40 rounded-full text-black font-bold text-center flex flex-col items-center justify-center text-lg">
          Parlons-en
        </button>
      </div>
    </div>
  );
}
