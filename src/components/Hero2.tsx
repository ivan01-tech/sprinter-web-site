// src/components/Hero2.tsx
import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero2: React.FC = () => {
  return (
    <section className="bg-white pt-20 relative">
      <div className="container mx-auto px-6">
        <div className="relative">
          <motion.div
            className="absolute left-0 top-0 h-full w-12 bg-red-400 hidden md:block"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className="relative w-full h-[60vh] md:h-[80vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e3d3d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team collaboration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button className="bg-white rounded-full p-6 shadow-lg hover:bg-gray-100 transition-colors">
                <FaPlay className="text-black text-2xl" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
