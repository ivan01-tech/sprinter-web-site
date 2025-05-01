// src/components/Ticker.tsx
import React from "react";

const Ticker: React.FC = () => {
  return (
    <section className="bg-red-100 w-full overflow-hidden py-6 flex justify-center items-center">
      <div className="relative w-full">
        <div className="flex animate-scroll whitespace-nowrap text-nowrap">
          <span className="text-white text-xl sm:text-2xl md:text-4xl font-semibold mx-4">
            # Web Design # UI/UX Design # Development Web # Development Web #
          </span>
          <span className="text-white text-xl sm:text-2xl md:text-4xl font-semibold mx-4">
            # Web Design # UI/UX Design # Development Web # Development Web #
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Ticker;

/**
 // src/components/Ticker.tsx
import React from "react";

const Ticker: React.FC = () => {
  return (
    <section className="bg-red-100 py-4 overflow-hidden">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        <span className="text-white text-lg font-semibold">
          Design # Web Design # Webflow # UI/UX # Development # SaaS Design # Design # Web Design # Webflow # UI/UX # Development # SaaS Design #
        </span>
      </marquee>
    </section>
  );
};

export default Ticker;
 */
