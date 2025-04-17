import Image from "next/image";

export default function DigitalSolutionsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-100 py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image section */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/images/imagesteam.jpg"
            alt="Équipe professionnelle en réunion"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />

          <div className="p-2 bg-white absolute bottom-40 -right-10 rounded-full    flex flex-col items-center justify-center text-center shadow-xl ">
            <div className=" bg-yellow-400 p-8 m-2 rounded-full flex flex-col items-center justify-center text-center ">
              <span className="text-3xl font-bold">20+</span>
              <span className="text-sm">
                Années
                <br />
                d'expérience
              </span>
            </div>
          </div>
        </div>

        {/* Text section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Solutions Digitales <br /> Simples & Efficaces
          </h2>
          <p className="text-gray-600 mb-6">
            Nous concevons des solutions numériques sur mesure, conçues pour
            simplifier vos processus et propulser votre activité. Grâce à plus
            de 20 ans d'expérience, nous apportons un savoir-faire fiable,
            efficace et innovant à chaque projet.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            <details
              open
              className="border border-yellow-400 rounded-xl overflow-hidden"
            >
              <summary className="bg-yellow-400 px-4 py-3 cursor-pointer font-semibold text-lg">
                Notre mission
              </summary>
              <div className="bg-white p-4 text-gray-700">
                Offrir des solutions digitales accessibles, fiables et centrées
                sur l'humain. Nous croyons que la technologie doit servir la
                simplicité, l'efficacité et la croissance durable.
              </div>
            </details>
            <details className="border border-gray-300 rounded-xl overflow-hidden">
              <summary className="bg-white px-4 py-3 cursor-pointer font-semibold text-lg">
                Notre vision
              </summary>
              <div className="bg-white p-4 text-gray-700">
                Être un leader reconnu en matière d'innovation digitale, en
                créant des expériences utilisateur intuitives et en contribuant
                à la transformation digitale des entreprises à travers le monde.
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
