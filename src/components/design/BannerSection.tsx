import Link from "next/link";
import React from "react";

interface BannerSectionProps {
  title: string;
  linkLabel: string;
  linkHref: string;
  backgroundImage: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  title,
  linkLabel,
  linkHref,
  backgroundImage,
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed min-h-[60vh] py-24 sm:py-32 lg:py-40 px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-unbounded mb-4">
          {title}
        </h1>
        <Link
          href={linkHref}
          className="inline-block bg-red-400 text-white font-semibold px-6 py-2 rounded"
        >
          {linkLabel}
        </Link>
      </div>
    </section>
  );
};

export default BannerSection;
