import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  imageUrl,
  link,
}) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
      {/* Image */}
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={350}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay on hover */}
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link href={link}>
          <div className="bg-white text-black p-4 rounded-lg flex justify-between items-center shadow-md">
            <div>
              <h4 className="text-lg font-bold">{title}</h4>
              <span className="text-sm text-gray-500">{category}</span>
            </div>
            <FaArrowRight className="text-red-100" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
