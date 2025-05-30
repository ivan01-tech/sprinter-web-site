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
          <div className="p-2 bg-white absolute bottom-40 -right-10 rounded-full flex flex-col items-center justify-center text-center shadow-xl">
            <div className="bg-red-400 p-8 m-2 rounded-full flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-white">5+</span>
              <span className="text-sm text-white">
                Années
                <br />
                d&apos;expérience
              </span>
            </div>
          </div>
        </div>

        {/* Text section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Propulsez Votre Marque <br /> dans l&apos;Ère Digitale
          </h2>
          <p className="text-gray-600 mb-6">
            Chez Sprinter, nous offrons une gamme complète de services &apos; design,
            développement, marketing digital et community management &apos; conçus sur
            mesure pour maximiser votre impact.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            <details
              open
              className="border border-red-400 rounded-xl overflow-hidden"
            >
              <summary className="bg-red-400 px-4 py-3 cursor-pointer font-semibold text-lg text-white">
                Notre mission
              </summary>
              <div className="bg-white p-4 text-gray-700">
                Accélérer votre croissance avec des solutions digitales qui
                allient esthétique, performance et stratégie.
              </div>
            </details>
            <details className="border border-gray-300 rounded-xl overflow-hidden">
              <summary className="bg-white px-4 py-3 cursor-pointer font-semibold text-lg">
                Notre vision
              </summary>
              <div className="bg-white p-4 text-gray-700">
                Fusionner créativité audacieuse et précision technique pour
                redéfinir l&apos;expérience digitale et accompagner les visionnaires
                vers le succès.
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}