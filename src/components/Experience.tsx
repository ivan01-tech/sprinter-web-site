"use client";

import Image from "next/image";
import Stats from "./ClientSatify";

export default function ExperienceSection() {
  // const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="w-full flex justify-center items-center">
      <section className="bg-yellow-400 w-full py-12 px-6 md:px-16  overflow-hidden">
        {/* Image + bouton lecture */}
        <div className="max-w-6xl px-auto rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-[400px] w-full">
            <Image
              src="/images/imagesteam.jpg"
              alt="Équipe en réunion"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center cursor-pointer">
                <svg
                  className="h-8 w-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <Stats></Stats>
      </section>
    </div>
  );
}

// function CounterBox({
//   value,
//   label,
//   description,
// }: {
//   value: number;
//   label: string;
//   description: string;
// }) {
//   const { ref, inView } = useInView({ triggerOnce: true });

//   return (
//     <div ref={ref}>
//       <h2 className="text-4xl font-bold">
//         {inView ? <CountUp end={value} duration={2} /> : 0}+
//       </h2>
//       <h3 className="font-semibold mt-2">{label}</h3>
//       <p className="text-sm mt-1">{description}</p>
//     </div>
//   );
// }
