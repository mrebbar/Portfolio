"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type ProjectCardProps = {
  src: string | readonly string[];
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  const images = Array.isArray(src) ? src : [src];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#030014]/50 backdrop-blur-sm flex flex-col h-full hover:shadow-[#2A0E61]/50 transition-shadow duration-300 group"
    >
      {/* Aspect Video wrapper to ensure layout stability */}
      <div className="relative w-full aspect-video overflow-hidden bg-black/40">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} screenshot ${currentIndex + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 flex gap-1 z-10 bg-black/60 px-2 py-1 rounded-full">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? "bg-purple-500" : "bg-gray-400/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative p-4 flex-grow flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
