// src/components/Ticker.tsx
import React from "react";

const Ticker: React.FC = () => {
  return (
    <section className="bg-yellow-400 w-full overflow-hidden py-8  h-auto flex justify-center items-center align-middle">
      <div className="ticker-wrapper">
        <div className="ticker h-full flex justify-center align-middle">
          <span className="text-black text-4xl font-semibold">
            # Web Design # UI/UX Design # Development Web # Development Web #
          </span>
          <span className="text-black text-6xl font-semibold">
            # Web Design # UI/UX Design # Development Web # Development Web #
          </span>
        </div>
      </div>
      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
        }
        .ticker {
          display: flex;
          white-space: nowrap;
          animation: ticker 55s linear infinite;
        }
        .ticker span {
          margin-right: 2rem;
        }
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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
    <section className="bg-yellow-400 py-4 overflow-hidden">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        <span className="text-black text-lg font-semibold">
          Design # Web Design # Webflow # UI/UX # Development # SaaS Design # Design # Web Design # Webflow # UI/UX # Development # SaaS Design #
        </span>
      </marquee>
    </section>
  );
};

export default Ticker;
 */
